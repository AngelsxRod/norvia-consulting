import type { Industry, IndustrySlug } from "@/types/content";

export const industries: Industry[] = [
  {
    slug: "servicios-financieros",
    name: "Servicios financieros",
    pictogram: "chart",
    summary:
      "Banca, seguros y entidades financieras que modernizan su núcleo, digitalizan la relación con el cliente y gestionan riesgo con datos.",
    context: [
      "Las entidades financieras compiten con nuevos actores digitales mientras operan sistemas centrales de décadas y cumplen marcos regulatorios cada vez más exigentes.",
      "La transformación exige equilibrar velocidad y control: lanzar productos en semanas sin comprometer la seguridad, la trazabilidad ni la estabilidad operativa.",
    ],
    challenges: [
      {
        title: "Núcleos heredados",
        description: "Sistemas centrales rígidos que encarecen cada cambio de producto.",
      },
      {
        title: "Regulación cambiante",
        description: "Requisitos de reporte y protección de datos con plazos estrictos.",
      },
      {
        title: "Fraude sofisticado",
        description: "Patrones de fraude que evolucionan más rápido que las reglas estáticas.",
      },
      {
        title: "Onboarding lento",
        description: "Altas de clientes con validaciones manuales y alto abandono.",
      },
    ],
    opportunities: [
      {
        title: "Onboarding digital",
        description: "Altas en minutos con validación automática de documentos.",
      },
      {
        title: "Analítica de riesgo",
        description: "Modelos de detección de anomalías y scoring explicable.",
      },
      {
        title: "Banca abierta",
        description: "APIs gobernadas para conectar socios y nuevos servicios.",
      },
    ],
    solutions: [
      "modernizacion-sistemas-empresariales",
      "automatizacion-procesos-operativos",
      "experiencias-digitales-clientes",
      "ia-aplicada-al-negocio",
    ],
    services: ["ciberseguridad", "desarrollo-de-software", "ingenieria-analisis-de-datos"],
    technologies: ["Core banking APIs", "Kafka", "Snowflake", "Zero Trust", "Kubernetes"],
    image: "finance-escalators",
  },
  {
    slug: "retail-comercio-electronico",
    name: "Retail y comercio electrónico",
    pictogram: "cart",
    summary:
      "Minoristas y marcas que unifican canales, optimizan inventario y personalizan la experiencia de compra.",
    context: [
      "El retail opera con márgenes estrechos y clientes que esperan disponibilidad inmediata en cualquier canal. La precisión del inventario y la velocidad de la experiencia digital son ventajas competitivas.",
      "La información de ventas, inventario y comportamiento existe, pero suele estar dispersa en sistemas que no se comunican en tiempo real.",
    ],
    challenges: [
      {
        title: "Inventario fragmentado",
        description: "Stock distinto en cada canal y quiebres que generan ventas perdidas.",
      },
      {
        title: "Picos de demanda",
        description: "Temporadas que ponen a prueba la infraestructura digital.",
      },
      {
        title: "Personalización superficial",
        description: "Recomendaciones genéricas que no reflejan al cliente.",
      },
      {
        title: "Cumplimiento costoso",
        description: "Última milla y devoluciones que erosionan el margen.",
      },
    ],
    opportunities: [
      {
        title: "Comercio unificado",
        description: "Una sola fuente de inventario, precio y pedidos.",
      },
      {
        title: "Pronóstico de demanda",
        description: "Reposición guiada por modelos predictivos por tienda y SKU.",
      },
      {
        title: "Experiencia medible",
        description: "Embudos instrumentados y pruebas controladas.",
      },
    ],
    solutions: [
      "plataformas-comercio-digital",
      "inteligencia-empresarial",
      "ia-aplicada-al-negocio",
      "integracion-ecosistemas-tecnologicos",
    ],
    services: ["desarrollo-de-software", "ingenieria-analisis-de-datos", "cloud-devops"],
    technologies: ["Headless commerce", "Next.js", "BigQuery", "dbt", "Event streaming"],
    image: "retail-hall",
  },
  {
    slug: "salud",
    name: "Salud",
    pictogram: "shield",
    summary:
      "Hospitales, aseguradoras de salud y redes clínicas que integran información, digitalizan la atención y protegen datos sensibles.",
    context: [
      "El sector salud combina procesos críticos, datos altamente sensibles y una gran cantidad de sistemas especializados que rara vez se integran bien entre sí.",
      "La digitalización bien diseñada reduce tiempos administrativos y devuelve horas a la atención, siempre con privacidad y trazabilidad como requisitos de partida.",
    ],
    challenges: [
      {
        title: "Información fragmentada",
        description: "Historias clínicas, laboratorio y facturación en sistemas aislados.",
      },
      {
        title: "Carga administrativa",
        description: "Autorizaciones y registros que consumen tiempo del personal clínico.",
      },
      {
        title: "Datos sensibles",
        description: "Exigencias estrictas de privacidad, acceso y auditoría.",
      },
      {
        title: "Gestión de capacidad",
        description: "Camas, quirófanos y agendas con baja visibilidad en tiempo real.",
      },
    ],
    opportunities: [
      {
        title: "Interoperabilidad",
        description: "Intercambio de información clínica con estándares abiertos.",
      },
      {
        title: "Autorizaciones automatizadas",
        description: "Reglas y extracción de documentos con revisión humana.",
      },
      {
        title: "Tableros de capacidad",
        description: "Ocupación y demanda visibles para planificar.",
      },
    ],
    solutions: [
      "automatizacion-procesos-operativos",
      "inteligencia-empresarial",
      "experiencias-digitales-clientes",
      "migracion-optimizacion-cloud",
    ],
    services: [
      "integracion-de-sistemas",
      "ciberseguridad",
      "inteligencia-artificial-automatizacion",
    ],
    technologies: ["HL7 FHIR", "Azure", "Power BI", "OCR", "Gestión de identidades"],
    image: "health-tablet",
  },
  {
    slug: "logistica-transporte",
    name: "Logística y transporte",
    pictogram: "network",
    summary:
      "Operadores logísticos, transportistas y centros de distribución que buscan visibilidad de extremo a extremo y eficiencia operativa.",
    context: [
      "La logística depende de coordinar personas, vehículos, almacenes y socios en tiempo real. Pequeñas ineficiencias se multiplican por miles de envíos diarios.",
      "La visibilidad del estado de cada envío y la integración con clientes y socios son hoy requisitos comerciales, no ventajas opcionales.",
    ],
    challenges: [
      {
        title: "Visibilidad limitada",
        description: "Estados de envío desactualizados y consultas constantes de clientes.",
      },
      {
        title: "Integración con socios",
        description: "Intercambio de datos por archivos y correo con cada transportista.",
      },
      {
        title: "Planificación manual",
        description: "Rutas y asignaciones basadas en experiencia individual.",
      },
      {
        title: "Costos variables",
        description: "Combustible y capacidad ociosa difíciles de anticipar.",
      },
    ],
    opportunities: [
      {
        title: "Torre de control",
        description: "Eventos de envío en tiempo real en un solo tablero.",
      },
      {
        title: "Optimización de rutas",
        description: "Planificación asistida por algoritmos con restricciones reales.",
      },
      {
        title: "Integración por APIs",
        description: "Onboarding rápido de clientes y transportistas.",
      },
    ],
    solutions: [
      "integracion-ecosistemas-tecnologicos",
      "automatizacion-procesos-operativos",
      "migracion-optimizacion-cloud",
      "inteligencia-empresarial",
    ],
    services: ["integracion-de-sistemas", "ingenieria-analisis-de-datos", "cloud-devops"],
    technologies: ["Event streaming", "APIs EDI", "Google OR-Tools", "PostGIS", "Kubernetes"],
    image: "logistics-racks",
  },
  {
    slug: "manufactura",
    name: "Manufactura",
    pictogram: "layers",
    summary:
      "Fabricantes que conectan planta, cadena de suministro y negocio para producir con mayor eficiencia y calidad.",
    context: [
      "La manufactura genera grandes volúmenes de datos en planta que pocas veces llegan a las decisiones de negocio. Al mismo tiempo, la cadena de suministro exige reaccionar en días, no en meses.",
      "Conectar los sistemas de planta con la planificación y el ERP permite anticipar fallas, reducir desperdicio y responder a cambios de demanda.",
    ],
    challenges: [
      {
        title: "Datos de planta aislados",
        description: "Sensores y sistemas de control sin conexión con el negocio.",
      },
      {
        title: "Paradas no planificadas",
        description: "Mantenimiento reactivo con alto costo de producción perdida.",
      },
      {
        title: "Planificación rígida",
        description: "Planes de producción que no se ajustan a la demanda real.",
      },
      {
        title: "ERP heredado",
        description: "Personalizaciones acumuladas que dificultan las actualizaciones.",
      },
    ],
    opportunities: [
      {
        title: "Mantenimiento predictivo",
        description: "Modelos que anticipan fallas a partir de datos de sensores.",
      },
      {
        title: "Planificación integrada",
        description: "Demanda, inventario y capacidad en un mismo modelo.",
      },
      {
        title: "Calidad asistida",
        description: "Detección temprana de desviaciones en línea.",
      },
    ],
    solutions: [
      "modernizacion-sistemas-empresariales",
      "ia-aplicada-al-negocio",
      "integracion-ecosistemas-tecnologicos",
      "plataformas-comercio-digital",
    ],
    services: [
      "inteligencia-artificial-automatizacion",
      "integracion-de-sistemas",
      "ingenieria-analisis-de-datos",
    ],
    technologies: ["OPC UA", "MQTT", "Databricks", "SAP", "Time series DB"],
    image: "factory-line",
  },
  {
    slug: "educacion",
    name: "Educación",
    pictogram: "compass",
    summary:
      "Universidades e instituciones educativas que digitalizan la experiencia del estudiante y la gestión académica.",
    context: [
      "Las instituciones educativas atienden a estudiantes digitales con procesos administrativos diseñados para la ventanilla. Inscripciones, pagos y trámites concentran la insatisfacción.",
      "Los datos académicos permiten anticipar la deserción y personalizar el acompañamiento, si se integran y analizan con responsabilidad.",
    ],
    challenges: [
      {
        title: "Trámites presenciales",
        description: "Inscripciones y certificados que requieren múltiples visitas.",
      },
      {
        title: "Deserción",
        description: "Señales de riesgo detectadas cuando ya es tarde.",
      },
      {
        title: "Sistemas dispersos",
        description: "Plataformas académicas, financieras y de aprendizaje desconectadas.",
      },
      {
        title: "Picos de demanda",
        description: "Periodos de inscripción que saturan la infraestructura.",
      },
    ],
    opportunities: [
      {
        title: "Portal del estudiante",
        description: "Trámites, pagos y seguimiento en una sola experiencia.",
      },
      {
        title: "Alertas tempranas",
        description: "Indicadores de riesgo académico para tutores.",
      },
      {
        title: "Infraestructura elástica",
        description: "Capacidad cloud ajustada al calendario académico.",
      },
    ],
    solutions: [
      "experiencias-digitales-clientes",
      "inteligencia-empresarial",
      "migracion-optimizacion-cloud",
    ],
    services: ["desarrollo-de-software", "ingenieria-analisis-de-datos", "cloud-devops"],
    technologies: ["LTI", "Next.js", "Power BI", "AWS", "Identidad federada"],
    image: "education-class",
  },
  {
    slug: "energia",
    name: "Energía",
    pictogram: "spark",
    summary:
      "Empresas de generación, distribución y servicios energéticos que digitalizan activos y operaciones en la transición energética.",
    context: [
      "La transición energética incorpora fuentes renovables variables, generación distribuida y nuevos modelos de negocio que exigen operar redes más complejas con datos en tiempo real.",
      "Los activos físicos tienen ciclos de vida largos; la digitalización debe convivir con sistemas operativos críticos y estándares de seguridad estrictos.",
    ],
    challenges: [
      {
        title: "Generación variable",
        description: "Renovables que requieren pronósticos y balance más precisos.",
      },
      {
        title: "Activos distribuidos",
        description: "Mantenimiento de infraestructura extensa y remota.",
      },
      {
        title: "Ciberseguridad OT",
        description: "Sistemas operativos críticos cada vez más conectados.",
      },
      {
        title: "Atención a clientes",
        description: "Facturación y gestión de incidencias con alta demanda.",
      },
    ],
    opportunities: [
      {
        title: "Pronóstico energético",
        description: "Modelos de generación y demanda con datos meteorológicos.",
      },
      {
        title: "Gestión de activos",
        description: "Inspecciones digitales y mantenimiento basado en condición.",
      },
      {
        title: "Autoservicio",
        description: "Gestión de consumo y reclamos en canales digitales.",
      },
    ],
    solutions: [
      "modernizacion-sistemas-empresariales",
      "automatizacion-procesos-operativos",
      "integracion-ecosistemas-tecnologicos",
    ],
    services: [
      "ciberseguridad",
      "ingenieria-analisis-de-datos",
      "inteligencia-artificial-automatizacion",
    ],
    technologies: ["SCADA", "IEC 62443", "Time series", "Azure", "Python"],
    image: "energy-plant",
  },
  {
    slug: "telecomunicaciones",
    name: "Telecomunicaciones",
    pictogram: "link",
    summary:
      "Operadores y proveedores de conectividad que modernizan sistemas de soporte, automatizan la red y mejoran la experiencia del cliente.",
    context: [
      "Los operadores gestionan millones de clientes, catálogos complejos y redes en constante expansión. Sus sistemas de soporte de negocio y operación concentran gran parte de la deuda técnica.",
      "La competencia por precio obliga a reducir el costo de servir y a lanzar ofertas con rapidez, sin degradar la calidad de la red.",
    ],
    challenges: [
      {
        title: "OSS/BSS heredados",
        description: "Lanzar una oferta nueva requiere cambios en muchos sistemas.",
      },
      {
        title: "Costo de servir",
        description: "Alto volumen de contactos por consultas repetitivas.",
      },
      {
        title: "Fuga de clientes",
        description: "Señales de abandono dispersas en múltiples fuentes.",
      },
      {
        title: "Operación de red",
        description: "Incidencias detectadas tarde y diagnósticos manuales.",
      },
    ],
    opportunities: [
      {
        title: "Catálogo desacoplado",
        description: "Ofertas configurables sin cambios en todos los sistemas.",
      },
      {
        title: "Autoservicio inteligente",
        description: "Diagnóstico y resolución en canales digitales.",
      },
      {
        title: "Predicción de abandono",
        description: "Acciones de retención basadas en modelos.",
      },
    ],
    solutions: [
      "modernizacion-sistemas-empresariales",
      "experiencias-digitales-clientes",
      "plataformas-comercio-digital",
      "migracion-optimizacion-cloud",
    ],
    services: [
      "integracion-de-sistemas",
      "desarrollo-de-software",
      "inteligencia-artificial-automatizacion",
    ],
    technologies: ["TM Forum Open APIs", "Kafka", "Kubernetes", "Flutter", "MLflow"],
    image: "telecom-tower",
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustriesBySlugs(slugs: IndustrySlug[]) {
  return slugs.map((slug) => getIndustry(slug)).filter((i): i is Industry => Boolean(i));
}
