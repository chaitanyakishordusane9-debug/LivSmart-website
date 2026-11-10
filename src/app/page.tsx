import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Compass,
  Layers,
  Info,
} from "lucide-react";
import {
  BUSINESS_INFO,
  WORKFLOW_STEPS,
  WHY_CHOOSE_ITEMS,
  getWhatsAppUrl,
} from "@/data/business";
import { SERVICES_DATA } from "@/data/services";
import { getAllProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getAllProjects().slice(0, 4);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#191919] text-white overflow-hidden border-b border-white/10">
        {/* Background Architectural Image with Editorial Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Contemporary residential architecture and structural craftsmanship (Representative architectural photography)"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/90 to-[#191919]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              {/* Positioning Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/5 border border-white/15 backdrop-blur-sm">
                <span className="h-2 w-2 bg-[#E8792E]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5F3EF]">
                  {BUSINESS_INFO.fullName} — {BUSINESS_INFO.positioningLine}
                </span>
              </div>

              {/* Required Spec Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Building Spaces.{" "}
                <span className="text-[#E8792E] block sm:inline">
                  Creating Possibilities.
                </span>
              </h1>

              {/* Required Spec Supporting Copy */}
              <p className="text-lg sm:text-xl text-[#F5F3EF]/85 max-w-2xl leading-relaxed font-normal">
                From residential construction to elegant interiors, Livsmart
                Engineers &amp; Contractors brings your vision to life with
                civil and interior solutions.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#E8792E] hover:bg-[#D0661E] text-white text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-bold uppercase tracking-wider transition-colors backdrop-blur-xs"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Direct Contact Strip */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-[#A9A39B]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E8792E]" />
                  <span>
                    Sadashiv Peth, Kumthekar Road, Pune – 411 030
                  </span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#E8792E] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E8792E]" />
                  <span>{BUSINESS_INFO.phones.primary.display}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#E8792E] font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#E8792E]" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Scope Summary Panel */}
            <div className="lg:col-span-4">
              <div className="bg-[#191919]/90 border border-white/15 p-6 sm:p-7 backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#E8792E]">
                      Core Disciplines
                    </p>
                    <h2 className="text-base font-bold text-white mt-0.5">
                      Pune Civil &amp; Interior Studio
                    </h2>
                  </div>
                  <Compass className="w-6 h-6 text-[#E8792E]" />
                </div>

                <ul className="space-y-2.5 text-xs text-[#F5F3EF]/85">
                  {SERVICES_DATA.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between py-1 hover:text-[#E8792E] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-[#E8792E] font-bold">
                            {service.number}
                          </span>
                          <span>{service.title}</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-white/10 text-[11px] text-[#A9A39B] flex items-center justify-between">
                  <span>Contact: {BUSINESS_INFO.contactPerson.name}</span>
                  <Link
                    href="/contact"
                    className="text-[#E8792E] font-semibold hover:underline"
                  >
                    Office Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-24 bg-[#F5F3EF] border-b border-[#191919]/10 bg-architectural-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                About Livsmart
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919] leading-tight">
                Integrated Civil Engineering &amp; Interior Contracting in Pune
              </h2>
              <div className="h-1 w-16 bg-[#E8792E]" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-[#191919]/85 leading-relaxed">
                Based at Sadashiv Peth, Kumthekar Road in Pune,{" "}
                <strong>{BUSINESS_INFO.fullName}</strong> operates as a
                full-scope interior and civil contractor. Led by{" "}
                <strong>{BUSINESS_INFO.contactPerson.name}</strong>, we partner
                with homeowners, plot owners, commercial workspaces, hospitality
                properties, and cooperative housing societies across Pune.
              </p>
              <p className="text-base text-[#191919]/75 leading-relaxed">
                Whether constructing an independent bungalow from the ground up,
                developing plot infrastructure, executing bespoke flat and
                office interiors, renovating existing civil structures, or
                maintaining housing society buildings, our focus remains on
                practical engineering, transparent scope definition, and clean
                site execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 border border-[#191919]/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E8792E] font-semibold">
                    Civil Contracting
                  </p>
                  <p className="text-sm font-bold text-[#191919] mt-1">
                    Bungalows, Buildings &amp; Plots
                  </p>
                  <p className="text-xs text-[#191919]/70 mt-1">
                    Foundations, RCC, masonry, plastering, waterproofing &amp;
                    site infrastructure.
                  </p>
                </div>
                <div className="bg-white p-5 border border-[#191919]/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E8792E] font-semibold">
                    Interior Solutions
                  </p>
                  <p className="text-sm font-bold text-[#191919] mt-1">
                    Homes, Flats, Hotels &amp; Offices
                  </p>
                  <p className="text-xs text-[#191919]/70 mt-1">
                    Space planning, custom carpentry, modular kitchens, ceilings
                    &amp; lighting.
                  </p>
                </div>
                <div className="bg-white p-5 border border-[#191919]/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E8792E] font-semibold">
                    Renewal &amp; Upkeep
                  </p>
                  <p className="text-sm font-bold text-[#191919] mt-1">
                    Renovation, Societies &amp; Paint
                  </p>
                  <p className="text-xs text-[#191919]/70 mt-1">
                    Structural repairs, society maintenance, waterproofing &amp;
                    painting work.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#191919] hover:text-[#E8792E] transition-colors group"
                >
                  <span>Learn More About Livsmart</span>
                  <ArrowRight className="w-4 h-4 text-[#E8792E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEVEN SERVICES SHOWCASE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Our Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919]">
                Seven Specialized Civil &amp; Interior Services
              </h2>
              <p className="text-base text-[#191919]/70">
                Every service is tailored to the structural, spatial, and
                budgetary requirements of your residential, commercial, or
                society property in Pune.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#191919] text-xs font-bold uppercase tracking-wider text-[#191919] hover:bg-[#191919] hover:text-white transition-colors self-start md:self-auto"
            >
              <span>View Full Service Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <article
                key={service.id}
                className={`group bg-[#F5F3EF] border border-[#191919]/10 flex flex-col justify-between transition-all duration-200 hover:border-[#E8792E] hover:shadow-md ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-[#191919]">
                    <Image
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      fill
                      sizes={
                        idx === 0
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/80 via-[#191919]/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#191919] text-[#E8792E] font-mono text-xs font-bold">
                        {service.number}
                      </span>
                      <span className="px-2.5 py-1 bg-white/90 text-[#191919] text-[11px] font-semibold uppercase tracking-wider">
                        {service.categoryTag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-xl font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#191919]/75 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#191919]/10 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#E8792E] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/get-a-quote?service=${service.slug}`}
                    className="text-xs font-semibold text-[#191919]/65 hover:text-[#E8792E] transition-colors"
                  >
                    Enquire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section className="py-20 sm:py-24 bg-[#F5F3EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Project Showcase &amp; Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919]">
                Featured Project Categories
              </h2>
              <p className="text-base text-[#191919]/70">
                Explore how Livsmart structures execution across residential
                construction, flat &amp; office interiors, and housing society
                restoration.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8792E] transition-colors self-start md:self-auto"
            >
              <span>View Projects Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Transparent Content Accuracy Notice */}
          <div className="mb-10 p-4 bg-white border-l-4 border-[#E8792E] flex items-start gap-3 shadow-2xs">
            <Info className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed">
              <strong>Portfolio Verification Note:</strong> The cards below use
              clearly marked development template slots and representative
              architectural stock photography while genuine Livsmart site
              photographs and client publication approvals are being compiled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white border border-[#191919]/10 overflow-hidden flex flex-col justify-between hover:border-[#E8792E] transition-colors"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-[#191919]">
                    <Image
                      src={project.heroImage}
                      alt={project.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-[#191919]/90 text-white text-[11px] font-semibold uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      {project.isPlaceholderShowcase && (
                        <span className="px-2.5 py-1 bg-[#E8792E] text-white text-[11px] font-semibold uppercase tracking-wider">
                          Representative Template
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#191919]/60">
                      <MapPin className="w-3.5 h-3.5 text-[#E8792E]" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#191919]/75 leading-relaxed">
                      {project.shortSummary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 bg-[#F5F3EF]/60 border-t border-[#191919]/10 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#E8792E] transition-colors"
                  >
                    <span>View Scope &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#191919]/60">
                    {project.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE LIVSMART SECTION */}
      <section className="py-20 sm:py-24 bg-[#191919] text-white border-b border-white/10 bg-architectural-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Why Choose Livsmart
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Practical Engineering. Clear Communication. Clean Finishing.
              </h2>
              <p className="text-base text-[#A9A39B]">
                We focus on disciplined site coordination and transparent scope
                discussions rather than exaggerated promises.
              </p>
            </div>
            <Link
              href="/why-livsmart"
              className="inline-flex items-center gap-2 px-5 py-3 border border-white/25 text-xs font-bold uppercase tracking-wider text-white hover:border-[#E8792E] hover:text-[#E8792E] transition-colors self-start md:self-auto"
            >
              <span>Our Working Principles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 p-6 sm:p-7 space-y-4 hover:border-[#E8792E]/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#E8792E]/20 text-[#E8792E]">
                    {item.number}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#E8792E]" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-[#F5F3EF]/80 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-[#A9A39B] pt-2 border-t border-white/10">
                  {item.practicalDetail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (5-STEP PROCESS) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191919]">
              A Structured Five-Stage Execution Process
            </h2>
            <p className="text-base text-[#191919]/70">
              From your first phone call or WhatsApp message to final site
              handover, every stage is organized to keep scope, quality, and
              costs transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#F5F3EF] border border-[#191919]/10 p-6 flex flex-col justify-between relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-[#E8792E]">
                      {step.stepNumber}
                    </span>
                    <Layers className="w-4 h-4 text-[#191919]/40" />
                  </div>
                  <h3 className="text-base font-bold text-[#191919]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#191919]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <ul className="mt-5 pt-4 border-t border-[#191919]/10 space-y-1.5">
                  {step.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-1.5 text-[11px] text-[#191919]/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8792E] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (HONEST COMING SOON STATE PER SPEC 5.1.8) */}
      <section className="py-16 sm:py-20 bg-[#F5F3EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#191919]/15 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F3EF] border border-[#191919]/15 text-xs font-semibold text-[#191919]">
                <span className="h-2 w-2 rounded-full bg-[#E8792E]" />
                <span>Verified Client Feedback Policy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
                Client Feedback Coming Soon
              </h2>
              <p className="text-sm sm:text-base text-[#191919]/75 leading-relaxed">
                We believe in publishing only genuine, permission-verified
                customer reviews from real residential, commercial, and housing
                society projects in Pune—never fabricated ratings or stock
                quotes. Verified client testimonials are currently being
                compiled for publication.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#191919] text-xs font-bold uppercase tracking-wider text-[#191919] hover:bg-[#191919] hover:text-white transition-colors"
              >
                <span>Our Review Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D0661E] transition-colors"
              >
                <span>Request Client References</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 sm:py-24 bg-[#191919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                Start a Conversation
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Planning a Construction, Interior, or Renovation Project in
                Pune?
              </h2>
              <p className="text-base sm:text-lg text-[#A9A39B] max-w-2xl leading-relaxed">
                Speak directly with{" "}
                <span className="text-white font-semibold">
                  {BUSINESS_INFO.contactPerson.name}
                </span>{" "}
                to schedule an on-site assessment or request a structured
                project quotation.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/get-a-quote"
                className="flex items-center justify-between px-7 py-4 bg-[#E8792E] hover:bg-[#D0661E] text-white text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request a Detailed Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                className="flex items-center justify-between px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Call {BUSINESS_INFO.phones.primary.display}</span>
                <Phone className="w-4 h-4 text-[#E8792E]" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-7 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Message on WhatsApp</span>
                <MessageSquare className="w-4 h-4 text-[#E8792E]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
