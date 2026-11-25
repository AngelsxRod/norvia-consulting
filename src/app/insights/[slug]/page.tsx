import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Photo, PhotoCredit } from "@/components/media/photo";
import { ArticleCard } from "@/components/shared/article-card";
import { CallToAction } from "@/components/shared/call-to-action";
import { SaveButton } from "@/components/shared/save-button";
import { getArticle, readingTime, sortedArticles, toArticleSummary } from "@/data/articles";
import { site, siteUrl } from "@/data/site";
import { team } from "@/data/team";
import { getImage } from "@/lib/images";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import type { ArticleBlock } from "@/types/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return sortedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}/`,
    image: article.image,
    type: "article",
    publishedTime: article.date,
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 id={block.id}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const href = `/insights/${article.slug}/`;
  const author = team.find((member) => member.name === article.author);
  const toc = article.body.filter(
    (block): block is Extract<ArticleBlock, { type: "h2" }> => block.type === "h2",
  );
  const index = sortedArticles.findIndex((a) => a.slug === article.slug);
  const newer = sortedArticles[index - 1];
  const older = sortedArticles[index + 1];
  const related = sortedArticles
    .filter((a) => a.slug !== article.slug)
    .sort(
      (a, b) => Number(b.category === article.category) - Number(a.category === article.category),
    )
    .slice(0, 3)
    .map(toArticleSummary);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: `${siteUrl}${getImage(article.image).src.replace(/\.webp$/, "-1280.webp")}`,
    author: { "@type": "Person", name: `${article.author} (autor ficticio)` },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${siteUrl}${href}`,
  };

  return (
    <>
      <article>
        <header className="border-b border-line bg-paper">
          <Container size="wide" className="flex flex-col gap-8 pt-10 pb-12 lg:pt-14">
            <Breadcrumbs
              items={[
                { label: "Insights", href: "/insights/" },
                { label: article.category, href },
              ]}
            />
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="flex flex-col gap-6 lg:col-span-8">
                <p className="eyebrow text-polar">{article.category}</p>
                <h1 className="max-w-[22ch] text-h1 font-semibold">{article.title}</h1>
                <p className="max-w-2xl text-lead text-slate">{article.excerpt}</p>
              </div>
              <dl className="flex flex-col gap-4 self-end border-l border-line pl-6 text-sm lg:col-span-4">
                <div>
                  <dt className="font-mono text-xs text-slate uppercase">Autor</dt>
                  <dd className="font-medium">
                    {article.author}
                    {author ? (
                      <span className="block font-normal text-slate">{author.role}</span>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-slate uppercase">Publicado</dt>
                  <dd>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-slate uppercase">Lectura</dt>
                  <dd>{readingTime(article)} min</dd>
                </div>
                <div>
                  <SaveButton
                    item={{ kind: "article", slug: article.slug, title: article.title, href }}
                  />
                </div>
              </dl>
            </div>
          </Container>
        </header>
        <Container size="wide" className="pt-10">
          <figure className="flex flex-col gap-2">
            <Photo
              image={article.image}
              priority
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="aspect-[21/9] min-h-56"
            />
            <figcaption>
              <PhotoCredit image={article.image} />
            </figcaption>
          </figure>
        </Container>
        <Section spacing="sm">
          <Container size="wide" className="grid gap-12 lg:grid-cols-12">
            {toc.length > 1 ? (
              <nav aria-label="Tabla de contenido" className="lg:col-span-3">
                <div className="flex flex-col gap-4 lg:sticky lg:top-28">
                  <p className="eyebrow text-slate">En este artículo</p>
                  <ol className="flex flex-col border-l border-line">
                    {toc.map((heading, i) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="-ml-px flex min-h-10 items-center gap-3 border-l border-transparent pl-4 text-sm text-slate hover:border-polar hover:text-ink"
                        >
                          <span className="font-mono text-xs">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </nav>
            ) : null}
            <div className="prose-norvia lg:col-span-7 lg:col-start-5">
              {article.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
              <p className="border-t border-line pt-6 text-sm text-slate">
                Artículo escrito para el sitio de demostración de Norvia. El autor es un personaje
                ficticio.
              </p>
            </div>
          </Container>
        </Section>
      </article>

      <Section tone="white" spacing="sm">
        <Container size="wide" className="flex flex-col gap-12">
          <nav
            aria-label="Navegación entre artículos"
            className="grid gap-4 border-y border-line sm:grid-cols-2"
          >
            {older ? (
              <Link
                href={`/insights/${older.slug}/`}
                className="group flex flex-col gap-1 py-5 sm:pr-6"
              >
                <span className="font-mono text-xs text-slate">← Anterior</span>
                <span className="font-medium group-hover:text-polar">{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link
                href={`/insights/${newer.slug}/`}
                className="group flex flex-col gap-1 border-line py-5 sm:border-l sm:pl-6 sm:text-right"
              >
                <span className="font-mono text-xs text-slate">Siguiente →</span>
                <span className="font-medium group-hover:text-polar">{newer.title}</span>
              </Link>
            ) : null}
          </nav>
          <div className="flex flex-col gap-8">
            <h2 className="text-h3 font-semibold">Artículos relacionados</h2>
            <ul className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <CallToAction
        title="¿Quiere profundizar en este tema con su equipo?"
        description="Organizamos sesiones de trabajo para aterrizar estas ideas en su contexto."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
