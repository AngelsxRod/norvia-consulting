import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

/** Aviso visible de que las cifras son simuladas con fines demostrativos. */
export function SimulatedNote({
  children = "Datos simulados con fines demostrativos. No corresponden a resultados reales.",
  tone = "light",
  className,
}: {
  children?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 font-mono text-[0.72rem] leading-relaxed tracking-wide",
        tone === "light" ? "text-warning" : "text-signal",
        className,
      )}
    >
      <Info aria-hidden className="mt-0.5 size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
