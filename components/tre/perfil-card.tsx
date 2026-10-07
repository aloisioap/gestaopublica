import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PERFIS_TRE, type PerfilTRE } from "@/lib/tre/perfis";

export function PerfilCard({ perfil, className }: { perfil: PerfilTRE; className?: string }) {
  const p = PERFIS_TRE[perfil];
  const Icone = p.icone;
  return (
    <Link
      href={p.rota}
      className={cn(
        "tre-glass tre-glass-hover tre-ring group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 motion-safe:hover:-translate-y-1",
        className,
      )}
    >
      <span aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent", p.classes.barra)} />
      <div className="flex items-start justify-between gap-3">
        <span aria-hidden className={cn("grid size-14 place-items-center rounded-2xl bg-gradient-to-br shadow-lg", p.classes.orb)}>
          <Icone className="size-7" />
        </span>
        <span className="rounded-full bg-white/75 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">Etapa {p.etapa}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-tre-navy">{p.area}</h3>
      <p className="mt-1 text-sm text-slate-600">{p.descricao}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
        {p.destaques.map((d) => (
          <li key={d} className="flex items-center gap-2">
            <Check aria-hidden className={cn("size-4 shrink-0", p.classes.texto)} />
            {d}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-tre-navy">
        {p.cta}
        <ArrowRight aria-hidden className="size-4 transition-transform motion-safe:group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
