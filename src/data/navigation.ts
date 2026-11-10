import { SERVICES_DATA } from "./services";

export interface NavLinkItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description: string;
    number: string;
  }[];
}

export const MAIN_NAVIGATION: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES_DATA.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.cardHeadline,
      number: service.number,
    })),
  },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Why Livsmart", href: "/why-livsmart" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services Overview", href: "/services" },
  { label: "Projects Showcase", href: "/projects" },
  { label: "Work Gallery", href: "/gallery" },
  { label: "Why Choose Livsmart", href: "/why-livsmart" },
  { label: "Client Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Project Quote", href: "/get-a-quote" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
