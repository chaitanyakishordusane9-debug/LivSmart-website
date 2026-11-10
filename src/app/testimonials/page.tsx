import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquareQuote,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { VERIFIED_TESTIMONIALS } from "@/data/testimonials";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews — Verified Customer Feedback",
  description:
    "Read verified customer feedback for Livsmart Engineers & Contractors in Pune. We publish only genuine, client-approved testimonials for our civil construction and interior work.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  const hasTestimonials = VERIFIED_TESTIMONIALS.length > 0;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8792E]/20 border border-[#E8792E]/40 text-[#E8792E] text-xs font-bold uppercase tracking-widest">
              Verified Client Feedback Policy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Client Testimonials &amp; Project References
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EF]/80 leading-relaxed">
              We believe trust in construction and interior contracting is built
              on real work and honest references—never fabricated quotes or
              anonymous star ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_TESTIMONIALS.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-[#191919]/10 p-7 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <MessageSquareQuote className="w-8 h-8 text-[#E8792E]" />
                    <blockquote className="text-sm sm:text-base text-[#191919]/85 leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="pt-4 border-t border-[#191919]/10">
                    <div className="font-bold text-[#191919]">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-[#191919]/65">
                      {item.propertyType} • {item.location}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E8792E]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.serviceCategory}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white border border-[#191919]/15 p-8 sm:p-12 space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#191919]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E8792E]/10 border border-[#E8792E]/30 flex items-center justify-center text-[#E8792E]">
                    <MessageSquareQuote className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                      Publication Status
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
                      Verified Client Feedback Coming Soon
                    </h2>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#F5F3EF] border border-[#191919]/15 text-[11px] font-bold uppercase tracking-wider text-[#191919]">
                  Awaiting Client Consent
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                <p>
                  In accordance with our strict content accuracy standards,{" "}
                  <strong>{BUSINESS_INFO.fullName}</strong> does not publish
                  placeholder reviews, stock client portraits, or unverified
                  ratings.
                </p>
                <p>
                  We are currently compiling signed client permissions from
                  homeowners, commercial establishments, and cooperative housing
                  societies in Pune so that every published testimonial includes
                  authentic project context.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919]">
                    <ShieldAlert className="w-4 h-4 text-[#E8792E]" />
                    <span>Request Direct Client References</span>
                  </div>
                  <p className="text-xs text-[#191919]/75 leading-relaxed">
                    Evaluating Livsmart for a bungalow build, interior fit-out,
                    or society maintenance contract? Speak directly with{" "}
                    <strong>{BUSINESS_INFO.contactPerson.name}</strong> during
                    your consultation to discuss relevant past work in Pune.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
                    >
                      <span>Schedule Reference Discussion</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 bg-[#F5F3EF] border border-[#191919]/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919]">
                    <CheckCircle2 className="w-4 h-4 text-[#E8792E]" />
                    <span>Existing Livsmart Client?</span>
                  </div>
                  <p className="text-xs text-[#191919]/75 leading-relaxed">
                    If we have completed construction, renovation, interior, or
                    painting work for your property, we would be grateful to
                    record your feedback for our website portfolio.
                  </p>
                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(
                        "Hello Harshal, I would like to share feedback on the work completed by Livsmart Engineers & Contractors."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
                    >
                      <span>Share Feedback via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Discuss Your Project Directly with {BUSINESS_INFO.contactPerson.name}
            </h2>
            <p className="text-sm sm:text-base text-[#A9A39B]">
              Reach out by phone, WhatsApp, or visit our office at Sadashiv
              Peth, Kumthekar Road, Pune.
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
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/25 text-white text-xs font-bold uppercase tracking-wider hover:border-[#E8792E] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#E8792E]" />
              <span>WhatsApp Enquiry</span>
            </a>
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

