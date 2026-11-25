import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo, PhotoCredit } from "@/components/media/photo";
import { ArticleCard } from "@/components/shared/article-card";
import { CallToAction } from "@/components/shared/call-to-action";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { IndustryCard } from "@/components/shared/industry-card";
import { MetricsSection } from "@/components/shared/metrics-section";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { SolutionCard } from "@/components/shared/solution-card";
import { buttonVariants } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { sortedArticles, toArticleSummary } from "@/data/articles";
import { caseStudies } from "@/data/case-studies";
import { getIndustry, industries } from "@/data/industries";
import { methodology } from "@/data/methodology";
import { services } from "@/data/services";
import { differentiators, metrics, site } from "@/data/site";
import { solutions } from "@/data/solutions";
import { EngagementTabs } from "@/features/home/engagement-tabs";
import { RouteMap } from "@/features/home/route-map";
import { cn } from "@/lib/utils";

const featuredSolutions = solutions.slice(0, 4);
const featuredCases = [caseStudies[0], caseStudies[3], caseStudies[4]].filter(
  (item) => item !== undefined,
);
const latestArticles = sortedArticles.slice(0, 3).map(toArticleSummary);

const pillars = [
  { label: "Estrategia", detail: "Hojas de ruta y arquitectura" },
  { label: "Ingeniería", detail: "Software, cloud e integración" },
  { label: "Datos e IA", detail: "Analítica y automatización" },
  { label: "Seguridad", detail: "Riesgo y resiliencia" },
];

export default function HomePage() {
  const [mainCase, ...otherCases] = featuredCases;

  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-petrol text-on-dark">
        <div
          aria-hidden
          className="absolute inset-0 hidden opacity-25 mix-blend-luminosity lg:block"
        >
          <Photo image="city-grid" sizes="100vw" className="size-full bg-transparent" alt="" />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-petrol via-petrol/95 to-petrol/70"
        />
        <Container
          size="wide"
          className="relative grid gap-12 pt-14 pb-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-20 lg:pb-24"
        >
          <div className="flex flex-col gap-8 lg:col-span-7">
            <p className="flex items-center gap-3 eyebrow text-signal">
              <span aria-hidden className="h-px w-8 bg-current" />
              Consultoría tecnológica B2B
            </p>
            <h1 className="max-w-[16ch] text-display font-semibold">
              Tecnología con rumbo para empresas que no pueden detenerse.
            </h1>
            <p className="max-w-2xl text-lead text-on-dark-muted">
              Norvia ayuda a empresas medianas y grandes a modernizar sus sistemas, aprovechar sus
              datos y adoptar inteligencia artificial con un plan medible:{" "}
              <span className="text-on-dark">
                del diagnóstico a la operación, sin perder el norte.
              </span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto/" className={buttonVariants({ variant: "signal", size: "lg" })}>
                Hablemos de su proyecto
              </Link>
              <Link
                href="/casos-de-exito/"
                className={buttonVariants({ variant: "outline-light", size: "lg" })}
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <RouteMap />
          </div>
        </Container>
        <div className="relative border-t border-on-dark-line">
          <Container size="wide">
            <ul className="grid grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => (
                <li
                  key={pillar.label}
                  className={cn(
                    "flex flex-col gap-1 py-5 pr-4",
                    index % 2 === 1 && "border-l border-on-dark-line pl-4",
                    index >= 2 && "border-t border-on-dark-line lg:border-t-0",
                    index === 2 && "lg:border-l lg:pl-4",
                  )}
                >
                  <span className="font-mono text-[0.7rem] text-signal">0{index + 1}</span>
                  <span className="font-semibold">{pillar.label}</span>
                  <span className="text-sm text-on-dark-muted">{pillar.detail}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* Propuesta de valor / presentación */}
      <Section>
        <Container size="wide" className="grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <SectionHeading
              eyebrow="Quiénes somos"
              title="Convertimos la complejidad tecnológica en decisiones claras."
            />
            <p className="text-lead text-slate">
              Somos un equipo de estrategas, arquitectos, ingenieros y diseñadores. Trabajamos con
              direcciones de negocio y de tecnología que necesitan avanzar rápido sin comprometer la
              operación.
            </p>
            <TextLink href="/nosotros/">Conocer Norvia</TextLink>
          </div>
          <div className="grid gap-10 lg:col-span-7 lg:grid-cols-2 lg:pl-8">
            <Reveal className="relative lg:col-span-2">
              <Photo
                image="team-review"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/9]"
              />
              <PhotoCredit image="team-review" className="mt-2" />
            </Reveal>
            {[
              {
                title: "Qué hacemos",
                text: "Estrategia tecnológica, desarrollo de software, cloud, datos, IA, ciberseguridad e integración de sistemas.",
              },
              {
                title: "Para quién",
                text: "Empresas medianas y grandes de servicios financieros, retail, salud, logística, manufactura, educación, energía y telecomunicaciones.",
              },
              {
                title: "Qué valor ofrecemos",
                text: "Planes priorizados, entregas frecuentes y resultados medidos contra una línea base acordada.",
              },
              {
                title: "Cómo lo hacemos",
                text: "Equipos mixtos con el cliente, decisiones documentadas y transferencia de conocimiento desde el primer día.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2 border-t border-ink pt-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capacidades */}
      <Section tone="white">
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Capacidades"
            index="08"
            layout="split"
            title="Ocho capacidades, un mismo criterio de ingeniería."
            description="Cada servicio puede contratarse de forma independiente o combinarse en programas integrales con un único responsable."
          >
            <TextLink href="/servicios/">Explorar servicios</TextLink>
          </SectionHeading>
          <div className="border-b border-line">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Soluciones */}
      <Section tone="ink" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid-dark" />
        <Container size="wide" className="relative flex flex-col gap-14">
          <SectionHeading
            eyebrow="Soluciones destacadas"
            tone="dark"
            layout="split"
            title="Problemas de negocio concretos, resueltos de extremo a extremo."
            description="Los servicios son nuestras capacidades; las soluciones son respuestas a problemas específicos que combinan varias de ellas."
          >
            <TextLink href="/soluciones/" tone="dark">
              Ver las ocho soluciones
            </TextLink>
          </SectionHeading>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSolutions.map((solution, index) => (
              <Reveal as="li" key={solution.slug} delay={index * 0.06}>
                <SolutionCard solution={solution} index={index} tone="dark" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Industrias */}
      <Section>
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Industrias"
            layout="split"
            title="Conocemos el contexto regulatorio y operativo de cada sector."
            description="La misma tecnología se aplica de forma distinta en un banco, un hospital o una planta de manufactura."
          >
            <TextLink href="/industrias/">Ver industrias</TextLink>
          </SectionHeading>
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <IndustryCard industry={industry} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Casos de éxito */}
      <Section tone="white">
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Casos de éxito"
            layout="split"
            title="Resultados ilustrativos de proyectos de demostración."
            description="Clientes y cifras son ficticios. Cada caso documenta el contexto, la arquitectura y los indicadores comparados con la línea base."
          >
            <TextLink href="/casos-de-exito/">Ver los 12 casos</TextLink>
          </SectionHeading>
          <div className="grid gap-12 lg:grid-cols-12">
            {mainCase ? (
              <CaseStudyCard
                caseStudy={mainCase}
                industryName={getIndustry(mainCase.industry)?.name ?? ""}
                variant="feature"
                className="lg:col-span-7"
              />
            ) : null}
            <div className="grid gap-12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {otherCases.map((item) => (
                <CaseStudyCard
                  key={item.slug}
                  caseStudy={item}
                  industryName={getIndustry(item.industry)?.name ?? ""}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Metodología */}
      <Section tone="mist">
        <Container size="wide" className="flex flex-col gap-16">
          <SectionHeading
            eyebrow="Metodología"
            index="07 etapas"
            layout="split"
            title="Un método que empieza midiendo y termina transfiriendo."
            description="Siete etapas, de descubrimiento a optimización continua. Cada una tiene preguntas, actividades y entregables definidos."
          >
            <TextLink href="/metodologia/">Ver la metodología completa</TextLink>
          </SectionHeading>
          <ProcessTimeline
            steps={[methodology[0], methodology[2], methodology[4], methodology[6]]
              .filter((stage) => stage !== undefined)
              .map((stage) => ({ title: stage.title, description: stage.description }))}
          />
          <div className="flex flex-col gap-6 border-t border-line-strong/40 pt-12">
            <h3 className="eyebrow text-polar">Modelos de colaboración</h3>
            <EngagementTabs />
          </div>
        </Container>
      </Section>

      {/* Diferenciadores */}
      <Section>
        <Container size="wide" className="grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <SectionHeading
              eyebrow="Por qué Norvia"
              title="Lo que nos distingue no es la tecnología: es el criterio."
            />
            <div className="relative hidden lg:block">
              <Photo image="whiteboard-sketch" sizes="40vw" className="aspect-[4/5]" />
              <PhotoCredit image="whiteboard-sketch" className="mt-2" />
            </div>
          </div>
          <ol className="flex flex-col lg:col-span-7 lg:pt-24">
            {differentiators.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                className="grid gap-4 border-t border-line py-8 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-mono text-sm text-polar">
                  N{String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3 font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Indicadores */}
      <Section tone="petrol" spacing="sm">
        <Container size="wide" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Indicadores demostrativos"
            tone="dark"
            title="Norvia en cifras (ilustrativas)."
          />
          <MetricsSection metrics={metrics} tone="dark" />
        </Container>
      </Section>

      {/* Insights */}
      <Section>
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Insights"
            layout="split"
            title="Ideas para decidir mejor sobre tecnología."
            description="Publicaciones del equipo sobre estrategia, arquitectura, datos, IA y seguridad."
          >
            <TextLink href="/insights/">Ver todas las publicaciones</TextLink>
          </SectionHeading>
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {latestArticles.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CallToAction
        title="¿Tiene una iniciativa tecnológica que necesita dirección?"
        description={`Cuéntenos el contexto y le propondremos un primer paso concreto. ${site.disclaimer}`}
        secondary={{ label: "Conocer la metodología", href: "/metodologia/" }}
      />
    </>
  );
}
