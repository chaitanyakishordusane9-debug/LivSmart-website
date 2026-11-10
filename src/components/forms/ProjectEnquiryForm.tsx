"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  X,
  MessageSquare,
  Phone,
  Loader2,
} from "lucide-react";
import {
  enquirySchema,
  SERVICE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  TIMELINE_OPTIONS,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE_BYTES,
} from "@/lib/validation";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

interface ProjectEnquiryFormProps {
  mode: "contact" | "quote";
  defaultService?: string;
}

export function ProjectEnquiryForm({
  mode,
  defaultService = "",
}: ProjectEnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceRequired, setServiceRequired] = useState(defaultService);
  const [projectLocation, setProjectLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [projectArea, setProjectArea] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [expectedStartDate, setExpectedStartDate] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [consent, setConsent] = useState(false);
  const [websiteUrlHoneypot, setWebsiteUrlHoneypot] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    enquiryId: string;
    fullName: string;
    phone: string;
    serviceRequired: string;
    projectLocation: string;
    projectDescription: string;
    attachmentName: string | null;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setErrors((prev) => {
      const next = { ...prev };
      delete next.attachment;
      return next;
    });

    if (!file) {
      setAttachment(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        attachment:
          "Unsupported file format. Please choose a PDF, JPG, PNG, or WebP file.",
      }));
      e.target.value = "";
      setAttachment(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        attachment:
          "File exceeds the 5 MB limit. Please choose a smaller drawing or photo.",
      }));
      e.target.value = "";
      setAttachment(null);
      return;
    }

    setAttachment(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage(null);
    setErrors({});

    const payload = {
      formType: mode,
      fullName,
      phone,
      email,
      serviceRequired,
      projectLocation,
      propertyType,
      projectArea,
      budgetRange,
      expectedStartDate,
      projectDescription,
      consent: consent as true,
      websiteUrlHoneypot,
    };

    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() || "form";
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setFormMessage("Please review the highlighted fields below.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("formType", mode);
      formData.append("fullName", fullName);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("serviceRequired", serviceRequired);
      formData.append("projectLocation", projectLocation);
      formData.append("propertyType", propertyType);
      formData.append("projectArea", projectArea);
      formData.append("budgetRange", budgetRange);
      formData.append("expectedStartDate", expectedStartDate);
      formData.append("projectDescription", projectDescription);
      formData.append("consent", consent ? "true" : "false");
      formData.append("websiteUrlHoneypot", websiteUrlHoneypot);
      if (attachment) {
        formData.append("attachment", attachment);
      }

      const response = await fetch("/api/enquiries", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        }
        setFormMessage(
          result.message ||
            "Unable to submit your enquiry right now. Please try again or call us directly."
        );
        setIsSubmitting(false);
        return;
      }

      setSubmittedData({
        enquiryId: result.enquiryId,
        fullName,
        phone,
        serviceRequired,
        projectLocation,
        projectDescription,
        attachmentName: attachment ? attachment.name : null,
      });
      setIsSubmitting(false);
    } catch {
      setFormMessage(
        "Network error while submitting your enquiry. Please check your connection or contact us via phone or WhatsApp."
      );
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    const whatsappFollowUp = getWhatsAppUrl(
      `Hello Livsmart (Ref: ${submittedData.enquiryId}), I just submitted an enquiry on your website.\n\nName: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nService: ${submittedData.serviceRequired}\nLocation: ${submittedData.projectLocation}\nDetails: ${submittedData.projectDescription}`
    );

    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border-2 border-[#E8792E] p-7 sm:p-10 space-y-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#E8792E] text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8792E]">
              Enquiry Recorded • Ref #{submittedData.enquiryId}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
              Thank You, {submittedData.fullName}
            </h3>
            <p className="text-sm text-[#191919]/75 leading-relaxed">
              Your {mode === "quote" ? "project quotation request" : "enquiry"}{" "}
              for <strong>{submittedData.serviceRequired}</strong> in{" "}
              <strong>{submittedData.projectLocation}</strong> has been
              received.
            </p>
          </div>
        </div>

        <div className="p-5 bg-[#F5F3EF] border border-[#191919]/10 space-y-2 text-xs text-[#191919]/80">
          <div className="font-bold uppercase tracking-wider text-[#191919]">
            What Happens Next?
          </div>
          <p>
            <strong>{BUSINESS_INFO.contactPerson.name}</strong> will review your
            requirements and contact you on{" "}
            <strong>{submittedData.phone}</strong>. For faster coordination or
            to share additional site photos immediately, you can also send this
            summary directly on WhatsApp below.
          </p>
          {submittedData.attachmentName && (
            <p className="text-[#E8792E] font-semibold">
              Attached file validated: {submittedData.attachmentName}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={whatsappFollowUp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Summary on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#191919]/90 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E8792E]" />
            <span>Call {BUSINESS_INFO.phones.primary.display}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setFullName("");
              setPhone("");
              setEmail("");
              setProjectLocation("");
              setProjectDescription("");
              setAttachment(null);
              setConsent(false);
            }}
            className="inline-flex items-center gap-2 px-4 py-3 border border-[#191919]/20 text-[#191919] text-xs font-bold uppercase tracking-wider hover:border-[#E8792E] transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#191919]/15 p-6 sm:p-10 space-y-6"
    >
      {formMessage && (
        <div
          role="alert"
          className="p-4 bg-[#E8792E]/10 border-l-4 border-[#E8792E] flex items-start gap-3 text-xs sm:text-sm text-[#191919]"
        >
          <AlertCircle className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
          <span>{formMessage}</span>
        </div>
      )}

      {/* Honeypot field hidden from screen readers and human users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrlHoneypot">Website URL</label>
        <input
          id="websiteUrlHoneypot"
          name="websiteUrlHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={websiteUrlHoneypot}
          onChange={(e) => setWebsiteUrlHoneypot(e.target.value)}
        />
      </div>

      {/* Primary Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Full Name <span className="text-[#E8792E]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g., Rajesh Kulkarni"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors ${
              errors.fullName ? "border-red-600" : "border-[#191919]/20"
            }`}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1.5 text-xs text-red-700 font-medium"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Phone / WhatsApp Number <span className="text-[#E8792E]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g., +91 98220 XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors ${
              errors.phone ? "border-red-600" : "border-[#191919]/20"
            }`}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1.5 text-xs text-red-700 font-medium"
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Email Address{" "}
            <span className="text-[#191919]/50 font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors ${
              errors.email ? "border-red-600" : "border-[#191919]/20"
            }`}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-xs text-red-700 font-medium"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Service Required <span className="text-[#E8792E]">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            required
            value={serviceRequired}
            onChange={(e) => setServiceRequired(e.target.value)}
            aria-invalid={!!errors.serviceRequired}
            aria-describedby={
              errors.serviceRequired ? "serviceRequired-error" : undefined
            }
            className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] focus:bg-white transition-colors ${
              errors.serviceRequired ? "border-red-600" : "border-[#191919]/20"
            }`}
          >
            <option value="">Select a service category...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p
              id="serviceRequired-error"
              className="mt-1.5 text-xs text-red-700 font-medium"
            >
              {errors.serviceRequired}
            </p>
          )}
        </div>
      </div>

      {/* Location & Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="projectLocation"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Project Location / Area in Pune{" "}
            <span className="text-[#E8792E]">*</span>
          </label>
          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            required
            placeholder="e.g., Sadashiv Peth, Kothrud, Baner, Wakad"
            value={projectLocation}
            onChange={(e) => setProjectLocation(e.target.value)}
            aria-invalid={!!errors.projectLocation}
            aria-describedby={
              errors.projectLocation ? "projectLocation-error" : undefined
            }
            className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors ${
              errors.projectLocation ? "border-red-600" : "border-[#191919]/20"
            }`}
          />
          {errors.projectLocation && (
            <p
              id="projectLocation-error"
              className="mt-1.5 text-xs text-red-700 font-medium"
            >
              {errors.projectLocation}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="propertyType"
            className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
          >
            Property Type{" "}
            <span className="text-[#191919]/50 font-normal">(Optional)</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-3 bg-[#F5F3EF] border border-[#191919]/20 text-sm text-[#191919] focus:bg-white transition-colors"
          >
            <option value="">Select property type...</option>
            {PROPERTY_TYPE_OPTIONS.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Extended Quote Fields */}
      {mode === "quote" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 border-t border-[#191919]/10">
            <div>
              <label
                htmlFor="projectArea"
                className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
              >
                Approx. Area{" "}
                <span className="text-[#191919]/50 font-normal">
                  (Optional)
                </span>
              </label>
              <input
                id="projectArea"
                name="projectArea"
                type="text"
                placeholder="e.g., 1,200 sq.ft. / 2 BHK"
                value={projectArea}
                onChange={(e) => setProjectArea(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F3EF] border border-[#191919]/20 text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="budgetRange"
                className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
              >
                Estimated Budget{" "}
                <span className="text-[#191919]/50 font-normal">
                  (Optional)
                </span>
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F3EF] border border-[#191919]/20 text-sm text-[#191919] focus:bg-white transition-colors"
              >
                <option value="">Select budget range...</option>
                {BUDGET_RANGE_OPTIONS.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="expectedStartDate"
                className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
              >
                Expected Start Timeline
              </label>
              <select
                id="expectedStartDate"
                name="expectedStartDate"
                value={expectedStartDate}
                onChange={(e) => setExpectedStartDate(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F3EF] border border-[#191919]/20 text-sm text-[#191919] focus:bg-white transition-colors"
              >
                <option value="">Select timeline...</option>
                {TIMELINE_OPTIONS.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Optional File Upload */}
          <div>
            <label
              htmlFor="attachment"
              className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
            >
              Upload Floor Plan, Drawing, or Site Photo{" "}
              <span className="text-[#191919]/50 font-normal">
                (Optional — PDF, JPG, PNG, WebP up to 5 MB)
              </span>
            </label>
            <div className="relative">
              <input
                id="attachment"
                name="attachment"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={handleFileChange}
                className="block w-full text-xs text-[#191919]/80 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-[#191919] file:text-white hover:file:bg-[#E8792E] file:cursor-pointer bg-[#F5F3EF] border border-[#191919]/20 p-2"
              />
            </div>
            {attachment && (
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F3EF] border border-[#191919]/15 text-xs text-[#191919]">
                <FileText className="w-3.5 h-3.5 text-[#E8792E]" />
                <span className="font-medium">{attachment.name}</span>
                <span className="text-[#191919]/50">
                  ({(attachment.size / 1024 / 1024).toFixed(2)} MB)
                </span>
                <button
                  type="button"
                  onClick={() => setAttachment(null)}
                  aria-label="Remove selected file"
                  className="ml-1 text-[#191919]/60 hover:text-red-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            {errors.attachment && (
              <p className="mt-1.5 text-xs text-red-700 font-medium">
                {errors.attachment}
              </p>
            )}
          </div>
        </>
      )}

      {/* Project Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-xs font-bold uppercase tracking-wider text-[#191919] mb-2"
        >
          Project Description &amp; Requirements{" "}
          <span className="text-[#E8792E]">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          required
          placeholder="Tell us about your plot, bungalow construction, flat interior, renovation, painting, or society maintenance requirements..."
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          aria-invalid={!!errors.projectDescription}
          aria-describedby={
            errors.projectDescription ? "projectDescription-error" : undefined
          }
          className={`w-full px-4 py-3 bg-[#F5F3EF] border text-sm text-[#191919] placeholder:text-[#191919]/40 focus:bg-white transition-colors ${
            errors.projectDescription
              ? "border-red-600"
              : "border-[#191919]/20"
          }`}
        />
        {errors.projectDescription && (
          <p
            id="projectDescription-error"
            className="mt-1.5 text-xs text-red-700 font-medium"
          >
            {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 w-4 h-4 accent-[#E8792E] border-[#191919]/30"
          />
          <span className="text-xs text-[#191919]/75 leading-relaxed">
            I consent to <strong>{BUSINESS_INFO.fullName}</strong> contacting me
            by phone, WhatsApp, or email regarding this enquiry. Read our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#E8792E] font-semibold underline"
            >
              Privacy Policy
            </Link>
            . <span className="text-[#E8792E]">*</span>
          </span>
        </label>
        {errors.consent && (
          <p
            id="consent-error"
            className="mt-1.5 text-xs text-red-700 font-medium"
          >
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Action */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E8792E] hover:bg-[#D0661E] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>
                {mode === "quote"
                  ? "Submit Project Quote Request"
                  : "Send Enquiry"}
              </span>
            </>
          )}
        </button>

        <div className="text-[11px] text-[#191919]/60 flex items-center gap-2">
          <Upload className="w-3.5 h-3.5 text-[#E8792E] shrink-0" />
          <span>
            Direct contact: <strong>{BUSINESS_INFO.phones.primary.display}</strong>
          </span>
        </div>
      </div>
    </form>
  );
}

