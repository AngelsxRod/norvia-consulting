# Sistema de diseño — Norvia

## Principios

1. **Jerarquía editorial** — titulares grandes y compactos, texto secundario en pizarra, etiquetas en monoespaciada.
2. **Asimetría controlada** — retícula de 12 columnas; etiqueta y título a la izquierda (4 col., sticky), contenido a la derecha (8 col.).
3. **Líneas antes que tarjetas** — listas separadas por filetes de 1 px; las «tarjetas» no tienen sombra ni fondo propio salvo excepciones.
4. **Alternancia de tonos** — papel, blanco, niebla, petróleo y tinta diferencian secciones sin recurrir a decoración.
5. **Movimiento funcional** — rápido, corto, respetuoso de `prefers-reduced-motion`; nunca oculta contenido si JavaScript falla.

## Tokens

Fuente única: `src/app/globals.css` (bloque `@theme` de Tailwind CSS 4). Todos los tokens generan utilidades (`bg-petrol`, `text-h2`, `py-section`, `ease-(--ease-out-norvia)`, etc.).

| Grupo        | Tokens                                                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Marca        | `ink`, `petrol`, `petrol-2`, `polar`, `polar-soft`, `signal`, `signal-strong`, `amber`, `amber-soft`                   |
| Neutros      | `paper`, `mist`, `fog`, `slate`, `line`, `line-strong`, `white`                                                        |
| Semánticos   | `success`, `warning`, `danger`, `info`                                                                                 |
| Sobre oscuro | `on-dark`, `on-dark-muted`, `on-dark-line`                                                                             |
| Tipografía   | `font-sans`, `font-heading`, `font-mono`; tamaños `display`, `h1`, `h2`, `h3`, `lead`, `eyebrow` (fluidos con `clamp`) |
| Contenedores | `container-prose` 42 rem · `container-content` 76 rem · `container-wide` 90 rem                                        |
| Espaciado    | `section` (4,5→9 rem), `section-sm`, `gutter` (1→2,5 rem)                                                              |
| Breakpoints  | Tailwind por defecto (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536) + `3xl` 1792                               |
| Radios       | `xs` 2 px · `sm` 3 px · `md` 4 px · `lg` 6 px · `xl` 8 px                                                              |
| Sombras      | `shadow-float` (capas flotantes) · `shadow-focus` (anillo de foco)                                                     |
| Movimiento   | `ease-out-norvia`, `ease-in-out-norvia`; `duration-fast` 140 ms, `base` 240 ms, `slow` 480 ms                          |

Las variables de shadcn (`--primary`, `--border`, `--ring`, `--chart-*`…) se remapean a la marca en `:root`.

Utilidades propias: `container-content`, `container-wide`, `eyebrow`, `bg-grid`, `bg-grid-dark`, `prose-norvia`.

## Componentes

### Layout (`src/components/layout`)

`Container` · `Section` (tonos paper/white/mist/ink/petrol) · `SectionHeading` (apilado o dividido) · `SplitSection` · `PageHero` · `Header` (servidor) + `SiteHeader` (cliente) · `MegaMenu` · `MobileNavigation` · `SavedItemsButton` · `Footer` · `Breadcrumbs` (con JSON-LD) · `LegalPage` · `MotionProvider`.

### Interfaz (`src/components/ui`)

`Button` (+ `buttonVariants`: default, signal, outline, outline-light, ghost, link) · `TextLink` · `Badge` (incl. variante `simulated`) · `Accordion` · `Dialog` · `Sheet` · `Tabs` · `Select` (nativo estilizado) · `Input` · `Textarea` · `FormField` (render-prop que inyecta `id`, `aria-invalid`, `aria-describedby`) · `EmptyState` · `Pagination`.

Accordion, Dialog, Sheet y Tabs parten de shadcn/ui (base **Base UI**) y se reestilizaron con los tokens. El `Select` es nativo para garantizar accesibilidad, funcionamiento sin JavaScript e integración directa con React Hook Form.

### Corporativos (`src/components/shared`)

`ServiceCard` · `SolutionCard` · `IndustryCard` · `CaseStudyCard` · `TeamMemberCard` (monograma generativo) · `JobCard` · `ArticleCard` · `TechnologyGrid` · `MetricsSection` + `CountUp` · `ProcessTimeline` · `RelatedContent` · `CallToAction` · `FeatureGrid` · `CheckList` · `FaqList` · `ArchitectureDiagram` (interactivo) · `SimulatedNote` · `SaveButton` · `Reveal`.

### Interactivos (`src/features`)

`FilterBar` · `SearchInput` · `FilterSelect` · `ResultsCounter` · `CaseStudyExplorer` · `ArticleExplorer` · `JobExplorer` · `ContactForm` · `ApplicationForm` · `CaseResults` → `ComparisonChart` / `TrendChart` (Recharts) · `MethodologyScroller` · `EngagementTabs` · `RouteMap`.

## Responsive

Revisado en 360, 390, 768, 1024, 1440 y 1920 px:

- **< 640 px:** una columna, CTA a ancho completo, header con logotipo, guardados y menú.
- **640–1023 px:** rejillas de 2 columnas, filtros en 2 columnas, menú lateral.
- **≥ 1024 px:** mega menú; secciones divididas 4/8; catálogos a 3 columnas. Entre 1024 y 1279 px se ocultan el descriptor del logotipo y el botón «Hablemos» del header para que la navegación no se parta.
- **≥ 1440 px:** contenedor `wide` de 90 rem centrado.

## Movimiento (Motion)

| Uso                       | Implementación                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Mega menú y menú Compañía | `AnimatePresence` + desplazamiento/opacidad, enlaces escalonados                    |
| Aparición de contenido    | `Reveal`: solo anima elementos fuera de la vista al hidratar (HTML siempre visible) |
| Indicadores               | `CountUp` con `animate()` al entrar en pantalla; el HTML ya tiene el valor final    |
| Filtros                   | `layout` + `AnimatePresence mode="popLayout"` en catálogos                          |
| Diagramas                 | `layoutId` para el indicador de capa activa; índice de metodología con `scaleY`     |
| Hero                      | Trazo de la ruta con keyframes CSS (sin JS)                                         |
| Hover                     | Transiciones CSS de color, desplazamiento de flechas y zoom suave de imágenes       |

`MotionConfig reducedMotion="user"` y una regla global `prefers-reduced-motion` desactivan las animaciones cuando el usuario lo solicita.
