# Arquitectura de información — Norvia

Sitio multipágina con 74 páginas HTML generadas estáticamente (más `sitemap.xml`, `robots.txt`, iconos e imagen social).

## Mapa del sitio

```
/                                   Inicio
├── /nosotros/                      Historia, propósito, misión, visión, valores, cultura, liderazgo
├── /servicios/                     8 servicios agrupados en Decidir · Construir · Potenciar · Proteger
│   └── /servicios/[slug]/          × 8
├── /soluciones/                    8 soluciones (problemas de negocio)
│   └── /soluciones/[slug]/         × 8 — con diagrama de arquitectura interactivo
├── /industrias/                    8 industrias con sus desafíos
│   └── /industrias/[slug]/         × 8
├── /casos-de-exito/                Catálogo con búsqueda, filtros (industria, servicio, tecnología) y paginación
│   └── /casos-de-exito/[slug]/     × 12 — gráficas Recharts y datos simulados
├── /equipo/                        8 perfiles ficticios
├── /carreras/                      Cultura, beneficios, modalidades, proceso y vacantes filtrables
│   └── /carreras/[slug]/           × 10 — formulario de postulación demostrativo
├── /insights/                      Publicaciones con búsqueda y categorías
│   └── /insights/[slug]/           × 12 — tabla de contenido, relacionados, navegación anterior/siguiente
├── /metodologia/                   7 etapas con índice interactivo
├── /contacto/                      Formulario de consulta demostrativo + FAQ
├── /privacidad/
├── /aviso-legal/
└── 404                             Página personalizada (out/404.html)
```

## Servicios vs. soluciones

- **Servicios** = capacidades profesionales de Norvia (qué sabemos hacer).
- **Soluciones** = problemas empresariales concretos que combinan varios servicios (qué resolvemos).
- **Industrias** = contexto sectorial que conecta soluciones, servicios y casos.

## Relaciones de contenido

Todas las relaciones se declaran por _slug_ en `src/data/*` y se recorren en ambas direcciones:

| Desde     | Enlaza a                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------ |
| Servicio  | Casos que lo usan · Soluciones que lo combinan · Industrias que lo demandan · Siguiente servicio |
| Solución  | Servicios involucrados · Industrias aplicables · Casos (directos o de sus industrias)            |
| Industria | Soluciones aplicables · Servicios relacionados · Casos del sector · Otras industrias             |
| Caso      | Solución aplicada · Industria · Servicios (badges) · 3 casos relacionados por afinidad           |
| Artículo  | Autor (equipo) · Relacionados por categoría · Anterior / siguiente                               |
| Vacante   | Otras vacantes del mismo departamento                                                            |

## Navegación

- **Header fijo** con mega menú para Servicios, Soluciones e Industrias (enlace al índice + botón de despliegue separado), enlaces directos a Casos de éxito e Insights y un menú «Compañía» (Metodología, Nosotros, Equipo, Carreras). Indicador de sección activa.
- **Mega menú accesible:** botones `aria-expanded`/`aria-controls`, apertura con clic, toque o al pasar el ratón (con retardo), `Flecha abajo` entra al panel, flechas recorren enlaces, `Escape` cierra y devuelve el foco, clic fuera cierra. Los índices son enlaces reales, por lo que la navegación funciona sin JavaScript.
- **Menú móvil** en panel lateral (Sheet de Base UI con trampa de foco) con secciones desplegables.
- **Breadcrumbs** en todas las páginas interiores, con `BreadcrumbList` JSON-LD.
- **Footer** con las 32 rutas principales, aviso de marca ficticia, enlaces legales y repositorio.
- **Lista de lectura**: botón «Guardar» en casos y artículos; panel en el header (Zustand + LocalStorage).
- CTA contextual al final de cada página.
