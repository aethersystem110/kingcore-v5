import { Container } from "@/components/ui/Container";
import { COMPANY, CONTACT, NAV_LINKS, INDUSTRIES, PRODUCT_TYPES } from "@/content/site";

const FOOTER_COLS = [
  {
    title: "Products",
    links: [
      ...PRODUCT_TYPES.map((t) => ({ label: t.name, href: "#products" })),
      { label: "View Specs", href: "#products" },
    ],
  },
  {
    title: "Industries",
    links: INDUSTRIES.slice(0, 6).map((ind) => ({
      label: ind.name,
      href: "#industries",
    })),
  },
  {
    title: "Company",
    links: NAV_LINKS.map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp", href: CONTACT.whatsappUrl, external: true },
      { label: "Email", href: `mailto:${CONTACT.email}` },
      { label: "Phone", href: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}` },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#15110d] pt-16 pb-8 md:pt-20" role="contentinfo">
      <Container>
        {/* Top: logo + columns */}
        <div className="grid gap-10 lg:grid-cols-6">
          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl text-white">
              {COMPANY.name}
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              {COMPANY.tagline}. {COMPANY.location}.
            </p>
            {/* Trust badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/50">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {COMPANY.certifications}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 md:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights
              reserved.
            </p>
            <p className="text-xs text-white/20">Made in Pakistan</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
