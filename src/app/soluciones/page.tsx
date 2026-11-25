import type { Metadata } from "next";
import Link from "next/link";

import { Pictogram } from "@/components/brand/pictogram";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo } from "@/components/media/photo";
import { CallToAction } from "@/components/shared/call-to-action";
import { Reveal } from "@/components/shared/reveal";
import { getServicesBySlugs } from "@/data/services";
import { solutions } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Soluciones empresariales",
  description:
    "Soluciones para problemas de negocio concretos: modernización de sistemas, automatización, comercio digital, inteligencia empresarial, cloud, experiencia digital, integración e IA aplicada.",
  path: "/soluciones/",
  image: "network-fiber-panel",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        index="08"
        title="Respuestas a problemas de negocio, no catálogos de tecnología."
        description="Cada solución parte de un problema empresarial recurrente y combina varios de nuestros servicios en un enfoque probado, con arquitectura de referencia y proceso de implementación."
        crumbs={[{ label: "Soluciones", href: "/soluciones/" }]}
        aside={
          <div className="grid grid-cols-2 gap-px border border-on-dark-line bg-on-dark-line">
            {[
              ["Servicios", "Capacidades profesionales de Norvia"],
              ["Soluciones", "Problemas concretos que resolvemos"],
            ].map(([title, text], i) => (
              <div
                key={title}
                className={cn("flex flex-col gap-2 p-5", i === 1 ? "bg-ink" : "bg-petrol")}
              >
                <span
                  className={cn(
                    "font-mono text-xs",
                    i === 1 ? "text-signal" : "text-on-dark-muted",
                  )}
                >
                  {title}
                </span>
                <span className="text-sm text-on-dark">{text}</span>
              </div>
            ))}
          </div>
        }
      />
      <Section>
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Catálogo"
            title="Ocho soluciones empresariales."
            description="Seleccione una solución para ver su contexto, arquitectura conceptual, proceso de implementación y casos relacionados."
          />
          <ol className="flex flex-col">
            {solutions.map((solution, index) => (
              <Reveal as="li" key={solution.slug}>
                <Link
                  href={`/soluciones/${solution.slug}/`}
                  className="group grid gap-6 border-t border-line py-10 transition-colors hover:border-ink md:grid-cols-12 md:items-center"
                >
                  <div
                    className={cn(
                      "md:col-span-4",
                      index % 2 === 1 && "md:order-last md:col-start-9",
                    )}
                  >
                    <Photo
                      image={solution.image}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="aspect-[4/3]"
                      imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className={cn(
                      "flex flex-col gap-4 md:col-span-7",
                      index % 2 === 0 ? "md:col-start-6" : "md:col-start-1 md:row-start-1",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-polar">
                        S{String(index + 1).padStart(2, "0")}
                      </span>
                      <Pictogram name={solution.pictogram} className="size-7" />
                    </div>
                    <h2 className="text-h3 font-semibold group-hover:text-polar">
                      {solution.name}
                    </h2>
                    <p className="max-w-xl text-slate">{solution.summary}</p>
                    <p className="font-mono text-xs text-slate">
                      Combina:{" "}
                      {getServicesBySlugs(solution.services)
                        .map((s) => s.shortName)
                        .join(" · ")}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>
      <CallToAction
        title="¿Su problema no aparece en la lista?"
        description="Las soluciones resumen patrones frecuentes. Si su caso es distinto, empezamos por un diagnóstico."
      />
    </>
  );
}
