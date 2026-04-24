import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />

        {/* Teaser — proves hero unsticks and normal scroll resumes */}
        <section className="flex min-h-[60vh] items-center justify-center bg-[var(--color-bg)]">
          <div className="px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Coming next
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--color-text)] md:text-5xl">
              Industries. Products. Process.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--color-text-muted)]">
              The rest of the site is being built. Scroll back up to preview the
              hero experience.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
