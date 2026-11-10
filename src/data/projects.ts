import { ProjectItem, ServiceCategorySlug } from "@/types";

/**
 * IMPORTANT CONTENT ACCURACY NOTE:
 * In accordance with Section 2, 5.5, and 10 of the Website Development Specification:
 * - No fake project case studies or unverified completion claims are published.
 * - `VERIFIED_PROJECTS` starts empty (`[]`) until the business owner supplies confirmed
 *   site photographs, project titles, and publication approval.
 * - `SHOWCASE_TEMPLATE_PROJECTS` provides clearly labeled structural templates
 *   (`isPlaceholderShowcase: true`) so the `/projects` filter system and `/projects/[slug]`
 *   detail layout can be tested and previewed during development without misrepresenting
 *   temporary stock imagery as completed Livsmart work.
 */
export const VERIFIED_PROJECTS: ProjectItem[] = [];

export const SHOWCASE_TEMPLATE_PROJECTS: ProjectItem[] = [
  {
    id: "tpl-bungalow-construction",
    slug: "residential-bungalow-construction-template",
    title: "[Template] Independent Bungalow Civil Execution",
    categorySlug: "building-bungalow-construction",
    categoryLabel: "Building & Bungalow Construction",
    location: "Pune (Location Pending Owner Confirmation)",
    status: "Pending Owner Confirmation",
    propertyType: "Residential Bungalow (Template Preview)",
    isPlaceholderShowcase: true,
    verificationNotice:
      "DEVELOPMENT TEMPLATE — Representative stock imagery shown to demonstrate project detail layout. Replace with genuine Livsmart site photographs and owner-verified scope before production launch.",
    shortSummary:
      "Template slot for showcasing end-to-end RCC framing, brickwork, plastering, waterproofing, and civil finishing for an independent bungalow in Pune.",
    projectBrief:
      "This template page demonstrates how a verified Livsmart bungalow or building construction project will be presented once official site photographs and client approvals are added. It highlights structural execution stages, material coordination, and finishing benchmarks.",
    scopeCompleted: [
      "Foundational excavation, PCC bed, and RCC footing/column execution (Sample Scope)",
      "Superstructure slab casting, AAC block / brick masonry, and staircase construction",
      "External sand-faced plaster, internal gypsum finish, and terrace waterproofing",
      "Flooring substrate, staircase granite work, and compound gate civil integration",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "Representative architectural stock photo — Independent bungalow template preview",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative exterior architecture view (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart exterior elevation photo",
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative structural civil work view (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart RCC / masonry progress photo",
      },
    ],
    keyDetails: [
      { label: "Service Category", value: "Building & Bungalow Construction" },
      { label: "Location", value: "To be confirmed by owner" },
      { label: "Property Type", value: "Residential Independent Bungalow" },
      { label: "Content Status", value: "Placeholder Template — Pending Verified Assets" },
    ],
  },
  {
    id: "tpl-residential-interiors",
    slug: "apartment-turnkey-interior-template",
    title: "[Template] Residential Flat Interior & Carpentry Fit-Out",
    categorySlug: "interior-design-decoration",
    categoryLabel: "Interior Design & Decoration",
    location: "Pune (Location Pending Owner Confirmation)",
    status: "Pending Owner Confirmation",
    propertyType: "Residential Flat (Template Preview)",
    isPlaceholderShowcase: true,
    verificationNotice:
      "DEVELOPMENT TEMPLATE — Representative stock imagery shown to demonstrate project detail layout. Replace with genuine Livsmart interior photographs and owner-verified scope before production launch.",
    shortSummary:
      "Template slot for showcasing residential interior design, modular kitchen fabrication, custom wardrobes, false ceiling, and ambient lighting execution.",
    projectBrief:
      "This template demonstrates the case-study layout for residential interior and decoration projects. Once populated with confirmed Livsmart interior photographs, it will document space planning, woodwork specifications, and surface finishes.",
    scopeCompleted: [
      "Living room TV console, foyer panelling, and gypsum cove false ceiling (Sample Scope)",
      "Modular kitchen cabinetry with quartz countertop and dado tiling",
      "Full-height bedroom wardrobes with laminate and veneer finishes",
      "Electrical lighting points, wall putty preparation, and luxury emulsion painting",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "Representative residential interior stock photo — Flat interior template preview",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative living room interior (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart living room photo",
      },
      {
        src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative kitchen carpentry (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart kitchen installation photo",
      },
    ],
    keyDetails: [
      { label: "Service Category", value: "Interior Design & Decoration" },
      { label: "Location", value: "To be confirmed by owner" },
      { label: "Property Type", value: "Residential Apartment" },
      { label: "Content Status", value: "Placeholder Template — Pending Verified Assets" },
    ],
  },
  {
    id: "tpl-commercial-office-interiors",
    slug: "commercial-office-hospitality-interior-template",
    title: "[Template] Commercial Office & Hospitality Interior Execution",
    categorySlug: "hotel-flat-office-interiors",
    categoryLabel: "Hotel, Flat & Office Interiors",
    location: "Pune (Location Pending Owner Confirmation)",
    status: "Pending Owner Confirmation",
    propertyType: "Commercial / Hospitality Space (Template Preview)",
    isPlaceholderShowcase: true,
    verificationNotice:
      "DEVELOPMENT TEMPLATE — Representative stock imagery shown to demonstrate project detail layout. Replace with genuine Livsmart commercial/hotel interior photographs before launch.",
    shortSummary:
      "Template slot for commercial office workstations, glass partitions, reception areas, or hotel room interior contracting.",
    projectBrief:
      "Designed to showcase Livsmart's commercial and hospitality interior capabilities once verified client photographs and scope approvals are supplied by the business owner.",
    scopeCompleted: [
      "Acoustic glass and aluminum framework partitions for cabins and meeting rooms (Sample Scope)",
      "Custom workstations, reception desk, and storage units",
      "Commercial grid ceiling, concealed networking conduits, and LED panel lighting",
      "Heavy-duty vitrified flooring and washable commercial wall coatings",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "Representative commercial office stock photo — Workspace template preview",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative office workspace (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart office interior photo",
      },
    ],
    keyDetails: [
      { label: "Service Category", value: "Hotel, Flat & Office Interiors" },
      { label: "Location", value: "To be confirmed by owner" },
      { label: "Property Type", value: "Commercial Office / Hotel" },
      { label: "Content Status", value: "Placeholder Template — Pending Verified Assets" },
    ],
  },
  {
    id: "tpl-society-maintenance-painting",
    slug: "society-structural-repair-painting-template",
    title: "[Template] Housing Society Repair, Waterproofing & Exterior Painting",
    categorySlug: "society-hotel-maintenance",
    categoryLabel: "Society & Hotel Maintenance",
    location: "Pune (Location Pending Owner Confirmation)",
    status: "Pending Owner Confirmation",
    propertyType: "Cooperative Housing Society (Template Preview)",
    isPlaceholderShowcase: true,
    verificationNotice:
      "DEVELOPMENT TEMPLATE — Representative stock imagery shown to demonstrate project detail layout. Replace with genuine Livsmart society repair and painting photographs before launch.",
    shortSummary:
      "Template slot for cooperative housing society external plaster restoration, crack sealing, terrace waterproofing, and weatherproof exterior repainting.",
    projectBrief:
      "Demonstrates how society maintenance and large-scale painting projects are structured—including before/after documentation, polymer plaster repairs, and exterior protective coatings.",
    scopeCompleted: [
      "External facade hollow-plaster removal and polymer-modified mortar restoration (Sample Scope)",
      "Terrace and parapet waterproofing treatment",
      "Plumbing duct pipe maintenance and common staircase tile repairs",
      "Complete exterior primer and weatherproof anti-algal elastomeric paint system",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "Representative apartment society stock photo — Society maintenance template preview",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        alt: "Representative residential building exterior (Stock placeholder)",
        caption: "Representative Stock Photo — Replace with verified Livsmart society maintenance photo",
      },
    ],
    keyDetails: [
      { label: "Service Category", value: "Society & Hotel Maintenance" },
      { label: "Location", value: "To be confirmed by owner" },
      { label: "Property Type", value: "Cooperative Housing Society" },
      { label: "Content Status", value: "Placeholder Template — Pending Verified Assets" },
    ],
  },
];

export function getAllProjects(): ProjectItem[] {
  return [...VERIFIED_PROJECTS, ...SHOWCASE_TEMPLATE_PROJECTS];
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectsByService(
  serviceSlug: ServiceCategorySlug
): ProjectItem[] {
  return getAllProjects().filter(
    (project) => project.categorySlug === serviceSlug
  );
}
