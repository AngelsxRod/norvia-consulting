import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CallToAction } from "@/components/shared/call-to-action";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { methodology, principles } from "@/data/methodology";
import { MethodologyScroller } from "@/features/methodology/methodology-scroller";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Metodología",
  description:
    "Las siete etapas del método de Norvia: descubrimiento, diagnóstico, estrategia, diseño de soluciones, implementación, validación y optimización continua.",
  path: "/metodologia/",
  image: "whiteboard-sketch",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodología"
        index="07 etapas"
        title="Del diagnóstico a la autonomía del cliente."
        description="Un método iterativo en siete etapas. Cada una responde una pregunta concreta y produce entregables verificables antes de avanzar a la siguiente."
        crumbs={[{ label: "Metodología", href: "/metodologia/" }]}
        image="whiteboard-sketch"
      />
      <Section>
        <Container size="wide">
          <MethodologyScroller stages={methodology} />
        </Container>
      </Section>
      <Section tone="petrol">
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Principios"
            tone="dark"
            title="Reglas que aplicamos en todas las etapas."
          />
          <FeatureGrid items={principles} prefix="P" tone="dark" className="lg:grid-cols-4" />
        </Container>
      </Section>
      <CallToAction
        title="Empecemos por el descubrimiento."
        description="Una primera conversación basta para definir el alcance de un diagnóstico."
      />
    </>
  );
}
