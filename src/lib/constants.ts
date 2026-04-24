export const COMPANY = {
  name: "King Core",
  legalName: "Imperial Synergies",
  tagline: "Precision Paper Tubes & Cores",
  description:
    "Pakistan's leading manufacturer of precision paper tubes, cores, and cones for textile, packaging, and industrial applications.",
  founded: 1995,
  location: "Lahore, Pakistan",
} as const;

export const CONTACT = {
  whatsapp: "+92-320-4471003",
  whatsappLink: "https://wa.me/923204471003",
  email: "info@kingcore.pk",
  phone: "+92-320-4471003",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const PRODUCTS = [
  {
    name: "Textile Cores",
    description: "High-strength cores for yarn winding, weaving, and spinning mills.",
  },
  {
    name: "Packaging Tubes",
    description: "Custom-diameter tubes for flexible packaging, film, and foil winding.",
  },
  {
    name: "Industrial Cores",
    description: "Heavy-duty cores for paper mills, steel coils, and cable winding.",
  },
  {
    name: "Cones",
    description: "Precision cones for textile machinery with consistent taper angles.",
  },
] as const;

export const INDUSTRIES = [
  "Textile & Yarn",
  "Flexible Packaging",
  "Paper & Board",
  "Steel & Metal",
  "Adhesive Tapes",
  "Cable & Wire",
] as const;
