import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="on-dark relative overflow-hidden bg-petrol text-on-dark">
      <div aria-hidden className="absolute inset-0 bg-grid-dark" />
      <Container
        size="wide"
        className="relative grid min-h-[70vh] items-center gap-12 py-20 lg:grid-cols-12"
      >
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="eyebrow text-signal">Error 404 · Coordenadas no encontradas</p>
          <h1 className="max-w-[18ch] text-h1 font-semibold">
            Esta ruta no lleva a ningún destino.
          </h1>
          <p className="max-w-xl text-lead text-on-dark-muted">
            La página que busca no existe o cambió de dirección. Estas rutas sí lo llevarán a algún
            lugar:
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants({ variant: "signal", size: "lg" })}>
              Volver al inicio
            </Link>
            <Link
              href="/servicios/"
              className={buttonVariants({ variant: "outline-light", size: "lg" })}
            >
              Ver servicios
            </Link>
            <Link
              href="/contacto/"
              className={buttonVariants({ variant: "outline-light", size: "lg" })}
            >
              Contacto
            </Link>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 300 300"
          className="mx-auto w-64 lg:col-span-5 lg:w-80"
          fill="none"
        >
          <circle cx="150" cy="150" r="120" stroke="var(--color-on-dark-line)" />
          <circle
            cx="150"
            cy="150"
            r="80"
            stroke="var(--color-on-dark-line)"
            strokeDasharray="4 6"
          />
          <path d="M150 20v260M20 150h260" stroke="var(--color-on-dark-line)" />
          <g transform="rotate(38 150 150)">
            <path
              d="m150 60 14 90-14 90-14-90 14-90Z"
              stroke="var(--color-signal)"
              strokeWidth="2"
            />
            <path d="m150 60 14 90h-28l14-90Z" fill="var(--color-signal)" />
          </g>
          <text x="150" y="16" textAnchor="middle" fill="var(--color-on-dark-muted)" fontSize="12">
            N
          </text>
        </svg>
      </Container>
    </section>
  );
}
