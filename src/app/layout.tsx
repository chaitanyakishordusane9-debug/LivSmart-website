import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://livsmart.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BUSINESS_INFO.fullName} | ${BUSINESS_INFO.positioningLine} in Pune`,
    template: `%s | ${BUSINESS_INFO.fullName} Pune`,
  },
  description:
    "Livsmart Engineers & Contractors is a civil contracting and interior solutions business based in Sadashiv Peth, Pune. Specializing in building & bungalow construction, plot development, residential & commercial interiors, renovation, society maintenance, and painting.",
  keywords: [
    "Civil contractor in Pune",
    "Building construction contractor in Pune",
    "Bungalow construction in Pune",
    "Interior contractor in Pune",
    "Home renovation contractor in Pune",
    "Office interior contractor in Pune",
    "Painting contractor in Pune",
    "Society maintenance contractor in Pune",
    "Plot development contractor in Pune",
    "Livsmart Engineers and Contractors",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: BUSINESS_INFO.fullName,
    title: `${BUSINESS_INFO.fullName} — Interior & Civil Contractor in Pune`,
    description:
      "Building Spaces. Creating Possibilities. Civil construction, plot development, interiors, renovation, society maintenance, and professional painting in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified LocalBusiness structured data (strictly verified details only — no unverified ratings, hours, or fake reviews)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_INFO.fullName,
    alternateName: "Livsmart Engineers And Contractors",
    description:
      "Civil contracting and interior solutions in Pune: bungalow and building construction, plot development, residential and commercial interiors, renovation, society maintenance, and painting.",
    url: siteUrl,
    telephone: BUSINESS_INFO.phones.primary.tel,
    email: BUSINESS_INFO.emails.primary,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phones.primary.tel,
        contactType: "customer service",
        areaServed: "Pune, Maharashtra, India",
        availableLanguage: ["English", "Marathi", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phones.alternate.tel,
        contactType: "sales",
        areaServed: "Pune, Maharashtra, India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}`,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: "411030",
      addressRegion: BUSINESS_INFO.address.state,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Civil Construction & Interior Contracting Services",
      itemListElement: SERVICES_DATA.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${siteUrl}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#F5F3EF] text-[#191919] selection:bg-[#E8792E] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E8792E] focus:text-white focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
