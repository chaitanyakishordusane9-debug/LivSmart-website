import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Get a Project Quote — Civil Construction & Interior Estimate in Pune",
  description:
    "Request a project consultation and quotation from Livsmart Engineers & Contractors in Pune for bungalow construction, plot development, flat/office interiors, renovation, society maintenance, or painting.",
  alternates: {
    canonical: "/get-a-quote",
  },
};

export default function GetAQuotePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Get a Quote" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Project Consultation &amp; Estimate Request
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Request a Project Quotation
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              Provide your property location, required service category, and
              scope details below. You can also attach floor plans, architectural
              drawings, or site photographs for review by{" "}
              <strong>{BUSINESS_INFO.contactPerson.name}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Quote Form */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  Project Specification Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
                  Tell Us About Your Site &amp; Requirements
                </h2>
                <p className="text-sm text-[#191919]/75">
                  Fields marked with <span className="text-[#E8792E]">*</span>{" "}
                  are required. All submissions are validated and kept strictly
                  confidential.
                </p>
              </div>

              <ProjectEnquiryForm mode="quote" />
            </div>

            {/* Right Sidebar: How Quotations Work & Direct Channels */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#191919]/15 p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Our Quotation Process</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#191919]">
                  How We Prepare Accurate Estimates
                </h3>
                <ol className="space-y-4 text-xs text-[#191919]/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#E8792E] shrink-0">
                      01.
                    </span>
                    <span>
                      <strong>Initial Review:</strong>{" "}
                      {BUSINESS_INFO.contactPerson.name} reviews your submitted
                      scope, locality in Pune, and any attached drawings.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#E8792E] shrink-0">
                      02.
                    </span>
                    <span>
                      <strong>On-Site Inspection:</strong> For civil
                      construction, interiors, or society repairs, we schedule a
                      site visit to verify measurements and structural
                      conditions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#E8792E] shrink-0">
                      03.
                    </span>
                    <span>
                      <strong>Itemised Scope &amp; Quote:</strong> You receive a
                      clear breakdown of work items, material specifications,
                      and execution stages.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bg-[#191919] text-white p-6 sm:p-7 space-y-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  Prefer Immediate Discussion?
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  Call or WhatsApp {BUSINESS_INFO.contactPerson.name}
                </h3>
                <p className="text-xs text-[#A9A39B] leading-relaxed">
                  If you have urgent site requirements or prefer to share photos
                  directly over WhatsApp, reach out using the numbers below:
                </p>

                <div className="space-y-3 pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#E8792E]" />
                      <span>{BUSINESS_INFO.phones.primary.display}</span>
                    </span>
                    <span>Call</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#E8792E]" />
                      <span>{BUSINESS_INFO.phones.alternate.display}</span>
                    </span>
                    <span>Call</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#191919]/15 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919]">
                  <ShieldCheck className="w-4 h-4 text-[#E8792E]" />
                  <span>Data Privacy Commitment</span>
                </div>
                <p className="text-xs text-[#191919]/70 leading-relaxed">
                  Your contact information and architectural drawings are used
                  exclusively by {BUSINESS_INFO.fullName} to evaluate your
                  project and prepare a quotation. We never sell or share client
                  leads with third-party aggregators.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[11px] font-semibold text-[#191919]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8792E]" />
                  <span>Direct contractor consultation — no middlemen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

