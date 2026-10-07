import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { IDENTIDADE_TRE } from "@/lib/dados-tre";
import { ORDEM_PERFIS, PERFIS_TRE, type PerfilTRE } from "@/lib/tre/perfis";

export function TreBackdrop() {
  return (
    <div aria-hidden className="tre-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      <span className="tre-blob tre-blob--navy" />
      <span className="tre-blob tre-blob--gold" />
      <span className="tre-blob tre-blob--green" />
    </div>
  );
}

export interface TreShellProps {
  perfil?: PerfilTRE;
  titulo: string;
  subtitulo?: React.ReactNode;
  acoes?: React.ReactNode;
  contexto?: React.ReactNode;
  cabecalhoPagina?: "padrao" | "nenhum";
  className?: string;
  children: React.ReactNode;
}

export function TreShell({ perfil, titulo, subtitulo, acoes, contexto, cabecalhoPagina = "padrao", className, children }: TreShellProps) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col text-slate-900">
      <TreBackdrop />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-tre-navy focus:shadow-glass"
      >
        Pular para o conteúdo
      </a>

      <header className="tre-glass-navy tre-gold-rule sticky top-0 z-40 rounded-none border-x-0 border-t-0 print:static">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
          <Link href="/tre" className="tre-ring flex shrink-0 items-center gap-3 rounded-xl" aria-label="TRE-PA — voltar ao portal">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-tre-gold-soft to-tre-gold text-tre-navy-deep shadow-glow-gold">
              <Shield className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-white">{IDENTIDADE_TRE.nome}</span>
              <span className="hidden text-xs text-white/80 sm:block">Saúde do Servidor</span>
            </span>
          </Link>

          <nav aria-label="Áreas do sistema" className="order-last w-full md:order-none md:flex md:w-auto md:flex-1 md:justify-center print:hidden">
            <ul className="tre-scroll-x flex gap-1 rounded-full bg-white/10 p-1 ring-1 ring-white/15">
              {ORDEM_PERFIS.map((id) => {
                const p = PERFIS_TRE[id];
                const ativo = id === perfil;
                return (
                  <li key={id} className="shrink-0">
                    <Link
                      href={p.rota}
                      aria-current={ativo ? "page" : undefined}
                      className={cn(
                        "tre-ring flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                        ativo ? "bg-white text-tre-navy shadow-sm" : "text-white/85 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <span aria-hidden className={cn("size-2 rounded-full", p.classes.dot)} />
                      {p.rotulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {acoes && <div className="ml-auto flex items-center gap-1.5 print:hidden">{acoes}</div>}
        </div>
      </header>

      <main id="conteudo" className={cn("relative mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-6", className)}>
        {cabecalhoPagina === "padrao" && (
          <div className="mb-6">
            <nav aria-label="Trilha de navegação" className="mb-1 text-xs font-medium text-slate-600 print:hidden">
              <ol className="flex items-center gap-1">
                <li>
                  <Link href="/tre" className="rounded hover:text-tre-navy hover:underline">Portal TRE-PA</Link>
                </li>
                {perfil && (
                  <>
                    <li aria-hidden><ChevronRight className="size-3" /></li>
                    <li aria-current="page" className="text-tre-navy">{PERFIS_TRE[perfil].area}</li>
                  </>
                )}
              </ol>
            </nav>
            <h1 className="text-2xl font-bold tracking-tight text-tre-navy sm:text-3xl">{titulo}</h1>
            {subtitulo && <p className="mt-1 text-sm text-slate-600">{subtitulo}</p>}
            {contexto && <div className="mt-3 flex flex-wrap items-center gap-2">{contexto}</div>}
          </div>
        )}
        {children}
      </main>

      <TreFooter />
    </div>
  );
}

export function TreFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-6 print:hidden">
      <div className="tre-glass-subtle flex flex-col items-center justify-between gap-1 rounded-2xl px-4 py-3 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
        <p><span className="font-semibold text-tre-navy">{IDENTIDADE_TRE.nome}</span> · {IDENTIDADE_TRE.subtitulo}</p>
        <p>Saúde e Faturamento · © <span suppressHydrationWarning>{new Date().getFullYear()}</span></p>
      </div>
    </footer>
  );
}
