import { cn } from "@/lib/utils";

type SplitSectionProps = {
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/** Bloque editorial asimétrico: etiqueta y título fijos a la izquierda, contenido a la derecha. */
export function SplitSection({
  eyebrow,
  title,
  id,
  children,
  className,
  tone = "light",
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid gap-8 border-t pt-10 lg:grid-cols-12 lg:gap-12",
        tone === "light" ? "border-line" : "border-on-dark-line",
        className,
      )}
    >
      <div className="flex flex-col gap-3 lg:col-span-4">
        <div className="flex flex-col gap-3 lg:sticky lg:top-28">
          <p className={cn("eyebrow", tone === "light" ? "text-polar" : "text-signal")}>
            {eyebrow}
          </p>
          <h2 id={id} className="max-w-[18ch] scroll-mt-28 text-h3 font-semibold">
            {title}
          </h2>
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  );
}
