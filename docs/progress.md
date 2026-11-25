# Registro de progreso — Norvia Consulting

Registro de trabajo para retomar el contexto entre sesiones. Se actualiza al cerrar cada fase.

## Encargo

Sitio corporativo multipágina (exportación estática) para Norvia, consultora tecnológica ficticia; publicación en GitHub, despliegue en Vercel, subdominio `norvia.kaled.dev` en Cloudflare y alta en el portafolio `kaled.dev/admin`.

## Estado

| Fase                            | Estado       |
| ------------------------------- | ------------ |
| 3 — Inicialización técnica      | ✅ Completa  |
| 4 — Identidad de marca          | ⏳ Pendiente |
| 5 — Arquitectura de información | ⏳ Pendiente |
| 6 — Sistema de diseño           | ⏳ Pendiente |
| 7 — Desarrollo frontend         | ⏳ Pendiente |
| 8 — Optimización y QA           | ⏳ Pendiente |
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
