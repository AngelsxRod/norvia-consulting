import { industries } from "@/data/industries";
import { companyNav } from "@/data/navigation";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

import type { MegaGroup } from "./nav-types";
import { SiteHeader } from "./site-header";

/** Construye en el servidor la información mínima que necesita el menú en el cliente. */
const groups: MegaGroup[] = [
  {
    id: "servicios",
    label: "Servicios",
    href: "/servicios/",
    intro: "Ocho capacidades profesionales para diseñar, construir y operar tecnología.",
    overviewLabel: "Ver todos los servicios",
    items: services.map((service) => ({
      name: service.shortName,
      href: `/servicios/${service.slug}/`,
      description: service.tagline,
      pictogram: service.pictogram,
    })),
  },
  {
    id: "soluciones",
    label: "Soluciones",
    href: "/soluciones/",
    intro: "Respuestas a problemas empresariales concretos que combinan varias capacidades.",
    overviewLabel: "Ver todas las soluciones",
    items: solutions.map((solution) => ({
      name: solution.name,
      href: `/soluciones/${solution.slug}/`,
      description: solution.tagline,
      pictogram: solution.pictogram,
    })),
  },
  {
    id: "industrias",
    label: "Industrias",
    href: "/industrias/",
    intro: "Conocimiento sectorial para entender cada contexto regulatorio y operativo.",
    overviewLabel: "Ver todas las industrias",
    items: industries.map((industry) => ({
      name: industry.name,
      href: `/industrias/${industry.slug}/`,
      description: industry.challenges[0]?.title ?? "",
      pictogram: industry.pictogram,
    })),
  },
];

const links = [
  { label: "Casos de éxito", href: "/casos-de-exito/" },
  { label: "Insights", href: "/insights/" },
];

const company = [{ label: "Metodología", href: "/metodologia/" }, ...companyNav.slice(0, 3)];

export function Header() {
  return <SiteHeader groups={groups} links={links} company={company} />;
}
