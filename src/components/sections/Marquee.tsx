import { MARQUEE_ITEMS } from "@/content/site";

export function Marquee() {
  const items = MARQUEE_ITEMS.map((t) => t).join(" ✦ ") + " ✦ ";

  return (
    <div
      className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-night)] py-8 text-[var(--color-paper)]"
      aria-hidden="true"
    >
      <div
        className="flex gap-20 whitespace-nowrap font-serif text-2xl italic"
        style={{ animation: "marquee-scroll 50s linear infinite" }}
      >
        <span className="flex items-center gap-20">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`a${i}`} className="flex items-center gap-20">
              {item}
              <span className="text-sm not-italic text-[var(--color-accent)]">
                ✦
              </span>
            </span>
          ))}
        </span>
        <span className="flex items-center gap-20">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`b${i}`} className="flex items-center gap-20">
              {item}
              <span className="text-sm not-italic text-[var(--color-accent)]">
                ✦
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
