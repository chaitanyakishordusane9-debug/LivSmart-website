export type ServiceCategorySlug =
  | "building-bungalow-construction"
  | "plot-development-infrastructure"
  | "interior-design-decoration"
  | "hotel-flat-office-interiors"
  | "renovation-civil-work"
  | "society-hotel-maintenance"
  | "professional-painting";

export interface ServiceFAQ {
  question: string;
  answer: string;
  verificationStatus: "verified" | "pending-confirmation";
}

export interface ServiceItem {
  id: string;
  slug: ServiceCategorySlug;
  number: string;
  title: string;
  cardHeadline: string;
  shortDescription: string;
  introDescription: string;
  visitingCardLine: string;
  categoryTag: "Civil Construction" | "Interiors" | "Maintenance & Finishing";
  heroImage: string;
  heroImageAlt: string;
  isRepresentativeImagery: boolean;
  scopeOfWork: string[];
  considerationsAndBenefits: {
    title: string;
    description: string;
  }[];
  typicalClients: string[];
  deliverablesNote: string;
  whatsappPrefill: string;
  relatedServiceSlugs: ServiceCategorySlug[];
  faqs: ServiceFAQ[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  categorySlug: ServiceCategorySlug;
  categoryLabel: string;
  location: string;
  status: "Completed" | "Ongoing" | "Pending Owner Confirmation";
  propertyType: string;
  isPlaceholderShowcase: boolean;
  verificationNotice: string;
  shortSummary: string;
  projectBrief: string;
  scopeCompleted: string[];
  heroImage: string;
  heroImageAlt: string;
  galleryImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
  keyDetails: {
    label: string;
    value: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Construction" | "Interiors" | "Renovation" | "Painting" | "Infrastructure";
  serviceSlug: ServiceCategorySlug;
  src: string;
  alt: string;
  caption: string;
  isRepresentativeStock: boolean;
}

export interface DifferentiatorItem {
  id: string;
  number: string;
  title: string;
  description: string;
  practicalDetail: string;
  confirmationNote?: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  propertyType: string;
  location: string;
  serviceCategory: string;
  quote: string;
  isVerified: boolean;
}
