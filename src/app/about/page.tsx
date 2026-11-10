import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  Building2,
  Compass,
  Info,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BUSINESS_INFO, WORKFLOW_STEPS, getWhatsAppUrl } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us — Civil & Interior Contractors in Pune",
  description:
    "Learn about Livsmart Engineers & Contractors, led by Harshal Dusane at Sadashiv Peth, Pune. Discover our civil engineering, interior contracting approach, and working process.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              {BUSINESS_INFO.positioningLine}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Practical Engineering &amp; Thoughtful Interiors Under One Roof
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              {BUSINESS_INFO.fullName} is a Pune-based contracting practice
              delivering residential construction, plot development, commercial
              and residential interiors, structural renovations, society
              maintenance, and professional painting.
            </p>
          </div>
        </div>
      </section>

      {/* Business Introduction & Philosophy */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Company Overview
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
                Bridging Civil Construction and Interior Execution
              </h2>
              <p className="text-base text-[#191919]/80 leading-relaxed">
                Property owners in Pune often face coordination gaps when hiring
                separate contractors for structural civil work and interior
                finishing. At <strong>{BUSINESS_INFO.fullName}</strong>, our
                practice brings both capabilities together—allowing foundational
                civil work, masonry, waterproofing, plumbing/electrical layouts,
                custom carpentry, and final paint finishes to be planned and
                supervised as a single cohesive workflow.
              </p>
              <p className="text-base text-[#191919]/80 leading-relaxed">
                Operating from our office at{" "}
                <strong>
                  774, Sadashiv Peth, Garsole Sadan, Kumthekar Road, Pune –
                  411 030
                </strong>
                , we work closely with homeowners, architects, commercial business
                owners, hotel operators, and cooperative housing society
                committees to execute projects with clear scope definition and
                disciplined site management.
              </p>

              {/* Service Philosophy Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="bg-white p-6 border border-[#191919]/10 space-y-2">
                  <Compass className="w-6 h-6 text-[#E8792E]" />
                  <h3 className="text-base font-bold text-[#191919]">
                    Clarity Before Mobilization
                  </h3>
                  <p className="text-xs text-[#191919]/75 leading-relaxed">
                    Every project starts with an on-site inspection and a clear
                    discussion of scope, materials, and practical considerations
                    so expectations are aligned from day one.
                  </p>
                </div>
                <div className="bg-white p-6 border border-[#191919]/10 space-y-2">
                  <Building2 className="w-6 h-6 text-[#E8792E]" />
                  <h3 className="text-base font-bold text-[#191919]">
                    Foundational Quality
                  </h3>
                  <p className="text-xs text-[#191919]/75 leading-relaxed">
                    Whether casting RCC slabs, waterproofing a society terrace,
                    or preparing interior walls for painting, we prioritize
                    substrate preparation and durable workmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership & Verified Card Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#191919]/15 p-7 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-start justify-between border-b border-[#191919]/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                      Leadership &amp; Primary Contact
                    </p>
                    <h3 className="text-2xl font-bold text-[#191919] mt-1">
                      {BUSINESS_INFO.contactPerson.name}
                    </h3>
                    <p className="text-xs text-[#191919]/70 mt-0.5">
                      {BUSINESS_INFO.fullName} — {BUSINESS_INFO.positioningLine}
                    </p>
                  </div>
                  <div className="p-3 bg-[#F5F3EF] border border-[#191919]/10">
                    <UserCheck className="w-6 h-6 text-[#E8792E]" />
                  </div>
                </div>

                <p className="text-sm text-[#191919]/80 leading-relaxed">
                  Harshal Dusane serves as the primary point of contact for
                  client consultations, site evaluations, scope estimation, and
                  project coordination across all civil and interior engagements.
                </p>

                <div className="space-y-3 pt-2 border-t border-[#191919]/10 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E8792E] shrink-0 mt-1" />
                    <span className="text-xs text-[#191919]/80">
                      {BUSINESS_INFO.address.full}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E8792E] shrink-0" />
                    <div className="text-xs space-x-2">
                      <a
                        href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                        className="font-semibold text-[#191919] hover:text-[#E8792E]"
                      >
                        {BUSINESS_INFO.phones.primary.display}
                      </a>
                      <span className="text-[#191919]/30">|</span>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                        className="font-semibold text-[#191919] hover:text-[#E8792E]"
                      >
                        {BUSINESS_INFO.phones.alternate.display}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#E8792E] shrink-0" />
                    <a
                      href={`mailto:${BUSINESS_INFO.emails.primary}`}
                      className="text-xs font-semibold text-[#191919] hover:text-[#E8792E] break-all"
                    >
                      {BUSINESS_INFO.emails.primary}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/get-a-quote"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visiting Card Reference Preview */}
              <div className="bg-white border border-[#191919]/10 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#191919]">
                    Official Business Card Reference
                  </span>
                  <span className="text-[11px] font-mono text-[#E8792E]">
                    Verified Source
                  </span>
                </div>
                <div className="relative h-48 w-full overflow-hidden border border-[#191919]/10 bg-[#F5F3EF]">
                  <Image
                    src="/images/brand/visiting-card-reference.jpg"
                    alt="Livsmart Engineers And Contractors official visiting card showing Harshal Dusane contact information and 7 services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Marked for Owner Confirmation per Spec 5.2) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-4 bg-[#F5F3EF] border-l-4 border-[#E8792E] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
            <p className="text-xs text-[#191919]/80">
              <strong>Editorial Note:</strong> The Vision &amp; Mission
              statements below reflect Livsmart&apos;s core service positioning
              and are presented for final phrasing confirmation by the business
              owner before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F3EF] border border-[#191919]/10 p-8 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#E8792E] font-bold">
                01 / Our Mission
              </p>
              <h2 className="text-2xl font-bold text-[#191919]">
                Delivering Dependable Civil &amp; Interior Execution
              </h2>
              <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                To provide homeowners, businesses, and housing societies in Pune
                with well-coordinated civil construction, functional interior
                solutions, and timely property maintenance—grounded in clear
                scope discussions, practical engineering, and durable finishing.
              </p>
            </div>

            <div className="bg-[#F5F3EF] border border-[#191919]/10 p-8 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#E8792E] font-bold">
                02 / Our Vision
              </p>
              <h2 className="text-2xl font-bold text-[#191919]">
                A Trusted Single-Window Contracting Partner in Pune
              </h2>
              <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                To be recognized across Pune for straightforward communication,
                sound civil workmanship, and well-finished residential and
                commercial spaces where clients can rely on one accountable team
                from plot preparation through final interior handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-16 sm:py-24 bg-[#191919] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Our Working Process
            </p>
            <h2 className="text-3xl font-bold text-white">
              How We Take Projects From Enquiry to Handover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white/5 border border-white/10 p-6 space-y-3"
              >
                <span className="text-xl font-mono font-bold text-[#E8792E]">
                  {step.stepNumber}
                </span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-[#F5F3EF]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & All 7 Capabilities */}
      <section className="py-16 sm:py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Service Area &amp; Reach
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
                Serving Central Pune &amp; Surrounding Areas
              </h2>
              <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                {BUSINESS_INFO.serviceRegion.coverageNote}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8792E] transition-colors"
                >
                  <span>Contact Our Pune Office</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#191919] text-[#191919] text-xs font-bold uppercase tracking-wider hover:bg-[#191919] hover:text-white transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#191919]/10 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#191919] mb-4">
                Complete Service Catalogue
              </h3>
              <ul className="space-y-2.5">
                {SERVICES_DATA.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between py-1.5 border-b border-[#191919]/10 text-sm font-medium text-[#191919] hover:text-[#E8792E] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8792E]" />
                        <span>{s.title}</span>
                      </span>
                      <span className="text-xs font-mono text-[#191919]/50">
                        Explore →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
