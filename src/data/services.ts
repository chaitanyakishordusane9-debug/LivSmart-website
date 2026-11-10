import { ServiceCategorySlug, ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "svc-01",
    slug: "building-bungalow-construction",
    number: "01",
    title: "Building & Bungalow Construction",
    cardHeadline: "Turnkey & Structural Civil Construction for Residential Properties",
    visitingCardLine: "Construction of bungalow and building.",
    categoryTag: "Civil Construction",
    shortDescription:
      "End-to-end civil construction for independent bungalows, residential buildings, and custom homes across Pune—from foundation and RCC structure to brickwork, plastering, and finishing.",
    introDescription:
      "Livsmart Engineers & Contractors undertakes residential building and independent bungalow construction in Pune. Working from architectural and structural drawings, we execute foundational earthwork, reinforced concrete (RCC) framing, masonry, waterproofing, and complete civil finishing tailored to your site and project scope.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Contemporary residential bungalow architecture with clean concrete and warm wood accents (Representative architectural imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Site clearing, setting out, excavation, and foundational footing work",
      "RCC frame construction including columns, beams, slabs, and staircases",
      "Brickwork, AAC block masonry, and internal/external wall partitioning",
      "Internal and external sand-faced or gypsum plastering with curing discipline",
      "Terrace, bathroom, and sunken slab waterproofing treatments",
      "Flooring substrate preparation, tiling, staircase finishing, and parapet work",
      "Coordination with plumbing, electrical, and architectural teams during construction",
    ],
    considerationsAndBenefits: [
      {
        title: "Structured Phase-Wise Execution",
        description:
          "Construction progresses through clearly defined stages—plinth, RCC superstructure, brickwork, plaster, and finishes—allowing transparent quality checks at every milestone.",
      },
      {
        title: "Material & Specification Flexibility",
        description:
          "Whether you prefer turnkey with-material contracting or labour-and-supervision models, scope terms are documented upfront before mobilization.",
      },
      {
        title: "Seamless Transition to Interiors",
        description:
          "Because we handle both civil construction and interior execution, electrical conduits, plumbing lines, and spatial layouts align with your final interior plan.",
      },
    ],
    typicalClients: [
      "Plot owners planning custom family bungalows or row houses in Pune",
      "Homeowners rebuilding or redeveloping existing standalone residential properties",
      "Property owners constructing low-rise residential buildings or multi-family structures",
    ],
    deliverablesNote:
      "Exact construction scope, structural engineering deliverables, municipal sanction coordination, and material brands are finalized during project consultation.",
    whatsappPrefill:
      "Hello Livsmart, I would like to discuss a Building / Bungalow Construction project in Pune. Please contact me.",
    relatedServiceSlugs: [
      "plot-development-infrastructure",
      "interior-design-decoration",
      "renovation-civil-work",
    ],
    faqs: [
      {
        question: "Do you undertake both turnkey (with material) and labour-rate construction?",
        answer:
          "Project contracting models depend on your specific plot requirements, drawings, and material preferences. Contact us with your architectural plan or plot details to discuss the most suitable execution structure.",
        verificationStatus: "verified",
      },
      {
        question: "Can you build according to drawings provided by our own architect or structural engineer?",
        answer:
          "Yes. We regularly execute civil construction based on client-supplied architectural and structural consultancy drawings, ensuring on-site adherence to specifications.",
        verificationStatus: "verified",
      },
      {
        question: "How do we start a bungalow construction estimate in Pune?",
        answer:
          "Share your plot location, approximate built-up area, and any existing floor plans via phone, WhatsApp, or our quote form. We arrange an initial consultation and site visit to prepare an accurate scope breakdown.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-02",
    slug: "plot-development-infrastructure",
    number: "02",
    title: "Plot Development & Infrastructure",
    cardHeadline: "Site Preparation, Boundary Works & Foundational Civil Infrastructure",
    visitingCardLine: "Plot development and infrastructure.",
    categoryTag: "Civil Construction",
    shortDescription:
      "Comprehensive site preparation, land grading, compound walls, drainage channels, internal approaches, and foundational civil infrastructure for residential and commercial plots.",
    introDescription:
      "Before vertical construction begins, raw land requires systematic engineering preparation. Livsmart provides plot development and foundational infrastructure services across Pune and surrounding areas—turning undeveloped plots into secure, well-graded, construction-ready sites.",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Civil site preparation and foundational infrastructure work in progress (Representative engineering imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Site clearing, levelling, earthwork grading, and compaction",
      "Compound wall construction (stone masonry, RCC plinth, brickwork, or precast fencing)",
      "Retaining walls and slope stabilization for contoured plots",
      "Entrance gate pillars, security cabins, and boundary demarcation works",
      "Stormwater drainage channels, soak pits, and underground water tank construction",
      "Internal road sub-base preparation, paving blocks, and hardscaping civil work",
      "Utility trenching for water supply and electrical cabling conduits",
    ],
    considerationsAndBenefits: [
      {
        title: "Plot Security & Boundary Protection",
        description:
          "Durable compound walls and entrance gates secure your land asset and establish clear boundary lines prior to main building construction.",
      },
      {
        title: "Drainage & Contour Management",
        description:
          "Proper site grading, retaining structures, and stormwater runoff planning prevent waterlogging and soil erosion during Pune monsoons.",
      },
      {
        title: "Ready for Future Construction",
        description:
          "Coordinated underground tanks, utility trenches, and approach roads streamline subsequent bungalow or building construction phases.",
      },
    ],
    typicalClients: [
      "Individual plot owners securing and preparing residential plots around Pune",
      "Bungalow plot communities requiring internal roads, drainage, and boundary walls",
      "Commercial or industrial landholders needing site levelling and compound enclosures",
    ],
    deliverablesNote:
      "Scope is customized according to plot topography, soil conditions, and required infrastructure drawings.",
    whatsappPrefill:
      "Hello Livsmart, I would like to discuss Plot Development & Infrastructure work for my site. Please contact me.",
    relatedServiceSlugs: [
      "building-bungalow-construction",
      "renovation-civil-work",
      "society-hotel-maintenance",
    ],
    faqs: [
      {
        question: "Can we hire Livsmart strictly for a compound wall and levelling work on an open plot?",
        answer:
          "Yes. You can engage us specifically for boundary walls, gate installation, land levelling, or water tank civil work even if main building construction is planned for a later date.",
        verificationStatus: "verified",
      },
      {
        question: "Do you inspect undulating or sloped plots before quoting?",
        answer:
          "Yes, an on-site visit is essential for plot development so we can assess access roads, terrain levels, soil strata, and retaining wall requirements.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-03",
    slug: "interior-design-decoration",
    number: "03",
    title: "Interior Design & Decoration",
    cardHeadline: "Thoughtful Residential Interiors, Custom Carpentry & Space Finishing",
    visitingCardLine: "Interior design and decoration.",
    categoryTag: "Interiors",
    shortDescription:
      "Complete residential interior solutions blending practical space planning, bespoke woodwork, false ceilings, lighting coordination, and refined surface decoration.",
    introDescription:
      "Livsmart delivers warm, functional, and durable residential interiors for homeowners in Pune. Whether finishing a newly constructed home or refreshing living spaces, we coordinate layout planning, custom furniture carpentry, modular kitchens, false ceilings, electrical lighting, and decorative wall finishes under single-point supervision.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Warm modern residential living room interior with custom woodwork and ambient lighting (Representative interior imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Space layout planning and functional furniture arrangement",
      "Custom carpentry: wardrobes, TV units, study tables, beds, and storage cabinetry",
      "Modular and semi-modular kitchen fabrication with countertop and backsplash tiling",
      "Gypsum and POP false ceiling design with integrated cove and spot lighting",
      "Flooring installation, wall panelling, veneer/laminate finishing, and decorative moldings",
      "Electrical point relocation, switchboard upgrades, and ambient lighting setups",
      "Soft furnishing coordination, wall textures, wallpapers, and decorative accents",
    ],
    considerationsAndBenefits: [
      {
        title: "Practical Ergonomics & Storage",
        description:
          "Interiors are designed around daily Indian household usage—maximizing storage efficiency, ventilation, and easy-to-maintain finishes.",
      },
      {
        title: "End-to-End Trade Coordination",
        description:
          "Carpenters, electricians, false-ceiling applicators, tilers, and painters work in a synchronized sequence so finishes remain clean and undamaged.",
      },
      {
        title: "Transparent Material Selection",
        description:
          "Clear guidance on plywood grades, laminates, hardware fittings, lighting fixtures, and surface coatings suited to your budget.",
      },
    ],
    typicalClients: [
      "Homeowners moving into new flats or independent bungalows in Pune",
      "Families upgrading living rooms, bedrooms, or kitchens for modern comfort",
      "Homeowners seeking both interior design guidance and reliable on-site execution",
    ],
    deliverablesNote:
      "Interior design scope can cover a single room (such as a kitchen or master bedroom) or a complete turnkey home interior package.",
    whatsappPrefill:
      "Hello Livsmart, I am looking for Interior Design & Decoration services in Pune. Please contact me.",
    relatedServiceSlugs: [
      "hotel-flat-office-interiors",
      "professional-painting",
      "renovation-civil-work",
    ],
    faqs: [
      {
        question: "Do you handle both civil alterations and woodwork for home interiors?",
        answer:
          "Yes. Because we are both civil and interior contractors, we seamlessly handle civil changes like counter breaking, tiling, or wall modifications alongside carpentry and decoration.",
        verificationStatus: "verified",
      },
      {
        question: "Can we choose our own laminate shades, hardware brands, and finishes?",
        answer:
          "Absolutely. All material grades, hardware brands, laminate/veneer catalogues, and paint shades are finalized with your approval prior to procurement and execution.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-04",
    slug: "hotel-flat-office-interiors",
    number: "04",
    title: "Hotel, Flat & Office Interiors",
    cardHeadline: "Tailored Interior Contracting for Apartments, Workspaces & Hospitality",
    visitingCardLine: "Interior of Hotel / Flat / Office.",
    categoryTag: "Interiors",
    shortDescription:
      "Dedicated interior execution for residential flats, corporate offices, retail spaces, and hotels—focused on durability, efficient layouts, and schedule discipline.",
    introDescription:
      "Different property types demand distinct interior contracting priorities. Flats require space-saving comfort; offices need structured workstations, acoustic partitions, and clean cabling; hotels require high-traffic durability and inviting guest rooms. Livsmart executes specialized interior contracting across flats, offices, and hospitality venues in Pune.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Contemporary office and commercial interior with glass partitions and warm timber finishes (Representative interior imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Complete 1BHK, 2BHK, 3BHK, and duplex flat interior fit-outs",
      "Commercial office interiors: workstations, reception desks, conference rooms, and cabins",
      "Aluminum, glass, gypsum, and wooden acoustic partition systems",
      "Hotel guest rooms, reception lobbies, corridors, and dining area interiors",
      "Commercial electrical networking conduits, lighting grids, and HVAC coordination",
      "Heavy-duty commercial flooring, vitrified tiling, carpet tiles, and wall cladding",
      "Restroom and pantry civil and interior upgrades for offices and hospitality properties",
    ],
    considerationsAndBenefits: [
      {
        title: "Sector-Specific Material Durability",
        description:
          "Hospitality and office spaces receive high daily footfall; we recommend sturdy hardware, scratch-resistant surfaces, and serviceable layouts.",
      },
      {
        title: "Compliance with Society & Commercial Norms",
        description:
          "Disciplined working hours, debris management, and material movement protocols suited for occupied residential buildings and commercial complexes.",
      },
      {
        title: "Turnkey Single-Contractor Convenience",
        description:
          "Civil masonry, partitions, ceilings, electricals, carpentry, and painting are managed under one contract to minimize downtime.",
      },
    ],
    typicalClients: [
      "Apartment owners across Pune seeking complete flat interior packages",
      "Business owners, clinics, startups, and corporate offices fitting out workspaces",
      "Hotel, lodge, restaurant, and guest-house owners upgrading rooms and common areas",
    ],
    deliverablesNote:
      "Execution timelines and phasing can be structured to suit new handovers or operational commercial premises.",
    whatsappPrefill:
      "Hello Livsmart, I would like to discuss a Hotel / Flat / Office Interior project. Please contact me.",
    relatedServiceSlugs: [
      "interior-design-decoration",
      "society-hotel-maintenance",
      "professional-painting",
    ],
    faqs: [
      {
        question: "Can you execute office or hotel interior work in phases so business operations can continue?",
        answer:
          "Yes, for operational hotels or offices, we can plan floor-by-floor or zone-by-zone execution schedules during agreed working hours.",
        verificationStatus: "verified",
      },
      {
        question: "Do you undertake complete turnkey interiors for bare-shell flats and commercial units?",
        answer:
          "Yes, from bare-shell flooring and electrical wiring to partitions, furniture, false ceilings, and final painting.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-05",
    slug: "renovation-civil-work",
    number: "05",
    title: "Renovation & Civil Work",
    cardHeadline: "Structural Repairs, Space Remodelling & All Types of Civil Work",
    visitingCardLine: "Renovation and all type of Civil work.",
    categoryTag: "Civil Construction",
    shortDescription:
      "Complete home and commercial renovations, structural alterations, bathroom and kitchen remodelling, waterproofing, tiling, plastering, and general civil contracting.",
    introDescription:
      "Aging properties and evolving lifestyle needs often require careful civil intervention. Livsmart handles renovation and all types of civil work across Pune—ranging from kitchen and bathroom overhauls, flooring replacement, and wall restructuring to leakage rectification, plaster repairs, and structural extensions.",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Architectural renovation and precision civil masonry work (Representative construction imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Controlled dismantling, wall removal/addition, and layout reconfiguration",
      "Complete bathroom renovation: concealed plumbing, waterproofing, and dado/floor tiling",
      "Kitchen civil remodelling: platform reconstruction, sink shifting, and utility extensions",
      "Flooring replacement and re-tiling (vitrified, marble, granite, anti-skid tiles)",
      "Internal and external plaster repair, crack filling, and polymer structural repair",
      "Terrace, balcony, bathroom, and external wall waterproofing solutions",
      "General masonry, brickwork, PCC bedding, lintels, and minor civil extensions",
    ],
    considerationsAndBenefits: [
      {
        title: "Root-Cause Diagnosis Before Covering Up",
        description:
          "In renovation work, we address underlying dampness, plumbing leaks, and hollow plaster before applying new tiles or paint.",
      },
      {
        title: "Careful Demolition & Debris Disposal",
        description:
          "Systematic dismantling protects adjacent structural members and existing utilities while maintaining tidy debris removal.",
      },
      {
        title: "No Civil Job Too Detailed",
        description:
          "We handle both comprehensive whole-property remodels and targeted civil works such as bathroom renovations, flooring upgrades, or masonry repairs.",
      },
    ],
    typicalClients: [
      "Owners of older flats and bungalows in Pune modernizing their properties",
      "Commercial shops and offices reconfiguring layouts or repairing civil wear",
      "Homeowners resolving persistent seepage, damaged tiles, or aging bathrooms",
    ],
    deliverablesNote:
      "Structural wall alterations are always evaluated for load-bearing safety prior to dismantling.",
    whatsappPrefill:
      "Hello Livsmart, I need Renovation / Civil Work services in Pune. Please contact me.",
    relatedServiceSlugs: [
      "building-bungalow-construction",
      "interior-design-decoration",
      "professional-painting",
    ],
    faqs: [
      {
        question: "Can you renovate just the bathrooms and kitchen in an occupied flat?",
        answer:
          "Yes, we frequently execute targeted bathroom and kitchen civil renovations, including waterproofing, plumbing renewal, tiling, and granite platform work.",
        verificationStatus: "verified",
      },
      {
        question: "How do you handle rubble and construction debris during flat renovations?",
        answer:
          "Debris is bagged systematically and cleared from the premises in compliance with housing society rules and local municipal guidelines.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-06",
    slug: "society-hotel-maintenance",
    number: "06",
    title: "Society & Hotel Maintenance",
    cardHeadline: "Reliable Civil Repair, Upkeep & Periodic Maintenance for Societies & Hotels",
    visitingCardLine: "Society and Hotel maintenance.",
    categoryTag: "Maintenance & Finishing",
    shortDescription:
      "Dedicated building maintenance, external plaster and structural repair, waterproofing, common-area civil works, paving, and periodic upkeep for cooperative housing societies and hotels.",
    introDescription:
      "Cooperative housing societies and hospitality properties require dependable contractors to preserve building health, prevent monsoon seepage, and maintain common infrastructure. Livsmart works with society managing committees and hotel management teams in Pune for planned civil repairs, waterproofing, external painting, and infrastructure maintenance.",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Well-maintained residential apartment complex facade and common infrastructure (Representative architectural imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "External building facade plaster repair, crack sealing, and polymer mortar restoration",
      "Terrace waterproofing, parapet wall repairs, and overhead/underground tank waterproofing",
      "Common staircase, lobby, corridor, and parking area flooring/tiling repairs",
      "Compound wall repairs, paving block re-levelling, and chamber/drainage line maintenance",
      "Plumbing shaft repairs, external drainage pipe replacements, and seepage control",
      "Hotel guest-room refurbishment cycles, bathroom tile/grout restoration, and wall upkeep",
      "Complete society external repainting with weather-resistant protective coatings",
    ],
    considerationsAndBenefits: [
      {
        title: "Committee-Friendly Transparency",
        description:
          "Clear item-wise measurements and scope documentation suitable for housing society committee review and general body approvals.",
      },
      {
        title: "Safety & Resident Convenience",
        description:
          "Work is planned to minimize disruption to residents and hotel guests, with clean staging areas and organized site supervision.",
      },
      {
        title: "Long-Term Asset Preservation",
        description:
          "Timely structural crack repair, drainage maintenance, and exterior protection extend building lifespan and curb recurring leakage expenses.",
      },
    ],
    typicalClients: [
      "Cooperative Housing Society (CHS) managing committees across Pune",
      "Hotels, resorts, service apartments, and hostels requiring periodic property maintenance",
      "Commercial complexes and office buildings needing common-area civil repairs",
    ],
    deliverablesNote:
      "We can provide item-rate or lump-sum estimates after conducting a joint building inspection with society or hotel representatives.",
    whatsappPrefill:
      "Hello Livsmart, we would like to discuss Society / Hotel Maintenance work in Pune. Please contact me.",
    relatedServiceSlugs: [
      "professional-painting",
      "renovation-civil-work",
      "hotel-flat-office-interiors",
    ],
    faqs: [
      {
        question: "Do you provide detailed itemised quotations for housing society committee approval?",
        answer:
          "Yes. Following a site inspection with committee members, we prepare a clear, itemised scope and estimate covering repair areas, material specifications, and execution stages.",
        verificationStatus: "verified",
      },
      {
        question: "Can hotels schedule maintenance work for specific wings or rooms at a time?",
        answer:
          "Yes, we coordinate room blocks and maintenance windows with hotel operations so guest occupancy and comfort are not disrupted.",
        verificationStatus: "verified",
      },
    ],
  },
  {
    id: "svc-07",
    slug: "professional-painting",
    number: "07",
    title: "Professional Painting Work",
    cardHeadline: "Interior, Exterior & Decorative Painting with Thorough Surface Preparation",
    visitingCardLine: "Professional Painting Work.",
    categoryTag: "Maintenance & Finishing",
    shortDescription:
      "High-finish interior and exterior painting, wall putty and primer preparation, texture coats, waterproof exterior coatings, and wood/metal polishing for homes, societies, and offices.",
    introDescription:
      "A lasting paint finish is defined by the quality of surface preparation beneath it. Livsmart provides professional painting work for residential flats, bungalows, commercial offices, hotels, and housing societies in Pune—combining thorough scraping, crack filling, putty levelling, and priming with clean, uniform topcoat application.",
    heroImage:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt:
      "Professional interior wall surface preparation and clean architectural paint finishing (Representative imagery)",
    isRepresentativeImagery: true,
    scopeOfWork: [
      "Surface preparation: scraping, sanding, dampness treatment, crack filling, and POP/acrylic putty",
      "Interior wall and ceiling painting (matte, satin, luxury emulsion, and washable finishes)",
      "Exterior building and bungalow painting with weatherproof, anti-algal elastomeric coatings",
      "Decorative wall textures, stencil work, accent walls, and designer finishes",
      "Wood surface finishing: melamine polish, PU coatings, and enamel painting for doors/windows",
      "MS grill, gate, railing, and structural steel anti-corrosive primer and enamel painting",
      "Post-painting masking removal and thorough floor/fixture cleanup",
    ],
    considerationsAndBenefits: [
      {
        title: "Uncompromised Surface Preparation",
        description:
          "We do not paint over flaking coats or damp patches; proper crack filling, primer sealing, and sanding ensure smooth adhesion and longevity.",
      },
      {
        title: "Furniture & Floor Protection",
        description:
          "Existing floors, switchboards, wardrobes, and furniture are carefully masked with protective sheets before painting begins.",
      },
      {
        title: "Genuine Branded Materials",
        description:
          "Use of owner-approved paint brands, primers, and waterproofing compounds suited to interior elegance or Pune monsoon exteriors.",
      },
    ],
    typicalClients: [
      "Flat and bungalow owners refreshing their homes or preparing for festive seasons/handovers",
      "Housing societies undertaking periodic exterior building repainting",
      "Offices, showrooms, and hotels requiring fast, clean turnaround painting",
    ],
    deliverablesNote:
      "Quotations specify the exact number of putty, primer, and topcoats along with the agreed paint product grade.",
    whatsappPrefill:
      "Hello Livsmart, I require a quotation for Professional Painting Work in Pune. Please contact me.",
    relatedServiceSlugs: [
      "interior-design-decoration",
      "society-hotel-maintenance",
      "renovation-civil-work",
    ],
    faqs: [
      {
        question: "How do you protect existing furniture when painting an occupied home?",
        answer:
          "We cover furniture, flooring, and fixtures with drop cloths and masking tape prior to sanding or painting, and perform a clean handover once coats cure.",
        verificationStatus: "verified",
      },
      {
        question: "Do you treat wall dampness or efflorescence before repainting?",
        answer:
          "Yes. Painting directly over active dampness causes peeling. We inspect the source of moisture and recommend appropriate waterproofing or damp-proof base treatments first.",
        verificationStatus: "verified",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: ServiceCategorySlug[]): ServiceItem[] {
  return slugs
    .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceItem => Boolean(s));
}
