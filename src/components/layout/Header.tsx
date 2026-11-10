"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { LivsmartLogo } from "./LivsmartLogo";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";
import { MAIN_NAVIGATION } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#191919]/10"
          : "bg-white border-b border-[#191919]/10"
      }`}
    >
      {/* Top Architecture Utility Bar */}
      <div className="bg-[#191919] text-[#F5F3EF] text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              className="inline-flex items-center gap-1.5 hover:text-[#E8792E] transition-colors whitespace-nowrap font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8792E]" />
              <span>{BUSINESS_INFO.phones.primary.display}</span>
            </a>
            <span className="text-white/25 hidden sm:inline">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phones.alternate.tel}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#E8792E] transition-colors whitespace-nowrap"
            >
              <span>{BUSINESS_INFO.phones.alternate.display}</span>
            </a>
            <span className="text-white/25 hidden md:inline">|</span>
            <a
              href={`mailto:${BUSINESS_INFO.emails.primary}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#E8792E] transition-colors truncate"
            >
              <Mail className="w-3.5 h-3.5 text-[#E8792E]" />
              <span>{BUSINESS_INFO.emails.primary}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[#A9A39B]">
            <MapPin className="w-3.5 h-3.5 text-[#E8792E]" />
            <span>{BUSINESS_INFO.address.shortArea}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Livsmart Engineers & Contractors — Home"
          >
            <LivsmartLogo variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {MAIN_NAVIGATION.map((item) => {
              if (item.children) {
                const active = isActive(item.href);
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "text-[#E8792E] font-semibold"
                            : "text-[#191919] hover:text-[#E8792E]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setServicesDropdownOpen((prev) => !prev)
                        }
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        aria-label="Toggle Services Menu"
                        className="p-1 text-[#191919] hover:text-[#E8792E] transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#E8792E]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-[540px] z-50">
                        <div className="bg-white border border-[#191919]/15 shadow-xl p-5">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#191919]/10">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-[#E8792E]">
                                Civil & Interior Capabilities
                              </p>
                              <p className="text-xs text-[#191919]/70">
                                7 specialized contracting services across Pune
                              </p>
                            </div>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#191919] hover:text-[#E8792E] transition-colors"
                            >
                              <span>View All Services</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-1 gap-1.5">
                            {item.children.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`group flex items-start gap-3 p-2.5 transition-colors ${
                                  pathname === service.href
                                    ? "bg-[#F5F3EF] border-l-2 border-[#E8792E]"
                                    : "hover:bg-[#F5F3EF]"
                                }`}
                              >
                                <span className="text-xs font-mono font-bold text-[#E8792E] mt-0.5">
                                  {service.number}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                                    {service.label}
                                  </p>
                                  <p className="text-xs text-[#191919]/65 truncate">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#E8792E] font-semibold"
                      : "text-[#191919] hover:text-[#E8792E]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#191919] border border-[#191919]/20 hover:border-[#191919] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8792E]" />
              <span>Call Now</span>
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#E8792E] text-white hover:bg-[#D0661E] transition-colors"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
              aria-label="Call Livsmart"
              className="p-2.5 border border-[#191919]/15 text-[#191919] hover:border-[#E8792E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8792E]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="p-2.5 border border-[#191919]/15 text-[#191919] hover:border-[#191919] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-t border-[#191919]/10 max-h-[calc(100vh-7.5rem)] overflow-y-auto shadow-xl"
        >
          <div className="px-4 py-5 space-y-2">
            {MAIN_NAVIGATION.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="border-b border-[#191919]/10 pb-2"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`py-2 text-base font-semibold ${
                          isActive(item.href)
                            ? "text-[#E8792E]"
                            : "text-[#191919]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesExpanded((prev) => !prev)
                        }
                        aria-expanded={mobileServicesExpanded}
                        aria-label="Expand Services List"
                        className="p-2 text-[#191919]"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileServicesExpanded
                              ? "rotate-180 text-[#E8792E]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileServicesExpanded && (
                      <div className="mt-1 pl-3 border-l-2 border-[#E8792E]/40 space-y-1.5 py-1">
                        <Link
                          href="/services"
                          className="block py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E]"
                        >
                          All 7 Services Overview →
                        </Link>
                        {item.children.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block py-1.5 text-sm ${
                              pathname === service.href
                                ? "text-[#E8792E] font-semibold"
                                : "text-[#191919]/80 hover:text-[#191919]"
                            }`}
                          >
                            <span className="font-mono text-xs text-[#E8792E] mr-2">
                              {service.number}
                            </span>
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2.5 text-base font-semibold border-b border-[#191919]/10 ${
                    isActive(item.href) ? "text-[#E8792E]" : "text-[#191919]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/testimonials"
              className={`block py-2.5 text-base font-semibold border-b border-[#191919]/10 ${
                isActive("/testimonials") ? "text-[#E8792E]" : "text-[#191919]"
              }`}
            >
              Testimonials
            </Link>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/get-a-quote"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#E8792E] text-white text-sm font-semibold uppercase tracking-wider"
              >
                <span>Request a Project Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#191919] text-white text-sm font-semibold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#E8792E]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-[#191919]/70 space-y-1">
              <p className="font-semibold text-[#191919]">
                {BUSINESS_INFO.contactPerson.name} — {BUSINESS_INFO.fullName}
              </p>
              <p>{BUSINESS_INFO.address.full}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
