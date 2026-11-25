import Link from "next/link";

import { Photo } from "@/components/media/photo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types/content";

export type CaseStudySummary = Pick<
  CaseStudy,
  "slug" | "title" | "client" | "year" | "summary" | "image" | "highlights"
>;

type CaseStudyCardProps = {
  caseStudy: CaseStudySummary;
  industryName: string;
  variant?: "default" | "feature";
  className?: string;
  headingLevel?: "h2" | "h3";
};

export function CaseStudyCard({
  caseStudy,
  industryName,
  variant = "default",
  className,
  headingLevel: Heading = "h3",
}: CaseStudyCardProps) {
  const highlight = caseStudy.highlights[0];
  const feature = variant === "feature";
  return (
    <article className={cn("group relative flex flex-col gap-5", className)}>
      <div className="relative">
        <Photo
          image={caseStudy.image}
          sizes={
            feature
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className={feature ? "aspect-[16/10]" : "aspect-[4/3]"}
          imgClassName="transition-transform duration-700 ease-(--ease-out-norvia) group-hover:scale-[1.03]"
        />
        {highlight ? (
          <div className="absolute bottom-0 left-0 flex items-baseline gap-2 bg-ink px-4 py-3 text-on-dark">
            <span className="text-2xl font-semibold text-signal">{highlight.value}</span>
            <span className="max-w-[16ch] text-xs leading-tight text-on-dark-muted">
              {highlight.label}
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="polar">{industryName}</Badge>
          <span className="font-mono text-xs text-slate">
            {caseStudy.client} · {caseStudy.year}
          </span>
        </div>
        <Heading className={cn("leading-snug font-semibold", feature ? "text-h3" : "text-xl")}>
          <Link
            href={`/casos-de-exito/${caseStudy.slug}/`}
            className="group-hover:text-polar after:absolute after:inset-0"
          >
            {caseStudy.title}
          </Link>
        </Heading>
        <p className="text-[0.95rem] leading-relaxed text-slate">{caseStudy.summary}</p>
      </div>
    </article>
  );
}
