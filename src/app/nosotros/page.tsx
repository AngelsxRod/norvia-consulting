import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SplitSection } from "@/components/layout/split-section";
import { LogoMark } from "@/components/brand/logo";
import { Photo, PhotoCredit } from "@/components/media/photo";
import { CallToAction } from "@/components/shared/call-to-action";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { RelatedContent } from "@/components/shared/related-content";
import { TextLink } from "@/components/ui/text-link";
import { differentiators, site, values } from "@/data/site";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Historia, propósito, misión, visión, valores, cultura y filosofía tecnológica de Norvia, consultora tecnológica ficticia.",
  path: "/nosotros/",
  image: "office-atrium",
});

const milestones = [
  {
    year: "2016",
    text: "Un grupo de arquitectos y consultores funda Norvia para acompañar proyectos de modernización.",
  },
  { year: "2018", text: "Se crean las prácticas de datos y de diseño de experiencia." },
  {
    year: "2020",
    text: "La práctica de cloud y DevOps acompaña las primeras migraciones a gran escala.",
  },
  {
    year: "2023",
    text: "Nace la práctica de IA aplicada con un marco propio de evaluación y gobierno.",
  },
  { year: "2026", text: "Norvia trabaja con equipos distribuidos en doce países de la región." },
];

export default function AboutPage() {
  const leadership = team.slice(0, 4);
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Norte para decidir, vía para avanzar."
        description="Norvia nace de dos ideas: norte, que es dirección, y vía, que es camino. Ayudamos a las empresas a definir hacia dónde llevar su tecnología y a recorrer ese camino con pasos verificables."
        crumbs={[{ label: "Nosotros", href: "/nosotros/" }]}
        image="office-atrium"
      />

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Historia" title="Una consultora creada desde la práctica">
            <div className="flex flex-col gap-8">
              <p className="max-w-3xl text-lead text-slate">
                Norvia surgió de la frustración de sus fundadores con proyectos tecnológicos que
                prometían transformación y entregaban documentos. Decidieron construir una
                consultora que se midiera por resultados operativos y por la autonomía que deja en
                sus clientes.
              </p>
              <ol className="border-l border-line">
                {milestones.map((milestone) => (
                  <li
                    key={milestone.year}
                    className="relative grid gap-1 pb-6 pl-8 sm:grid-cols-[5rem_1fr] sm:gap-6"
                  >
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-polar"
                    />
                    <span className="font-mono text-sm text-polar">{milestone.year}</span>
                    <span>{milestone.text}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-slate">Historia ficticia: {site.disclaimer}</p>
            </div>
          </SplitSection>

          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {[
              {
                label: "Propósito",
                text: "Dar dirección a la transformación tecnológica de las empresas para que cada inversión tenga un rumbo claro.",
              },
              {
                label: "Misión",
                text: "Convertir la complejidad tecnológica en soluciones concretas, escalables y comprensibles, junto a los equipos de nuestros clientes.",
              },
              {
                label: "Visión",
                text: "Ser la consultora de referencia en Latinoamérica por la claridad de sus decisiones y la autonomía que deja en cada organización.",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-4 bg-paper p-8">
                <LogoMark className="size-7 text-ink" accent="var(--color-polar)" />
                <h2 className="eyebrow text-polar">{item.label}</h2>
                <p className="text-xl leading-snug font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="petrol">
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Valores"
            tone="dark"
            title="Cinco valores que guían nuestras decisiones."
          />
          <FeatureGrid items={[...values]} prefix="V" tone="dark" className="lg:grid-cols-3" />
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Cultura empresarial" title="Cómo somos por dentro">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4 text-lg leading-relaxed">
                <p>
                  Preferimos la conversación directa a las presentaciones largas, y los documentos
                  breves a los informes que nadie lee. Cada proyecto tiene una persona responsable
                  visible para el cliente.
                </p>
                <p className="text-slate">
                  Practicamos revisiones entre pares, postmortems sin culpables y espacios regulares
                  para aprender de lo que no salió bien.
                </p>
              </div>
              <div>
                <Photo
                  image="office-glass"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3]"
                />
                <PhotoCredit image="office-glass" className="mt-2" />
              </div>
            </div>
          </SplitSection>

          <SplitSection eyebrow="Filosofía tecnológica" title="Tecnología al servicio del problema">
            <ul className="grid gap-6 sm:grid-cols-2">
              {[
                [
                  "Lo simple primero",
                  "Elegimos la solución más simple que resuelve el problema y permite evolucionar.",
                ],
                [
                  "Estándares abiertos",
                  "Preferimos tecnologías abiertas y contratos explícitos que eviten dependencias innecesarias.",
                ],
                [
                  "Observabilidad por defecto",
                  "Un sistema que no se puede observar no se puede operar ni mejorar.",
                ],
                [
                  "Seguridad desde el diseño",
                  "La seguridad es una propiedad de la arquitectura, no un añadido final.",
                ],
              ].map(([title, text]) => (
                <li key={title} className="flex flex-col gap-2 border-t border-ink pt-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-slate">{text}</p>
                </li>
              ))}
            </ul>
          </SplitSection>

          <SplitSection eyebrow="Diferenciadores y enfoque" title="Lo que hacemos distinto">
            <FeatureGrid items={differentiators.map((d) => ({ ...d }))} prefix="N" />
          </SplitSection>

          <SplitSection eyebrow="Liderazgo" title="Quiénes dirigen Norvia">
            <div className="flex flex-col gap-6">
              <RelatedContent
                title="Equipo directivo (perfiles ficticios)"
                links={leadership.map((member) => ({
                  label: member.name,
                  href: "/equipo/",
                  meta: member.role,
                }))}
              />
              <TextLink href="/equipo/">Conocer al equipo completo</TextLink>
            </div>
          </SplitSection>

          <SplitSection eyebrow="Compromiso con la innovación" title="Innovar con método">
            <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed">
              <p>
                Dedicamos el 10 % del tiempo de cada práctica a investigación aplicada: evaluamos
                nuevas tecnologías con casos reales antes de recomendarlas a un cliente.
              </p>
              <p className="text-slate">
                Publicamos lo que aprendemos en nuestra sección de insights y compartimos con los
                clientes los marcos de evaluación que usamos internamente.
              </p>
            </div>
          </SplitSection>
        </Container>
      </Section>
      <CallToAction
        title="Conozcamos su contexto."
        description="La mejor manera de saber si podemos ayudar es conversar sobre un problema concreto."
        secondary={{ label: "Ver metodología", href: "/metodologia/" }}
      />
    </>
  );
}
