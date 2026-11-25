import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Pictogram } from "@/components/brand/pictogram";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/content";

/** Fila editorial de servicio: número, pictograma, nombre y resumen. */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/servicios/${service.slug}/`}
      className={cn(
        "group relative grid gap-4 border-t border-line py-7 transition-colors hover:border-ink sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-6",
        className,
      )}
    >
      <span className="font-mono text-sm text-slate">{service.number}</span>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <Pictogram name={service.pictogram} className="size-7 text-ink" />
          <h3 className="text-h3 font-semibold transition-colors group-hover:text-polar">
            {service.name}
          </h3>
        </div>
        <p className="max-w-2xl text-slate">{service.summary}</p>
      </div>
      <ArrowUpRight
        aria-hidden
        className="hidden size-6 text-slate transition-transform duration-(--duration-base) group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-polar sm:block"
      />
    </Link>
  );
}
