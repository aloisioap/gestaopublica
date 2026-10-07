import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function GlassTabsList({ className, ...props }: React.ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      className={cn(
        "tre-scroll-x h-auto w-full max-w-full justify-start gap-1 rounded-full bg-white/45 p-1 text-slate-600 shadow-sm ring-1 ring-white/60 backdrop-blur-md sm:w-auto",
        className,
      )}
      {...props}
    />
  );
}

export function GlassTabsTrigger({ className, contador, children, ...props }: React.ComponentProps<typeof TabsTrigger> & { contador?: number }) {
  return (
    <TabsTrigger
      className={cn(
        "shrink-0 gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 ring-offset-0 hover:bg-white/50",
        "focus-visible:ring-tre-navy focus-visible:ring-offset-0",
        "data-[state=active]:bg-white data-[state=active]:text-tre-navy data-[state=active]:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
      {typeof contador === "number" && contador > 0 && (
        <span className="tre-tone-danger min-w-5 rounded-full px-1.5 text-[11px] font-bold tabular-nums">{contador}</span>
      )}
    </TabsTrigger>
  );
}
