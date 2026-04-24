"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-xl tracking-wide transition-colors md:text-2xl ${
            scrolled ? "text-[var(--color-text)]" : "text-white"
          }`}
        >
          Kingcore
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-accent)] ${
                  scrolled ? "text-[var(--color-text-muted)]" : "text-white/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className={`flex h-10 w-10 items-center justify-center md:hidden ${
            scrolled ? "text-[var(--color-text)]" : "text-white"
          }`}
          aria-label="Open menu"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
