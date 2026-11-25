import Link from "next/link";

import { Pictogram } from "@/components/brand/pictogram";
import { cn } from "@/lib/utils";
import type { Solution } from "@/types/content";

export function SolutionCard({
  solution,
  index,
  tone = "light",
  className,
}: {
  solution: Solution;
  index?: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={`/soluciones/${solution.slug}/`}
      className={cn(
        "group flex h-full flex-col gap-6 border-t-2 pt-6 transition-colors",
        dark ? "border-on-dark-line hover:border-signal" : "border-ink/15 hover:border-polar",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Pictogram
          name={solution.pictogram}
          className={cn(
            "size-9",
            dark ? "text-on-dark [--pictogram-accent:var(--color-signal)]" : "text-ink",
          )}
        />
        {index !== undefined ? (
          <span className={cn("font-mono text-xs", dark ? "text-on-dark-muted" : "text-slate")}>
            S{String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={cn(
            "text-xl leading-snug font-semibold transition-colors",
            dark ? "group-hover:text-signal" : "group-hover:text-polar",
          )}
        >
          {solution.name}
        </h3>
        <p
          className={cn(
            "text-[0.95rem] leading-relaxed",
            dark ? "text-on-dark-muted" : "text-slate",
          )}
        >
          {solution.summary}
        </p>
      </div>
    </Link>
  );
}
