"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Info,
  ArrowUpRight,
} from "lucide-react";
import { GalleryItem } from "@/types";

interface GalleryGridLightboxProps {
  items: GalleryItem[];
}

const CATEGORIES = [
  "All",
  "Construction",
  "Interiors",
  "Renovation",
  "Painting",
  "Infrastructure",
] as const;

export function GalleryGridLightbox({ items }: GalleryGridLightboxProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [activeIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % filteredItems.length);
  }, [activeIndex, filteredItems.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeItem =
    activeIndex !== null ? filteredItems[activeIndex] : undefined;

  return (
    <div className="space-y-8">
      {/* Transparency Banner for Representative Imagery */}
      <div className="p-5 bg-white border-l-4 border-[#E8792E] border border-[#191919]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E8792E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed">
            <strong className="text-[#191919]">
              Visual Reference Notice:
            </strong>{" "}
            Genuine site photographs from Livsmart&apos;s completed and ongoing
            projects in Pune are being catalogued for publication. Images badged
            as{" "}
            <span className="font-semibold text-[#191919]">
              Representative Reference
            </span>{" "}
            illustrate the service categories and finish standards we execute,
            and are not claimed as Livsmart&apos;s own site photographs.
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter gallery by work category"
        className="flex flex-wrap gap-2 border-b border-[#191919]/10 pb-5"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          const count =
            category === "All"
              ? items.length
              : items.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(null);
              }}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
                isActive
                  ? "bg-[#191919] text-white border-[#191919]"
                  : "bg-white text-[#191919]/80 border-[#191919]/15 hover:border-[#E8792E] hover:text-[#E8792E]"
              }`}
            >
              <span>{category}</span>
              <span
                className={`ml-2 px-1.5 py-0.5 text-[10px] ${
                  isActive
                    ? "bg-[#E8792E] text-white"
                    : "bg-[#F5F3EF] text-[#191919]/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <article
            key={item.id}
            className="group bg-white border border-[#191919]/10 hover:border-[#E8792E] transition-colors flex flex-col overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open full view for ${item.title}`}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#191919] text-left focus:outline-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={index < 3 ? "eager" : "lazy"}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 bg-[#191919]/90 text-white text-[10px] font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                {item.isRepresentativeStock && (
                  <span className="px-2.5 py-1 bg-[#F5F3EF]/95 text-[#191919] text-[10px] font-semibold uppercase tracking-wider">
                    Representative Reference
                  </span>
                )}
              </div>

              {/* Expand Icon */}
              <div className="absolute bottom-3 right-3 w-9 h-9 bg-[#E8792E] text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </button>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <h2 className="text-base font-bold text-[#191919] group-hover:text-[#E8792E] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-[#191919]/70 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-[#191919]/10 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="font-bold uppercase tracking-wider text-[#191919] hover:text-[#E8792E] transition-colors"
                >
                  Inspect Image
                </button>
                <Link
                  href={`/services/${item.serviceSlug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#E8792E] hover:underline"
                >
                  <span>Related Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox Modal with Keyboard & Touch Support */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#191919]/95 flex flex-col justify-between p-4 sm:p-8"
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            if (deltaX > 50) showPrev();
            if (deltaX < -50) showNext();
            setTouchStartX(null);
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#E8792E] text-white text-xs font-bold uppercase tracking-widest">
                {activeItem.category}
              </span>
              <span className="text-xs text-[#A9A39B] font-mono">
                {activeIndex + 1} / {filteredItems.length}
              </span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox (Escape)"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-[#E8792E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Image & Navigation Controls */}
          <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 bg-[#191919]/80 hover:bg-[#E8792E] border border-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[70vh]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 bg-[#191919]/80 hover:bg-[#E8792E] border border-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-4xl mx-auto w-full bg-[#191919] border border-white/15 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9A39B]">
                {activeItem.caption}
              </p>
            </div>
            <Link
              href={`/services/${activeItem.serviceSlug}`}
              onClick={closeLightbox}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#E8792E] hover:bg-[#D0661E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>View Service Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

