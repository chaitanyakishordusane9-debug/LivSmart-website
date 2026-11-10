import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ALL_PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://livsmart.in";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-livsmart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}

