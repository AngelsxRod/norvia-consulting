import type { Department, Job, Seniority, WorkMode } from "@/types/content";

export const departments: Department[] = [
  "Ingeniería",
  "Datos e IA",
  "Cloud",
  "Seguridad",
  "Diseño",
  "Consultoría",
];
export const workModes: WorkMode[] = ["Remoto", "Híbrido", "Presencial"];
export const seniorities: Seniority[] = ["Junior", "Semi Senior", "Senior", "Líder"];

const commonBenefits = [
  "Presupuesto anual de formación y certificaciones",
  "Horario flexible orientado a resultados",
  "Equipo y herramientas de trabajo provistos",
  "Días adicionales de descanso",
];

/** Vacantes ficticias de demostración: no existe un proceso de selección real. */
export const jobs: Job[] = [
  {
    slug: "ingeniera-o-frontend-senior",
    title: "Ingeniero/a frontend senior",
    department: "Ingeniería",
    mode: "Remoto",
    seniority: "Senior",
    location: "Latinoamérica (remoto)",
    contract: "Tiempo completo",
    summary:
      "Construirás interfaces accesibles y de alto rendimiento para portales y aplicaciones de clientes empresariales.",
    responsibilities: [
      "Desarrollar aplicaciones con React y Next.js con foco en rendimiento y accesibilidad.",
      "Contribuir al sistema de diseño compartido con el equipo de diseño.",
      "Definir estrategias de pruebas de componentes y de extremo a extremo.",
      "Acompañar a perfiles junior mediante revisión de código y pairing.",
    ],
    requirements: [
      "Cinco años o más desarrollando aplicaciones web en producción.",
      "Dominio de TypeScript, React y CSS moderno.",
      "Experiencia aplicando criterios WCAG.",
      "Comunicación clara con perfiles no técnicos.",
    ],
    niceToHave: ["Experiencia con sistemas de diseño", "Conocimientos de Web Vitals"],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Playwright"],
    benefits: commonBenefits,
  },
  {
    slug: "ingeniera-o-backend-java",
    title: "Ingeniero/a backend Java",
    department: "Ingeniería",
    mode: "Híbrido",
    seniority: "Semi Senior",
    location: "Ciudad de Guatemala",
    contract: "Tiempo completo",
    summary:
      "Desarrollarás servicios y APIs para proyectos de modernización de sistemas en banca y seguros.",
    responsibilities: [
      "Diseñar e implementar APIs y servicios con Spring Boot.",
      "Escribir pruebas automatizadas y participar en revisiones de código.",
      "Colaborar en la migración gradual de funcionalidades heredadas.",
      "Instrumentar servicios con métricas y trazas.",
    ],
    requirements: [
      "Tres años o más con Java en entornos productivos.",
      "Experiencia con bases de datos relacionales.",
      "Conocimientos de diseño de APIs REST.",
    ],
    niceToHave: ["Kafka o mensajería", "Experiencia en sector financiero"],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
    benefits: commonBenefits,
  },
  {
    slug: "ingeniera-o-de-datos",
    title: "Ingeniero/a de datos",
    department: "Datos e IA",
    mode: "Remoto",
    seniority: "Semi Senior",
    location: "Latinoamérica (remoto)",
    contract: "Tiempo completo",
    summary:
      "Construirás pipelines y modelos analíticos confiables para plataformas de datos de clientes.",
    responsibilities: [
      "Desarrollar pipelines de ingesta y transformación con pruebas de calidad.",
      "Modelar datos para analítica con dbt.",
      "Documentar linaje y definiciones de indicadores.",
    ],
    requirements: [
      "Dos años o más en ingeniería de datos.",
      "SQL avanzado y Python.",
      "Experiencia con un data warehouse en la nube.",
    ],
    niceToHave: ["Airflow o Dagster", "Experiencia en retail"],
    technologies: ["SQL", "Python", "dbt", "Snowflake", "Airflow"],
    benefits: commonBenefits,
  },
  {
    slug: "cientifica-o-de-datos-ia-aplicada",
    title: "Científico/a de datos — IA aplicada",
    department: "Datos e IA",
    mode: "Híbrido",
    seniority: "Senior",
    location: "Bogotá",
    contract: "Tiempo completo",
    summary:
      "Diseñarás y evaluarás soluciones de IA predictiva y generativa para procesos de negocio.",
    responsibilities: [
      "Identificar casos de uso junto a consultores y clientes.",
      "Construir conjuntos de evaluación y comparar enfoques.",
      "Llevar modelos a producción con el equipo de ingeniería.",
      "Monitorear calidad y deriva de modelos.",
    ],
    requirements: [
      "Cuatro años o más en ciencia de datos aplicada.",
      "Experiencia con modelos de lenguaje y RAG.",
      "Sólida base estadística y de evaluación de modelos.",
    ],
    niceToHave: ["MLOps", "Publicaciones o charlas técnicas"],
    technologies: ["Python", "scikit-learn", "LLM APIs", "MLflow", "Vector DB"],
    benefits: commonBenefits,
  },
  {
    slug: "ingeniera-o-cloud-devops",
    title: "Ingeniero/a cloud y DevOps",
    department: "Cloud",
    mode: "Remoto",
    seniority: "Senior",
    location: "Latinoamérica (remoto)",
    contract: "Tiempo completo",
    summary:
      "Diseñarás landing zones, pipelines y prácticas de operación para clientes en AWS y Azure.",
    responsibilities: [
      "Implementar infraestructura como código con Terraform.",
      "Construir pipelines de entrega reutilizables.",
      "Definir SLO, alertas y procedimientos de incidentes.",
      "Analizar y optimizar costos cloud.",
    ],
    requirements: [
      "Cuatro años o más operando infraestructura en la nube.",
      "Experiencia con Kubernetes en producción.",
      "Dominio de Terraform y un proveedor cloud.",
    ],
    niceToHave: ["Certificación profesional cloud", "Experiencia con FinOps"],
    technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "GitHub Actions"],
    benefits: commonBenefits,
  },
  {
    slug: "analista-de-ciberseguridad",
    title: "Analista de ciberseguridad",
    department: "Seguridad",
    mode: "Híbrido",
    seniority: "Junior",
    location: "Ciudad de Guatemala",
    contract: "Tiempo completo",
    summary:
      "Apoyarás evaluaciones de postura de seguridad y la integración de controles en el ciclo de desarrollo.",
    responsibilities: [
      "Ejecutar herramientas de análisis de código y dependencias.",
      "Documentar hallazgos y acompañar su remediación.",
      "Participar en ejercicios de respuesta a incidentes.",
    ],
    requirements: [
      "Formación en informática, sistemas o afines.",
      "Conocimientos de OWASP Top 10.",
      "Interés por la seguridad en entornos cloud.",
    ],
    niceToHave: ["Participación en CTF", "Certificación de entrada en seguridad"],
    technologies: ["OWASP ZAP", "Semgrep", "Trivy", "Linux"],
    benefits: commonBenefits,
  },
  {
    slug: "disenadora-o-ux-ui",
    title: "Diseñador/a UX/UI",
    department: "Diseño",
    mode: "Remoto",
    seniority: "Semi Senior",
    location: "Latinoamérica (remoto)",
    contract: "Tiempo completo",
    summary:
      "Investigarás con usuarios y diseñarás experiencias digitales para clientes de sectores regulados.",
    responsibilities: [
      "Planificar y conducir entrevistas y pruebas de usabilidad.",
      "Diseñar flujos, prototipos y componentes.",
      "Colaborar con ingeniería en la implementación.",
    ],
    requirements: [
      "Tres años o más en diseño de producto digital.",
      "Portafolio con procesos de investigación documentados.",
      "Conocimientos de accesibilidad.",
    ],
    niceToHave: ["Experiencia con sistemas de diseño", "Redacción UX"],
    technologies: ["Figma", "Maze", "FigJam"],
    benefits: commonBenefits,
  },
  {
    slug: "consultora-o-de-transformacion",
    title: "Consultor/a de transformación digital",
    department: "Consultoría",
    mode: "Presencial",
    seniority: "Senior",
    location: "Ciudad de México",
    contract: "Tiempo completo",
    summary:
      "Acompañarás a comités directivos en el diseño y gobierno de programas de transformación.",
    responsibilities: [
      "Facilitar talleres de priorización con dirección.",
      "Diseñar portafolios de iniciativas y tableros de beneficios.",
      "Coordinar equipos multidisciplinarios.",
    ],
    requirements: [
      "Seis años o más en consultoría o transformación.",
      "Experiencia gestionando relaciones con nivel directivo.",
      "Capacidad analítica y de síntesis.",
    ],
    niceToHave: ["Experiencia en servicios financieros", "Formación en negocios"],
    technologies: ["Lean Portfolio", "OKR", "Power BI"],
    benefits: commonBenefits,
  },
  {
    slug: "lider-tecnica-o-de-integracion",
    title: "Líder técnico/a de integración",
    department: "Ingeniería",
    mode: "Híbrido",
    seniority: "Líder",
    location: "Santiago de Chile",
    contract: "Tiempo completo",
    summary:
      "Liderarás equipos que diseñan plataformas de APIs y eventos para ecosistemas empresariales.",
    responsibilities: [
      "Definir arquitecturas de integración y estándares de contratos.",
      "Liderar técnicamente a equipos de cuatro a ocho personas.",
      "Representar al equipo ante arquitectos del cliente.",
    ],
    requirements: [
      "Ocho años o más en desarrollo e integración.",
      "Experiencia con mensajería y gestión de APIs.",
      "Liderazgo de equipos técnicos.",
    ],
    niceToHave: ["Experiencia con SAP o Salesforce", "AsyncAPI"],
    technologies: ["Kafka", "API Management", "AsyncAPI", "Java", ".NET"],
    benefits: commonBenefits,
  },
  {
    slug: "practicante-de-desarrollo-de-software",
    title: "Practicante de desarrollo de software",
    department: "Ingeniería",
    mode: "Híbrido",
    seniority: "Junior",
    location: "Ciudad de Guatemala",
    contract: "Prácticas (6 meses)",
    summary:
      "Te sumarás a un equipo de producto y aprenderás prácticas de ingeniería profesional acompañado por una mentora.",
    responsibilities: [
      "Desarrollar funcionalidades acotadas con acompañamiento.",
      "Escribir pruebas y documentación.",
      "Participar en las ceremonias del equipo.",
    ],
    requirements: [
      "Estudiante de los últimos ciclos de una carrera afín.",
      "Conocimientos de programación en cualquier lenguaje.",
      "Curiosidad y disposición para aprender.",
    ],
    niceToHave: ["Proyectos personales publicados", "Conocimientos de Git"],
    technologies: ["Git", "TypeScript", "SQL"],
    benefits: ["Mentoría asignada", "Horario compatible con estudios", "Certificado de prácticas"],
  },
];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
