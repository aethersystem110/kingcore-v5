"use client";

import { useEffect, useState, useCallback } from "react";
import { NAV_LINKS, CONTACT } from "@/content/site";
import { LogoMark } from "@/components/ui/LogoMark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const hero = document.querySelector('[aria-label="Hero"]');
      if (hero) {
        setPastHero(
          window.scrollY > hero.getBoundingClientRect().height - window.innerHeight,
        );
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.section);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        const y =
          target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          pastHero
            ? "border-b border-[var(--color-border-light)] bg-[var(--color-bg)]/92 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "var(--ease)" }}
      >
        <nav
          className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-px)] py-[18px]"
          aria-label="Main navigation"
        >
          {/* Logo — hidden in hero, slides in after */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className={`flex items-center gap-2.5 transition-all duration-500 ${
              pastHero
                ? "translate-x-0 opacity-100"
                : "-translate-x-2 pointer-events-none opacity-0"
            }`}
            style={{ transitionTimingFunction: "var(--ease)" }}
          >
            <LogoMark className="text-2xl tracking-tight text-[var(--color-text)]" dotSize={5} />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-1.5 text-[13px] tracking-[0.01em] transition-colors duration-250 hover:text-[var(--color-accent)] ${
                  pastHero ? "text-[var(--color-text-muted)]" : "text-white/75"
                } ${activeSection === link.section ? "text-[var(--color-accent)]" : ""}`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-px bg-[var(--color-accent)] transition-transform duration-350 origin-left ${
                    activeSection === link.section
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease)" }}
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="rounded-full bg-[var(--color-accent)] px-[22px] py-[11px] text-[13px] font-medium text-white transition-colors duration-350 hover:bg-[var(--color-accent-hover)]"
            >
              Get a quote →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`flex h-10 w-10 items-center justify-center md:hidden ${
              pastHero ? "text-[var(--color-text)]" : "text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--color-bg)] transition-all duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
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
              className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-white"
            >
              Get a quote →
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)]"
            >
              WhatsApp: {CONTACT.whatsapp}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
