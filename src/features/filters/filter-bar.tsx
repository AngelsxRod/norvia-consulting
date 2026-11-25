import { cn } from "@/lib/utils";

/** Contenedor de filtros: apilado en móvil, en fila en escritorio. */
export function FilterBar({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <form
      role="search"
      aria-label={label}
      onSubmit={(event) => event.preventDefault()}
      className={cn("grid gap-4 border-y border-line bg-white/60 p-4 sm:p-5", className)}
    >
      {children}
    </form>
  );
}
