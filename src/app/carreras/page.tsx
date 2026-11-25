import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo, PhotoCredit } from "@/components/media/photo";
import { CheckList } from "@/components/shared/check-list";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { SimulatedNote } from "@/components/shared/simulated-note";
import {
  careerBenefits,
  careerCulture,
  careerPath,
  hiringProcess,
  workModesInfo,
} from "@/data/careers";
import { departments, jobs, seniorities, workModes } from "@/data/jobs";
import { JobExplorer } from "@/features/careers/job-explorer";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Carreras",
  description:
    "Cultura, beneficios, desarrollo profesional y vacantes de demostración en Norvia. Filtre por departamento, modalidad y seniority.",
  path: "/carreras/",
  image: "team-meeting",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Carreras"
        title="Trabajo exigente, ritmo sostenible."
        description="Buscamos personas curiosas que disfruten resolver problemas complejos con otras personas. Las vacantes publicadas son ficticias y forman parte de un proyecto de portafolio."
        crumbs={[{ label: "Carreras", href: "/carreras/" }]}
        image="team-meeting"
      >
        <SimulatedNote tone="dark">
          Vacantes de demostración: no existe un proceso de selección real.
        </SimulatedNote>
      </PageHero>

      <Section>
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Cultura de trabajo"
            layout="split"
            title="Cómo trabajamos entre nosotros."
          />
          <FeatureGrid items={careerCulture} prefix="K" className="lg:grid-cols-4" />
        </Container>
      </Section>

      <Section tone="white">
        <Container size="wide" className="grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <SectionHeading eyebrow="Beneficios" title="Condiciones pensadas para crecer." />
            <CheckList items={careerBenefits} />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
            <Photo
              image="team-laptops"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[3/2]"
            />
            <PhotoCredit image="team-laptops" />
            <div className="flex flex-col gap-4">
              <h3 className="eyebrow text-polar">Desarrollo profesional</h3>
              <FeatureGrid items={careerPath} prefix="R" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="petrol" spacing="sm">
        <Container size="wide" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Modalidades de trabajo"
            tone="dark"
            title="Remoto, híbrido o presencial."
          />
          <FeatureGrid items={workModesInfo} prefix="M" tone="dark" className="lg:grid-cols-3" />
        </Container>
      </Section>

      <Section>
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading eyebrow="Proceso de selección" title="Cinco pasos, sin sorpresas." />
          <ProcessTimeline steps={hiringProcess} className="lg:grid-cols-5" />
        </Container>
      </Section>

      <Section tone="white" id="catalogo">
        <Container size="wide" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Vacantes disponibles"
            index={`${jobs.length}`}
            title="Oportunidades de demostración."
            description="Filtre por departamento, modalidad o seniority."
          />
          <JobExplorer
            jobs={jobs}
            departments={departments}
            modes={workModes}
            seniorities={seniorities}
          />
        </Container>
      </Section>
    </>
  );
}
