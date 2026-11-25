import { Container } from "./container";
import { PageHero } from "./page-hero";
import { Section } from "./section";

type LegalSection = { title: string; paragraphs: string[] };

type LegalPageProps = {
  title: string;
  description: string;
  href: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, href, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Información legal"
        title={title}
        description={description}
        crumbs={[{ label: title, href }]}
      />
      <Section>
        <Container size="wide" className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <p className="font-mono text-xs text-slate">Última actualización: {updated}</p>
          </aside>
          <div className="prose-norvia lg:col-span-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
