# Arquitectura — Norvia Consulting

Sitio **exclusivamente frontend**, generado como exportación estática de Next.js (`output: "export"`). No hay servidor Node.js en producción, backend, base de datos, autenticación, API Routes ni Server Actions.

## Stack

| Capa             | Tecnología                                                                                                       | Uso                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Framework        | Next.js 16.4.6 (App Router, Turbopack) · React 19.3                                                              | Rutas, layouts, Server Components, SSG con `generateStaticParams` |
| Lenguaje         | TypeScript 5.9 (`strict`)                                                                                        | Contratos de datos en `src/types/content.ts`                      |
| Estilos          | Tailwind CSS 4.3 (`@theme`, vía `@tailwindcss/turbopack`)                                                        | Tokens de diseño y utilidades                                     |
| Componentes base | shadcn/ui sobre Base UI (`@base-ui/react`)                                                                       | Accordion, Dialog, Sheet, Tabs (reestilizados)                    |
| Movimiento       | Motion 14                                                                                                        | Mega menú, filtros, diagramas, contadores, revelado               |
| Iconos           | Lucide React + pictogramas SVG propios                                                                           | Iconos utilitarios / iconografía de marca                         |
| Estado global    | Zustand 5 (`persist` en LocalStorage)                                                                            | Lista de lectura compartida entre botones «Guardar» y el header   |
| Formularios      | React Hook Form 7 · Zod 4 · @hookform/resolvers 7                                                                | Contacto y postulación (validación en cliente)                    |
| Gráficas         | Recharts 3 (carga diferida, sin SSR)                                                                             | Resultados simulados de casos de éxito                            |
| Calidad          | ESLint 9 (next core-web-vitals + typescript + eslint-config-prettier) · Prettier 3 + prettier-plugin-tailwindcss | Lint y formato                                                    |
| Paquetes         | pnpm 11.25.0 (`packageManager`)                                                                                  |                                                                   |

Dependencias auxiliares instaladas por shadcn: `@base-ui/react`, `class-variance-authority`, `cn` (fusión de clases compatible con Tailwind, sustituto de `clsx` + `tailwind-merge`), `tw-animate-css` y `shadcn` (aporta `shadcn/tailwind.css`). No se añadieron otras dependencias.

## Estructura

```
src/
├── app/                 Rutas (App Router), metadatos, sitemap, robots, iconos, 404
│   ├── layout.tsx       Fuentes, metadata global, Header/Footer, JSON-LD Organization
│   ├── page.tsx         Inicio
│   └── <ruta>/[slug]/   Rutas dinámicas con generateStaticParams + generateMetadata
├── components/
│   ├── brand/           Logo, isotipo y pictogramas SVG
│   ├── layout/          Header, mega menú, menú móvil, footer, breadcrumbs, secciones
│   ├── media/           Photo (next/image + loader propio) y créditos
│   ├── shared/          Componentes corporativos reutilizables
│   └── ui/              Primitivas de interfaz
├── features/            Módulos interactivos (Client Components)
│   ├── case-studies/    Catálogo filtrable y gráficas
│   ├── insights/        Catálogo de publicaciones
│   ├── careers/         Vacantes filtrables y formulario de postulación
│   ├── contact/         Formulario, esquemas Zod y resultado demostrativo
│   ├── filters/         FilterBar, SearchInput, FilterSelect, ResultsCounter
│   ├── home/            Diagrama de ruta del hero y pestañas de colaboración
│   └── methodology/     Índice interactivo de etapas
├── data/                Contenido tipado (servicios, soluciones, industrias, casos, equipo, vacantes, artículos…)
├── hooks/               useQueryState, useFilteredCollection, useSavedHydration
├── lib/                 utils (cn), images, metadata, format, image-loader
├── stores/              saved-store (Zustand)
└── types/               content.ts
public/
├── brand/               Variantes de logotipo e imagen social
└── images/              58 fotografías × 3 anchos en WebP
scripts/                 fetch-images, check-links, check-contrast, screenshot
docs/                    Documentación del proyecto
```

## Decisiones

- **Server Components por defecto.** Solo son Client Components los módulos con interactividad real: header/mega menú/menú móvil, catálogos con filtros, formularios, diagramas, gráficas, contadores, `Reveal`, guardados y pestañas.
- **Datos ligeros hacia el cliente.** Las páginas pasan a los catálogos objetos resumidos (`CaseStudyListItem`, `ArticleSummary`) en lugar de los documentos completos; el header recibe solo nombre, enlace y descripción de cada elemento del mega menú.
- **Filtros en la URL sin `Suspense`.** `useQueryState` usa `useSyncExternalStore` con instantánea de servidor vacía: el HTML estático contiene el catálogo completo (página 1) y, al hidratar, los filtros se leen y escriben en la query string (`?industria=…&q=…&pagina=2`) con `history.replaceState`.
- **Imágenes sin optimizador.** Un loader propio (`src/lib/image-loader.ts`) mapea `next/image` a variantes WebP pregeneradas de 640/1280/1920 px.
- **Recharts diferido.** `next/dynamic` con `ssr: false` solo en el detalle de caso; cada gráfica tiene una tabla de datos accesible.
- **Contenido siempre visible.** El revelado anima únicamente elementos fuera de pantalla tras la hidratación; el trazo del hero es CSS puro; la metodología renderiza todas las etapas y el índice es una mejora progresiva.
- **Formularios honestos.** Tras validar, se muestra explícitamente que no se envió ni almacenó nada. No se piden documentos ni datos sensibles.
- **Zustand con criterio.** Solo para la lista de lectura, que comparten componentes en distintas partes del árbol (botón «Guardar» y panel del header). Se rehidrata tras el montaje (`skipHydration`) para no producir diferencias de hidratación.

## SEO

`metadataBase` y URL canónica por página (`NEXT_PUBLIC_SITE_URL`, por defecto `https://norvia.kaled.dev`), títulos y descripciones únicos, Open Graph y Twitter Cards (imagen de marca o fotografía de la página), `sitemap.xml` con 74 URL, `robots.txt`, JSON-LD `Organization` (con la aclaración de marca ficticia, sin dirección ni registros), `BreadcrumbList` y `Article`. Las vacantes ficticias no usan `JobPosting` para no enviar ofertas falsas a buscadores.

## Accesibilidad

Enlace «Saltar al contenido», landmarks y jerarquía de encabezados, foco visible con `:focus-visible`, áreas táctiles ≥ 44 px, mega menú y menús operables con teclado, diálogos con trampa de foco (Base UI), formularios con `label`, `aria-invalid`, `aria-describedby` y foco en el primer error, contadores de resultados con `aria-live`, gráficas con tabla equivalente, contraste AA verificado con `pnpm check:contrast` y `prefers-reduced-motion` respetado.
