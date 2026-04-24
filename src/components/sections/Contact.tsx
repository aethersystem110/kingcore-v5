"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CONTACT, INQUIRY_INDUSTRIES } from "@/content/site";

interface FormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  quantity: string;
  innerDiameter: string;
  wallThickness: string;
  length: string;
  industry: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  quantity: "",
  innerDiameter: "",
  wallThickness: "",
  length: "",
  industry: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 transition-colors focus:border-[var(--color-accent)] focus:outline-none";

  return (
    <section
      id="contact"
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                id="contact-heading"
                className="mt-4 font-serif text-3xl leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl"
              >
                Request a quote.
              </h2>
              <p className="mt-4 text-base text-[var(--color-text-muted)]">
                Tell us your core specs and destination. We&rsquo;ll respond
                within one business day.
              </p>
            </ScrollReveal>

            {status === "sent" ? (
              <ScrollReveal>
                <div className="mt-10 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-8 text-center">
                  <p className="font-serif text-2xl text-[var(--color-text)]">
                    Thank you.
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    We&rsquo;ve received your inquiry and will respond within
                    one business day.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal delay={0.2}>
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-5"
                  noValidate
                >
                  {/* Row: Name + Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Company *"
                      required
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Row: Country + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Country *"
                      required
                      value={form.country}
                      onChange={(e) => set("country", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Row: Phone + Quantity */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Quantity needed * (e.g. 10,000/month)"
                      required
                      value={form.quantity}
                      onChange={(e) => set("quantity", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Core specs */}
                  <p className="pt-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    Core specs (optional)
                  </p>
                  <div className="grid gap-5 sm:grid-cols-3">
                    <input
                      type="text"
                      placeholder="Inner diameter"
                      value={form.innerDiameter}
                      onChange={(e) => set("innerDiameter", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Wall thickness"
                      value={form.wallThickness}
                      onChange={(e) => set("wallThickness", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Length"
                      value={form.length}
                      onChange={(e) => set("length", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Industry */}
                  <select
                    value={form.industry}
                    onChange={(e) => set("industry", e.target.value)}
                    className={`${inputClass} ${
                      !form.industry ? "text-[var(--color-text-muted)]/50" : ""
                    }`}
                  >
                    <option value="">Application / Industry</option>
                    {INQUIRY_INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>

                  {/* Message */}
                  <textarea
                    placeholder="Message (optional)"
                    rows={4}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={`${inputClass} resize-none`}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? "Sending…" : "Submit Inquiry"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  )}
                </form>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar: contact info + map */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {/* WhatsApp */}
                <div>
                  <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    WhatsApp
                  </span>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-serif text-xl text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {CONTACT.whatsapp}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block font-serif text-xl text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    Address
                  </span>
                  <p className="mt-1 text-base text-[var(--color-text)]">
                    {CONTACT.address}
                  </p>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
                  <iframe
                    src={CONTACT.mapEmbedUrl}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kingcore location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
