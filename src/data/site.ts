export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://norvia.kaled.dev").replace(
  /\/$/,
  "",
);

export const site = {
  name: "Norvia",
  legalName: "Norvia Consulting",
  url: siteUrl,
  slogan: "Tecnología con rumbo.",
  description:
    "Norvia es una consultora tecnológica B2B ficticia que acompaña a empresas medianas y grandes en estrategia, desarrollo de software, cloud, datos, inteligencia artificial y ciberseguridad.",
  /** Dirección de ejemplo con dominio reservado para documentación (RFC 2606). */
  email: "hola@norvia.example",
  repository: "https://github.com/AngelsxRod/norvia-consulting",
  author: { name: "Kaled", url: "https://kaled.dev" },
  disclaimer:
    "Norvia es una marca ficticia creada como proyecto de portafolio. Clientes, cifras, personas y vacantes son ilustrativos.",
} as const;

export const metrics = [
  { value: 140, suffix: "+", label: "Iniciativas de transformación acompañadas" },
  { value: 12, suffix: "", label: "Países con equipos de clientes atendidos" },
  { value: 92, suffix: "%", label: "Clientes que renuevan tras la primera fase" },
  { value: 38, suffix: "%", label: "Reducción media del tiempo de entrega" },
] as const;

export const values = [
  {
    title: "Claridad antes que complejidad",
    description:
      "Explicamos cada decisión técnica en términos de negocio. Si una arquitectura no puede contarse en una página, todavía no está lista.",
  },
  {
    title: "Rigor medible",
    description:
      "Trabajamos con líneas base, hipótesis y métricas acordadas. Lo que no se mide no se promete.",
  },
  {
    title: "Criterio independiente",
    description:
      "No revendemos licencias ni empujamos plataformas. Recomendamos lo que el problema necesita, incluso cuando la respuesta es no construir.",
  },
  {
    title: "Continuidad operativa",
    description:
      "Diseñamos para que el cliente opere sin nosotros: documentación viva, transferencia de conocimiento y equipos internos fortalecidos.",
  },
  {
    title: "Apertura y colaboración",
    description:
      "Equipos mixtos con el cliente, decisiones visibles y repositorios compartidos desde el primer día.",
  },
] as const;

export const differentiators = [
  {
    title: "Diagnóstico con evidencia",
    description:
      "Antes de proponer, medimos: flujos de valor, deuda técnica, costos de operación y riesgos. Cada recomendación se apoya en datos del propio cliente.",
  },
  {
    title: "Arquitectura como mapa",
    description:
      "Convertimos el ecosistema tecnológico en un mapa navegable: capacidades, dependencias y rutas de evolución con hitos verificables.",
  },
  {
    title: "Entrega incremental",
    description:
      "Liberamos valor cada pocas semanas. Ninguna iniciativa espera un gran lanzamiento para demostrar resultados.",
  },
  {
    title: "Equipos que transfieren",
    description:
      "Cada proyecto incluye un plan explícito de transferencia: pairing, guías de operación y acompañamiento posterior.",
  },
] as const;
