import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  titulo: React.ReactNode;
  descricao?: React.ReactNode;
  icone?: LucideIcon;
  contador?: number;
  acoes?: React.ReactNode;
  nivel?: 2 | 3;
  id?: string;
  className?: string;
}

export function SectionHeader({ titulo, descricao, icone: Icone, contador, acoes, nivel = 2, id, className }: SectionHeaderProps) {
  const Titulo = nivel === 2 ? "h2" : "h3";
  return (
    <div className={cn("flex flex-wrap items-start justify-between gap-3", className)}>
      <div className="flex min-w-0 items-start gap-3">
        {Icone && (
          <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-xl bg-tre-navy/10 text-tre-navy ring-1 ring-tre-navy/10">
            <Icone className="size-4" />
          </span>
        )}
        <div className="min-w-0">
          <Titulo id={id} className={cn("flex items-center gap-2 font-semibold text-tre-navy", nivel === 2 ? "text-lg" : "text-base")}>
            {titulo}
            {typeof contador === "number" && (
              <span className="tre-tone-neutral rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums">{contador}</span>
            )}
          </Titulo>
          {descricao && <p className="mt-0.5 text-sm text-slate-600">{descricao}</p>}
        </div>
      </div>
      {acoes && <div className="flex flex-wrap items-center gap-2">{acoes}</div>}
    </div>
  );
}
