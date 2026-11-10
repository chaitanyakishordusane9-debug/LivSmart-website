import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/data/business";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — ${project.categoryLabel}`,
    description: project.shortSummary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getAllProjects()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-mono">
                Status: {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#A9A39B] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E8792E]" />
                {project.location}
              </span>
              <span>Property Type: {project.propertyType}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder / Verification Banner */}
      {project.isPlaceholderShowcase && (
        <div className="bg-[#FFF8F3] border-b border-[#E8792E]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#191919]">
              <strong>{project.verificationNotice}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Main Content & Key Details */}
      <section className="py-16 sm:py-24 bg-[#F5F3EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Brief & Scope (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white border border-[#191919]/10 p-7 sm:p-9 space-y-4">
                <h2 className="text-2xl font-bold text-[#191919]">
                  Project Brief
                </h2>
                <p className="text-base text-[#191919]/80 leading-relaxed">
                  {project.projectBrief}
                </p>
              </div>

              <div className="bg-white border border-[#191919]/10 p-7 sm:p-9 space-y-5">
                <h2 className="text-2xl font-bold text-[#191919]">
                  Scope of Work Structure
                </h2>
                <ul className="space-y-3">
                  {project.scopeCompleted.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#191919]/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E8792E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Image Gallery */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#191919]">
                  Visual Documentation Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.galleryImages.map((img) => (
                    <figure
                      key={img.src}
                      className="bg-white border border-[#191919]/10 overflow-hidden"
                    >
                      <div className="relative h-64 w-full bg-[#191919]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="p-3.5 text-xs text-[#191919]/70 border-t border-[#191919]/10">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Key Project Details + Enquiry CTA (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#191919]/10 p-7 space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#191919] border-b border-[#191919]/10 pb-3">
                  Key Project Specifications
                </h3>
                <dl className="space-y-3">
                  {project.keyDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-[#191919]/10 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-xs text-[#191919]/60">
                        {detail.label}
                      </dt>
                      <dd className="text-sm font-semibold text-[#191919] mt-0.5">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="pt-2">
                  <Link
                    href={`/services/${project.categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
                  >
                    <span>View {project.categoryLabel} Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#191919] text-white p-7 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-[#E8792E]">
                  Similar Requirement?
                </p>
                <h3 className="text-xl font-bold text-white">
                  Plan Your {project.categoryLabel} Project
                </h3>
                <p className="text-xs text-[#A9A39B] leading-relaxed">
                  Request a site visit and itemised quotation from{" "}
                  {BUSINESS_INFO.contactPerson.name} in Pune.
                </p>
                <div className="space-y-2.5 pt-2">
                  <Link
                    href={`/get-a-quote?service=${project.categorySlug}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Get a Project Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={getWhatsAppUrl(
                      `Hello Livsmart, I viewed your ${project.categoryLabel} page and would like to discuss a similar project.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#E8792E]" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phones.primary.tel}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:border-[#E8792E] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#E8792E]" />
                    <span>Call {BUSINESS_INFO.phones.primary.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#191919]">
              Other Project Categories
            </h2>
            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-wider text-[#E8792E] hover:underline"
            >
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/projects/${rel.slug}`}
                className="group bg-[#F5F3EF] border border-[#191919]/10 p-6 flex flex-col justify-between hover:border-[#E8792E] transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#E8792E]">
                    {rel.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-[#191919] group-hover:text-[#E8792E]">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#191919]/75">
                    {rel.shortSummary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#E8792E]">
                  <span>View Details</span>
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
