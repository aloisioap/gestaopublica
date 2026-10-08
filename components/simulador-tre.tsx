"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Banknote,
  BedDouble,
  Building2,
  CircleCheck,
  CircleStop,
  ClipboardCheck,
  Clock,
  FastForward,
  FileText,
  FlaskConical,
  Hash,
  LoaderCircle,
  Play,
  QrCode,
  Receipt,
  RefreshCw,
  Scissors,
  Shuffle,
  Stethoscope,
  TriangleAlert,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/tre/glass-card";
import { FluxoStepper, type EstadoEtapa, type EtapaFluxo } from "@/components/tre/fluxo-stepper";
import { StatusBadge, ToneBadge } from "@/components/tre/status-badge";
import { AvatarIniciais } from "@/components/tre/avatar-iniciais";
import { EmptyState } from "@/components/tre/empty-state";
import { treBotao } from "@/components/tre/ui-tre";
import { CREDENCIADOS_TRE, ESTATISTICAS_TRE, SERVIDORES_TRE } from "@/lib/dados-tre";
import { formatBRL } from "@/lib/tre/formatadores";
import type { PerfilTRE } from "@/lib/tre/perfis";
import { cn } from "@/lib/utils";

/*
 * Simulador do protocolo TRE-PA: um caso fictício percorre as 6 etapas do fluxo.
 * Renderizado dentro de um GlassPainel (já é vidro forte), então aqui só há
 * superfícies sem blur (tre-inset) e nenhum position: fixed.
 */

// ---------------------------------------------------------------------------
// Tipos e dados de referência
// ---------------------------------------------------------------------------

type Servidor = (typeof SERVIDORES_TRE)[number];
type Credenciado = (typeof CREDENCIADOS_TRE)[number];
type Procedimento = "Consulta" | "Exame" | "Internação" | "Cirurgia";
type Fase = "inicial" | "rodando" | "concluida" | "cancelada";

export type CenarioSimulacao = "aleatorio" | "aprovado" | "glosa";

/** Valor de referência por tipo de procedimento (usa as médias de ESTATISTICAS_TRE quando existem). */
const PROCEDIMENTOS: Record<Procedimento, { valor: number; icone: LucideIcon }> = {
  Consulta: { valor: ESTATISTICAS_TRE.valor_medio_consulta, icone: Stethoscope },
  Exame: { valor: 450, icone: FlaskConical },
  Internação: { valor: ESTATISTICAS_TRE.valor_medio_internacao, icone: BedDouble },
  Cirurgia: { valor: 12_500, icone: Scissors },
};
const TIPOS_PROCEDIMENTO = Object.keys(PROCEDIMENTOS) as Procedimento[];

/** Glosa parcial aplicada pela auditoria e chance de ocorrer no cenário aleatório. */
const TAXA_GLOSA = 0.15;
const CHANCE_GLOSA = 0.15;

const PCT = new Intl.NumberFormat("pt-BR", { style: "percent", maximumFractionDigits: 0 });

const CENARIOS: Record<CenarioSimulacao, { rotulo: string; curto: string; icone: LucideIcon; descricao: string }> = {
  aleatorio: {
    rotulo: "Aleatório",
    curto: "Aleatório",
    icone: Shuffle,
    descricao: `Resultado sorteado: ${PCT.format(CHANCE_GLOSA)} de chance de glosa, como no dia a dia.`,
  },
  aprovado: {
    rotulo: "Aprovado",
    curto: "Aprovado",
    icone: CircleCheck,
    descricao: "A auditoria aprova a documentação e o pagamento sai integral.",
  },
  glosa: {
    rotulo: "Glosa parcial",
    curto: "Glosa",
    icone: TriangleAlert,
    descricao: `A auditoria glosa ${PCT.format(TAXA_GLOSA)} do valor e o pagamento sai com retenção.`,
  },
};
const ORDEM_CENARIOS: CenarioSimulacao[] = ["aleatorio", "aprovado", "glosa"];

/** Tudo o que é sorteado fica decidido no início: animar, pular e cancelar usam o mesmo caso. */
interface CasoSimulado {
  protocolo: string;
  servidor: Servidor;
  credenciado: Credenciado;
  procedimento: Procedimento;
  validacao: "QR Code" | "WhatsApp";
  glosa: boolean;
  valorApresentado: number;
  valorGlosado: number;
  valorLiberado: number;
}

interface Execucao {
  caso: CasoSimulado;
  /** Etapas já concluídas (0 a TOTAL_PASSOS). A etapa em andamento é a de índice `concluidas`. */
  concluidas: number;
  status: Exclude<Fase, "inicial">;
}

interface PassoSimulacao {
  id: string;
  titulo: string;
  descricao: string;
  perfil: PerfilTRE;
  prazo: string;
  icone: LucideIcon;
  resumo: (caso: CasoSimulado) => string;
}

const PASSOS: PassoSimulacao[] = [
  {
    id: "solicitacao",
    titulo: "Solicitação do Servidor",
    descricao: "Servidor solicita procedimento via portal",
    perfil: "servidor",
    prazo: "Na hora",
    icone: Clock,
    resumo: (c) => `${c.servidor.nome} solicitou ${c.procedimento.toLowerCase()}`,
  },
  {
    id: "validacao",
    titulo: "Validação QR Code / WhatsApp",
    descricao: "Validação da carteirinha antes da execução",
    perfil: "credenciado",
    prazo: "Antes do atendimento",
    icone: QrCode,
    resumo: (c) => `Validação via ${c.validacao} confirmada`,
  },
  {
    id: "execucao",
    titulo: "Execução do Procedimento",
    descricao: "Procedimento realizado no credenciado",
    perfil: "credenciado",
    prazo: "No agendamento",
    icone: Building2,
    resumo: (c) => `Procedimento realizado em ${c.credenciado.nome_fantasia}`,
  },
  {
    id: "faturamento",
    titulo: "Faturamento pelo Credenciado",
    descricao: "Inserção de XML TISS e PDF no sistema",
    perfil: "credenciado",
    prazo: "Até 2 dias úteis",
    icone: FileText,
    resumo: (c) => `XML TISS e PDF enviados (${c.procedimento})`,
  },
  {
    id: "auditoria",
    titulo: "Auditoria TISS",
    descricao: "Análise conforme checklist TRE",
    perfil: "auditor",
    prazo: "Até 5 dias úteis",
    icone: ClipboardCheck,
    resumo: (c) =>
      c.glosa
        ? `Glosa parcial aplicada (${PCT.format(TAXA_GLOSA)}): ${formatBRL(c.valorGlosado)}`
        : "Documentação aprovada",
  },
  {
    id: "pagamento",
    titulo: "Pagamento",
    descricao: "Liberação do pagamento ao credenciado",
    perfil: "gestor",
    prazo: "D+30",
    icone: Banknote,
    resumo: (c) =>
      c.glosa
        ? `Pagamento com retenção: ${formatBRL(c.valorLiberado)} liberados`
        : `Pagamento integral liberado: ${formatBRL(c.valorLiberado)}`,
  },
];
const TOTAL_PASSOS = PASSOS.length;

// ---------------------------------------------------------------------------
// Regras da simulação (puras; o sorteio só acontece em handlers)
// ---------------------------------------------------------------------------

const centavos = (valor: number) => Math.round(valor * 100) / 100;
const plural = (n: number, singular: string, pluralForma: string) => `${n} ${n === 1 ? singular : pluralForma}`;

function sortear<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

function montarCaso(cenario: CenarioSimulacao): CasoSimulado {
  const procedimento = sortear(TIPOS_PROCEDIMENTO);
  const glosa = cenario === "glosa" || (cenario === "aleatorio" && Math.random() < CHANCE_GLOSA);
  const valorApresentado = PROCEDIMENTOS[procedimento].valor;
  const valorGlosado = glosa ? centavos(valorApresentado * TAXA_GLOSA) : 0;
  return {
    protocolo: `SIM-${1000 + Math.floor(Math.random() * 9000)}`,
    servidor: sortear(SERVIDORES_TRE),
    credenciado: sortear(CREDENCIADOS_TRE),
    procedimento,
    validacao: Math.random() < 0.5 ? "QR Code" : "WhatsApp",
    glosa,
    valorApresentado,
    valorGlosado,
    valorLiberado: centavos(valorApresentado - valorGlosado),
  };
}

/** pendente → "pendente", processando → "atual", concluído → "concluida", aviso (glosa na auditoria) → "alerta". */
function estadoDoPasso(execucao: Execucao | null, indice: number): EstadoEtapa {
  if (!execucao || indice > execucao.concluidas) return "pendente";
  if (indice === execucao.concluidas) return execucao.status === "rodando" ? "atual" : "pendente";
  return PASSOS[indice].id === "auditoria" && execucao.caso.glosa ? "alerta" : "concluida";
}

// ---------------------------------------------------------------------------
// Estilos locais
// ---------------------------------------------------------------------------

/* Duração e atraso com o mesmo prefixo motion-safe para vencer o 150ms padrão de animate-in. */
const ENTRADA =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 fill-mode-both motion-safe:[animation-duration:500ms] motion-safe:[animation-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const ATRASO = [
  "motion-safe:[animation-delay:0ms]",
  "motion-safe:[animation-delay:75ms]",
  "motion-safe:[animation-delay:150ms]",
] as const;

/* Botões de vidro sem blur: o painel em volta já desfoca o fundo (nunca aninhar blur). */
const BOTAO_VIDRO = cn(treBotao({ tom: "vidro" }), "backdrop-blur-none focus-visible:ring-tre-navy");
const BOTAO_PRIMARIO = cn(treBotao({ tom: "primario" }), "focus-visible:ring-tre-navy focus-visible:ring-offset-2");
const BOTAO_FANTASMA = cn(treBotao({ tom: "fantasma" }), "focus-visible:ring-tre-navy");

/** Largura da barra por etapas concluídas (0 a 6), sem style inline: a transição de width continua valendo. */
const LARGURA_PROGRESSO = ["w-0", "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-full"] as const;

const ROTULO_SECAO = "text-xs font-semibold uppercase tracking-wider text-slate-600";

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

export interface SimuladorProtocoloTREProps {
  /** Cenário pré-selecionado (padrão: aleatório). */
  cenarioInicial?: CenarioSimulacao;
}

export function SimuladorProtocoloTRE({ cenarioInicial = "aleatorio" }: SimuladorProtocoloTREProps = {}) {
  const [cenario, setCenario] = useState<CenarioSimulacao>(cenarioInicial);
  const [execucao, setExecucao] = useState<Execucao | null>(null);

  const idCenario = useId();
  const idResultado = useId();
  const iniciarRef = useRef<HTMLButtonElement>(null);
  const pularRef = useRef<HTMLButtonElement>(null);
  const resultadoRef = useRef<HTMLHeadingElement>(null);
  const canceladaRef = useRef<HTMLButtonElement>(null);

  const fase: Fase = execucao?.status ?? "inicial";
  const rodando = fase === "rodando";
  const concluidas = execucao?.concluidas ?? 0;
  const caso = execucao?.caso ?? null;

  // Avança uma etapa por vez. O cleanup cancela o timer pendente ao pular, cancelar,
  // reiniciar ou desmontar (fechar o GlassPainel), então nenhum setState sobra.
  useEffect(() => {
    if (execucao?.status !== "rodando") return;
    const timer = window.setTimeout(() => {
      setExecucao((atual) => {
        if (!atual || atual.status !== "rodando") return atual;
        const proximas = atual.concluidas + 1;
        return { ...atual, concluidas: proximas, status: proximas >= TOTAL_PASSOS ? "concluida" : "rodando" };
      });
    }, 1200 + Math.random() * 800);
    return () => window.clearTimeout(timer);
  }, [execucao]);

  // O botão clicado some a cada troca de fase: leva o foco ao próximo controle útil.
  const faseAnterior = useRef<Fase>(fase);
  useEffect(() => {
    if (faseAnterior.current === fase) return;
    faseAnterior.current = fase;
    if (fase === "rodando") pularRef.current?.focus();
    else if (fase === "concluida") resultadoRef.current?.focus();
    else if (fase === "cancelada") canceladaRef.current?.focus();
    else iniciarRef.current?.focus();
  }, [fase]);

  const iniciar = () => setExecucao({ caso: montarCaso(cenario), concluidas: 0, status: "rodando" });

  const pular = () =>
    setExecucao((atual) =>
      atual?.status === "rodando" ? { ...atual, concluidas: TOTAL_PASSOS, status: "concluida" } : atual,
    );

  const cancelar = () =>
    setExecucao((atual) => (atual?.status === "rodando" ? { ...atual, status: "cancelada" } : atual));

  const resetar = () => setExecucao(null);

  const estados = PASSOS.map((_, i) => estadoDoPasso(execucao, i));
  const etapas: EtapaFluxo[] = PASSOS.map((passo, i) => ({
    id: passo.id,
    titulo: passo.titulo,
    descricao: passo.descricao,
    perfil: passo.perfil,
    prazo: passo.prazo,
    detalhe:
      caso && i < concluidas ? (
        <DetalhePasso alerta={estados[i] === "alerta"}>{passo.resumo(caso)}</DetalhePasso>
      ) : undefined,
  }));

  const progresso = execucao ? (concluidas / TOTAL_PASSOS) * 100 : 0;
  const passoAtual = PASSOS[Math.min(concluidas, TOTAL_PASSOS - 1)];
  const etapasOk = estados.filter((e) => e === "concluida").length;
  const alertas = estados.filter((e) => e === "alerta").length;

  const anuncio =
    !caso
      ? ""
      : fase === "rodando"
        ? `Etapa ${concluidas + 1} de ${TOTAL_PASSOS}: ${passoAtual.titulo}`
        : fase === "concluida"
          ? `Simulação concluída: ${caso.glosa ? "glosa parcial" : "processo aprovado"}. Valor liberado ${formatBRL(caso.valorLiberado)}.`
          : `Simulação cancelada na etapa ${concluidas + 1} de ${TOTAL_PASSOS}.`;

  return (
    <div className="w-full space-y-4 sm:space-y-5">
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {anuncio}
      </p>

      {/* Controles: cenário, início e progresso */}
      <div className="tre-inset rounded-3xl p-4 sm:p-5">
        {/* sm:flex-wrap: entre 640 e ~710 px (celular deitado) as pílulas com ícone + o botão não cabem lado a lado */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-2">
            <p id={idCenario} className={ROTULO_SECAO}>
              Cenário
            </p>
            <div
              role="group"
              aria-labelledby={idCenario}
              className="flex w-full gap-1 rounded-full bg-tre-navy-soft/80 p-1 ring-1 ring-inset ring-tre-navy/10 sm:inline-flex sm:w-auto"
            >
              {ORDEM_CENARIOS.map((id) => {
                const opcao = CENARIOS[id];
                const ativo = cenario === id;
                const Icone = opcao.icone;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={ativo}
                    disabled={rodando}
                    onClick={() => setCenario(id)}
                    className={cn(
                      "tre-ring inline-flex h-10 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-2 text-sm font-medium transition-colors sm:flex-none sm:px-4",
                      "disabled:cursor-not-allowed disabled:opacity-60",
                      ativo
                        ? "bg-white text-tre-navy shadow-sm ring-1 ring-tre-navy/10"
                        : "text-slate-700 enabled:hover:bg-white/70 enabled:hover:text-tre-navy",
                    )}
                  >
                    <Icone aria-hidden className={cn("hidden size-4 shrink-0 sm:block", ativo && "text-tre-green")} />
                    <span className="truncate sm:hidden">{opcao.curto}</span>
                    <span className="hidden sm:inline">{opcao.rotulo}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-slate-600">{CENARIOS[cenario].descricao}</p>
          </div>

          {(fase === "inicial" || rodando) && (
            <Button
              ref={iniciarRef}
              onClick={iniciar}
              disabled={rodando}
              className={cn(BOTAO_PRIMARIO, "h-11 w-full shrink-0 rounded-full px-6 disabled:opacity-80 sm:w-auto")}
            >
              {rodando ? (
                <>
                  <LoaderCircle aria-hidden className="motion-safe:animate-spin" />
                  Simulando…
                </>
              ) : (
                <>
                  <Play aria-hidden />
                  Iniciar simulação
                </>
              )}
            </Button>
          )}
        </div>

        {caso && (
          <div className="mt-4 border-t border-white/80 pt-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <OrbFase key={`${fase}-${concluidas}`} fase={fase} glosa={caso.glosa} icone={passoAtual.icone} />
                <div className="min-w-0">
                  <p className={ROTULO_SECAO}>
                    {fase === "rodando"
                      ? `Etapa ${concluidas + 1} de ${TOTAL_PASSOS}`
                      : fase === "concluida"
                        ? "Fluxo concluído"
                        : `Cancelada na etapa ${concluidas + 1} de ${TOTAL_PASSOS}`}
                  </p>
                  <p className="truncate text-sm font-semibold text-tre-navy">
                    {fase === "concluida"
                      ? caso.glosa
                        ? "Pagamento liberado com retenção"
                        : "Pagamento integral liberado"
                      : passoAtual.titulo}
                  </p>
                </div>
              </div>

              {rodando && (
                <div className="flex flex-wrap gap-2">
                  <Button ref={pularRef} onClick={pular} className={cn(BOTAO_VIDRO, "h-10 flex-1 rounded-full px-4 sm:flex-none")}>
                    <FastForward aria-hidden />
                    Pular animação
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={cancelar}
                    className={cn(BOTAO_FANTASMA, "h-10 flex-1 rounded-full px-4 sm:flex-none")}
                  >
                    <X aria-hidden />
                    Cancelar
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div
                role="progressbar"
                aria-label="Progresso da simulação"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progresso)}
                aria-valuetext={`${concluidas} de ${TOTAL_PASSOS} etapas concluídas`}
                className="h-2 flex-1 overflow-hidden rounded-full bg-tre-navy/10 ring-1 ring-inset ring-white/60"
              >
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r transition-[width] duration-700 ease-out motion-reduce:transition-none",
                    fase === "cancelada" ? "from-slate-400 to-slate-500" : "from-tre-green to-tre-info",
                    LARGURA_PROGRESSO[concluidas] ?? "w-full",
                  )}
                />
              </div>
              <span aria-hidden className="w-10 text-right text-sm font-semibold tabular-nums text-tre-navy">
                {PCT.format(progresso / 100)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Caso simulado */}
      {caso ? (
        <section aria-label="Caso simulado" key={caso.protocolo}>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className={ROTULO_SECAO}>Caso simulado</p>
            <ToneBadge tom="neutral" className="tabular-nums">
              <Hash aria-hidden className="size-3" />
              Protocolo fictício {caso.protocolo}
            </ToneBadge>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ChipCaso className={ATRASO[0]} rotulo="Servidor" titulo={caso.servidor.nome} detalhe={`Matrícula ${caso.servidor.matricula}`}>
              <AvatarIniciais nome={caso.servidor.nome} />
            </ChipCaso>
            <ChipCaso
              className={ATRASO[1]}
              rotulo="Credenciado"
              titulo={caso.credenciado.nome_fantasia}
              detalhe={`${caso.credenciado.tipo} · ${caso.credenciado.cidade}`}
            >
              <OrbIcone icone={Building2} className="from-tre-green to-tre-navy text-white" />
            </ChipCaso>
            <ChipCaso
              className={ATRASO[2]}
              rotulo="Procedimento"
              titulo={caso.procedimento}
              detalhe={
                <>
                  Valor estimado <span className="font-semibold tabular-nums text-tre-navy">{formatBRL(caso.valorApresentado)}</span>
                </>
              }
            >
              <OrbIcone icone={PROCEDIMENTOS[caso.procedimento].icone} className="from-tre-gold-soft to-tre-gold text-tre-navy-deep" />
            </ChipCaso>
          </div>
        </section>
      ) : (
        <EmptyState
          compacto
          icone={Shuffle}
          titulo="Pronto para simular"
          descricao={
            <>
              Simule o fluxo completo: Validação → Execução → Faturamento → Auditoria → Pagamento. Servidor, credenciado e
              procedimento são sorteados entre os dados de demonstração.
            </>
          }
        />
      )}

      {/* Etapas */}
      <div className="tre-inset rounded-3xl p-4 sm:p-5" aria-busy={rodando}>
        <FluxoStepper etapas={etapas} estados={estados} orientacao="responsiva" rotulo="Etapas da simulação" />
      </div>

      {/* Cancelada */}
      {fase === "cancelada" && caso && (
        <EmptyState
          compacto
          icone={CircleStop}
          titulo="Simulação cancelada"
          descricao={`Interrompida na etapa ${concluidas + 1} de ${TOTAL_PASSOS} (${passoAtual.titulo}). Nada foi registrado.`}
          className={ENTRADA}
          acao={
            <div className="flex flex-wrap justify-center gap-2">
              <Button ref={canceladaRef} onClick={iniciar} className={cn(BOTAO_PRIMARIO, "h-10 rounded-full px-5")}>
                <RefreshCw aria-hidden />
                Simular novamente
              </Button>
              <Button variant="ghost" onClick={resetar} className={cn(BOTAO_FANTASMA, "h-10 rounded-full px-4")}>
                Voltar ao início
              </Button>
            </div>
          }
        />
      )}

      {/* Resultado final */}
      {fase === "concluida" && caso && (
        <GlassCard
          as="section"
          variante="inset"
          aria-labelledby={idResultado}
          className={cn("relative overflow-hidden p-5 shadow-glass sm:p-6", ENTRADA)}
        >
          <span
            aria-hidden
            className={cn(
              "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
              caso.glosa ? "from-tre-gold via-tre-warn to-tre-terra" : "from-tre-green via-tre-success to-tre-info",
            )}
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <OrbIcone
              icone={caso.glosa ? TriangleAlert : CircleCheck}
              tamanho="lg"
              className={caso.glosa ? "from-tre-gold-soft to-tre-gold text-tre-navy-deep" : "from-tre-success to-tre-green text-white"}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3
                  ref={resultadoRef}
                  id={idResultado}
                  tabIndex={-1}
                  className="text-lg font-semibold leading-tight text-tre-navy focus:outline-none"
                >
                  Resultado da simulação
                </h3>
                <StatusBadge
                  status={caso.glosa ? "Glosado" : "Pago"}
                  rotulo={caso.glosa ? "Glosa parcial" : "Processo aprovado"}
                  tamanho="md"
                />
              </div>
              <p className="mt-1.5 text-sm text-slate-600">
                {caso.procedimento} de {caso.servidor.nome} em {caso.credenciado.nome_fantasia}, protocolo{" "}
                <span className="tabular-nums">{caso.protocolo}</span>.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ToneBadge tom="success" className="tabular-nums">
                  <CircleCheck aria-hidden className="size-3" />
                  {plural(etapasOk, "etapa concluída", "etapas concluídas")}
                </ToneBadge>
                <ToneBadge tom={alertas > 0 ? "warning" : "neutral"} className="tabular-nums">
                  <TriangleAlert aria-hidden className="size-3" />
                  {alertas > 0 ? plural(alertas, "alerta", "alertas") : "Nenhum alerta"}
                </ToneBadge>
              </div>
            </div>
          </div>

          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            <ValorResultado
              rotulo="Valor apresentado"
              valor={formatBRL(caso.valorApresentado)}
              detalhe={`${caso.procedimento} · XML TISS`}
              icone={Receipt}
              tom="tre-tone-progress"
              className={ATRASO[0]}
            />
            <ValorResultado
              rotulo="Valor glosado"
              valor={formatBRL(caso.valorGlosado)}
              detalhe={caso.glosa ? `${PCT.format(TAXA_GLOSA)} do apresentado` : "Sem glosa"}
              icone={TriangleAlert}
              tom={caso.glosa ? "tre-tone-danger" : "tre-tone-neutral"}
              destaque={caso.glosa ? "text-tre-danger-ink" : undefined}
              className={ATRASO[1]}
            />
            <ValorResultado
              rotulo="Valor liberado"
              valor={formatBRL(caso.valorLiberado)}
              detalhe={caso.glosa ? "Pagamento com retenção · D+30" : "Pagamento integral · D+30"}
              icone={Banknote}
              tom="tre-tone-success"
              className={ATRASO[2]}
            />
          </dl>

          <div className="mt-6 space-y-4 border-t border-white/80 pt-5">
            <div className="flex flex-wrap gap-2">
              <Button onClick={iniciar} className={cn(BOTAO_PRIMARIO, "h-10 flex-1 rounded-full px-5 sm:flex-none")}>
                <RefreshCw aria-hidden />
                Simular novamente
              </Button>
              <Button variant="ghost" onClick={resetar} className={cn(BOTAO_FANTASMA, "h-10 flex-1 rounded-full px-4 sm:flex-none")}>
                <X aria-hidden />
                Fechar resultado
              </Button>
            </div>
            <div>
              <p className={ROTULO_SECAO}>Veja o fluxo real na plataforma</p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Button asChild className={cn(BOTAO_VIDRO, "h-auto min-h-10 whitespace-normal rounded-full px-4 py-2 text-center")}>
                  <Link href="/tre/auditor?aba=faturas">
                    Ver faturas na Área do Auditor
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild className={cn(BOTAO_VIDRO, "h-auto min-h-10 whitespace-normal rounded-full px-4 py-2 text-center")}>
                  <Link href="/tre/prestador?aba=faturas">
                    Ver Área do Credenciado
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Peças locais
// ---------------------------------------------------------------------------

function OrbIcone({
  icone: Icone,
  tamanho = "md",
  className,
}: {
  icone: LucideIcon;
  tamanho?: "md" | "lg";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-md ring-2 ring-white/70",
        tamanho === "md" ? "size-10" : "size-12",
        className,
      )}
    >
      <Icone className={tamanho === "md" ? "size-5" : "size-6"} />
    </span>
  );
}

/** Ícone da fase atual; a `key` muda a cada etapa para repetir a entrada. */
function OrbFase({ fase, glosa, icone }: { fase: Fase; glosa: boolean; icone: LucideIcon }) {
  const config =
    fase === "concluida"
      ? glosa
        ? { icone: TriangleAlert, classe: "from-tre-gold-soft to-tre-gold text-tre-navy-deep" }
        : { icone: CircleCheck, classe: "from-tre-success to-tre-green text-white" }
      : fase === "cancelada"
        ? { icone: CircleStop, classe: "from-slate-200 to-slate-300 text-slate-700" }
        : { icone, classe: "from-tre-info to-tre-navy text-white shadow-[0_0_0_6px_rgb(21_101_192/0.14)]" };
  return (
    <OrbIcone
      icone={config.icone}
      className={cn(
        config.classe,
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-75 motion-safe:[animation-duration:300ms]",
      )}
    />
  );
}

function ChipCaso({
  rotulo,
  titulo,
  detalhe,
  className,
  children,
}: {
  rotulo: string;
  titulo: string;
  detalhe: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("tre-inset flex min-w-0 items-center gap-3 rounded-2xl p-3 shadow-sm", ENTRADA, className)}>
      {children}
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">{rotulo}</p>
        <p className="truncate text-sm font-semibold text-tre-navy" title={titulo}>
          {titulo}
        </p>
        <p className="truncate text-xs text-slate-600">{detalhe}</p>
      </div>
    </div>
  );
}

function DetalhePasso({ alerta, children }: { alerta: boolean; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-block max-w-full break-words rounded-xl px-2 py-1 font-medium",
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 fill-mode-both motion-safe:[animation-duration:300ms]",
        alerta ? "tre-tone-warning" : "bg-white/80 text-slate-700 ring-1 ring-slate-200/80",
      )}
    >
      {children}
    </span>
  );
}

function ValorResultado({
  rotulo,
  valor,
  detalhe,
  icone: Icone,
  tom,
  destaque,
  className,
}: {
  rotulo: string;
  valor: string;
  detalhe: string;
  icone: LucideIcon;
  tom: string;
  destaque?: string;
  className?: string;
}) {
  return (
    <div className={cn("tre-inset rounded-2xl p-4 shadow-sm", ENTRADA, className)}>
      <dt className="flex items-center gap-2 text-xs font-medium text-slate-600">
        <span aria-hidden className={cn("grid size-7 place-items-center rounded-lg", tom)}>
          <Icone className="size-4" />
        </span>
        {rotulo}
      </dt>
      <dd className={cn("mt-2 text-xl font-bold tracking-tight tabular-nums text-tre-navy", destaque)}>{valor}</dd>
      <dd className="mt-0.5 text-xs text-slate-600">{detalhe}</dd>
    </div>
  );
}
