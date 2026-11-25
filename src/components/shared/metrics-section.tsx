import { cn } from "@/lib/utils";

import { CountUp } from "./count-up";
import { SimulatedNote } from "./simulated-note";

type MetricItem = { value: number; suffix?: string; prefix?: string; label: string };

type MetricsSectionProps = {
  metrics: readonly MetricItem[];
  tone?: "light" | "dark";
  note?: boolean;
  className?: string;
};

export function MetricsSection({
  metrics,
  tone = "light",
  note = true,
  className,
}: MetricsSectionProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <dl
        className={cn(
          "grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4",
          dark ? "border-on-dark-line" : "border-line",
        )}
      >
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={cn(
              "flex flex-col gap-3 border-b py-7 sm:pr-6",
              dark ? "border-on-dark-line" : "border-line",
              index % 2 === 1 && "sm:border-l sm:pl-6 lg:border-l-0 lg:pl-0",
              index > 0 && "lg:border-l lg:pl-6",
            )}
          >
            <dt
              className={cn(
                "order-2 max-w-[24ch] text-sm",
                dark ? "text-on-dark-muted" : "text-slate",
              )}
            >
              {metric.label}
            </dt>
            <dd className="order-1 text-[clamp(2.5rem,1.8rem+2.5vw,4rem)] leading-none font-semibold tracking-tight">
              <CountUp value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
            </dd>
          </div>
        ))}
      </dl>
      {note ? <SimulatedNote tone={tone} /> : null}
    </div>
  );
}
