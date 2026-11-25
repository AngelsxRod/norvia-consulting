"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import type { MethodologyStage } from "@/data/methodology";
import { cn } from "@/lib/utils";

/**
 * Narrativa de las siete etapas: todo el contenido está en el HTML; el índice
 * lateral resalta la etapa visible y permite saltar entre ellas con anclas.
 */
export function MethodologyScroller({ stages }: { stages: MethodologyStage[] }) {
  const [active, setActive] = useState<string | undefined>(stages[0]?.number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.getAttribute("data-stage") ?? undefined);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document.querySelectorAll("[data-stage]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const activeIndex = stages.findIndex((stage) => stage.number === active);
  const progress = stages.length > 1 ? Math.max(0, activeIndex) / (stages.length - 1) : 1;

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <nav aria-label="Etapas de la metodología" className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <div className="relative pl-6">
            <span aria-hidden className="absolute top-2 bottom-2 left-0 w-px bg-line" />
            <motion.span
              aria-hidden
              className="absolute top-2 left-0 w-px origin-top bg-polar"
              style={{ height: "calc(100% - 1rem)" }}
              animate={{ scaleY: progress }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <ol className="flex flex-col">
              {stages.map((stage) => {
                const current = stage.number === active;
                return (
                  <li key={stage.number}>
                    <a
                      href={`#etapa-${stage.number}`}
                      aria-current={current ? "step" : undefined}
                      className={cn(
                        "relative flex min-h-11 items-center gap-4 py-1 transition-colors",
                        current ? "text-ink" : "text-slate hover:text-ink",
                      )}
                    >
                      {current ? (
                        <motion.span
                          layoutId="methodology-dot"
                          aria-hidden
                          className="absolute -left-[1.6rem] size-2.5 rounded-full bg-polar"
                        />
                      ) : null}
                      <span className="font-mono text-xs">{stage.number}</span>
                      <span className={cn("font-medium", current && "font-semibold")}>
                        {stage.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:col-span-8">
        {stages.map((stage) => (
          <article
            key={stage.number}
            id={`etapa-${stage.number}`}
            data-stage={stage.number}
            className="grid scroll-mt-28 gap-6 border-t border-line py-12 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline gap-5">
              <span className="text-[clamp(3rem,2rem+3vw,5rem)] leading-none font-semibold tracking-tighter text-polar/25">
                {stage.number}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-h3 font-semibold">{stage.title}</h2>
                <p className="font-mono text-xs text-slate">
                  Duración orientativa: {stage.duration}
                </p>
              </div>
            </div>
            <p className="text-lead font-medium">{stage.question}</p>
            <p className="max-w-2xl leading-relaxed text-slate">{stage.description}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-3 border-l-2 border-ink pl-4">
                <h3 className="eyebrow text-slate">Actividades</h3>
                <ul className="flex flex-col gap-1.5">
                  {stage.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-2 border-polar pl-4">
                <h3 className="eyebrow text-polar">Entregables</h3>
                <ul className="flex flex-col gap-1.5">
                  {stage.outputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
