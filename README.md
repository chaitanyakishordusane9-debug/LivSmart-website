# Livsmart Engineers & Contractors — Official Business Website

A multi-page architecture, civil construction, and interior contracting website built for **Livsmart Engineers & Contractors** (Sadashiv Peth, Kumthekar Road, Pune – 411 030).

## 1. Business Overview & Verified Details

- **Business Name:** Livsmart Engineers & Contractors
- **Positioning Line:** Interior And Civil Contractor
- **Contact Person:** Harshal Dusane
- **Primary Phone & WhatsApp:** `+91 86980 81189`
- **Alternate Phone:** `+91 86525 81189`
- **Primary Email:** `livsmart.engineerscontractors@gmail.com`
- **Alternate Email:** `harsha.hd2@gmail.com`
- **Office Address:** 774, Sadashiv Peth, Garsole Sadan, Office No. 01, Kumthekar Road, Pune – 411 030, Maharashtra, India

---

## 2. Technology Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography:** Manrope (`next/font/google`)
- **Icons:** Lucide React (`lucide-react`)
- **Validation:** Zod (`zod`) on both client and server (`/api/enquiries`)
- **SEO:** Next.js Metadata API, Canonical URLs, Open Graph, `HomeAndConstructionBusiness` & `BreadcrumbList` JSON-LD structured data, dynamic `/sitemap.xml` and `/robots.txt`

---

## 3. Complete Route Sitemap

| Page | Route |
| :--- | :--- |
| Home | `/` |
| About Us | `/about` |
| Services Overview | `/services` |
| 01. Building & Bungalow Construction | `/services/building-bungalow-construction` |
| 02. Plot Development & Infrastructure | `/services/plot-development-infrastructure` |
| 03. Interior Design & Decoration | `/services/interior-design-decoration` |
| 04. Hotel, Flat & Office Interiors | `/services/hotel-flat-office-interiors` |
| 05. Renovation & Civil Work | `/services/renovation-civil-work` |
| 06. Society & Hotel Maintenance | `/services/society-hotel-maintenance` |
| 07. Professional Painting Work | `/services/professional-painting` |
| Projects Showcase | `/projects` |
| Project Detail Template | `/projects/[slug]` |
| Work Gallery & Lightbox | `/gallery` |
| Why Choose Livsmart | `/why-livsmart` |
| Client Testimonials | `/testimonials` |
| Contact Us | `/contact` |
| Get a Project Quote | `/get-a-quote` |
| Privacy Policy | `/privacy-policy` |
| Enquiries API Endpoint | `/api/enquiries` |
| XML Sitemap | `/sitemap.xml` |
| Robots.txt | `/robots.txt` |
| Custom 404 Page | `not-found.tsx` |

---

## 4. Local Setup & Development

### Prerequisites
- Node.js `18.18+` or `20+`
- `npm`

### Installation & Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Copy environment configuration
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

Open `http://localhost:3000` in your browser.

### Quality Checks & Production Build

```bash
# Run TypeScript type check
npm run typecheck

# Run production build
npm run build

# Start production server locally
npm run start
```

---

## 5. Environment Variables (`.env.example`)

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain URL | `https://livsmart.in` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Primary WhatsApp number in international format without `+` or spaces | `918698081189` |
| `ENQUIRY_WEBHOOK_URL` | Optional server-only webhook URL to forward validated enquiries (e.g. Make/Zapier/Slack/Sheet/Email service) | `""` |
| `ENQUIRY_NOTIFICATION_EMAIL` | Target notification email reference | `livsmart.engineerscontractors@gmail.com` |

> **Security Note:** Never commit `.env.local` or private API/SMTP credentials to Git.

---

## 6. Content Update Guide (For Business Owner / Maintainer)

All business details, services, projects, gallery photos, and testimonials are cleanly separated under `src/data/`:

1. **Updating Business Contact Details, Hours, Social Links, or Map Pin:**
   - Edit `src/data/business.ts`.
   - Once official Facebook and Instagram profile URLs are verified, set `socialMedia.facebook.url` and `socialMedia.instagram.url`.
   - Once official office hours are confirmed, update `businessHours.displayPlaceholder`.

2. **Adding Verified Livsmart Projects:**
   - Open `src/data/projects.ts`.
   - Add confirmed project entries into `VERIFIED_PROJECTS` with `isPlaceholderShowcase: false` and place genuine site photographs inside `public/images/projects/`.

3. **Adding Genuine Site Photographs to the Gallery:**
   - Place optimized `.webp` or `.jpg` images in `public/images/construction/`, `public/images/interiors/`, etc.
   - Update `src/data/gallery.ts` and set `isRepresentativeStock: false`.

4. **Publishing Verified Client Testimonials:**
   - Open `src/data/testimonials.ts` and add client-approved entries to `VERIFIED_TESTIMONIALS`. Both the Homepage and `/testimonials` page will automatically switch from the *"Client feedback coming soon"* state to displaying the verified testimonials.

---

## 7. Deployment Instructions (Vercel / Netlify)

1. Push the repository to a private GitHub repository.
2. Import the repository into **Vercel** (or another Next.js-compatible commercial host).
3. Configure the environment variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `ENQUIRY_WEBHOOK_URL`) in the hosting dashboard.
4. Deploy and verify all routes, form submissions, `/sitemap.xml`, and `/robots.txt`.
5. Connect the custom domain with HTTPS and submit `/sitemap.xml` to Google Search Console.

