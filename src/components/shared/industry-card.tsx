import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Photo } from "@/components/media/photo";
import { cn } from "@/lib/utils";
import type { Industry } from "@/types/content";

export function IndustryCard({ industry, className }: { industry: Industry; className?: string }) {
  return (
    <Link
      href={`/industrias/${industry.slug}/`}
      className={cn("group flex flex-col gap-4", className)}
    >
      <Photo
        image={industry.image}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/3]"
        imgClassName="transition-transform duration-700 ease-(--ease-out-norvia) group-hover:scale-[1.04]"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold group-hover:text-polar">{industry.name}</h3>
          <p className="text-sm text-slate">
            {industry.challenges
              .slice(0, 2)
              .map((c) => c.title)
              .join(" · ")}
          </p>
        </div>
        <ArrowRight
          aria-hidden
          className="mt-1 size-5 shrink-0 text-slate transition-transform group-hover:translate-x-1 group-hover:text-polar"
        />
      </div>
    </Link>
  );
}
