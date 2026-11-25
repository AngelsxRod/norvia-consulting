import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CallToAction } from "@/components/shared/call-to-action";
import { FaqList } from "@/components/shared/faq-list";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { generalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Servicios de consultoría tecnológica",
  description:
    "Ocho servicios profesionales: estrategia tecnológica, transformación digital, desarrollo de software, cloud y DevOps, IA, datos, ciberseguridad e integración de sistemas.",
  path: "/servicios/",
  image: "code-desk",
});

const groups = [
  {
    title: "Decidir",
    description: "Definir prioridades, arquitectura y programas de cambio.",
    slugs: ["consultoria-estrategia-tecnologica", "transformacion-digital"],
  },
  {
    title: "Construir",
    description: "Diseñar, desarrollar e integrar productos y plataformas.",
    slugs: ["desarrollo-de-software", "integracion-de-sistemas", "cloud-devops"],
  },
  {
    title: "Potenciar",
    description: "Convertir datos en decisiones y automatizar con IA.",
    slugs: ["ingenieria-analisis-de-datos", "inteligencia-artificial-automatizacion"],
  },
  {
    title: "Proteger",
    description: "Reducir el riesgo y prepararse para responder.",
    slugs: ["ciberseguridad"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        index="08"
        title="Capacidades profesionales para cada etapa de la transformación."
        description="Organizamos nuestros servicios según el momento de la decisión: decidir, construir, potenciar y proteger. Cada uno puede contratarse por separado o integrarse en un programa."
        crumbs={[{ label: "Servicios", href: "/servicios/" }]}
        image="code-desk"
      />
      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          {groups.map((group, index) => (
            <Reveal key={group.title} className="grid gap-8 lg:grid-cols-12">
              <div className="flex flex-col gap-3 lg:col-span-3">
                <p className="font-mono text-sm text-polar">0{index + 1}</p>
                <h2 className="text-h2 font-semibold">{group.title}</h2>
                <p className="text-slate">{group.description}</p>
              </div>
              <div className="border-b border-line lg:col-span-9">
                {group.slugs.map((slug) => {
                  const service = services.find((s) => s.slug === slug);
                  return service ? <ServiceCard key={slug} service={service} /> : null;
                })}
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>
      <Section tone="white">
        <Container size="wide" className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Servicios y soluciones, sin confusión."
            />
          </div>
          <div className="lg:col-span-7">
            <FaqList faqs={generalFaqs} />
          </div>
        </Container>
      </Section>
      <CallToAction
        title="¿No sabe qué servicio necesita?"
        description="Un diagnóstico de cuatro a ocho semanas ordena prioridades y define el primer paso con evidencia."
        secondary={{ label: "Ver soluciones", href: "/soluciones/" }}
      />
    </>
  );
}
