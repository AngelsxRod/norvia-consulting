# Registro de progreso — Norvia Consulting

Registro de trabajo para retomar el contexto entre sesiones. Se actualiza al cerrar cada fase.

## Encargo

Sitio corporativo multipágina (exportación estática) para Norvia, consultora tecnológica ficticia; publicación en GitHub, despliegue en Vercel, subdominio `norvia.kaled.dev` en Cloudflare y alta en el portafolio `kaled.dev/admin`.

## Estado

| Fase                            | Estado      |
| ------------------------------- | ----------- |
| 3 — Inicialización técnica      | ✅ Completa |
| 4 — Identidad de marca          | ✅ Completa |
| 5 — Arquitectura de información | ✅ Completa |
| 6 — Sistema de diseño           | ✅ Completa |
| 7 — Desarrollo frontend         | ✅ Completa |
| 8 — Optimización y QA           | ✅ Completa |
| 9 — GitHub                      | ✅ Completa |
| 10 — Despliegue (Vercel)        | ✅ Completa |
| 11 — Dominio (Cloudflare)       | ✅ Completa |
| 12 — Portafolio (kaled.dev)     | ✅ Completa |

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

### Fase 9

- 16 commits Conventional Commits publicados en `origin/main` sin force push ni reescritura. Revisión previa: sin secretos, `.env*`, `node_modules`, `.next`, `out` ni `.vercel` en el índice; archivo más grande 860 KB.

### Fase 10

- Proyecto Vercel `norvia-consulting` creado y conectado a `AngelsxRod/norvia-consulting` (rama de producción `main`, preset Next.js, `pnpm install --frozen-lockfile`, `pnpm build`, Node 26.x, plan Hobby).
- Variable `NEXT_PUBLIC_SITE_URL=https://norvia.kaled.dev` (production, preview).
- Primer despliegue de producción `READY` desde GitHub (`main`), URL del proveedor https://norvia-consulting.vercel.app. Todas las rutas probadas responden 200, compresión Brotli, 404 personalizada.

### Fase 11

- Vercel: dominio `norvia.kaled.dev` añadido al proyecto (sin verificación TXT requerida).
- Cloudflare (zona `kaled.dev`): se comprobó que no existía ningún registro `norvia`. Se creó solo `CNAME norvia → 67b4b766321bf92e.vercel-dns-017.com`, TTL automático, **Solo DNS** (proxy desactivado). No se tocó ningún otro registro ni ajuste de la zona.
- Vercel marca la configuración como válida (`misconfigured: false`). Certificado Let's Encrypt emitido para `norvia.kaled.dev` (válido hasta el 24/02/2027, renovación automática).
- https://norvia.kaled.dev responde 200; HTTP redirige con 308 a HTTPS; rutas internas, imágenes, sitemap y robots verificados; sin errores de consola en Chrome.

### Fase 12

- Capturas reales del sitio publicado (Chrome headless, 1440×900 y 390×844) en `docs/screenshots/` (WebP, 33–97 KB).
- Panel `kaled.dev/admin` (sesión iniciada por el propietario): Norvia no existía. Se creó el proyecto «Norvia Consulting» (slug `norvia-consulting`) con resumen, descripción en Markdown, demo y repositorio, tipo «Proyecto personal · sitio web corporativo», año 2026, rol, 14 tecnologías y 4 imágenes con texto alternativo (portada destacada). Posición 7: queda al final sin desplazar proyectos existentes. El panel no tiene campo de categoría. Estado: **Publicado**. No se modificó ningún otro registro.
- Verificación pública: aparece en https://kaled.dev/es/projects y su ficha es https://kaled.dev/es/projects/norvia-consulting (imágenes, descripción, tecnologías, «Abrir sitio» → https://norvia.kaled.dev/ y «Ver código» → GitHub, ambos 200). Revisada en escritorio y móvil.

### Lighthouse en producción (https://norvia.kaled.dev)

| Página          | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --------------- | ----------- | ----------- | ------------- | ---------------- | --- |
| Inicio          | Escritorio  | 98          | 100           | 100              | 100 |
| Inicio          | Móvil       | 96          | 100           | 100              | 100 |
| Servicios       | Escritorio  | 100         | 100           | 100              | 100 |
| Servicios       | Móvil       | 91          | 100           | 100              | 100 |
| Detalle de caso | Escritorio  | 100         | 100           | 100              | 100 |
| Detalle de caso | Móvil       | 87          | 100           | 100              | 100 |

En móvil (emulación con red lenta), el LCP de las páginas interiores (3,3–3,4 s) corresponde a la fotografía de la cabecera.
