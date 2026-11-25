import type { Metadata } from "next";
import Link from "next/link";

import { Pictogram } from "@/components/brand/pictogram";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Photo } from "@/components/media/photo";
import { CallToAction } from "@/components/shared/call-to-action";
import { Reveal } from "@/components/shared/reveal";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Industrias",
  description:
    "Desafíos tecnológicos de servicios financieros, retail, salud, logística, manufactura, educación, energía y telecomunicaciones, y cómo Norvia los aborda.",
  path: "/industrias/",
  image: "factory-line",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrias"
        index="08"
        title="Cada sector tiene sus propias reglas. Las conocemos."
        description="Regulación, ciclos operativos y sistemas heredados cambian según la industria. Presentamos los desafíos tecnológicos que encontramos con más frecuencia en ocho sectores."
        crumbs={[{ label: "Industrias", href: "/industrias/" }]}
        image="factory-line"
      />
      <Section>
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Sectores"
            title="Desafíos y oportunidades por industria."
            layout="split"
            description="Una lectura resumida de los retos principales. Cada página de industria amplía el contexto, las soluciones aplicables y los casos relacionados."
          />
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {industries.map((industry) => (
              <Reveal as="li" key={industry.slug} className="bg-paper">
                <Link
                  href={`/industrias/${industry.slug}/`}
                  className="group grid h-full gap-6 p-6 transition-colors hover:bg-white sm:grid-cols-[10rem_1fr] sm:p-8"
                >
                  <Photo
                    image={industry.image}
                    sizes="(min-width: 640px) 160px, 100vw"
                    className="aspect-[4/3] sm:aspect-square"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Pictogram name={industry.pictogram} className="size-6" />
                      <h2 className="text-xl font-semibold group-hover:text-polar">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-slate">{industry.summary}</p>
                    <ul className="flex flex-col gap-1.5 border-t border-line pt-4">
                      {industry.challenges.slice(0, 3).map((challenge) => (
                        <li key={challenge.title} className="flex gap-2 text-sm">
                          <span aria-hidden className="text-polar">
                            →
                          </span>
                          <span>
                            <strong className="font-medium">{challenge.title}:</strong>{" "}
                            <span className="text-slate">{challenge.description}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <CallToAction
        title="Hablemos de los retos de su sector."
        description="Compartimos lo que hemos aprendido en contextos similares y lo adaptamos a su organización."
      />
    </>
  );
}
