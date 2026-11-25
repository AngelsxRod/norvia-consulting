import type { Service, ServiceSlug } from "@/types/content";

export const services: Service[] = [
  {
    slug: "consultoria-estrategia-tecnologica",
    number: "01",
    name: "Consultoría y estrategia tecnológica",
    shortName: "Estrategia tecnológica",
    pictogram: "compass",
    tagline: "Decisiones tecnológicas alineadas con el plan de negocio.",
    summary:
      "Definimos hojas de ruta, arquitecturas objetivo y modelos de gobierno para que la inversión tecnológica responda a prioridades de negocio medibles.",
    description: [
      "Muchas organizaciones invierten en tecnología sin un criterio común: cada área compra, construye o contrata por su cuenta y el resultado es un ecosistema caro de mantener y difícil de evolucionar.",
      "Nuestro trabajo de estrategia parte del negocio. Entendemos objetivos, restricciones y capacidades actuales; después traducimos esa lectura a una arquitectura objetivo y a una hoja de ruta secuenciada, con costos, riesgos y beneficios explícitos.",
    ],
    problems: [
      "Portafolio de proyectos sin priorización clara ni vínculo con objetivos de negocio.",
      "Arquitectura heredada que frena nuevos productos y encarece la operación.",
      "Decisiones de compra de plataformas tomadas sin evaluar alternativas ni costo total.",
      "Áreas de TI y negocio que no comparten indicadores ni lenguaje.",
    ],
    capabilities: [
      {
        title: "Evaluación de madurez",
        description:
          "Diagnóstico de procesos, arquitectura, equipos y gobierno con un modelo de madurez de cinco niveles.",
      },
      {
        title: "Arquitectura empresarial",
        description:
          "Mapa de capacidades, arquitectura de referencia y principios de diseño acordados con dirección.",
      },
      {
        title: "Hoja de ruta tecnológica",
        description:
          "Secuencia de iniciativas a 12–36 meses con dependencias, presupuesto estimado y criterios de éxito.",
      },
      {
        title: "Due diligence técnica",
        description:
          "Evaluación independiente de plataformas, proveedores o empresas antes de una inversión o adquisición.",
      },
    ],
    scope: [
      "Entrevistas con dirección, áreas usuarias y equipos técnicos.",
      "Inventario de aplicaciones, integraciones y contratos.",
      "Análisis de costos de operación y deuda técnica.",
      "Talleres de priorización y validación con comité directivo.",
    ],
    benefits: [
      {
        title: "Inversión priorizada",
        description: "Cada iniciativa queda vinculada a un objetivo y a un indicador.",
      },
      {
        title: "Menos redundancia",
        description: "Se identifican plataformas duplicadas y oportunidades de consolidación.",
      },
      {
        title: "Decisiones trazables",
        description: "Los criterios de arquitectura quedan documentados y son revisables.",
      },
    ],
    methodology: [
      {
        title: "Escuchar",
        description: "Entrevistas y revisión documental para entender negocio y restricciones.",
      },
      {
        title: "Medir",
        description: "Levantamiento de inventario, costos, riesgos y madurez actual.",
      },
      {
        title: "Diseñar",
        description: "Arquitectura objetivo y escenarios alternativos con su costo.",
      },
      {
        title: "Secuenciar",
        description: "Hoja de ruta por oleadas con hitos verificables y gobierno.",
      },
    ],
    technologies: ["TOGAF", "ArchiMate", "C4 Model", "Wardley Maps", "OKR", "FinOps"],
    deliverables: [
      "Informe de diagnóstico y modelo de madurez",
      "Mapa de capacidades y arquitectura objetivo",
      "Hoja de ruta por oleadas con presupuesto estimado",
      "Modelo de gobierno y comité de arquitectura",
    ],
    faqs: [
      {
        question: "¿Cuánto dura un trabajo de estrategia tecnológica?",
        answer:
          "Un diagnóstico con hoja de ruta suele tomar entre seis y diez semanas, según el tamaño del ecosistema y la disponibilidad de los equipos.",
      },
      {
        question: "¿La hoja de ruta incluye proveedores recomendados?",
        answer:
          "Incluye criterios de selección y, cuando se solicita, una comparación de alternativas. Norvia no recibe comisiones de fabricantes.",
      },
      {
        question: "¿Qué pasa después de entregar la estrategia?",
        answer:
          "Podemos acompañar la ejecución como oficina de arquitectura o transferir el gobierno al equipo interno con un plan de seguimiento trimestral.",
      },
    ],
    image: "whiteboard-roadmap",
  },
  {
    slug: "transformacion-digital",
    number: "02",
    name: "Transformación digital",
    shortName: "Transformación digital",
    pictogram: "transform",
    tagline: "Procesos, productos y equipos rediseñados alrededor del cliente.",
    summary:
      "Acompañamos programas de cambio que combinan rediseño de procesos, nuevos productos digitales y adopción por parte de las personas.",
    description: [
      "La transformación digital no es un proyecto de TI. Implica cambiar cómo se diseñan los servicios, cómo se toman decisiones y cómo colaboran las áreas.",
      "Trabajamos con oficinas de transformación para convertir una ambición general en un portafolio de iniciativas concretas, con dueños de producto, métricas y un ritmo de entrega sostenible.",
    ],
    problems: [
      "Programas de transformación que generan iniciativas aisladas sin impacto acumulado.",
      "Procesos manuales que dependen de hojas de cálculo y correo electrónico.",
      "Canales digitales que replican la burocracia de los canales físicos.",
      "Resistencia al cambio por falta de participación de los equipos operativos.",
    ],
    capabilities: [
      {
        title: "Diseño de servicios",
        description:
          "Mapas de experiencia y blueprints que conectan cliente, operación y sistemas.",
      },
      {
        title: "Oficina de transformación",
        description: "Gobierno del portafolio, métricas de avance y gestión de beneficios.",
      },
      {
        title: "Modelo operativo por producto",
        description:
          "Organización de equipos estables alrededor de flujos de valor en lugar de proyectos.",
      },
      {
        title: "Gestión del cambio",
        description: "Planes de comunicación, formación y adopción medidos con datos de uso.",
      },
    ],
    scope: [
      "Definición de la visión y del caso de negocio.",
      "Mapeo de procesos críticos y puntos de fricción.",
      "Diseño del portafolio de iniciativas y su gobierno.",
      "Acompañamiento en la ejecución de las primeras oleadas.",
    ],
    benefits: [
      {
        title: "Impacto acumulado",
        description: "Las iniciativas se refuerzan entre sí en lugar de competir por recursos.",
      },
      {
        title: "Procesos más cortos",
        description: "Se eliminan pasos manuales y aprobaciones que no agregan valor.",
      },
      {
        title: "Adopción real",
        description: "Los equipos operativos participan en el diseño desde el inicio.",
      },
    ],
    methodology: [
      {
        title: "Visión",
        description: "Ambición, alcance y caso de negocio acordados con dirección.",
      },
      {
        title: "Descubrimiento",
        description: "Investigación con clientes y equipos para encontrar fricciones reales.",
      },
      {
        title: "Pilotos",
        description: "Iniciativas acotadas que validan hipótesis en semanas.",
      },
      {
        title: "Escala",
        description: "Extensión de lo que funciona con un modelo operativo sostenible.",
      },
    ],
    technologies: ["Service Blueprint", "Jobs to be Done", "Lean Portfolio", "Scrum", "Kanban"],
    deliverables: [
      "Visión y caso de negocio de la transformación",
      "Mapas de experiencia y blueprints de servicio",
      "Portafolio priorizado y tablero de beneficios",
      "Plan de gestión del cambio y formación",
    ],
    faqs: [
      {
        question: "¿Trabajan con oficinas de transformación existentes?",
        answer:
          "Sí. En la mayoría de los casos reforzamos una oficina existente con métodos, herramientas y perfiles especializados.",
      },
      {
        question: "¿Cómo se miden los beneficios?",
        answer:
          "Cada iniciativa tiene una línea base y un indicador objetivo acordados antes de iniciar. El tablero de beneficios se revisa mensualmente.",
      },
      {
        question: "¿Incluye la construcción de software?",
        answer:
          "Puede incluirla. Cuando una iniciativa requiere desarrollo, se integra con nuestro servicio de desarrollo de software o con el proveedor del cliente.",
      },
    ],
    image: "team-review",
  },
  {
    slug: "desarrollo-de-software",
    number: "03",
    name: "Desarrollo de software",
    shortName: "Desarrollo de software",
    pictogram: "code",
    tagline: "Productos digitales robustos, mantenibles y listos para crecer.",
    summary:
      "Diseñamos y construimos aplicaciones web, móviles y plataformas a medida con prácticas de ingeniería que reducen el costo de cambio.",
    description: [
      "Construimos software que una organización pueda mantener durante años: código legible, pruebas automatizadas, despliegues frecuentes y documentación que acompaña al producto.",
      "Nuestros equipos combinan producto, diseño e ingeniería. Trabajamos en ciclos cortos, con demostraciones quincenales y métricas de entrega visibles para el cliente.",
    ],
    problems: [
      "Aplicaciones críticas construidas sin pruebas que nadie se atreve a modificar.",
      "Ciclos de entrega de meses por dependencia de procesos manuales.",
      "Productos digitales con baja adopción por problemas de usabilidad.",
      "Equipos internos saturados por mantenimiento correctivo.",
    ],
    capabilities: [
      {
        title: "Aplicaciones web y móviles",
        description:
          "Frontends accesibles y rápidos con React, Next.js y desarrollo móvil multiplataforma.",
      },
      {
        title: "Plataformas y APIs",
        description:
          "Servicios backend con contratos claros, observabilidad y escalado horizontal.",
      },
      {
        title: "Ingeniería de calidad",
        description:
          "Pruebas automatizadas, revisión de código y métricas DORA desde el primer sprint.",
      },
      {
        title: "Diseño de producto",
        description: "Investigación con usuarios, prototipos y sistemas de diseño reutilizables.",
      },
    ],
    scope: [
      "Descubrimiento de producto y definición del MVP.",
      "Diseño UX/UI y sistema de diseño.",
      "Desarrollo iterativo con entregas quincenales.",
      "Puesta en producción, soporte y transferencia.",
    ],
    benefits: [
      {
        title: "Entrega frecuente",
        description: "Funcionalidades en producción cada pocas semanas, no cada trimestre.",
      },
      {
        title: "Menor costo de cambio",
        description: "Arquitectura modular y pruebas que permiten evolucionar con seguridad.",
      },
      {
        title: "Productos usados",
        description: "Decisiones de diseño validadas con usuarios reales.",
      },
    ],
    methodology: [
      {
        title: "Descubrir",
        description: "Objetivos, usuarios y riesgos del producto en dos a cuatro semanas.",
      },
      {
        title: "Diseñar",
        description: "Prototipos navegables y arquitectura técnica inicial.",
      },
      {
        title: "Construir",
        description: "Iteraciones quincenales con demostración y retroalimentación.",
      },
      {
        title: "Operar",
        description: "Monitoreo, soporte y mejora continua con el equipo del cliente.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Java",
      ".NET",
      "Go",
      "PostgreSQL",
      "React Native",
      "Playwright",
    ],
    deliverables: [
      "Producto en producción con código fuente del cliente",
      "Sistema de diseño y documentación técnica",
      "Pipeline de integración y entrega continua",
      "Plan de soporte y transferencia",
    ],
    faqs: [
      {
        question: "¿Quién es dueño del código?",
        answer:
          "El cliente. Trabajamos en sus repositorios desde el primer día y toda la propiedad intelectual le pertenece.",
      },
      {
        question: "¿Pueden integrarse a un equipo existente?",
        answer:
          "Sí. Podemos aportar un equipo completo o perfiles específicos que se integran a las ceremonias y herramientas del cliente.",
      },
      {
        question: "¿Cómo estiman un proyecto?",
        answer:
          "Tras el descubrimiento entregamos un rango de esfuerzo por capacidades y un plan de entregas. Preferimos presupuestos por equipo y periodo, con alcance priorizado.",
      },
    ],
    image: "code-desk",
  },
  {
    slug: "cloud-devops",
    number: "04",
    name: "Cloud y DevOps",
    shortName: "Cloud y DevOps",
    pictogram: "cloud",
    tagline: "Infraestructura automatizada, observable y con costos bajo control.",
    summary:
      "Diseñamos plataformas cloud, automatizamos despliegues y establecemos prácticas de operación que mejoran la estabilidad y el costo.",
    description: [
      "Migrar a la nube no garantiza agilidad ni ahorro. Sin automatización, gobierno de costos y prácticas de operación, la nube reproduce los problemas del centro de datos con una factura variable.",
      "Construimos plataformas internas que permiten a los equipos desplegar con autonomía y seguridad: infraestructura como código, pipelines estandarizados, observabilidad y FinOps.",
    ],
    problems: [
      "Despliegues manuales, nocturnos y con alto riesgo de incidentes.",
      "Factura cloud creciente sin visibilidad por producto o equipo.",
      "Entornos inconsistentes entre desarrollo, pruebas y producción.",
      "Incidentes detectados por los clientes antes que por el equipo.",
    ],
    capabilities: [
      {
        title: "Arquitectura cloud",
        description: "Landing zones, redes, identidad y patrones de alta disponibilidad.",
      },
      {
        title: "Plataforma interna",
        description: "Plantillas, pipelines y autoservicio para que los equipos desplieguen solos.",
      },
      {
        title: "Observabilidad y SRE",
        description: "Métricas, trazas, alertas basadas en SLO y gestión de incidentes.",
      },
      {
        title: "FinOps",
        description: "Etiquetado, presupuestos y optimización continua del gasto cloud.",
      },
    ],
    scope: [
      "Evaluación de la infraestructura y prácticas actuales.",
      "Diseño de landing zone y estándares de plataforma.",
      "Automatización de infraestructura y pipelines.",
      "Implantación de observabilidad, SLO y FinOps.",
    ],
    benefits: [
      {
        title: "Despliegues rutinarios",
        description: "Publicar en producción pasa de evento de riesgo a operación diaria.",
      },
      {
        title: "Costo explicable",
        description: "Cada producto conoce y gestiona su consumo cloud.",
      },
      {
        title: "Recuperación rápida",
        description: "Menor tiempo de detección y de restauración ante incidentes.",
      },
    ],
    methodology: [
      {
        title: "Evaluar",
        description: "Madurez de plataforma, costos y métricas DORA actuales.",
      },
      {
        title: "Fundar",
        description: "Landing zone, identidad, redes y gobierno de cuentas.",
      },
      {
        title: "Automatizar",
        description: "Infraestructura como código y pipelines reutilizables.",
      },
      {
        title: "Operar",
        description: "SLO, guardias, postmortems y revisión mensual de costos.",
      },
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "GitHub Actions",
      "Argo CD",
      "OpenTelemetry",
      "Grafana",
    ],
    deliverables: [
      "Landing zone documentada y versionada",
      "Catálogo de plantillas y pipelines",
      "Tableros de observabilidad y SLO",
      "Informe FinOps con plan de optimización",
    ],
    faqs: [
      {
        question: "¿Trabajan con un solo proveedor cloud?",
        answer:
          "No. Tenemos experiencia en AWS, Azure y Google Cloud, y diseñamos estrategias híbridas cuando el contexto lo requiere.",
      },
      {
        question: "¿Ofrecen operación continua?",
        answer:
          "Podemos operar durante un periodo de estabilización y transferir después la operación al equipo interno o a un proveedor gestionado.",
      },
      {
        question: "¿Cuánto se puede ahorrar con FinOps?",
        answer:
          "Depende del punto de partida. El primer paso es medir con precisión; las estimaciones de ahorro se presentan solo después de ese análisis.",
      },
    ],
    image: "dc-hall",
  },
  {
    slug: "inteligencia-artificial-automatizacion",
    number: "05",
    name: "Inteligencia artificial y automatización",
    shortName: "IA y automatización",
    pictogram: "spark",
    tagline: "IA aplicada a procesos reales, con control y trazabilidad.",
    summary:
      "Identificamos casos de uso de IA con retorno verificable y los llevamos a producción con evaluación, gobierno y supervisión humana.",
    description: [
      "La IA genera valor cuando resuelve un problema operativo concreto y se integra en el flujo de trabajo de las personas. Sin evaluación ni gobierno, se queda en demostraciones.",
      "Combinamos modelos de lenguaje, aprendizaje automático clásico y automatización de procesos para reducir trabajo repetitivo, mejorar decisiones y liberar tiempo de los equipos.",
    ],
    problems: [
      "Pilotos de IA que no superan la etapa de prueba de concepto.",
      "Equipos que dedican horas a clasificar, transcribir o resumir documentos.",
      "Preocupación por privacidad, sesgos y uso no controlado de herramientas de IA.",
      "Procesos con reglas estables que todavía se ejecutan manualmente.",
    ],
    capabilities: [
      {
        title: "Descubrimiento de casos de uso",
        description: "Priorización por valor, factibilidad de datos y riesgo regulatorio.",
      },
      {
        title: "Asistentes y agentes",
        description:
          "Soluciones con modelos de lenguaje conectadas a conocimiento interno y herramientas.",
      },
      {
        title: "Modelos predictivos",
        description: "Pronóstico de demanda, detección de anomalías y modelos de propensión.",
      },
      {
        title: "Automatización de procesos",
        description:
          "Orquestación de flujos con reglas, IA y validación humana en los puntos críticos.",
      },
    ],
    scope: [
      "Taller de oportunidades y priorización de casos de uso.",
      "Evaluación de datos disponibles y riesgos.",
      "Prototipo evaluado con métricas de calidad.",
      "Puesta en producción con monitoreo y gobierno.",
    ],
    benefits: [
      {
        title: "Tiempo liberado",
        description: "Los equipos dejan tareas repetitivas y se enfocan en excepciones.",
      },
      {
        title: "Calidad medida",
        description: "Cada solución tiene conjuntos de evaluación y umbrales acordados.",
      },
      {
        title: "Uso responsable",
        description: "Políticas, registros y supervisión humana desde el diseño.",
      },
    ],
    methodology: [
      {
        title: "Priorizar",
        description: "Casos de uso evaluados por valor, datos y riesgo.",
      },
      {
        title: "Prototipar",
        description: "Solución mínima con un conjunto de evaluación representativo.",
      },
      {
        title: "Validar",
        description: "Pruebas con usuarios y comparación contra la línea base.",
      },
      {
        title: "Productivizar",
        description: "Integración, monitoreo de calidad y gobierno de modelos.",
      },
    ],
    technologies: [
      "Python",
      "LLM APIs",
      "RAG",
      "LangGraph",
      "scikit-learn",
      "MLflow",
      "Vector DB",
      "n8n",
      "Temporal",
    ],
    deliverables: [
      "Portafolio priorizado de casos de uso",
      "Solución en producción con conjunto de evaluación",
      "Política de uso responsable de IA",
      "Tablero de calidad y costos de inferencia",
    ],
    faqs: [
      {
        question: "¿Los datos de la empresa se usan para entrenar modelos de terceros?",
        answer:
          "No. Diseñamos las soluciones con proveedores y configuraciones que excluyen el uso de datos del cliente para entrenamiento, y lo documentamos.",
      },
      {
        question: "¿Cómo se evalúa la calidad de una solución de IA?",
        answer:
          "Con conjuntos de prueba construidos junto al cliente, métricas específicas del caso y revisión humana de muestras en producción.",
      },
      {
        question: "¿Siempre recomiendan IA generativa?",
        answer:
          "No. Muchos procesos se resuelven mejor con reglas, automatización o modelos clásicos, que son más baratos y predecibles.",
      },
    ],
    image: "ai-lab-arm",
  },
  {
    slug: "ingenieria-analisis-de-datos",
    number: "06",
    name: "Ingeniería y análisis de datos",
    shortName: "Datos y analítica",
    pictogram: "data",
    tagline: "Datos confiables para decidir con rapidez y certeza.",
    summary:
      "Construimos plataformas de datos modernas, modelos analíticos y tableros que convierten información dispersa en decisiones.",
    description: [
      "Una organización que no confía en sus datos discute cifras en lugar de decidir. El problema rara vez es la herramienta: es la falta de modelos comunes, calidad y responsables.",
      "Diseñamos plataformas de datos con ingesta automatizada, modelos semánticos compartidos y controles de calidad, para que cada área consulte la misma verdad.",
    ],
    problems: [
      "Reportes que se construyen a mano cada mes en hojas de cálculo.",
      "Indicadores con definiciones distintas según el área que los presenta.",
      "Datos atrapados en sistemas operativos sin acceso analítico.",
      "Tableros que nadie consulta porque no responden preguntas de negocio.",
    ],
    capabilities: [
      {
        title: "Plataforma de datos",
        description: "Lakehouse, ingesta, orquestación y almacenamiento con costos controlados.",
      },
      {
        title: "Modelado analítico",
        description: "Modelos dimensionales y capa semántica con definiciones únicas.",
      },
      {
        title: "Calidad y gobierno",
        description: "Pruebas de datos, linaje, catálogo y responsables por dominio.",
      },
      {
        title: "Analítica y visualización",
        description: "Tableros diseñados alrededor de decisiones y análisis avanzados.",
      },
    ],
    scope: [
      "Inventario de fuentes y casos de uso analíticos.",
      "Arquitectura de la plataforma de datos.",
      "Construcción de pipelines y modelos prioritarios.",
      "Tableros, formación y gobierno de datos.",
    ],
    benefits: [
      {
        title: "Una sola verdad",
        description: "Indicadores definidos una vez y reutilizados por todas las áreas.",
      },
      {
        title: "Reportes automáticos",
        description: "Los cierres dejan de depender de procesos manuales.",
      },
      {
        title: "Decisiones más rápidas",
        description: "Información actualizada disponible cuando se necesita.",
      },
    ],
    methodology: [
      {
        title: "Preguntar",
        description: "Decisiones clave y preguntas que los datos deben responder.",
      },
      {
        title: "Modelar",
        description: "Dominios, entidades y definiciones de indicadores.",
      },
      {
        title: "Construir",
        description: "Pipelines probados y modelos versionados.",
      },
      {
        title: "Adoptar",
        description: "Tableros, formación y seguimiento del uso.",
      },
    ],
    technologies: [
      "Snowflake",
      "Databricks",
      "BigQuery",
      "dbt",
      "Airflow",
      "Kafka",
      "Power BI",
      "Looker",
      "Great Expectations",
    ],
    deliverables: [
      "Arquitectura de datos documentada",
      "Pipelines y modelos con pruebas de calidad",
      "Catálogo y diccionario de indicadores",
      "Tableros ejecutivos y operativos",
    ],
    faqs: [
      {
        question: "¿Es necesario migrar todos los datos a una nueva plataforma?",
        answer:
          "No siempre. Empezamos por los casos de uso de mayor valor y migramos de forma incremental, reutilizando lo que funciona.",
      },
      {
        question: "¿Trabajan con la herramienta de BI que ya tenemos?",
        answer:
          "Sí. La capa semántica se diseña para ser independiente de la herramienta de visualización.",
      },
      {
        question: "¿Quién mantiene los pipelines después del proyecto?",
        answer:
          "El equipo del cliente, con documentación, pruebas automatizadas y un periodo de acompañamiento.",
      },
    ],
    image: "analytics-dashboard",
  },
  {
    slug: "ciberseguridad",
    number: "07",
    name: "Ciberseguridad",
    shortName: "Ciberseguridad",
    pictogram: "shield",
    tagline: "Seguridad integrada al diseño, no añadida al final.",
    summary:
      "Evaluamos riesgos, fortalecemos arquitecturas y llevamos la seguridad al ciclo de desarrollo y a la operación diaria.",
    description: [
      "La seguridad efectiva es una propiedad del sistema, no un producto. Depende de decisiones de arquitectura, prácticas de desarrollo, gestión de identidades y capacidad de respuesta.",
      "Ayudamos a priorizar controles según el riesgo real del negocio, a integrar la seguridad en el desarrollo y a preparar a los equipos para detectar y responder a incidentes.",
    ],
    problems: [
      "Vulnerabilidades detectadas tarde, cuando corregirlas es costoso.",
      "Accesos privilegiados sin control ni revisión periódica.",
      "Requisitos regulatorios atendidos con documentación pero sin controles operativos.",
      "Ausencia de un plan probado de respuesta a incidentes.",
    ],
    capabilities: [
      {
        title: "Evaluación de riesgos",
        description: "Análisis de amenazas, brechas de control y priorización por impacto.",
      },
      {
        title: "Seguridad en el desarrollo",
        description: "Modelado de amenazas, análisis de código y dependencias en el pipeline.",
      },
      {
        title: "Identidad y acceso",
        description: "Arquitecturas Zero Trust, MFA, gestión de privilegios y revisiones.",
      },
      {
        title: "Respuesta a incidentes",
        description: "Planes, ejercicios de simulación y mejora de la detección.",
      },
    ],
    scope: [
      "Evaluación de postura de seguridad.",
      "Plan de remediación priorizado.",
      "Integración de controles en desarrollo y operación.",
      "Ejercicios de respuesta y formación.",
    ],
    benefits: [
      {
        title: "Riesgo visible",
        description: "Dirección conoce los riesgos principales y su tratamiento.",
      },
      {
        title: "Corrección temprana",
        description: "Las vulnerabilidades se detectan en el desarrollo, no en producción.",
      },
      {
        title: "Respuesta preparada",
        description: "Equipos entrenados y procedimientos probados.",
      },
    ],
    methodology: [
      {
        title: "Identificar",
        description: "Activos críticos, amenazas y controles actuales.",
      },
      {
        title: "Priorizar",
        description: "Brechas ordenadas por probabilidad e impacto.",
      },
      {
        title: "Proteger",
        description: "Controles técnicos y de proceso integrados a la operación.",
      },
      {
        title: "Responder",
        description: "Detección, simulacros y mejora continua.",
      },
    ],
    technologies: [
      "NIST CSF",
      "ISO 27001",
      "OWASP",
      "Zero Trust",
      "SAST/DAST",
      "SIEM",
      "Entra ID",
      "Vault",
    ],
    deliverables: [
      "Evaluación de postura y mapa de riesgos",
      "Plan de remediación con responsables",
      "Controles de seguridad en el pipeline",
      "Plan de respuesta a incidentes probado",
    ],
    faqs: [
      {
        question: "¿Realizan pruebas de penetración?",
        answer:
          "Coordinamos pruebas con especialistas acreditados y nos enfocamos en corregir y prevenir, integrando los hallazgos al ciclo de desarrollo.",
      },
      {
        question: "¿Ayudan con certificaciones como ISO 27001?",
        answer:
          "Acompañamos la implantación de controles y la preparación. La certificación la otorga un organismo independiente.",
      },
      {
        question: "¿Qué ocurre si sufrimos un incidente durante el proyecto?",
        answer:
          "El plan de trabajo incluye un protocolo de escalamiento. Si existe un proveedor de respuesta contratado, coordinamos con él.",
      },
    ],
    image: "security-operator",
  },
  {
    slug: "integracion-de-sistemas",
    number: "08",
    name: "Integración de sistemas",
    shortName: "Integración de sistemas",
    pictogram: "link",
    tagline: "Sistemas que conversan entre sí sin fricción ni duplicidad.",
    summary:
      "Conectamos ERP, CRM, plataformas propias y servicios externos con APIs y eventos gobernados, eliminando procesos manuales entre sistemas.",
    description: [
      "En muchas empresas, las personas son la integración: copian datos entre sistemas, concilian reportes y corrigen errores de captura. Ese trabajo invisible es costoso y frágil.",
      "Diseñamos arquitecturas de integración basadas en APIs, eventos y contratos versionados, para que la información fluya con trazabilidad y cada sistema pueda evolucionar sin romper a los demás.",
    ],
    problems: [
      "Datos de clientes, productos o pedidos duplicados en varios sistemas.",
      "Integraciones punto a punto que nadie documentó y que fallan en silencio.",
      "Dependencia de archivos planos y procesos nocturnos.",
      "Imposibilidad de conectar nuevos canales sin proyectos largos.",
    ],
    capabilities: [
      {
        title: "Arquitectura de integración",
        description: "Patrones de API, mensajería y eventos según cada necesidad.",
      },
      {
        title: "Gestión de APIs",
        description: "Diseño de contratos, versionado, seguridad y portal de desarrolladores.",
      },
      {
        title: "Arquitectura orientada a eventos",
        description: "Flujos en tiempo real con trazabilidad y reprocesamiento.",
      },
      {
        title: "Datos maestros",
        description: "Fuentes de verdad para clientes, productos y proveedores.",
      },
    ],
    scope: [
      "Mapa de integraciones actuales y sus fallos.",
      "Arquitectura objetivo y estándares de integración.",
      "Implementación de integraciones prioritarias.",
      "Monitoreo, alertas y documentación de contratos.",
    ],
    benefits: [
      {
        title: "Menos trabajo manual",
        description: "Los datos viajan entre sistemas sin intervención humana.",
      },
      {
        title: "Errores visibles",
        description: "Cada mensaje es trazable y los fallos generan alertas.",
      },
      {
        title: "Evolución independiente",
        description: "Un sistema puede cambiar sin romper a los demás.",
      },
    ],
    methodology: [
      {
        title: "Mapear",
        description: "Flujos de información, sistemas y dueños.",
      },
      {
        title: "Estandarizar",
        description: "Patrones, contratos y políticas de seguridad.",
      },
      {
        title: "Conectar",
        description: "Integraciones priorizadas con pruebas de contrato.",
      },
      {
        title: "Observar",
        description: "Trazabilidad, alertas y tableros de salud.",
      },
    ],
    technologies: [
      "REST",
      "GraphQL",
      "AsyncAPI",
      "Kafka",
      "RabbitMQ",
      "MuleSoft",
      "Azure Integration Services",
      "SAP",
      "Salesforce",
    ],
    deliverables: [
      "Mapa de integraciones y arquitectura objetivo",
      "Catálogo de APIs y contratos documentados",
      "Integraciones en producción con monitoreo",
      "Guía de estándares de integración",
    ],
    faqs: [
      {
        question: "¿Trabajan con ERP como SAP u Oracle?",
        answer:
          "Sí. Integramos ERP, CRM y plataformas de terceros usando sus interfaces oficiales y respetando sus límites de licencia.",
      },
      {
        question: "¿Es obligatorio adquirir una plataforma de integración?",
        answer:
          "No. Evaluamos si el volumen y la complejidad justifican una plataforma comercial o si es suficiente con servicios cloud nativos.",
      },
      {
        question: "¿Cómo evitan que una integración falle sin que nadie lo note?",
        answer:
          "Toda integración incluye trazabilidad por mensaje, reintentos controlados y alertas con responsable asignado.",
      },
    ],
    image: "network-cables",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesBySlugs(slugs: ServiceSlug[]) {
  return slugs.map((slug) => getService(slug)).filter((s): s is Service => Boolean(s));
}
