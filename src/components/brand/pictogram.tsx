import { cn } from "@/lib/utils";
import type { PictogramName } from "@/types/content";

/**
 * Pictogramas propios de Norvia: trazo de 1,5 px sobre una retícula de 32 px,
 * con un único punto de acento que marca la «dirección» de cada concepto.
 */
const paths: Record<PictogramName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3" />
      <path d="m16 9 3 7-3 7-3-7 3-7Z" />
      <circle cx="16" cy="9" r="1.5" data-accent />
    </>
  ),
  transform: (
    <>
      <rect x="4" y="18" width="10" height="10" />
      <path d="M18 4h10v10" />
      <path d="M11 18 26 6" />
      <circle cx="26" cy="6" r="1.5" data-accent />
    </>
  ),
  code: (
    <>
      <path d="m11 9-7 7 7 7M21 9l7 7-7 7" />
      <path d="m18 6-4 20" />
      <circle cx="18" cy="6" r="1.5" data-accent />
    </>
  ),
  cloud: (
    <>
      <path d="M9 23a5 5 0 0 1-.5-10A7.5 7.5 0 0 1 23 12a5.5 5.5 0 0 1 0 11H9Z" />
      <path d="M12 28h8M16 23v5" />
      <circle cx="23" cy="12" r="1.5" data-accent />
    </>
  ),
  spark: (
    <>
      <path d="M16 4v8M16 20v8M4 16h8M20 16h8" />
      <path d="m8 8 4 4M20 20l4 4M24 8l-4 4M12 20l-4 4" />
      <circle cx="16" cy="16" r="2" data-accent />
    </>
  ),
  data: (
    <>
      <ellipse cx="16" cy="8" rx="10" ry="3.5" />
      <path d="M6 8v16c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5V8" />
      <path d="M6 16c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5" />
      <circle cx="26" cy="16" r="1.5" data-accent />
    </>
  ),
  shield: (
    <>
      <path d="M16 4 6 8v8c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V8L16 4Z" />
      <path d="m11.5 16 3 3 6-6" />
      <circle cx="16" cy="4" r="1.5" data-accent />
    </>
  ),
  link: (
    <>
      <rect x="3" y="12" width="10" height="8" rx="1" />
      <rect x="19" y="12" width="10" height="8" rx="1" />
      <path d="M13 16h6" />
      <circle cx="16" cy="16" r="1.5" data-accent />
    </>
  ),
  layers: (
    <>
      <path d="m16 5 12 6-12 6-12-6 12-6Z" />
      <path d="m4 16 12 6 12-6M4 21l12 6 12-6" />
      <circle cx="16" cy="5" r="1.5" data-accent />
    </>
  ),
  flow: (
    <>
      <circle cx="7" cy="8" r="3" />
      <circle cx="25" cy="16" r="3" />
      <circle cx="7" cy="24" r="3" />
      <path d="M10 8h4a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4M10 24h4a4 4 0 0 0 4-4v0a4 4 0 0 1 4-4" />
      <circle cx="25" cy="16" r="1.5" data-accent />
    </>
  ),
  cart: (
    <>
      <path d="M3 5h4l3 15h15l3-11H8.5" />
      <circle cx="12" cy="26" r="2" />
      <circle cx="23" cy="26" r="2" />
      <circle cx="28" cy="9" r="1.5" data-accent />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v24h24" />
      <path d="m8 21 6-7 5 4 8-10" />
      <circle cx="27" cy="8" r="1.5" data-accent />
    </>
  ),
  migrate: (
    <>
      <rect x="3" y="18" width="11" height="10" />
      <path d="M18 9a5 5 0 0 1 9.5 2A4 4 0 0 1 26 19h-7" />
      <path d="M8.5 18V9h6M12 6l3 3-3 3" />
      <circle cx="22" cy="6" r="1.5" data-accent />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="5" width="26" height="17" rx="1" />
      <path d="M11 28h10M16 22v6M8 11h9M8 15h6" />
      <circle cx="23" cy="13" r="1.5" data-accent />
    </>
  ),
  network: (
    <>
      <circle cx="16" cy="6" r="3" />
      <circle cx="6" cy="25" r="3" />
      <circle cx="26" cy="25" r="3" />
      <path d="M14.5 8.6 7.5 22.4M17.5 8.6l7 13.8M9 25h14" />
      <circle cx="16" cy="6" r="1.5" data-accent />
    </>
  ),
  brain: (
    <>
      <path d="M12 6a5 5 0 0 0-5 5 4 4 0 0 0-1 7.5A4.5 4.5 0 0 0 12 26h1V6h-1ZM20 6a5 5 0 0 1 5 5 4 4 0 0 1 1 7.5A4.5 4.5 0 0 1 20 26h-1V6h1Z" />
      <path d="M13 13H9M19 19h4M13 20h-3M19 12h3" />
      <circle cx="16" cy="16" r="1.5" data-accent />
    </>
  ),
};

type PictogramProps = { name: PictogramName; className?: string };

export function Pictogram({ name, className }: PictogramProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "size-8 shrink-0 [&_[data-accent]]:fill-(--pictogram-accent,var(--color-polar)) [&_[data-accent]]:stroke-none",
        className,
      )}
    >
      {paths[name]}
    </svg>
  );
}
