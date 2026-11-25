# Registro de progreso — Norvia Consulting

Registro de trabajo para retomar el contexto entre sesiones. Se actualiza al cerrar cada fase.

## Encargo

Sitio corporativo multipágina (exportación estática) para Norvia, consultora tecnológica ficticia; publicación en GitHub, despliegue en Vercel, subdominio `norvia.kaled.dev` en Cloudflare y alta en el portafolio `kaled.dev/admin`.

## Estado

| Fase                            | Estado       |
| ------------------------------- | ------------ |
| 3 — Inicialización técnica      | ✅ Completa  |
| 4 — Identidad de marca          | ✅ Completa  |
| 5 — Arquitectura de información | ✅ Completa  |
| 6 — Sistema de diseño           | ✅ Completa  |
| 7 — Desarrollo frontend         | ✅ Completa  |
| 8 — Optimización y QA           | ✅ Completa  |
| 9 — GitHub                      | ⏳ Pendiente |
| 10 — Despliegue (Vercel)        | ⏳ Pendiente |
| 11 — Dominio (Cloudflare)       | ⏳ Pendiente |
| 12 — Portafolio (kaled.dev)     | ⏳ Pendiente |

## Bitácora

### Fase 3

- Next.js 16.4.6 (App Router, `src/`, alias `@/*`), React 19.3, TypeScript 5.9 estricto, Tailwind CSS 4.3 (vía `@tailwindcss/turbopack`), pnpm 11.25.0.
- `next.config.ts`: `output: "export"`, `trailingSlash: true`, loader de imágenes propio (`src/lib/image-loader.ts`).
- shadcn/ui (base `@base-ui/react`, estilo `base-nova`): accordion, button, dialog, input, label, select, sheet, tabs, textarea.
- Librerías: motion, lucide-react, zustand, react-hook-form, zod, @hookform/resolvers, recharts.
- ESLint (next core-web-vitals + typescript + eslint-config-prettier) y Prettier con prettier-plugin-tailwindcss.
- `pnpm check` y `pnpm build` correctos; se genera `out/`.

### Fases 4–7

- Identidad: concepto «Tecnología con rumbo», paleta petróleo/tinta/polar/señal, Schibsted Grotesk + JetBrains Mono, isotipo SVG, favicon, icono Apple e imagen social (`docs/brand-identity.md`).
- 74 páginas HTML estáticas (`docs/sitemap.md`): 8 servicios, 8 soluciones, 8 industrias, 12 casos, 8 integrantes, 10 vacantes, 12 artículos.
- Tokens en `src/app/globals.css`, componentes propios y shadcn reestilizado (`docs/design-system.md`).
- 58 fotografías de Unsplash (licencia gratuita verificada) en WebP 640/1280/1920 (`docs/image-credits.md`).

### Fase 8

- `pnpm check`, `pnpm build`, `pnpm check:links` (74 páginas, 0 enlaces rotos) y `pnpm check:contrast` (20 pares AA) correctos.
- QA en Chrome: mega menú (ratón, teclado, Escape), filtros/búsqueda/URL/estado vacío, formulario (errores, foco en el primer error, resultado demostrativo), gráficas Recharts. Capturas headless en 360, 390, 768, 1024 y 1440 px.
- Correcciones: nombres de servicio en minúsculas, foco del formulario en el último campo, navegación partida a 1024 px, contraste de pestañas inactivas, foto decorativa del hero oculta en móvil (era el elemento LCP), OG/apple-icon como PNG estáticos.
- Lighthouse local (servidor Python sin compresión ni caché): escritorio 95–97 / 97–100 / 100 / 100; móvil 72–73 en rendimiento por falta de compresión y LCP de la foto decorativa (corregido). Se vuelve a medir en producción.
