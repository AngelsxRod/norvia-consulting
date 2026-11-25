import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { industries } from "@/data/industries";
import { companyNav, legalNav } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { solutions } from "@/data/solutions";

const columns = [
  {
    title: "Servicios",
    links: services.map((s) => ({ label: s.shortName, href: `/servicios/${s.slug}/` })),
  },
  {
    title: "Soluciones",
    links: solutions.map((s) => ({ label: s.name, href: `/soluciones/${s.slug}/` })),
  },
  {
    title: "Industrias",
    links: industries.map((i) => ({ label: i.name, href: `/industrias/${i.slug}/` })),
  },
  {
    title: "Compañía",
    links: [
      { label: "Casos de éxito", href: "/casos-de-exito/" },
      { label: "Metodología", href: "/metodologia/" },
      { label: "Insights", href: "/insights/" },
      ...companyNav,
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-on-dark">
      <div className="container-wide grid gap-14 pt-20 pb-10">
        <div className="grid gap-10 border-b border-on-dark-line pb-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo descriptor />
            <p className="max-w-sm text-lg leading-snug text-on-dark">
              {site.slogan}{" "}
              <span className="text-on-dark-muted">
                Estrategia, ingeniería y datos para empresas que necesitan avanzar con dirección.
              </span>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit font-mono text-sm text-signal underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
          <nav
            aria-label="Pie de página"
            className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4"
          >
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="eyebrow text-on-dark-muted">{column.title}</p>
                <ul className="flex flex-col gap-1">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-8 items-center text-sm text-on-dark/90 transition-colors hover:text-signal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6 text-sm text-on-dark-muted lg:flex-row lg:items-start lg:justify-between">
          <p
            role="note"
            className="max-w-2xl border-l-2 border-signal pl-4 leading-relaxed text-on-dark-muted"
          >
            <strong className="font-medium text-on-dark">Proyecto de portafolio.</strong>{" "}
            {site.disclaimer} Diseño y desarrollo por{" "}
            <a
              href={site.author.url}
              className="text-on-dark underline underline-offset-4 hover:text-signal"
            >
              {site.author.name}
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-8 content-center hover:text-signal"
              >
                {link.label}
              </Link>
            ))}
            <a href={site.repository} className="min-h-8 content-center hover:text-signal">
              Código fuente
            </a>
            <span className="font-mono text-xs">© {new Date().getFullYear()} Norvia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
