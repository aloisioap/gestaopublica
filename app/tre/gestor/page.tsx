"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  BarChart3,
  BedDouble,
  BellRing,
  Building2,
  CalendarRange,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  Database,
  Download,
  Droplet,
  ExternalLink,
  FileText,
  HeartPulse,
  Hourglass,
  Info,
  LockKeyhole,
  MapPin,
  Microscope,
  Percent,
  Printer,
  RotateCcw,
  Search,
  ShieldAlert,
  Siren,
  Star,
  Stethoscope,
  TriangleAlert,
  Trophy,
  UserRound,
  Users,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { TreShell } from "@/components/tre/tre-shell";
import { GlassCard } from "@/components/tre/glass-card";
import { KpiCard, type KpiCardProps } from "@/components/tre/kpi-card";
import { StatusBadge, ToneBadge } from "@/components/tre/status-badge";
import { SectionHeader } from "@/components/tre/section-header";
import { EmptyState } from "@/components/tre/empty-state";
import { GlassDialog, GlassDialogClose, GlassPainel } from "@/components/tre/glass-painel";
import { GlassTabsList, GlassTabsTrigger } from "@/components/tre/glass-tabs";
import { treBotao, TRE_CAMPO } from "@/components/tre/ui-tre";
import { AvatarIniciais } from "@/components/tre/avatar-iniciais";
import { useQueryParam } from "@/components/tre/use-query-param";
import {
  CREDENCIADOS_TRE,
  ESTATISTICAS_TRE,
  FATURAS_TRE,
  HISTORICO_SAUDE_TRE,
  ITENS_FATURA_TRE,
  PROCEDIMENTOS_TRE,
  SERVIDORES_TRE,
} from "@/lib/dados-tre";
import {
  formatBRL,
  formatBRLCompacto,
  formatCompetencia,
  formatData,
  formatNumero,
  formatPct,
} from "@/lib/tre/formatadores";
import { TOM_CLASSES, type TomTRE } from "@/lib/tre/status";

/* ============================================================
   Tipos
   ============================================================ */

type Servidor = (typeof SERVIDORES_TRE)[number];
type Credenciado = (typeof CREDENCIADOS_TRE)[number];
type Historico = (typeof HISTORICO_SAUDE_TRE)[number];
type Fatura = (typeof FATURAS_TRE)[number];
type Procedimento = (typeof PROCEDIMENTOS_TRE)[number];
type Categoria = Historico["categoria"];
type ChaveSerie = "consultas" | "exames" | "internacoes" | "cirurgias";

const ABAS = ["dashboard", "servidores", "credenciados", "alertas", "relatorios"] as const;
type Aba = (typeof ABAS)[number];
const ehAba = (valor: string): valor is Aba => (ABAS as readonly string[]).includes(valor);

interface Mes {
  mes: number;
  consultas: number;
  exames: number;
  internacoes: number;
  cirurgias: number;
  valor: number;
}

interface Periodo {
  id: string;
  rotulo: string;
  curto: string;
  arquivo: string;
  meses: number[];
  anterior?: string;
}

interface UsoServidor {
  servidor: Servidor;
  contagem: Record<Categoria, number>;
  atendimentos: number;
  faturado: number;
  glosado: number;
  custo: number;
  ultimoAtendimento: string | null;
  /** Mais recente primeiro. */
  historico: Historico[];
  /** Autorizados e ainda não executados. */
  emAberto: Procedimento[];
}

type Severidade = "alta" | "media" | "baixa";

interface AlertaGestor {
  id: string;
  severidade: Severidade;
  tipo: "Custo" | "Frequência" | "Glosa";
  titulo: string;
  descricao: string;
  data: string;
  matricula?: string;
  faturaId?: string;
  numeroFatura?: string;
}

type ColunaServidor = "nome" | "lotacao" | ChaveSerie | "custo";
type Direcao = "asc" | "desc";
interface Ordem {
  coluna: ColunaServidor;
  direcao: Direcao;
}

interface LinhaCredenciado {
  credenciado: Credenciado;
  posicao: number | null;
  atendimentos: number | null;
  valor: number | null;
  participacao: number | null;
}

type TipoColuna = "texto" | "inteiro" | "moeda" | "pct" | "decimal";
type Celula = string | number | null;
type RelatorioId = "custos" | "servidores" | "credenciados" | "glosas" | "alertas";

interface Relatorio {
  id: RelatorioId;
  titulo: string;
  descricao: string;
  escopo: string;
  arquivo: string;
  colunas: { titulo: string; tipo?: TipoColuna }[];
  linhas: Celula[][];
  total?: Celula[];
}

/* ============================================================
   Constantes de apresentação
   ============================================================ */

const ANO = 2024;
const DATA_CORTE = "2024-06-30";
const ID_ABAS = "secao-abas";

const SERIES = [
  { chave: "consultas", rotulo: "Consultas", categoria: "Consultas", cor: "bg-tre-info", icone: Stethoscope },
  { chave: "exames", rotulo: "Exames", categoria: "Exames", cor: "bg-tre-green", icone: Microscope },
  { chave: "internacoes", rotulo: "Internações", categoria: "Internações", cor: "bg-tre-terra", icone: BedDouble },
  { chave: "cirurgias", rotulo: "Cirurgias", categoria: "Cirurgias", cor: "bg-tre-danger", icone: Activity },
] as const satisfies ReadonlyArray<{ chave: ChaveSerie; rotulo: string; categoria: Categoria; cor: string; icone: LucideIcon }>;

const CATEGORIAS: Categoria[] = SERIES.map((s) => s.categoria);
const CATEGORIA_DA_CHAVE: Record<ChaveSerie, Categoria> = {
  consultas: "Consultas",
  exames: "Exames",
  internacoes: "Internações",
  cirurgias: "Cirurgias",
};
const SINGULAR: Record<Categoria, string> = { Consultas: "consulta", Exames: "exame", Internações: "internação", Cirurgias: "cirurgia" };
const PLURAL: Record<Categoria, string> = { Consultas: "consultas", Exames: "exames", Internações: "internações", Cirurgias: "cirurgias" };

const MESES_EXTENSO = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const MESES_ABREV = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

/** Série mensal do painel (1º semestre de 2024). KPI do período e gráfico usam esta mesma série. */
const SERIE_MENSAL: Mes[] = [
  { mes: 1, consultas: 45, exames: 32, internacoes: 8, cirurgias: 3, valor: 125000 },
  { mes: 2, consultas: 52, exames: 38, internacoes: 6, cirurgias: 4, valor: 142000 },
  { mes: 3, consultas: 48, exames: 35, internacoes: 12, cirurgias: 5, valor: 185000 },
  { mes: 4, consultas: 55, exames: 42, internacoes: 9, cirurgias: 2, valor: 158000 },
  { mes: 5, consultas: 60, exames: 48, internacoes: 10, cirurgias: 6, valor: 195000 },
  { mes: 6, consultas: 58, exames: 45, internacoes: 7, cirurgias: 4, valor: 168000 },
];

const PERIODOS: Periodo[] = [
  { id: "semestre", rotulo: "Jan–Jun/2024", curto: "jan–jun/2024", arquivo: "jan-jun-2024", meses: [1, 2, 3, 4, 5, 6] },
  { id: "t1", rotulo: "1º trimestre/2024", curto: "1º tri/2024", arquivo: "1tri-2024", meses: [1, 2, 3] },
  { id: "t2", rotulo: "2º trimestre/2024", curto: "2º tri/2024", arquivo: "2tri-2024", meses: [4, 5, 6], anterior: "t1" },
  ...SERIE_MENSAL.map((m) => ({
    id: `m${m.mes}`,
    rotulo: `${MESES_EXTENSO[m.mes - 1]}/${ANO}`,
    curto: formatCompetencia(m.mes, ANO),
    arquivo: `${MESES_ABREV[m.mes - 1].toLowerCase()}-${ANO}`,
    meses: [m.mes],
    anterior: m.mes > 1 ? `m${m.mes - 1}` : undefined,
  })),
];
const PERIODO_PADRAO = PERIODOS[0];
const PERIODO_POR_ID = new Map(PERIODOS.map((p) => [p.id, p]));
const GRUPOS_PERIODO = [
  { rotulo: "Semestre", itens: PERIODOS.filter((p) => p.id === "semestre") },
  { rotulo: "Trimestres", itens: PERIODOS.filter((p) => p.id.startsWith("t")) },
  { rotulo: "Meses", itens: PERIODOS.filter((p) => p.id.startsWith("m")) },
];

const SEVERIDADE: Record<Severidade, { rotulo: string; tom: TomTRE; barra: string; icone: LucideIcon; ordem: number }> = {
  alta: { rotulo: "Alta", tom: "danger", barra: "bg-tre-danger", icone: Siren, ordem: 0 },
  media: { rotulo: "Média", tom: "warning", barra: "bg-tre-warn", icone: TriangleAlert, ordem: 1 },
  baixa: { rotulo: "Baixa", tom: "info", barra: "bg-tre-info", icone: Info, ordem: 2 },
};

const MEDALHA = [
  { orb: "from-tre-gold-soft to-tre-gold text-tre-navy-deep", barra: "from-tre-gold", linha: "bg-tre-gold/[0.07]" },
  { orb: "from-slate-100 to-slate-300 text-tre-navy-deep", barra: "from-slate-400", linha: "bg-slate-400/[0.07]" },
  { orb: "from-tre-terra to-[#7F2508] text-white", barra: "from-tre-terra", linha: "bg-tre-terra/[0.05]" },
] as const;

/* Entrada animada (tailwindcss-animate) com fill-mode-both e escalonamento. */
const ENTRADA =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 fill-mode-both motion-safe:[animation-duration:500ms] motion-safe:[animation-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const ATRASO = [
  "motion-safe:[animation-delay:0ms]",
  "motion-safe:[animation-delay:75ms]",
  "motion-safe:[animation-delay:150ms]",
  "motion-safe:[animation-delay:225ms]",
  "motion-safe:[animation-delay:300ms]",
  "motion-safe:[animation-delay:375ms]",
] as const;

/** Botão "vidro" sem blur próprio: fica dentro de superfícies que já desfocam. */
const BOTAO_VIDRO = cn(treBotao({ tom: "vidro" }), "backdrop-blur-none");
const BOTAO_FANTASMA = treBotao({ tom: "fantasma" });
const BOTAO_PRIMARIO = treBotao({ tom: "primario" });
const MENU_SELECT = "rounded-xl border-white/70 bg-white/95 shadow-glass-lg";
const ITEM_SELECT = "min-h-10 rounded-lg";
const ROLAGEM_ALVO = "scroll-mt-32 md:scroll-mt-24";
const CONTEUDO_ABA = "mt-5 rounded-3xl focus-visible:ring-2 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0";
const TH = "h-auto px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600";
const CHIP_CONTEXTO = "tre-inset inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-700";
const TITULO_BLOCO = "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-600";
const ESCALA_COLUNA = 86; // % da área do gráfico ocupada pela maior coluna (o resto é do rótulo em R$)

const DECIMAL_CSV = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
const UMA_CASA_CSV = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const UMA_CASA = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const COMPACTO = new Intl.NumberFormat("pt-BR", { notation: "compact", maximumFractionDigits: 0 });

/* ============================================================
   Funções auxiliares
   ============================================================ */

const soma = (valores: number[]) => Math.round(valores.reduce((total, v) => total + v, 0) * 100) / 100;
const normalizar = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const plural = (n: number, singular: string, plurais: string) => `${formatNumero(n)} ${n === 1 ? singular : plurais}`;
const totalMes = (m: Mes, chaves: readonly ChaveSerie[] = SERIES.map((s) => s.chave)) => chaves.reduce((t, c) => t + m[c], 0);
const movimentoReduzido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/** Execução, ou a solicitação quando o procedimento ainda não foi realizado. */
const dataReferencia = (p: Procedimento): string => p.data_execucao ?? p.data_solicitacao;
const linkAuditoria = (faturaId: string) => `/tre/auditor?aba=faturas&fatura=${encodeURIComponent(faturaId)}`;

function juntar(partes: string[]) {
  if (partes.length <= 1) return partes[0] ?? "";
  return `${partes.slice(0, -1).join(", ")} e ${partes[partes.length - 1]}`;
}

function contarPorCategoria(itens: readonly Historico[]): Record<Categoria, number> {
  const contagem: Record<Categoria, number> = { Consultas: 0, Exames: 0, Internações: 0, Cirurgias: 0 };
  for (const h of itens) contagem[h.categoria] += 1;
  return contagem;
}

function baixarCSV(nomeArquivo: string, linhas: string[][]) {
  const csv = "﻿" + linhas.map((l) => l.map((c) => `"${c.replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = nomeArquivo;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Revogar no mesmo tick pode cancelar o download em alguns navegadores (Firefox/Safari antigos).
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function celulaCSV(valor: Celula, tipo: TipoColuna = "texto") {
  if (valor === null) return "";
  if (typeof valor === "string") return valor;
  if (tipo === "moeda") return DECIMAL_CSV.format(valor);
  if (tipo === "pct" || tipo === "decimal") return UMA_CASA_CSV.format(valor);
  return String(valor);
}

function celulaTexto(valor: Celula, tipo: TipoColuna = "texto") {
  if (valor === null) return "—";
  if (typeof valor === "string") return valor;
  if (tipo === "moeda") return formatBRL(valor);
  if (tipo === "pct") return formatPct(valor);
  if (tipo === "decimal") return UMA_CASA.format(valor);
  return formatNumero(valor);
}

const colunaNumerica = (tipo?: TipoColuna) => tipo !== undefined && tipo !== "texto";

function linhasCSV(r: Relatorio): string[][] {
  const corpo = r.total ? [...r.linhas, r.total] : r.linhas;
  return [r.colunas.map((c) => c.titulo), ...corpo.map((l) => l.map((c, i) => celulaCSV(c, r.colunas[i]?.tipo)))];
}

/* ============================================================
   Dados derivados (fonte única: lib/dados-tre)
   ============================================================ */

const PROCEDIMENTO_POR_ID = new Map<string, Procedimento>(PROCEDIMENTOS_TRE.map((p) => [p.id, p]));
const FATURA_POR_PROCEDIMENTO = new Map<string, Fatura>(FATURAS_TRE.map((f) => [f.procedimento_id, f]));

const USO_SERVIDORES: UsoServidor[] = SERVIDORES_TRE.map((servidor) => {
  const historico = HISTORICO_SAUDE_TRE.filter((h) => h.matricula === servidor.matricula).sort((a, b) =>
    b.data_realizacao.localeCompare(a.data_realizacao),
  );
  const procedimentos = PROCEDIMENTOS_TRE.filter((p) => p.matricula_usuario === servidor.matricula);
  const executados = procedimentos.filter((p) => p.data_execucao !== null);
  const faturado = soma(executados.map((p) => p.valor_total));
  const glosado = soma(executados.map((p) => p.valor_glosado));
  return {
    servidor,
    contagem: contarPorCategoria(historico),
    atendimentos: historico.length,
    faturado,
    glosado,
    custo: soma([faturado, -glosado]),
    ultimoAtendimento: historico[0]?.data_realizacao ?? null,
    historico,
    emAberto: procedimentos.filter((p) => p.data_execucao === null),
  };
});
const USO_POR_MATRICULA = new Map<string, UsoServidor>(USO_SERVIDORES.map((u) => [u.servidor.matricula, u]));

const RANKING = [...ESTATISTICAS_TRE.top_credenciados].sort((a, b) => b.valor - a.valor);
const LINHAS_CREDENCIADOS: LinhaCredenciado[] = CREDENCIADOS_TRE.map((credenciado) => {
  const i = RANKING.findIndex((t) => t.nome === credenciado.nome_fantasia);
  const top = i >= 0 ? RANKING[i] : undefined;
  return {
    credenciado,
    posicao: top ? i + 1 : null,
    atendimentos: top?.atendimentos ?? null,
    valor: top?.valor ?? null,
    participacao: top ? (top.valor / ESTATISTICAS_TRE.valor_total_processado) * 100 : null,
  };
}).sort(
  (a, b) => (a.posicao ?? Infinity) - (b.posicao ?? Infinity) || a.credenciado.nome_fantasia.localeCompare(b.credenciado.nome_fantasia, "pt-BR"),
);
const TOP_CREDENCIADOS = LINHAS_CREDENCIADOS.filter((l) => l.posicao !== null);

const LIMITE_CUSTO = 1.3; // internação acima de 130% da média
const LIMITE_FREQUENCIA = 3; // atendimentos do mesmo servidor no mesmo mês

/** Alertas gerados a partir das faturas, dos procedimentos e do histórico (nada escrito à mão). */
function gerarAlertas(): AlertaGestor[] {
  const alertas: AlertaGestor[] = [];
  const media = ESTATISTICAS_TRE.valor_medio_internacao;

  for (const p of PROCEDIMENTOS_TRE) {
    if (p.tipo !== "Internação" || p.valor_total <= media * LIMITE_CUSTO) continue;
    const fatura = FATURA_POR_PROCEDIMENTO.get(p.id);
    alertas.push({
      id: `custo-${p.id}`,
      severidade: "alta",
      tipo: "Custo",
      titulo: `Internação ${formatPct((p.valor_total / media - 1) * 100)} acima da média`,
      descricao: `${p.usuario_nome} (${p.matricula_usuario}): ${formatBRL(p.valor_total)} no ${p.nome_credenciado}, contra média de ${formatBRL(media)}.`,
      data: dataReferencia(p),
      matricula: p.matricula_usuario,
      faturaId: fatura?.id,
      numeroFatura: fatura?.numero_fatura,
    });
  }

  const porMes = new Map<string, Historico[]>();
  for (const h of HISTORICO_SAUDE_TRE) {
    const chave = `${h.matricula}|${h.data_realizacao.slice(0, 7)}`;
    porMes.set(chave, [...(porMes.get(chave) ?? []), h]);
  }
  for (const [chave, itens] of porMes) {
    if (itens.length < LIMITE_FREQUENCIA) continue;
    const [matricula, anoMes] = chave.split("|");
    const [ano, mes] = anoMes.split("-").map(Number);
    const contagem = contarPorCategoria(itens);
    const datas = itens.map((h) => h.data_realizacao).sort();
    const partes = CATEGORIAS.filter((c) => contagem[c] > 0).map((c) => plural(contagem[c], SINGULAR[c], PLURAL[c]));
    alertas.push({
      id: `frequencia-${matricula}-${anoMes}`,
      severidade: "media",
      tipo: "Frequência",
      titulo: `${itens.length} atendimentos em ${formatCompetencia(mes, ano)}`,
      descricao: `${itens[0].usuario_nome} (${matricula}): ${juntar(partes)} no mesmo mês.`,
      data: datas[datas.length - 1] ?? `${anoMes}-01`,
      matricula,
    });
  }

  for (const f of FATURAS_TRE) {
    const glosa = soma([f.valor_bruto, -f.valor_liquido]);
    if (glosa <= 0) continue;
    const p = PROCEDIMENTO_POR_ID.get(f.procedimento_id);
    alertas.push({
      id: `glosa-${f.id}`,
      severidade: "baixa",
      tipo: "Glosa",
      titulo: `Fatura ${f.numero_fatura} glosada em ${formatPct((glosa / f.valor_bruto) * 100)}`,
      descricao: `${formatBRL(glosa)} de ${formatBRL(f.valor_bruto)} no ${f.nome_credenciado}. Motivo: ${f.motivo_glosa ?? "não informado"}.`,
      data: p?.data_execucao ?? `${f.ano_referencia}-${String(f.mes_referencia).padStart(2, "0")}-01`,
      matricula: p?.matricula_usuario,
      faturaId: f.id,
      numeroFatura: f.numero_fatura,
    });
  }

  return alertas.sort((a, b) => SEVERIDADE[a.severidade].ordem - SEVERIDADE[b.severidade].ordem || b.data.localeCompare(a.data));
}

const ALERTAS = gerarAlertas();

/* ============================================================
   Ordenação de servidores
   ============================================================ */

function valorOrdenacao(u: UsoServidor, coluna: ColunaServidor): string | number {
  switch (coluna) {
    case "nome":
      return u.servidor.nome;
    case "lotacao":
      return u.servidor.lotacao;
    case "custo":
      return u.custo;
    default:
      return u.contagem[CATEGORIA_DA_CHAVE[coluna]];
  }
}

function compararServidores(ordem: Ordem) {
  const fator = ordem.direcao === "asc" ? 1 : -1;
  return (a: UsoServidor, b: UsoServidor) => {
    const va = valorOrdenacao(a, ordem.coluna);
    const vb = valorOrdenacao(b, ordem.coluna);
    const base = typeof va === "number" && typeof vb === "number" ? va - vb : String(va).localeCompare(String(vb), "pt-BR");
    return base * fator || a.servidor.nome.localeCompare(b.servidor.nome, "pt-BR");
  };
}

const ORDEM_PADRAO: Ordem = { coluna: "custo", direcao: "desc" };
const SERVIDORES_POR_CUSTO = [...USO_SERVIDORES].sort(compararServidores(ORDEM_PADRAO));

const OPCOES_ORDEM: { valor: string; rotulo: string; ordem: Ordem }[] = [
  { valor: "custo-desc", rotulo: "Maior custo", ordem: { coluna: "custo", direcao: "desc" } },
  { valor: "custo-asc", rotulo: "Menor custo", ordem: { coluna: "custo", direcao: "asc" } },
  { valor: "nome-asc", rotulo: "Nome (A–Z)", ordem: { coluna: "nome", direcao: "asc" } },
  { valor: "lotacao-asc", rotulo: "Lotação (A–Z)", ordem: { coluna: "lotacao", direcao: "asc" } },
  { valor: "consultas-desc", rotulo: "Mais consultas", ordem: { coluna: "consultas", direcao: "desc" } },
  { valor: "exames-desc", rotulo: "Mais exames", ordem: { coluna: "exames", direcao: "desc" } },
  { valor: "internacoes-desc", rotulo: "Mais internações", ordem: { coluna: "internacoes", direcao: "desc" } },
  { valor: "cirurgias-desc", rotulo: "Mais cirurgias", ordem: { coluna: "cirurgias", direcao: "desc" } },
];
/** Ordem escolhida pelo cabeçalho da tabela (lg+) sem opção equivalente no Select mobile → mostra o placeholder. */
const valorOpcaoOrdem = (o: Ordem) => {
  const valor = `${o.coluna}-${o.direcao}`;
  return OPCOES_ORDEM.some((opcao) => opcao.valor === valor) ? valor : "";
};

/* ============================================================
   Relatórios (a mesma estrutura alimenta o CSV e a impressão)
   ============================================================ */

function relatorioCustos(periodo: Periodo, serie: Mes[]): Relatorio {
  return {
    id: "custos",
    titulo: "Relatório de custos",
    descricao: `Atendimentos por categoria e valor faturado por mês · ${periodo.rotulo}`,
    escopo: periodo.rotulo,
    arquivo: `custos-${periodo.arquivo}.csv`,
    colunas: [
      { titulo: "Mês" },
      ...SERIES.map((s) => ({ titulo: s.rotulo, tipo: "inteiro" as const })),
      { titulo: "Atendimentos", tipo: "inteiro" },
      { titulo: "Valor faturado (R$)", tipo: "moeda" },
    ],
    linhas: serie.map((m) => [`${MESES_EXTENSO[m.mes - 1]}/${ANO}`, ...SERIES.map((s) => m[s.chave]), totalMes(m), m.valor]),
    total: [
      "Total",
      ...SERIES.map((s) => serie.reduce((t, m) => t + m[s.chave], 0)),
      serie.reduce((t, m) => t + totalMes(m), 0),
      soma(serie.map((m) => m.valor)),
    ],
  };
}

function relatorioServidores(lista: UsoServidor[], recorte?: string): Relatorio {
  return {
    id: "servidores",
    titulo: "Relatório por servidor",
    descricao: `Utilização individual em ${ANO}: atendimentos, faturado, glosa e custo aprovado${recorte ? ` · ${recorte}` : ""}`,
    escopo: `${plural(lista.length, "servidor", "servidores")} de ${formatNumero(ESTATISTICAS_TRE.total_servidores)}`,
    arquivo: `utilizacao-servidores-${ANO}.csv`,
    colunas: [
      { titulo: "Matrícula" },
      { titulo: "Servidor" },
      { titulo: "Cargo" },
      { titulo: "Lotação" },
      { titulo: "Município" },
      ...SERIES.map((s) => ({ titulo: s.rotulo, tipo: "inteiro" as const })),
      { titulo: "Faturado (R$)", tipo: "moeda" },
      { titulo: "Glosado (R$)", tipo: "moeda" },
      { titulo: "Custo aprovado (R$)", tipo: "moeda" },
      { titulo: "Último atendimento" },
      { titulo: "Situação" },
    ],
    linhas: lista.map((u) => [
      u.servidor.matricula,
      u.servidor.nome,
      u.servidor.cargo,
      u.servidor.lotacao,
      `${u.servidor.comarca}/${u.servidor.estado}`,
      ...SERIES.map((s) => u.contagem[s.categoria]),
      u.faturado,
      u.glosado,
      u.custo,
      formatData(u.ultimoAtendimento),
      u.servidor.ativo ? "Ativo" : "Inativo",
    ]),
    total: [
      "Total",
      plural(lista.length, "servidor", "servidores"),
      null,
      null,
      null,
      ...SERIES.map((s) => lista.reduce((t, u) => t + u.contagem[s.categoria], 0)),
      soma(lista.map((u) => u.faturado)),
      soma(lista.map((u) => u.glosado)),
      soma(lista.map((u) => u.custo)),
      null,
      null,
    ],
  };
}

const RELATORIO_CREDENCIADOS: Relatorio = {
  id: "credenciados",
  titulo: "Relatório por credenciado",
  descricao: `Rede credenciada: desempenho, faturamento em ${ANO} e participação no gasto anual`,
  escopo: `${plural(LINHAS_CREDENCIADOS.length, "credenciado", "credenciados")} de ${formatNumero(ESTATISTICAS_TRE.total_credenciados)}`,
  arquivo: `credenciados-${ANO}.csv`,
  colunas: [
    { titulo: "Posição" },
    { titulo: "Credenciado" },
    { titulo: "Razão social" },
    { titulo: "CNPJ" },
    { titulo: "Tipo" },
    { titulo: "Cidade/UF" },
    { titulo: "Contrato" },
    { titulo: "Avaliação", tipo: "decimal" },
    { titulo: "Atendimentos no ano", tipo: "inteiro" },
    { titulo: "Valor no ano (R$)", tipo: "moeda" },
    { titulo: "% do gasto anual", tipo: "pct" },
    { titulo: "Situação" },
  ],
  linhas: LINHAS_CREDENCIADOS.map((l) => [
    l.posicao ? `${l.posicao}º` : "—",
    l.credenciado.nome_fantasia,
    l.credenciado.razao_social,
    l.credenciado.cnpj,
    l.credenciado.tipo,
    `${l.credenciado.cidade}/${l.credenciado.estado}`,
    l.credenciado.numero_contrato,
    l.credenciado.avaliacao,
    l.atendimentos,
    l.valor,
    l.participacao,
    l.credenciado.ativo ? "Ativo" : "Inativo",
  ]),
};

const RELATORIO_GLOSAS: Relatorio = (() => {
  const linhas: Celula[][] = [];
  let totalGlosado = 0;
  let faturas = 0;
  for (const f of FATURAS_TRE) {
    const itens = ITENS_FATURA_TRE.filter((i) => i.fatura_id === f.id && i.status_auditoria === "Glosado");
    if (itens.length === 0 && f.status !== "Glosada") continue;
    faturas += 1;
    const base: Celula[] = [f.numero_fatura, f.nome_credenciado, formatCompetencia(f.mes_referencia, f.ano_referencia), f.status, f.valor_bruto, f.valor_liquido];
    if (itens.length === 0) linhas.push([...base, null, null, null, null, f.motivo_glosa ?? ""]);
    for (const i of itens) {
      totalGlosado += i.valor_total;
      linhas.push([...base, i.codigo, i.descricao, i.origem, i.valor_total, i.motivo_glosa ?? f.motivo_glosa ?? ""]);
    }
  }
  return {
    id: "glosas",
    titulo: "Relatório de glosas",
    descricao: "Faturas glosadas com os itens recusados pela auditoria e o motivo de cada glosa",
    escopo: plural(faturas, "fatura glosada", "faturas glosadas"),
    arquivo: `glosas-${ANO}.csv`,
    colunas: [
      { titulo: "Fatura" },
      { titulo: "Credenciado" },
      { titulo: "Competência" },
      { titulo: "Situação" },
      { titulo: "Valor bruto (R$)", tipo: "moeda" },
      { titulo: "Valor líquido (R$)", tipo: "moeda" },
      { titulo: "Código do item" },
      { titulo: "Item" },
      { titulo: "Origem" },
      { titulo: "Valor glosado (R$)", tipo: "moeda" },
      { titulo: "Motivo" },
    ],
    linhas,
    total: ["Total glosado", null, null, null, null, null, null, null, null, soma([totalGlosado]), null],
  };
})();

function relatorioAlertas(vistos: ReadonlySet<string>): Relatorio {
  return {
    id: "alertas",
    titulo: "Alertas do painel gerencial",
    descricao: "Alertas de custo, frequência e glosa gerados a partir das faturas e do histórico",
    escopo: plural(ALERTAS.length, "alerta", "alertas"),
    arquivo: `alertas-gestor-${ANO}.csv`,
    colunas: [
      { titulo: "Severidade" },
      { titulo: "Tipo" },
      { titulo: "Alerta" },
      { titulo: "Detalhe" },
      { titulo: "Matrícula" },
      { titulo: "Fatura" },
      { titulo: "Data de referência" },
      { titulo: "Situação" },
    ],
    linhas: ALERTAS.map((a) => [
      SEVERIDADE[a.severidade].rotulo,
      a.tipo,
      a.titulo,
      a.descricao,
      a.matricula ?? "",
      a.numeroFatura ?? "",
      formatData(a.data),
      vistos.has(a.id) ? "Visto" : "Pendente",
    ]),
  };
}

const DESCRICAO_EXPORTACAO: Record<Aba, string> = {
  dashboard: "custos do período",
  servidores: "utilização por servidor",
  credenciados: "rede credenciada",
  alertas: "alertas",
  relatorios: "custos do período",
};

function linhasFicha(uso: UsoServidor): string[][] {
  const s = uso.servidor;
  return [
    ["Ficha de utilização do servidor", `Dados até ${formatData(DATA_CORTE)}`],
    ["Matrícula", s.matricula],
    ["Nome", s.nome],
    ["Cargo", s.cargo],
    ["Lotação", s.lotacao],
    ["Município", `${s.comarca}/${s.estado}`],
    ["Situação", s.ativo ? "Ativo" : "Inativo"],
    [],
    [`Resumo de ${ANO}`],
    ...CATEGORIAS.map((c) => [c, String(uso.contagem[c])]),
    ["Faturado (R$)", DECIMAL_CSV.format(uso.faturado)],
    ["Glosado (R$)", DECIMAL_CSV.format(uso.glosado)],
    ["Custo aprovado (R$)", DECIMAL_CSV.format(uso.custo)],
    ["Último atendimento", formatData(uso.ultimoAtendimento)],
    [],
    ["Histórico de utilização"],
    ["Data", "Categoria", "Descrição", "Credenciado", "Fatura", "Situação da fatura"],
    ...uso.historico.map((h) => {
      const p = PROCEDIMENTO_POR_ID.get(h.procedimento_id);
      const f = FATURA_POR_PROCEDIMENTO.get(h.procedimento_id);
      return [formatData(h.data_realizacao), h.categoria, h.descricao, p?.nome_credenciado ?? "", f?.numero_fatura ?? "", f?.status ?? ""];
    }),
    ...uso.emAberto.map((p) => [formatData(p.data_agendamento), `${p.tipo} (a realizar)`, p.especialidade, p.nome_credenciado, "", p.status]),
    [],
    ["Dados clínicos omitidos: acesso restrito (LGPD, art. 11)."],
  ];
}

/* ============================================================
   Subcomponentes
   ============================================================ */

function BarraProporcional({ pct, className }: { pct: number; className?: string }) {
  return (
    <span aria-hidden className={cn("block h-2 overflow-hidden rounded-full bg-tre-navy/5 ring-1 ring-inset ring-tre-navy/5", className)}>
      <span
        className="block h-full rounded-full bg-gradient-to-r from-tre-navy to-tre-green motion-safe:transition-[width] motion-safe:duration-700"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </span>
  );
}

interface GraficoMensalProps {
  serie: Mes[];
  ativas: ReadonlySet<ChaveSerie>;
  mesFoco: number | null;
  onFoco: (mes: number | null) => void;
}

function GraficoMensal({ serie, ativas, mesFoco, onFoco }: GraficoMensalProps) {
  const visiveis = SERIES.filter((s) => ativas.has(s.chave));
  const chaves = visiveis.map((s) => s.chave);
  const totais = serie.map((m) => totalMes(m, chaves));
  const maximo = Math.max(1, ...totais);
  const marcas = [maximo, Math.round(maximo / 2), 0];
  const altura = (v: number) => `${(v / maximo) * ESCALA_COLUNA}%`;

  return (
    <div className="flex gap-2 sm:gap-3">
      {/* Eixo: atendimentos */}
      <div aria-hidden className="relative h-48 w-7 shrink-0 text-right text-[11px] tabular-nums text-slate-600">
        {marcas.map((v, i) => (
          <span key={i} className="absolute right-0 translate-y-1/2" style={{ bottom: altura(v) }}>
            {formatNumero(v)}
          </span>
        ))}
      </div>

      <div className="relative min-w-0 flex-1">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-48">
          {marcas.map((v, i) => (
            <span
              key={i}
              className={cn("absolute inset-x-0 border-t", v === 0 ? "border-tre-navy/20" : "border-dashed border-tre-navy/10")}
              style={{ bottom: altura(v) }}
            />
          ))}
        </div>

        <ol aria-label="Colunas mensais" className="relative flex justify-around gap-1.5 sm:gap-3">
          {serie.map((m, i) => {
            const ativo = mesFoco === m.mes;
            const esmaecido = mesFoco !== null && !ativo;
            const partes = visiveis.filter((s) => m[s.chave] > 0);
            return (
              <li key={m.mes} className="flex min-w-0 max-w-24 flex-1">
                <button
                  type="button"
                  aria-pressed={ativo}
                  aria-label={`${MESES_EXTENSO[m.mes - 1]}: ${plural(totais[i], "atendimento", "atendimentos")}, ${formatBRL(m.valor)} faturados`}
                  onClick={() => onFoco(ativo ? null : m.mes)}
                  className="tre-ring group flex w-full flex-col items-center rounded-xl pb-1"
                >
                  <span className="flex h-48 w-full flex-col items-center justify-end">
                    <span className="mb-1 shrink-0 whitespace-nowrap text-[10px] font-semibold tabular-nums text-tre-navy sm:text-[11px]">
                      <span className="hidden sm:inline">R$ </span>
                      {COMPACTO.format(m.valor)}
                    </span>
                    <span
                      className={cn(
                        "flex w-full max-w-12 shrink-0 flex-col-reverse divide-y divide-y-reverse divide-white/80 overflow-hidden rounded-b-[4px] rounded-t-lg shadow-sm transition-[filter,height,opacity] duration-300 group-hover:brightness-110",
                        ativo && "shadow-md shadow-tre-navy/30",
                        /* Só a coluna esmaece: rótulos em R$ e meses mantêm o contraste do texto. */
                        esmaecido && "opacity-40 group-hover:opacity-75",
                      )}
                      style={{ height: altura(totais[i]) }}
                    >
                      {partes.map((s) => (
                        <span key={s.chave} className={cn("block w-full", s.cor)} style={{ flex: `${m[s.chave]} 1 0%` }} />
                      ))}
                    </span>
                  </span>
                  <span className={cn("mt-2 text-xs", ativo ? "font-bold text-tre-navy" : "font-medium text-slate-600")}>
                    {MESES_ABREV[m.mes - 1]}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

interface CartaoAlertaProps {
  alerta: AlertaGestor;
  visto: boolean;
  onVerServidor: (matricula: string) => void;
  onAlternarVisto: (alerta: AlertaGestor) => void;
}

function CartaoAlerta({ alerta, visto, onVerServidor, onAlternarVisto }: CartaoAlertaProps) {
  const { matricula, faturaId, numeroFatura } = alerta;
  const sev = SEVERIDADE[alerta.severidade];
  const Icone = sev.icone;
  const idTitulo = `alerta-${alerta.id}`;
  return (
    <article
      aria-labelledby={idTitulo}
      className="tre-inset relative flex flex-col gap-3 overflow-hidden rounded-2xl py-4 pl-5 pr-4 transition-colors hover:bg-white/75 lg:flex-row lg:items-center"
    >
      <span aria-hidden className={cn("absolute inset-y-0 left-0 w-1.5", visto ? "bg-slate-300" : sev.barra)} />
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span aria-hidden className={cn("grid size-10 shrink-0 place-items-center rounded-xl", TOM_CLASSES[visto ? "neutral" : sev.tom])}>
          <Icone className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <ToneBadge tom={visto ? "neutral" : sev.tom}>Severidade {sev.rotulo.toLowerCase()}</ToneBadge>
            <ToneBadge tom="neutral">{alerta.tipo}</ToneBadge>
            {visto && (
              <ToneBadge tom="success">
                <Check className="size-3" aria-hidden />
                Visto
              </ToneBadge>
            )}
          </div>
          <h3 id={idTitulo} className="mt-2 font-semibold text-tre-navy">
            {alerta.titulo}
          </h3>
          <p className="mt-0.5 text-sm text-slate-600">{alerta.descricao}</p>
          <p className="mt-1.5 text-xs text-slate-600">
            Referência <time dateTime={alerta.data} className="tabular-nums">{formatData(alerta.data)}</time>
            {numeroFatura && <> · {numeroFatura}</>}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:pl-[3.25rem] lg:shrink-0 lg:justify-end lg:pl-0">
        {matricula && (
          <Button
            type="button"
            onClick={() => onVerServidor(matricula)}
            aria-label={`Ver servidor ${matricula}`}
            className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-3")}
          >
            <UserRound aria-hidden />
            Ver servidor
          </Button>
        )}
        {faturaId && (
          <Button asChild className={cn(BOTAO_PRIMARIO, "h-10 rounded-xl px-3")}>
            <Link href={linkAuditoria(faturaId)} aria-label={`Abrir na auditoria: ${numeroFatura ?? faturaId}`}>
              <ExternalLink aria-hidden />
              Abrir na auditoria
            </Link>
          </Button>
        )}
        <Button
          type="button"
          variant="ghost"
          onClick={() => onAlternarVisto(alerta)}
          aria-label={visto ? `Reabrir alerta: ${alerta.titulo}` : `Marcar como visto: ${alerta.titulo}`}
          className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
        >
          {visto ? <RotateCcw aria-hidden /> : <Check aria-hidden />}
          {visto ? "Reabrir" : "Marcar como visto"}
        </Button>
      </div>
    </article>
  );
}

interface CabecalhoOrdenavelProps {
  coluna: ColunaServidor;
  rotulo: string;
  ordem: Ordem;
  onOrdenar: (coluna: ColunaServidor) => void;
  alinhamento?: "esquerda" | "centro" | "direita";
}

function CabecalhoOrdenavel({ coluna, rotulo, ordem, onOrdenar, alinhamento = "esquerda" }: CabecalhoOrdenavelProps) {
  const ativo = ordem.coluna === coluna;
  const Icone = !ativo ? ArrowUpDown : ordem.direcao === "asc" ? ArrowUp : ArrowDown;
  return (
    <TableHead
      scope="col"
      aria-sort={ativo ? (ordem.direcao === "asc" ? "ascending" : "descending") : "none"}
      className={cn(TH, "px-2", alinhamento === "centro" && "text-center", alinhamento === "direita" && "text-right")}
    >
      <button
        type="button"
        onClick={() => onOrdenar(coluna)}
        className={cn(
          "tre-ring inline-flex min-h-10 items-center gap-1 rounded-lg px-2 uppercase tracking-wide transition-colors hover:bg-white/80 hover:text-tre-navy",
          ativo && "text-tre-navy",
        )}
      >
        {rotulo}
        <Icone aria-hidden className={cn("size-3.5", !ativo && "opacity-60")} />
      </button>
    </TableHead>
  );
}

function ContagemSerie({ valor, cor }: { valor: number; cor: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 tabular-nums", valor > 0 ? "font-semibold text-slate-900" : "text-slate-600")}>
      <span aria-hidden className={cn("size-1.5 rounded-full", valor > 0 ? cor : "bg-slate-300")} />
      {formatNumero(valor)}
    </span>
  );
}

function SituacaoCadastro({ ativo }: { ativo: boolean }) {
  return <StatusBadge status={ativo ? "Ativo" : "Inativo"} />;
}

interface PainelServidorProps {
  uso: UsoServidor;
  alertas: AlertaGestor[];
  vistos: ReadonlySet<string>;
  onExportar: (uso: UsoServidor) => void;
}

function PainelServidor({ uso, alertas, vistos, onExportar }: PainelServidorProps) {
  const { servidor, contagem } = uso;
  const [clinicoAberto, setClinicoAberto] = useState(false);
  const [laudoAberto, setLaudoAberto] = useState<string | null>(null);
  const grupos = CATEGORIAS.map((categoria) => ({ categoria, itens: uso.historico.filter((h) => h.categoria === categoria) })).filter(
    (g) => g.itens.length > 0,
  );
  const idClinico = `clinico-${servidor.matricula}`;
  const comorbidades = servidor.comorbidades.length > 0 ? servidor.comorbidades.join(", ") : "Nenhuma";

  return (
    <GlassPainel
      lado="direita"
      largura="lg"
      icone={UserRound}
      titulo={servidor.nome}
      descricao={`Matrícula ${servidor.matricula} · ${servidor.cargo}`}
      rodape={
        <>
          <GlassDialogClose asChild>
            <Button type="button" variant="ghost" className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-4")}>
              Fechar
            </Button>
          </GlassDialogClose>
          <Button type="button" onClick={() => onExportar(uso)} className={cn(BOTAO_PRIMARIO, "h-10 rounded-xl px-4")}>
            <Download aria-hidden />
            Exportar ficha (CSV)
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        {/* Identificação (cadastro: SERVIDORES_TRE) */}
        <div className="tre-inset flex flex-wrap items-center gap-4 rounded-2xl p-4">
          <AvatarIniciais nome={servidor.nome} tamanho="lg" />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-tre-navy">{servidor.cargo}</p>
            <p className="text-sm text-slate-600">
              {servidor.lotacao} · {servidor.comarca}/{servidor.estado}
            </p>
            <p className="mt-0.5 text-xs text-slate-600">
              Carteirinha <span className="font-mono tabular-nums">{servidor.carteirinha_saude}</span>
            </p>
          </div>
          <StatusBadge status={servidor.ativo ? "Ativo" : "Inativo"} tamanho="md" />
        </div>

        {/* Resumo derivado do histórico */}
        <section aria-labelledby="painel-resumo">
          <h3 id="painel-resumo" className={TITULO_BLOCO}>
            Utilização em {ANO}
          </h3>
          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SERIES.map((s) => {
              const IconeSerie = s.icone;
              return (
                <div key={s.chave} className="tre-inset rounded-2xl p-3.5">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <span aria-hidden className={cn("grid size-6 place-items-center rounded-lg text-white", s.cor)}>
                      <IconeSerie className="size-3.5" />
                    </span>
                    {s.rotulo}
                  </dt>
                  <dd className="mt-2 text-2xl font-bold tabular-nums text-tre-navy">{formatNumero(contagem[s.categoria])}</dd>
                </div>
              );
            })}
          </dl>
          <dl className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="tre-inset rounded-2xl p-3.5">
              <dt className="text-xs font-medium text-slate-600">Custo aprovado</dt>
              <dd className="mt-1 text-xl font-bold tabular-nums text-tre-navy">{formatBRL(uso.custo)}</dd>
            </div>
            <div className="tre-inset rounded-2xl p-3.5">
              <dt className="text-xs font-medium text-slate-600">Faturado · glosado</dt>
              <dd className="mt-1 text-sm font-semibold tabular-nums text-slate-900">
                {formatBRL(uso.faturado)}
                <span className={cn("block text-xs", uso.glosado > 0 ? "text-tre-danger-ink" : "font-normal text-slate-600")}>
                  {uso.glosado > 0 ? `${formatBRL(uso.glosado)} glosados` : "sem glosa"}
                </span>
              </dd>
            </div>
            <div className="tre-inset rounded-2xl p-3.5">
              <dt className="text-xs font-medium text-slate-600">Último atendimento</dt>
              <dd className="mt-1 text-xl font-bold tabular-nums text-tre-navy">
                {uso.ultimoAtendimento ? <time dateTime={uso.ultimoAtendimento}>{formatData(uso.ultimoAtendimento)}</time> : "—"}
              </dd>
            </div>
          </dl>
        </section>

        {/* Alertas deste servidor */}
        {alertas.length > 0 && (
          <section aria-labelledby="painel-alertas">
            <h3 id="painel-alertas" className={TITULO_BLOCO}>
              Alertas
            </h3>
            <ul className="mt-3 space-y-2">
              {alertas.map((a) => {
                const visto = vistos.has(a.id);
                const sev = SEVERIDADE[a.severidade];
                return (
                  <li key={a.id} className="tre-inset flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl p-3">
                    <ToneBadge tom={visto ? "neutral" : sev.tom}>{visto ? "Visto" : sev.rotulo}</ToneBadge>
                    <span className="min-w-0 flex-1 text-sm font-medium text-slate-900">{a.titulo}</span>
                    {a.faturaId && (
                      <Link
                        href={linkAuditoria(a.faturaId)}
                        className="tre-ring inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-sm font-semibold text-tre-navy hover:bg-white/70"
                      >
                        {a.numeroFatura ?? a.faturaId}
                        <ExternalLink className="size-3.5" aria-hidden />
                        <span className="sr-only"> (abrir na auditoria)</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Histórico de utilização (sem dados clínicos) */}
        <section aria-labelledby="painel-historico">
          <h3 id="painel-historico" className={TITULO_BLOCO}>
            <HeartPulse className="size-4" aria-hidden />
            Histórico de utilização
          </h3>
          {grupos.length === 0 && uso.emAberto.length === 0 ? (
            <EmptyState
              compacto
              icone={HeartPulse}
              titulo="Nenhum atendimento registrado"
              descricao="Este servidor não utilizou a rede credenciada no período."
              className="mt-3"
            />
          ) : (
            <div className="mt-3 space-y-4">
              {grupos.map((g) => {
                const serie = SERIES.find((s) => s.categoria === g.categoria);
                const IconeSerie = serie?.icone ?? Activity;
                return (
                  <div key={g.categoria}>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span aria-hidden className={cn("size-2 rounded-full", serie?.cor)} />
                      {g.categoria}
                      <span className="tre-tone-neutral rounded-full px-1.5 text-[11px] tabular-nums">{g.itens.length}</span>
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {g.itens.map((h) => {
                        const p = PROCEDIMENTO_POR_ID.get(h.procedimento_id);
                        const f = FATURA_POR_PROCEDIMENTO.get(h.procedimento_id);
                        return (
                          <li key={h.id} className="tre-inset flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl p-3">
                            <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-xl bg-tre-navy/10 text-tre-navy">
                              <IconeSerie className="size-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-slate-900">{h.descricao}</p>
                              <p className="text-xs text-slate-600">
                                <time dateTime={h.data_realizacao} className="tabular-nums">
                                  {formatData(h.data_realizacao)}
                                </time>
                                {p && <> · {p.nome_credenciado}</>}
                              </p>
                            </div>
                            {f ? (
                              <div className="flex items-center gap-1">
                                <StatusBadge status={f.status} />
                                <Link
                                  href={linkAuditoria(f.id)}
                                  className="tre-ring inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-xs font-semibold text-tre-navy hover:bg-white/70"
                                >
                                  {f.numero_fatura}
                                  <ExternalLink className="size-3" aria-hidden />
                                  <span className="sr-only"> (abrir na auditoria)</span>
                                </Link>
                              </div>
                            ) : (
                              <StatusBadge status={p?.status ?? "Pendente"} rotulo={p ? `${p.status} · sem fatura` : "Sem fatura"} />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

              {uso.emAberto.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Hourglass className="size-3.5" aria-hidden />
                    Autorizados, aguardando execução
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {uso.emAberto.map((p) => (
                      <li key={p.id} className="tre-inset flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl p-3">
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-slate-900">
                            {p.tipo} · {p.especialidade}
                          </p>
                          <p className="text-xs text-slate-600">
                            Agendado para <time dateTime={p.data_agendamento} className="tabular-nums">{formatData(p.data_agendamento)}</time> ·{" "}
                            {p.nome_credenciado} · {formatBRL(p.valor_total)} previstos
                          </p>
                        </div>
                        <StatusBadge status={p.status} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Dados clínicos: recolhidos por padrão (LGPD) */}
        <Collapsible open={clinicoAberto} onOpenChange={setClinicoAberto} className="rounded-2xl bg-tre-warn/[0.07] ring-1 ring-tre-warn/40">
          <button
            type="button"
            aria-expanded={clinicoAberto}
            aria-controls={clinicoAberto ? idClinico : undefined}
            onClick={() => setClinicoAberto((v) => !v)}
            className="tre-ring flex min-h-10 w-full items-center gap-3 rounded-2xl p-4 text-left transition-colors hover:bg-white/40"
          >
            <span aria-hidden className="tre-tone-warning grid size-10 shrink-0 place-items-center rounded-xl">
              <LockKeyhole className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-tre-navy">Dados clínicos — acesso restrito</span>
              <span className="block text-xs text-slate-600">Resultados, tipo sanguíneo, alergias, comorbidades e laudos.</span>
            </span>
            <ChevronDown aria-hidden className={cn("size-5 shrink-0 text-slate-600 transition-transform", clinicoAberto && "rotate-180")} />
          </button>
          <CollapsibleContent className="border-t border-tre-warn/30 px-4 pb-4 pt-4">
            <div id={idClinico} className="space-y-4">
              <p className="tre-tone-warning flex items-start gap-2 rounded-xl px-3 py-2 text-xs">
                <ShieldAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  <strong>Dados pessoais sensíveis (LGPD, art. 11).</strong> Consulte apenas com finalidade justificada. Em produção, este bloco fica
                  restrito ao perfil médico-auditor e cada acesso é registrado.
                </span>
              </p>
              <dl className="grid gap-3 sm:grid-cols-3">
                <div className="tre-inset rounded-2xl p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <Droplet className="size-3.5 text-tre-danger" aria-hidden />
                    Tipo sanguíneo
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{servidor.tipo_sanguineo}</dd>
                </div>
                <div className="tre-inset rounded-2xl p-3">
                  <dt className="text-xs font-medium text-slate-600">Alergias</dt>
                  <dd className="mt-1 font-semibold text-slate-900">{servidor.alergias.join(", ")}</dd>
                </div>
                <div className="tre-inset rounded-2xl p-3">
                  <dt className="text-xs font-medium text-slate-600">Comorbidades</dt>
                  <dd className="mt-1 font-semibold text-slate-900">{comorbidades}</dd>
                </div>
              </dl>

              {uso.historico.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700">Resultados e laudos</h4>
                  <ul className="mt-2 space-y-2">
                    {uso.historico.map((h) => {
                      const laudo = h.laudo;
                      const aberto = laudoAberto === h.id;
                      const responsavel = laudo ? ("medico" in laudo ? laudo.medico : "laboratorio" in laudo ? laudo.laboratorio : undefined) : undefined;
                      const idLaudo = `laudo-${h.id}`;
                      return (
                        <li key={h.id} className="tre-inset rounded-2xl p-3">
                          <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-slate-900">
                                {h.descricao}
                                <span className="font-normal text-slate-600"> · {formatData(h.data_realizacao)}</span>
                              </p>
                              <p className="mt-0.5 text-sm text-slate-700">{h.resultado}</p>
                            </div>
                            {laudo ? (
                              <Button
                                type="button"
                                variant="ghost"
                                aria-expanded={aberto}
                                aria-controls={aberto ? idLaudo : undefined}
                                onClick={() => setLaudoAberto(aberto ? null : h.id)}
                                className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
                              >
                                <FileText aria-hidden />
                                {aberto ? "Ocultar laudo" : "Ver laudo"}
                              </Button>
                            ) : (
                              <Button type="button" variant="ghost" disabled className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}>
                                <FileText aria-hidden />
                                Laudo não anexado
                              </Button>
                            )}
                          </div>
                          {laudo && aberto && (
                            <div id={idLaudo} className="mt-3 motion-safe:animate-in motion-safe:fade-in-0">
                              <p className="text-xs text-slate-600">
                                {laudo.especialidade}
                                {responsavel && <> · {responsavel}</>}
                              </p>
                              <pre className="mt-1.5 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl bg-white/85 p-3 font-mono text-xs leading-relaxed text-slate-800 ring-1 ring-slate-200">
                                {laudo.conteudo}
                              </pre>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </GlassPainel>
  );
}

function TabelaImpressao({ relatorio }: { relatorio: Relatorio }) {
  const { colunas, linhas, total } = relatorio;
  const celula = "border border-slate-300 px-2 py-1 align-top";
  return (
    <section className="hidden print:block">
      <h2 className="text-lg font-bold text-tre-navy">{relatorio.titulo}</h2>
      <p className="mt-1 text-xs text-slate-700">
        {relatorio.descricao} · {relatorio.escopo} · Dados até {formatData(DATA_CORTE)}
      </p>
      <table className="mt-4 w-full border-collapse text-[11px]">
        <thead>
          <tr>
            {colunas.map((c) => (
              <th key={c.titulo} scope="col" className={cn(celula, "bg-slate-100 text-left font-semibold", colunaNumerica(c.tipo) && "text-right")}>
                {c.titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) => (
            <tr key={i}>
              {linha.map((valor, j) => (
                <td key={j} className={cn(celula, colunaNumerica(colunas[j]?.tipo) && "text-right tabular-nums")}>
                  {celulaTexto(valor, colunas[j]?.tipo)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {total && (
          <tfoot>
            <tr>
              {total.map((valor, j) => (
                <td key={j} className={cn(celula, "bg-slate-50 font-semibold", colunaNumerica(colunas[j]?.tipo) && "text-right tabular-nums")}>
                  {valor === null ? "" : celulaTexto(valor, colunas[j]?.tipo)}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </section>
  );
}

/* ============================================================
   Página
   ============================================================ */

const RELATORIOS_TILES: { id: Exclude<RelatorioId, "alertas">; icone: LucideIcon; orb: string }[] = [
  { id: "custos", icone: FileText, orb: "from-tre-navy to-tre-navy-deep text-white" },
  { id: "servidores", icone: Users, orb: "from-tre-green to-tre-green-ink text-white" },
  { id: "credenciados", icone: Building2, orb: "from-tre-gold-soft to-tre-gold text-tre-navy-deep" },
  { id: "glosas", icone: TriangleAlert, orb: "from-tre-terra to-[#7F2508] text-white" },
];

const TOTAL_PROCEDIMENTOS = ESTATISTICAS_TRE.total_procedimentos_ano;
const POLOS = Object.entries(ESTATISTICAS_TRE.por_polo).sort((a, b) => b[1] - a[1]);
const TICKET_MEDIO: Partial<Record<ChaveSerie, number>> = {
  consultas: ESTATISTICAS_TRE.valor_medio_consulta,
  internacoes: ESTATISTICAS_TRE.valor_medio_internacao,
};
const CUSTO_PER_CAPITA = ESTATISTICAS_TRE.valor_total_processado / ESTATISTICAS_TRE.total_servidores;
const VALOR_TOP = soma(TOP_CREDENCIADOS.map((l) => l.valor ?? 0));
const ATENDIMENTOS_TOP = TOP_CREDENCIADOS.reduce((t, l) => t + (l.atendimentos ?? 0), 0);

export default function PainelGestorTRE() {
  const [abaParam, setAbaParam] = useQueryParam("aba", "dashboard");
  const aba: Aba = ehAba(abaParam) ? abaParam : "dashboard";
  const [periodoParam, setPeriodoParam] = useQueryParam("periodo", PERIODO_PADRAO.id);
  const periodo = PERIODO_POR_ID.get(periodoParam) ?? PERIODO_PADRAO;

  const [seriesAtivas, setSeriesAtivas] = useState<ReadonlySet<ChaveSerie>>(() => new Set(SERIES.map((s) => s.chave)));
  const [mesFoco, setMesFoco] = useState<number | null>(null);
  const [busca, setBusca] = useState("");
  const [ordem, setOrdem] = useState<Ordem>(ORDEM_PADRAO);
  const [vistos, setVistos] = useState<ReadonlySet<string>>(() => new Set());
  const [painel, setPainel] = useState<{ matricula: string; aberto: boolean } | null>(null);
  const [impressao, setImpressao] = useState<Relatorio | null>(null);
  /** O painel abre sem GlassDialogTrigger (linha, cartão, alerta): o foco volta à origem manualmente ao fechar. */
  const origemFoco = useRef<HTMLElement | null>(null);

  /* ---------- Derivados ---------- */

  const serie = useMemo(() => SERIE_MENSAL.filter((m) => periodo.meses.includes(m.mes)), [periodo]);
  const gastoPeriodo = soma(serie.map((m) => m.valor));
  const atendimentosPeriodo = serie.reduce((t, m) => t + totalMes(m), 0);
  const mesSelecionado = serie.find((m) => m.mes === mesFoco) ?? null;

  const tendencia = useMemo<KpiCardProps["tendencia"]>(() => {
    const anterior = periodo.anterior ? PERIODO_POR_ID.get(periodo.anterior) : undefined;
    if (!anterior) return undefined;
    const base = soma(SERIE_MENSAL.filter((m) => anterior.meses.includes(m.mes)).map((m) => m.valor));
    if (base <= 0) return undefined;
    const delta = (gastoPeriodo / base - 1) * 100;
    return {
      texto: `${delta >= 0 ? "+" : "−"}${formatPct(Math.abs(delta))} vs. ${anterior.curto}`,
      direcao: delta >= 0 ? "alta" : "baixa",
      bom: delta <= 0,
    };
  }, [periodo, gastoPeriodo]);

  const servidoresVisiveis = useMemo(() => {
    const termo = normalizar(busca);
    const filtrados = termo
      ? USO_SERVIDORES.filter((u) =>
          normalizar([u.servidor.nome, u.servidor.matricula, u.servidor.cargo, u.servidor.lotacao, u.servidor.comarca].join(" ")).includes(termo),
        )
      : USO_SERVIDORES;
    return [...filtrados].sort(compararServidores(ordem));
  }, [busca, ordem]);

  const totaisServidores = useMemo(
    () => ({
      contagem: Object.fromEntries(
        CATEGORIAS.map((c) => [c, servidoresVisiveis.reduce((t, u) => t + u.contagem[c], 0)]),
      ) as Record<Categoria, number>,
      custo: soma(servidoresVisiveis.map((u) => u.custo)),
    }),
    [servidoresVisiveis],
  );

  const alertasPendentes = ALERTAS.filter((a) => !vistos.has(a.id));
  const alertasPrioritarios = alertasPendentes.filter((a) => a.severidade !== "baixa");
  const alertasOrdenados = [...alertasPendentes, ...ALERTAS.filter((a) => vistos.has(a.id))];

  const relatorios = useMemo<Record<Exclude<RelatorioId, "alertas">, Relatorio>>(
    () => ({
      custos: relatorioCustos(periodo, serie),
      servidores: relatorioServidores(SERVIDORES_POR_CUSTO),
      credenciados: RELATORIO_CREDENCIADOS,
      glosas: RELATORIO_GLOSAS,
    }),
    [periodo, serie],
  );

  const usoPainel = painel ? (USO_POR_MATRICULA.get(painel.matricula) ?? null) : null;

  /* ---------- Impressão: monta a seção print-only e chama window.print() ---------- */

  useEffect(() => {
    if (!impressao) return;
    const encerrar = () => setImpressao(null);
    window.addEventListener("afterprint", encerrar);
    const timer = window.setTimeout(() => window.print(), 60);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("afterprint", encerrar);
    };
  }, [impressao]);

  /* ---------- Ações ---------- */

  function irParaAba(nova: Aba) {
    setAbaParam(nova);
    window.requestAnimationFrame(() =>
      document.getElementById(ID_ABAS)?.scrollIntoView({ behavior: movimentoReduzido() ? "auto" : "smooth", block: "start" }),
    );
  }

  function abrirServidor(matricula: string) {
    if (!USO_POR_MATRICULA.has(matricula)) {
      toast({ variant: "destructive", title: "Servidor fora da amostra", description: `A matrícula ${matricula} não está entre os servidores exibidos.` });
      return;
    }
    const ativo = document.activeElement;
    origemFoco.current = ativo instanceof HTMLElement && ativo !== document.body ? ativo : null;
    setPainel({ matricula, aberto: true });
  }

  function alterarPainel(aberto: boolean) {
    setPainel((atual) => (atual ? { ...atual, aberto } : null));
    if (aberto) return;
    const alvo = origemFoco.current;
    origemFoco.current = null;
    if (alvo) window.requestAnimationFrame(() => alvo.isConnected && alvo.focus());
  }

  function alterarPeriodo(id: string) {
    setPeriodoParam(id);
    setMesFoco(null);
  }

  function alternarSerie(chave: ChaveSerie) {
    setSeriesAtivas((atual) => {
      const nova = new Set(atual);
      if (nova.has(chave)) nova.delete(chave);
      else nova.add(chave);
      return nova;
    });
  }

  function ordenarPor(coluna: ColunaServidor) {
    setOrdem((atual) =>
      atual.coluna === coluna
        ? { coluna, direcao: atual.direcao === "asc" ? "desc" : "asc" }
        : { coluna, direcao: coluna === "nome" || coluna === "lotacao" ? "asc" : "desc" },
    );
  }

  function reabrirAlertas(ids: string[]) {
    setVistos((atual) => {
      const novo = new Set(atual);
      ids.forEach((id) => novo.delete(id));
      return novo;
    });
  }

  function alternarVisto(alerta: AlertaGestor) {
    if (vistos.has(alerta.id)) {
      reabrirAlertas([alerta.id]);
      return;
    }
    setVistos((atual) => new Set(atual).add(alerta.id));
    toast({
      title: "Alerta marcado como visto",
      description: alerta.titulo,
      action: (
        <ToastAction altText="Desfazer: reabrir o alerta" onClick={() => reabrirAlertas([alerta.id])}>
          Desfazer
        </ToastAction>
      ),
    });
  }

  function marcarTodosVistos() {
    const ids = alertasPendentes.map((a) => a.id);
    if (ids.length === 0) return;
    setVistos(new Set(ALERTAS.map((a) => a.id)));
    toast({
      title: `${plural(ids.length, "alerta marcado", "alertas marcados")} como ${ids.length === 1 ? "visto" : "vistos"}`,
      action: (
        <ToastAction altText="Desfazer: reabrir os alertas" onClick={() => reabrirAlertas(ids)}>
          Desfazer
        </ToastAction>
      ),
    });
  }

  function exportar(relatorio: Relatorio) {
    baixarCSV(relatorio.arquivo, linhasCSV(relatorio));
    toast({
      variant: "success",
      title: "CSV gerado",
      description: `${relatorio.arquivo} · ${plural(relatorio.linhas.length, "linha", "linhas")}`,
    });
  }

  function exportarAbaAtual() {
    switch (aba) {
      case "servidores":
        exportar(relatorioServidores(servidoresVisiveis, busca.trim() ? `busca “${busca.trim()}”` : undefined));
        break;
      case "credenciados":
        exportar(RELATORIO_CREDENCIADOS);
        break;
      case "alertas":
        exportar(relatorioAlertas(vistos));
        break;
      default:
        exportar(relatorios.custos);
    }
  }

  function exportarFicha(uso: UsoServidor) {
    const arquivo = `ficha-${uso.servidor.matricula.toLowerCase()}.csv`;
    baixarCSV(arquivo, linhasFicha(uso));
    toast({ variant: "success", title: "Ficha exportada", description: `${arquivo} · dados clínicos omitidos` });
  }

  /* ---------- Cabeçalho ---------- */

  const acoes = (
    <>
      <Select value={periodo.id} onValueChange={alterarPeriodo}>
        <SelectTrigger
          aria-label="Período de análise"
          className="h-10 w-auto gap-2 rounded-full border-white/25 bg-white/15 pl-3 pr-2.5 text-white hover:bg-white/20 focus:ring-2 focus:ring-tre-gold-soft focus:ring-offset-0 [&>svg:last-child]:text-white [&>svg:last-child]:opacity-80"
        >
          <CalendarRange className="size-4 shrink-0 text-tre-gold-soft" aria-hidden />
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={MENU_SELECT} align="end">
          {GRUPOS_PERIODO.map((grupo, i) => (
            <SelectGroup key={grupo.rotulo}>
              {i > 0 && <SelectSeparator />}
              <SelectLabel className="text-xs uppercase tracking-wide text-slate-600">{grupo.rotulo}</SelectLabel>
              {grupo.itens.map((p) => (
                <SelectItem key={p.id} value={p.id} textValue={p.rotulo} className={ITEM_SELECT}>
                  <span className="sm:hidden">{p.curto}</span>
                  <span className="hidden sm:inline">{p.rotulo}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="button"
        variant="ghost"
        onClick={exportarAbaAtual}
        aria-label={`Exportar CSV: ${DESCRICAO_EXPORTACAO[aba]}`}
        title={`Exportar CSV: ${DESCRICAO_EXPORTACAO[aba]}`}
        className={cn(
          treBotao({ tom: "cabecalho" }),
          "h-10 rounded-full px-3 focus-visible:ring-2 focus-visible:ring-tre-gold-soft focus-visible:ring-offset-0 sm:px-4",
        )}
      >
        <Download aria-hidden />
        <span className="hidden sm:inline">Exportar CSV</span>
      </Button>
    </>
  );

  const contexto = (
    <>
      <span className={CHIP_CONTEXTO}>
        <CalendarRange className="size-3.5 text-tre-navy" aria-hidden />
        Período: <strong className="font-semibold text-tre-navy">{periodo.rotulo}</strong>
      </span>
      <span className={CHIP_CONTEXTO}>
        <Database className="size-3.5 text-tre-navy" aria-hidden />
        Dados até <time dateTime={DATA_CORTE} className="tabular-nums">{formatData(DATA_CORTE)}</time>
      </span>
    </>
  );

  /* ---------- Render ---------- */

  return (
    <TreShell perfil="gestor" titulo="Painel Gerencial" subtitulo="Custos, utilização e alertas" acoes={acoes} contexto={contexto}>
      <div className={cn(impressao && "print:hidden")}>
        {/* KPIs */}
        <section aria-label="Indicadores principais" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            rotulo="Gasto no período"
            valor={formatBRLCompacto(gastoPeriodo)}
            icone={Wallet}
            tom="navy"
            tendencia={tendencia}
            detalhe={`${periodo.curto} · ${plural(atendimentosPeriodo, "atendimento", "atendimentos")}`}
            className={cn(ENTRADA, ATRASO[0])}
          />
          <KpiCard
            rotulo="Custo per capita"
            valor={formatBRL(CUSTO_PER_CAPITA)}
            icone={UsersRound}
            tom="green"
            detalhe={
              <span className="inline-flex items-center gap-1">
                base anual · {formatBRLCompacto(ESTATISTICAS_TRE.valor_total_processado)} ÷ {formatNumero(ESTATISTICAS_TRE.total_servidores)} servidores
                <ChevronRight className="size-3" aria-hidden />
                <span className="sr-only">(abre a aba Servidores)</span>
              </span>
            }
            onClick={() => irParaAba("servidores")}
            className={cn(ENTRADA, ATRASO[1])}
          />
          <KpiCard
            rotulo="Faturas pendentes"
            valor={formatNumero(ESTATISTICAS_TRE.total_faturas_pendentes)}
            icone={Hourglass}
            tom="gold"
            detalhe={
              <span className="inline-flex items-center gap-1">
                na fila da auditoria
                <ChevronRight className="size-3" aria-hidden />
              </span>
            }
            href="/tre/auditor?aba=faturas"
            className={cn(ENTRADA, ATRASO[2])}
          />
          <KpiCard
            rotulo="Taxa de glosa"
            valor={formatPct(ESTATISTICAS_TRE.taxa_glosa_media)}
            icone={Percent}
            tom="terra"
            detalhe={`média anual · ${formatNumero(ESTATISTICAS_TRE.total_credenciados)} credenciados`}
            className={cn(ENTRADA, ATRASO[3])}
          />
        </section>

        {/* Abas */}
        <Tabs value={aba} onValueChange={setAbaParam} id={ID_ABAS} className={cn("mt-8", ROLAGEM_ALVO)}>
          <GlassTabsList aria-label="Seções do painel gerencial" className={cn(ENTRADA, ATRASO[4])}>
            <GlassTabsTrigger value="dashboard">
              <BarChart3 className="size-4" aria-hidden />
              Dashboard
            </GlassTabsTrigger>
            <GlassTabsTrigger value="servidores">
              <Users className="size-4" aria-hidden />
              Servidores
            </GlassTabsTrigger>
            <GlassTabsTrigger value="credenciados">
              <Building2 className="size-4" aria-hidden />
              Credenciados
            </GlassTabsTrigger>
            <GlassTabsTrigger value="alertas" contador={alertasPendentes.length}>
              <BellRing className="size-4" aria-hidden />
              Alertas
              {/* O contador do GlassTabsTrigger é só o número: o leitor de tela ouve "Alertas, não vistos: 3". */}
              {alertasPendentes.length > 0 && <span className="sr-only">, não vistos:</span>}
            </GlassTabsTrigger>
            <GlassTabsTrigger value="relatorios">
              <FileText className="size-4" aria-hidden />
              Relatórios
            </GlassTabsTrigger>
          </GlassTabsList>

          {/* ============ Dashboard ============ */}
          <TabsContent value="dashboard" className={CONTEUDO_ABA}>
            <div className="space-y-6">
              {alertasPrioritarios.length > 0 ? (
                <GlassCard as="section" aria-labelledby="prioritarios-titulo" className={cn("relative overflow-hidden p-5 sm:p-6", ENTRADA, ATRASO[0])}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tre-danger via-tre-warn to-transparent" />
                  <SectionHeader
                    id="prioritarios-titulo"
                    icone={Siren}
                    titulo="Alertas prioritários"
                    contador={alertasPrioritarios.length}
                    descricao="Severidade alta e média, ainda não vistos. Os demais ficam na aba Alertas."
                    acoes={
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => irParaAba("alertas")}
                        className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
                      >
                        Todos os alertas
                        <ChevronRight aria-hidden />
                      </Button>
                    }
                  />
                  <ul className="mt-4 space-y-3">
                    {alertasPrioritarios.map((a) => (
                      <li key={a.id}>
                        <CartaoAlerta alerta={a} visto={false} onVerServidor={abrirServidor} onAlternarVisto={alternarVisto} />
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ) : (
                <div className={cn("tre-glass-subtle flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3", ENTRADA)}>
                  <span aria-hidden className="tre-tone-success grid size-9 shrink-0 place-items-center rounded-full">
                    <CheckCheck className="size-4" />
                  </span>
                  <p className="min-w-0 flex-1 text-sm text-slate-700">
                    <span className="font-semibold text-tre-navy">Nenhum alerta prioritário pendente.</span>{" "}
                    {alertasPendentes.length > 0
                      ? `${plural(alertasPendentes.length, "alerta de baixa severidade aguarda", "alertas de baixa severidade aguardam")} revisão.`
                      : "Todos os alertas foram vistos."}
                  </p>
                  <Button type="button" variant="ghost" onClick={() => irParaAba("alertas")} className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}>
                    Ver alertas
                    <ChevronRight aria-hidden />
                  </Button>
                </div>
              )}

              {/* Evolução mensal */}
              <GlassCard as="section" aria-labelledby="evolucao-titulo" className={cn("p-5 sm:p-6", ENTRADA, ATRASO[1])}>
                <SectionHeader
                  id="evolucao-titulo"
                  icone={BarChart3}
                  titulo="Evolução mensal"
                  descricao={`Atendimentos por categoria e valor faturado · ${periodo.rotulo}`}
                  acoes={
                    <div className="text-right">
                      <p className="text-xs font-medium text-slate-600">Total no período</p>
                      <p className="text-xl font-bold tabular-nums text-tre-navy">{formatBRL(gastoPeriodo)}</p>
                    </div>
                  }
                />

                <div role="group" aria-label="Categorias exibidas no gráfico" className="mt-5 flex flex-wrap gap-2">
                  {SERIES.map((s) => {
                    const ligada = seriesAtivas.has(s.chave);
                    return (
                      <button
                        key={s.chave}
                        type="button"
                        aria-pressed={ligada}
                        onClick={() => alternarSerie(s.chave)}
                        className={cn(
                          "tre-inset tre-ring inline-flex h-10 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-white/85",
                          /* Desligada: fundo mais claro, bolinha vazada e riscado; o texto continua >= slate-600. */
                          ligada ? "text-slate-700" : "bg-white/20 text-slate-600 shadow-none",
                        )}
                      >
                        <span aria-hidden className={cn("size-2.5 rounded-full", ligada ? s.cor : "bg-transparent ring-2 ring-inset ring-slate-500")} />
                        <span className={cn(!ligada && "line-through decoration-slate-500")}>{s.rotulo}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6">
                  {seriesAtivas.size === 0 ? (
                    <EmptyState
                      compacto
                      icone={BarChart3}
                      titulo="Nenhuma categoria selecionada"
                      descricao="Ligue ao menos uma categoria na legenda para ver as colunas."
                      acao={
                        <Button
                          type="button"
                          onClick={() => setSeriesAtivas(new Set(SERIES.map((s) => s.chave)))}
                          className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}
                        >
                          Mostrar todas
                        </Button>
                      }
                    />
                  ) : (
                    <GraficoMensal serie={serie} ativas={seriesAtivas} mesFoco={mesSelecionado?.mes ?? null} onFoco={setMesFoco} />
                  )}
                </div>

                <div aria-live="polite" className="tre-inset mt-5 rounded-2xl p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-tre-navy">
                      {mesSelecionado ? `${MESES_EXTENSO[mesSelecionado.mes - 1]}/${ANO}` : `Total · ${periodo.rotulo}`}
                    </p>
                    <p className="text-lg font-bold tabular-nums text-tre-navy">{formatBRL(mesSelecionado ? mesSelecionado.valor : gastoPeriodo)}</p>
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
                    {SERIES.map((s) => {
                      const valor = mesSelecionado ? mesSelecionado[s.chave] : serie.reduce((t, m) => t + m[s.chave], 0);
                      const ligada = seriesAtivas.has(s.chave);
                      return (
                        <div key={s.chave} className="flex items-center gap-2">
                          <dt className="flex items-center gap-2 text-xs text-slate-600">
                            <span
                              aria-hidden
                              className={cn("size-2.5 shrink-0 rounded-full", ligada ? s.cor : "bg-transparent ring-2 ring-inset ring-slate-500")}
                            />
                            {s.rotulo}
                            {!ligada && <span className="sr-only"> (fora do gráfico)</span>}
                          </dt>
                          <dd className="ml-auto text-sm font-semibold tabular-nums text-slate-900">{formatNumero(valor)}</dd>
                        </div>
                      );
                    })}
                  </dl>
                  <p className="mt-3 border-t border-tre-navy/10 pt-2 text-xs text-slate-600">
                    {mesSelecionado
                      ? "Toque no mês de novo para voltar ao total do período."
                      : "Altura da coluna: atendimentos das categorias ligadas. Rótulo: valor faturado no mês. Toque em um mês para detalhar."}
                  </p>
                </div>
              </GlassCard>

              {/* Polo e categoria */}
              <div className="grid gap-6 md:grid-cols-2">
                <GlassCard as="section" aria-labelledby="polo-titulo" className={cn("p-5 sm:p-6", ENTRADA, ATRASO[2])}>
                  <SectionHeader
                    id="polo-titulo"
                    icone={MapPin}
                    titulo="Distribuição por polo"
                    descricao={`${formatNumero(TOTAL_PROCEDIMENTOS)} procedimentos em ${ANO}`}
                  />
                  <ul className="mt-4 space-y-2.5">
                    {POLOS.map(([polo, qtd]) => {
                      const pct = (qtd / TOTAL_PROCEDIMENTOS) * 100;
                      return (
                        <li key={polo} className="tre-inset rounded-2xl p-3.5 transition-colors hover:bg-white/75">
                          <div className="flex items-center gap-3">
                            <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-xl bg-tre-navy/10 text-tre-navy">
                              <MapPin className="size-4" />
                            </span>
                            <span className="min-w-0 flex-1 truncate font-medium text-slate-900">{polo}</span>
                            <span className="text-right">
                              <span className="block font-semibold tabular-nums text-tre-navy">{formatNumero(qtd)}</span>
                              <span className="block text-xs tabular-nums text-slate-600">{formatPct(pct)}</span>
                            </span>
                          </div>
                          <BarraProporcional pct={pct} className="mt-2.5" />
                        </li>
                      );
                    })}
                  </ul>
                </GlassCard>

                <GlassCard as="section" aria-labelledby="categoria-titulo" className={cn("p-5 sm:p-6", ENTRADA, ATRASO[3])}>
                  <SectionHeader
                    id="categoria-titulo"
                    icone={Activity}
                    titulo="Procedimentos por categoria"
                    descricao={`Quantidade em ${ANO} e ticket médio, quando disponível`}
                  />
                  <ul className="mt-4 space-y-2.5">
                    {SERIES.map((s) => {
                      const qtd = ESTATISTICAS_TRE.por_categoria[s.chave];
                      const pct = (qtd / TOTAL_PROCEDIMENTOS) * 100;
                      const ticket = TICKET_MEDIO[s.chave];
                      const IconeSerie = s.icone;
                      return (
                        <li key={s.chave} className="tre-inset rounded-2xl p-3.5 transition-colors hover:bg-white/75">
                          <div className="flex items-center gap-3">
                            <span aria-hidden className={cn("grid size-9 shrink-0 place-items-center rounded-xl text-white shadow-sm", s.cor)}>
                              <IconeSerie className="size-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-medium text-slate-900">{s.rotulo}</span>
                              {ticket !== undefined && <span className="block text-xs text-slate-600">ticket médio {formatBRL(ticket)}</span>}
                            </span>
                            <span className="text-right">
                              <span className="block font-semibold tabular-nums text-tre-navy">{formatNumero(qtd)}</span>
                              <span className="block text-xs tabular-nums text-slate-600">{formatPct(pct)}</span>
                            </span>
                          </div>
                          <BarraProporcional pct={pct} className="mt-2.5" />
                        </li>
                      );
                    })}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </TabsContent>

          {/* ============ Servidores ============ */}
          <TabsContent value="servidores" className={CONTEUDO_ABA}>
            <GlassCard variante="forte" as="section" aria-labelledby="servidores-titulo" className={cn("overflow-hidden", ENTRADA)}>
              <div className="space-y-4 p-5 sm:p-6">
                <SectionHeader
                  id="servidores-titulo"
                  icone={Users}
                  titulo="Acompanhamento de servidores"
                  contador={servidoresVisiveis.length}
                  descricao={`Utilização e custo por servidor em ${ANO}. Abra um servidor para ver o painel completo.`}
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative min-w-0 flex-1">
                    <Search aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-600" />
                    <Input
                      type="search"
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      aria-label="Buscar servidor por nome, matrícula, cargo ou lotação"
                      placeholder="Buscar por nome, matrícula, cargo ou lotação"
                      className={cn(TRE_CAMPO, "pl-10 pr-11 [&::-webkit-search-cancel-button]:hidden")}
                    />
                    {busca && (
                      <button
                        type="button"
                        onClick={() => setBusca("")}
                        aria-label="Limpar busca"
                        className="tre-ring absolute right-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-lg text-slate-600 hover:bg-tre-navy/5 hover:text-tre-navy"
                      >
                        <X className="size-4" aria-hidden />
                      </button>
                    )}
                  </div>
                  <div className="lg:hidden">
                    <Select
                      value={valorOpcaoOrdem(ordem)}
                      onValueChange={(v) => {
                        const opcao = OPCOES_ORDEM.find((o) => o.valor === v);
                        if (opcao) setOrdem(opcao.ordem);
                      }}
                    >
                      <SelectTrigger aria-label="Ordenar servidores" className={cn(TRE_CAMPO, "w-full gap-2 sm:w-52")}>
                        <ArrowUpDown className="size-4 shrink-0 text-slate-600" aria-hidden />
                        <SelectValue placeholder="Ordenar" />
                      </SelectTrigger>
                      <SelectContent className={MENU_SELECT}>
                        {OPCOES_ORDEM.map((o) => (
                          <SelectItem key={o.valor} value={o.valor} className={ITEM_SELECT}>
                            {o.rotulo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {servidoresVisiveis.length === 0 ? (
                <div className="px-5 pb-6 sm:px-6">
                  <EmptyState
                    icone={Search}
                    titulo="Nenhum servidor encontrado"
                    descricao={`Nada corresponde a “${busca.trim()}”. Tente o nome, a matrícula (ex.: TRE0002) ou a lotação.`}
                    acao={
                      <Button type="button" onClick={() => setBusca("")} className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}>
                        Limpar busca
                      </Button>
                    }
                  />
                </div>
              ) : (
                <>
                  {/* lg+: tabela */}
                  <div className="hidden lg:block">
                    <Table className="min-w-[960px]">
                      <TableHeader className="sticky top-0 z-10 bg-white/90">
                        <TableRow className="border-y border-tre-navy/10 bg-tre-navy/[0.04] hover:bg-tre-navy/[0.04]">
                          <CabecalhoOrdenavel coluna="nome" rotulo="Servidor" ordem={ordem} onOrdenar={ordenarPor} />
                          <CabecalhoOrdenavel coluna="lotacao" rotulo="Lotação" ordem={ordem} onOrdenar={ordenarPor} />
                          {SERIES.map((s) => (
                            <CabecalhoOrdenavel key={s.chave} coluna={s.chave} rotulo={s.rotulo} ordem={ordem} onOrdenar={ordenarPor} alinhamento="centro" />
                          ))}
                          <CabecalhoOrdenavel coluna="custo" rotulo="Custo" ordem={ordem} onOrdenar={ordenarPor} alinhamento="direita" />
                          <TableHead scope="col" className={TH}>
                            Situação
                          </TableHead>
                          <TableHead scope="col" className="w-10 px-2">
                            <span className="sr-only">Abrir</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {servidoresVisiveis.map((u) => {
                          const s = u.servidor;
                          return (
                            <TableRow
                              key={s.matricula}
                              tabIndex={0}
                              aria-label={`Abrir o painel de ${s.nome}, matrícula ${s.matricula}`}
                              onClick={() => abrirServidor(s.matricula)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  abrirServidor(s.matricula);
                                }
                              }}
                              className="group cursor-pointer border-b border-tre-navy/10 hover:bg-white/60 focus-visible:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tre-navy"
                            >
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <AvatarIniciais nome={s.nome} />
                                  <div className="min-w-0">
                                    <p className="font-semibold text-tre-navy">{s.nome}</p>
                                    <p className="font-mono text-xs text-slate-600">{s.matricula}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <p className="text-slate-900">{s.lotacao}</p>
                                <p className="text-xs text-slate-600">
                                  {s.cargo} · {s.comarca}
                                </p>
                              </TableCell>
                              {SERIES.map((serieInfo) => (
                                <TableCell key={serieInfo.chave} className="px-4 py-3 text-center">
                                  <ContagemSerie valor={u.contagem[serieInfo.categoria]} cor={serieInfo.cor} />
                                </TableCell>
                              ))}
                              <TableCell className="px-4 py-3 text-right">
                                <p className="font-semibold tabular-nums text-tre-navy">{formatBRL(u.custo)}</p>
                                {u.glosado > 0 && <p className="text-xs tabular-nums text-tre-danger-ink">{formatBRL(u.glosado)} glosados</p>}
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <SituacaoCadastro ativo={s.ativo} />
                                <p className="mt-1 text-xs tabular-nums text-slate-600">Últ. {formatData(u.ultimoAtendimento)}</p>
                              </TableCell>
                              <TableCell className="w-10 px-2">
                                <ChevronRight
                                  aria-hidden
                                  className="size-4 text-slate-600 transition-transform motion-safe:group-hover:translate-x-0.5"
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                      <TableFooter className="border-t border-tre-navy/15 bg-tre-navy/[0.04] font-semibold">
                        <TableRow className="hover:bg-transparent">
                          <TableCell colSpan={2} className="px-4 py-3 text-tre-navy">
                            Total · {plural(servidoresVisiveis.length, "servidor", "servidores")}
                          </TableCell>
                          {SERIES.map((s) => (
                            <TableCell key={s.chave} className="px-4 py-3 text-center tabular-nums text-slate-900">
                              {formatNumero(totaisServidores.contagem[s.categoria])}
                            </TableCell>
                          ))}
                          <TableCell className="px-4 py-3 text-right tabular-nums text-tre-navy">{formatBRL(totaisServidores.custo)}</TableCell>
                          <TableCell colSpan={2} />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>

                  {/* < lg: cartões */}
                  <ul className="space-y-3 px-4 pb-5 sm:px-6 lg:hidden">
                    {servidoresVisiveis.map((u) => {
                      const s = u.servidor;
                      return (
                        <li key={s.matricula}>
                          <button
                            type="button"
                            onClick={() => abrirServidor(s.matricula)}
                            aria-label={`Abrir o painel de ${s.nome}, matrícula ${s.matricula}`}
                            className="tre-inset tre-ring block w-full rounded-2xl p-4 text-left transition-colors hover:bg-white/80"
                          >
                            <span className="flex items-start gap-3">
                              <AvatarIniciais nome={s.nome} />
                              <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-tre-navy">{s.nome}</span>
                                <span className="block text-xs text-slate-600">
                                  <span className="font-mono">{s.matricula}</span> · {s.cargo}
                                </span>
                                <span className="block text-xs text-slate-600">
                                  {s.lotacao} · {s.comarca}
                                </span>
                              </span>
                              <SituacaoCadastro ativo={s.ativo} />
                            </span>
                            <span className="mt-3 grid grid-cols-4 gap-2">
                              {SERIES.map((serieInfo) => (
                                <span key={serieInfo.chave} className="rounded-xl bg-white/70 px-1.5 py-2 text-center ring-1 ring-tre-navy/5">
                                  <span className="block truncate text-[11px] text-slate-600">{serieInfo.rotulo}</span>
                                  <span className="mt-0.5 flex justify-center">
                                    <ContagemSerie valor={u.contagem[serieInfo.categoria]} cor={serieInfo.cor} />
                                  </span>
                                </span>
                              ))}
                            </span>
                            <span className="mt-3 flex items-end justify-between gap-2 border-t border-tre-navy/10 pt-3">
                              <span className="text-xs text-slate-600">
                                Custo aprovado
                                <span className="block tabular-nums">Últ. atendimento {formatData(u.ultimoAtendimento)}</span>
                              </span>
                              <span className="text-right">
                                <span className="block font-bold tabular-nums text-tre-navy">{formatBRL(u.custo)}</span>
                                {u.glosado > 0 && <span className="block text-xs tabular-nums text-tre-danger-ink">{formatBRL(u.glosado)} glosados</span>}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}

              <p className="border-t border-tre-navy/10 bg-white/40 px-5 py-3 text-xs text-slate-600 sm:px-6">
                Exibindo <strong className="font-semibold text-tre-navy">{formatNumero(servidoresVisiveis.length)}</strong> de{" "}
                {formatNumero(ESTATISTICAS_TRE.total_servidores)} servidores · amostra de demonstração. Contagens do histórico de saúde; custo =
                faturado − glosa.
              </p>
            </GlassCard>
          </TabsContent>

          {/* ============ Credenciados ============ */}
          <TabsContent value="credenciados" className={CONTEUDO_ABA}>
            <div className="space-y-6">
              <section aria-labelledby="top-titulo" className={ENTRADA}>
                <SectionHeader
                  id="top-titulo"
                  icone={Trophy}
                  titulo="Top credenciados"
                  descricao={`Maiores faturamentos em ${ANO}: ${formatBRLCompacto(VALOR_TOP)}, ${formatPct(
                    (VALOR_TOP / ESTATISTICAS_TRE.valor_total_processado) * 100,
                  )} do gasto anual`}
                />
                <ol className="mt-4 grid gap-4 md:grid-cols-3">
                  {TOP_CREDENCIADOS.map((l, i) => {
                    const medalha = MEDALHA[i] ?? MEDALHA[MEDALHA.length - 1];
                    const c = l.credenciado;
                    const valor = l.valor ?? 0;
                    const atendimentos = l.atendimentos ?? 0;
                    return (
                      <li key={c.id}>
                        <GlassCard className={cn("relative h-full overflow-hidden p-5", ENTRADA, ATRASO[Math.min(i + 1, ATRASO.length - 1)])}>
                          <span aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent", medalha.barra)} />
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={cn(
                                "grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-base font-bold shadow-md",
                                medalha.orb,
                              )}
                            >
                              <span className="sr-only">Posição </span>
                              {l.posicao}º
                            </span>
                            <SituacaoCadastro ativo={c.ativo} />
                          </div>
                          <h3 className="mt-4 font-semibold text-tre-navy">{c.nome_fantasia}</h3>
                          <p className="text-xs text-slate-600">
                            {c.tipo} · {c.cidade}/{c.estado}
                          </p>
                          <p className="mt-4 text-2xl font-bold tracking-tight tabular-nums text-tre-navy">{formatBRLCompacto(valor)}</p>
                          <p className="text-xs text-slate-600">
                            {plural(atendimentos, "atendimento", "atendimentos")}
                            {atendimentos > 0 && <> · ticket médio {formatBRL(valor / atendimentos)}</>}
                          </p>
                          <div className="mt-4">
                            <div className="mb-1.5 flex items-center justify-between text-xs">
                              <span className="text-slate-600">Participação no gasto</span>
                              <span className="font-semibold tabular-nums text-tre-navy">{formatPct(l.participacao ?? 0)}</span>
                            </div>
                            <BarraProporcional pct={l.participacao ?? 0} />
                          </div>
                        </GlassCard>
                      </li>
                    );
                  })}
                </ol>
              </section>

              <GlassCard variante="forte" as="section" aria-labelledby="rede-titulo" className={cn("overflow-hidden", ENTRADA, ATRASO[2])}>
                <div className="p-5 sm:p-6">
                  <SectionHeader
                    id="rede-titulo"
                    icone={Building2}
                    titulo="Rede credenciada"
                    contador={LINHAS_CREDENCIADOS.length}
                    descricao="Os três maiores faturamentos aparecem em destaque."
                  />
                </div>

                {/* lg+: tabela */}
                <div className="hidden lg:block">
                  <Table className="min-w-[960px]">
                    <TableHeader className="sticky top-0 z-10 bg-white/90">
                      <TableRow className="border-y border-tre-navy/10 bg-tre-navy/[0.04] hover:bg-tre-navy/[0.04]">
                        <TableHead scope="col" className={TH}>
                          Credenciado
                        </TableHead>
                        <TableHead scope="col" className={TH}>
                          Tipo
                        </TableHead>
                        <TableHead scope="col" className={TH}>
                          Cidade
                        </TableHead>
                        <TableHead scope="col" className={cn(TH, "text-right")}>
                          Atendimentos
                        </TableHead>
                        <TableHead scope="col" className={cn(TH, "text-right")}>
                          Valor no ano
                        </TableHead>
                        <TableHead scope="col" className={cn(TH, "text-right")}>
                          % do gasto
                        </TableHead>
                        <TableHead scope="col" className={cn(TH, "text-center")}>
                          Avaliação
                        </TableHead>
                        <TableHead scope="col" className={TH}>
                          Situação
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {LINHAS_CREDENCIADOS.map((l) => {
                        const c = l.credenciado;
                        const medalha = l.posicao ? MEDALHA[l.posicao - 1] : undefined;
                        return (
                          <TableRow key={c.id} className={cn("border-b border-tre-navy/10 hover:bg-white/60", medalha?.linha)}>
                            <TableCell className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                {medalha ? (
                                  <span
                                    className={cn(
                                      "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold shadow-sm",
                                      medalha.orb,
                                    )}
                                  >
                                    <span className="sr-only">Posição </span>
                                    {l.posicao}º
                                  </span>
                                ) : (
                                  <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-xl bg-tre-navy/5 text-tre-navy">
                                    <Building2 className="size-4" />
                                  </span>
                                )}
                                <div className="min-w-0">
                                  <p className="font-semibold text-tre-navy">{c.nome_fantasia}</p>
                                  <p className="text-xs text-slate-600">{c.razao_social}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="px-4 py-3 text-slate-700">{c.tipo}</TableCell>
                            <TableCell className="px-4 py-3 text-slate-700">
                              {c.cidade}/{c.estado}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right tabular-nums text-slate-900">
                              {l.atendimentos === null ? <span className="text-slate-600">—</span> : formatNumero(l.atendimentos)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right font-semibold tabular-nums text-tre-navy">
                              {l.valor === null ? <span className="font-normal text-slate-600">—</span> : formatBRL(l.valor)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right tabular-nums text-slate-900">
                              {l.participacao === null ? <span className="text-slate-600">—</span> : formatPct(l.participacao)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-center">
                              <span className="inline-flex items-center gap-1 tabular-nums">
                                <Star aria-hidden className="size-4 fill-tre-gold text-tre-gold" />
                                <span className="font-semibold text-tre-gold-ink">{UMA_CASA.format(c.avaliacao)}</span>
                                <span className="text-xs text-slate-600">/5</span>
                              </span>
                            </TableCell>
                            <TableCell className="px-4 py-3">
                              <SituacaoCadastro ativo={c.ativo} />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableFooter className="border-t border-tre-navy/15 bg-tre-navy/[0.04] font-semibold">
                      <TableRow className="hover:bg-transparent">
                        <TableCell colSpan={3} className="px-4 py-3 text-tre-navy">
                          Total · {plural(TOP_CREDENCIADOS.length, "credenciado", "credenciados")} com valores consolidados
                        </TableCell>
                        <TableCell className="px-4 py-3 text-right tabular-nums text-slate-900">{formatNumero(ATENDIMENTOS_TOP)}</TableCell>
                        <TableCell className="px-4 py-3 text-right tabular-nums text-tre-navy">{formatBRL(VALOR_TOP)}</TableCell>
                        <TableCell className="px-4 py-3 text-right tabular-nums text-slate-900">
                          {formatPct((VALOR_TOP / ESTATISTICAS_TRE.valor_total_processado) * 100)}
                        </TableCell>
                        <TableCell colSpan={2} />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>

                {/* < lg: cartões */}
                <ul className="space-y-3 px-4 pb-5 sm:px-6 lg:hidden">
                  {LINHAS_CREDENCIADOS.map((l) => {
                    const c = l.credenciado;
                    const medalha = l.posicao ? MEDALHA[l.posicao - 1] : undefined;
                    return (
                      <li key={c.id} className={cn("tre-inset rounded-2xl p-4", medalha?.linha)}>
                        <div className="flex items-start gap-3">
                          {medalha ? (
                            <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold shadow-sm", medalha.orb)}>
                              <span className="sr-only">Posição </span>
                              {l.posicao}º
                            </span>
                          ) : (
                            <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-xl bg-tre-navy/5 text-tre-navy">
                              <Building2 className="size-4" />
                            </span>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-tre-navy">{c.nome_fantasia}</p>
                            <p className="text-xs text-slate-600">{c.razao_social}</p>
                            <p className="text-xs text-slate-600">
                              {c.tipo} · {c.cidade}/{c.estado}
                            </p>
                          </div>
                          <SituacaoCadastro ativo={c.ativo} />
                        </div>
                        <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-tre-navy/10 pt-3 text-xs">
                          <div>
                            <dt className="text-slate-600">Valor no ano</dt>
                            <dd className="font-semibold tabular-nums text-tre-navy">{l.valor === null ? "—" : formatBRLCompacto(l.valor)}</dd>
                            {l.atendimentos !== null && (
                              <dd className="tabular-nums text-slate-600">{plural(l.atendimentos, "atendimento", "atendimentos")}</dd>
                            )}
                          </div>
                          <div>
                            <dt className="text-slate-600">% do gasto</dt>
                            <dd className="font-semibold tabular-nums text-slate-900">{l.participacao === null ? "—" : formatPct(l.participacao)}</dd>
                          </div>
                          <div>
                            <dt className="text-slate-600">Avaliação</dt>
                            <dd className="inline-flex items-center gap-1 font-semibold tabular-nums text-tre-gold-ink">
                              <Star aria-hidden className="size-3.5 fill-tre-gold text-tre-gold" />
                              {UMA_CASA.format(c.avaliacao)}
                            </dd>
                          </div>
                        </dl>
                      </li>
                    );
                  })}
                </ul>

                <p className="border-t border-tre-navy/10 bg-white/40 px-5 py-3 text-xs text-slate-600 sm:px-6">
                  Exibindo <strong className="font-semibold text-tre-navy">{formatNumero(LINHAS_CREDENCIADOS.length)}</strong> de{" "}
                  {formatNumero(ESTATISTICAS_TRE.total_credenciados)} credenciados · amostra de demonstração. Valores anuais consolidados apenas para os
                  maiores faturamentos.
                </p>
              </GlassCard>
            </div>
          </TabsContent>

          {/* ============ Alertas ============ */}
          <TabsContent value="alertas" className={CONTEUDO_ABA}>
            <GlassCard as="section" aria-labelledby="alertas-titulo" className={cn("p-5 sm:p-6", ENTRADA)}>
              <SectionHeader
                id="alertas-titulo"
                icone={BellRing}
                titulo="Alertas do sistema"
                contador={ALERTAS.length}
                descricao="Gerados a partir das faturas, dos procedimentos e do histórico de utilização."
                acoes={
                  <Button
                    type="button"
                    onClick={marcarTodosVistos}
                    disabled={alertasPendentes.length === 0}
                    className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}
                  >
                    <CheckCheck aria-hidden />
                    Marcar todos como vistos
                  </Button>
                }
              />

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                {(Object.keys(SEVERIDADE) as Severidade[]).map((sev) => {
                  const n = alertasPendentes.filter((a) => a.severidade === sev).length;
                  return (
                    <ToneBadge key={sev} tom={n > 0 ? SEVERIDADE[sev].tom : "neutral"}>
                      {SEVERIDADE[sev].rotulo}: <span className="tabular-nums">{n}</span> {n === 1 ? "pendente" : "pendentes"}
                    </ToneBadge>
                  );
                })}
                {vistos.size > 0 && <ToneBadge tom="success">{plural(vistos.size, "visto", "vistos")}</ToneBadge>}
              </div>

              {ALERTAS.length === 0 ? (
                <EmptyState icone={BellRing} titulo="Nenhum alerta" descricao="Os dados atuais não disparam nenhuma regra." className="mt-5" />
              ) : (
                <ul className="mt-5 space-y-3">
                  {alertasOrdenados.map((a) => (
                    <li key={a.id}>
                      <CartaoAlerta alerta={a} visto={vistos.has(a.id)} onVerServidor={abrirServidor} onAlternarVisto={alternarVisto} />
                    </li>
                  ))}
                </ul>
              )}

              <div className="tre-inset mt-5 rounded-2xl p-4 text-xs text-slate-600">
                <p className="font-semibold text-tre-navy">Como os alertas são gerados</p>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  <li>
                    <strong className="font-semibold text-slate-700">Custo (alta):</strong> internação acima de {formatPct((LIMITE_CUSTO - 1) * 100)} da média de{" "}
                    {formatBRL(ESTATISTICAS_TRE.valor_medio_internacao)}.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-700">Frequência (média):</strong> {LIMITE_FREQUENCIA} ou mais atendimentos do mesmo servidor
                    no mesmo mês.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-700">Glosa (baixa):</strong> fatura com valor glosado pela auditoria.
                  </li>
                </ul>
              </div>
            </GlassCard>
          </TabsContent>

          {/* ============ Relatórios ============ */}
          <TabsContent value="relatorios" className={CONTEUDO_ABA}>
            <h2 className="sr-only">Relatórios para exportar</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {RELATORIOS_TILES.map((tile, i) => {
                const r = relatorios[tile.id];
                const IconeTile = tile.icone;
                const idTitulo = `relatorio-${tile.id}`;
                return (
                  <GlassCard
                    key={tile.id}
                    as="article"
                    aria-labelledby={idTitulo}
                    className={cn("tre-glass-hover flex flex-col gap-5 p-5 motion-safe:hover:-translate-y-0.5 sm:p-6", ENTRADA, ATRASO[i])}
                  >
                    <div className="flex items-start gap-4">
                      <span aria-hidden className={cn("grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-lg", tile.orb)}>
                        <IconeTile className="size-7" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 id={idTitulo} className="text-lg font-semibold text-tre-navy">
                          {r.titulo}
                        </h3>
                        <p className="mt-0.5 text-sm text-slate-600">{r.descricao}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-tre-navy/10 pt-4">
                      <p className="text-xs text-slate-600">
                        {r.escopo} · {plural(r.linhas.length, "linha", "linhas")}
                      </p>
                      <div role="group" aria-label={`Exportar ${r.titulo}`} className="inline-flex overflow-hidden rounded-xl bg-white/75 shadow-sm ring-1 ring-tre-navy/15">
                        <button
                          type="button"
                          onClick={() => exportar(r)}
                          aria-label={`Baixar CSV: ${r.titulo}`}
                          className="inline-flex h-10 items-center gap-2 px-4 text-sm font-semibold text-tre-navy transition-colors hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tre-navy"
                        >
                          <Download className="size-4" aria-hidden />
                          CSV
                        </button>
                        <span aria-hidden className="w-px bg-tre-navy/15" />
                        <button
                          type="button"
                          onClick={() => setImpressao({ ...r })}
                          aria-label={`Imprimir ou salvar em PDF: ${r.titulo}`}
                          className="inline-flex h-10 items-center gap-2 px-4 text-sm font-semibold text-tre-navy transition-colors hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tre-navy"
                        >
                          <Printer className="size-4" aria-hidden />
                          Imprimir
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
            <p className={cn("mt-4 flex items-start gap-2 text-xs text-slate-600", ENTRADA, ATRASO[4])}>
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              CSV com separador “;” e acentuação UTF-8, pronto para o Excel em português. “Imprimir” abre a impressão do navegador: escolha “Salvar
              como PDF” para gerar o arquivo. O relatório de custos segue o período escolhido no topo.
            </p>
          </TabsContent>
        </Tabs>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-slate-600">
          <Database className="size-3.5" aria-hidden />
          Painel Gerencial · dados até <time dateTime={DATA_CORTE}>{formatData(DATA_CORTE)}</time> · fontes: faturas TISS, procedimentos e
          histórico de saúde
        </p>
      </div>

      {/* Relatório para impressão (só aparece no papel/PDF) */}
      {impressao && <TabelaImpressao relatorio={impressao} />}

      {/* Painel lateral do servidor */}
      <GlassDialog open={painel?.aberto ?? false} onOpenChange={alterarPainel}>
        {usoPainel && (
          <PainelServidor
            key={usoPainel.servidor.matricula}
            uso={usoPainel}
            alertas={ALERTAS.filter((a) => a.matricula === usoPainel.servidor.matricula)}
            vistos={vistos}
            onExportar={exportarFicha}
          />
        )}
      </GlassDialog>
    </TreShell>
  );
}
