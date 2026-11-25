import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CallToAction } from "@/components/shared/call-to-action";
import { SimulatedNote } from "@/components/shared/simulated-note";
import { caseStudies } from "@/data/case-studies";
import { getIndustry, industries } from "@/data/industries";
import { services } from "@/data/services";
import {
  CaseStudyExplorer,
  type CaseStudyListItem,
} from "@/features/case-studies/case-study-explorer";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Casos de éxito",
  description:
    "Doce proyectos tecnológicos ilustrativos con contexto, arquitectura, stack y resultados simulados. Filtre por industria, servicio o tecnología.",
  path: "/casos-de-exito/",
  image: "logistics-aerial",
});

const items: CaseStudyListItem[] = caseStudies.map((item) => ({
  slug: item.slug,
  title: item.title,
  client: item.client,
  clientDescription: item.clientDescription,
  year: item.year,
  summary: item.summary,
  image: item.image,
  highlights: item.highlights.slice(0, 1),
  industry: item.industry,
  industryName: getIndustry(item.industry)?.name ?? "",
  services: item.services,
  stack: item.stack,
}));

const technologyOptions = [...new Set(caseStudies.flatMap((item) => item.stack))]
  .sort((a, b) => a.localeCompare(b, "es"))
  .map((tech) => ({ value: tech, label: tech }));

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos de éxito"
        index="12"
        title="Proyectos ilustrativos, documentados con rigor."
        description="Doce casos ficticios que muestran cómo abordamos problemas reales de distintas industrias: contexto, desafío, arquitectura, stack, metodología e indicadores comparados con la línea base."
        crumbs={[{ label: "Casos de éxito", href: "/casos-de-exito/" }]}
        image="logistics-aerial"
      >
        <SimulatedNote tone="dark">
          Clientes, cifras y resultados son ficticios y se publican con fines demostrativos.
        </SimulatedNote>
      </PageHero>
      <Section id="catalogo" className="scroll-mt-16">
        <Container size="wide">
          <h2 className="sr-only">Catálogo de casos</h2>
          <CaseStudyExplorer
            items={items}
            industryOptions={industries.map((i) => ({ value: i.slug, label: i.name }))}
            serviceOptions={services.map((s) => ({ value: s.slug, label: s.shortName }))}
            technologyOptions={technologyOptions}
          />
        </Container>
      </Section>
      <CallToAction
        title="¿Quiere un resultado así en su organización?"
        description="Empezamos con una línea base clara para que los resultados sean verificables."
      />
    </>
  );
}
