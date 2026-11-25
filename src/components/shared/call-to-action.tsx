import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CallToAction({
  eyebrow = "Siguiente paso",
  title,
  description,
  primary = { label: "Agendar una conversación", href: "/contacto/" },
  secondary,
}: CallToActionProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-on-dark">
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -bottom-48 size-[38rem] text-on-dark-line"
        fill="none"
      >
        {[80, 150, 220, 290].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} stroke="currentColor" />
        ))}
        <path d="M300 0v600M0 300h600" stroke="currentColor" />
        <path d="m300 60 34 240-34 240-34-240 34-240Z" stroke="var(--color-signal)" />
      </svg>
      <Container size="wide" className="relative grid gap-10 py-section lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <p className="flex items-center gap-3 eyebrow text-signal">
            <span aria-hidden className="h-px w-8 bg-current" />
            {eyebrow}
          </p>
          <h2 className="max-w-[20ch] text-h2 font-semibold">{title}</h2>
          <p className="max-w-xl text-lead text-on-dark-muted">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start lg:justify-end">
          <Link
            href={primary.href}
            className={cn(buttonVariants({ variant: "signal", size: "lg" }))}
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className={cn(buttonVariants({ variant: "outline-light", size: "lg" }))}
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
