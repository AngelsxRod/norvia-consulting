import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & { size?: "content" | "wide" };

export function Container({ className, size = "content", ...props }: ContainerProps) {
  return (
    <div
      className={cn(size === "wide" ? "container-wide" : "container-content", className)}
      {...props}
    />
  );
}
