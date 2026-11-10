import { DifferentiatorItem, WorkflowStep } from "@/types";

export const BUSINESS_INFO = {
  name: "Livsmart",
  descriptor: "Engineers And Contractors",
  fullName: "Livsmart Engineers & Contractors",
  positioningLine: "Interior And Civil Contractor",
  contactPerson: {
    name: "Harshal Dusane",
    role: "Principal Contact — Engineers & Contractors",
  },
  phones: {
    primary: {
      display: "+91 86980 81189",
      tel: "+918698081189",
      whatsappRaw: "918698081189",
      label: "Primary Phone & WhatsApp",
    },
    alternate: {
      display: "+91 86525 81189",
      tel: "+918652581189",
      label: "Alternate Phone",
    },
  },
  emails: {
    primary: "livsmart.engineerscontractors@gmail.com",
    alternate: "harsha.hd2@gmail.com",
  },
  address: {
    line1: "774, Sadashiv Peth, Garsole Sadan",
    line2: "Office No. 01, Kumthekar Road",
    city: "Pune",
    pincode: "411 030",
    state: "Maharashtra",
    country: "India",
    full: "774, Sadashiv Peth, Garsole Sadan, Office No. 01, Kumthekar Road, Pune – 411 030, Maharashtra, India",
    shortArea: "Sadashiv Peth, Kumthekar Road, Pune – 411 030",
  },
  serviceRegion: {
    primary: "Pune, Maharashtra, India",
    coverageNote:
      "Serving residential, commercial, hospitality, and housing society clients across Pune city and surrounding metropolitan areas.",
  },
  businessHours: {
    status: "pending_confirmation" as const,
    displayPlaceholder: "Monday – Saturday: Hours to be confirmed by business owner",
    note: "Please call or message on WhatsApp to schedule an office visit or on-site consultation.",
  },
  socialMedia: {
    handleReference: "Livsmart Engineers And Contractors",
    facebook: {
      status: "pending_verification" as const,
      url: null as string | null,
      note: "Referenced on visiting card — exact Facebook profile URL pending confirmation.",
    },
    instagram: {
      status: "pending_verification" as const,
      url: null as string | null,
      note: "Referenced on visiting card — exact Instagram profile URL pending confirmation.",
    },
  },
  map: {
    queryAddress:
      "Garsole Sadan, 774 Sadashiv Peth, Kumthekar Road, Pune, Maharashtra 411030",
    embedUrl:
      "https://www.google.com/maps?q=774+Sadashiv+Peth,+Kumthekar+Road,+Pune+411030&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=774+Sadashiv+Peth+Garsole+Sadan+Kumthekar+Road+Pune+411030",
    verificationNote:
      "Map location targets 774, Sadashiv Peth, Garsole Sadan, Kumthekar Road, Pune 411 030. Exact Google Business Profile pin to be confirmed before final launch.",
  },
  whatsappDefaultMessage:
    "Hello Livsmart, I visited your website and would like to discuss a project. Please contact me.",
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    BUSINESS_INFO.phones.primary.whatsappRaw;
  const text = encodeURIComponent(
    customMessage || BUSINESS_INFO.whatsappDefaultMessage
  );
  return `https://wa.me/${number}?text=${text}`;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Enquiry & Initial Consultation",
    subtitle: "Understanding your vision and project parameters",
    description:
      "Reach out via phone, WhatsApp, or our project quotation form. We discuss your property type, location in Pune, broad requirements, and desired timeline.",
    deliverables: [
      "Direct conversation with Harshal Dusane",
      "Initial feasibility and requirement alignment",
      "Scheduling of site visit or office meeting",
    ],
  },
  {
    stepNumber: "02",
    title: "Site Discussion & Assessment",
    subtitle: "On-site inspection, measurements, and technical evaluation",
    description:
      "We visit the plot, building, flat, office, or society premises to inspect site conditions, take preliminary measurements, and understand structural or interior specifics.",
    deliverables: [
      "On-site structural and spatial assessment",
      "Discussion of material preferences and practical options",
      "Identification of civil, utility, or repair considerations",
    ],
  },
  {
    stepNumber: "03",
    title: "Scope Definition & Quotation",
    subtitle: "Transparent breakdown of work items and specification",
    description:
      "Based on the site evaluation, we prepare a structured scope of work and itemised estimate so you have clarity on deliverables, materials, and responsibilities before execution begins.",
    deliverables: [
      "Defined scope of civil or interior works",
      "Clear material and finishing specifications",
      "Transparent project quotation and milestone outline",
    ],
  },
  {
    stepNumber: "04",
    title: "Planning & Coordinated Execution",
    subtitle: "Systematic site execution and trade supervision",
    description:
      "Work progresses phase by phase—covering civil work, structural masonry, plumbing/electrical coordination, carpentry, plastering, or painting—with regular progress updates.",
    deliverables: [
      "Sequenced scheduling across civil and interior trades",
      "On-site supervision and quality checks at key stages",
      "Direct communication throughout construction or renovation",
    ],
  },
  {
    stepNumber: "05",
    title: "Final Review & Handover",
    subtitle: "Finishing inspection and site completion",
    description:
      "We conduct a joint walkthrough of the completed work to check surface finishes, fittings, and functional details before handing over the space ready for use.",
    deliverables: [
      "Joint site inspection and snag resolution",
      "Verification of agreed scope and finishes",
      "Clean, organized site handover",
    ],
  },
];

export const WHY_CHOOSE_ITEMS: DifferentiatorItem[] = [
  {
    id: "single-point-accountability",
    number: "01",
    title: "Direct Leadership & Single Point of Contact",
    description:
      "Every enquiry and project discussion is handled directly with clear accountability, eliminating miscommunication between multiple intermediaries.",
    practicalDetail:
      "From initial site visit in Pune to final handover, you coordinate directly with Harshal Dusane and the Livsmart supervision team.",
  },
  {
    id: "civil-and-interior-integration",
    number: "02",
    title: "Combined Civil & Interior Capability",
    description:
      "Because Livsmart operates as both an interior and civil contractor, structural alterations, masonry, waterproofing, and interior finishes are planned together.",
    practicalDetail:
      "Avoids common handover gaps between separate civil contractors and interior execution teams during bungalow builds, flat renovations, or commercial fit-outs.",
  },
  {
    id: "clear-scope-discussions",
    number: "03",
    title: "Transparent Scope & Practical Recommendations",
    description:
      "We focus on realistic site solutions, practical material choices, and clearly defined work items suited to your property condition and budget.",
    practicalDetail:
      "Whether developing a raw plot, renovating an older flat in Pune, or maintaining a cooperative housing society, scope clarity comes before work starts.",
  },
  {
    id: "workmanship-and-finishing",
    number: "04",
    title: "Attention to Surface Preparation & Finishing",
    description:
      "Durable construction and interiors depend on foundational preparation—proper curing, plaster alignment, surface priming, and clean joinery details.",
    practicalDetail:
      "We emphasize step-by-step preparation across civil masonry, interior carpentry, tiling, and professional painting.",
  },
  {
    id: "multi-sector-versatility",
    number: "05",
    title: "Versatility Across Residential, Commercial & Society Work",
    description:
      "Our service catalogue spans standalone bungalows, residential flats, offices, hospitality spaces, and housing society maintenance.",
    practicalDetail:
      "Tailored execution routines whether working inside an occupied housing society, a commercial office floor, or a greenfield residential plot.",
  },
  {
    id: "responsive-communication",
    number: "06",
    title: "Accessible Local Presence in Central Pune",
    description:
      "Based at Sadashiv Peth, Kumthekar Road, we are easily reachable by phone, WhatsApp, or in-person consultation for project discussions across Pune.",
    practicalDetail:
      "Prompt responsiveness for site inspections, scope clarifications, and ongoing project updates.",
  },
];
