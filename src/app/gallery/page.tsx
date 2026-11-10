import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGridLightbox } from "@/components/gallery/GalleryGridLightbox";
import { GALLERY_ITEMS } from "@/data/gallery";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "Work Gallery — Construction, Interiors, Renovation & Painting",
  description:
    "Browse architectural and interior work categories executed by Livsmart Engineers & Contractors in Pune: building construction, interiors, civil renovation, society maintenance, and painting.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Visual Reference &amp; Site Work Categories
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Construction, Interior &amp; Finishing Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              Explore visual categories across residential bungalow
              construction, plot infrastructure, custom interiors, civil
              renovation, and professional painting work in Pune. Click any
              image to inspect in full-screen lightbox view.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid & Lightbox */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGridLightbox items={GALLERY_ITEMS} />
        </div>
      </section>

      {/* Visiting Card Reference Section */}
      <section className="py-16 bg-white border-t border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Planning a Similar Project in Pune?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
              Request an On-Site Consultation &amp; Quotation
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70">
              Share your architectural drawings, room measurements, or repair
              requirements with {BUSINESS_INFO.contactPerson.name} for a
              practical assessment.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Get a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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

