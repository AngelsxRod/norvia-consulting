import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";
import { CallToAction } from "@/components/shared/call-to-action";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { CheckList } from "@/components/shared/check-list";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { RelatedContent } from "@/components/shared/related-content";
import { caseStudies } from "@/data/case-studies";
import { getIndustriesBySlugs, getIndustry } from "@/data/industries";
import { getServicesBySlugs } from "@/data/services";
import { getSolution, solutions } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/soluciones/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return pageMetadata({
    title: solution.name,
    description: solution.summary,
    path: `/soluciones/${solution.slug}/`,
    image: solution.image,
  });
}

export default async function SolutionPage({ params }: PageProps<"/soluciones/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const relatedServices = getServicesBySlugs(solution.services);
  const relatedIndustries = getIndustriesBySlugs(solution.industries);
  const relatedCases = caseStudies.filter((item) => item.solution === solution.slug);
  const fallbackCases = caseStudies
    .filter(
      (item) => solution.industries.includes(item.industry) && item.solution !== solution.slug,
    )
    .slice(0, Math.max(0, 2 - relatedCases.length));
  const cases = [...relatedCases, ...fallbackCases].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Solución"
        title={solution.name}
        description={solution.tagline}
        crumbs={[
          { label: "Soluciones", href: "/soluciones/" },
          { label: solution.name, href: `/soluciones/${solution.slug}/` },
        ]}
        image={solution.image}
      />

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Contexto empresarial" title="Por qué este problema es frecuente">
            <p className="max-w-3xl text-lead text-slate">{solution.context}</p>
          </SplitSection>
          <SplitSection eyebrow="Problema" title="Síntomas habituales">
            <CheckList items={solution.problem} columns={2} />
          </SplitSection>
          <SplitSection eyebrow="Solución propuesta" title="Nuestro enfoque">
            <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed">
              {solution.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SplitSection>
        </Container>
      </Section>

      <Section tone="white">
        <Container size="wide" className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-polar">Arquitectura conceptual</p>
            <h2 className="max-w-[24ch] text-h2 font-semibold">
              Cómo se organizan las piezas de la solución
            </h2>
          </div>
          <ArchitectureDiagram layers={solution.architecture} />
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Beneficios" title="Lo que cambia para el negocio">
            <FeatureGrid items={solution.benefits} prefix="B" />
          </SplitSection>
          <div className="flex flex-col gap-10 border-t border-line pt-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-polar">Proceso de implementación</p>
              <h2 className="text-h3 font-semibold">Cuatro fases, entregas desde el primer mes</h2>
            </div>
            <ProcessTimeline steps={solution.implementation} />
          </div>
          <SplitSection
            eyebrow="Capacidades involucradas"
            title="Servicios e industrias relacionados"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <RelatedContent
                title="Servicios"
                links={relatedServices.map((s) => ({
                  label: s.name,
                  href: `/servicios/${s.slug}/`,
                  meta: s.tagline,
                }))}
              />
              <RelatedContent
                title="Industrias"
                links={relatedIndustries.map((i) => ({
                  label: i.name,
                  href: `/industrias/${i.slug}/`,
                }))}
              />
            </div>
          </SplitSection>
          {cases.length > 0 ? (
            <SplitSection eyebrow="Casos de éxito" title="Aplicaciones ilustrativas">
              <ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                {cases.map((item) => (
                  <li key={item.slug}>
                    <CaseStudyCard
                      caseStudy={item}
                      industryName={getIndustry(item.industry)?.name ?? ""}
                    />
                  </li>
                ))}
              </ul>
            </SplitSection>
          ) : null}
        </Container>
      </Section>

      <CallToAction
        title="Evaluemos si esta solución encaja en su contexto."
        description="En una primera conversación revisamos su situación actual y los resultados que busca."
        secondary={{ label: "Ver todas las soluciones", href: "/soluciones/" }}
      />
    </>
  );
}
