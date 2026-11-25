import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CallToAction } from "@/components/shared/call-to-action";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { RelatedContent } from "@/components/shared/related-content";
import { SolutionCard } from "@/components/shared/solution-card";
import { TechnologyGrid } from "@/components/shared/technology-grid";
import { caseStudies } from "@/data/case-studies";
import { getIndustry, industries } from "@/data/industries";
import { getServicesBySlugs } from "@/data/services";
import { getSolutionsBySlugs } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industrias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `Tecnología para ${industry.name.toLowerCase()}`,
    description: industry.summary,
    path: `/industrias/${industry.slug}/`,
    image: industry.image,
  });
}

export default async function IndustryPage({ params }: PageProps<"/industrias/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedSolutions = getSolutionsBySlugs(industry.solutions);
  const relatedServices = getServicesBySlugs(industry.services);
  const relatedCases = caseStudies.filter((item) => item.industry === industry.slug);

  return (
    <>
      <PageHero
        eyebrow="Industria"
        title={industry.name}
        description={industry.summary}
        crumbs={[
          { label: "Industrias", href: "/industrias/" },
          { label: industry.name, href: `/industrias/${industry.slug}/` },
        ]}
        image={industry.image}
      />
      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Contexto de la industria" title="El punto de partida">
            <div className="flex max-w-3xl flex-col gap-5 text-lead text-slate">
              {industry.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SplitSection>
          <SplitSection eyebrow="Principales desafíos" title="Lo que frena la transformación">
            <FeatureGrid items={industry.challenges} prefix="D" />
          </SplitSection>
        </Container>
      </Section>

      <Section tone="petrol">
        <Container size="wide">
          <SplitSection
            eyebrow="Oportunidades"
            title="Dónde la tecnología genera más valor"
            tone="dark"
          >
            <FeatureGrid items={industry.opportunities} prefix="O" tone="dark" />
          </SplitSection>
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Soluciones aplicables" title="Respuestas para este sector">
            <ul className="grid gap-10 sm:grid-cols-2">
              {relatedSolutions.map((solution) => (
                <li key={solution.slug}>
                  <SolutionCard solution={solution} />
                </li>
              ))}
            </ul>
          </SplitSection>
          <SplitSection eyebrow="Servicios y tecnologías" title="Capacidades más demandadas">
            <div className="flex flex-col gap-10">
              <RelatedContent
                title="Servicios relacionados"
                links={relatedServices.map((s) => ({
                  label: s.name,
                  href: `/servicios/${s.slug}/`,
                  meta: s.tagline,
                }))}
              />
              <div className="flex flex-col gap-4">
                <h3 className="eyebrow text-slate">Tecnologías relevantes</h3>
                <TechnologyGrid technologies={industry.technologies} />
              </div>
            </div>
          </SplitSection>
          {relatedCases.length > 0 ? (
            <SplitSection
              eyebrow="Casos de éxito"
              title={`Proyectos ilustrativos en ${industry.name.toLowerCase()}`}
            >
              <ul className="grid gap-10 md:grid-cols-2">
                {relatedCases.map((item) => (
                  <li key={item.slug}>
                    <CaseStudyCard caseStudy={item} industryName={industry.name} />
                  </li>
                ))}
              </ul>
            </SplitSection>
          ) : null}
          <RelatedContent
            title="Otras industrias"
            links={industries
              .filter((i) => i.slug !== industry.slug)
              .slice(0, 4)
              .map((i) => ({ label: i.name, href: `/industrias/${i.slug}/` }))}
          />
        </Container>
      </Section>

      <CallToAction
        title={`¿Lidera una iniciativa tecnológica en ${industry.name.toLowerCase()}?`}
        description="Conversemos sobre su contexto regulatorio, sus sistemas actuales y los resultados que necesita."
        secondary={{ label: "Ver casos de éxito", href: "/casos-de-exito/" }}
      />
    </>
  );
}
