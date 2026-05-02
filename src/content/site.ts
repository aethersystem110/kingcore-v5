// ─────────────────────────────────────────────────────
// site.ts — Single source of truth for all editable copy
// Edit this file to update any text on the site.
// ─────────────────────────────────────────────────────

export const COMPANY = {
  name: "Kingcore",
  legalName: "Imperial Synergies",
  tagline: "Precision Paper Tubes & Cores",
  description:
    "A division of Imperial Synergies. Spiral-wound paper tubes & cores, manufactured in Lahore since 1995. Exporting to 12+ countries.",
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
  { label: "Process", href: "#process", section: "process" },
  { label: "Industries", href: "#industries", section: "industries" },
  { label: "Products", href: "#products", section: "products" },
  { label: "Quality", href: "#quality", section: "quality" },
  { label: "About", href: "#about", section: "about" },
  { label: "FAQ", href: "#faq", section: "faq" },
  { label: "Contact", href: "#contact", section: "contact" },
] as const;

// ── Hero ──────────────────────────────────────────────

export const HERO_SLIDES = [
  {
    eyebrow: "Imperial Synergies · Est. 1995",
    headline: "The core of <em>every roll</em>.",
    subtext:
      "Spiral-wound paper tubes & cores — made in Lahore since 1995, shipped to 12+ countries.",
  },
  {
    headline: "Tightly wound. Cleanly <em>cut</em>.",
    subtext:
      "4–12 plies. 18-micron wax. ±0.1 mm cut tolerance. ISO 9001:2015.",
  },
  {
    headline: "Inside everything the world <em>ships</em>.",
    subtext:
      "Textiles, paper, film, tape, construction — exporting since 2003.",
  },
] as const;

// ── Marquee ───────────────────────────────────────────

export const MARQUEE_ITEMS = [
  "Spiral-wound in Lahore",
  "Bonded true",
  "Ground smooth",
  "Waxed to 18 microns",
  "Cut to ±0.1 mm",
  "Inspected, every one",
  "Exporting since 2003",
] as const;

// ── Process ───────────────────────────────────────────

export const PROCESS_CHAPTERS = [
  {
    num: "i",
    fig: "FIG. 01",
    title: "The <em>winding</em>.",
    description:
      "Kraft ribbons feed off stacked reels, meet the mandrel at a 28–45° helical angle, and bond into a multi-ply tube — seams offset by layer.",
    specs: [
      { key: "Plies", val: "4–<em>12</em>" },
      { key: "Adhesive", val: "<em>PVA</em> · starch" },
    ],
  },
  {
    num: "ii",
    fig: "FIG. 02",
    title: "The <em>curing</em>.",
    description:
      "Drying tunnel at 85–95°C sets the adhesive and drops moisture under 8% — the tube emerges dimensionally stable.",
    specs: [
      { key: "Temp", val: "85–95<em>°C</em>" },
      { key: "Moisture", val: "≤ <em>8</em>%" },
    ],
  },
  {
    num: "iii",
    fig: "FIG. 03",
    title: "The <em>grinding</em>.",
    description:
      "A sanding belt rides the rotating tube to an even matte face. Dust is captured by integrated extraction.",
    specs: [
      { key: "Surface", val: "<em>Sanded</em> matte" },
      { key: "Extraction", val: "<em>Integrated</em>" },
    ],
  },
  {
    num: "iv",
    fig: "FIG. 04",
    title: "The <em>wax</em>.",
    description:
      "Heated paraffin is felt-applied and metered to an 18-micron coat, then buffed to the lubricity stretch-film cores demand.",
    specs: [
      { key: "Coating", val: "18 <em>μm</em>" },
      { key: "Wax", val: "<em>Paraffin</em>" },
    ],
  },
  {
    num: "v",
    fig: "FIG. 05",
    title: "The <em>cut</em>.",
    description:
      "Multi-blade saw cuts to ±0.1 mm — square shoulder, chamfered edge, 100% inspected before despatch.",
    specs: [
      { key: "Tolerance", val: "±<em>0.1</em> mm" },
      { key: "QC", val: "<em>100%</em> inspected" },
    ],
  },
] as const;

// ── Stats ─────────────────────────────────────────────

export const STATS_SECTION = {
  eyebrow: "By the Numbers",
  headline: "Three decades, <em>measured</em>.",
  description:
    "Verified per batch. The figures procurement teams ask for first.",
  items: [
    { key: "In trade since", value: 30, suffix: "+ years", decimals: 0 },
    { key: "Monthly capacity", value: 500, suffix: "K cores", decimals: 0 },
    { key: "Export markets", value: 12, suffix: "+ countries", decimals: 0 },
    { key: "Cut tolerance", value: 0.1, suffix: "mm", decimals: 1, prefix: "±" },
  ],
} as const;

// ── Industries ────────────────────────────────────────

export const INDUSTRIES_SECTION = {
  eyebrow: "Industries Served",
  headline: "Inside <em>everything</em> the world ships.",
  description:
    "Eight markets, one production line — every tube wound on the same press, to the same tolerance.",
  items: [
    { num: "i.", name: "Textiles & fabric rolls", description: "Yarn winding, weaving beams, fabric roll packaging." },
    { num: "ii.", name: "Paper & film rolls", description: "Paper mills, BOPP film, laminate winding." },
    { num: "iii.", name: "Tape & labels", description: "Adhesive tape, label stock, receipt rolls." },
    { num: "iv.", name: "Yarn & thread", description: "Spinning mills, thread cones." },
    { num: "v.", name: "Construction forms", description: "Concrete column forming, structural tubes." },
    { num: "vi.", name: "Carpet & flooring", description: "Carpet rolls, vinyl flooring, underlay." },
    { num: "vii.", name: "Foil & food packaging", description: "Aluminum foil, cling film, baking paper." },
    { num: "viii.", name: "Stretch & speciality film", description: "Stretch wrap, shrink film, speciality substrates." },
  ],
} as const;

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

export const QUALITY_SECTION = {
  eyebrow: "Quality & Capability",
  headline: "Three promises in <em>every</em> shipment.",
  items: [
    {
      num: "i.",
      title: "Consistent <em>wall</em> construction.",
      description:
        "Identical wall thickness, batch to batch — verified at the press.",
    },
    {
      num: "ii.",
      title: "Clean-cut <em>ends</em>.",
      description:
        "Cut to ±0.1 mm. No fraying, no delamination, ready to load.",
    },
    {
      num: "iii.",
      title: "Export-ready <em>packaging</em>.",
      description:
        "Palletised, shrink-wrapped, container-optimised. ISO 9001:2015.",
    },
  ],
} as const;

// ── Exports ───────────────────────────────────────────

export const EXPORTS = {
  eyebrow: "Export Programme",
  headline: "From Lahore to <em>twelve</em> countries — and counting.",
  description:
    "Container-optimised, palletised to converter spec. MOQ 1×20-ft container. 24-hour quote turnaround.",
  markets: [
    { name: "Lahore, PK", role: "Origin · 1995" },
    { name: "Middle East", role: "Active" },
    { name: "Central Asia", role: "Active" },
    { name: "Europe", role: "Active" },
  ],
} as const;

// ── FAQ ───────────────────────────────────────────────

export const FAQ_SECTION = {
  eyebrow: "Procurement",
  headline: "For the <em>buyers</em> who do their homework.",
  items: [
    {
      num: "i.",
      question: "What inner diameters and lengths are <em>standard</em>?",
      answer:
        "Standard production runs at inner diameters from 1″ to 16″, with wall thickness 2–15 mm. Custom inner diameters are quoted to spec; length is cut to your requirement at ±0.1 mm tolerance.",
    },
    {
      num: "ii.",
      question: "What's the minimum order quantity?",
      answer:
        "For export, MOQ is one 20-foot container. We palletise and shrink-wrap container-optimised. Smaller domestic orders are quoted on request.",
    },
    {
      num: "iii.",
      question: "What is your lead time?",
      answer:
        "Quote turnaround within 24 hours. Production lead time is typically 2–3 weeks from confirmed PO, plus ocean freight. We currently ship to twelve-plus countries across the Middle East, Central Asia and Europe.",
    },
    {
      num: "iv.",
      question: "How is the wax coating <em>applied and verified</em>?",
      answer:
        "Heated liquid paraffin is applied by felt at controlled temperature, then polished. Coating thickness is metered to 18 microns and verified per batch — a tighter spec than typical industry coatings, demanded by stretch-film converters.",
    },
    {
      num: "v.",
      question: "Can you print or coat to our specification?",
      answer:
        "Yes — printed surfaces, specialty adhesives, custom wall thicknesses, and non-standard IDs are all available. Send us your spec sheet and we'll quote.",
    },
  ],
} as const;

// ── CTA ───────────────────────────────────────────────

export const CTA_SECTION = {
  eyebrow: "Open an Inquiry",
  headline: "Spec it. We&rsquo;ll <em>quote it in 24 hours</em>.",
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
