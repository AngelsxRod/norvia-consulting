import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { Pictogram } from "@/components/brand/pictogram";
import { CallToAction } from "@/components/shared/call-to-action";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { CheckList } from "@/components/shared/check-list";
import { FaqList } from "@/components/shared/faq-list";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { RelatedContent } from "@/components/shared/related-content";
import { TechnologyGrid } from "@/components/shared/technology-grid";
import { caseStudies } from "@/data/case-studies";
import { getIndustry, industries } from "@/data/industries";
import { getService, services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/servicios/${service.slug}/`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedCases = caseStudies
    .filter((item) => item.services.includes(service.slug))
    .slice(0, 3);
  const relatedSolutions = solutions.filter((solution) => solution.services.includes(service.slug));
  const relatedIndustries = industries.filter((industry) =>
    industry.services.includes(service.slug),
  );
  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        index={`${service.number} / 08`}
        title={service.name}
        description={service.tagline}
        crumbs={[
          { label: "Servicios", href: "/servicios/" },
          { label: service.shortName, href: `/servicios/${service.slug}/` },
        ]}
        image={service.image}
      >
        <Pictogram
          name={service.pictogram}
          className="size-12 text-on-dark [--pictogram-accent:var(--color-signal)]"
        />
      </PageHero>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Descripción" title="Qué resolvemos y cómo lo abordamos">
            <div className="flex max-w-3xl flex-col gap-5 text-lead text-slate">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SplitSection>

          <SplitSection
            eyebrow="Problemas que resuelve"
            title="Señales de que este servicio es necesario"
          >
            <CheckList items={service.problems} columns={2} />
          </SplitSection>

          <SplitSection eyebrow="Capacidades" title="Lo que incluye el servicio">
            <FeatureGrid items={service.capabilities} />
          </SplitSection>

          <SplitSection eyebrow="Alcance" title="Actividades típicas de un proyecto">
            <CheckList items={service.scope} />
          </SplitSection>
        </Container>
      </Section>

      <Section tone="petrol">
        <Container size="wide" className="flex flex-col gap-16">
          <SplitSection eyebrow="Beneficios" title="Resultados que buscamos" tone="dark">
            <FeatureGrid
              items={service.benefits}
              prefix="B"
              tone="dark"
              className="sm:grid-cols-2 lg:grid-cols-3"
            />
          </SplitSection>
          <div className="flex flex-col gap-10">
            <p className="eyebrow text-signal">Metodología del servicio</p>
            <ProcessTimeline steps={service.methodology} tone="dark" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection
            eyebrow="Tecnologías relacionadas"
            title="Herramientas y marcos de referencia"
          >
            <TechnologyGrid technologies={service.technologies} />
            <p className="mt-4 text-sm text-slate">
              Seleccionamos tecnologías según el contexto del cliente; no revendemos licencias.
            </p>
          </SplitSection>

          <SplitSection eyebrow="Entregables" title="Lo que recibe al finalizar">
            <CheckList items={service.deliverables} columns={2} />
          </SplitSection>

          {relatedCases.length > 0 ? (
            <SplitSection eyebrow="Casos de éxito relacionados" title="Proyectos ilustrativos">
              <ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                {relatedCases.map((item) => (
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

          <SplitSection eyebrow="Navegación relacionada" title="Dónde se aplica este servicio">
            <div className="grid gap-10 md:grid-cols-2">
              <RelatedContent
                title="Soluciones"
                links={relatedSolutions.map((s) => ({
                  label: s.name,
                  href: `/soluciones/${s.slug}/`,
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

          <SplitSection eyebrow="Preguntas frecuentes" title={`Sobre ${service.shortName}`}>
            <FaqList faqs={service.faqs} />
          </SplitSection>

          {next ? (
            <RelatedContent
              title="Siguiente servicio"
              links={[{ label: next.name, href: `/servicios/${next.slug}/`, meta: next.tagline }]}
            />
          ) : null}
        </Container>
      </Section>

      <CallToAction
        title={`Conversemos sobre ${service.shortName}.`}
        description="Comparta el contexto de su organización y le propondremos un alcance inicial con entregables y plazos."
        secondary={{ label: "Ver todos los servicios", href: "/servicios/" }}
      />
    </>
  );
}
