import type { Solution, SolutionSlug } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "modernizacion-sistemas-empresariales",
    name: "Modernización de sistemas empresariales",
    pictogram: "layers",
    tagline: "Evolucionar el núcleo sin detener la operación.",
    summary:
      "Sustitución progresiva de sistemas heredados por módulos modernos, conservando la continuidad del negocio en cada paso.",
    context:
      "Los sistemas centrales de muchas empresas tienen décadas de reglas de negocio acumuladas. Funcionan, pero cada cambio es lento, el talento que los conoce escasea y la integración con canales digitales es cada vez más costosa.",
    problem: [
      "Cambios regulatorios o comerciales que tardan meses en implementarse.",
      "Dependencia de pocas personas que conocen el código heredado.",
      "Costos de licenciamiento y hardware crecientes.",
      "Riesgo alto de una sustitución completa en un solo proyecto.",
    ],
    approach: [
      "Aplicamos el patrón de estrangulamiento: una capa de APIs se coloca delante del sistema heredado y, módulo a módulo, las funciones se trasladan a servicios modernos.",
      "Cada módulo migrado se valida en paralelo con el original antes de retirar la versión anterior. El negocio opera sin interrupciones durante todo el proceso.",
    ],
    architecture: [
      {
        id: "channels",
        label: "Canales",
        description: "Aplicaciones web, móviles y de back-office consumen una única capa de APIs.",
        nodes: ["Portal web", "App móvil", "Back-office"],
      },
      {
        id: "facade",
        label: "Capa de APIs",
        description: "Fachada que enruta cada operación al sistema heredado o al módulo nuevo.",
        nodes: ["API Gateway", "Enrutamiento por módulo", "Contratos versionados"],
      },
      {
        id: "modules",
        label: "Módulos modernos",
        description: "Servicios independientes con sus propios datos y despliegue.",
        nodes: ["Clientes", "Productos", "Facturación"],
      },
      {
        id: "legacy",
        label: "Núcleo heredado",
        description: "Sistema original que se reduce gradualmente hasta su retiro.",
        nodes: ["Mainframe / ERP", "Sincronización de datos", "Plan de retiro"],
      },
    ],
    services: ["desarrollo-de-software", "integracion-de-sistemas", "cloud-devops"],
    benefits: [
      {
        title: "Riesgo acotado",
        description: "Cada módulo se migra y valida de forma independiente.",
      },
      {
        title: "Valor temprano",
        description: "Los primeros módulos aportan beneficios en meses, no años.",
      },
      {
        title: "Menor dependencia",
        description: "El conocimiento queda documentado en código y contratos modernos.",
      },
    ],
    implementation: [
      { title: "Inventario", description: "Mapa de funciones, datos e integraciones del núcleo." },
      { title: "Fachada", description: "Capa de APIs frente al sistema heredado." },
      {
        title: "Migración por módulos",
        description: "Traslado progresivo con validación en paralelo.",
      },
      { title: "Retiro", description: "Apagado controlado de los componentes heredados." },
    ],
    industries: ["servicios-financieros", "manufactura", "energia", "telecomunicaciones"],
    image: "dc-corridor",
  },
  {
    slug: "automatizacion-procesos-operativos",
    name: "Automatización de procesos operativos",
    pictogram: "flow",
    tagline: "Menos tareas repetitivas, más capacidad para lo importante.",
    summary:
      "Orquestación de procesos que combinan reglas, IA y validación humana para eliminar trabajo manual de bajo valor.",
    context:
      "Altas de clientes, conciliaciones, gestión de reclamos o validación de documentos siguen consumiendo miles de horas en tareas que se repiten con pocas variaciones.",
    problem: [
      "Tiempos de respuesta largos por colas de trabajo manual.",
      "Errores de captura que generan retrabajo y reclamos.",
      "Imposibilidad de absorber picos de demanda sin contratar.",
      "Falta de trazabilidad sobre el estado de cada caso.",
    ],
    approach: [
      "Modelamos el proceso completo y distinguimos qué pasos son reglas estables, cuáles requieren interpretación y cuáles necesitan criterio humano.",
      "Un orquestador coordina cada caso: ejecuta reglas, invoca modelos para extraer o clasificar información y deriva a una persona solo las excepciones.",
    ],
    architecture: [
      {
        id: "intake",
        label: "Entrada",
        description: "Solicitudes que llegan por formularios, correo, archivos o APIs.",
        nodes: ["Formularios", "Correo", "Documentos"],
      },
      {
        id: "orchestrator",
        label: "Orquestador",
        description: "Motor que conoce el estado de cada caso y decide el siguiente paso.",
        nodes: ["Flujos versionados", "Reglas de negocio", "SLA por caso"],
      },
      {
        id: "intelligence",
        label: "Inteligencia",
        description: "Extracción, clasificación y validación asistidas por modelos.",
        nodes: ["Extracción de datos", "Clasificación", "Puntuación de confianza"],
      },
      {
        id: "humans",
        label: "Bandeja humana",
        description: "Las excepciones llegan con contexto para una decisión rápida.",
        nodes: ["Revisión de excepciones", "Aprobaciones", "Retroalimentación"],
      },
    ],
    services: [
      "inteligencia-artificial-automatizacion",
      "integracion-de-sistemas",
      "transformacion-digital",
    ],
    benefits: [
      {
        title: "Respuesta más rápida",
        description: "Los casos simples se resuelven en minutos.",
      },
      {
        title: "Menos errores",
        description: "Validaciones automáticas antes de registrar información.",
      },
      {
        title: "Capacidad elástica",
        description: "Los picos de demanda no requieren más personal temporal.",
      },
    ],
    implementation: [
      { title: "Mapa de proceso", description: "Pasos, volúmenes, tiempos y excepciones." },
      { title: "Piloto", description: "Automatización de un subproceso con alto volumen." },
      { title: "Integración", description: "Conexión con sistemas de registro y bandejas." },
      { title: "Mejora continua", description: "Medición de tasa de automatización y calidad." },
    ],
    industries: ["servicios-financieros", "salud", "logistica-transporte", "energia"],
    image: "factory-automation",
  },
  {
    slug: "plataformas-comercio-digital",
    name: "Plataformas de comercio digital",
    pictogram: "cart",
    tagline: "Comercio unificado entre canales, con una sola visión del cliente.",
    summary:
      "Arquitecturas de comercio componibles que conectan catálogo, inventario, pedidos y clientes en todos los canales.",
    context:
      "El cliente compra en línea, recoge en tienda y devuelve por mensajería. Cuando cada canal tiene su propio inventario y precio, la experiencia se rompe y el margen se erosiona.",
    problem: [
      "Inventario desincronizado entre tienda física y canal digital.",
      "Plataformas monolíticas que limitan la velocidad de cambio del frente comercial.",
      "Promociones que se configuran por canal y generan inconsistencias.",
      "Picos de tráfico que degradan el sitio en temporadas clave.",
    ],
    approach: [
      "Diseñamos una arquitectura componible: servicios de catálogo, precio, inventario y pedidos expuestos por APIs y consumidos por todos los canales.",
      "El frente digital se construye desacoplado del motor de comercio, lo que permite iterar la experiencia sin afectar las operaciones.",
    ],
    architecture: [
      {
        id: "front",
        label: "Experiencias",
        description: "Sitio, app y puntos de venta con una experiencia coherente.",
        nodes: ["Sitio web", "App", "Punto de venta"],
      },
      {
        id: "commerce",
        label: "Servicios de comercio",
        description: "Capacidades reutilizables expuestas mediante APIs.",
        nodes: ["Catálogo", "Precios y promociones", "Carrito y pedidos"],
      },
      {
        id: "operations",
        label: "Operación",
        description: "Inventario unificado y orquestación de cumplimiento.",
        nodes: ["Inventario en tiempo real", "Gestión de pedidos", "Logística"],
      },
      {
        id: "core",
        label: "Sistemas de registro",
        description: "ERP, CRM y pagos integrados con eventos.",
        nodes: ["ERP", "CRM", "Pasarela de pagos"],
      },
    ],
    services: ["desarrollo-de-software", "integracion-de-sistemas", "cloud-devops"],
    benefits: [
      {
        title: "Inventario confiable",
        description: "Disponibilidad real en todos los canales.",
      },
      {
        title: "Lanzamientos ágiles",
        description: "Cambios en la experiencia sin tocar el núcleo comercial.",
      },
      {
        title: "Escalabilidad",
        description: "Capacidad para absorber picos de temporada.",
      },
    ],
    implementation: [
      { title: "Diagnóstico omnicanal", description: "Flujos de pedido, inventario y precio." },
      {
        title: "Servicios base",
        description: "Catálogo e inventario unificados expuestos por API.",
      },
      { title: "Nuevo frente", description: "Experiencia digital desacoplada y medible." },
      { title: "Expansión", description: "Integración de nuevos canales y mercados." },
    ],
    industries: ["retail-comercio-electronico", "manufactura", "telecomunicaciones"],
    image: "retail-store",
  },
  {
    slug: "inteligencia-empresarial",
    name: "Inteligencia empresarial",
    pictogram: "chart",
    tagline: "Indicadores compartidos para decidir con la misma información.",
    summary:
      "Plataformas analíticas con modelos semánticos únicos, tableros orientados a decisiones y datos de calidad verificada.",
    context:
      "Cuando cada área calcula sus indicadores por su cuenta, las reuniones de dirección se dedican a conciliar cifras. La inteligencia empresarial bien diseñada elimina esa discusión.",
    problem: [
      "Reportes manuales que se entregan días después del cierre.",
      "Indicadores con definiciones contradictorias.",
      "Tableros con decenas de gráficos y ninguna decisión clara.",
      "Datos de calidad desconocida.",
    ],
    approach: [
      "Partimos de las decisiones que dirección necesita tomar y de las preguntas que las sustentan. A partir de ellas definimos indicadores, fuentes y responsables.",
      "Construimos una plataforma de datos con una capa semántica única, pruebas de calidad y tableros diseñados para la acción.",
    ],
    architecture: [
      {
        id: "sources",
        label: "Fuentes",
        description: "Sistemas operativos, archivos y servicios externos.",
        nodes: ["ERP", "CRM", "Archivos y APIs"],
      },
      {
        id: "platform",
        label: "Plataforma de datos",
        description: "Ingesta, almacenamiento y transformación probada.",
        nodes: ["Ingesta automatizada", "Lakehouse", "Transformaciones dbt"],
      },
      {
        id: "semantic",
        label: "Capa semántica",
        description: "Definiciones únicas de indicadores y dimensiones.",
        nodes: ["Métricas certificadas", "Diccionario", "Linaje"],
      },
      {
        id: "consumption",
        label: "Consumo",
        description: "Tableros, alertas y análisis exploratorio.",
        nodes: ["Tableros ejecutivos", "Alertas", "Análisis ad hoc"],
      },
    ],
    services: ["ingenieria-analisis-de-datos", "consultoria-estrategia-tecnologica"],
    benefits: [
      {
        title: "Cierres más rápidos",
        description: "Reportes disponibles al día siguiente del cierre.",
      },
      {
        title: "Confianza en los datos",
        description: "Calidad medida y visible para los usuarios.",
      },
      {
        title: "Reuniones productivas",
        description: "Se discuten decisiones, no cifras.",
      },
    ],
    implementation: [
      { title: "Decisiones clave", description: "Preguntas e indicadores prioritarios." },
      { title: "Fundación", description: "Plataforma, ingesta y primeros modelos." },
      { title: "Tableros", description: "Diseño orientado a decisiones con usuarios reales." },
      { title: "Gobierno", description: "Responsables, catálogo y ciclo de mejora." },
    ],
    industries: ["retail-comercio-electronico", "servicios-financieros", "educacion", "salud"],
    image: "analytics-panels",
  },
  {
    slug: "migracion-optimizacion-cloud",
    name: "Migración y optimización cloud",
    pictogram: "migrate",
    tagline: "Llevar cargas a la nube con un plan, y operarlas con eficiencia.",
    summary:
      "Migraciones planificadas por oleadas con automatización, seguridad y gobierno de costos desde el primer día.",
    context:
      "El fin de contratos de centro de datos, la obsolescencia del hardware o la necesidad de escalar impulsan migraciones que, sin un plan, terminan con costos mayores a los previstos.",
    problem: [
      "Contratos de centro de datos próximos a vencer.",
      "Aplicaciones sin documentación ni dueño claro.",
      "Temor a interrupciones durante la migración.",
      "Facturas cloud que superan el presupuesto tras migrar.",
    ],
    approach: [
      "Clasificamos cada aplicación según la estrategia adecuada —rehospedar, replataformar, refactorizar, sustituir o retirar— y agrupamos las migraciones en oleadas de riesgo creciente.",
      "Cada oleada incluye pruebas, plan de reversión y validación de costos. Tras migrar, aplicamos FinOps para ajustar capacidad y compromisos de consumo.",
    ],
    architecture: [
      {
        id: "assessment",
        label: "Evaluación",
        description: "Inventario y clasificación de cada carga de trabajo.",
        nodes: ["Descubrimiento", "Dependencias", "Estrategia 6R"],
      },
      {
        id: "landing",
        label: "Landing zone",
        description: "Fundación segura: cuentas, redes, identidad y políticas.",
        nodes: ["Cuentas y redes", "Identidad", "Políticas"],
      },
      {
        id: "waves",
        label: "Oleadas",
        description: "Migración incremental con pruebas y reversión.",
        nodes: ["Piloto", "Oleadas", "Corte controlado"],
      },
      {
        id: "optimize",
        label: "Optimización",
        description: "Ajuste continuo de capacidad, costos y resiliencia.",
        nodes: ["Rightsizing", "Compromisos de uso", "Observabilidad"],
      },
    ],
    services: ["cloud-devops", "consultoria-estrategia-tecnologica", "ciberseguridad"],
    benefits: [
      {
        title: "Migración sin sobresaltos",
        description: "Cada corte tiene ventana, pruebas y plan de reversión.",
      },
      {
        title: "Costos previsibles",
        description: "Presupuesto validado antes y después de cada oleada.",
      },
      {
        title: "Base para innovar",
        description: "Servicios gestionados disponibles para nuevos productos.",
      },
    ],
    implementation: [
      { title: "Descubrimiento", description: "Inventario, dependencias y caso de negocio." },
      { title: "Fundación", description: "Landing zone y estándares de seguridad." },
      { title: "Oleadas", description: "Migración incremental y validada." },
      { title: "Optimización", description: "FinOps y mejora de resiliencia." },
    ],
    industries: ["educacion", "salud", "logistica-transporte", "telecomunicaciones"],
    image: "dc-aisle",
  },
  {
    slug: "experiencias-digitales-clientes",
    name: "Experiencias digitales para clientes",
    pictogram: "screen",
    tagline: "Servicios digitales que resuelven, no que complican.",
    summary:
      "Portales, aplicaciones y canales de autoservicio diseñados con usuarios reales y conectados a la operación.",
    context:
      "Los clientes comparan cada experiencia digital con las mejores que usan a diario. Un portal lento o confuso no solo frustra: deriva consultas al centro de contacto y aumenta el costo de servir.",
    problem: [
      "Autoservicio con baja adopción y alto abandono.",
      "Consultas simples que saturan el centro de contacto.",
      "Experiencias inconsistentes entre web, app y atención presencial.",
      "Barreras de accesibilidad que excluyen a parte de los usuarios.",
    ],
    approach: [
      "Investigamos con usuarios para entender sus tareas más frecuentes y las razones de abandono. Diseñamos y probamos prototipos antes de construir.",
      "Construimos sobre un sistema de diseño accesible y medimos cada tarea crítica con analítica de producto para mejorar de forma continua.",
    ],
    architecture: [
      {
        id: "research",
        label: "Investigación",
        description: "Tareas clave, motivaciones y puntos de abandono.",
        nodes: ["Entrevistas", "Analítica", "Pruebas de usabilidad"],
      },
      {
        id: "design",
        label: "Sistema de diseño",
        description: "Componentes accesibles y consistentes entre canales.",
        nodes: ["Componentes", "Tokens", "Guías de contenido"],
      },
      {
        id: "apps",
        label: "Aplicaciones",
        description: "Web y móvil construidas sobre APIs comunes.",
        nodes: ["Portal web", "App móvil", "Asistente"],
      },
      {
        id: "services",
        label: "Servicios",
        description: "APIs que conectan la experiencia con la operación.",
        nodes: ["Identidad", "Casos y pedidos", "Notificaciones"],
      },
    ],
    services: ["desarrollo-de-software", "transformacion-digital"],
    benefits: [
      {
        title: "Mayor autoservicio",
        description: "Más tareas resueltas sin intervención humana.",
      },
      {
        title: "Menos contactos",
        description: "Reducción de consultas repetitivas al centro de contacto.",
      },
      {
        title: "Experiencia inclusiva",
        description: "Diseño accesible verificado con criterios WCAG.",
      },
    ],
    implementation: [
      { title: "Investigación", description: "Usuarios, tareas y métricas de partida." },
      { title: "Prototipo", description: "Flujos clave validados con usuarios." },
      { title: "Lanzamiento", description: "Primera versión con las tareas de mayor volumen." },
      { title: "Iteración", description: "Mejoras guiadas por datos de uso." },
    ],
    industries: ["servicios-financieros", "telecomunicaciones", "salud", "educacion"],
    image: "team-cowork",
  },
  {
    slug: "integracion-ecosistemas-tecnologicos",
    name: "Integración de ecosistemas tecnológicos",
    pictogram: "network",
    tagline: "Un ecosistema conectado, observable y fácil de extender.",
    summary:
      "Plataformas de integración basadas en APIs y eventos que unen sistemas internos, socios y servicios externos.",
    context:
      "Fusiones, nuevos socios y aplicaciones SaaS multiplican los sistemas. Sin una estrategia de integración, cada conexión nueva añade fragilidad.",
    problem: [
      "Decenas de integraciones punto a punto sin documentación.",
      "Socios comerciales que tardan meses en conectarse.",
      "Datos maestros inconsistentes entre sistemas.",
      "Fallos de integración que se detectan por reclamos.",
    ],
    approach: [
      "Definimos una arquitectura de integración con capas claras: APIs de sistema, APIs de proceso y eventos de negocio, con contratos versionados.",
      "Implementamos observabilidad de extremo a extremo para que cada transacción pueda seguirse entre sistemas.",
    ],
    architecture: [
      {
        id: "partners",
        label: "Socios y canales",
        description: "Consumidores internos y externos con acceso gobernado.",
        nodes: ["Socios", "Canales", "SaaS"],
      },
      {
        id: "gateway",
        label: "Gestión de APIs",
        description: "Seguridad, cuotas, versionado y portal de desarrolladores.",
        nodes: ["Gateway", "Portal", "Políticas"],
      },
      {
        id: "events",
        label: "Bus de eventos",
        description: "Eventos de negocio publicados una vez y consumidos por muchos.",
        nodes: ["Eventos de negocio", "Reprocesamiento", "Esquemas"],
      },
      {
        id: "systems",
        label: "Sistemas de registro",
        description: "ERP, CRM y plataformas propias detrás de APIs de sistema.",
        nodes: ["ERP", "CRM", "Datos maestros"],
      },
    ],
    services: ["integracion-de-sistemas", "cloud-devops", "ciberseguridad"],
    benefits: [
      {
        title: "Conexiones rápidas",
        description: "Nuevos socios se integran con APIs documentadas.",
      },
      {
        title: "Trazabilidad total",
        description: "Cada transacción se sigue de extremo a extremo.",
      },
      {
        title: "Menor fragilidad",
        description: "Los cambios en un sistema no rompen a los demás.",
      },
    ],
    implementation: [
      { title: "Mapa del ecosistema", description: "Sistemas, flujos y dueños." },
      { title: "Plataforma", description: "Gateway, bus de eventos y estándares." },
      {
        title: "Migración de integraciones",
        description: "Sustitución gradual de conexiones punto a punto.",
      },
      { title: "Apertura", description: "Portal y onboarding de socios." },
    ],
    industries: ["logistica-transporte", "manufactura", "retail-comercio-electronico", "energia"],
    image: "network-fiber-panel",
  },
  {
    slug: "ia-aplicada-al-negocio",
    name: "Inteligencia artificial aplicada al negocio",
    pictogram: "brain",
    tagline: "Modelos que mejoran decisiones medibles del día a día.",
    summary:
      "Soluciones de IA predictiva y generativa integradas en procesos clave, con evaluación continua y gobierno responsable.",
    context:
      "La presión por adoptar IA genera iniciativas dispersas. Las organizaciones que obtienen resultados seleccionan pocos casos, los miden con rigor y los integran en la operación.",
    problem: [
      "Pilotos de IA sin camino claro a producción.",
      "Conocimiento interno disperso en documentos difíciles de consultar.",
      "Decisiones de inventario, precios o riesgo basadas en reglas estáticas.",
      "Incertidumbre sobre privacidad y cumplimiento.",
    ],
    approach: [
      "Seleccionamos casos de uso con datos disponibles y un indicador de negocio claro. Construimos conjuntos de evaluación antes de elegir modelos.",
      "Integramos la solución en las herramientas que los equipos ya usan, con supervisión humana en las decisiones sensibles y monitoreo continuo de calidad.",
    ],
    architecture: [
      {
        id: "data",
        label: "Datos y conocimiento",
        description: "Fuentes curadas con permisos y calidad verificada.",
        nodes: ["Datos históricos", "Documentos", "Permisos"],
      },
      {
        id: "models",
        label: "Modelos",
        description: "Modelos predictivos y de lenguaje seleccionados por evaluación.",
        nodes: ["Predicción", "Recuperación (RAG)", "Modelos de lenguaje"],
      },
      {
        id: "guardrails",
        label: "Control",
        description: "Evaluación, filtros y supervisión humana.",
        nodes: ["Conjuntos de evaluación", "Guardarraíles", "Revisión humana"],
      },
      {
        id: "workflow",
        label: "Flujo de trabajo",
        description: "La IA aparece donde las personas ya trabajan.",
        nodes: ["CRM / ERP", "Asistentes", "Tableros"],
      },
    ],
    services: [
      "inteligencia-artificial-automatizacion",
      "ingenieria-analisis-de-datos",
      "ciberseguridad",
    ],
    benefits: [
      {
        title: "Decisiones mejores",
        description: "Pronósticos y recomendaciones medidos contra la línea base.",
      },
      {
        title: "Conocimiento accesible",
        description: "Respuestas fundamentadas en documentos internos con citas.",
      },
      {
        title: "Riesgo gestionado",
        description: "Gobierno, privacidad y supervisión desde el diseño.",
      },
    ],
    implementation: [
      { title: "Selección", description: "Casos de uso por valor, datos y riesgo." },
      { title: "Evaluación", description: "Conjuntos de prueba y línea base." },
      { title: "Integración", description: "Solución embebida en el flujo de trabajo." },
      { title: "Monitoreo", description: "Calidad, deriva y costos de inferencia." },
    ],
    industries: ["retail-comercio-electronico", "servicios-financieros", "manufactura", "salud"],
    image: "ai-robot-arm",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getSolutionsBySlugs(slugs: SolutionSlug[]) {
  return slugs.map((slug) => getSolution(slug)).filter((s): s is Solution => Boolean(s));
}
