"use client";

import { useEffect, useState, useCallback } from "react";
import { NAV_LINKS, CONTACT } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Logo reappears only after leaving the hero section
      const hero = document.querySelector('[aria-label="Hero"]');
      if (hero) {
        setPastHero(window.scrollY > hero.getBoundingClientRect().height - window.innerHeight);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const y =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg)]/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-px)] py-4 md:py-5"
          aria-label="Main navigation"
        >
          {/* Logo — hidden in hero, appears when scrolled past */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-serif text-xl tracking-wide transition-all duration-500 md:text-2xl ${
              pastHero
                ? "text-[var(--color-text)] translate-x-0 opacity-100"
                : "text-white -translate-x-3 opacity-0 pointer-events-none"
            }`}
          >
            Kingcore
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-accent)] ${
                    scrolled
                      ? "text-[var(--color-text-muted)]"
                      : "text-white/70"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Get a Quote
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`flex h-10 w-10 items-center justify-center md:hidden ${
              scrolled ? "text-[var(--color-text)]" : "text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform"
            >
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ────────────────────── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--color-bg)] transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Spacer for header */}
        <div className="h-20" />

        <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-serif text-3xl text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 flex flex-col items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Get a Quote
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              WhatsApp: {CONTACT.whatsapp}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
