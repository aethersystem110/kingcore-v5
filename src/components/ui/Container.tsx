interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-[var(--container-max)] px-[var(--container-px)] ${className}`}
    >
      {children}
    </div>
  );
}
