import Link from "next/link";

import { siteUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href: string };

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
};

/** Migas de pan con su marcado BreadcrumbList en JSON-LD. */
export function Breadcrumbs({ items, tone = "light", className }: BreadcrumbsProps) {
  const trail = [{ label: "Inicio", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] tracking-wide",
          tone === "light" ? "text-slate" : "text-on-dark-muted",
        )}
      >
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span
                  aria-current="page"
                  className={tone === "light" ? "text-ink" : "text-on-dark"}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      "underline-offset-4 hover:underline",
                      tone === "light" ? "hover:text-polar" : "hover:text-signal",
                    )}
                  >
                    {item.label}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
