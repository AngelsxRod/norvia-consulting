import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FaqList } from "@/components/shared/faq-list";
import { contactFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { ContactForm } from "@/features/contact/contact-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Formulario de consulta empresarial demostrativo de Norvia. Valida los datos en el navegador y no envía ni almacena información.",
  path: "/contacto/",
});

const channels = [
  {
    label: "Consultas comerciales",
    value: site.email,
    detail: "Dirección de ejemplo con dominio reservado (.example); no recibe correos.",
  },
  {
    label: "Tiempo de respuesta",
    value: "2 días hábiles",
    detail: "Plazo ilustrativo dentro de la narrativa del sitio.",
  },
  {
    label: "Cobertura",
    value: "Latinoamérica, en remoto",
    detail: "Norvia no declara oficinas físicas: es una empresa ficticia.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntenos qué necesita resolver."
        description="Complete el formulario con el contexto de su proyecto. Es una demostración: valida los datos, pero no los envía ni los almacena."
        crumbs={[{ label: "Contacto", href: "/contacto/" }]}
        aside={
          <ul className="flex flex-col border-t border-on-dark-line">
            {channels.map((channel) => (
              <li
                key={channel.label}
                className="flex flex-col gap-1 border-b border-on-dark-line py-4"
              >
                <span className="font-mono text-[0.68rem] tracking-wider text-on-dark-muted uppercase">
                  {channel.label}
                </span>
                <span className="font-medium">{channel.value}</span>
                <span className="text-sm text-on-dark-muted">{channel.detail}</span>
              </li>
            ))}
          </ul>
        }
      />
      <Section>
        <Container size="wide" className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <p className="eyebrow text-polar">Formulario de consulta empresarial</p>
            <h2 className="text-h2 font-semibold">Hablemos de su proyecto</h2>
            <p className="text-slate">
              Con esta información prepararíamos una primera conversación de 45 minutos y una
              propuesta de diagnóstico. En este sitio de portafolio, el proceso termina al validar
              el formulario.
            </p>
          </div>
          <div className="border border-line bg-white p-5 sm:p-8 lg:col-span-8">
            <ContactForm
              serviceOptions={services.map((s) => ({ value: s.slug, label: s.shortName }))}
            />
          </div>
        </Container>
      </Section>
      <Section tone="white">
        <Container size="wide" className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de escribirnos." />
          </div>
          <div className="lg:col-span-7">
            <FaqList faqs={contactFaqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
