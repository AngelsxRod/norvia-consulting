import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Cómo trata este sitio de portafolio la información: sin servidor, sin base de datos, sin cookies de seguimiento; solo almacenamiento local opcional en el navegador.",
  path: "/privacidad/",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      description="Este sitio es un proyecto de portafolio estático. Esta política describe exactamente qué ocurre con la información que se introduce en él."
      href="/privacidad/"
      updated="25 de noviembre de 2026"
      sections={[
        {
          title: "Responsable y naturaleza del sitio",
          paragraphs: [
            "Norvia es una empresa ficticia. Este sitio es un proyecto de portafolio de desarrollo frontend creado por Kaled y publicado como un conjunto de archivos estáticos. No existe una organización real que reciba o trate datos a través de él.",
          ],
        },
        {
          title: "Formularios",
          paragraphs: [
            "Los formularios de contacto y de postulación validan los datos únicamente en su navegador. Al pulsar el botón de validación, los datos no se envían a ningún servidor, no se almacenan y se descartan.",
            "Los formularios no solicitan documentos de identidad, currículums ni otros datos sensibles.",
          ],
        },
        {
          title: "Almacenamiento local",
          paragraphs: [
            "La función «Guardar» de casos de éxito y artículos utiliza el almacenamiento local (LocalStorage) de su navegador para recordar su lista de lectura. Esa información permanece en su dispositivo, no se transmite y puede eliminarse desde el panel de guardados o borrando los datos del sitio en su navegador.",
          ],
        },
        {
          title: "Cookies y analítica",
          paragraphs: [
            "El sitio no utiliza cookies propias ni herramientas de analítica, publicidad o seguimiento.",
            "El proveedor de alojamiento puede registrar datos técnicos de acceso (como la dirección IP y el agente de usuario) para operar y proteger el servicio, de acuerdo con sus propias políticas.",
          ],
        },
        {
          title: "Recursos de terceros",
          paragraphs: [
            "Las fotografías proceden de Unsplash y se sirven desde el propio sitio; las fuentes tipográficas se incluyen en la compilación. Navegar por el sitio no realiza peticiones a servicios de terceros.",
          ],
        },
      ]}
    />
  );
}
