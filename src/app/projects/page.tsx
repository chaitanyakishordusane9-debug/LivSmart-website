import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsFilterGrid } from "@/components/projects/ProjectsFilterGrid";
import {
  VERIFIED_PROJECTS,
  SHOWCASE_TEMPLATE_PROJECTS,
} from "@/data/projects";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Projects & Capability Showcase — Civil & Interior Work in Pune",
  description:
    "Explore Livsmart Engineers & Contractors project categories across bungalow construction, residential & commercial interiors, renovation, and housing society maintenance in Pune.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Portfolio &amp; Execution Structure
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Projects &amp; Capability Showcase
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              Filter by service category to see how Livsmart structures residential
              construction, interior fit-outs, civil renovations, and society
              maintenance work across Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsFilterGrid
            verifiedProjects={VERIFIED_PROJECTS}
            templateProjects={SHOWCASE_TEMPLATE_PROJECTS}
          />
        </div>
      </section>

      {/* Bottom Enquiry CTA */}
      <section className="py-16 sm:py-20 bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Want to Visit a Live or Completed Site in Pune?
            </h2>
            <p className="text-sm sm:text-base text-[#A9A39B]">
              Speak directly with {BUSINESS_INFO.contactPerson.name} to discuss
              past work references relevant to your construction or interior
              requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/25 text-white text-xs font-bold uppercase tracking-wider hover:border-[#E8792E] transition-colors"
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
