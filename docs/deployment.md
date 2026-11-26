# Despliegue — Norvia Consulting

El sitio es una exportación estática: `pnpm build` genera `out/` con HTML, CSS, JS, imágenes, `sitemap.xml`, `robots.txt` y `404.html`. No necesita Node.js en producción.

## Requisitos

- Node.js 20.9 o superior (en Vercel se usa la versión por defecto del proyecto).
- pnpm 11.25.0 (fijado en `package.json` → `packageManager`; `corepack enable`).
- Acceso a internet durante la compilación (descarga de fuentes de Google por `next/font`, que quedan autoalojadas).

## Compilación y verificación local

```bash
pnpm install --frozen-lockfile
pnpm check            # typecheck + lint + formato
pnpm build            # genera out/
pnpm check:links      # enlaces y recursos internos de out/
pnpm check:contrast   # contraste WCAG de la paleta
python3 -m http.server 4174 --directory out   # servidor estático de prueba
```

## URL pública

La URL canónica se toma de `NEXT_PUBLIC_SITE_URL`; si no se define se usa `https://norvia.kaled.dev` (`src/data/site.ts`). Afecta a `metadataBase`, canonicals, Open Graph, sitemap, robots y JSON-LD.

## Vercel

| Ajuste             | Valor                                                  |
| ------------------ | ------------------------------------------------------ |
| Proyecto           | `norvia-consulting`                                    |
| Repositorio        | `AngelsxRod/norvia-consulting` (integración de GitHub) |
| Rama de producción | `main`                                                 |
| Framework Preset   | Next.js (respeta `output: "export"` y publica `out/`)  |
| Install Command    | `pnpm install` (detectado por `pnpm-lock.yaml`)        |
| Build Command      | `pnpm build`                                           |
| Plan               | Hobby (sin costo)                                      |

No se necesita `vercel.json`. Cada push a `main` genera un despliegue de producción; cada rama, uno de vista previa.

## Dominio personalizado (Cloudflare → Vercel)

1. Vercel: _Project → Settings → Domains_ → añadir `norvia.kaled.dev`.
2. Cloudflare, zona `kaled.dev` → _DNS → Records_: registro `CNAME` `norvia` con el destino exacto que indique Vercel, TTL automático y proxy **desactivado** («DNS only») para que Vercel emita y renueve el certificado TLS.
3. Esperar a que Vercel marque _Valid Configuration_ y emita el certificado.

### Configuración aplicada

| Registro | Tipo  | Destino                               | Proxy    | TTL        |
| -------- | ----- | ------------------------------------- | -------- | ---------- |
| `norvia` | CNAME | `67b4b766321bf92e.vercel-dns-017.com` | Solo DNS | Automático |

Certificado TLS emitido por Vercel (Let's Encrypt) con renovación automática. HTTP redirige a HTTPS (308).

## Otros hostings estáticos

Netlify, Cloudflare Pages o cualquier servidor (Nginx/Apache) pueden servir `out/`. Con `trailingSlash: true` cada ruta es `ruta/index.html`; configurar `404.html` como página de error.
