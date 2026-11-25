import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { articleCategories, sortedArticles, toArticleSummary } from "@/data/articles";
import { ArticleExplorer } from "@/features/insights/article-explorer";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Publicaciones sobre transformación digital, desarrollo de software, inteligencia artificial, cloud, datos, ciberseguridad, arquitectura y estrategia.",
  path: "/insights/",
  image: "analytics-map",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        index={`${sortedArticles.length}`}
        title="Ideas prácticas para decidir sobre tecnología."
        description="Artículos breves escritos por el equipo de Norvia, con criterios aplicables a decisiones reales de arquitectura, datos, IA, cloud y seguridad."
        crumbs={[{ label: "Insights", href: "/insights/" }]}
        image="analytics-map"
      />
      <Section id="catalogo" className="scroll-mt-16">
        <Container size="wide">
          <h2 className="sr-only">Publicaciones</h2>
          <ArticleExplorer
            items={sortedArticles.map(toArticleSummary)}
            categories={articleCategories}
          />
        </Container>
      </Section>
    </>
  );
}
