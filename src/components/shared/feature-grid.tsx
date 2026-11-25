import { cn } from "@/lib/utils";
import type { Capability } from "@/types/content";

/** Rejilla de capacidades o beneficios con numeración en coordenadas. */
export function FeatureGrid({
  items,
  prefix = "C",
  className,
  tone = "light",
}: {
  items: Capability[];
  prefix?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ul className={cn("grid gap-x-10 gap-y-8 sm:grid-cols-2", className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "flex flex-col gap-2 border-t pt-5",
            dark ? "border-on-dark-line" : "border-ink",
          )}
        >
          <span className={cn("font-mono text-xs", dark ? "text-signal" : "text-polar")}>
            {prefix}
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className={cn("leading-relaxed", dark ? "text-on-dark-muted" : "text-slate")}>
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
