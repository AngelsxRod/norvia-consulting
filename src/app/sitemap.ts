import type { MetadataRoute } from "next";

import { sortedArticles } from "@/data/articles";
import { caseStudies } from "@/data/case-studies";
import { industries } from "@/data/industries";
import { jobs } from "@/data/jobs";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";
import { solutions } from "@/data/solutions";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/nosotros/",
  "/servicios/",
  "/soluciones/",
  "/industrias/",
  "/casos-de-exito/",
  "/equipo/",
  "/carreras/",
  "/insights/",
  "/metodologia/",
  "/contacto/",
  "/privacidad/",
  "/aviso-legal/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25");
  const routes = [
    ...staticRoutes.map((path) => ({ path, lastModified })),
    ...services.map((s) => ({ path: `/servicios/${s.slug}/`, lastModified })),
    ...solutions.map((s) => ({ path: `/soluciones/${s.slug}/`, lastModified })),
    ...industries.map((i) => ({ path: `/industrias/${i.slug}/`, lastModified })),
    ...caseStudies.map((c) => ({ path: `/casos-de-exito/${c.slug}/`, lastModified })),
    ...jobs.map((j) => ({ path: `/carreras/${j.slug}/`, lastModified })),
    ...sortedArticles.map((a) => ({
      path: `/insights/${a.slug}/`,
      lastModified: new Date(a.date),
    })),
  ];
  return routes.map(({ path, lastModified: modified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: modified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
  }));
}
