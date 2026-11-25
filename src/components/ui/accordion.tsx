import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col border-t border-line", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-line", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/trigger flex min-h-14 flex-1 cursor-pointer items-center justify-between gap-6 py-5 text-left text-[1.05rem] font-medium transition-colors outline-none hover:text-polar focus-visible:text-polar",
          className,
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover/trigger:border-polar group-aria-expanded/trigger:border-ink group-aria-expanded/trigger:bg-ink"
        >
          <span className="absolute h-px w-3 bg-current group-aria-expanded/trigger:bg-paper" />
          <span className="absolute h-3 w-px bg-current transition-transform duration-(--duration-base) group-aria-expanded/trigger:scale-y-0" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-(--duration-base) ease-(--ease-out-norvia) data-ending-style:h-0 data-starting-style:h-0"
      {...props}
    >
      <div className={cn("max-w-prose pb-6 leading-relaxed text-slate", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
