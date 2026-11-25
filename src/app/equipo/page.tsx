import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CallToAction } from "@/components/shared/call-to-action";
import { Reveal } from "@/components/shared/reveal";
import { TeamMemberCard } from "@/components/shared/team-member-card";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Equipo",
  description:
    "El equipo multidisciplinario (ficticio) de Norvia: dirección, arquitectura, datos, diseño, consultoría, cloud y ciberseguridad.",
  path: "/equipo/",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Personas que combinan criterio de negocio y profundidad técnica."
        description="Un equipo multidisciplinario organizado por prácticas. Los perfiles son ficticios y se ilustran con monogramas generativos, no con fotografías de personas reales."
        crumbs={[{ label: "Equipo", href: "/equipo/" }]}
      />
      <Section>
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Liderazgo y prácticas"
            layout="split"
            title="Ocho áreas, un mismo estándar."
            description="Cada práctica define sus métodos y herramientas, y comparte con las demás un mismo compromiso con la medición y la transferencia de conocimiento."
          />
          <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal as="li" key={member.slug} delay={(index % 4) * 0.05}>
                <TeamMemberCard member={member} index={index} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <CallToAction
        eyebrow="Carreras"
        title="¿Le gustaría trabajar con este equipo?"
        description="Revise las oportunidades de demostración y conozca nuestra cultura de trabajo."
        primary={{ label: "Ver carreras", href: "/carreras/" }}
        secondary={{ label: "Conocer Norvia", href: "/nosotros/" }}
      />
    </>
  );
}
