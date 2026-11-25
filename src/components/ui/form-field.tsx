import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  /** Recibe los atributos de accesibilidad que debe aplicar el control. */
  children: (control: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
  }) => React.ReactNode;
};

export function FormField({
  id,
  label,
  error,
  hint,
  optional,
  className,
  children,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 text-sm font-medium">
        <span>{label}</span>
        {optional ? <span className="font-mono text-xs text-slate">Opcional</span> : null}
      </label>
      {children({ id, "aria-invalid": Boolean(error), "aria-describedby": describedBy })}
      {hint ? (
        <p id={hintId} className="text-sm text-slate">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="flex items-start gap-1.5 text-sm font-medium text-danger">
          <span aria-hidden>—</span>
          {error}
        </p>
      ) : null}
    </div>
  );
}
