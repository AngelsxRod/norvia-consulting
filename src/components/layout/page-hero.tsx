import { Photo } from "@/components/media/photo";
import { cn } from "@/lib/utils";
import type { ImageKey } from "@/types/content";

import { Breadcrumbs, type Crumb } from "./breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  image?: ImageKey;
  /** Coordenada decorativa (p. ej. «N 08»). */
  index?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
};

/** Cabecera de página interior: composición asimétrica sobre fondo petróleo. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  index,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-petrol text-on-dark">
      <div aria-hidden className="absolute inset-0 bg-grid-dark" />
      <div className="relative container-wide grid gap-10 pt-10 pb-16 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-24">
        <div
          className={cn("flex flex-col gap-8", image || aside ? "lg:col-span-7" : "lg:col-span-10")}
        >
          <Breadcrumbs items={crumbs} tone="dark" />
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-3 eyebrow text-signal">
              <span aria-hidden className="h-px w-8 bg-current" />
              {eyebrow}
              {index ? <span className="text-on-dark-muted">{index}</span> : null}
            </p>
            <h1 className="max-w-[20ch] text-h1 font-semibold">{title}</h1>
            <p className="max-w-2xl text-lead text-on-dark-muted">{description}</p>
          </div>
          {children}
        </div>
        {image ? (
          <div className="relative lg:col-span-5 lg:self-end">
            <Photo
              image={image}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full lg:aspect-[5/4]"
            />
            <span
              aria-hidden
              className="absolute -top-3 -left-3 size-6 border-t-2 border-l-2 border-signal"
            />
            <span
              aria-hidden
              className="absolute -right-3 -bottom-3 size-6 border-r-2 border-b-2 border-signal"
            />
          </div>
        ) : null}
        {aside ? <div className="lg:col-span-5 lg:self-end">{aside}</div> : null}
      </div>
    </section>
  );
}
