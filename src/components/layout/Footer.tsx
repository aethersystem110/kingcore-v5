import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { COMPANY, CONTACT, NAV_LINKS } from "@/content/site";

const FOOTER_COLS = [
  {
    title: "Method",
    links: [
      { label: "Winding", href: "#process" },
      { label: "Curing", href: "#process" },
      { label: "Grinding", href: "#process" },
      { label: "Wax coating", href: "#process" },
      { label: "Cutting & QC", href: "#process" },
    ],
  },
  {
    title: "Programme",
    links: [
      { label: "Industries", href: "#industries" },
      { label: "Export markets", href: "#exports" },
      { label: "Quality & capability", href: "#quality" },
      { label: "Procurement FAQ", href: "#faq" },
      { label: "Open an inquiry", href: "#contact" },
    ],
  },
  {
    title: "Office",
    links: [
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}` },
      { label: "WhatsApp", href: CONTACT.whatsappUrl, external: true },
      { label: CONTACT.address, href: "#" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--color-night-dark)] pt-20 pb-10 text-[var(--color-paper)]" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--color-paper)]/12 pb-14 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-14">
          {/* Logo + tagline */}
          <div>
            <LogoMark className="text-[34px] tracking-tight text-[var(--color-paper)]" dotSize={6} />
            <p className="mt-[18px] max-w-[340px] font-serif text-lg italic leading-[1.5] text-[var(--color-paper)]/60">
              A division of {COMPANY.legalName}. Spiral-wound, ground, waxed and
              cut in Lahore — by appointment, since {COMPANY.founded}.
            </p>
          </div>

          {/* Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {col.title}
              </h4>
              <ul className="list-none space-y-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-[var(--color-paper)]/70 transition-colors duration-250 hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--color-paper)]/40">
          <span>
            {COMPANY.legalName} · Est. {COMPANY.founded} ·{" "}
            {COMPANY.certifications} · &copy; {new Date().getFullYear()}
          </span>
          <span>Made in Pakistan</span>
        </div>
      </Container>
    </footer>
  );
}
