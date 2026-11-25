# Créditos de imagen

Todas las fotografías proceden de [Unsplash](https://unsplash.com) y se usan bajo la [Licencia Unsplash](https://unsplash.com/license): uso gratuito, también comercial, sin necesidad de permiso; no permite vender las fotos sin modificarlas ni compilarlas para replicar un servicio similar. La atribución no es obligatoria, pero se incluye junto a varias imágenes del sitio y en este registro.

## Criterios

- **Solo licencia gratuita.** Las candidatas se buscaron en Unsplash con el filtro de licencia libre y se verificó en la página de cada foto que figurara como «Foto gratuita» (se excluyó Unsplash+).
- **Selección visual.** Se revisaron 229 candidatas en hojas de contacto y se eligieron 58 por coherencia con la dirección artística (luz natural, entornos técnicos reales, sin marcas visibles).
- **Sin atribuciones falsas.** Ninguna fotografía representa a integrantes del equipo ficticio (el equipo usa monogramas generativos) ni instalaciones de clientes: las imágenes de los casos se rotulan como «imagen de referencia».
- **Sin edificios emblemáticos ni logotipos** reconocibles en primer plano; sin marcas de agua.
- **Textos alternativos** redactados en español para cada imagen; las fotos puramente decorativas usan `alt=""`.

## Proceso técnico

1. Registro en `scripts/images.manifest.json` (clave, id de Unsplash, autor, texto alternativo).
2. `pnpm images` (`scripts/fetch-images.mjs`) descarga cada foto en **WebP** desde el CDN de Unsplash en 640, 1280 y 1920 px de ancho (calidad 60, verticales limitadas a 1,25× de alto) y genera `src/data/image-meta.json` con dimensiones reales y créditos.
3. `next/image` usa un loader propio (`src/lib/image-loader.ts`) que apunta a esas variantes y emite `srcset`, compatible con `output: "export"` y sin dependencias externas en tiempo de ejecución.

## Recursos gráficos originales

Logotipo, isotipo, favicon, imagen social, pictogramas, diagrama de ruta del hero, diagramas de arquitectura, brújulas decorativas y monogramas del equipo son SVG originales creados para este proyecto.

## Registro (58 fotografías)

| Clave                 | Descripción (texto alternativo)                                                    | Autor                                                                | Foto                                                   |
| --------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------ |
| `city-grid`           | Vista aérea nocturna de una ciudad cuyas avenidas iluminadas forman una retícula   | [Shio Yang](https://unsplash.com/@shioyang)                          | [b6i9pe16pAg](https://unsplash.com/photos/b6i9pe16pAg) |
| `office-glass`        | Sala de reuniones con paredes de vidrio y luz natural en una oficina contemporánea | [Nastuh Abootalebi](https://unsplash.com/@sunday_digital)            | [eHD8Y1Znfpk](https://unsplash.com/photos/eHD8Y1Znfpk) |
| `office-atrium`       | Atrio blanco de un edificio corporativo con estructura de vidrio y acero           | [LYCS Architecture](https://unsplash.com/@lycs)                      | [aKij95Mmus8](https://unsplash.com/photos/aKij95Mmus8) |
| `team-review`         | Equipo de consultores revisando una solución frente a un monitor                   | [Vitaly Gariev](https://unsplash.com/@silverkblack)                  | [UikYLDQj9_I](https://unsplash.com/photos/UikYLDQj9_I) |
| `team-table`          | Cuatro profesionales trabajan juntos sobre documentos en una mesa                  | [Andreea Avramescu](https://unsplash.com/@minakko)                   | [wR56AUlEsE4](https://unsplash.com/photos/wR56AUlEsE4) |
| `whiteboard-sketch`   | Dos personas bosquejan un flujo en una pizarra durante una sesión de trabajo       | [Kaleidico](https://unsplash.com/@kaleidico)                         | [7lryofJ0H9s](https://unsplash.com/photos/7lryofJ0H9s) |
| `whiteboard-roadmap`  | Mano que señala una hoja de ruta de producto dibujada en una pizarra blanca        | [Slidebean](https://unsplash.com/@slidebean)                         | [iW9oP7Ljkbg](https://unsplash.com/photos/iW9oP7Ljkbg) |
| `team-meeting`        | Equipo reunido alrededor de una mesa con portátiles en una conversación abierta    | [Mapbox](https://unsplash.com/@mapbox)                               | [ZT5v0puBjZI](https://unsplash.com/photos/ZT5v0puBjZI) |
| `team-laptops`        | Grupo de trabajo concentrado en una pantalla en una sala de reuniones              | [Cherrydeck](https://unsplash.com/@cherrydeck)                       | [rMILC1PIwM0](https://unsplash.com/photos/rMILC1PIwM0) |
| `team-cowork`         | Equipo multidisciplinario conversa alrededor de un portátil en un espacio abierto  | [Vitaly Gariev](https://unsplash.com/@silverkblack)                  | [yd_RKGH_RH4](https://unsplash.com/photos/yd_RKGH_RH4) |
| `dc-aisle`            | Pasillo largo entre armarios de servidores en un centro de datos                   | [İsmail Enes Ayhan](https://unsplash.com/@ismailenesayhan)           | [lVZjvw-u9V8](https://unsplash.com/photos/lVZjvw-u9V8) |
| `dc-corridor`         | Corredor oscuro de un centro de datos con racks iluminados a ambos lados           | [Paul Hanaoka](https://unsplash.com/@plhnk)                          | [s0XabTAKvak](https://unsplash.com/photos/s0XabTAKvak) |
| `dc-hall`             | Sala técnica amplia con racks de servidores y suelo técnico blanco                 | [Taylor Vick](https://unsplash.com/@tvick)                           | [aWslrFhs1w4](https://unsplash.com/photos/aWslrFhs1w4) |
| `dc-aerial`           | Vista aérea de un edificio industrial rodeado de campos verdes                     | [Geoffrey Moffett](https://unsplash.com/@geoffreymoffett)            | [N9pLLb_M8DQ](https://unsplash.com/photos/N9pLLb_M8DQ) |
| `dc-rack`             | Detalle de servidores en rack con luces de estado verdes                           | [Domaintechnik](https://unsplash.com/@fslfsl)                        | [VHmBX7FnXw0](https://unsplash.com/photos/VHmBX7FnXw0) |
| `code-laptop`         | Editor de código con un proyecto abierto en un portátil                            | [Juanjo Jaramillo](https://unsplash.com/@juanjodev02)                | [mZnx9429i94](https://unsplash.com/photos/mZnx9429i94) |
| `code-screen`         | Portátil con código fuente resaltado sobre un escritorio en penumbra               | [Arnold Francisca](https://unsplash.com/@clark_fransa)               | [f77Bh3inUpE](https://unsplash.com/photos/f77Bh3inUpE) |
| `code-desk`           | Puesto de desarrollo con varios monitores mostrando terminal y código              | [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat) | [6Dv3pe-JnSg](https://unsplash.com/photos/6Dv3pe-JnSg) |
| `engineer-monitor`    | Ingeniera revisa código en un monitor de escritorio                                | [ThisisEngineering](https://unsplash.com/@thisisengineering)         | [iQqRM0XJvn8](https://unsplash.com/photos/iQqRM0XJvn8) |
| `analytics-dashboard` | Panel analítico con histogramas y series temporales en un portátil                 | [Luke Chesser](https://unsplash.com/@lukechesser)                    | [JKUTrJ4vK00](https://unsplash.com/photos/JKUTrJ4vK00) |
| `analytics-panels`    | Pantalla con indicadores y gráficos de rendimiento en tonos oscuros                | [Stephen Dawson](https://unsplash.com/@dawson2406)                   | [qwtCeJ5cLYs](https://unsplash.com/photos/qwtCeJ5cLYs) |
| `analytics-map`       | Tablero de datos con un mapa y cifras agregadas en una pantalla                    | [Clay Banks](https://unsplash.com/@claybanks)                        | [_Jb1TF3kvsA](https://unsplash.com/photos/_Jb1TF3kvsA) |
| `analytics-laptop`    | Portátil con un tablero de métricas y gráficos de área                             | [Carlos Muza](https://unsplash.com/@kmuza)                           | [hpjSkU2UYSU](https://unsplash.com/photos/hpjSkU2UYSU) |
| `security-circuit`    | Circuito iluminado sobre una superficie de vidrio en penumbra                      | [Adi Goldstein](https://unsplash.com/@adigold1)                      | [EUsVwEOsblE](https://unsplash.com/photos/EUsVwEOsblE) |
| `security-rings`      | Anillos de luz turquesa en una composición abstracta                               | [Zoha Gohar](https://unsplash.com/@zoeey97)                          | [WWlDskG5mY8](https://unsplash.com/photos/WWlDskG5mY8) |
| `security-operator`   | Analista trabaja frente a varias pantallas en una sala oscura                      | [Jefferson Santos](https://unsplash.com/@jefflssantos)               | [9SoCnyQmkzI](https://unsplash.com/photos/9SoCnyQmkzI) |
| `network-fiber-panel` | Panel de conexiones de fibra óptica con cables amarillos y conectores verdes       | [Kirill Sh](https://unsplash.com/@kirill2020)                        | [eVWWr6nmDf8](https://unsplash.com/photos/eVWWr6nmDf8) |
| `network-fiber`       | Detalle de conectores de fibra óptica en un distribuidor de red                    | [Ronald Crow](https://unsplash.com/@ronaldacrow)                     | [8oR7XykOjk4](https://unsplash.com/photos/8oR7XykOjk4) |
| `network-cables`      | Cables de red azules ordenados en la parte trasera de un rack                      | [Scott Rodgerson](https://unsplash.com/@scottrodgerson)              | [PSpf_XgOM5w](https://unsplash.com/photos/PSpf_XgOM5w) |
| `logistics-racks`     | Centro de distribución con estanterías altas y pasillos amplios                    | [Jacques Dillies](https://unsplash.com/@jacques_dillies)             | [jcav1COVvOc](https://unsplash.com/photos/jcav1COVvOc) |
| `logistics-aisle`     | Pasillo de almacén con estanterías llenas de cajas a ambos lados                   | [Lance Chang](https://unsplash.com/@carmendis)                       | [h3pVxOIpnzk](https://unsplash.com/photos/h3pVxOIpnzk) |
| `logistics-aerial`    | Vista aérea de un gran centro logístico y su playa de maniobras                    | [Point3D Commercial Imaging Ltd.](https://unsplash.com/@3dottawa)    | [eBLqAXNLVp0](https://unsplash.com/photos/eBLqAXNLVp0) |
| `logistics-team`      | Dos trabajadoras conversan en un pasillo de almacén con tablet en mano             | [Centre for Ageing Better](https://unsplash.com/@ageing_better)      | [ZlOlRnWk8zU](https://unsplash.com/photos/ZlOlRnWk8zU) |
| `factory-line`        | Línea de ensamblaje automatizada con brazos robóticos                              | [Homa Appliances](https://unsplash.com/@homaappliances)              | [sz1CHL7Pky0](https://unsplash.com/photos/sz1CHL7Pky0) |
| `factory-robot`       | Brazo robótico industrial blanco en una celda de producción                        | [patricio davalos](https://unsplash.com/@patriciodavalos)            | [LSiJEJmfuaU](https://unsplash.com/photos/LSiJEJmfuaU) |
| `factory-automation`  | Equipo de automatización neumática en una línea de pruebas                         | [ThisisEngineering](https://unsplash.com/@thisisengineering)         | [nyAzMQ6Ejgs](https://unsplash.com/photos/nyAzMQ6Ejgs) |
| `ai-robot-arm`        | Brazo robótico blanco en un entorno de laboratorio luminoso                        | [ZHENYU LUO](https://unsplash.com/@mrnuclear)                        | [kE0JmtbvXxM](https://unsplash.com/photos/kE0JmtbvXxM) |
| `health-tablet`       | Profesional de la salud revisa imágenes diagnósticas en una tablet                 | [Vitaly Gariev](https://unsplash.com/@silverkblack)                  | [Wz4Mx3JbnzE](https://unsplash.com/photos/Wz4Mx3JbnzE) |
| `health-ward`         | Habitación hospitalaria con cama y equipamiento de monitoreo                       | [Irshad Pathan](https://unsplash.com/@alrighthospital)               | [3EIraOmufG4](https://unsplash.com/photos/3EIraOmufG4) |
| `finance-escalators`  | Escaleras mecánicas bajo una bóveda de vidrio en un distrito financiero            | [Patrick Robert Doyle](https://unsplash.com/@teapowered)             | [-az9Mp5WAeE](https://unsplash.com/photos/-az9Mp5WAeE) |
| `finance-towers`      | Torres de oficinas vistas desde abajo contra el cielo                              | [LARAM](https://unsplash.com/@lukearam)                              | [Bu_jTIe9g-k](https://unsplash.com/photos/Bu_jTIe9g-k) |
| `finance-skyward`     | Rascacielos que convergen hacia un cielo nublado                                   | [Matthew Henry](https://unsplash.com/@matthewhenry)                  | [VviFtDJakYk](https://unsplash.com/photos/VviFtDJakYk) |
| `retail-store`        | Tienda luminosa con mobiliario blanco y productos ordenados                        | [Zooey Li](https://unsplash.com/@zooeyli)                            | [lkDZJL5psKU](https://unsplash.com/photos/lkDZJL5psKU) |
| `retail-hall`         | Espacio comercial con columnas metálicas y lucernario circular                     | [Declan Sun](https://unsplash.com/@declansun)                        | [Hafhe2KkG-E](https://unsplash.com/photos/Hafhe2KkG-E) |
| `energy-plant`        | Aerogenerador junto a un campo solar y una planta de generación                    | [Arno Senoner](https://unsplash.com/@arnosenoner)                    | [6lOxktnqo04](https://unsplash.com/photos/6lOxktnqo04) |
| `energy-wind`         | Aerogenerador sobre campos agrícolas al atardecer                                  | [Matthias Marx](https://unsplash.com/@marxmatthias)                  | [Z1-Hmrh8Oj4](https://unsplash.com/photos/Z1-Hmrh8Oj4) |
| `telecom-antenna`     | Antenas de telecomunicaciones sobre una torre metálica                             | [Tony Stoddard](https://unsplash.com/@tonystoddard)                  | [DgZxBnZeQo8](https://unsplash.com/photos/DgZxBnZeQo8) |
| `telecom-tower`       | Torre de telefonía con antenas contra un cielo azul intenso                        | [Dena Skulskaya](https://unsplash.com/@dena_skulskaya)               | [_-PY-2WQl10](https://unsplash.com/photos/_-PY-2WQl10) |
| `telecom-dusk`        | Siluetas de torres de transmisión al atardecer                                     | [Mario Caruso](https://unsplash.com/@giggiulena)                     | [0C9VmZUqcT8](https://unsplash.com/photos/0C9VmZUqcT8) |
| `education-laptop`    | Dos estudiantes trabajan juntas frente a un portátil                               | [Brooke Cagle](https://unsplash.com/@brookecagle)                    | [tLG2hcpITZE](https://unsplash.com/photos/tLG2hcpITZE) |
| `education-class`     | Grupo de estudiantes reunidos alrededor de un portátil en un aula                  | [Vitaly Gariev](https://unsplash.com/@silverkblack)                  | [8gAbl776pc0](https://unsplash.com/photos/8gAbl776pc0) |
| `ai-red-arm`          | Brazo robótico rojo sobre fondo negro                                              | [Mathew Schwartz](https://unsplash.com/@cadop)                       | [zIIXVa5BwvM](https://unsplash.com/photos/zIIXVa5BwvM) |
| `ai-hand`             | Mano robótica blanca en primer plano                                               | [Franck V.](https://unsplash.com/@possessedphotography)              | [jIBMSMs4_kA](https://unsplash.com/photos/jIBMSMs4_kA) |
| `ai-lab-arm`          | Brazo robótico colaborativo manipulando piezas sobre una mesa                      | [Maria Teneva](https://unsplash.com/@miteneva)                       | [xk9htrFBeAw](https://unsplash.com/photos/xk9htrFBeAw) |
| `city-night`          | Rascacielos iluminados de una ciudad vista desde lo alto por la noche              | [Polina Kuzovkova](https://unsplash.com/@p_kuzovkova)                | [zd8v_Ig3ndg](https://unsplash.com/photos/zd8v_Ig3ndg) |
| `city-lights`         | Vista aérea nocturna de un centro urbano con calles iluminadas                     | [Graham Holtshausen](https://unsplash.com/@freedomstudios)           | [HN5Vf-aCD34](https://unsplash.com/photos/HN5Vf-aCD34) |
| `meeting-notes`       | Manos de un equipo tomando notas en una mesa de reunión                            | [Dylan Gillis](https://unsplash.com/@mainermedia)                    | [KdeqA3aTnBY](https://unsplash.com/photos/KdeqA3aTnBY) |
| `work-plan`           | Persona que planifica con papel y bolígrafo junto a un portátil                    | [Scott Graham](https://unsplash.com/@amstram)                        | [5fNmWej4tAA](https://unsplash.com/photos/5fNmWej4tAA) |
