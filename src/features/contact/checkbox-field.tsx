import { cn } from "@/lib/utils";

type CheckboxFieldProps = React.ComponentProps<"input"> & {
  id: string;
  label: React.ReactNode;
  error?: string;
};

export function CheckboxField({ id, label, error, className, ...props }: CheckboxFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-polar"
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-slate">
          {label}
        </label>
      </div>
      {error ? (
        <p id={errorId} className="text-sm font-medium text-danger">
          — {error}
        </p>
      ) : null}
    </div>
  );
}
