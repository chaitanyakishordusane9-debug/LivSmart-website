import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageSquare,
  Phone,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Our Services — Civil Construction, Interiors, Renovation & Painting",
  description:
    "Explore all seven contracting services offered by Livsmart Engineers & Contractors in Pune: building & bungalow construction, plot development, interior design, hotel/flat/office interiors, renovation, society maintenance, and painting.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Seven Core Capabilities
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Comprehensive Civil &amp; Interior Contracting in Pune
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              From raw plot infrastructure and independent bungalow construction
              to turnkey residential/commercial interiors, structural
              renovations, society upkeep, and professional painting.
            </p>
          </div>
        </div>
      </section>

      {/* Representative Imagery Notice */}
      <div className="bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2.5 text-xs text-[#191919]/75">
          <Info className="w-4 h-4 text-[#E8792E] shrink-0" />
          <span>
            Service illustrations use representative architectural photography
            to depict discipline categories. Final scope and project deliverables
            are customized per site inspection.
          </span>
        </div>
      </div>

      {/* All 7 Services Editorial Cards */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                className="bg-white border border-[#191919]/10 overflow-hidden shadow-2xs hover:border-[#E8792E] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-[#191919] ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#191919] text-[#E8792E] font-mono text-xs font-bold">
                        {service.number}
                      </span>
                      <span className="px-3 py-1 bg-white/95 text-[#191919] text-xs font-semibold uppercase tracking-wider">
                        {service.categoryTag}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-[#E8792E] font-semibold">
                        {service.cardHeadline}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
                        <Link
                          href={`/services/${service.slug}`}
                          className="hover:text-[#E8792E] transition-colors"
                        >
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Key Scope Highlights */}
                      <div className="pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#191919] mb-2.5">
                          Typical Scope Highlights:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.scopeOfWork.slice(0, 4).map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-[#191919]/75"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8792E] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Dual CTAs: Explore Service + Enquiry CTA */}
                    <div className="pt-5 border-t border-[#191919]/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-3 bg-[#191919] hover:bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/get-a-quote?service=${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          <span>Enquire / Quote</span>
                        </Link>
                      </div>

                      <a
                        href={getWhatsAppUrl(service.whatsappPrefill)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191919] hover:text-[#E8792E] transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#E8792E]" />
                        <span>WhatsApp About This Service</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-16 sm:py-20 bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Combination of Civil &amp; Interior Work?
            </h2>
            <p className="text-sm sm:text-base text-[#A9A39B]">
              Many projects combine civil renovation, waterproofing, carpentry,
              and painting. Contact {BUSINESS_INFO.contactPerson.name} for a
              consolidated site evaluation and quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Request Custom Quote</span>
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
