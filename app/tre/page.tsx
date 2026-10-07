import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  LogIn,
  Play,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SimuladorProtocoloTRE } from "@/components/simulador-tre";
import { TreShell } from "@/components/tre/tre-shell";
import { GlassCard, GlassCardContent, GlassCardFooter, GlassCardHeader } from "@/components/tre/glass-card";
import { GlassDialog, GlassDialogTrigger, GlassPainel } from "@/components/tre/glass-painel";
import { SectionHeader } from "@/components/tre/section-header";
import { PerfilCard } from "@/components/tre/perfil-card";
import { FluxoStepper, type EtapaFluxo } from "@/components/tre/fluxo-stepper";
import { ToneBadge } from "@/components/tre/status-badge";
import { treBotao } from "@/components/tre/ui-tre";
import { ESTATISTICAS_TRE, IDENTIDADE_TRE } from "@/lib/dados-tre";
import { ORDEM_PERFIS, PERFIS_TRE, type PerfilTRE } from "@/lib/tre/perfis";
import { formatNumero } from "@/lib/tre/formatadores";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portal",
  description:
    "Portal de acesso do TRE-PA Saúde: escolha seu perfil (servidor, credenciado, auditor ou gestor) para entrar na sua área.",
};

/*
 * Entrada animada (tailwindcss-animate). Duração e atraso vão como propriedades
 * arbitrárias com o mesmo prefixo motion-safe: `duration-*`/`delay-*` sem prefixo
 * perdem para o `animation-duration: 150ms` de `motion-safe:animate-in` (que vem
 * depois no CSS) e ainda alterariam a transição de hover dos cards.
 */
const ENTRADA =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 fill-mode-both motion-safe:[animation-duration:500ms] motion-safe:[animation-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const ATRASO = [
  "motion-safe:[animation-delay:0ms]",
  "motion-safe:[animation-delay:75ms]",
  "motion-safe:[animation-delay:150ms]",
  "motion-safe:[animation-delay:225ms]",
  "motion-safe:[animation-delay:300ms]",
] as const;

const NUMEROS_TRE: { icone: LucideIcon; valor: number; rotulo: string }[] = [
  { icone: Users, valor: ESTATISTICAS_TRE.total_servidores, rotulo: "servidores" },
  { icone: Stethoscope, valor: ESTATISTICAS_TRE.total_credenciados, rotulo: "credenciados" },
  { icone: Activity, valor: ESTATISTICAS_TRE.total_procedimentos_ano, rotulo: "procedimentos/ano" },
];

/** Processo completo, na ordem em que acontece. O texto dos antigos cards informativos vive nas etapas 2, 4 e 5. */
const ETAPAS: Array<EtapaFluxo & { perfil: PerfilTRE }> = [
  {
    id: "solicitacao",
    titulo: "Solicitação",
    descricao: "O servidor apresenta a carteirinha digital e pede o atendimento.",
    perfil: "servidor",
    prazo: "No pedido",
  },
  {
    id: "validacao",
    titulo: "Validação prévia",
    descricao: "Carteirinha do servidor validada por QR Code ou WhatsApp antes da execução do procedimento.",
    perfil: "credenciado",
    prazo: "Antes da execução",
    detalhe: <ToneBadge tom="gold">WhatsApp em breve</ToneBadge>,
  },
  {
    id: "execucao",
    titulo: "Execução",
    descricao: "Consulta, exame, internação ou cirurgia realizada no credenciado.",
    perfil: "credenciado",
    prazo: "No atendimento",
  },
  {
    id: "faturamento",
    titulo: "Faturamento",
    descricao: "XML no padrão TISS, para troca de informações entre operadora e prestador, com anexos PDF categorizados.",
    perfil: "credenciado",
    prazo: "Após o atendimento",
  },
  {
    id: "auditoria",
    titulo: "Auditoria TISS",
    descricao: "Checklist de auditoria, integração TISS e controle de glosas para garantir a conformidade legal.",
    perfil: "auditor",
    prazo: "Após o envio da fatura",
  },
  {
    id: "pagamento",
    titulo: "Pagamento",
    descricao: "Fatura aprovada é paga ao credenciado e entra nos painéis de custo do gestor.",
    perfil: "gestor",
    prazo: "Após a aprovação",
  },
];

/** Agrupa etapas consecutivas do mesmo perfil: liga o chip "Etapa N" do PerfilCard às 6 etapas do stepper. */
const FASES = ETAPAS.reduce<{ perfil: PerfilTRE; passos: number }[]>((fases, etapa) => {
  const ultima = fases[fases.length - 1];
  if (ultima?.perfil === etapa.perfil) ultima.passos += 1;
  else fases.push({ perfil: etapa.perfil, passos: 1 });
  return fases;
}, []);

const COL_SPAN: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

/** Deep links para a aba mais usada de cada área (contrato ?aba=). */
const ATALHOS: { perfil: PerfilTRE; rotulo: string; aba: string }[] = [
  { perfil: "servidor", rotulo: "Meus agendamentos", aba: "agendamentos" },
  { perfil: "credenciado", rotulo: "Enviar XML TISS", aba: "upload" },
  { perfil: "auditor", rotulo: "Fila de auditoria", aba: "faturas" },
  { perfil: "gestor", rotulo: "Relatórios gerenciais", aba: "relatorios" },
];

/** Posição de cada perfil na órbita do emblema (sentido horário, a partir do topo). */
const ORBITA = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
] as const;

export default function PortalTRE() {
  return (
    <TreShell
      titulo="Saúde do Servidor TRE-PA"
      cabecalhoPagina="nenhum"
      acoes={
        <Button asChild variant="ghost" size="sm" className={cn(treBotao({ tom: "cabecalho" }), "h-10 rounded-full px-3.5 focus-visible:ring-tre-gold-soft")}>
          <Link href="/">
            <ArrowLeft aria-hidden />
            Todos os projetos
          </Link>
        </Button>
      }
    >
      {/* Hero */}
      <GlassCard
        as="section"
        variante="navy"
        aria-labelledby="portal-titulo"
        className={cn("relative overflow-hidden rounded-[2rem] p-8 sm:p-10", ENTRADA, ATRASO[0])}
      >
        <span aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-tre-gold-soft/70 to-transparent" />
        <span aria-hidden className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(228_198_90/0.22),transparent)]" />
        <span aria-hidden className="pointer-events-none absolute -bottom-48 left-1/4 size-[32rem] rounded-full bg-[radial-gradient(closest-side,rgb(0_121_107/0.3),transparent)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tre-gold-soft">{IDENTIDADE_TRE.lema}</p>
            <h1 id="portal-titulo" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Saúde do Servidor <span className="text-tre-gold-soft">TRE-PA</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Gestão de saúde e faturamento do {IDENTIDADE_TRE.subtitulo}. Escolha seu perfil (servidor, credenciado,
              auditor ou gestor) para entrar na sua área.
            </p>

            <ul aria-label="Números do sistema" className="mt-6 flex flex-wrap gap-2">
              {NUMEROS_TRE.map(({ icone: Icone, valor, rotulo }) => (
                <li
                  key={rotulo}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/85 ring-1 ring-white/15"
                >
                  <Icone aria-hidden className="size-4 text-tre-gold-soft" />
                  <strong className="font-bold text-white tabular-nums">{formatNumero(valor)}</strong>
                  {rotulo}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className={cn(treBotao({ tom: "ouro" }), "h-11 rounded-full px-6 focus-visible:ring-tre-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-tre-navy")}>
                <a href="#perfis">
                  Escolher meu perfil
                  <ArrowDown aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className={cn(treBotao({ tom: "cabecalho" }), "h-11 rounded-full px-5 ring-1 ring-inset ring-white/25 focus-visible:ring-tre-gold-soft")}
              >
                <a href="#como-funciona">
                  <Workflow aria-hidden />
                  Entenda o processo
                </a>
              </Button>
            </div>
          </div>

          {/* Emblema: os 4 perfis orbitando o escudo institucional */}
          <div aria-hidden className="relative mx-auto my-6 hidden size-64 lg:mr-8 lg:block">
            <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
            <span className="absolute inset-8 rounded-full border border-dashed border-white/20 motion-safe:animate-[spin_60s_linear_infinite]" />
            <span className="absolute inset-16 rounded-full bg-white/5 ring-1 ring-tre-gold-soft/30" />
            <span className="absolute inset-0 m-auto grid size-20 rotate-3 place-items-center rounded-3xl bg-gradient-to-br from-tre-gold-soft to-tre-gold text-tre-navy-deep shadow-glow-gold">
              <Shield className="size-10" />
            </span>
            {ORDEM_PERFIS.map((id, i) => {
              const Icone = PERFIS_TRE[id].icone;
              return (
                <span
                  key={id}
                  className={cn(
                    "absolute grid size-12 place-items-center rounded-2xl bg-gradient-to-br shadow-lg ring-2 ring-white/20",
                    ORBITA[i],
                    PERFIS_TRE[id].classes.orb,
                  )}
                >
                  <Icone className="size-6" />
                </span>
              );
            })}
          </div>
        </div>
      </GlassCard>

      {/* Perfis de acesso, na ordem do processo */}
      <section id="perfis" aria-labelledby="perfis-titulo" className="mt-12 scroll-mt-32">
        <SectionHeader
          id="perfis-titulo"
          icone={LogIn}
          titulo="Escolha seu perfil de acesso"
          descricao="Os perfis seguem a ordem do processo, do pedido do servidor ao pagamento acompanhado pelo gestor."
          className={cn(ENTRADA, ATRASO[0])}
        />

        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ORDEM_PERFIS.map((perfil, i) => (
            <li key={perfil} className="flex">
              <PerfilCard perfil={perfil} className={cn("w-full", ENTRADA, ATRASO[i])} />
            </li>
          ))}
        </ul>

        <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <ToneBadge tom="gold">
            <Sparkles aria-hidden className="size-3" />
            Em breve
          </ToneBadge>
          Validação da carteirinha por WhatsApp e gestão de dependentes na {PERFIS_TRE.servidor.area}.
        </p>
      </section>

      {/* Como funciona */}
      <GlassCard
        as="section"
        id="como-funciona"
        aria-labelledby="como-funciona-titulo"
        className={cn("mt-12 scroll-mt-32", ENTRADA, ATRASO[4])}
      >
        <GlassCardHeader className="pb-5 sm:pb-6">
          <SectionHeader
            id="como-funciona-titulo"
            icone={Workflow}
            titulo="Como funciona"
            descricao={`Do pedido do servidor ao pagamento do credenciado: ${ETAPAS.length} etapas, ${ORDEM_PERFIS.length} perfis.`}
            className="w-full"
            acoes={
              <GlassDialog>
                <GlassDialogTrigger asChild>
                  <Button className={cn(treBotao({ tom: "vidro" }), "h-10 rounded-full px-5 backdrop-blur-none focus-visible:ring-tre-navy")}>
                    <Play aria-hidden />
                    Ver demonstração animada
                  </Button>
                </GlassDialogTrigger>
                <GlassPainel
                  titulo="Simulação do processo"
                  descricao="Uma solicitação fictícia percorre as etapas do fluxo, da validação ao pagamento."
                  icone={Play}
                  largura="lg"
                >
                  <SimuladorProtocoloTRE />
                </GlassPainel>
              </GlassDialog>
            }
          />
        </GlassCardHeader>

        <GlassCardContent className="pb-6 sm:pb-8">
          {/* Celular e tablet: lista vertical, legível */}
          <FluxoStepper etapas={ETAPAS} orientacao="vertical" rotulo="Etapas do processo de atendimento" className="lg:hidden" />

          {/* Desktop: faixa de perfis alinhada às colunas do stepper horizontal */}
          <div className="hidden lg:block">
            <ol aria-hidden className="mb-5 grid grid-cols-6 gap-2">
              {FASES.map(({ perfil, passos }) => {
                const p = PERFIS_TRE[perfil];
                const Icone = p.icone;
                return (
                  <li key={perfil} className={cn("min-w-0", COL_SPAN[passos])}>
                    <span className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700">
                      <Icone className={cn("size-3.5 shrink-0", p.classes.texto)} />
                      <span className="truncate">
                        Etapa {p.etapa} · {p.rotulo}
                      </span>
                    </span>
                    <span className={cn("mt-2 block h-1.5 rounded-full opacity-80", p.classes.dot)} />
                  </li>
                );
              })}
            </ol>
            <FluxoStepper etapas={ETAPAS} rotulo="Etapas do processo de atendimento" />
          </div>
        </GlassCardContent>

        <GlassCardFooter className="justify-start gap-2 py-4">
          <span className="mr-1 text-sm font-medium text-slate-600">Ir direto para</span>
          <ul className="flex flex-wrap gap-2">
            {ATALHOS.map(({ perfil, rotulo, aba }) => {
              const p = PERFIS_TRE[perfil];
              return (
                <li key={aba}>
                  <Link
                    href={`${p.rota}?aba=${aba}`}
                    className="tre-inset tre-ring group inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-tre-navy transition-colors hover:bg-white/90"
                  >
                    <span aria-hidden className={cn("size-2 rounded-full", p.classes.dot)} />
                    {rotulo}
                    <span className="sr-only"> ({p.area})</span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-slate-600 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </GlassCardFooter>
      </GlassCard>
    </TreShell>
  );
}
