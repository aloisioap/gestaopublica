import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icone: LucideIcon;
  titulo: string;
  descricao?: React.ReactNode;
  acao?: React.ReactNode;
  compacto?: boolean;
  className?: string;
}

export function EmptyState({ icone: Icone, titulo, descricao, acao, compacto = false, className }: EmptyStateProps) {
  return (
    <div className={cn("tre-inset flex flex-col items-center justify-center rounded-2xl text-center", compacto ? "gap-1 px-4 py-6" : "gap-2 px-6 py-10", className)}>
      <span
        aria-hidden
        className={cn(
          "grid place-items-center rounded-2xl bg-gradient-to-br from-tre-navy/10 to-tre-green/15 text-tre-navy ring-1 ring-tre-navy/10",
          compacto ? "size-10" : "size-14",
        )}
      >
        <Icone className={compacto ? "size-5" : "size-7"} />
      </span>
      <p className="font-semibold text-tre-navy">{titulo}</p>
      {descricao && <p className="max-w-sm text-sm text-slate-600">{descricao}</p>}
      {acao && <div className="mt-2">{acao}</div>}
    </div>
  );
}
