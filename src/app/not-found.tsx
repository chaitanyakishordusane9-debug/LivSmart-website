import React from "react";
import Link from "next/link";
import { Home, ArrowRight, Phone, Compass } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F3EF] bg-architectural-grid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#191919] text-[#E8792E] text-xs font-mono font-bold uppercase tracking-widest">
          Error 404 • Page Not Found
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191919] tracking-tight">
          This Blueprint Route Does Not Exist
        </h1>

        <p className="text-base text-[#191919]/75 max-w-xl mx-auto leading-relaxed">
          The page you are looking for may have been moved or the URL was typed
          incorrectly. Use the links below to explore{" "}
          <strong>{BUSINESS_INFO.fullName}</strong> services and project
          information.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#191919] hover:bg-[#191919]/90 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Compass className="w-4 h-4 text-[#E8792E]" />
            <span>Explore Services</span>
          </Link>

          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#191919]/20 hover:border-[#E8792E] text-[#191919] text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#E8792E]" />
          </Link>
        </div>

        <div className="pt-6 border-t border-[#191919]/10 text-xs text-[#191919]/70 flex items-center justify-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#E8792E]" />
          <span>
            Need immediate assistance? Call{" "}
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              className="font-bold text-[#191919] hover:text-[#E8792E]"
            >
              {BUSINESS_INFO.phones.primary.display}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

