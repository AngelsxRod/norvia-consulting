import type { Article, ArticleBlock, ArticleCategory } from "@/types/content";

export const articleCategories: ArticleCategory[] = [
  "Transformación digital",
  "Desarrollo de software",
  "Inteligencia artificial",
  "Cloud",
  "Datos",
  "Ciberseguridad",
  "Arquitectura",
  "Estrategia",
];

export const articles: Article[] = [
  {
    slug: "hoja-de-ruta-tecnologica-que-se-cumple",
    title: "Cómo construir una hoja de ruta tecnológica que realmente se cumpla",
    excerpt:
      "Las hojas de ruta fracasan cuando son listas de deseos. Cuatro principios para convertirlas en un instrumento de gestión.",
    category: "Estrategia",
    author: "Andrés Quiroga",
    date: "2026-10-28",
    image: "whiteboard-roadmap",
    body: [
      {
        type: "p",
        text: "Casi todas las organizaciones tienen una hoja de ruta tecnológica. Pocas pueden decir, un año después, cuántas de sus iniciativas se completaron y qué impacto tuvieron. El problema no suele ser la ejecución: es que el documento se diseñó para aprobar presupuesto, no para gestionar decisiones.",
      },
      { type: "h2", id: "objetivos", text: "Empezar por los objetivos, no por los proyectos" },
      {
        type: "p",
        text: "Una hoja de ruta útil se lee de izquierda a derecha como una cadena de causas: objetivo de negocio, capacidad necesaria, iniciativa que la habilita e indicador que confirma el avance. Si una iniciativa no puede ubicarse en esa cadena, probablemente responde a una preferencia y no a una necesidad.",
      },
      {
        type: "ul",
        items: [
          "Tres a cinco objetivos de negocio explícitos y priorizados.",
          "Capacidades que faltan para alcanzarlos, descritas en lenguaje de negocio.",
          "Iniciativas vinculadas a una capacidad y a un indicador.",
        ],
      },
      { type: "h2", id: "oleadas", text: "Secuenciar en oleadas cortas" },
      {
        type: "p",
        text: "Los planes de tres años con fechas fijas transmiten certeza, pero se desactualizan en el primer trimestre. Recomendamos oleadas de tres a seis meses: la primera, con alto nivel de detalle; las siguientes, con hipótesis que se revisan al cerrar cada oleada.",
      },
      {
        type: "quote",
        text: "Una hoja de ruta no es una promesa de fechas, es un acuerdo sobre prioridades que se revisa con evidencia.",
      },
      { type: "h2", id: "dependencias", text: "Hacer visibles las dependencias" },
      {
        type: "p",
        text: "Muchas iniciativas se retrasan por dependencias que nadie dibujó: una integración pendiente, un contrato que vence o un equipo compartido. Representarlas en un mapa simple permite anticipar cuellos de botella y negociar prioridades con datos.",
      },
      { type: "h2", id: "gobierno", text: "Un gobierno ligero pero regular" },
      {
        type: "p",
        text: "El comité de seguimiento no necesita reunirse cada semana; necesita reunirse siempre. Una revisión mensual de indicadores y una revisión trimestral de prioridades bastan para mantener la hoja de ruta viva y alineada con el negocio.",
      },
    ],
  },
  {
    slug: "patron-estrangulamiento-modernizacion",
    title: "El patrón de estrangulamiento: modernizar sin apagar el sistema",
    excerpt:
      "Sustituir un sistema central de una sola vez es una apuesta de alto riesgo. El patrón de estrangulamiento ofrece un camino gradual.",
    category: "Arquitectura",
    author: "Lucía Ferrer",
    date: "2026-10-14",
    image: "dc-corridor",
    body: [
      {
        type: "p",
        text: "Los proyectos de reemplazo total de sistemas centrales tienen una reputación merecida: largos, caros y con una fecha de corte que concentra todo el riesgo. El patrón de estrangulamiento propone otra estrategia: rodear el sistema existente y sustituirlo por partes.",
      },
      { type: "h2", id: "fachada", text: "Primero, una fachada" },
      {
        type: "p",
        text: "El primer paso es interponer una capa de APIs entre los consumidores y el sistema heredado. Al principio, la fachada solo redirige las llamadas; su valor es que, a partir de ese momento, los consumidores dejan de depender de la implementación interna.",
      },
      { type: "h2", id: "modulos", text: "Elegir el primer módulo" },
      {
        type: "p",
        text: "El primer módulo a migrar debe ser lo bastante relevante para demostrar valor y lo bastante acotado para completarse en pocos meses. Suele funcionar bien una capacidad con pocas escrituras y muchas lecturas, como la consulta de catálogo o de clientes.",
      },
      {
        type: "ul",
        items: [
          "Fronteras de datos claras.",
          "Volumen de cambios de negocio alto, para que la mejora se note.",
          "Riesgo operativo moderado.",
        ],
      },
      { type: "h2", id: "paralelo", text: "Validar en paralelo" },
      {
        type: "p",
        text: "Antes de redirigir el tráfico, el módulo nuevo puede ejecutarse en sombra: recibe las mismas solicitudes, calcula resultados y se comparan con los del sistema original. Las diferencias revelan reglas de negocio que nadie había documentado.",
      },
      { type: "h2", id: "retiro", text: "Planificar el retiro desde el inicio" },
      {
        type: "p",
        text: "El estrangulamiento solo termina cuando se apaga el sistema anterior. Incluir el retiro en el plan desde el principio evita mantener dos sistemas indefinidamente, que es el riesgo principal de este enfoque.",
      },
    ],
  },
  {
    slug: "evaluar-soluciones-ia-generativa",
    title: "Antes de elegir modelo, construya su conjunto de evaluación",
    excerpt:
      "La calidad de una solución de IA generativa no se demuestra con ejemplos sueltos. Se mide con un conjunto de evaluación representativo.",
    category: "Inteligencia artificial",
    author: "Tomás Ibarra",
    date: "2026-09-30",
    image: "ai-hand",
    body: [
      {
        type: "p",
        text: "Las demostraciones de IA generativa suelen ser impresionantes. El problema aparece en producción, cuando la variedad real de consultas revela errores que nadie probó. La diferencia entre un piloto y una solución confiable es casi siempre la evaluación.",
      },
      { type: "h2", id: "conjunto", text: "Qué es un conjunto de evaluación" },
      {
        type: "p",
        text: "Es una colección de entradas reales con la respuesta esperada o los criterios que una buena respuesta debe cumplir. Se construye con expertos del negocio y se mantiene como un activo del proyecto, igual que el código.",
      },
      {
        type: "ul",
        items: [
          "Casos frecuentes, que representan el volumen.",
          "Casos difíciles, que representan el riesgo.",
          "Casos fuera de alcance, para verificar que el sistema sabe decir que no.",
        ],
      },
      { type: "h2", id: "metricas", text: "Métricas que importan" },
      {
        type: "p",
        text: "La exactitud es solo una dimensión. En un asistente de soporte también importa si la respuesta cita la fuente correcta, si el tono es adecuado y cuánto cuesta cada consulta. Definir esas métricas antes de construir evita discusiones subjetivas después.",
      },
      {
        type: "quote",
        text: "Si no puede medir si la versión nueva es mejor que la anterior, no está listo para cambiar de versión.",
      },
      { type: "h2", id: "produccion", text: "La evaluación continúa en producción" },
      {
        type: "p",
        text: "Las consultas reales cambian con el tiempo. Revisar una muestra periódica con personas expertas y añadir los casos nuevos al conjunto de evaluación mantiene la calidad bajo control y documenta el comportamiento del sistema.",
      },
    ],
  },
  {
    slug: "finops-cultura-de-costos-cloud",
    title: "FinOps no es recortar gastos: es decidir con información",
    excerpt:
      "La factura cloud crece cuando nadie es responsable de ella. FinOps convierte el costo en una variable de diseño.",
    category: "Cloud",
    author: "Irene Castellanos",
    date: "2026-09-16",
    image: "dc-hall",
    body: [
      {
        type: "p",
        text: "Una de las promesas de la nube es pagar solo por lo que se usa. En la práctica, muchas organizaciones pagan por lo que olvidaron apagar. FinOps es la disciplina que conecta ingeniería, finanzas y negocio para que el gasto cloud sea visible y deliberado.",
      },
      { type: "h2", id: "visibilidad", text: "Visibilidad por producto" },
      {
        type: "p",
        text: "El primer paso es saber quién gasta qué. Una política de etiquetado aplicada automáticamente permite atribuir cada recurso a un producto, un entorno y un responsable. Sin esa atribución, cualquier optimización es una conjetura.",
      },
      { type: "h2", id: "unidad", text: "Costo por unidad de negocio" },
      {
        type: "p",
        text: "El gasto total puede subir por buenas razones, como un aumento de clientes. Por eso conviene medir el costo por unidad: por transacción, por cliente activo o por pedido. Esa métrica indica si la eficiencia mejora o empeora.",
      },
      {
        type: "ul",
        items: [
          "Etiquetado obligatorio desde la infraestructura como código.",
          "Presupuestos y alertas por producto.",
          "Revisión mensual con los equipos responsables.",
        ],
      },
      { type: "h2", id: "optimizacion", text: "Optimizar en el orden correcto" },
      {
        type: "p",
        text: "Primero se eliminan recursos ociosos, después se ajusta el tamaño de los que se usan y, solo al final, se negocian compromisos de consumo. Invertir ese orden lleva a comprometer capacidad que luego sobra.",
      },
    ],
  },
  {
    slug: "una-sola-definicion-de-venta",
    title: "Siete definiciones de «venta»: el costo oculto de los datos sin gobierno",
    excerpt:
      "Cuando cada área calcula sus indicadores a su manera, las reuniones se dedican a conciliar cifras. La solución empieza por un diccionario.",
    category: "Datos",
    author: "Tomás Ibarra",
    date: "2026-08-27",
    image: "analytics-panels",
    body: [
      {
        type: "p",
        text: "En casi todos los diagnósticos de datos encontramos el mismo síntoma: un indicador central —ventas, margen, clientes activos— tiene varias definiciones en uso. Cada una es razonable por separado; juntas impiden decidir.",
      },
      { type: "h2", id: "diccionario", text: "El diccionario de indicadores" },
      {
        type: "p",
        text: "Un diccionario de indicadores documenta para cada métrica su definición en lenguaje de negocio, su fórmula, sus fuentes y su responsable. Acordarlo exige negociación entre áreas, y ese es precisamente su valor.",
      },
      { type: "h2", id: "semantica", text: "De documento a capa semántica" },
      {
        type: "p",
        text: "Un diccionario en un documento se desactualiza. La práctica recomendable es implementarlo como una capa semántica: las métricas se definen una vez en código versionado y todas las herramientas de visualización las consumen desde allí.",
      },
      {
        type: "ul",
        items: [
          "Definiciones versionadas y revisadas como cualquier código.",
          "Pruebas automáticas que validan resultados esperados.",
          "Linaje visible desde el tablero hasta la fuente.",
        ],
      },
      { type: "h2", id: "adopcion", text: "La adopción es el verdadero entregable" },
      {
        type: "p",
        text: "Un indicador certificado que nadie consulta no cambia nada. Medir el uso de los tableros por audiencia y retirar los que no se usan es parte del trabajo, no un detalle posterior.",
      },
    ],
  },
  {
    slug: "seguridad-en-el-pipeline",
    title: "Seguridad en el pipeline: detectar antes de desplegar",
    excerpt:
      "Corregir una vulnerabilidad en producción cuesta mucho más que evitarla en el desarrollo. Cómo integrar controles sin frenar a los equipos.",
    category: "Ciberseguridad",
    author: "Daniel Okafor",
    date: "2026-08-12",
    image: "security-circuit",
    body: [
      {
        type: "p",
        text: "La seguridad tradicional revisaba aplicaciones al final del ciclo, poco antes de su publicación. Con equipos que despliegan varias veces por semana, ese modelo se convierte en un cuello de botella o, peor, en una formalidad que se omite.",
      },
      { type: "h2", id: "controles", text: "Controles automáticos en cada cambio" },
      {
        type: "ul",
        items: [
          "Análisis estático de código en cada solicitud de cambio.",
          "Revisión de dependencias con vulnerabilidades conocidas.",
          "Detección de secretos expuestos antes de llegar al repositorio.",
          "Escaneo de imágenes de contenedores y configuración de infraestructura.",
        ],
      },
      { type: "h2", id: "ruido", text: "Menos ruido, más señal" },
      {
        type: "p",
        text: "Una herramienta que genera cientos de alertas irrelevantes enseña a los equipos a ignorarlas. Conviene empezar con reglas de alta precisión, bloquear solo hallazgos críticos y ampliar la cobertura de forma gradual.",
      },
      { type: "h2", id: "amenazas", text: "Modelado de amenazas ligero" },
      {
        type: "p",
        text: "Las herramientas automáticas no detectan errores de diseño. Una sesión breve de modelado de amenazas al iniciar cada funcionalidad relevante —qué podría salir mal y cómo lo evitaríamos— previene problemas que ningún escáner encontraría.",
      },
      {
        type: "quote",
        text: "La seguridad que no está en el flujo de trabajo de los equipos termina fuera de él.",
      },
    ],
  },
  {
    slug: "transformacion-digital-empieza-en-procesos",
    title: "La transformación digital empieza en el proceso, no en la herramienta",
    excerpt:
      "Digitalizar un proceso ineficiente produce un proceso ineficiente más rápido. Por qué el rediseño debe preceder a la tecnología.",
    category: "Transformación digital",
    author: "Martín Salvatierra",
    date: "2026-07-29",
    image: "whiteboard-sketch",
    body: [
      {
        type: "p",
        text: "Es frecuente que una iniciativa de transformación comience con la compra de una plataforma. Meses después, el proceso sigue igual, ahora dentro de una pantalla nueva. La tecnología amplifica el diseño del proceso, para bien o para mal.",
      },
      { type: "h2", id: "observar", text: "Observar el trabajo real" },
      {
        type: "p",
        text: "Los procesos documentados rara vez coinciden con los que se ejecutan. Acompañar a las personas mientras trabajan revela atajos, hojas de cálculo paralelas y aprobaciones que solo existen por costumbre.",
      },
      { type: "h2", id: "eliminar", text: "Eliminar antes de automatizar" },
      {
        type: "ul",
        items: [
          "Aprobaciones que nunca rechazan nada.",
          "Datos que se capturan pero nadie consulta.",
          "Pasos que existen para compensar errores de un paso anterior.",
        ],
      },
      { type: "h2", id: "medir", text: "Medir el flujo completo" },
      {
        type: "p",
        text: "Optimizar un área puede empeorar el resultado total si traslada la espera a otra. Medir el tiempo de extremo a extremo —desde la solicitud del cliente hasta su resolución— evita mejoras locales que no se notan fuera.",
      },
      { type: "h2", id: "personas", text: "Diseñar con quienes ejecutan" },
      {
        type: "p",
        text: "Las personas que operan el proceso conocen sus excepciones mejor que nadie. Incluirlas en el diseño mejora la solución y reduce la resistencia al cambio, que es la principal causa de fracaso de estas iniciativas.",
      },
    ],
  },
  {
    slug: "metricas-dora-para-direccion",
    title: "Métricas DORA explicadas para la alta dirección",
    excerpt:
      "Cuatro indicadores permiten saber si un equipo de software entrega con velocidad y estabilidad. Qué significan y cómo usarlos.",
    category: "Desarrollo de software",
    author: "Lucía Ferrer",
    date: "2026-07-15",
    image: "code-laptop",
    body: [
      {
        type: "p",
        text: "La pregunta «¿qué tan bien entrega nuestro equipo de software?» suele responderse con percepciones. Las métricas DORA, surgidas de años de investigación sobre equipos de ingeniería, ofrecen una respuesta objetiva y comparable.",
      },
      { type: "h2", id: "cuatro", text: "Las cuatro métricas" },
      {
        type: "ul",
        items: [
          "Frecuencia de despliegue: con qué frecuencia llega un cambio a producción.",
          "Tiempo de entrega de cambios: cuánto tarda un cambio desde que se confirma hasta que está en producción.",
          "Tasa de fallos de cambio: qué proporción de despliegues provoca un incidente.",
          "Tiempo de restauración: cuánto se tarda en recuperar el servicio tras un fallo.",
        ],
      },
      { type: "h2", id: "equilibrio", text: "Velocidad y estabilidad no se oponen" },
      {
        type: "p",
        text: "La conclusión más relevante de esta investigación es que los equipos de alto desempeño son, al mismo tiempo, más rápidos y más estables. Los cambios pequeños y frecuentes son más fáciles de probar y de revertir.",
      },
      { type: "h2", id: "uso", text: "Cómo usarlas sin distorsionarlas" },
      {
        type: "p",
        text: "Estas métricas sirven para que un equipo mejore respecto de sí mismo, no para comparar equipos ni para evaluar personas. Convertirlas en objetivos individuales incentiva manipularlas y destruye su valor.",
      },
    ],
  },
  {
    slug: "arquitectura-orientada-a-eventos-cuando-si",
    title: "Arquitectura orientada a eventos: cuándo sí y cuándo no",
    excerpt:
      "Los eventos desacoplan sistemas y habilitan el tiempo real, pero añaden complejidad operativa. Criterios para decidir.",
    category: "Arquitectura",
    author: "Lucía Ferrer",
    date: "2026-06-24",
    image: "network-fiber-panel",
    body: [
      {
        type: "p",
        text: "La arquitectura orientada a eventos se ha convertido en una recomendación habitual para sistemas modernos. Como cualquier patrón, resuelve problemas concretos y crea otros nuevos.",
      },
      { type: "h2", id: "cuando-si", text: "Cuándo conviene" },
      {
        type: "ul",
        items: [
          "Varios sistemas necesitan reaccionar al mismo hecho de negocio.",
          "Se requiere información en tiempo casi real entre dominios.",
          "Los productores no deben conocer a sus consumidores.",
          "Es útil reconstruir el historial de cambios.",
        ],
      },
      { type: "h2", id: "cuando-no", text: "Cuándo no" },
      {
        type: "p",
        text: "Si un proceso necesita una respuesta inmediata y consistente —por ejemplo, confirmar un pago antes de mostrar el resultado al cliente—, una llamada síncrona suele ser más simple. Los eventos introducen consistencia eventual, y no todos los procesos la toleran.",
      },
      { type: "h2", id: "requisitos", text: "Requisitos operativos" },
      {
        type: "p",
        text: "Adoptar eventos exige esquemas versionados, trazabilidad de mensajes, estrategias de reprocesamiento y monitoreo de colas. Sin estas prácticas, un sistema basado en eventos es más difícil de depurar que uno tradicional.",
      },
      {
        type: "quote",
        text: "Un evento es un contrato público: diseñarlo con el mismo cuidado que una API.",
      },
    ],
  },
  {
    slug: "zero-trust-por-donde-empezar",
    title: "Zero Trust: por dónde empezar sin un gran proyecto",
    excerpt:
      "Zero Trust es un modelo, no un producto. Tres pasos concretos para avanzar desde el primer trimestre.",
    category: "Ciberseguridad",
    author: "Daniel Okafor",
    date: "2026-06-10",
    image: "security-rings",
    body: [
      {
        type: "p",
        text: "El modelo Zero Trust parte de una idea simple: ninguna conexión es confiable por estar dentro de la red corporativa. Cada acceso se verifica según identidad, dispositivo y contexto. Su adopción completa toma años, pero los primeros pasos aportan valor inmediato.",
      },
      { type: "h2", id: "identidad", text: "1. Identidad fuerte para todos" },
      {
        type: "p",
        text: "La autenticación multifactor en todas las cuentas, empezando por las privilegiadas, es la medida con mejor relación entre esfuerzo y reducción de riesgo. Acompañarla de un proveedor de identidad central simplifica la gestión de accesos.",
      },
      { type: "h2", id: "privilegios", text: "2. Privilegios mínimos y temporales" },
      {
        type: "p",
        text: "Las cuentas con permisos permanentes de administración son un objetivo prioritario para cualquier atacante. Sustituirlas por accesos elevados bajo solicitud, con duración limitada y registro, reduce drásticamente la superficie de ataque.",
      },
      { type: "h2", id: "aplicaciones", text: "3. Acceso por aplicación" },
      {
        type: "ul",
        items: [
          "Publicar aplicaciones internas detrás de un proxy con verificación de identidad.",
          "Reducir el uso de VPN de acceso amplio.",
          "Registrar y revisar los accesos a aplicaciones críticas.",
        ],
      },
    ],
  },
  {
    slug: "datos-para-ia-calidad-primero",
    title: "No hay IA confiable sin datos confiables",
    excerpt:
      "Los proyectos de IA heredan los problemas de los datos que los alimentan. Qué revisar antes de entrenar o conectar un modelo.",
    category: "Datos",
    author: "Tomás Ibarra",
    date: "2026-05-20",
    image: "analytics-map",
    body: [
      {
        type: "p",
        text: "En los proyectos de IA que fracasan, el modelo rara vez es el culpable. Lo habitual es encontrar datos incompletos, definiciones inconsistentes o documentos desactualizados que el sistema reproduce con total seguridad.",
      },
      { type: "h2", id: "predictivos", text: "Para modelos predictivos" },
      {
        type: "ul",
        items: [
          "Historial suficiente y representativo del periodo a predecir.",
          "Etiquetas confiables: ¿quién decidió que un caso era fraude o una falla?",
          "Variables disponibles en el momento de la predicción, no después.",
        ],
      },
      { type: "h2", id: "generativos", text: "Para soluciones generativas" },
      {
        type: "p",
        text: "Un asistente que responde a partir de documentos internos es tan bueno como esos documentos. Antes de conectarlos conviene eliminar versiones obsoletas, resolver contradicciones y asignar responsables de mantenimiento.",
      },
      { type: "h2", id: "permisos", text: "Permisos y privacidad" },
      {
        type: "p",
        text: "Un sistema de IA no debe dar acceso a información que el usuario no podría consultar directamente. Los permisos de las fuentes deben respetarse en cada respuesta, y los datos personales tratarse según las políticas aplicables.",
      },
    ],
  },
  {
    slug: "equipos-de-producto-vs-proyectos",
    title: "De proyectos a productos: cambiar la unidad de gestión",
    excerpt:
      "Los proyectos terminan; los productos evolucionan. Por qué organizar la tecnología alrededor de productos mejora resultados.",
    category: "Transformación digital",
    author: "Valeria Montes",
    date: "2026-05-06",
    image: "team-meeting",
    body: [
      {
        type: "p",
        text: "Durante décadas, la tecnología se gestionó por proyectos: alcance, presupuesto y fecha de fin. El modelo funciona para iniciativas acotadas, pero no para sistemas que deben evolucionar de forma continua.",
      },
      { type: "h2", id: "problema", text: "El problema de los proyectos" },
      {
        type: "p",
        text: "Cuando un proyecto termina, el equipo se disuelve y el conocimiento se dispersa. Las mejoras posteriores esperan al siguiente presupuesto y el sistema envejece entre proyecto y proyecto.",
      },
      { type: "h2", id: "producto", text: "Qué cambia con un modelo de producto" },
      {
        type: "ul",
        items: [
          "Equipos estables responsables de un producto o flujo de valor.",
          "Financiamiento por capacidad del equipo, no por proyecto.",
          "Éxito medido por resultados de negocio, no por entregas a tiempo.",
        ],
      },
      { type: "h2", id: "transicion", text: "Cómo hacer la transición" },
      {
        type: "p",
        text: "No es necesario reorganizar toda el área de una vez. Funciona mejor empezar con dos o tres productos con dueños claros, medir sus resultados durante algunos trimestres y extender el modelo con la evidencia obtenida.",
      },
      {
        type: "quote",
        text: "Un producto nunca está terminado; está en su mejor versión hasta la siguiente.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

function blockText(block: ArticleBlock): string {
  return block.type === "ul" ? block.items.join(" ") : block.text;
}

/** Tiempo de lectura estimado a 200 palabras por minuto. */
export function readingTime(article: Article): number {
  const words = article.body.map(blockText).join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export function toArticleSummary(article: Article) {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    date: article.date,
    image: article.image,
    author: article.author,
    readingTime: readingTime(article),
  };
}
