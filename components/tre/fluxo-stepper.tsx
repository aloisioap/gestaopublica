import { Check, Loader2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { PERFIS_TRE, type PerfilTRE } from "@/lib/tre/perfis";

export type EstadoEtapa = "pendente" | "atual" | "concluida" | "alerta";

export interface EtapaFluxo {
  id: string;
  titulo: string;
  descricao?: string;
  perfil?: PerfilTRE;
  prazo?: string;
  detalhe?: React.ReactNode;
}

export interface FluxoStepperProps {
  etapas: EtapaFluxo[];
  estados?: EstadoEtapa[];
  orientacao?: "responsiva" | "vertical";
  rotulo?: string;
  className?: string;
}

const LEITOR: Record<EstadoEtapa, string> = {
  pendente: "pendente",
  atual: "em andamento",
  concluida: "concluída",
  alerta: "concluída com alerta",
};

export function FluxoStepper({ etapas, estados, orientacao = "responsiva", rotulo = "Etapas do processo", className }: FluxoStepperProps) {
  const horizontal = orientacao === "responsiva";
  return (
    <ol
      aria-label={rotulo}
      style={{ "--n": etapas.length } as React.CSSProperties}
      className={cn("relative grid gap-4", horizontal && "md:gap-2 md:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]", className)}
    >
      {etapas.map((etapa, i) => {
        const estado = estados?.[i] ?? "pendente";
        const feito = estado === "concluida" || estado === "alerta";
        const perfil = etapa.perfil ? PERFIS_TRE[etapa.perfil] : null;
        return (
          <li
            key={etapa.id}
            aria-current={estado === "atual" ? "step" : undefined}
            className={cn("relative flex gap-3", horizontal && "md:flex-col md:items-center md:text-center")}
          >
            {i < etapas.length - 1 && (
              <span
                aria-hidden
                className={cn(
                  "absolute left-[19px] top-11 h-[calc(100%-1.75rem)] w-0.5 rounded-full",
                  horizontal && "md:left-[calc(50%+1.5rem)] md:top-[19px] md:h-0.5 md:w-[calc(100%-2.5rem)]",
                  feito ? "bg-gradient-to-b from-tre-green to-tre-info md:bg-gradient-to-r" : "bg-slate-300/80",
                )}
              />
            )}
            <span
              className={cn(
                "relative z-10 grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold ring-4 ring-white/70 transition-colors",
                estado === "concluida" && "bg-tre-success text-white",
                estado === "alerta" && "bg-tre-warn text-tre-navy-deep",
                estado === "atual" && "bg-white text-tre-info shadow-[0_0_0_6px_rgb(21_101_192/0.18)]",
                estado === "pendente" && "bg-white/80 text-slate-600",
              )}
            >
              {estado === "concluida" ? (
                <Check className="size-5" aria-hidden />
              ) : estado === "alerta" ? (
                <TriangleAlert className="size-5" aria-hidden />
              ) : estado === "atual" ? (
                <Loader2 className="size-5 motion-safe:animate-spin" aria-hidden />
              ) : (
                i + 1
              )}
            </span>
            <div className={cn("min-w-0 pb-1", horizontal && "md:px-1")}>
              <p className="text-sm font-semibold text-tre-navy">
                {etapa.titulo}
                <span className="sr-only"> — {LEITOR[estado]}</span>
              </p>
              {etapa.descricao && <p className="text-xs text-slate-600">{etapa.descricao}</p>}
              {(perfil || etapa.prazo) && (
                <div className={cn("mt-1 flex flex-wrap items-center gap-1.5", horizontal && "md:justify-center")}>
                  {perfil && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/75 px-2 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200">
                      <span aria-hidden className={cn("size-1.5 rounded-full", perfil.classes.dot)} />
                      {perfil.rotulo}
                    </span>
                  )}
                  {etapa.prazo && <span className="text-[11px] text-slate-600">{etapa.prazo}</span>}
                </div>
              )}
              {etapa.detalhe && <div className="mt-1.5 text-xs text-slate-700">{etapa.detalhe}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
