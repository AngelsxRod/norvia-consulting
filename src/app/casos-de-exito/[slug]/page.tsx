import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { Photo, PhotoCredit } from "@/components/media/photo";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";
import { CallToAction } from "@/components/shared/call-to-action";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { CheckList } from "@/components/shared/check-list";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { RelatedContent } from "@/components/shared/related-content";
import { SaveButton } from "@/components/shared/save-button";
import { SimulatedNote } from "@/components/shared/simulated-note";
import { TechnologyGrid } from "@/components/shared/technology-grid";
import { Badge } from "@/components/ui/badge";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getIndustry } from "@/data/industries";
import { getServicesBySlugs } from "@/data/services";
import { getSolution } from "@/data/solutions";
import { CaseResults } from "@/features/case-studies/case-results";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/casos-de-exito/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.title} — caso ilustrativo`,
    description: `${item.summary} Caso ficticio con datos simulados.`,
    path: `/casos-de-exito/${item.slug}/`,
    image: item.image,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/casos-de-exito/[slug]">) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) notFound();

  const industry = getIndustry(item.industry);
  const solution = getSolution(item.solution);
  const relatedServices = getServicesBySlugs(item.services);
  const related = caseStudies
    .filter((other) => other.slug !== item.slug)
    .map((other) => ({
      other,
      score:
        (other.industry === item.industry ? 2 : 0) +
        other.services.filter((s) => item.services.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ other }) => other);
  const href = `/casos-de-exito/${item.slug}/`;

  return (
    <>
      <PageHero
        eyebrow="Caso de éxito ilustrativo"
        title={item.title}
        description={item.summary}
        crumbs={[
          { label: "Casos de éxito", href: "/casos-de-exito/" },
          { label: item.client, href },
        ]}
        image={item.image}
      >
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-on-dark-line pt-6 text-sm sm:grid-cols-4">
          {[
            ["Cliente ficticio", item.client],
            ["Industria", industry?.name ?? ""],
            ["Año", String(item.year)],
            ["Duración", item.duration],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.68rem] tracking-wider text-on-dark-muted uppercase">
                {label}
              </dt>
              <dd className="font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center gap-4">
          <SaveButton
            item={{ kind: "case", slug: item.slug, title: item.title, href }}
            tone="dark"
          />
          <SimulatedNote tone="dark">Cliente y resultados ficticios.</SimulatedNote>
        </div>
      </PageHero>

      <Section tone="white" spacing="sm">
        <Container size="wide">
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {item.highlights.map((highlight) => (
              <div key={highlight.label} className="flex flex-col gap-2 bg-white p-6">
                <dt className="order-2 text-slate">{highlight.label}</dt>
                <dd className="order-1 text-[clamp(2.2rem,1.6rem+2vw,3.4rem)] leading-none font-semibold text-polar">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
          <SimulatedNote className="mt-4" />
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Contexto" title={item.clientDescription}>
            <p className="max-w-3xl text-lead text-slate">{item.context}</p>
          </SplitSection>
          <SplitSection eyebrow="Desafío empresarial" title="Qué había que resolver">
            <CheckList items={item.challenge} />
          </SplitSection>
          <SplitSection eyebrow="Solución tecnológica" title="Qué construimos">
            <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed">
              {item.solutionDetail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {relatedServices.map((service) => (
                <Badge key={service.slug} variant="polar">
                  {service.shortName}
                </Badge>
              ))}
            </div>
          </SplitSection>
        </Container>
      </Section>

      <Section tone="white">
        <Container size="wide" className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-polar">Arquitectura conceptual</p>
            <h2 className="max-w-[24ch] text-h2 font-semibold">Componentes de la solución</h2>
          </div>
          <ArchitectureDiagram layers={item.architecture} />
          <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-4">
              <p className="eyebrow text-polar">Stack utilizado</p>
              <h2 className="text-h3 font-semibold">Tecnologías del proyecto</h2>
            </div>
            <TechnologyGrid technologies={item.stack} className="lg:col-span-8" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-polar">Metodología</p>
              <h2 className="text-h3 font-semibold">Cómo se ejecutó el proyecto</h2>
            </div>
            <ProcessTimeline steps={item.methodology} />
          </div>
          <div className="flex flex-col gap-10 border-t border-line pt-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-polar">Resultados ilustrativos</p>
              <h2 className="max-w-[24ch] text-h2 font-semibold">Indicadores comparativos</h2>
            </div>
            <CaseResults caseStudy={item} />
          </div>
          <div className="flex flex-col gap-6 border-t border-line pt-10">
            <p className="eyebrow text-polar">Recursos visuales</p>
            <div className="grid gap-6 md:grid-cols-2">
              {item.gallery.map((image) => (
                <figure key={image} className="flex flex-col gap-2">
                  <Photo
                    image={image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[3/2]"
                  />
                  <figcaption>
                    <PhotoCredit image={image} />
                    <span className="text-xs text-slate">
                      Imagen de referencia; no corresponde a instalaciones de un cliente real.
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container size="wide" className="flex flex-col gap-12">
          <div className="grid gap-10 md:grid-cols-2">
            <RelatedContent
              title="Solución aplicada"
              links={
                solution
                  ? [
                      {
                        label: solution.name,
                        href: `/soluciones/${solution.slug}/`,
                        meta: solution.tagline,
                      },
                    ]
                  : []
              }
            />
            <RelatedContent
              title="Industria"
              links={
                industry ? [{ label: industry.name, href: `/industrias/${industry.slug}/` }] : []
              }
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-h3 font-semibold">Casos relacionados</h2>
            <ul className="grid gap-10 md:grid-cols-3">
              {related.map((other) => (
                <li key={other.slug}>
                  <CaseStudyCard
                    caseStudy={other}
                    industryName={getIndustry(other.industry)?.name ?? ""}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CallToAction
        title="Hablemos de un desafío similar."
        description="Cada organización es distinta: empezamos por medir su punto de partida."
        secondary={{ label: "Volver a los casos", href: "/casos-de-exito/" }}
      />
    </>
  );
}
