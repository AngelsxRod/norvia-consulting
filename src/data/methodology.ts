export type MethodologyStage = {
  number: string;
  title: string;
  question: string;
  description: string;
  activities: string[];
  outputs: string[];
  duration: string;
};

export const methodology: MethodologyStage[] = [
  {
    number: "01",
    title: "Descubrimiento",
    question: "¿Qué intenta lograr el negocio?",
    description:
      "Entendemos objetivos, restricciones y expectativas antes de hablar de tecnología. Escuchamos a dirección, áreas usuarias y equipos técnicos.",
    activities: ["Entrevistas con actores clave", "Revisión documental", "Definición de alcance"],
    outputs: ["Objetivos y criterios de éxito", "Mapa de actores", "Plan de diagnóstico"],
    duration: "1–2 semanas",
  },
  {
    number: "02",
    title: "Diagnóstico",
    question: "¿Dónde estamos realmente?",
    description:
      "Medimos el punto de partida con datos: procesos, sistemas, costos, riesgos y capacidades del equipo. Establecemos la línea base contra la que mediremos.",
    activities: ["Inventario tecnológico", "Análisis de flujos de valor", "Evaluación de riesgos"],
    outputs: ["Línea base de indicadores", "Mapa de deuda técnica", "Brechas priorizadas"],
    duration: "2–4 semanas",
  },
  {
    number: "03",
    title: "Estrategia",
    question: "¿Qué camino conviene tomar?",
    description:
      "Comparamos alternativas con su costo, riesgo y beneficio esperado. Acordamos una dirección y una secuencia de iniciativas.",
    activities: ["Escenarios alternativos", "Caso de negocio", "Priorización con dirección"],
    outputs: ["Arquitectura objetivo", "Hoja de ruta por oleadas", "Modelo de gobierno"],
    duration: "2–3 semanas",
  },
  {
    number: "04",
    title: "Diseño de soluciones",
    question: "¿Cómo será exactamente?",
    description:
      "Diseñamos la solución con las personas que la usarán: prototipos, arquitectura técnica, contratos de integración y plan de pruebas.",
    activities: ["Prototipos validados", "Decisiones de arquitectura", "Diseño de integraciones"],
    outputs: ["Prototipo navegable", "Registro de decisiones", "Backlog priorizado"],
    duration: "2–4 semanas",
  },
  {
    number: "05",
    title: "Implementación",
    question: "¿Cómo lo construimos sin riesgo?",
    description:
      "Construimos en iteraciones cortas con demostraciones frecuentes, integración continua y despliegues pequeños y reversibles.",
    activities: ["Iteraciones quincenales", "Integración continua", "Demostraciones"],
    outputs: ["Software en producción", "Pruebas automatizadas", "Documentación viva"],
    duration: "Variable por iniciativa",
  },
  {
    number: "06",
    title: "Validación",
    question: "¿Funcionó como esperábamos?",
    description:
      "Comparamos los resultados con la línea base. Si una hipótesis no se cumple, lo decimos y ajustamos el plan.",
    activities: ["Medición de indicadores", "Pruebas con usuarios", "Revisión con dirección"],
    outputs: ["Informe de resultados", "Lecciones aprendidas", "Ajustes al plan"],
    duration: "Continua",
  },
  {
    number: "07",
    title: "Optimización continua",
    question: "¿Cómo seguimos mejorando sin depender de Norvia?",
    description:
      "Transferimos conocimiento, establecemos rutinas de mejora y dejamos al equipo del cliente en condiciones de operar y evolucionar la solución.",
    activities: ["Transferencia y pairing", "Rutinas de mejora", "Acompañamiento posterior"],
    outputs: ["Equipo autónomo", "Guías de operación", "Plan de evolución"],
    duration: "1–3 meses",
  },
];

export const principles = [
  {
    title: "Línea base primero",
    description: "No proponemos mejoras que no podamos medir contra un punto de partida.",
  },
  {
    title: "Entregas pequeñas",
    description: "Preferimos diez entregas reversibles a un gran lanzamiento.",
  },
  {
    title: "Decisiones documentadas",
    description: "Cada decisión relevante queda registrada con su contexto y alternativas.",
  },
  {
    title: "Salida planificada",
    description: "Desde el inicio sabemos cómo el cliente operará sin nosotros.",
  },
];
