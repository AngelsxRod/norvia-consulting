import { cn } from "@/lib/utils";
import type { Step } from "@/types/content";

type ProcessTimelineProps = {
  steps: Step[];
  tone?: "light" | "dark";
  className?: string;
};

/** Secuencia horizontal en escritorio y vertical en móvil, unida por una línea de ruta. */
export function ProcessTimeline({ steps, tone = "light", className }: ProcessTimelineProps) {
  const dark = tone === "dark";
  return (
    <ol
      className={cn(
        "grid gap-0 md:gap-6",
        steps.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-5 pb-8 md:flex-col md:gap-4 md:pb-0">
          <div className="flex flex-col items-center md:flex-row">
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
                dark ? "border-signal text-signal" : "border-ink text-ink",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "w-px flex-1 md:h-px md:w-auto",
                  dark ? "bg-on-dark-line" : "bg-line",
                )}
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-2 pt-1.5 md:pt-0 md:pr-4">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p
              className={cn(
                "text-[0.95rem] leading-relaxed",
                dark ? "text-on-dark-muted" : "text-slate",
              )}
            >
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
