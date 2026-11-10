import { GalleryItem } from "@/types";

/**
 * Gallery items are categorized by Construction, Interiors, Renovation, Painting, and Infrastructure.
 * While awaiting genuine project photographs from Harshal Dusane, items below are explicitly tagged
 * with `isRepresentativeStock: true` and carry clear captions stating they are temporary
 * architectural reference images for layout demonstration only.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Bungalow Structural & Architectural Form",
    category: "Construction",
    serviceSlug: "building-bungalow-construction",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern residential bungalow architectural exterior (Representative reference image)",
    caption:
      "Representative Reference Image — Residential bungalow architecture & exterior finishing (Replace with verified Livsmart site photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-02",
    title: "Site Grading & Civil Foundation Preparation",
    category: "Infrastructure",
    serviceSlug: "plot-development-infrastructure",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    alt: "Civil engineering site preparation and structural framework (Representative reference image)",
    caption:
      "Representative Reference Image — Plot development and structural civil work (Replace with verified Livsmart site photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-03",
    title: "Warm Contemporary Living Room Interiors",
    category: "Interiors",
    serviceSlug: "interior-design-decoration",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern residential living room interior with bespoke carpentry and lighting (Representative reference image)",
    caption:
      "Representative Reference Image — Residential living space design & decoration (Replace with verified Livsmart interior photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-04",
    title: "Modular Kitchen & Custom Cabinetry Detail",
    category: "Interiors",
    serviceSlug: "interior-design-decoration",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary modular kitchen with clean cabinetry and countertop finish (Representative reference image)",
    caption:
      "Representative Reference Image — Modular kitchen carpentry & counter finishing (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-05",
    title: "Corporate Office & Partition Fit-Out",
    category: "Interiors",
    serviceSlug: "hotel-flat-office-interiors",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern office workspace with acoustic glass partitions and ceiling lighting (Representative reference image)",
    caption:
      "Representative Reference Image — Commercial office interior & partition execution (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-06",
    title: "Hospitality & Guest Suite Interior Finishing",
    category: "Interiors",
    serviceSlug: "hotel-flat-office-interiors",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel bedroom suite interior with custom headboard panelling and warm lighting (Representative reference image)",
    caption:
      "Representative Reference Image — Hospitality room interior & woodwork (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-07",
    title: "Precision Civil Remodelling & Structural Masonry",
    category: "Renovation",
    serviceSlug: "renovation-civil-work",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    alt: "Civil renovation and structural engineering inspection on site (Representative reference image)",
    caption:
      "Representative Reference Image — Civil renovation and structural alterations (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-08",
    title: "Housing Society Exterior Upkeep & Facade Care",
    category: "Renovation",
    serviceSlug: "society-hotel-maintenance",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    alt: "Multi-storey residential society facade in clean condition (Representative reference image)",
    caption:
      "Representative Reference Image — Society exterior maintenance & waterproofing (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
  {
    id: "gal-09",
    title: "Surface Preparation, Putty Levelling & Professional Painting",
    category: "Painting",
    serviceSlug: "professional-painting",
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional wall painting and surface preparation work (Representative reference image)",
    caption:
      "Representative Reference Image — Interior & exterior surface preparation and painting (Replace with verified Livsmart photo)",
    isRepresentativeStock: true,
  },
];
