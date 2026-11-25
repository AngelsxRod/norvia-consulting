# Identidad de marca — Norvia

> Norvia es una marca **ficticia** creada como proyecto de portafolio. Clientes, cifras, personas y vacantes son ilustrativos.

## 1. Estrategia corporativa

| Elemento                 | Definición                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Nombre**               | Norvia = _norte / north_ (rumbo, dirección) + _vía / via_ (camino).                                                                                                                                                      |
| **Concepto central**     | «Rumbo verificable»: dar dirección a la transformación tecnológica y recorrerla con pasos medibles.                                                                                                                      |
| **Propósito**            | Dar dirección a la transformación tecnológica de las empresas para que cada inversión tenga un rumbo claro.                                                                                                              |
| **Misión**               | Convertir la complejidad tecnológica en soluciones concretas, escalables y comprensibles, junto a los equipos de nuestros clientes.                                                                                      |
| **Visión**               | Ser la consultora de referencia en Latinoamérica por la claridad de sus decisiones y la autonomía que deja en cada organización.                                                                                         |
| **Propuesta de valor**   | Planes priorizados, entregas frecuentes y resultados medidos contra una línea base acordada — del diagnóstico a la operación.                                                                                            |
| **Posicionamiento**      | Consultora tecnológica independiente para empresas medianas y grandes: más rigurosa que una agencia de desarrollo, más cercana a la ejecución que una consultora estratégica tradicional.                                |
| **Público objetivo**     | Direcciones de tecnología (CIO/CTO), direcciones de operaciones y transformación, y comités directivos de empresas B2B con sistemas heredados y presión por modernizarse.                                                |
| **Eslogan**              | **Tecnología con rumbo.**                                                                                                                                                                                                |
| **Mensajes secundarios** | «Del diagnóstico a la operación, sin perder el norte.» · «Convertimos la complejidad tecnológica en decisiones claras.» · «Lo que no se mide no se promete.» · «Un método que empieza midiendo y termina transfiriendo.» |

### Valores

1. **Claridad antes que complejidad** — cada decisión técnica se explica en términos de negocio.
2. **Rigor medible** — líneas base, hipótesis y métricas acordadas.
3. **Criterio independiente** — sin reventa de licencias ni comisiones.
4. **Continuidad operativa** — se diseña para que el cliente opere sin Norvia.
5. **Apertura y colaboración** — equipos mixtos y decisiones visibles.

### Diferenciadores

Diagnóstico con evidencia · Arquitectura como mapa · Entrega incremental · Equipos que transfieren.

### Personalidad y tono

- **Personalidad:** sereno, preciso, directo, curioso. Un arquitecto senior que explica sin condescendencia.
- **Tono:** usted formal en la relación comercial, frases cortas, verbos concretos, cifras solo cuando se pueden sustentar (y marcadas como simuladas en este sitio).
- **Evita:** «soluciones disruptivas», «líderes del mercado», «sinergias», promesas absolutas y superlativos sin dato.

### Narrativa corporativa

Norvia nació de la frustración de sus fundadores con proyectos que prometían transformación y entregaban documentos. Su respuesta fue un método que empieza midiendo, avanza con entregas pequeñas y termina cuando el cliente puede operar solo. El norte es la dirección acordada con el negocio; la vía, el camino verificable para llegar.

## 2. Dirección artística

Inspiración: consultoras tecnológicas internacionales, cartografía, instrumentos de navegación, visualización de información y retículas editoriales. El resultado busca sentirse **consolidado y técnico**, no una landing de startup:

- Composiciones **asimétricas** sobre una retícula de 12 columnas, con etiquetas laterales fijas (sticky) y contenido a la derecha.
- **Retícula de coordenadas** (líneas de 48 px) como textura de fondo en secciones oscuras.
- Numeración tipo coordenada (`01 / 08`, `S03`, `N02`) en monoespaciada.
- Superficies planas, bordes de 1 px y radios casi rectos (2–6 px). Sombras solo en capas flotantes.
- Sin gradientes decorativos, glassmorphism ni partículas. El único degradado es funcional (legibilidad del hero sobre fotografía).

## 3. Identidad visual

### Logotipo e isotipo

El isotipo es una **«N» trazada como un recorrido continuo** (subida, diagonal, subida) cuyo trazo final termina en una **aguja triangular que apunta al norte**. Combina la inicial, la idea de camino y la de dirección.

| Variante            | Archivo                                                                     | Uso                                            |
| ------------------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| Isotipo (color)     | `public/brand/norvia-mark.svg`                                              | Fondos claros                                  |
| Isotipo invertido   | `public/brand/norvia-mark-reverse.svg`                                      | Fondos oscuros, avatares                       |
| Logotipo horizontal | `public/brand/norvia-logo.svg`                                              | Documentos, firmas                             |
| Logotipo monocromo  | `public/brand/norvia-logo-mono.svg`                                         | Impresión a una tinta                          |
| Componente React    | `src/components/brand/logo.tsx`                                             | `Logo` y `LogoMark` (color de acento por prop) |
| Favicon             | `src/app/icon.svg`                                                          | Pestaña del navegador                          |
| Icono Apple         | `src/app/apple-icon.png`                                                    | Accesos directos iOS                           |
| Imagen social       | `src/app/opengraph-image.png` (1200×630) y `public/brand/norvia-social.png` | Open Graph / Twitter                           |

Logotipo: isotipo + «norvia» en minúsculas (Schibsted Grotesk semibold, tracking −0,04 em) + descriptor opcional «CONSULTING» en monoespaciada.

### Paleta

| Rol              | Nombre                                                                              | Hex                   | Uso principal                               |
| ---------------- | ----------------------------------------------------------------------------------- | --------------------- | ------------------------------------------- |
| Primario oscuro  | Tinta                                                                               | `#0B1F24`             | Texto, botones primarios, footer            |
| Primario         | Petróleo                                                                            | `#12343B`             | Héroes y secciones oscuras                  |
| Acento funcional | Polar                                                                               | `#0F6B63`             | Enlaces, foco, estados activos sobre claro  |
| Acento de señal  | Señal                                                                               | `#C8F169`             | CTA y acentos **solo sobre fondos oscuros** |
| Fondo            | Papel                                                                               | `#F4F5F1`             | Fondo general                               |
| Superficie       | Niebla                                                                              | `#E7EBE6`             | Secciones alternas                          |
| Texto secundario | Pizarra                                                                             | `#4A5A5E`             | Párrafos secundarios                        |
| Líneas           | Línea / Línea fuerte                                                                | `#C3CCC7` / `#7D8B88` | Divisores / bordes de controles             |
| Datos            | Ámbar                                                                               | `#B86E12`             | Serie complementaria en gráficas            |
| Semánticos       | Éxito `#1D6B3F` · Advertencia `#8A5A00` · Peligro `#A3261B` · Información `#0F6B63` |                       |                                             |

La paleta evita deliberadamente los degradados morado-azul habituales: combina un verde petróleo profundo con un acento lima de «señal» (como los indicadores de un instrumento). Contraste verificado con `pnpm check:contrast` (todos los pares de texto ≥ 4,5:1).

### Tipografía

- **Schibsted Grotesk** (400–700): titulares y texto. Grotesca editorial con carácter, buena legibilidad en español.
- **JetBrains Mono** (400–500): etiquetas, coordenadas, datos y metadatos.
- Ambas se autoalojan con `next/font` (sin peticiones a Google en tiempo de ejecución).
- Jerarquía fluida: `display` 2,6→5,5 rem · `h1` 2,2→4,25 · `h2` 1,75→3 · `h3` 1,3→1,75 · `lead` 1,08→1,3 · `eyebrow` 0,75 rem mayúsculas con tracking 0,12 em.

### Iconografía y lenguaje gráfico

- **Pictogramas propios** (`src/components/brand/pictogram.tsx`): 16 iconos lineales de 1,5 px sobre retícula de 32 px, cada uno con un único punto de acento que marca la «dirección» del concepto. Lucide se usa solo para iconos utilitarios (flechas, menú, cerrar).
- **Diagramas originales:** ruta de transformación del hero (SVG animado con CSS), diagramas de arquitectura por capas, brújula del CTA y de la página 404, monogramas generativos del equipo.
- **Marcas de registro:** esquinas en color señal alrededor de las fotografías de cabecera.

### Fotografía

Fotografía documental de entornos reales de tecnología (centros de datos, redes, equipos trabajando, industria), con luz natural y encuadres limpios. Sin personas reconocibles atribuidas al equipo ficticio, sin edificios emblemáticos ni marcas visibles. Créditos en [`image-credits.md`](./image-credits.md).

### Ilustración

No se usan ilustraciones de stock. Todo recurso gráfico no fotográfico es SVG original basado en geometría, coordenadas y trayectorias.

### Recursos para redes sociales

Imagen social 1200×630 con isotipo, eslogan, URL y la mención «Marca ficticia · Proyecto de portafolio».
