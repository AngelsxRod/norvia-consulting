"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const models = [
  {
    id: "diagnostico",
    label: "Diagnóstico",
    duration: "4–8 semanas",
    title: "Un punto de partida medido",
    description:
      "Evaluación acotada que termina con una línea base, un mapa de riesgos y una hoja de ruta priorizada. Útil antes de una inversión importante o cuando no hay acuerdo sobre prioridades.",
    includes: [
      "Equipo de 2–3 consultores",
      "Entrevistas y análisis de datos",
      "Informe ejecutivo y hoja de ruta",
    ],
  },
  {
    id: "equipo",
    label: "Equipo dedicado",
    duration: "3–12 meses",
    title: "Producto construido con su equipo",
    description:
      "Un equipo multidisciplinario de Norvia trabaja junto al cliente en ciclos quincenales, con objetivos de negocio y métricas de entrega acordados desde el inicio.",
    includes: [
      "Producto, diseño e ingeniería",
      "Demostraciones quincenales",
      "Transferencia planificada",
    ],
  },
  {
    id: "oficina",
    label: "Oficina de arquitectura",
    duration: "Continuo",
    title: "Criterio técnico sostenido",
    description:
      "Acompañamiento a la dirección de tecnología para gobernar decisiones de arquitectura, revisar proveedores y mantener viva la hoja de ruta.",
    includes: ["Arquitecto principal asignado", "Comité mensual", "Revisión de decisiones clave"],
  },
];

export function EngagementTabs() {
  return (
    <Tabs defaultValue="diagnostico" className="gap-8">
      <TabsList
        variant="line"
        aria-label="Modelos de colaboración"
        className="h-auto w-full justify-start gap-0 overflow-x-auto border-b border-line p-0"
      >
        {models.map((model) => (
          <TabsTrigger
            key={model.id}
            value={model.id}
            className="h-12 flex-none rounded-none px-4 text-[0.95rem] text-slate after:bottom-[-1px]! after:bg-polar! data-active:text-ink"
          >
            {model.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {models.map((model) => (
        <TabsContent key={model.id} value={model.id} keepMounted className="data-hidden:hidden">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="flex flex-col gap-4 md:col-span-7">
              <p className="font-mono text-xs text-slate">Duración típica: {model.duration}</p>
              <h3 className="text-h3 font-semibold">{model.title}</h3>
              <p className="text-base leading-relaxed text-slate">{model.description}</p>
            </div>
            <ul className="flex flex-col border-t border-line md:col-span-5">
              {model.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-line py-3 text-base"
                >
                  <span aria-hidden className="size-1.5 rounded-full bg-polar" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
