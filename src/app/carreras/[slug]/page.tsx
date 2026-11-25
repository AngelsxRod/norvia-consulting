import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CheckList } from "@/components/shared/check-list";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { RelatedContent } from "@/components/shared/related-content";
import { SimulatedNote } from "@/components/shared/simulated-note";
import { TechnologyGrid } from "@/components/shared/technology-grid";
import { hiringProcess } from "@/data/careers";
import { getJob, jobs } from "@/data/jobs";
import { ApplicationForm } from "@/features/careers/application-form";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/carreras/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return pageMetadata({
    title: `${job.title} (vacante de demostración)`,
    description: `${job.summary} Vacante ficticia publicada con fines demostrativos.`,
    path: `/carreras/${job.slug}/`,
  });
}

export default async function JobPage({ params }: PageProps<"/carreras/[slug]">) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const facts = [
    ["Departamento", job.department],
    ["Modalidad", job.mode],
    ["Ubicación", job.location],
    ["Contratación", job.contract],
    ["Seniority", job.seniority],
  ];
  const others = jobs
    .filter((j) => j.slug !== job.slug && j.department === job.department)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Vacante de demostración"
        title={job.title}
        description={job.summary}
        crumbs={[
          { label: "Carreras", href: "/carreras/" },
          { label: job.title, href: `/carreras/${job.slug}/` },
        ]}
        aside={
          <dl className="grid grid-cols-2 gap-px border border-on-dark-line bg-on-dark-line">
            {facts.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 bg-petrol p-4 last:col-span-2">
                <dt className="font-mono text-[0.68rem] tracking-wider text-on-dark-muted uppercase">
                  {label}
                </dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <SimulatedNote tone="dark">
          Vacante ficticia: forma parte de un proyecto de portafolio y no conduce a un proceso real.
        </SimulatedNote>
      </PageHero>

      <Section>
        <Container size="wide" className="flex flex-col gap-20">
          <SplitSection eyebrow="Responsabilidades" title="Qué harás">
            <CheckList items={job.responsibilities} />
          </SplitSection>
          <SplitSection eyebrow="Requisitos" title="Qué buscamos">
            <div className="flex flex-col gap-8">
              <CheckList items={job.requirements} />
              <div className="flex flex-col gap-3">
                <h3 className="eyebrow text-slate">Deseable</h3>
                <CheckList items={job.niceToHave} />
              </div>
            </div>
          </SplitSection>
          <SplitSection eyebrow="Tecnologías" title="Herramientas del día a día">
            <TechnologyGrid technologies={job.technologies} />
          </SplitSection>
          <SplitSection eyebrow="Beneficios" title="Lo que ofrecemos">
            <CheckList items={job.benefits} columns={2} />
          </SplitSection>
          <div className="flex flex-col gap-10 border-t border-line pt-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-polar">Proceso de selección</p>
              <h2 className="text-h3 font-semibold">Cómo sería el proceso</h2>
            </div>
            <ProcessTimeline steps={hiringProcess} className="lg:grid-cols-5" />
          </div>
        </Container>
      </Section>

      <Section tone="white" id="postular">
        <Container size="wide" className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <p className="eyebrow text-polar">Postulación demostrativa</p>
            <h2 className="text-h2 font-semibold">Formulario de postulación</h2>
            <p className="text-slate">
              El formulario valida los datos en su navegador para demostrar la experiencia de
              usuario. No solicita documentos ni datos sensibles y no envía información a ningún
              servidor.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ApplicationForm jobTitle={job.title} />
          </div>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section spacing="sm">
          <Container size="wide">
            <RelatedContent
              title={`Otras vacantes en ${job.department}`}
              links={others.map((o) => ({
                label: o.title,
                href: `/carreras/${o.slug}/`,
                meta: `${o.mode} · ${o.location}`,
              }))}
            />
          </Container>
        </Section>
      ) : null}
    </>
  );
}
