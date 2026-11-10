import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
  UserCheck,
  Info,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Us — Sadashiv Peth, Kumthekar Road, Pune",
  description:
    "Contact Harshal Dusane at Livsmart Engineers & Contractors in Sadashiv Peth, Kumthekar Road, Pune. Call +91 86980 81189 or +91 86525 81189 for civil construction and interior enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Pune Office &amp; Direct Consultation
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get in Touch with {BUSINESS_INFO.fullName}
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              Speak directly with <strong>{BUSINESS_INFO.contactPerson.name}</strong>{" "}
              for residential bungalow construction, plot development,
              interior design, renovation, society maintenance, or professional
              painting across Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Enquiry Form Grid */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Person Card */}
              <div className="bg-[#191919] text-white p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8792E] text-white flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                      Direct Contact Person
                    </div>
                    <div className="text-xl font-extrabold text-white">
                      {BUSINESS_INFO.contactPerson.name}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#A9A39B] leading-relaxed">
                  {BUSINESS_INFO.fullName} — {BUSINESS_INFO.positioningLine}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Message on WhatsApp</span>
                  </a>
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/25 hover:border-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Detailed Quote Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Phones */}
              <div className="bg-white border border-[#191919]/15 p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  <Phone className="w-4 h-4" />
                  <span>Phone Numbers (Click to Call)</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 bg-[#F5F3EF] border border-[#191919]/10">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#191919]/60">
                        Primary Phone &amp; WhatsApp
                      </div>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                        className="text-base sm:text-lg font-extrabold text-[#191919] hover:text-[#E8792E] transition-colors"
                      >
                        {BUSINESS_INFO.phones.primary.display}
                      </a>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                      className="px-3 py-1.5 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8792E] transition-colors"
                    >
                      Call Now
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-[#F5F3EF] border border-[#191919]/10">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#191919]/60">
                        Alternate Phone
                      </div>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                        className="text-base sm:text-lg font-extrabold text-[#191919] hover:text-[#E8792E] transition-colors"
                      >
                        {BUSINESS_INFO.phones.alternate.display}
                      </a>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                      className="px-3 py-1.5 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8792E] transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="bg-white border border-[#191919]/15 p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  <Mail className="w-4 h-4" />
                  <span>Email Addresses</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#191919]/60">
                      Primary Business Email
                    </div>
                    <a
                      href={`mailto:${BUSINESS_INFO.emails.primary}`}
                      className="font-bold text-[#191919] hover:text-[#E8792E] break-all transition-colors"
                    >
                      {BUSINESS_INFO.emails.primary}
                    </a>
                  </div>
                  <div className="pt-2 border-t border-[#191919]/10">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#191919]/60">
                      Alternate Email
                    </div>
                    <a
                      href={`mailto:${BUSINESS_INFO.emails.alternate}`}
                      className="font-bold text-[#191919] hover:text-[#E8792E] break-all transition-colors"
                    >
                      {BUSINESS_INFO.emails.alternate}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address & Hours */}
              <div className="bg-white border border-[#191919]/15 p-6 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                    <MapPin className="w-4 h-4" />
                    <span>Office Address</span>
                  </div>
                  <address className="not-italic text-sm font-semibold text-[#191919] leading-relaxed">
                    {BUSINESS_INFO.address.line1},
                    <br />
                    {BUSINESS_INFO.address.line2},
                    <br />
                    {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode},{" "}
                    {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
                  </address>
                  <div className="pt-1">
                    <a
                      href={BUSINESS_INFO.map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#191919]/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                    <Clock className="w-4 h-4" />
                    <span>Consultation &amp; Office Hours</span>
                  </div>
                  <p className="text-xs font-semibold text-[#191919]">
                    {BUSINESS_INFO.businessHours.displayPlaceholder}
                  </p>
                  <p className="text-xs text-[#191919]/70">
                    {BUSINESS_INFO.businessHours.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#191919]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919]">
                    <Info className="w-4 h-4 text-[#E8792E]" />
                    <span>Social Media Profiles</span>
                  </div>
                  <p className="text-xs text-[#191919]/70 leading-relaxed">
                    Facebook and Instagram (
                    <strong>{BUSINESS_INFO.socialMedia.handleReference}</strong>
                    ) are referenced on our visiting card. Official profile URLs
                    are pending verification before active links are enabled.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Enquiry Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  Send a Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
                  Quick Project Enquiry Form
                </h2>
                <p className="text-sm text-[#191919]/75">
                  Share your contact details and project location below. Need to
                  upload drawings or specify area and budget? Use our{" "}
                  <Link
                    href="/get-a-quote"
                    className="text-[#E8792E] font-bold underline"
                  >
                    Full Project Quotation Form
                  </Link>
                  .
                </p>
              </div>

              <ProjectEnquiryForm mode="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Section */}
      <section className="bg-white border-t border-[#191919]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Location Map
              </span>
              <h2 className="text-2xl font-extrabold text-[#191919]">
                774, Sadashiv Peth, Garsole Sadan, Kumthekar Road, Pune – 411 030
              </h2>
              <p className="text-xs text-[#191919]/65">
                {BUSINESS_INFO.map.verificationNote}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#191919] hover:bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-[380px] sm:h-[440px] border border-[#191919]/15 bg-[#F5F3EF] overflow-hidden">
            <iframe
              title="Livsmart Engineers & Contractors Office Location — Sadashiv Peth, Kumthekar Road, Pune"
              src={BUSINESS_INFO.map.embedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

