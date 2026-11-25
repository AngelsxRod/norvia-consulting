/** Contratos de datos del sitio. Todo el contenido vive en src/data como objetos tipados. */

export type ImageKey = string;

export type Faq = {
  question: string;
  answer: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Capability = {
  title: string;
  description: string;
};

/** Identificador de cada pictograma lineal propio (ver src/components/brand/pictogram.tsx). */
export type PictogramName =
  | "compass"
  | "transform"
  | "code"
  | "cloud"
  | "spark"
  | "data"
  | "shield"
  | "link"
  | "layers"
  | "flow"
  | "cart"
  | "chart"
  | "migrate"
  | "screen"
  | "network"
  | "brain";

export type ServiceSlug =
  | "consultoria-estrategia-tecnologica"
  | "transformacion-digital"
  | "desarrollo-de-software"
  | "cloud-devops"
  | "inteligencia-artificial-automatizacion"
  | "ingenieria-analisis-de-datos"
  | "ciberseguridad"
  | "integracion-de-sistemas";

export type SolutionSlug =
  | "modernizacion-sistemas-empresariales"
  | "automatizacion-procesos-operativos"
  | "plataformas-comercio-digital"
  | "inteligencia-empresarial"
  | "migracion-optimizacion-cloud"
  | "experiencias-digitales-clientes"
  | "integracion-ecosistemas-tecnologicos"
  | "ia-aplicada-al-negocio";

export type IndustrySlug =
  | "servicios-financieros"
  | "retail-comercio-electronico"
  | "salud"
  | "logistica-transporte"
  | "manufactura"
  | "educacion"
  | "energia"
  | "telecomunicaciones";

export type Service = {
  slug: ServiceSlug;
  number: string;
  name: string;
  shortName: string;
  pictogram: PictogramName;
  tagline: string;
  summary: string;
  description: string[];
  problems: string[];
  capabilities: Capability[];
  scope: string[];
  benefits: Capability[];
  methodology: Step[];
  technologies: string[];
  deliverables: string[];
  faqs: Faq[];
  image: ImageKey;
};

/** Nodo de un diagrama de arquitectura conceptual. */
export type DiagramLayer = {
  id: string;
  label: string;
  description: string;
  nodes: string[];
};

export type Solution = {
  slug: SolutionSlug;
  name: string;
  pictogram: PictogramName;
  tagline: string;
  summary: string;
  context: string;
  problem: string[];
  approach: string[];
  architecture: DiagramLayer[];
  services: ServiceSlug[];
  benefits: Capability[];
  implementation: Step[];
  industries: IndustrySlug[];
  image: ImageKey;
};

export type Industry = {
  slug: IndustrySlug;
  name: string;
  pictogram: PictogramName;
  summary: string;
  context: string[];
  challenges: Capability[];
  opportunities: Capability[];
  solutions: SolutionSlug[];
  services: ServiceSlug[];
  technologies: string[];
  image: ImageKey;
};

export type Metric = {
  label: string;
  before: number;
  after: number;
  unit: string;
  /** true si un valor menor es mejor (p. ej. tiempos o costos). */
  lowerIsBetter?: boolean;
};

export type TrendPoint = {
  period: string;
  baseline: number;
  result: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  clientDescription: string;
  industry: IndustrySlug;
  services: ServiceSlug[];
  solution: SolutionSlug;
  year: number;
  duration: string;
  summary: string;
  context: string;
  challenge: string[];
  solutionDetail: string[];
  architecture: DiagramLayer[];
  stack: string[];
  methodology: Step[];
  highlights: { value: string; label: string }[];
  metrics: Metric[];
  trend: { label: string; unit: string; points: TrendPoint[] };
  image: ImageKey;
  gallery: ImageKey[];
};

export type Department =
  "Ingeniería" | "Datos e IA" | "Cloud" | "Seguridad" | "Diseño" | "Consultoría";

export type WorkMode = "Remoto" | "Híbrido" | "Presencial";
export type Seniority = "Junior" | "Semi Senior" | "Senior" | "Líder";

export type Job = {
  slug: string;
  title: string;
  department: Department;
  mode: WorkMode;
  seniority: Seniority;
  location: string;
  contract: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  technologies: string[];
  benefits: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  area: string;
  specialty: string;
  bio: string;
  focus: string[];
  initials: string;
};

export type ArticleCategory =
  | "Transformación digital"
  | "Desarrollo de software"
  | "Inteligencia artificial"
  | "Cloud"
  | "Datos"
  | "Ciberseguridad"
  | "Arquitectura"
  | "Estrategia";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  date: string;
  image: ImageKey;
  body: ArticleBlock[];
};

export type ImageMeta = {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: { author: string; profileUrl: string; sourceUrl: string };
};
