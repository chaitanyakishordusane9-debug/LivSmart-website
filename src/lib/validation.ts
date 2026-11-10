import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Building & Bungalow Construction",
  "Plot Development & Infrastructure",
  "Interior Design & Decoration",
  "Hotel, Flat & Office Interiors",
  "Renovation & Civil Work",
  "Society & Hotel Maintenance",
  "Professional Painting Work",
  "Multiple / Combined Civil & Interior Scope",
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  "Residential Plot / Land",
  "Independent Bungalow / Villa",
  "Residential Flat / Apartment",
  "Cooperative Housing Society",
  "Commercial Office / Retail",
  "Hotel / Hospitality Property",
  "Other Property Type",
] as const;

export const BUDGET_RANGE_OPTIONS = [
  "To be discussed after site inspection",
  "Under ₹5 Lakhs (Repairs / Painting / Minor Civil)",
  "₹5 Lakhs – ₹15 Lakhs (Renovation / Flat Interior)",
  "₹15 Lakhs – ₹40 Lakhs (Full Interior / Major Civil)",
  "₹40 Lakhs+ (Bungalow Construction / Commercial / Society Project)",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediate / Within 2 weeks",
  "Within 1 month",
  "1 – 3 months",
  "Planning stage (3+ months)",
] as const;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const indianPhoneRegex = /^(?:\+91[\-\s]?|91[\-\s]?|0)?[6-9]\d{4}[\-\s]?\d{5}$/;

export const enquirySchema = z.object({
  formType: z.enum(["contact", "quote"]),
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Name must be 100 characters or fewer."),
  phone: z
    .string()
    .trim()
    .regex(
      indianPhoneRegex,
      "Please enter a valid 10-digit Indian mobile number (e.g., +91 86980 81189)."
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  serviceRequired: z
    .string()
    .trim()
    .min(2, "Please select the primary service required."),
  projectLocation: z
    .string()
    .trim()
    .min(2, "Please enter the project area or locality (e.g., Kothrud, Pune).")
    .max(150, "Location must be 150 characters or fewer."),
  propertyType: z.string().trim().optional().or(z.literal("")),
  projectArea: z
    .string()
    .trim()
    .max(80, "Area description is too long.")
    .optional()
    .or(z.literal("")),
  budgetRange: z.string().trim().optional().or(z.literal("")),
  expectedStartDate: z.string().trim().optional().or(z.literal("")),
  projectDescription: z
    .string()
    .trim()
    .min(
      10,
      "Please share a brief description of your requirements (at least 10 characters)."
    )
    .max(2500, "Description must be 2500 characters or fewer."),
  consent: z.literal(true, {
    errorMap: () => ({
      message:
        "Please confirm consent for Livsmart Engineers & Contractors to contact you regarding this enquiry.",
    }),
  }),
  // Honeypot spam field — must remain empty
  websiteUrlHoneypot: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;

