import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  ink: "on-dark bg-ink text-on-dark",
  petrol: "on-dark bg-petrol text-on-dark",
} as const;

type SectionProps = React.ComponentProps<"section"> & {
  tone?: keyof typeof tones;
  spacing?: "default" | "sm" | "none";
};

export function Section({
  className,
  tone = "paper",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tones[tone],
        spacing === "default" && "py-section",
        spacing === "sm" && "py-section-sm",
        className,
      )}
      {...props}
    />
  );
}
