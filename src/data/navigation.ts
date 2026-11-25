export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Servicios", href: "/servicios/" },
  { label: "Soluciones", href: "/soluciones/" },
  { label: "Industrias", href: "/industrias/" },
  { label: "Casos de éxito", href: "/casos-de-exito/" },
  { label: "Metodología", href: "/metodologia/" },
  { label: "Insights", href: "/insights/" },
];

export const companyNav: NavLink[] = [
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Equipo", href: "/equipo/" },
  { label: "Carreras", href: "/carreras/" },
  { label: "Contacto", href: "/contacto/" },
];

export const legalNav: NavLink[] = [
  { label: "Privacidad", href: "/privacidad/" },
  { label: "Aviso legal", href: "/aviso-legal/" },
];
