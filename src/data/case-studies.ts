import type { CaseStudy } from "@/types/content";

/**
 * Casos de éxito ficticios. Clientes, cifras y resultados son simulados
 * con fines demostrativos y no corresponden a empresas reales.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "banca-onboarding-digital-altamar",
    title: "Onboarding digital en 9 minutos para una banca de consumo",
    client: "Banco Altamar",
    clientDescription: "Entidad ficticia de banca de consumo con 1,2 millones de clientes.",
    industry: "servicios-financieros",
    services: [
      "inteligencia-artificial-automatizacion",
      "desarrollo-de-software",
      "ciberseguridad",
    ],
    solution: "automatizacion-procesos-operativos",
    year: 2025,
    duration: "7 meses",
    summary:
      "Rediseño del alta de clientes con validación automática de documentos, verificación de identidad y revisión humana solo en excepciones.",
    context:
      "Banco Altamar captaba la mayoría de sus clientes nuevos en sucursal. El alta digital existía, pero exigía cargar documentos que un equipo revisaba manualmente al día siguiente.",
    challenge: [
      "El 61 % de las solicitudes digitales se abandonaba antes de completar el proceso.",
      "La revisión manual tardaba en promedio 26 horas y generaba un 14 % de rechazos por errores de captura.",
      "Cualquier automatización debía cumplir requisitos de prevención de fraude y trazabilidad para auditoría.",
    ],
    solutionDetail: [
      "Diseñamos un flujo orquestado que extrae datos de documentos, verifica identidad con prueba de vida y consulta listas de control en paralelo.",
      "Cada solicitud recibe una puntuación de confianza. Las de alta confianza se aprueban automáticamente; el resto llega a una bandeja con la evidencia resaltada para una decisión en minutos.",
      "Toda decisión queda registrada con los datos, modelo y versión de reglas utilizados, lo que simplificó las auditorías internas.",
    ],
    architecture: [
      {
        id: "app",
        label: "App y web",
        description:
          "Formulario progresivo con guardado automático y captura guiada de documentos.",
        nodes: ["Captura guiada", "Prueba de vida", "Guardado de avance"],
      },
      {
        id: "orchestration",
        label: "Orquestación",
        description: "Flujo versionado que coordina verificaciones en paralelo.",
        nodes: ["Motor de flujo", "Reglas de riesgo", "SLA"],
      },
      {
        id: "verification",
        label: "Verificación",
        description: "Extracción de datos, identidad y listas de control.",
        nodes: ["OCR", "Identidad", "Listas de control"],
      },
      {
        id: "core",
        label: "Núcleo bancario",
        description: "Alta de cliente y producto mediante APIs existentes.",
        nodes: ["API de clientes", "Cuentas", "Auditoría"],
      },
    ],
    stack: ["React Native", "Node.js", "Temporal", "Python", "PostgreSQL", "Kafka", "AWS"],
    methodology: [
      {
        title: "Diagnóstico del embudo",
        description: "Analítica de abandono paso a paso y entrevistas con solicitantes.",
      },
      {
        title: "Piloto controlado",
        description: "Flujo nuevo para el 10 % del tráfico durante seis semanas.",
      },
      {
        title: "Escalado",
        description: "Extensión gradual al 100 % con monitoreo de fraude diario.",
      },
    ],
    highlights: [
      { value: "9 min", label: "tiempo medio de alta" },
      { value: "−58 %", label: "abandono del proceso" },
      { value: "72 %", label: "aprobaciones automáticas" },
    ],
    metrics: [
      { label: "Tiempo de alta (h)", before: 26, after: 0.15, unit: "h", lowerIsBetter: true },
      { label: "Abandono (%)", before: 61, after: 26, unit: "%", lowerIsBetter: true },
      { label: "Rechazos por error (%)", before: 14, after: 3, unit: "%", lowerIsBetter: true },
      { label: "Altas digitales / mes (miles)", before: 4.2, after: 11.8, unit: "k" },
    ],
    trend: {
      label: "Altas digitales completadas por mes",
      unit: "miles",
      points: [
        { period: "Ene", baseline: 4.1, result: 4.2 },
        { period: "Feb", baseline: 4.3, result: 5.1 },
        { period: "Mar", baseline: 4.2, result: 6.4 },
        { period: "Abr", baseline: 4.4, result: 8.2 },
        { period: "May", baseline: 4.3, result: 9.9 },
        { period: "Jun", baseline: 4.5, result: 11.8 },
      ],
    },
    image: "finance-towers",
    gallery: ["team-review", "code-desk"],
  },
  {
    slug: "retail-inventario-unificado-mercalia",
    title: "Inventario unificado en 140 tiendas y canal digital",
    client: "Mercalia",
    clientDescription: "Cadena ficticia de tiendas de hogar y decoración con operación nacional.",
    industry: "retail-comercio-electronico",
    services: ["integracion-de-sistemas", "desarrollo-de-software", "cloud-devops"],
    solution: "plataformas-comercio-digital",
    year: 2024,
    duration: "10 meses",
    summary:
      "Servicio de inventario en tiempo real y nuevo frente digital desacoplado para habilitar compra en línea con recogida en tienda.",
    context:
      "Mercalia vendía en línea con un inventario que se actualizaba una vez por noche. Las ventas de productos sin stock obligaban a cancelar pedidos y deterioraban la reputación de la marca.",
    challenge: [
      "El 9 % de los pedidos en línea se cancelaba por falta de stock real.",
      "La plataforma de comercio monolítica tardaba semanas en incorporar cambios del área comercial.",
      "Las temporadas de alta demanda provocaban caídas del sitio.",
    ],
    solutionDetail: [
      "Construimos un servicio de inventario alimentado por eventos de venta, recepción y traspaso de cada tienda, con disponibilidad consultable en milisegundos.",
      "El nuevo frente digital se desarrolló desacoplado del motor de comercio, con renderizado estático de catálogo y APIs para precio y disponibilidad.",
      "La recogida en tienda reserva unidades en el momento de la compra y notifica al personal en el punto de venta.",
    ],
    architecture: [
      {
        id: "front",
        label: "Frente digital",
        description: "Catálogo prerenderizado y experiencia de compra rápida.",
        nodes: ["Next.js", "CDN", "Búsqueda"],
      },
      {
        id: "commerce",
        label: "Servicios de comercio",
        description: "Carrito, precios y pedidos expuestos por APIs.",
        nodes: ["Carrito", "Precios", "Pedidos"],
      },
      {
        id: "inventory",
        label: "Inventario",
        description: "Disponibilidad calculada a partir de eventos de tienda.",
        nodes: ["Eventos POS", "Reservas", "Disponibilidad"],
      },
      {
        id: "erp",
        label: "ERP y tiendas",
        description: "Sistemas de registro integrados por eventos.",
        nodes: ["ERP", "Puntos de venta", "Almacén central"],
      },
    ],
    stack: ["Next.js", "TypeScript", "Go", "Kafka", "Redis", "PostgreSQL", "Google Cloud"],
    methodology: [
      {
        title: "Mapa omnicanal",
        description: "Seguimiento de un pedido desde la compra hasta la entrega.",
      },
      {
        title: "Servicio de inventario",
        description: "Construcción y validación tienda por tienda.",
      },
      {
        title: "Lanzamiento por regiones",
        description: "Recogida en tienda habilitada en tres oleadas.",
      },
    ],
    highlights: [
      { value: "−82 %", label: "cancelaciones por stock" },
      { value: "1,4 s", label: "carga de página de producto" },
      { value: "31 %", label: "pedidos con recogida en tienda" },
    ],
    metrics: [
      {
        label: "Cancelaciones por stock (%)",
        before: 9,
        after: 1.6,
        unit: "%",
        lowerIsBetter: true,
      },
      { label: "Carga de producto (s)", before: 4.8, after: 1.4, unit: "s", lowerIsBetter: true },
      { label: "Conversión (%)", before: 1.7, after: 2.6, unit: "%" },
      { label: "Despliegues / mes", before: 2, after: 34, unit: "" },
    ],
    trend: {
      label: "Conversión del canal digital",
      unit: "%",
      points: [
        { period: "T1", baseline: 1.7, result: 1.8 },
        { period: "T2", baseline: 1.6, result: 2.1 },
        { period: "T3", baseline: 1.8, result: 2.3 },
        { period: "T4", baseline: 1.7, result: 2.6 },
      ],
    },
    image: "retail-store",
    gallery: ["retail-hall", "code-laptop"],
  },
  {
    slug: "salud-autorizaciones-red-vitalis",
    title: "Autorizaciones médicas resueltas el mismo día",
    client: "Red Vitalis",
    clientDescription: "Red ficticia de clínicas y aseguradora de salud privada.",
    industry: "salud",
    services: ["inteligencia-artificial-automatizacion", "integracion-de-sistemas"],
    solution: "automatizacion-procesos-operativos",
    year: 2025,
    duration: "6 meses",
    summary:
      "Automatización de la revisión de solicitudes de autorización con extracción de documentos clínicos y reglas de cobertura.",
    context:
      "Las solicitudes de autorización de procedimientos llegaban por correo y portal, y un equipo de auditores médicos revisaba cada caso manualmente contra las condiciones de cobertura.",
    challenge: [
      "El tiempo medio de respuesta era de 3,4 días hábiles.",
      "Los auditores dedicaban el 60 % de su tiempo a casos de cobertura evidente.",
      "La información clínica es sensible y su tratamiento debía cumplir estrictos controles de acceso.",
    ],
    solutionDetail: [
      "Implementamos un flujo que clasifica cada solicitud, extrae diagnóstico y procedimiento de los documentos y verifica reglas de cobertura.",
      "Los casos que cumplen todas las reglas se aprueban automáticamente; los demás se presentan al auditor con un resumen y la evidencia relevante.",
      "El acceso a la información está segmentado por rol y cada consulta queda registrada.",
    ],
    architecture: [
      {
        id: "intake",
        label: "Recepción",
        description: "Solicitudes desde portal, correo e integraciones con clínicas.",
        nodes: ["Portal", "Correo", "HL7 FHIR"],
      },
      {
        id: "extraction",
        label: "Extracción",
        description: "Lectura de documentos clínicos y normalización de códigos.",
        nodes: ["OCR", "Codificación", "Validación"],
      },
      {
        id: "rules",
        label: "Reglas de cobertura",
        description: "Motor de reglas versionado por plan y procedimiento.",
        nodes: ["Planes", "Carencias", "Topes"],
      },
      {
        id: "audit",
        label: "Auditoría médica",
        description: "Bandeja priorizada con resumen y evidencia.",
        nodes: ["Bandeja", "Resumen", "Trazabilidad"],
      },
    ],
    stack: ["Python", "Azure", "HL7 FHIR", "Azure AI Document Intelligence", "React", ".NET"],
    methodology: [
      {
        title: "Análisis de casos",
        description: "Clasificación de 3.000 solicitudes históricas por complejidad.",
      },
      {
        title: "Reglas y evaluación",
        description: "Reglas de cobertura validadas con auditores médicos.",
      },
      {
        title: "Despliegue gradual",
        description: "Automatización por familia de procedimientos.",
      },
    ],
    highlights: [
      { value: "Mismo día", label: "respuesta para el 78 % de casos" },
      { value: "54 %", label: "aprobaciones automáticas" },
      { value: "+2,1×", label: "capacidad de auditoría" },
    ],
    metrics: [
      {
        label: "Tiempo de respuesta (días)",
        before: 3.4,
        after: 0.6,
        unit: "d",
        lowerIsBetter: true,
      },
      { label: "Casos por auditor / día", before: 38, after: 80, unit: "" },
      { label: "Reprocesos (%)", before: 11, after: 4, unit: "%", lowerIsBetter: true },
    ],
    trend: {
      label: "Solicitudes resueltas el mismo día",
      unit: "%",
      points: [
        { period: "Mes 1", baseline: 12, result: 18 },
        { period: "Mes 2", baseline: 11, result: 35 },
        { period: "Mes 3", baseline: 13, result: 52 },
        { period: "Mes 4", baseline: 12, result: 66 },
        { period: "Mes 5", baseline: 12, result: 78 },
      ],
    },
    image: "health-tablet",
    gallery: ["health-ward", "team-table"],
  },
  {
    slug: "logistica-torre-control-transnorte",
    title: "Torre de control logística con visibilidad en tiempo real",
    client: "Transnorte Logística",
    clientDescription:
      "Operador logístico ficticio con flota propia y red de transportistas aliados.",
    industry: "logistica-transporte",
    services: ["integracion-de-sistemas", "ingenieria-analisis-de-datos", "cloud-devops"],
    solution: "integracion-ecosistemas-tecnologicos",
    year: 2024,
    duration: "8 meses",
    summary:
      "Plataforma de eventos que unifica el estado de cada envío entre flota propia, transportistas aliados y almacenes.",
    context:
      "Transnorte coordinaba envíos con 40 transportistas aliados que reportaban estados por correo y archivos. Los clientes llamaban para saber dónde estaba su carga.",
    challenge: [
      "El 35 % de las llamadas al centro de contacto eran consultas de estado.",
      "Incorporar un transportista nuevo tomaba hasta tres meses de integración.",
      "No existía una medición confiable de cumplimiento de entregas a tiempo.",
    ],
    solutionDetail: [
      "Diseñamos un modelo de eventos de envío común y APIs para que transportistas aliados reporten estados, con adaptadores para quienes solo pueden enviar archivos.",
      "Un tablero de torre de control muestra cada envío, alerta de retrasos probables y permite actuar antes de incumplir.",
      "Los clientes consultan el estado en un portal y reciben notificaciones automáticas.",
    ],
    architecture: [
      {
        id: "sources",
        label: "Fuentes",
        description: "Telemetría de flota, transportistas y almacenes.",
        nodes: ["GPS de flota", "APIs de aliados", "WMS"],
      },
      {
        id: "events",
        label: "Bus de eventos",
        description: "Modelo común de eventos de envío.",
        nodes: ["Normalización", "Esquemas", "Reprocesamiento"],
      },
      {
        id: "tower",
        label: "Torre de control",
        description: "Seguimiento, alertas y predicción de retrasos.",
        nodes: ["Tablero", "Alertas", "ETA predictiva"],
      },
      {
        id: "customers",
        label: "Clientes",
        description: "Portal de seguimiento y notificaciones.",
        nodes: ["Portal", "Notificaciones", "API para clientes"],
      },
    ],
    stack: ["Kafka", "Java", "Spring Boot", "PostGIS", "React", "Grafana", "AWS"],
    methodology: [
      {
        title: "Modelo de eventos",
        description: "Definición de estados de envío con operaciones y aliados.",
      },
      {
        title: "Integración de aliados",
        description: "Onboarding por grupos con kit de integración.",
      },
      {
        title: "Torre de control",
        description: "Tablero co-diseñado con supervisores de operación.",
      },
    ],
    highlights: [
      { value: "−47 %", label: "consultas de estado" },
      { value: "3 sem", label: "integración de un aliado" },
      { value: "94 %", label: "entregas a tiempo" },
    ],
    metrics: [
      { label: "Entregas a tiempo (%)", before: 83, after: 94, unit: "%" },
      {
        label: "Consultas de estado / día",
        before: 1250,
        after: 660,
        unit: "",
        lowerIsBetter: true,
      },
      {
        label: "Integración de aliado (semanas)",
        before: 12,
        after: 3,
        unit: "sem",
        lowerIsBetter: true,
      },
    ],
    trend: {
      label: "Entregas a tiempo",
      unit: "%",
      points: [
        { period: "Ene", baseline: 83, result: 84 },
        { period: "Mar", baseline: 82, result: 87 },
        { period: "May", baseline: 84, result: 90 },
        { period: "Jul", baseline: 83, result: 92 },
        { period: "Sep", baseline: 83, result: 94 },
      ],
    },
    image: "logistics-aerial",
    gallery: ["logistics-team", "analytics-map"],
  },
  {
    slug: "manufactura-mantenimiento-predictivo-ferrum",
    title: "Mantenimiento predictivo en líneas de producción",
    client: "Ferrum Industrial",
    clientDescription: "Fabricante ficticio de componentes metálicos con tres plantas.",
    industry: "manufactura",
    services: ["inteligencia-artificial-automatizacion", "ingenieria-analisis-de-datos"],
    solution: "ia-aplicada-al-negocio",
    year: 2025,
    duration: "9 meses",
    summary:
      "Modelos que anticipan fallas de equipos críticos a partir de vibración, temperatura y consumo eléctrico.",
    context:
      "Las paradas no planificadas de prensas y hornos representaban la principal causa de producción perdida. El mantenimiento era preventivo por calendario o reactivo ante fallas.",
    challenge: [
      "Las paradas no planificadas sumaban 410 horas al año en la planta principal.",
      "Los datos de sensores se almacenaban localmente y se descartaban tras 30 días.",
      "Los técnicos desconfiaban de recomendaciones sin explicación.",
    ],
    solutionDetail: [
      "Conectamos los sensores de 46 equipos críticos a una plataforma de series temporales y construimos un historial etiquetado de fallas con el equipo de mantenimiento.",
      "Los modelos generan una alerta con horizonte de siete días y muestran las variables que explican el riesgo.",
      "Las alertas crean órdenes de trabajo sugeridas en el sistema de mantenimiento existente.",
    ],
    architecture: [
      {
        id: "plant",
        label: "Planta",
        description: "Sensores y controladores de equipos críticos.",
        nodes: ["Vibración", "Temperatura", "Consumo eléctrico"],
      },
      {
        id: "edge",
        label: "Borde",
        description: "Captura y envío seguro de datos desde la planta.",
        nodes: ["OPC UA", "MQTT", "Buffer local"],
      },
      {
        id: "platform",
        label: "Plataforma analítica",
        description: "Series temporales, entrenamiento y evaluación de modelos.",
        nodes: ["Series temporales", "Modelos", "Explicabilidad"],
      },
      {
        id: "cmms",
        label: "Mantenimiento",
        description: "Alertas y órdenes de trabajo en el sistema existente.",
        nodes: ["Alertas", "Órdenes sugeridas", "Retroalimentación"],
      },
    ],
    stack: ["Python", "Databricks", "MQTT", "OPC UA", "MLflow", "Power BI", "Azure"],
    methodology: [
      {
        title: "Conexión de datos",
        description: "Sensores de equipos críticos con almacenamiento histórico.",
      },
      {
        title: "Etiquetado de fallas",
        description: "Historial construido con técnicos de mantenimiento.",
      },
      {
        title: "Operación asistida",
        description: "Alertas integradas en el flujo de mantenimiento.",
      },
    ],
    highlights: [
      { value: "−37 %", label: "horas de parada no planificada" },
      { value: "7 días", label: "horizonte de anticipación" },
      { value: "46", label: "equipos críticos monitoreados" },
    ],
    metrics: [
      {
        label: "Parada no planificada (h/año)",
        before: 410,
        after: 258,
        unit: "h",
        lowerIsBetter: true,
      },
      { label: "Disponibilidad (%)", before: 87, after: 92, unit: "%" },
      {
        label: "Mantenimiento correctivo (%)",
        before: 48,
        after: 29,
        unit: "%",
        lowerIsBetter: true,
      },
    ],
    trend: {
      label: "Horas de parada no planificada por trimestre",
      unit: "h",
      points: [
        { period: "T1", baseline: 104, result: 101 },
        { period: "T2", baseline: 99, result: 78 },
        { period: "T3", baseline: 106, result: 64 },
        { period: "T4", baseline: 101, result: 58 },
      ],
    },
    image: "factory-robot",
    gallery: ["factory-line", "analytics-panels"],
  },
  {
    slug: "educacion-portal-estudiante-unisur",
    title: "Portal del estudiante y alertas de permanencia",
    client: "Universidad del Sur Andino",
    clientDescription: "Universidad ficticia con 28.000 estudiantes en cuatro sedes.",
    industry: "educacion",
    services: ["desarrollo-de-software", "ingenieria-analisis-de-datos"],
    solution: "experiencias-digitales-clientes",
    year: 2024,
    duration: "8 meses",
    summary:
      "Experiencia digital unificada para trámites, pagos y seguimiento académico, con alertas tempranas de riesgo de deserción para tutores.",
    context:
      "Los estudiantes debían usar cinco plataformas distintas para inscribirse, pagar, consultar notas y solicitar certificados. La deserción de primer año superaba el 20 %.",
    challenge: [
      "Los periodos de inscripción generaban filas presenciales y caídas del sistema.",
      "Los tutores identificaban estudiantes en riesgo solo después de los exámenes parciales.",
      "Los datos académicos y financieros estaban en sistemas separados.",
    ],
    solutionDetail: [
      "Diseñamos con estudiantes un portal único con los trámites más frecuentes, accesible desde el móvil y con estado visible de cada solicitud.",
      "Integramos datos de asistencia, calificaciones y pagos en un modelo que señala estudiantes con riesgo de abandono para que tutores intervengan.",
      "El portal se despliega en infraestructura elástica que escala durante las inscripciones.",
    ],
    architecture: [
      {
        id: "portal",
        label: "Portal",
        description: "Experiencia web y móvil accesible.",
        nodes: ["Trámites", "Pagos", "Calendario"],
      },
      {
        id: "apis",
        label: "APIs académicas",
        description: "Servicios que exponen los sistemas existentes.",
        nodes: ["Inscripciones", "Notas", "Certificados"],
      },
      {
        id: "analytics",
        label: "Analítica",
        description: "Modelo de riesgo de permanencia.",
        nodes: ["Asistencia", "Rendimiento", "Pagos"],
      },
      {
        id: "tutors",
        label: "Tutorías",
        description: "Tablero de seguimiento e intervenciones.",
        nodes: ["Alertas", "Plan de apoyo", "Seguimiento"],
      },
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "dbt", "Power BI", "AWS"],
    methodology: [
      {
        title: "Investigación con estudiantes",
        description: "Entrevistas y análisis de las 20 solicitudes más frecuentes.",
      },
      {
        title: "Portal incremental",
        description: "Trámites liberados por orden de volumen.",
      },
      {
        title: "Programa de tutorías",
        description: "Alertas usadas por tutores durante dos semestres.",
      },
    ],
    highlights: [
      { value: "86 %", label: "trámites resueltos en línea" },
      { value: "−4,2 pp", label: "deserción de primer año" },
      { value: "0", label: "caídas en inscripciones" },
    ],
    metrics: [
      { label: "Trámites en línea (%)", before: 31, after: 86, unit: "%" },
      {
        label: "Deserción primer año (%)",
        before: 21.4,
        after: 17.2,
        unit: "%",
        lowerIsBetter: true,
      },
      { label: "Satisfacción del estudiante (1–5)", before: 2.9, after: 4.2, unit: "" },
    ],
    trend: {
      label: "Trámites resueltos en línea",
      unit: "%",
      points: [
        { period: "Sem 1", baseline: 31, result: 44 },
        { period: "Sem 2", baseline: 32, result: 63 },
        { period: "Sem 3", baseline: 30, result: 78 },
        { period: "Sem 4", baseline: 31, result: 86 },
      ],
    },
    image: "education-laptop",
    gallery: ["education-class", "analytics-laptop"],
  },
  {
    slug: "energia-pronostico-generacion-solea",
    title: "Pronóstico de generación renovable para despacho",
    client: "Solea Energía",
    clientDescription: "Generadora ficticia con parques solares y eólicos.",
    industry: "energia",
    services: [
      "ingenieria-analisis-de-datos",
      "inteligencia-artificial-automatizacion",
      "cloud-devops",
    ],
    solution: "ia-aplicada-al-negocio",
    year: 2025,
    duration: "6 meses",
    summary:
      "Modelos de pronóstico de generación horaria con datos meteorológicos para reducir desvíos y penalizaciones en el mercado.",
    context:
      "Solea comprometía generación al operador del sistema con un día de anticipación usando promedios históricos. Los desvíos entre lo comprometido y lo generado implicaban penalizaciones.",
    challenge: [
      "El error medio del pronóstico diario era del 18 %.",
      "Los datos de inversores y estaciones meteorológicas no estaban centralizados.",
      "El equipo de despacho necesitaba entender la incertidumbre de cada pronóstico.",
    ],
    solutionDetail: [
      "Centralizamos datos de 12 parques y pronósticos meteorológicos en una plataforma de series temporales.",
      "Entrenamos modelos por parque que entregan pronósticos horarios con intervalos de confianza.",
      "El equipo de despacho consulta los pronósticos en un tablero y recibe alertas cuando la incertidumbre supera umbrales acordados.",
    ],
    architecture: [
      {
        id: "assets",
        label: "Activos",
        description: "Inversores, aerogeneradores y estaciones meteorológicas.",
        nodes: ["SCADA", "Estaciones", "Medidores"],
      },
      {
        id: "weather",
        label: "Meteorología",
        description: "Pronósticos numéricos externos.",
        nodes: ["Irradiancia", "Viento", "Nubosidad"],
      },
      {
        id: "models",
        label: "Modelos",
        description: "Pronóstico horario por parque con incertidumbre.",
        nodes: ["Entrenamiento", "Intervalos", "Reentrenamiento"],
      },
      {
        id: "dispatch",
        label: "Despacho",
        description: "Tablero y alertas para el equipo de operación.",
        nodes: ["Tablero", "Alertas", "Compromisos"],
      },
    ],
    stack: ["Python", "LightGBM", "Azure", "Time series DB", "Airflow", "Grafana"],
    methodology: [
      {
        title: "Línea base",
        description: "Medición del error del método vigente durante un año.",
      },
      {
        title: "Modelos por parque",
        description: "Entrenamiento y validación con datos históricos.",
      },
      {
        title: "Operación en sombra",
        description: "Dos meses en paralelo antes de usar los pronósticos.",
      },
    ],
    highlights: [
      { value: "−9 pp", label: "error de pronóstico" },
      { value: "12", label: "parques integrados" },
      { value: "−41 %", label: "penalizaciones por desvío" },
    ],
    metrics: [
      { label: "Error de pronóstico (%)", before: 18, after: 9, unit: "%", lowerIsBetter: true },
      { label: "Penalizaciones (índice)", before: 100, after: 59, unit: "", lowerIsBetter: true },
      {
        label: "Tiempo de preparación (min)",
        before: 120,
        after: 15,
        unit: "min",
        lowerIsBetter: true,
      },
    ],
    trend: {
      label: "Error medio de pronóstico",
      unit: "%",
      points: [
        { period: "Mes 1", baseline: 18, result: 16 },
        { period: "Mes 2", baseline: 17, result: 13 },
        { period: "Mes 3", baseline: 19, result: 11 },
        { period: "Mes 4", baseline: 18, result: 10 },
        { period: "Mes 5", baseline: 18, result: 9 },
      ],
    },
    image: "energy-wind",
    gallery: ["energy-plant", "analytics-dashboard"],
  },
  {
    slug: "telecom-catalogo-ofertas-conecta",
    title: "Lanzamiento de ofertas en días, no en meses",
    client: "Conecta Móvil",
    clientDescription: "Operador ficticio de telefonía móvil y fibra con 3,5 millones de líneas.",
    industry: "telecomunicaciones",
    services: ["integracion-de-sistemas", "desarrollo-de-software"],
    solution: "modernizacion-sistemas-empresariales",
    year: 2024,
    duration: "12 meses",
    summary:
      "Catálogo de productos desacoplado de los sistemas de facturación y aprovisionamiento para configurar ofertas sin desarrollos.",
    context:
      "Cada nueva oferta comercial requería cambios en el sistema de facturación, el CRM, el aprovisionamiento y los canales digitales. El área comercial esperaba hasta cuatro meses por un lanzamiento.",
    challenge: [
      "El catálogo estaba duplicado en seis sistemas con reglas distintas.",
      "Los errores de configuración generaban reclamos de facturación.",
      "La competencia lanzaba ofertas en semanas.",
    ],
    solutionDetail: [
      "Diseñamos un catálogo central de productos alineado con estándares abiertos del sector, que publica ofertas a todos los sistemas mediante eventos.",
      "El área comercial configura ofertas en una herramienta con validaciones y simulación de factura antes de publicar.",
      "Las integraciones con sistemas existentes se construyeron como adaptadores, sin reemplazar la facturación.",
    ],
    architecture: [
      {
        id: "business",
        label: "Configuración comercial",
        description: "Herramienta para diseñar y simular ofertas.",
        nodes: ["Diseñador de ofertas", "Simulación", "Aprobaciones"],
      },
      {
        id: "catalog",
        label: "Catálogo central",
        description: "Fuente única de productos, precios y reglas.",
        nodes: ["Productos", "Reglas", "Versiones"],
      },
      {
        id: "events",
        label: "Distribución",
        description: "Publicación de ofertas por eventos.",
        nodes: ["Eventos", "Adaptadores", "Confirmaciones"],
      },
      {
        id: "systems",
        label: "Sistemas existentes",
        description: "Facturación, CRM, aprovisionamiento y canales.",
        nodes: ["Facturación", "CRM", "Canales"],
      },
    ],
    stack: ["TM Forum Open APIs", "Java", "Kafka", "Angular", "Oracle", "Kubernetes"],
    methodology: [
      {
        title: "Modelo de catálogo",
        description: "Unificación de productos y reglas con el área comercial.",
      },
      {
        title: "Adaptadores",
        description: "Integración incremental sistema por sistema.",
      },
      {
        title: "Autonomía comercial",
        description: "Formación y primeros lanzamientos asistidos.",
      },
    ],
    highlights: [
      { value: "6 días", label: "tiempo de lanzamiento" },
      { value: "−63 %", label: "reclamos de facturación" },
      { value: "1", label: "catálogo en lugar de seis" },
    ],
    metrics: [
      {
        label: "Lanzamiento de oferta (días)",
        before: 110,
        after: 6,
        unit: "d",
        lowerIsBetter: true,
      },
      {
        label: "Reclamos de facturación (índice)",
        before: 100,
        after: 37,
        unit: "",
        lowerIsBetter: true,
      },
      { label: "Ofertas lanzadas / año", before: 7, after: 31, unit: "" },
    ],
    trend: {
      label: "Ofertas lanzadas por trimestre",
      unit: "ofertas",
      points: [
        { period: "T1", baseline: 2, result: 2 },
        { period: "T2", baseline: 2, result: 5 },
        { period: "T3", baseline: 1, result: 9 },
        { period: "T4", baseline: 2, result: 15 },
      ],
    },
    image: "telecom-antenna",
    gallery: ["network-fiber", "team-meeting"],
  },
  {
    slug: "seguros-migracion-cloud-aseguradora-boreal",
    title: "Migración de 120 aplicaciones a la nube sin interrupciones",
    client: "Aseguradora Boreal",
    clientDescription: "Compañía ficticia de seguros generales con presencia regional.",
    industry: "servicios-financieros",
    services: ["cloud-devops", "ciberseguridad", "consultoria-estrategia-tecnologica"],
    solution: "migracion-optimizacion-cloud",
    year: 2023,
    duration: "14 meses",
    summary:
      "Salida del centro de datos propio mediante migraciones por oleadas, landing zone segura y gobierno de costos.",
    context:
      "El contrato del centro de datos vencía en 18 meses y el hardware estaba al final de su vida útil. La aseguradora necesitaba migrar sin afectar la emisión de pólizas ni la atención de siniestros.",
    challenge: [
      "120 aplicaciones con documentación incompleta y dependencias desconocidas.",
      "Requisitos regulatorios de resguardo y continuidad del negocio.",
      "Presupuesto de operación cloud que no debía superar el costo del centro de datos.",
    ],
    solutionDetail: [
      "Realizamos un descubrimiento automatizado de dependencias y clasificamos cada aplicación según la estrategia de migración adecuada.",
      "Construimos una landing zone con controles de seguridad, redes segmentadas e identidad centralizada antes de la primera migración.",
      "Migramos en nueve oleadas con ventanas acordadas, pruebas de regresión y planes de reversión. Tras cada oleada se ajustó la capacidad contratada.",
    ],
    architecture: [
      {
        id: "discovery",
        label: "Descubrimiento",
        description: "Inventario automático y mapa de dependencias.",
        nodes: ["Agentes", "Dependencias", "Estrategia 6R"],
      },
      {
        id: "landing",
        label: "Landing zone",
        description: "Cuentas, redes, identidad y políticas como código.",
        nodes: ["Terraform", "Identidad", "Políticas"],
      },
      {
        id: "migration",
        label: "Migración",
        description: "Oleadas con pruebas y reversión.",
        nodes: ["Replicación", "Pruebas", "Corte"],
      },
      {
        id: "finops",
        label: "FinOps",
        description: "Etiquetado, presupuestos y optimización.",
        nodes: ["Etiquetas", "Presupuestos", "Rightsizing"],
      },
    ],
    stack: ["AWS", "Terraform", "AWS MGN", "Kubernetes", "Datadog", "Vault"],
    methodology: [
      {
        title: "Descubrimiento",
        description: "Seis semanas de inventario y caso de negocio.",
      },
      {
        title: "Fundación",
        description: "Landing zone auditada por el área de riesgos.",
      },
      {
        title: "Oleadas",
        description: "Nueve oleadas de riesgo creciente.",
      },
    ],
    highlights: [
      { value: "120", label: "aplicaciones migradas" },
      { value: "0", label: "incidentes críticos en cortes" },
      { value: "−22 %", label: "costo de infraestructura" },
    ],
    metrics: [
      {
        label: "Costo de infraestructura (índice)",
        before: 100,
        after: 78,
        unit: "",
        lowerIsBetter: true,
      },
      {
        label: "Tiempo de aprovisionamiento (días)",
        before: 21,
        after: 0.5,
        unit: "d",
        lowerIsBetter: true,
      },
      { label: "Tiempo de recuperación (h)", before: 12, after: 2, unit: "h", lowerIsBetter: true },
    ],
    trend: {
      label: "Aplicaciones migradas (acumulado)",
      unit: "apps",
      points: [
        { period: "M2", baseline: 0, result: 6 },
        { period: "M4", baseline: 0, result: 22 },
        { period: "M6", baseline: 0, result: 48 },
        { period: "M8", baseline: 0, result: 75 },
        { period: "M10", baseline: 0, result: 101 },
        { period: "M12", baseline: 0, result: 120 },
      ],
    },
    image: "dc-aisle",
    gallery: ["dc-rack", "security-circuit"],
  },
  {
    slug: "retail-inteligencia-comercial-almagro",
    title: "Indicadores comerciales confiables al día siguiente",
    client: "Grupo Almagro",
    clientDescription: "Grupo ficticio de supermercados y tiendas de conveniencia.",
    industry: "retail-comercio-electronico",
    services: ["ingenieria-analisis-de-datos", "consultoria-estrategia-tecnologica"],
    solution: "inteligencia-empresarial",
    year: 2024,
    duration: "7 meses",
    summary:
      "Plataforma de datos con capa semántica única para ventas, margen e inventario, y tableros para dirección y gerentes de tienda.",
    context:
      "Cada lunes, el comité comercial dedicaba la primera hora a conciliar cifras de ventas que finanzas, comercial y operaciones calculaban de manera distinta.",
    challenge: [
      "Siete definiciones diferentes de «venta neta» en uso.",
      "Reportes semanales elaborados manualmente durante dos días.",
      "Gerentes de tienda sin acceso a información de su propio desempeño.",
    ],
    solutionDetail: [
      "Acordamos con finanzas y comercial un diccionario de 42 indicadores certificados y construimos sobre él una capa semántica única.",
      "Los datos de ventas, inventario y compras se cargan automáticamente cada noche con pruebas de calidad que bloquean publicaciones inconsistentes.",
      "Diseñamos tableros para tres audiencias —dirección, categorías y tienda— a partir de las decisiones que cada una toma.",
    ],
    architecture: [
      {
        id: "sources",
        label: "Fuentes",
        description: "Puntos de venta, ERP y compras.",
        nodes: ["POS", "ERP", "Proveedores"],
      },
      {
        id: "platform",
        label: "Plataforma",
        description: "Ingesta nocturna y transformaciones probadas.",
        nodes: ["Ingesta", "dbt", "Pruebas de calidad"],
      },
      {
        id: "semantic",
        label: "Capa semántica",
        description: "42 indicadores certificados.",
        nodes: ["Diccionario", "Métricas", "Linaje"],
      },
      {
        id: "dashboards",
        label: "Tableros",
        description: "Vistas para dirección, categorías y tiendas.",
        nodes: ["Dirección", "Categorías", "Tiendas"],
      },
    ],
    stack: ["Snowflake", "dbt", "Fivetran", "Looker", "Great Expectations"],
    methodology: [
      {
        title: "Diccionario de indicadores",
        description: "Talleres con finanzas, comercial y operaciones.",
      },
      {
        title: "Plataforma y modelos",
        description: "Construcción incremental por dominio.",
      },
      {
        title: "Adopción",
        description: "Formación y seguimiento del uso por audiencia.",
      },
    ],
    highlights: [
      { value: "D+1", label: "disponibilidad de indicadores" },
      { value: "42", label: "indicadores certificados" },
      { value: "−90 %", label: "tiempo de elaboración de reportes" },
    ],
    metrics: [
      {
        label: "Elaboración de reportes (h/semana)",
        before: 16,
        after: 1.5,
        unit: "h",
        lowerIsBetter: true,
      },
      {
        label: "Disponibilidad tras cierre (días)",
        before: 5,
        after: 1,
        unit: "d",
        lowerIsBetter: true,
      },
      { label: "Usuarios activos / semana", before: 18, after: 240, unit: "" },
    ],
    trend: {
      label: "Usuarios activos semanales de tableros",
      unit: "usuarios",
      points: [
        { period: "Mes 1", baseline: 18, result: 35 },
        { period: "Mes 2", baseline: 19, result: 96 },
        { period: "Mes 3", baseline: 18, result: 158 },
        { period: "Mes 4", baseline: 20, result: 211 },
        { period: "Mes 5", baseline: 18, result: 240 },
      ],
    },
    image: "analytics-laptop",
    gallery: ["retail-store", "meeting-notes"],
  },
  {
    slug: "manufactura-integracion-erp-nordtec",
    title: "Integración de planta, ERP y distribuidores",
    client: "Nordtec Componentes",
    clientDescription: "Fabricante ficticio de componentes eléctricos con red de distribuidores.",
    industry: "manufactura",
    services: ["integracion-de-sistemas", "cloud-devops"],
    solution: "integracion-ecosistemas-tecnologicos",
    year: 2023,
    duration: "9 meses",
    summary:
      "Plataforma de APIs y eventos que conecta producción, ERP y 60 distribuidores con pedidos y disponibilidad en tiempo real.",
    context:
      "Los distribuidores enviaban pedidos por correo y consultaban disponibilidad por teléfono. Un equipo de diez personas transcribía pedidos al ERP.",
    challenge: [
      "El 8 % de los pedidos tenía errores de transcripción.",
      "La confirmación de un pedido tardaba hasta 48 horas.",
      "La producción planificaba sin visibilidad de la demanda de distribuidores.",
    ],
    solutionDetail: [
      "Publicamos APIs de catálogo, disponibilidad y pedidos para distribuidores, y un portal para quienes no tienen integración propia.",
      "Los eventos de producción y pedidos se distribuyen entre ERP, planificación y logística con trazabilidad completa.",
      "El equipo que transcribía pedidos pasó a gestionar excepciones y relación con distribuidores.",
    ],
    architecture: [
      {
        id: "partners",
        label: "Distribuidores",
        description: "Integración por API o portal web.",
        nodes: ["APIs B2B", "Portal", "EDI"],
      },
      {
        id: "gateway",
        label: "Gestión de APIs",
        description: "Seguridad, cuotas y documentación.",
        nodes: ["Gateway", "Portal de desarrolladores", "Políticas"],
      },
      {
        id: "events",
        label: "Eventos",
        description: "Pedidos, producción y despachos.",
        nodes: ["Pedidos", "Producción", "Despachos"],
      },
      {
        id: "erp",
        label: "ERP y planta",
        description: "Sistemas de registro y planificación.",
        nodes: ["ERP", "MES", "Planificación"],
      },
    ],
    stack: ["Azure Integration Services", "Azure API Management", "Service Bus", ".NET", "SAP"],
    methodology: [
      {
        title: "Mapa de integraciones",
        description: "Flujos actuales con ventas, producción y logística.",
      },
      {
        title: "APIs y portal",
        description: "Piloto con diez distribuidores.",
      },
      {
        title: "Despliegue",
        description: "Incorporación del resto de la red en cuatro meses.",
      },
    ],
    highlights: [
      { value: "−95 %", label: "errores en pedidos" },
      { value: "15 min", label: "confirmación de pedido" },
      { value: "60", label: "distribuidores conectados" },
    ],
    metrics: [
      { label: "Errores en pedidos (%)", before: 8, after: 0.4, unit: "%", lowerIsBetter: true },
      {
        label: "Confirmación de pedido (h)",
        before: 48,
        after: 0.25,
        unit: "h",
        lowerIsBetter: true,
      },
      { label: "Pedidos digitales (%)", before: 0, after: 88, unit: "%" },
    ],
    trend: {
      label: "Pedidos recibidos por canal digital",
      unit: "%",
      points: [
        { period: "M1", baseline: 0, result: 12 },
        { period: "M3", baseline: 0, result: 41 },
        { period: "M5", baseline: 0, result: 67 },
        { period: "M7", baseline: 0, result: 81 },
        { period: "M9", baseline: 0, result: 88 },
      ],
    },
    image: "factory-automation",
    gallery: ["network-fiber-panel", "logistics-racks"],
  },
  {
    slug: "telecom-asistente-soporte-ondanet",
    title: "Asistente de soporte técnico con respuestas fundamentadas",
    client: "Ondanet Fibra",
    clientDescription: "Proveedor ficticio de internet por fibra óptica residencial y empresarial.",
    industry: "telecomunicaciones",
    services: [
      "inteligencia-artificial-automatizacion",
      "desarrollo-de-software",
      "ciberseguridad",
    ],
    solution: "ia-aplicada-al-negocio",
    year: 2025,
    duration: "5 meses",
    summary:
      "Asistente para agentes y clientes que diagnostica incidencias con datos de red y responde con base en la documentación técnica interna.",
    context:
      "El centro de contacto recibía 9.000 consultas diarias, la mayoría sobre lentitud o cortes. Los agentes consultaban cuatro herramientas para diagnosticar un problema.",
    challenge: [
      "El tiempo medio de atención era de 11 minutos.",
      "La documentación técnica tenía más de 1.400 artículos desactualizados en parte.",
      "Las respuestas debían ser verificables y no inventar información.",
    ],
    solutionDetail: [
      "Depuramos y estructuramos la base de conocimiento con el equipo técnico, y construimos un asistente que responde citando los artículos usados.",
      "El asistente consulta el estado de la conexión del cliente y propone un diagnóstico que el agente confirma con un clic.",
      "Un conjunto de 600 preguntas reales permite evaluar cada versión antes de publicarla.",
    ],
    architecture: [
      {
        id: "channels",
        label: "Canales",
        description: "Consola del agente y chat de autoservicio.",
        nodes: ["Consola", "Chat web", "App"],
      },
      {
        id: "assistant",
        label: "Asistente",
        description: "Recuperación de conocimiento y razonamiento con herramientas.",
        nodes: ["RAG", "Herramientas", "Citas"],
      },
      {
        id: "network",
        label: "Datos de red",
        description: "Estado de equipos y conexión del cliente.",
        nodes: ["Estado ONT", "Incidencias", "Historial"],
      },
      {
        id: "quality",
        label: "Calidad",
        description: "Evaluación continua y revisión humana.",
        nodes: ["600 casos de prueba", "Muestreo", "Retroalimentación"],
      },
    ],
    stack: ["Python", "LLM APIs", "Vector DB", "LangGraph", "React", "Kubernetes"],
    methodology: [
      {
        title: "Base de conocimiento",
        description: "Depuración y estructura de la documentación.",
      },
      {
        title: "Evaluación",
        description: "Conjunto de prueba construido con agentes expertos.",
      },
      {
        title: "Despliegue",
        description: "Primero para agentes, después para clientes.",
      },
    ],
    highlights: [
      { value: "−36 %", label: "tiempo medio de atención" },
      { value: "91 %", label: "respuestas correctas en evaluación" },
      { value: "24 %", label: "consultas resueltas en autoservicio" },
    ],
    metrics: [
      {
        label: "Tiempo medio de atención (min)",
        before: 11,
        after: 7,
        unit: "min",
        lowerIsBetter: true,
      },
      { label: "Resolución en primer contacto (%)", before: 58, after: 74, unit: "%" },
      { label: "Autoservicio (%)", before: 6, after: 24, unit: "%" },
    ],
    trend: {
      label: "Resolución en primer contacto",
      unit: "%",
      points: [
        { period: "Sem 2", baseline: 58, result: 60 },
        { period: "Sem 6", baseline: 57, result: 65 },
        { period: "Sem 10", baseline: 58, result: 70 },
        { period: "Sem 14", baseline: 59, result: 72 },
        { period: "Sem 18", baseline: 58, result: 74 },
      ],
    },
    image: "telecom-dusk",
    gallery: ["ai-hand", "team-laptops"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
