import { cn } from "@/lib/utils";

/** Rejilla tipográfica de tecnologías: sin logotipos de terceros. */
export function TechnologyGrid({
  technologies,
  className,
}: {
  technologies: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {technologies.map((tech, index) => (
        <li
          key={tech}
          className="flex min-h-20 flex-col justify-between gap-2 border-r border-b border-line p-4"
        >
          <span className="font-mono text-[0.65rem] text-slate">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium">{tech}</span>
        </li>
      ))}
    </ul>
  );
}
