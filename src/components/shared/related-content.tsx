import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type RelatedLink = { label: string; href: string; meta?: string };

type RelatedContentProps = {
  title: string;
  links: RelatedLink[];
  className?: string;
};

/** Lista de navegación contextual entre servicios, soluciones e industrias. */
export function RelatedContent({ title, links, className }: RelatedContentProps) {
  if (links.length === 0) return null;
  return (
    <nav aria-label={title} className={cn("flex flex-col gap-4", className)}>
      <h3 className="eyebrow text-slate">{title}</h3>
      <ul className="border-t border-line">
        {links.map((link) => (
          <li key={link.href} className="border-b border-line">
            <Link
              href={link.href}
              className="group flex min-h-14 items-center justify-between gap-4 py-3 font-medium transition-colors hover:text-polar"
            >
              <span className="flex flex-col">
                {link.label}
                {link.meta ? (
                  <span className="text-sm font-normal text-slate">{link.meta}</span>
                ) : null}
              </span>
              <ArrowRight
                aria-hidden
                className="size-4 shrink-0 text-slate transition-transform group-hover:translate-x-1 group-hover:text-polar"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
