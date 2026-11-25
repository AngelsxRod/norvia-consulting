import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Job } from "@/types/content";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="group relative grid gap-4 border-t border-line py-6 transition-colors hover:border-ink md:grid-cols-[1fr_auto] md:items-center">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="polar">{job.department}</Badge>
          <Badge>{job.mode}</Badge>
          <Badge>{job.seniority}</Badge>
        </div>
        <h3 className="text-xl font-semibold">
          <Link
            href={`/carreras/${job.slug}/`}
            className="group-hover:text-polar after:absolute after:inset-0"
          >
            {job.title}
          </Link>
        </h3>
        <p className="max-w-2xl text-[0.95rem] text-slate">{job.summary}</p>
      </div>
      <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
        <span className="font-mono text-xs text-slate">{job.location}</span>
        <ArrowRight
          aria-hidden
          className="size-5 text-slate transition-transform group-hover:translate-x-1 group-hover:text-polar"
        />
      </div>
    </article>
  );
}
