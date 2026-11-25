import Link from "next/link";

import { Photo } from "@/components/media/photo";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Article } from "@/types/content";

export type ArticleSummary = Pick<
  Article,
  "slug" | "title" | "excerpt" | "category" | "date" | "image" | "author"
> & { readingTime: number };

type ArticleCardProps = {
  article: ArticleSummary;
  variant?: "default" | "compact";
  className?: string;
};

export function ArticleCard({ article, variant = "default", className }: ArticleCardProps) {
  const compact = variant === "compact";
  return (
    <article
      className={cn("group relative flex gap-5", compact ? "flex-row" : "flex-col", className)}
    >
      <Photo
        image={article.image}
        sizes={compact ? "160px" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        className={compact ? "aspect-square w-28 shrink-0 sm:w-36" : "aspect-[3/2]"}
        imgClassName="transition-transform duration-700 ease-(--ease-out-norvia) group-hover:scale-[1.03]"
      />
      <div className="flex flex-col gap-2.5">
        <p className="eyebrow text-polar">{article.category}</p>
        <h3 className={cn("leading-snug font-semibold", compact ? "text-base" : "text-xl")}>
          <Link
            href={`/insights/${article.slug}/`}
            className="group-hover:text-polar after:absolute after:inset-0"
          >
            {article.title}
          </Link>
        </h3>
        {!compact ? (
          <p className="text-[0.95rem] leading-relaxed text-slate">{article.excerpt}</p>
        ) : null}
        <p className="font-mono text-xs text-slate">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingTime}{" "}
          min de lectura
        </p>
      </div>
    </article>
  );
}
