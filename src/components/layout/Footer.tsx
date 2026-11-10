import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  UserCheck,
} from "lucide-react";
import { LivsmartLogo } from "./LivsmartLogo";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";
import { FOOTER_QUICK_LINKS } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191919] text-[#F5F3EF] border-t border-white/10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <LivsmartLogo variant="light" />
            </Link>
            <div className="inline-block px-3 py-1 bg-[#E8792E]/15 border border-[#E8792E]/40 text-[#E8792E] text-xs font-semibold uppercase tracking-widest">
              {BUSINESS_INFO.positioningLine}
            </div>
            <p className="text-sm text-[#A9A39B] leading-relaxed max-w-sm">
              Civil contracting, plot infrastructure, residential & commercial
              interiors, building renovations, society maintenance, and
              professional painting solutions based in Pune, Maharashtra.
            </p>
            <div className="pt-2 space-y-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#F5F3EF]">
                <UserCheck className="w-4 h-4 text-[#E8792E]" />
                <span className="font-semibold">
                  Principal Contact: {BUSINESS_INFO.contactPerson.name}
                </span>
              </div>
              <p className="text-xs text-[#A9A39B]">
                Social Handle Reference:{" "}
                <span className="text-white font-medium">
                  {BUSINESS_INFO.socialMedia.handleReference}
                </span>{" "}
                <span className="text-[#A9A39B]/80">
                  (Facebook & Instagram URLs pending owner verification)
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: All 7 Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Our Services
            </h2>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-[#F5F3EF]/85 hover:text-[#E8792E] transition-colors"
                  >
                    <span className="text-xs font-mono text-[#E8792E]/80">
                      {service.number}
                    </span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Navigation
            </h2>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F3EF]/80 hover:text-[#E8792E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Pune Office & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Pune Office
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8792E] shrink-0 mt-1" />
                <address className="not-italic text-xs text-[#F5F3EF]/85 leading-relaxed">
                  {BUSINESS_INFO.address.line1},
                  <br />
                  {BUSINESS_INFO.address.line2},
                  <br />
                  {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode}
                </address>
              </div>

              <div className="space-y-1.5 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                  className="flex items-center gap-2 text-xs text-[#F5F3EF] hover:text-[#E8792E] transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8792E] shrink-0" />
                  <span>{BUSINESS_INFO.phones.primary.display}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
                  className="flex items-center gap-2 text-xs text-[#F5F3EF] hover:text-[#E8792E] transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8792E] shrink-0" />
                  <span>{BUSINESS_INFO.phones.alternate.display}</span>
                </a>
              </div>

              <div className="space-y-1.5 pt-1">
                <a
                  href={`mailto:${BUSINESS_INFO.emails.primary}`}
                  className="flex items-center gap-2 text-xs text-[#F5F3EF]/85 hover:text-[#E8792E] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8792E] shrink-0" />
                  <span>{BUSINESS_INFO.emails.primary}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.emails.alternate}`}
                  className="flex items-center gap-2 text-xs text-[#F5F3EF]/85 hover:text-[#E8792E] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8792E] shrink-0" />
                  <span>{BUSINESS_INFO.emails.alternate}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#E8792E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D0661E] transition-colors w-full justify-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="border-t border-white/10 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9A39B]">
          <p>
            © {currentYear} {BUSINESS_INFO.fullName}. All rights reserved. Pune,
            Maharashtra, India.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#E8792E] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#E8792E] transition-colors"
            >
              Contact & Location
            </Link>
            <Link
              href="/get-a-quote"
              className="hover:text-[#E8792E] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
