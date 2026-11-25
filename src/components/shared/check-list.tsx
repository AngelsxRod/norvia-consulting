import { cn } from "@/lib/utils";

/** Lista con marcador de vector (no viñetas genéricas). */
export function CheckList({
  items,
  columns = 1,
  className,
}: {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-x-8", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 border-b border-line py-3.5 leading-relaxed">
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="mt-1 size-4 shrink-0 text-polar"
            fill="none"
          >
            <path d="M2 14 14 2M14 2H6M14 2v8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
