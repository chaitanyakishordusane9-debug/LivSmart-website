import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  darkText?: boolean;
}

export function Breadcrumbs({ items, darkText = false }: BreadcrumbsProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://livsmart.in";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs ${
          darkText ? "text-[#191919]/70" : "text-[#A9A39B]"
        }`}
      >
        <li>
          <Link
            href="/"
            className={`inline-flex items-center gap-1 hover:text-[#E8792E] transition-colors`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#E8792E] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={`font-semibold ${
                    darkText ? "text-[#191919]" : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
