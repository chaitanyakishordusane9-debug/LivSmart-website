import { NextRequest, NextResponse } from "next/server";
import {
  enquirySchema,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE_BYTES,
} from "@/lib/validation";

// Simple in-memory IP rate limiter (5 submissions per 10 minutes per IP)
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "local";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many enquiry requests from this connection. Please wait a few minutes or call +91 86980 81189 directly.",
        },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    let rawFields: Record<string, unknown> = {};
    let uploadedFileMeta: {
      name: string;
      type: string;
      sizeBytes: number;
    } | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      rawFields = {
        formType: formData.get("formType")?.toString() || "quote",
        fullName: formData.get("fullName")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        serviceRequired: formData.get("serviceRequired")?.toString() || "",
        projectLocation: formData.get("projectLocation")?.toString() || "",
        propertyType: formData.get("propertyType")?.toString() || "",
        projectArea: formData.get("projectArea")?.toString() || "",
        budgetRange: formData.get("budgetRange")?.toString() || "",
        expectedStartDate: formData.get("expectedStartDate")?.toString() || "",
        projectDescription:
          formData.get("projectDescription")?.toString() || "",
        consent: formData.get("consent") === "true",
        websiteUrlHoneypot:
          formData.get("websiteUrlHoneypot")?.toString() || "",
      };

      const attachment = formData.get("attachment");
      if (attachment && attachment instanceof File && attachment.size > 0) {
        if (!ALLOWED_FILE_TYPES.includes(attachment.type)) {
          return NextResponse.json(
            {
              success: false,
              message:
                "Unsupported file format. Please upload a PDF, JPG, PNG, or WebP file.",
              errors: {
                attachment:
                  "Unsupported file format. Allowed: PDF, JPG, PNG, WebP.",
              },
            },
            { status: 400 }
          );
        }

        if (attachment.size > MAX_FILE_SIZE_BYTES) {
          return NextResponse.json(
            {
              success: false,
              message:
                "Attached file exceeds the 5 MB limit. Please upload a smaller drawing or photograph.",
              errors: {
                attachment: "File size must be 5 MB or less.",
              },
            },
            { status: 400 }
          );
        }

        // Sanitize file name
        const safeName = attachment.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        uploadedFileMeta = {
          name: safeName,
          type: attachment.type,
          sizeBytes: attachment.size,
        };
      }
    } else {
      rawFields = await request.json();
    }

    // Silent rejection if honeypot field was filled by a bot
    if (
      typeof rawFields.websiteUrlHoneypot === "string" &&
      rawFields.websiteUrlHoneypot.length > 0
    ) {
      return NextResponse.json({
        success: true,
        enquiryId: "LIV-VERIFIED",
        message: "Thank you. Your enquiry has been recorded.",
      });
    }

    const parsed = enquirySchema.safeParse(rawFields);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() || "form";
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted fields and try again.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const enquiryId = `LIV-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Server-side optional webhook forwarding (never exposed to client bundle)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enquiryId,
            timestamp,
            ...parsed.data,
            attachment: uploadedFileMeta,
          }),
        });
      } catch (err) {
        console.error("Optional webhook forwarding failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      enquiryId,
      timestamp,
      message:
        "Thank you for contacting Livsmart Engineers & Contractors. Your project details have been validated and recorded.",
      summary: {
        fullName: parsed.data.fullName,
        serviceRequired: parsed.data.serviceRequired,
        projectLocation: parsed.data.projectLocation,
        attachmentName: uploadedFileMeta?.name || null,
      },
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We encountered a temporary issue processing your submission. Please call +91 86980 81189 or message us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

