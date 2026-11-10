import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Handling & Enquiry Protection",
  description:
    "Privacy Policy for Livsmart Engineers & Contractors in Pune explaining how visitor enquiries, contact details, and uploaded project files are collected and used.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#A9A39B]">
            Effective for {BUSINESS_INFO.fullName} ({BUSINESS_INFO.address.city},{" "}
            {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country})
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-14 sm:py-20 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#191919]/15 p-7 sm:p-12 space-y-8 text-sm sm:text-base text-[#191919]/80 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                1. Overview &amp; Business Identity
              </h2>
              <p>
                This Privacy Policy explains how{" "}
                <strong>{BUSINESS_INFO.fullName}</strong> (&ldquo;Livsmart&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;),
                located at {BUSINESS_INFO.address.full}, collects, uses, and
                safeguards personal information submitted through this website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                2. Information We Collect
              </h2>
              <p>
                We collect only the information you voluntarily provide when
                submitting our Contact or Project Quotation forms, or when
                communicating with us via phone, WhatsApp, or email:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Full name and contact details (phone number, email address).</li>
                <li>
                  Project location/locality in Pune, property type, approximate
                  area, budget preferences, and timeline.
                </li>
                <li>
                  Project descriptions, scope requirements, and optional files
                  (such as floor plans, drawings, or site photographs) that you
                  choose to upload.
                </li>
                <li>
                  Basic technical request metadata (such as IP address) strictly
                  for spam prevention and rate-limiting security.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                3. How We Use Your Information
              </h2>
              <p>Your information is used strictly for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Responding to your construction, interior, renovation,
                  maintenance, or painting enquiry.
                </li>
                <li>
                  Scheduling site visits, consultations, and preparing itemised
                  project quotations.
                </li>
                <li>
                  Communicating project scope clarifications via phone,
                  WhatsApp, or email as consented by you.
                </li>
                <li>
                  Protecting our website against automated spam and malicious
                  submissions.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                4. Data Sharing &amp; Confidentiality
              </h2>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal
                contact details or project drawings to third-party lead
                aggregators or marketing agencies. Your enquiry information is
                accessed only by {BUSINESS_INFO.contactPerson.name} and
                authorized Livsmart project personnel involved in evaluating
                your work scope.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                5. Third-Party Services &amp; External Links
              </h2>
              <p>
                Our website includes direct links to WhatsApp (operated by Meta
                Platforms, Inc.) and embedded Google Maps (operated by Google
                LLC) to help you locate our Sadashiv Peth office or message us
                conveniently. Interacting with those external services is
                governed by their respective privacy policies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#191919]">
                6. Your Rights &amp; Contact Information
              </h2>
              <p>
                You may request access to, correction of, or deletion of any
                enquiry information you have shared with us by contacting:
              </p>
              <div className="p-5 bg-[#F5F3EF] border border-[#191919]/10 space-y-1 text-xs sm:text-sm">
                <div className="font-bold text-[#191919]">
                  {BUSINESS_INFO.fullName}
                </div>
                <div>Contact Person: {BUSINESS_INFO.contactPerson.name}</div>
                <div>Address: {BUSINESS_INFO.address.full}</div>
                <div>
                  Phone:{" "}
                  <a
                    href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                    className="text-[#E8792E] font-semibold"
                  >
                    {BUSINESS_INFO.phones.primary.display}
                  </a>{" "}
                  /{" "}
                  <a
                    href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                    className="text-[#E8792E] font-semibold"
                  >
                    {BUSINESS_INFO.phones.alternate.display}
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a
                    href={`mailto:${BUSINESS_INFO.emails.primary}`}
                    className="text-[#E8792E] font-semibold"
                  >
                    {BUSINESS_INFO.emails.primary}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#191919]/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
              >
                &larr; Return to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

