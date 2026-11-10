import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  Users,
  Info,
  Layers,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  SERVICES_DATA,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Pune — ${service.categoryTag}`,
    description: `${service.shortDescription} Contact Livsmart Engineers & Contractors in Pune (${BUSINESS_INFO.phones.primary.display}) for ${service.title.toLowerCase()}.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${BUSINESS_INFO.fullName} Pune`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedServiceSlugs);
  const relatedProjects = getProjectsByService(service.slug);

  return (
    <div>
      {/* 1. Service-Specific Hero */}
      <section className="relative bg-[#191919] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/90 to-[#191919]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-[#E8792E] text-white font-mono text-xs font-bold">
                Service {service.number}
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-[#F5F3EF] text-xs font-semibold uppercase tracking-wider">
                {service.categoryTag}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg text-[#F5F3EF]/85 leading-relaxed">
              {service.cardHeadline}
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href={`/get-a-quote?service=${service.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request a Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl(service.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#E8792E]" />
                <span>WhatsApp About This Service</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introductory Description & Scope of Work */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  Service Overview
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
                  How Livsmart Approaches {service.title}
                </h2>
                <p className="text-base text-[#191919]/80 leading-relaxed">
                  {service.introDescription}
                </p>
              </div>

              {/* Scope of Work List */}
              <div className="bg-white border border-[#191919]/10 p-7 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[#191919]/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#191919]">
                      Typical Scope of Work &amp; Capabilities
                    </h3>
                    <p className="text-xs text-[#191919]/65 mt-0.5">
                      Subject to site assessment and agreed project specification
                    </p>
                  </div>
                  <Layers className="w-5 h-5 text-[#E8792E]" />
                </div>

                <ul className="space-y-3">
                  {service.scopeOfWork.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#191919]/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E8792E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#191919]/10 flex items-start gap-2.5 text-xs text-[#191919]/70">
                  <Info className="w-4 h-4 text-[#E8792E] shrink-0 mt-0.5" />
                  <span>{service.deliverablesNote}</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Who This Is For & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Typical Clients Card */}
              <div className="bg-white border border-[#191919]/10 p-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-[#E8792E]" />
                  <h3 className="text-base font-bold text-[#191919]">
                    Who This Service Is Ideal For
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {service.typicalClients.map((client) => (
                    <li
                      key={client}
                      className="flex items-start gap-2.5 text-sm text-[#191919]/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E8792E] mt-2 shrink-0" />
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Consultation Card */}
              <div className="bg-[#191919] text-white p-7 space-y-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#E8792E]">
                  Pune Site Assessment
                </p>
                <h3 className="text-xl font-bold text-white">
                  Discuss Your {service.title} Requirements
                </h3>
                <p className="text-xs text-[#A9A39B] leading-relaxed">
                  Contact {BUSINESS_INFO.contactPerson.name} directly to arrange
                  a site inspection or share your drawings for an estimate.
                </p>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.phones.primary.display}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(service.whatsappPrefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#E8792E]" />
                    <span>WhatsApp Service Enquiry</span>
                  </a>
                  <Link
                    href={`/get-a-quote?service=${service.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-white/20 text-white hover:border-[#E8792E] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Submit Online Quote Form</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Considerations & Practical Benefits */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              Key Considerations
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
              Execution Priorities &amp; Practical Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.considerationsAndBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-[#F5F3EF] border border-[#191919]/10 p-6 sm:p-7 space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#E8792E]">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-[#191919]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#191919]/75 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Relevant Project Showcase / Visual Reference */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F5F3EF] border-b border-[#191919]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E8792E]">
                  Project Documentation Structure
                </p>
                <h2 className="text-2xl font-bold text-[#191919] mt-1">
                  Related Project Template for {service.title}
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs font-bold uppercase tracking-wider text-[#191919] hover:text-[#E8792E]"
              >
                View All Project Templates →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-[#191919]/10 p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 bg-[#E8792E]/15 text-[#E8792E] text-[11px] font-semibold uppercase">
                      {project.isPlaceholderShowcase
                        ? "Capability Showcase Template"
                        : project.status}
                    </span>
                    <h3 className="text-lg font-bold text-[#191919]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#E8792E]"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#191919]/75 leading-relaxed">
                      {project.shortSummary}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E]"
                  >
                    <span>View Template Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Verified FAQs Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#191919]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8792E]">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191919]">
              Common Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-[#F5F3EF] border border-[#191919]/10 p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-[#191919]">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#191919]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Services */}
      <section className="py-16 sm:py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#191919]">
              Related Services You May Need
            </h2>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
            >
              All 7 Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="group bg-white border border-[#191919]/10 p-6 flex flex-col justify-between hover:border-[#E8792E] transition-colors"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold text-[#E8792E]">
                    {rel.number} — {rel.categoryTag}
                  </span>
                  <h3 className="text-lg font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#191919]/70 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#E8792E]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
