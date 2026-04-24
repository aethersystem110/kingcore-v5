// ─────────────────────────────────────────────────────
// site.ts — Single source of truth for all editable copy
// Edit this file to update any text on the site.
// ─────────────────────────────────────────────────────

export const COMPANY = {
  name: "Kingcore",
  legalName: "Imperial Synergies",
  tagline: "Precision Paper Tubes & Cores",
  description:
    "Pakistan's leading manufacturer of precision paper tubes, cores, and cones for textile, packaging, and industrial applications. Family-run, export-focused, built on three decades of craft.",
  founded: 1995,
  location: "Lahore, Pakistan",
  capacity: "500,000+ cores/month",
  exportingSince: 2003,
  shippingTo: "12+ countries",
  certifications: "ISO 9001:2015",
} as const;

export const CONTACT = {
  whatsapp: "+92-320-4471003",
  whatsappUrl: "https://wa.me/923204471003",
  email: "info@kingcore.pk",
  phone: "+92-320-4471003",
  address: "Industrial Area, Lahore, Punjab, Pakistan",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.3801655!2d74.1455!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190482d30e0821%3A0x80e16a6f25ec2ab4!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
} as const;

export const NAV_LINKS = [
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Hero ──────────────────────────────────────────────

export const HERO_SLIDES = [
  {
    eyebrow: "KINGCORE",
    headline: "The core of every roll",
    subtext: "Paper tube cores, engineered for global industry.",
  },
  {
    headline: "Tightly wound. Cleanly cut.",
    subtext: "Precision kraft construction, finished to spec.",
  },
  {
    headline: "Inside everything the world ships.",
    subtext:
      "Textiles. Paper. Film. Tape. Construction. And everywhere in between.",
  },
] as const;

// ── Industries ────────────────────────────────────────

export const INDUSTRIES = [
  {
    name: "Textiles & Fabric Rolls",
    description:
      "High-strength cores for yarn winding, weaving beams, and fabric roll packaging.",
    icon: "Shirt",
  },
  {
    name: "Paper & Film Rolls",
    description:
      "Consistent-diameter cores for paper mills, BOPP film, and laminate winding.",
    icon: "Scroll",
  },
  {
    name: "Tape & Labels",
    description:
      "Small-bore precision cores for adhesive tape, label stock, and receipt rolls.",
    icon: "Tape",
  },
  {
    name: "Yarn & Thread",
    description:
      "Lightweight cones and cores for spinning mills and thread manufacturing.",
    icon: "Cable",
  },
  {
    name: "Construction & Concrete Forms",
    description:
      "Heavy-wall tubes for concrete column forming and structural applications.",
    icon: "Building2",
  },
  {
    name: "Carpet & Flooring",
    description:
      "Large-diameter cores for carpet rolls, vinyl flooring, and underlay.",
    icon: "Layers",
  },
  {
    name: "Aluminum Foil & Food Packaging",
    description:
      "Food-safe cores for aluminum foil, cling film, and baking paper rolls.",
    icon: "UtensilsCrossed",
  },
  {
    name: "Plastic Film & Specialty Substrates",
    description:
      "Custom cores for stretch wrap, shrink film, and specialty substrates.",
    icon: "Package",
  },
] as const;

// ── Products ──────────────────────────────────────────

export const PRODUCT_SPECS = {
  diameterRange: { min: "1", max: "16", unit: "inches" },
  wallThickness: { min: "2", max: "15", unit: "mm" },
  length: "Custom cut to any length",
  finish: ["Natural kraft", "Coated", "Printed (on request)"],
  construction: "Spiral-wound, high-density kraft paper",
} as const;

export const PRODUCT_TYPES = [
  {
    name: "Standard Cores",
    description:
      "General-purpose spiral-wound cores for textile, paper, and film winding. Available in all standard diameters with consistent wall thickness.",
  },
  {
    name: "Heavy-Duty Cores",
    description:
      "Reinforced cores for high-tension winding, steel coils, and construction forming. Engineered for maximum crush resistance.",
  },
  {
    name: "Custom Cores",
    description:
      "Cores built to your exact spec — non-standard diameters, printed surfaces, specialty adhesives, or unusual lengths. Tell us what you need.",
  },
] as const;

// ── Quality & Capability ─────────────────────────────

export const QUALITY_FEATURES = [
  {
    title: "Consistent wall construction",
    description:
      "Every core rolled to identical wall thickness for predictable roll behavior. No soft spots, no variance between batches.",
    icon: "Ruler",
  },
  {
    title: "Clean-cut ends",
    description:
      "No fraying, no delamination, ready to load. Precision cutting means your rolls seat perfectly every time.",
    icon: "Scissors",
  },
  {
    title: "Export-ready packaging",
    description:
      "Palletized, shrink-wrapped, container-optimized. Your cores arrive undamaged, anywhere in the world.",
    icon: "Container",
  },
] as const;

// ── Process ───────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Premium kraft paper sourcing",
    description:
      "Selected grades of high-density kraft paper, inspected for weight, moisture, and tensile strength.",
    icon: "TreePine",
  },
  {
    step: 2,
    title: "Spiral winding with precision adhesive",
    description:
      "Multi-ply spiral winding on mandrels, with calibrated adhesive application for maximum bond.",
    icon: "RotateCcw",
  },
  {
    step: 3,
    title: "Curing & cutting to length",
    description:
      "Controlled curing for dimensional stability, then precision-cut to your specified length.",
    icon: "Scissors",
  },
  {
    step: 4,
    title: "QC inspection & export packaging",
    description:
      "Every batch inspected for concentricity, wall thickness, and crush strength before palletizing.",
    icon: "ShieldCheck",
  },
] as const;

// ── About ─────────────────────────────────────────────

export const ABOUT = {
  headline: "Three decades of paper. One standard of precision.",
  paragraphs: [
    "Kingcore — a division of Imperial Synergies — has been manufacturing paper tubes, cores, and cones from our facility in Lahore, Pakistan since 1995. What started as a family workshop has grown into one of Pakistan's largest spiral-wound core producers.",
    "We serve export markets across the Middle East, Central Asia, and Europe, supplying cores to textile mills, packaging converters, and industrial manufacturers who need dimensional precision and reliable supply.",
    "Every core we ship carries the same promise: consistent wall construction, clean-cut ends, and packaging that survives the journey.",
  ],
  facts: [
    { label: "Based in", value: COMPANY.location },
    { label: "Exporting since", value: String(COMPANY.exportingSince) },
    { label: "Production capacity", value: COMPANY.capacity },
    { label: "Certifications", value: COMPANY.certifications },
    { label: "Shipping to", value: COMPANY.shippingTo },
  ],
} as const;

// ── Contact Form ──────────────────────────────────────

export const INQUIRY_INDUSTRIES = [
  "Textiles & Yarn",
  "Paper & Film",
  "Tape & Labels",
  "Construction",
  "Carpet & Flooring",
  "Food Packaging",
  "Plastic Film",
  "Other",
] as const;
