import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Layers,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  BUSINESS_INFO,
  WHY_CHOOSE_ITEMS,
  WORKFLOW_STEPS,
  getWhatsAppUrl,
} from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "Why Choose Livsmart — Practical Civil & Interior Execution in Pune",
  description:
    "Discover why homeowners, commercial property owners, and housing societies in Pune work with Livsmart Engineers & Contractors: single-point accountability, integrated civil and interior execution, and clear scope definition.",
  alternates: {
    canonical: "/why-livsmart",
  },
};

export default function WhyLivsmartPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Why Choose Livsmart" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Working Principles &amp; Execution Approach
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Coordinated Civil Engineering &amp; Interior Execution Under One
              Roof
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              Construction and renovation projects succeed when scope is clear,
              trades are properly sequenced, and communication is direct. Here
              is how {BUSINESS_INFO.fullName} approaches every site in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Six Practical Differentiators
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#191919]">
              What Sets Our Contracting Approach Apart
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/75">
              Instead of exaggerated marketing claims, we focus on practical
              site discipline, clear documentation, and direct coordination with{" "}
              {BUSINESS_INFO.contactPerson.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#191919]/10 p-7 flex flex-col justify-between space-y-6 hover:border-[#E8792E] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#191919] text-[#E8792E]">
                      {item.number}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#E8792E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191919]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#191919]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#191919]/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8792E] mb-1">
                    Practical Site Benefit
                  </div>
                  <p className="text-xs text-[#191919]/70 leading-relaxed">
                    {item.practicalDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Value of Integrated Civil + Interior Contracting */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                <Layers className="w-4 h-4" />
                <span>Integrated Scope Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] leading-tight">
                Why Combining Civil &amp; Interior Work Reduces Rework
              </h2>
              <p className="text-sm sm:text-base text-[#191919]/75 leading-relaxed">
                When homeowners or commercial property owners hire separate
                civil contractors and interior decorators, friction often arises
                at handover points—such as plumbing concealed lines, wall
                plumbness for modular cabinetry, electrical point alignment, or
                waterproofing curing times.
              </p>
              <p className="text-sm sm:text-base text-[#191919]/75 leading-relaxed">
                As an <strong>Interior And Civil Contractor</strong>, Livsmart
                coordinates both stages so foundational civil work directly
                supports the final interior finishes.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  01 / Structural &amp; Masonry Alignment
                </span>
                <h3 className="text-base font-bold text-[#191919]">
                  Plaster &amp; Wall Precision for Joinery
                </h3>
                <p className="text-xs text-[#191919]/75 leading-relaxed">
                  Internal plastering, right-angle corners, and floor levels are
                  executed keeping wardrobe niches, modular kitchen counters,
                  and door frames in mind.
                </p>
              </div>

              <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  02 / Concealed Services Coordination
                </span>
                <h3 className="text-base font-bold text-[#191919]">
                  Electrical, Plumbing &amp; False Ceiling Sync
                </h3>
                <p className="text-xs text-[#191919]/75 leading-relaxed">
                  Wall chasing, plumbing pressure checks, and AC drainage
                  routing are completed before false ceiling, tiling, and putty
                  work begin.
                </p>
              </div>

              <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  03 / Moisture &amp; Surface Preparation
                </span>
                <h3 className="text-base font-bold text-[#191919]">
                  Dampness Remediation Before Painting
                </h3>
                <p className="text-xs text-[#191919]/75 leading-relaxed">
                  Instead of painting over damp patches, our civil team
                  identifies and treats leakage or plaster cracks before primer
                  and finish coats are applied.
                </p>
              </div>

              <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  04 / Unified Schedule &amp; Cost Control
                </span>
                <h3 className="text-base font-bold text-[#191919]">
                  One Quotation &amp; Single Supervision Line
                </h3>
                <p className="text-xs text-[#191919]/75 leading-relaxed">
                  Clear itemised scope prevents overlapping labour charges and
                  idle delays between civil masonry, tiling, carpentry, and
                  painting teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="py-16 sm:py-24 bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              <Compass className="w-4 h-4" />
              <span>How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Five-Stage Project Execution Process
            </h2>
            <p className="text-sm sm:text-base text-[#A9A39B]">
              Every assignment—from a single-room renovation to a full bungalow
              build or society painting project—follows a structured workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-extrabold text-[#E8792E] font-mono">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A9A39B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-4 border-t border-white/10">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11px] text-[#F5F3EF]/85"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8792E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Service Capabilities Links */}
      <section className="py-16 sm:py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Our Seven Core Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] mt-1">
                Explore Detailed Scope by Service Category
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="p-5 bg-white border border-[#191919]/10 hover:border-[#E8792E] transition-colors flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#E8792E]">
                    {service.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#191919]/60 group-hover:text-[#E8792E]">
                  <span>Inspect Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
              Ready to Discuss Your Construction or Interior Scope?
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70">
              Contact {BUSINESS_INFO.contactPerson.name} at our Sadashiv Peth
              office or schedule an on-site visit in Pune.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#191919] hover:bg-[#191919]/90 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#E8792E]" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#191919]/20 text-[#191919] text-xs font-bold uppercase tracking-wider hover:border-[#E8792E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8792E]" />
              <span>{BUSINESS_INFO.phones.primary.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

