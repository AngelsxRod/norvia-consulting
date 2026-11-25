"use client";

import { motion } from "motion/react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";
import type { DiagramLayer } from "@/types/content";

type ArchitectureDiagramProps = {
  layers: DiagramLayer[];
  title?: string;
  className?: string;
};

/**
 * Diagrama conceptual por capas. Cada capa es un botón: al seleccionarla se
 * resalta y su descripción se anuncia en una región viva.
 */
export function ArchitectureDiagram({
  layers,
  title = "Arquitectura conceptual",
  className,
}: ArchitectureDiagramProps) {
  const [activeId, setActiveId] = useState(layers[0]?.id);
  const descriptionId = useId();
  const active = layers.find((layer) => layer.id === activeId) ?? layers[0];

  return (
    <figure className={cn("grid gap-8 lg:grid-cols-12", className)}>
      <div className="relative flex flex-col gap-3 lg:col-span-8" role="group" aria-label={title}>
        <span aria-hidden className="absolute top-6 bottom-6 left-[1.4rem] w-px bg-line" />
        {layers.map((layer, index) => {
          const selected = layer.id === active?.id;
          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={selected}
              aria-describedby={selected ? descriptionId : undefined}
              onClick={() => setActiveId(layer.id)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveId(layer.id);
              }}
              className="group relative grid cursor-pointer grid-cols-[2.8rem_1fr] items-stretch gap-4 text-left"
            >
              <span
                className={cn(
                  "relative z-10 mt-4 flex size-[2.8rem] items-center justify-center rounded-full border bg-paper font-mono text-xs transition-colors",
                  selected ? "border-polar bg-polar text-white" : "border-line text-slate",
                )}
              >
                L{index + 1}
              </span>
              <span
                className={cn(
                  "relative flex flex-col gap-3 overflow-hidden border p-4 transition-colors sm:flex-row sm:items-center sm:justify-between",
                  selected
                    ? "border-ink bg-white"
                    : "border-line bg-white/50 group-hover:border-line-strong",
                )}
              >
                {selected ? (
                  <motion.span
                    layoutId="diagram-active"
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-polar"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                ) : null}
                <span className="font-semibold">{layer.label}</span>
                <span className="flex flex-wrap gap-1.5">
                  {layer.nodes.map((node) => (
                    <span
                      key={node}
                      className={cn(
                        "border px-2 py-1 font-mono text-[0.68rem] transition-colors",
                        selected
                          ? "border-polar/40 bg-polar-soft text-polar"
                          : "border-line text-slate",
                      )}
                    >
                      {node}
                    </span>
                  ))}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <figcaption className="flex flex-col gap-4 lg:col-span-4 lg:pt-4">
        <p className="eyebrow text-polar">{title}</p>
        <div id={descriptionId} aria-live="polite" className="flex flex-col gap-3">
          <p className="text-h3 font-semibold">{active?.label}</p>
          <p className="leading-relaxed text-slate">{active?.description}</p>
        </div>
        <p className="text-sm text-slate">
          Seleccione una capa para ver su función dentro de la arquitectura.
        </p>
      </figcaption>
    </figure>
  );
}
