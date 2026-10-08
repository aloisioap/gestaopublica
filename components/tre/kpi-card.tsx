import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type TomKpi = "navy" | "green" | "gold" | "terra" | "info" | "danger";

const ORB: Record<TomKpi, string> = {
  navy: "from-tre-navy to-tre-navy-deep text-white",
  green: "from-tre-green to-tre-green-ink text-white",
  gold: "from-tre-gold-soft to-tre-gold text-tre-navy-deep",
  terra: "from-tre-terra to-[#7F2508] text-white",
  info: "from-tre-info to-tre-navy text-white",
  danger: "from-tre-danger to-tre-danger-ink text-white",
};

export interface KpiCardProps {
  rotulo: string;
  valor: React.ReactNode;
  icone: LucideIcon;
  tom?: TomKpi;
  detalhe?: React.ReactNode;
  tendencia?: { texto: string; direcao: "alta" | "baixa"; bom: boolean };
  href?: string;
  onClick?: () => void;
  ativo?: boolean;
  className?: string;
}

export function KpiCard({ rotulo, valor, icone: Icone, tom = "navy", detalhe, tendencia, href, onClick, ativo, className }: KpiCardProps) {
  const interativo = Boolean(href || onClick);
  const classes = cn(
    "tre-glass block w-full rounded-3xl p-5 text-left",
    interativo && "tre-glass-hover tre-ring motion-safe:hover:-translate-y-0.5",
    ativo && "outline outline-2 outline-offset-2 outline-tre-gold",
    className,
  );

  const conteudo = (
    <>
      <span className="flex items-start justify-between gap-3">
        <span className="text-sm font-medium text-slate-600">{rotulo}</span>
        <span aria-hidden className={cn("grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-md", ORB[tom])}>
          <Icone className="size-5" />
        </span>
      </span>
      <span className="mt-2 block text-3xl font-bold tracking-tight text-tre-navy tabular-nums">{valor}</span>
      {(detalhe || tendencia) && (
        <span className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          {tendencia && (
            <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold", tendencia.bom ? "tre-tone-success" : "tre-tone-danger")}>
              {tendencia.direcao === "alta" ? <ArrowUpRight className="size-3" aria-hidden /> : <ArrowDownRight className="size-3" aria-hidden />}
              {tendencia.texto}
            </span>
          )}
          {detalhe}
        </span>
      )}
    </>
  );

  if (href) return <Link href={href} className={classes}>{conteudo}</Link>;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-pressed={ativo} className={classes}>
        {conteudo}
      </button>
    );
  }
  return <div className={classes}>{conteudo}</div>;
}
