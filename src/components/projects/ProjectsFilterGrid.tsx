"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  Info,
  FolderOpen,
  Filter,
  Eye,
} from "lucide-react";
import { ProjectItem, ServiceCategorySlug } from "@/types";
import { SERVICES_DATA } from "@/data/services";

interface ProjectsFilterGridProps {
  verifiedProjects: ProjectItem[];
  templateProjects: ProjectItem[];
}

export function ProjectsFilterGrid({
  verifiedProjects,
  templateProjects,
}: ProjectsFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | ServiceCategorySlug
  >("all");
  const [showTemplates, setShowTemplates] = useState<boolean>(true);

  const sourceList = showTemplates
    ? [...verifiedProjects, ...templateProjects]
    : verifiedProjects;

  const filteredProjects =
    selectedCategory === "all"
      ? sourceList
      : sourceList.filter((p) => p.categorySlug === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Control Bar: Category Filter + Template Preview Toggle */}
      <div className="bg-white border border-[#191919]/10 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#191919]/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919]">
            <Filter className="w-4 h-4 text-[#E8792E]" />
            <span>Filter by Service Category</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowTemplates((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold border transition-colors ${
                showTemplates
                  ? "bg-[#191919] text-white border-[#191919]"
                  : "bg-[#F5F3EF] text-[#191919] border-[#191919]/20 hover:border-[#191919]"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#E8792E]" />
              <span>
                {showTemplates
                  ? "Showing Capability Templates (4)"
                  : "Showing Verified Portfolio Only (0)"}
              </span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by service category"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-2 text-xs font-semibold transition-colors ${
              selectedCategory === "all"
                ? "bg-[#E8792E] text-white"
                : "bg-[#F5F3EF] text-[#191919] hover:bg-[#191919]/10"
            }`}
          >
            All Categories ({sourceList.length})
          </button>

          {SERVICES_DATA.map((service) => {
            const count = sourceList.filter(
              (p) => p.categorySlug === service.slug
            ).length;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setSelectedCategory(service.slug)}
                className={`px-3.5 py-2 text-xs font-semibold transition-colors ${
                  selectedCategory === service.slug
                    ? "bg-[#E8792E] text-white"
                    : "bg-[#F5F3EF] text-[#191919] hover:bg-[#191919]/10"
                }`}
              >
                {service.title} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Transparency Banner when Templates are Active */}
      {showTemplates && (
        <div className="p-4 bg-white border-l-4 border-[#E8792E] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#191919]/80 space-y-1">
            <p>
              <strong>Content Accuracy &amp; Portfolio Status:</strong> Genuine
              Livsmart project photographs and client publication approvals are
              currently being compiled by the business owner. The items below
              are clearly marked{" "}
              <span className="font-semibold text-[#191919]">
                [Template] Capability Previews
              </span>{" "}
              using temporary stock imagery to demonstrate the case-study
              structure.
            </p>
          </div>
        </div>
      )}

      {/* Project Grid or Honest Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white border border-[#191919]/15 p-10 sm:p-16 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 mx-auto bg-[#F5F3EF] border border-[#191919]/10 flex items-center justify-center">
            <FolderOpen className="w-6 h-6 text-[#E8792E]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#191919]">
            Verified Project Case Studies Coming Soon
          </h2>
          <p className="text-sm text-[#191919]/75 leading-relaxed">
            In accordance with our strict content accuracy standards, we only
            publish project case studies after photographs and details are
            verified and approved by the business owner.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            {!showTemplates && (
              <button
                type="button"
                onClick={() => {
                  setShowTemplates(true);
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-[#191919] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8792E] transition-colors"
              >
                Preview Project Page Templates
              </button>
            )}
            {selectedCategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="px-5 py-2.5 border border-[#191919] text-[#191919] text-xs font-bold uppercase tracking-wider hover:bg-[#191919] hover:text-white transition-colors"
              >
                Reset Category Filter
              </button>
            )}
            <Link
              href="/get-a-quote"
              className="px-5 py-2.5 bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D0661E] transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-[#191919]/10 flex flex-col justify-between overflow-hidden hover:border-[#E8792E] transition-colors"
            >
              <div>
                <div className="relative h-64 w-full bg-[#191919] overflow-hidden">
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
                        Development Template
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#191919]/65">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E8792E]" />
                      {project.location}
                    </span>
                    <span className="font-mono">{project.propertyType}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#191919]/75 leading-relaxed">
                    {project.shortSummary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-[#F5F3EF]/60 border-t border-[#191919]/10 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#E8792E] transition-colors"
                >
                  <span>View Project Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-[#191919]/60">
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
