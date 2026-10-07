import { cn } from "@/lib/utils";

export type VarianteVidro = "padrao" | "suave" | "forte" | "navy" | "inset";

const VARIANTES: Record<VarianteVidro, string> = {
  padrao: "tre-glass",
  suave: "tre-glass-subtle",
  forte: "tre-glass-strong",
  navy: "tre-glass-navy",
  inset: "tre-inset",
};

export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  variante?: VarianteVidro;
  interativo?: boolean;
  as?: "div" | "section" | "article";
}

export function GlassCard({ variante = "padrao", interativo = false, as: Tag = "div", className, ...props }: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-3xl",
        VARIANTES[variante],
        interativo && "tre-glass-hover cursor-pointer motion-safe:hover:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

export function GlassCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-wrap items-start justify-between gap-3 p-5 pb-3 sm:p-6 sm:pb-3", className)} {...props} />;
}

export function GlassCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pt-0 sm:p-6 sm:pt-0", className)} {...props} />;
}

export function GlassCardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-wrap items-center justify-end gap-2 border-t border-white/60 px-5 py-3 sm:px-6", className)} {...props} />;
}
