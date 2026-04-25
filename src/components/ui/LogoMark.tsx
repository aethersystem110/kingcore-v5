interface LogoMarkProps {
  className?: string;
  dotSize?: number;
}

export function LogoMark({ className = "", dotSize = 5 }: LogoMarkProps) {
  return (
    <span className={`font-serif ${className}`}>
      King
      <span
        className="mx-[0.15em] mb-[0.15em] inline-block rounded-full bg-[var(--color-accent)] align-middle"
        style={{ width: dotSize, height: dotSize }}
        aria-hidden="true"
      />
      core
    </span>
  );
}
