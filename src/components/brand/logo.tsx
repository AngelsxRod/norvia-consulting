import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  /** Color del acento (la punta de norte). */
  accent?: string;
  title?: string;
};

/**
 * Isotipo de Norvia: una «N» trazada como recorrido continuo cuyo trazo final
 * se convierte en una aguja que apunta al norte.
 */
export function LogoMark({ className, accent = "var(--color-signal)", title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      <path
        d="M7 27V9.5L24 26.5V13"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M24 2.5 29.5 11h-11L24 2.5Z" fill={accent} />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  accent?: string;
  /** Muestra «Consulting» junto al nombre. */
  descriptor?: boolean;
};

export function Logo({ className, accent, descriptor = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-7" accent={accent} />
      <span className="flex items-baseline gap-2 leading-none">
        <span className="text-[1.35rem] font-semibold tracking-[-0.04em]">norvia</span>
        {descriptor ? (
          <span className="hidden font-mono text-[0.62rem] tracking-[0.14em] uppercase opacity-70 sm:inline lg:hidden xl:inline">
            Consulting
          </span>
        ) : null}
      </span>
    </span>
  );
}
