import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-start gap-4 border border-dashed border-line-strong/60 bg-white/50 p-8 sm:p-12",
        className,
      )}
    >
      <svg viewBox="0 0 48 48" aria-hidden className="size-12 text-polar" fill="none">
        <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 5v6M24 37v6M5 24h6M37 24h6" stroke="currentColor" strokeWidth="1.5" />
        <path d="m24 14 4 10-4 10-4-10 4-10Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="flex max-w-prose flex-col gap-2">
        <p className="text-h3 font-semibold">{title}</p>
        <p className="text-slate">{description}</p>
      </div>
      {action}
    </div>
  );
}
