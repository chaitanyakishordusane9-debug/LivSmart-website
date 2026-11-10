"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/business";
import { getServiceBySlug } from "@/data/services";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  // Check if user is viewing a specific service detail page to supply a service-specific message
  let customMessage: string | undefined;
  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").split("/")[0];
    const matchedService = getServiceBySlug(slug);
    if (matchedService) {
      customMessage = matchedService.whatsappPrefill;
    }
  }

  const whatsappHref = getWhatsAppUrl(customMessage);

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Livsmart Engineers & Contractors on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#191919] hover:bg-[#E8792E] text-white border border-white/15 px-4 py-3 shadow-lg transition-all duration-200"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8792E] group-hover:bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8792E] group-hover:bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-[#E8792E] group-hover:text-white transition-colors" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          WhatsApp Enquiry
        </span>
      </a>
    </div>
  );
}
