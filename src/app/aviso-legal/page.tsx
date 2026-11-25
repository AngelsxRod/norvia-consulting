import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Aviso legal",
  description:
    "Aviso legal del sitio de demostración de Norvia: empresa ficticia, contenido ilustrativo, propiedad intelectual y créditos de imágenes.",
  path: "/aviso-legal/",
});

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Aviso legal"
      description="Información sobre la naturaleza ficticia de Norvia y el uso del contenido de este sitio."
      href="/aviso-legal/"
      updated="25 de noviembre de 2026"
      sections={[
        {
          title: "Marca ficticia",
          paragraphs: [
            "Norvia y Norvia Consulting son marcas ficticias creadas como proyecto de portafolio profesional. No existe una sociedad registrada con ese nombre vinculada a este sitio, ni se ofrecen servicios reales a través de él.",
            "El sitio no declara oficinas, registros comerciales ni certificaciones empresariales.",
          ],
        },
        {
          title: "Contenido ilustrativo",
          paragraphs: [
            "Los clientes, casos de éxito, cifras, resultados, integrantes del equipo, vacantes y publicaciones son ficticios. Cualquier parecido con organizaciones o personas reales es coincidencia. Las métricas se identifican como datos simulados con fines demostrativos.",
            "Las tecnologías y marcos mencionados son marcas de sus respectivos titulares y se citan solo con fines descriptivos; su mención no implica relación comercial.",
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "El diseño, el código fuente, los textos y los recursos gráficos originales (logotipo, pictogramas y diagramas) forman parte del proyecto de portafolio de su autor. El código fuente está disponible públicamente en GitHub.",
            "Las fotografías proceden de Unsplash y se utilizan bajo la Licencia Unsplash. La autoría de cada fotografía se indica junto a la imagen o en la documentación del proyecto.",
          ],
        },
        {
          title: "Responsabilidad",
          paragraphs: [
            "El contenido editorial tiene carácter divulgativo y no constituye asesoramiento profesional. El autor no garantiza la disponibilidad permanente del sitio.",
          ],
        },
      ]}
    />
  );
}
