"use client";

type ResultsCounterProps = {
  count: number;
  total: number;
  noun: [singular: string, plural: string];
  onReset?: () => void;
  filtered: boolean;
};

export function ResultsCounter({ count, total, noun, onReset, filtered }: ResultsCounterProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p role="status" aria-live="polite" className="font-mono text-sm text-slate">
        <span className="font-semibold text-ink">{count}</span> {count === 1 ? noun[0] : noun[1]}
        {filtered ? ` de ${total}` : ""}
      </p>
      {filtered && onReset ? (
        <button
          type="button"
          onClick={onReset}
          className="min-h-9 text-sm font-medium text-polar underline underline-offset-4 hover:text-ink"
        >
          Limpiar filtros
        </button>
      ) : null}
    </div>
  );
}
