"use client";

import dynamic from "next/dynamic";

import { SimulatedNote } from "@/components/shared/simulated-note";
import { formatNumber } from "@/lib/format";
import type { CaseStudy } from "@/types/content";

const chartFallback = () => <div aria-hidden className="h-[300px] animate-pulse bg-mist" />;

/** Recharts solo se descarga en las páginas de detalle de caso, sin renderizado en servidor. */
const ComparisonChart = dynamic(() => import("./results-charts").then((m) => m.ComparisonChart), {
  ssr: false,
  loading: chartFallback,
});
const TrendChart = dynamic(() => import("./results-charts").then((m) => m.TrendChart), {
  ssr: false,
  loading: chartFallback,
});

export function CaseResults({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">Mejora relativa por indicador</h3>
          <p className="text-sm text-slate">Variación porcentual respecto de la línea base.</p>
        </div>
        <div
          role="img"
          aria-label="Gráfico de barras de mejora relativa; los datos se detallan en la tabla siguiente."
        >
          <ComparisonChart metrics={caseStudy.metrics} />
        </div>
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Indicadores antes y después</caption>
          <thead>
            <tr className="border-b border-ink font-mono text-xs text-slate uppercase">
              <th scope="col" className="py-2 font-medium">
                Indicador
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Antes
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Después
              </th>
            </tr>
          </thead>
          <tbody>
            {caseStudy.metrics.map((metric) => (
              <tr key={metric.label} className="border-b border-line">
                <th scope="row" className="py-2.5 pr-4 font-normal">
                  {metric.label}
                </th>
                <td className="py-2.5 text-right text-slate tabular-nums">
                  {formatNumber(metric.before)}
                </td>
                <td className="py-2.5 text-right font-semibold tabular-nums">
                  {formatNumber(metric.after)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{caseStudy.trend.label}</h3>
          <p className="text-sm text-slate">
            Evolución frente a la tendencia sin intervención ({caseStudy.trend.unit}).
          </p>
        </div>
        <div
          role="img"
          aria-label={`Gráfico de área: ${caseStudy.trend.label}. Valores en la tabla siguiente.`}
        >
          <TrendChart points={caseStudy.trend.points} unit={caseStudy.trend.unit} />
        </div>
        <details className="text-sm">
          <summary className="cursor-pointer font-medium text-polar">Ver datos de la serie</summary>
          <table className="mt-3 w-full text-left">
            <thead>
              <tr className="border-b border-ink font-mono text-xs text-slate uppercase">
                <th scope="col" className="py-2 font-medium">
                  Periodo
                </th>
                <th scope="col" className="py-2 text-right font-medium">
                  Línea base
                </th>
                <th scope="col" className="py-2 text-right font-medium">
                  Con Norvia
                </th>
              </tr>
            </thead>
            <tbody>
              {caseStudy.trend.points.map((point) => (
                <tr key={point.period} className="border-b border-line">
                  <th scope="row" className="py-2 font-normal">
                    {point.period}
                  </th>
                  <td className="py-2 text-right tabular-nums">{formatNumber(point.baseline)}</td>
                  <td className="py-2 text-right tabular-nums">{formatNumber(point.result)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
      <SimulatedNote className="lg:col-span-2" />
    </div>
  );
}
