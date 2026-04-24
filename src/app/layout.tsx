import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kingcore — Precision Paper Tubes & Cores",
    template: "%s | Kingcore",
  },
  description:
    "Pakistan's leading manufacturer of precision paper tubes, cores, and cones for textile, packaging, and industrial applications. ISO-certified quality, export-ready.",
  metadataBase: new URL("https://kingcore.pk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kingcore",
    title: "Kingcore — Precision Paper Tubes & Cores",
    description:
      "Precision paper tubes and cores for textile, packaging, and industrial applications. Exporting from Lahore to 12+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingcore — Precision Paper Tubes & Cores",
  },
  robots: { index: true, follow: true },
};

// Organization structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kingcore",
  legalName: "Imperial Synergies",
  url: "https://kingcore.pk",
  description:
    "Pakistan's leading manufacturer of precision paper tubes, cores, and cones for textile, packaging, and industrial applications.",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-320-4471003",
    contactType: "sales",
    email: "info@kingcore.pk",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
