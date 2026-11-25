"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { formatNumber } from "@/lib/format";
import type { Metric, TrendPoint } from "@/types/content";

const colors = {
  baseline: "#7d8b88",
  result: "#0f6b63",
  grid: "#d4dbd6",
  text: "#4a5a5e",
  positive: "#0f6b63",
  negative: "#a3261b",
};

/** Mejora relativa en %, positiva cuando el cambio favorece al cliente. */
export function improvement(metric: Metric): number {
  if (metric.before === 0) return 100;
  const change = ((metric.after - metric.before) / Math.abs(metric.before)) * 100;
  return Math.round((metric.lowerIsBetter ? -change : change) * 10) / 10;
}

export function ComparisonChart({ metrics }: { metrics: Metric[] }) {
  const data = metrics.map((metric) => ({
    name: metric.label.replace(/\s*\(.*\)$/, ""),
    value: Math.min(improvement(metric), 400),
  }));
  return (
    <ResponsiveContainer width="100%" height={Math.max(200, metrics.length * 64)}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 48, bottom: 4, left: 8 }}>
        <CartesianGrid horizontal={false} stroke={colors.grid} />
        <XAxis
          type="number"
          tickFormatter={(value: number) => `${value}%`}
          tick={{ fill: colors.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={150}
          tick={{ fill: colors.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "rgba(15,107,99,0.06)" }}
          formatter={(value) => [`${formatNumber(Number(value))} %`, "Mejora"]}
          contentStyle={{ borderRadius: 2, borderColor: colors.grid, fontSize: 13 }}
        />
        <Bar dataKey="value" radius={[0, 2, 2, 0]} barSize={22} animationDuration={900}>
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.value >= 0 ? colors.positive : colors.negative} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function TrendChart({ points, unit }: { points: TrendPoint[]; unit: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={points} margin={{ top: 10, right: 12, bottom: 0, left: -8 }}>
        <defs>
          <linearGradient id="norvia-result" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={colors.result} stopOpacity={0.28} />
            <stop offset="100%" stopColor={colors.result} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={colors.grid} />
        <XAxis
          dataKey="period"
          tick={{ fill: colors.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis tick={{ fill: colors.text, fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip
          formatter={(value, name) => [
            `${formatNumber(Number(value))} ${unit}`,
            name === "result" ? "Con Norvia" : "Línea base",
          ]}
          contentStyle={{ borderRadius: 2, borderColor: colors.grid, fontSize: 13 }}
        />
        <Legend
          formatter={(value: string) => (value === "result" ? "Con Norvia" : "Línea base")}
          wrapperStyle={{ fontSize: 13 }}
        />
        <Area
          type="monotone"
          dataKey="baseline"
          stroke={colors.baseline}
          strokeDasharray="5 4"
          fill="transparent"
          strokeWidth={1.5}
          animationDuration={900}
        />
        <Area
          type="monotone"
          dataKey="result"
          stroke={colors.result}
          fill="url(#norvia-result)"
          strokeWidth={2.25}
          animationDuration={1100}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
