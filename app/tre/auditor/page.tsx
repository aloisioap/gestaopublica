"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Download,
  Eye,
  FileCode2,
  FileSpreadsheet,
  FileText,
  FilterX,
  FlaskConical,
  Hourglass,
  Inbox,
  ListChecks,
  Lock,
  Package,
  PenLine,
  Pill,
  Printer,
  Receipt,
  RotateCcw,
  Scale,
  Search,
  SearchX,
  Send,
  Shield,
  Stethoscope,
  Syringe,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  TriangleAlert,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { TreShell } from "@/components/tre/tre-shell";
import { GlassCard, GlassCardContent, GlassCardHeader } from "@/components/tre/glass-card";
import { KpiCard } from "@/components/tre/kpi-card";
import { StatusBadge, ToneBadge } from "@/components/tre/status-badge";
import { SectionHeader } from "@/components/tre/section-header";
import { EmptyState } from "@/components/tre/empty-state";
import { GlassDialog, GlassDialogClose, GlassDialogTrigger, GlassPainel } from "@/components/tre/glass-painel";
import { GlassTabsList, GlassTabsTrigger } from "@/components/tre/glass-tabs";
import { treBotao, TRE_CAMPO } from "@/components/tre/ui-tre";
import { AvatarIniciais } from "@/components/tre/avatar-iniciais";
import { useQueryParam } from "@/components/tre/use-query-param";
import {
  formatBRL,
  formatBRLCompacto,
  formatCompetencia,
  formatData,
  formatNumero,
  formatPct,
} from "@/lib/tre/formatadores";
import type { TomTRE } from "@/lib/tre/status";
import { CHECKLIST_AUDITORIA, FATURAS_TRE, ITENS_FATURA_TRE } from "@/lib/dados-tre";
import {
  CONVENIOS_RECIPROCIDADE,
  GUIAS_RECIPROCIDADE,
  INDICADORES_RECIPROCIDADE,
  LOTES_RECIPROCIDADE,
  TABELA_BRASINDICE,
  buscarGuias,
  buscarLotes,
  calcularDiferencaBrasindice,
  type LoteReciprocidade,
} from "@/lib/dados-tre-reciprocidade";
import {
  DUTS,
  MODELOS_PARECER,
  PROCEDIMENTOS_OPME,
  gerarParecerAutomatico,
  preencherDUT,
  type DUT,
  type ParecerOPME,
  type ProcedimentoOPME,
} from "@/lib/dados-tre-opme";

/* ============================================================
   Tipos
   ============================================================ */

type StatusItem = "Aprovado" | "Glosado" | "Pendente";

interface ItemAuditoria {
  id: string;
  fatura_id: string;
  codigo: string;
  descricao: string;
  tipo: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  origem: string;
  status_auditoria: StatusItem;
  motivo_glosa: string | null;
}

interface FaturaAuditoria {
  id: string;
  numero_fatura: string;
  status: string;
  valor_bruto: number;
  valor_liquido: number;
  pdf_categoria: string;
  mes_referencia: number;
  ano_referencia: number;
  procedimento_id: string;
  credenciado_id: string;
  nome_credenciado: string;
  xml_arquivo: string;
  pdf_arquivo: string;
  motivo_glosa: string | null;
  observacoes_auditoria: string | null;
  auditor_id: string | null;
}

/** Estado da vistoria de cada fatura: nada é compartilhado entre faturas. */
interface AuditoriaFatura {
  marcados: Set<number>;
  observacoes: string;
  reabertura?: string;
}

interface ResumoFatura {
  total: number;
  aprovados: number;
  glosados: number;
  pendentes: number;
  valorApresentado: number;
  valorAprovado: number;
  valorGlosado: number;
}

const ABAS = ["faturas", "lotes", "reciprocidade", "opme"] as const;
type Aba = (typeof ABAS)[number];
const ehAba = (valor: string): valor is Aba => (ABAS as readonly string[]).includes(valor);

type FiltroFila = "todas" | "a_auditar" | "glosadas" | "concluidas";
type FiltroStatusLote = "todos" | "abertos" | LoteReciprocidade["status"];

interface FiltrosLotes {
  convenio: string;
  status: FiltroStatusLote;
  dataInicio: string;
  dataFim: string;
  numeroLote: string;
}

interface FiltrosGuias {
  matricula: string;
  cpf: string;
  nome: string;
  dataExecucao: string;
  status: string;
  /** Só guias com diferença acima da margem do Brasíndice (> 15%). */
  acimaMargem: boolean;
}

type TipoParecer = ParecerOPME["tipo"];
type EstadoParecer = "rascunho" | "assinado" | "enviado";
interface ParecerEmEdicao extends ParecerOPME {
  estado: EstadoParecer;
  assinadoEm?: string;
  enviadoEm?: string;
}

/* ============================================================
   Constantes de apresentação
   ============================================================ */

/*
 * Entrada animada (tailwindcss-animate). Duração e atraso vão como propriedades
 * arbitrárias com o mesmo prefixo motion-safe, para não perder para o
 * `animation-duration` do próprio `animate-in` nem mexer na transição de hover.
 */
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
const atraso = (i: number) => ATRASO[Math.min(i, ATRASO.length - 1)];

/** Botão "vidro" sem blur próprio, para uso dentro de superfícies que já desfocam. */
const BOTAO_VIDRO = cn(treBotao({ tom: "vidro" }), "backdrop-blur-none");
const BOTAO_BASE = "tre-ring h-10 rounded-xl";
const CAMPO_SELECT = cn(TRE_CAMPO, "focus:ring-2 focus:ring-tre-navy/40 focus:ring-offset-0");
const CAMPO_LONGO = cn(TRE_CAMPO, "h-auto min-h-[5.5rem] resize-y py-2.5 leading-relaxed");
const MENU_SELECT = "rounded-xl border-white/70 bg-white/95 shadow-glass-lg";
const ROTULO = "mb-1.5 block text-xs font-semibold text-slate-700";
const CHECKBOX =
  "size-5 shrink-0 rounded-md border-tre-navy/40 bg-white focus-visible:ring-tre-navy/40 data-[state=checked]:border-tre-navy data-[state=checked]:bg-tre-navy data-[state=checked]:text-white [&_svg]:size-3.5";
const TH = "h-11 whitespace-nowrap px-3 text-xs font-semibold uppercase tracking-wide text-slate-600";
const TR = "border-tre-navy/[0.08] hover:bg-white/60";
const TD = "px-3 py-3";

const AUDITOR = { id: "AUDITOR-001", nome: "Auditor Contábil" } as const;

const STATUS_SOMENTE_LEITURA = new Set(["Paga", "Auditada", "Glosada"]);
const STATUS_A_AUDITAR = new Set(["Pendente", "Inserida", "Em análise"]);

const IDS_OBRIGATORIOS: number[] = CHECKLIST_AUDITORIA.filter((c) => c.obrigatorio).map((c) => c.id);

const MOTIVOS_SUGERIDOS = [
  "Sem autorização prévia",
  "Valor acima da tabela TRE",
  "Quantidade excedente ao autorizado",
  "Procedimento não previsto na guia",
  "Documentação incompleta",
] as const;

const TIPO_ITEM: Record<string, { icone: LucideIcon; classe: string }> = {
  Procedimento: { icone: Stethoscope, classe: "bg-tre-info/10 text-tre-info" },
  Exame: { icone: FlaskConical, classe: "bg-tre-green/10 text-tre-green-ink" },
  Insumo: { icone: Syringe, classe: "bg-tre-navy/10 text-tre-navy" },
  Medicamento: { icone: Pill, classe: "bg-tre-terra/10 text-tre-terra" },
  Material: { icone: Package, classe: "bg-tre-gold/20 text-tre-gold-ink" },
};
const TIPO_ITEM_PADRAO = { icone: FileText, classe: "bg-slate-500/10 text-slate-700" };

const FILTROS_FILA: { id: FiltroFila; rotulo: string }[] = [
  { id: "todas", rotulo: "Todas" },
  { id: "a_auditar", rotulo: "A auditar" },
  { id: "glosadas", rotulo: "Glosadas" },
  { id: "concluidas", rotulo: "Concluídas" },
];

/* Reciprocidade */
const MARGEM_BRASINDICE = 15;
const LOTE_EM_ABERTO = new Set<LoteReciprocidade["status"]>(["Pendente", "Em Auditoria"]);
const FILTROS_LOTES_VAZIOS: FiltrosLotes = { convenio: "todos", status: "todos", dataInicio: "", dataFim: "", numeroLote: "" };
const FILTROS_GUIAS_VAZIOS: FiltrosGuias = { matricula: "", cpf: "", nome: "", dataExecucao: "", status: "todos", acimaMargem: false };
const STATUS_LOTE_OPCOES: { valor: FiltroStatusLote; rotulo: string }[] = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "abertos", rotulo: "Em aberto (pendente + em auditoria)" },
  { valor: "Pendente", rotulo: "Pendente" },
  { valor: "Em Auditoria", rotulo: "Em auditoria" },
  { valor: "Auditado", rotulo: "Auditado" },
  { valor: "Pago", rotulo: "Pago" },
  { valor: "Glosado", rotulo: "Glosado" },
];
const STATUS_GUIA_OPCOES = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "Aprovado", rotulo: "Aprovado" },
  { valor: "Glosado", rotulo: "Glosado" },
  { valor: "Pendente", rotulo: "Pendente" },
  { valor: "Análise", rotulo: "Em análise" },
] as const;

const contarPorLote = (filtro: (g: (typeof GUIAS_RECIPROCIDADE)[number]) => boolean) => {
  const mapa = new Map<string, number>();
  for (const g of GUIAS_RECIPROCIDADE) if (filtro(g)) mapa.set(g.loteId, (mapa.get(g.loteId) ?? 0) + 1);
  return mapa;
};
const AMOSTRA_POR_LOTE = contarPorLote(() => true);
const ACIMA_POR_LOTE = contarPorLote((g) => g.diferencaPercentual > MARGEM_BRASINDICE);

/* OPME */
const TIPOS_PARECER: readonly TipoParecer[] = ["Autorizado", "Autorizado Parcialmente", "Com Pendência", "Negado"];
const TIPOS_AUTORIZATIVOS = new Set<TipoParecer>(["Autorizado", "Autorizado Parcialmente"]);
const ROTULO_ESTADO_PARECER: Record<EstadoParecer, { rotulo: string; tom: TomTRE }> = {
  rascunho: { rotulo: "Rascunho", tom: "neutral" },
  assinado: { rotulo: "Assinado", tom: "success" },
  enviado: { rotulo: "Enviado", tom: "info" },
};

/* ============================================================
   Funções auxiliares
   ============================================================ */

const normalizar = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const plural = (n: number, singular: string, pluralTexto: string) => `${formatNumero(n)} ${n === 1 ? singular : pluralTexto}`;
const primeiraMaiuscula = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const somenteLeitura = (f: FaturaAuditoria) => STATUS_SOMENTE_LEITURA.has(f.status);

const DECIMAL_2 = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function calcularResumo(itens: ItemAuditoria[]): ResumoFatura {
  const r: ResumoFatura = { total: itens.length, aprovados: 0, glosados: 0, pendentes: 0, valorApresentado: 0, valorAprovado: 0, valorGlosado: 0 };
  for (const i of itens) {
    r.valorApresentado += i.valor_total;
    if (i.status_auditoria === "Aprovado") {
      r.aprovados += 1;
      r.valorAprovado += i.valor_total;
    } else if (i.status_auditoria === "Glosado") {
      r.glosados += 1;
      r.valorGlosado += i.valor_total;
    } else {
      r.pendentes += 1;
    }
  }
  return r;
}

function estadoInicialAuditoria(): Record<string, AuditoriaFatura> {
  // Faturas já concluídas passaram pelo checklist obrigatório; as demais começam desmarcadas.
  return Object.fromEntries(
    FATURAS_TRE.map((f) => [
      f.id,
      {
        marcados: new Set<number>(STATUS_SOMENTE_LEITURA.has(f.status) ? IDS_OBRIGATORIOS : []),
        observacoes: f.observacoes_auditoria ?? "",
      },
    ]),
  );
}

/** Data e hora locais do momento da ação ("07/10/2026 às 14:32"), sem o -1 dia do fuso. */
function carimboAgora(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${formatData(`${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`)} às ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function baixarCSV(nomeArquivo: string, linhas: (string | number)[][]) {
  const escapar = (v: string | number) => {
    const s = String(v);
    return /[";\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = "﻿" + linhas.map((l) => l.map(escapar).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buscarDUT(proc: ProcedimentoOPME | null): DUT | null {
  if (!proc) return null;
  return DUTS.find((d) => d.id === proc.dutPadrao) ?? DUTS.find((d) => d.codigoProcedimento === proc.codigo) ?? null;
}

/** Agrupa os campos da DUT pelas seções numeradas do próprio formulário ("1. IDENTIFICAÇÃO DO PACIENTE"). */
function agruparCamposDUT(dut: DUT) {
  const secaoDoCampo = new Map<string, string>();
  let secao = "Dados gerais";
  for (const linha of dut.conteudo.split("\n")) {
    const titulo = linha.match(/^\s*\d+\.\s+(.+?)\s*$/);
    if (titulo) {
      secao = primeiraMaiuscula(titulo[1].toLocaleLowerCase("pt-BR"));
      continue;
    }
    for (const m of linha.matchAll(/\{\{(\w+)\}\}/g)) {
      if (!secaoDoCampo.has(m[1])) secaoDoCampo.set(m[1], secao);
    }
  }
  const grupos: { titulo: string; campos: DUT["camposVariaveis"] }[] = [];
  for (const campo of dut.camposVariaveis) {
    const tituloGrupo = secaoDoCampo.get(campo.nome) ?? "Outros dados";
    const grupo = grupos.find((g) => g.titulo === tituloGrupo);
    if (grupo) grupo.campos.push(campo);
    else grupos.push({ titulo: tituloGrupo, campos: [campo] });
  }
  return grupos;
}

/* ============================================================
   Peças de apresentação
   ============================================================ */

/** Barra segmentada em SVG (larguras por atributo, sem style inline). */
function BarraSegmentada({
  segmentos,
  rotulo,
  className,
}: {
  segmentos: { valor: number; classe: string }[];
  /** Sem rótulo, a barra é decorativa (o texto ao lado já descreve os números). */
  rotulo?: string;
  className?: string;
}) {
  const total = segmentos.reduce((acc, s) => acc + Math.max(0, s.valor), 0);
  let x = 0;
  return (
    <span className={cn("block h-1.5 w-full overflow-hidden rounded-full bg-tre-navy/[0.08]", className)}>
      <svg {...(rotulo ? { role: "img", "aria-label": rotulo } : { "aria-hidden": true })} className="block h-full w-full">
        {total > 0 &&
          segmentos.map((s, i) => {
            const largura = (Math.max(0, s.valor) / total) * 100;
            const rect = <rect key={i} x={`${x}%`} y="0" width={`${largura}%`} height="100%" className={s.classe} />;
            x += largura;
            return rect;
          })}
      </svg>
    </span>
  );
}

const COR_METRICA = {
  navy: "text-tre-navy",
  success: "text-tre-success",
  danger: "text-tre-danger-ink",
  gold: "text-tre-gold-ink",
} as const;

function TileMetrica({
  rotulo,
  valor,
  detalhe,
  icone: Icone,
  tom = "navy",
}: {
  rotulo: string;
  valor: React.ReactNode;
  detalhe?: React.ReactNode;
  icone: LucideIcon;
  tom?: keyof typeof COR_METRICA;
}) {
  return (
    <div className="tre-inset rounded-2xl p-3.5">
      <p className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
        <Icone className="size-3.5" aria-hidden />
        {rotulo}
      </p>
      <p className={cn("mt-1 text-lg font-bold tabular-nums tracking-tight sm:text-xl", COR_METRICA[tom])}>{valor}</p>
      {detalhe && <p className="mt-0.5 text-xs text-slate-600">{detalhe}</p>}
    </div>
  );
}

function EditorGlosa({
  item,
  motivo,
  erro,
  onMotivo,
  onConfirmar,
  onCancelar,
}: {
  item: ItemAuditoria;
  motivo: string;
  erro: string | null;
  onMotivo: (valor: string) => void;
  onConfirmar: () => void;
  onCancelar: () => void;
}) {
  const id = `glosa-${item.id}`;
  return (
    <div className="tre-inset rounded-2xl p-4 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-top-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <Label htmlFor={id} className="font-semibold text-tre-navy">
          Motivo da glosa · {item.descricao}
        </Label>
        <span className="text-sm font-semibold tabular-nums text-tre-danger-ink">−{formatBRL(item.valor_total)}</span>
      </div>
      <div role="group" aria-label="Motivos frequentes" className="mt-2 flex flex-wrap gap-1.5">
        {MOTIVOS_SUGERIDOS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => onMotivo(m)}
            className="tre-ring min-h-10 rounded-full bg-white/70 px-3 text-xs font-medium text-slate-700 ring-1 ring-tre-navy/10 transition-colors hover:bg-white hover:text-tre-navy"
          >
            {m}
          </button>
        ))}
      </div>
      {/* Foco imediato: a glosa é aberta por teclado ou clique e o próximo passo é sempre digitar o motivo. */}
      <Textarea
        id={id}
        autoFocus
        rows={2}
        value={motivo}
        onChange={(e) => onMotivo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            onConfirmar();
          } else if (e.key === "Escape") {
            e.preventDefault();
            onCancelar();
          }
        }}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro ${id}-dica` : `${id}-dica`}
        placeholder="Descreva o motivo da glosa (obrigatório)"
        className={cn(CAMPO_LONGO, "mt-3 min-h-[4.5rem]")}
      />
      {erro && (
        <p id={`${id}-erro`} className="mt-1.5 text-xs font-medium text-tre-danger-ink">
          {erro}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p id={`${id}-dica`} className="text-xs text-slate-600">
          <kbd className="rounded bg-white px-1 font-sans font-semibold ring-1 ring-tre-navy/15">Enter</kbd> confirma ·{" "}
          <kbd className="rounded bg-white px-1 font-sans font-semibold ring-1 ring-tre-navy/15">Shift+Enter</kbd> quebra linha ·{" "}
          <kbd className="rounded bg-white px-1 font-sans font-semibold ring-1 ring-tre-navy/15">Esc</kbd> cancela
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={onCancelar} className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}>
            Cancelar
          </Button>
          <Button onClick={onConfirmar} className={cn(treBotao({ tom: "perigo" }), BOTAO_BASE)}>
            <ThumbsDown aria-hidden />
            Confirmar glosa
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Página
   ============================================================ */

export default function AreaAuditoriaTRE() {
  /* ---------- Estado na URL (deep links) ---------- */
  const [abaParam, setAbaParam] = useQueryParam("aba", "faturas");
  const aba: Aba = ehAba(abaParam) ? abaParam : "faturas";
  const [faturaParam, setFaturaParam] = useQueryParam("fatura", "");

  /* ---------- Estado de faturas e itens ---------- */
  const [faturas, setFaturas] = useState<FaturaAuditoria[]>(() => FATURAS_TRE.map((f) => ({ ...f })));
  const [itens, setItens] = useState<ItemAuditoria[]>(() => ITENS_FATURA_TRE.map((i) => ({ ...i })));
  const [auditoria, setAuditoria] = useState<Record<string, AuditoriaFatura>>(estadoInicialAuditoria);
  const [filtroFila, setFiltroFila] = useState<FiltroFila>("todas");
  const [busca, setBusca] = useState("");
  const [checklistAberto, setChecklistAberto] = useState(true);
  const [itemEmGlosa, setItemEmGlosa] = useState<string | null>(null);
  const [motivoGlosa, setMotivoGlosa] = useState("");
  const [erroGlosa, setErroGlosa] = useState<string | null>(null);
  const [reabrirAberto, setReabrirAberto] = useState(false);
  const [justificativa, setJustificativa] = useState("");
  const [erroJustificativa, setErroJustificativa] = useState<string | null>(null);

  /* ---------- Estado de reciprocidade e OPME (sobrevive à troca de aba) ---------- */
  const [filtrosLotes, setFiltrosLotes] = useState<FiltrosLotes>(FILTROS_LOTES_VAZIOS);
  const [filtrosGuias, setFiltrosGuias] = useState<FiltrosGuias>(FILTROS_GUIAS_VAZIOS);
  const opme = useParecerOpme();

  const vistoriaRef = useRef<HTMLDivElement>(null);

  /* ---------- Derivados ---------- */
  const itensPorFatura = useMemo(() => {
    const mapa = new Map<string, ItemAuditoria[]>();
    for (const i of itens) {
      const lista = mapa.get(i.fatura_id);
      if (lista) lista.push(i);
      else mapa.set(i.fatura_id, [i]);
    }
    return mapa;
  }, [itens]);

  const resumoDe = (faturaId: string) => calcularResumo(itensPorFatura.get(faturaId) ?? []);
  const estadoDe = (faturaId: string): AuditoriaFatura => auditoria[faturaId] ?? { marcados: new Set<number>(), observacoes: "" };
  const obrigatoriosPendentes = (faturaId: string) => IDS_OBRIGATORIOS.filter((id) => !estadoDe(faturaId).marcados.has(id)).length;
  const precisaAuditar = (f: FaturaAuditoria) => STATUS_A_AUDITAR.has(f.status) || resumoDe(f.id).pendentes > 0;

  const faturasAAuditar = faturas.filter(precisaAuditar);
  const faturasGlosadas = faturas.filter((f) => f.status === "Glosada");
  const faturasConcluidas = faturas.filter(somenteLeitura);
  const valorEmAuditoria = faturasAAuditar.reduce((acc, f) => acc + resumoDe(f.id).valorApresentado, 0);
  const valorGlosadoTotal = faturasGlosadas.reduce((acc, f) => acc + resumoDe(f.id).valorGlosado, 0);
  const lotesEmAberto = LOTES_RECIPROCIDADE.filter((l) => LOTE_EM_ABERTO.has(l.status));

  const contagemFila: Record<FiltroFila, number> = {
    todas: faturas.length,
    a_auditar: faturasAAuditar.length,
    glosadas: faturasGlosadas.length,
    concluidas: faturasConcluidas.length,
  };

  const termoBusca = normalizar(busca);
  const fila = faturas
    .filter((f) => {
      if (filtroFila === "a_auditar") return precisaAuditar(f);
      if (filtroFila === "glosadas") return f.status === "Glosada";
      if (filtroFila === "concluidas") return somenteLeitura(f);
      return true;
    })
    .filter((f) => !termoBusca || normalizar(`${f.numero_fatura} ${f.id} ${f.nome_credenciado} ${f.pdf_categoria}`).includes(termoBusca))
    .sort((a, b) => Number(precisaAuditar(b)) - Number(precisaAuditar(a)));

  const faturaSelecionada = faturaParam
    ? faturas.find((f) => f.id === faturaParam || f.numero_fatura === faturaParam) ?? null
    : null;
  const proximaAAuditar = faturasAAuditar.find((f) => f.id !== faturaSelecionada?.id) ?? null;

  /* ---------- Rolagem até a vistoria no celular (seleção e deep link) ---------- */
  useEffect(() => {
    if (!faturaParam) return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const quadro = requestAnimationFrame(() =>
      vistoriaRef.current?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" }),
    );
    return () => cancelAnimationFrame(quadro);
  }, [faturaParam]);

  /* ---------- Ações: navegação ---------- */
  const trocarAba = (valor: string) => {
    if (ehAba(valor)) setAbaParam(valor);
  };

  const selecionarFatura = (faturaId: string) => {
    fecharEditorGlosa();
    setFaturaParam(faturaId);
  };

  const fecharVistoria = () => {
    fecharEditorGlosa();
    setFaturaParam("");
  };

  const alternarFiltroFila = (filtro: FiltroFila) => {
    const ativo = aba === "faturas" && filtroFila === filtro;
    setFiltroFila(ativo ? "todas" : filtro);
    setAbaParam("faturas");
  };

  const alternarLotesEmAberto = () => {
    const ativo = aba === "lotes" && filtrosLotes.status === "abertos";
    setFiltrosLotes({ ...FILTROS_LOTES_VAZIOS, status: ativo ? "todos" : "abertos" });
    setFiltrosGuias((f) => ({ ...f, acimaMargem: false }));
    setAbaParam("lotes");
  };

  const verGuiasAcimaDaMargem = (convenioId: string) => {
    setFiltrosLotes({ ...FILTROS_LOTES_VAZIOS, convenio: convenioId });
    setFiltrosGuias((f) => ({ ...f, acimaMargem: true }));
    setAbaParam("lotes");
    toast({
      title: "Lotes com guias acima da margem",
      description: `${convenioId} · guias com diferença acima de ${MARGEM_BRASINDICE}% sobre o Brasíndice.`,
    });
  };

  /* ---------- Ações: checklist e observações (por fatura) ---------- */
  const alternarChecklist = (faturaId: string, itemId: number) => {
    setAuditoria((prev) => {
      const atual = prev[faturaId] ?? { marcados: new Set<number>(), observacoes: "" };
      const marcados = new Set(atual.marcados);
      if (marcados.has(itemId)) marcados.delete(itemId);
      else marcados.add(itemId);
      return { ...prev, [faturaId]: { ...atual, marcados } };
    });
  };

  const alterarObservacoes = (faturaId: string, texto: string) => {
    setAuditoria((prev) => {
      const atual = prev[faturaId] ?? { marcados: new Set<number>(), observacoes: "" };
      return { ...prev, [faturaId]: { ...atual, observacoes: texto } };
    });
  };

  /* ---------- Ações: itens ---------- */
  function fecharEditorGlosa(devolverFocoPara?: string) {
    setItemEmGlosa(null);
    setMotivoGlosa("");
    setErroGlosa(null);
    if (devolverFocoPara) {
      requestAnimationFrame(() => document.getElementById(`glosar-${devolverFocoPara}`)?.focus());
    }
  }

  const aprovarItem = (itemId: string) => {
    setItens((prev) => prev.map((i) => (i.id === itemId ? { ...i, status_auditoria: "Aprovado", motivo_glosa: null } : i)));
    if (itemEmGlosa === itemId) fecharEditorGlosa();
  };

  const abrirGlosa = (item: ItemAuditoria) => {
    setItemEmGlosa(item.id);
    setMotivoGlosa(item.motivo_glosa ?? "");
    setErroGlosa(null);
  };

  const confirmarGlosa = (itemId: string) => {
    const motivo = motivoGlosa.trim();
    if (!motivo) {
      setErroGlosa("Informe o motivo da glosa. Ele aparece para o credenciado no extrato.");
      return;
    }
    setItens((prev) => prev.map((i) => (i.id === itemId ? { ...i, status_auditoria: "Glosado", motivo_glosa: motivo } : i)));
    fecharEditorGlosa(itemId);
  };

  /** Afeta só os itens Pendentes: glosas já aplicadas são preservadas. */
  const aprovarPendentes = (faturaId: string) => {
    const ids = new Set(
      (itensPorFatura.get(faturaId) ?? []).filter((i) => i.status_auditoria === "Pendente").map((i) => i.id),
    );
    if (ids.size === 0) return;
    setItens((prev) => prev.map((i) => (ids.has(i.id) ? { ...i, status_auditoria: "Aprovado", motivo_glosa: null } : i)));
    toast({
      variant: "success",
      title: plural(ids.size, "item aprovado", "itens aprovados"),
      description: "As glosas já aplicadas foram mantidas.",
      action: (
        <ToastAction
          altText="Desfazer a aprovação em lote"
          onClick={() =>
            setItens((prev) =>
              prev.map((i) => (ids.has(i.id) && i.status_auditoria === "Aprovado" ? { ...i, status_auditoria: "Pendente" } : i)),
            )
          }
        >
          Desfazer
        </ToastAction>
      ),
    });
  };

  /* ---------- Ações: decisão ---------- */
  const concluirAuditoria = (faturaId: string, modo: "integral" | "com_glosa") => {
    const fatura = faturas.find((f) => f.id === faturaId);
    if (!fatura) return;
    const resumo = resumoDe(faturaId);
    if (resumo.pendentes > 0 || obrigatoriosPendentes(faturaId) > 0) return;

    const glosados = (itensPorFatura.get(faturaId) ?? []).filter((i) => i.status_auditoria === "Glosado");
    const observacoes = estadoDe(faturaId).observacoes.trim();
    const atualizada: FaturaAuditoria = {
      ...fatura,
      status: modo === "integral" ? "Auditada" : "Glosada",
      valor_liquido: resumo.valorAprovado,
      observacoes_auditoria: observacoes || null,
      auditor_id: AUDITOR.id,
      motivo_glosa: modo === "com_glosa" ? glosados.map((i) => `${i.descricao}: ${i.motivo_glosa ?? "sem motivo"}`).join("; ") : null,
    };
    setFaturas((prev) => prev.map((f) => (f.id === faturaId ? atualizada : f)));

    const proxima = faturas.find((f) => f.id !== faturaId && precisaAuditar(f)) ?? null;
    fecharEditorGlosa();
    if (proxima) setFaturaParam(proxima.id);

    toast({
      variant: "success",
      title: modo === "integral" ? `${fatura.numero_fatura} aprovada integralmente` : `${fatura.numero_fatura} concluída com glosa`,
      description: [
        `Líquido ${formatBRL(resumo.valorAprovado)}`,
        modo === "com_glosa" ? `glosa de ${formatBRL(resumo.valorGlosado)}` : null,
        proxima ? `próxima: ${proxima.numero_fatura}` : "fila de auditoria zerada",
      ]
        .filter(Boolean)
        .join(" · "),
      action: (
        <ToastAction
          altText={`Desfazer a conclusão de ${fatura.numero_fatura}`}
          onClick={() => {
            setFaturas((prev) => prev.map((f) => (f.id === faturaId ? fatura : f)));
            setFaturaParam(faturaId);
          }}
        >
          Desfazer
        </ToastAction>
      ),
    });
  };

  const reabrirAuditoria = () => {
    if (!faturaSelecionada) return;
    const texto = justificativa.trim();
    if (texto.length < 10) {
      setErroJustificativa("Descreva a justificativa com pelo menos 10 caracteres.");
      return;
    }
    const id = faturaSelecionada.id;
    setFaturas((prev) => prev.map((f) => (f.id === id ? { ...f, status: "Em análise", auditor_id: AUDITOR.id } : f)));
    setAuditoria((prev) => ({ ...prev, [id]: { ...(prev[id] ?? { marcados: new Set<number>(), observacoes: "" }), reabertura: texto } }));
    setReabrirAberto(false);
    setJustificativa("");
    setErroJustificativa(null);
    toast({ title: "Auditoria reaberta", description: `${faturaSelecionada.numero_fatura} voltou para a fila, em análise.` });
  };

  /* ---------- Cabeçalho ---------- */
  const acoes = (
    <div className="flex items-center gap-2 rounded-full bg-white/10 p-1 ring-1 ring-white/15 sm:pr-3">
      <AvatarIniciais nome={AUDITOR.nome} tamanho="sm" />
      <span className="sr-only sm:not-sr-only sm:block sm:leading-tight">
        <span className="block text-sm font-semibold text-white">{AUDITOR.nome}</span>
        <span className="block text-[11px] font-medium text-tre-gold-soft">Acesso TISS · TRE-PA</span>
      </span>
    </div>
  );

  /* ---------- Vistoria (fatura selecionada) ---------- */
  const renderVistoria = (fatura: FaturaAuditoria) => {
    const resumo = resumoDe(fatura.id);
    const estado = estadoDe(fatura.id);
    const itensFatura = itensPorFatura.get(fatura.id) ?? [];
    const leitura = somenteLeitura(fatura);
    const pendObrigatorios = obrigatoriosPendentes(fatura.id);
    const marcados = estado.marcados.size;
    const temGlosa = resumo.glosados > 0;
    const bloqueios = [
      resumo.pendentes > 0 ? plural(resumo.pendentes, "item aguardando análise", "itens aguardando análise") : null,
      pendObrigatorios > 0 ? plural(pendObrigatorios, "item obrigatório do checklist", "itens obrigatórios do checklist") : null,
    ].filter((b): b is string => Boolean(b));
    const colunas = leitura ? 5 : 6;

    return (
      <div className="space-y-4">
        {/* Cabeçalho da vistoria + checklist */}
        <GlassCard as="section" aria-labelledby="vistoria-titulo" className={cn("overflow-hidden", ENTRADA, atraso(0))}>
          <div className="relative border-b border-white/60 bg-gradient-to-r from-tre-navy/[0.07] via-transparent to-tre-gold/[0.10] p-5 sm:p-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={fecharVistoria}
              aria-label="Fechar vistoria"
              className={cn(treBotao({ tom: "fantasma" }), "tre-ring absolute right-3 top-3 rounded-full")}
            >
              <X className="size-5" aria-hidden />
            </Button>
            <div className="flex flex-wrap items-center gap-2 pr-12">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Vistoria detalhada</span>
              <StatusBadge status={fatura.status} />
              {leitura && (
                <ToneBadge tom="success">
                  <Lock className="size-3" aria-hidden />
                  {fatura.status === "Paga" ? "Paga · somente leitura" : "Auditada · somente leitura"}
                </ToneBadge>
              )}
            </div>
            <h2 id="vistoria-titulo" className="mt-2 text-2xl font-bold tracking-tight text-tre-navy">
              {fatura.numero_fatura}
            </h2>
            <p className="mt-0.5 text-sm text-slate-700">
              {fatura.nome_credenciado} · competência {formatCompetencia(fatura.mes_referencia, fatura.ano_referencia)} · {fatura.pdf_categoria}
            </p>
            <ul aria-label="Arquivos da fatura" className="mt-3 flex flex-wrap gap-2">
              <li className="tre-inset inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-slate-700">
                <FileCode2 className="size-3.5 text-tre-navy" aria-hidden />
                <span className="sr-only">XML TISS:</span>
                {fatura.xml_arquivo}
              </li>
              <li className="tre-inset inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-slate-700">
                <FileText className="size-3.5 text-tre-navy" aria-hidden />
                <span className="sr-only">PDF:</span>
                {fatura.pdf_arquivo}
              </li>
            </ul>
          </div>

          <div className="space-y-4 p-5 sm:p-6">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <TileMetrica rotulo="Apresentado" valor={formatBRL(resumo.valorApresentado)} detalhe={plural(resumo.total, "item", "itens")} icone={Receipt} />
              <TileMetrica
                rotulo={leitura ? "Líquido" : "Aprovado"}
                valor={formatBRL(leitura ? fatura.valor_liquido : resumo.valorAprovado)}
                detalhe={plural(resumo.aprovados, "item aprovado", "itens aprovados")}
                icone={CheckCircle2}
                tom="success"
              />
              <TileMetrica
                rotulo="Glosado"
                valor={formatBRL(resumo.valorGlosado)}
                detalhe={resumo.valorApresentado > 0 ? `${formatPct((resumo.valorGlosado / resumo.valorApresentado) * 100)} do apresentado` : undefined}
                icone={TriangleAlert}
                tom="danger"
              />
              <TileMetrica
                rotulo="Checklist"
                valor={
                  <>
                    {marcados}
                    <span className="text-base font-semibold text-slate-600">/{CHECKLIST_AUDITORIA.length}</span>
                  </>
                }
                detalhe={pendObrigatorios > 0 ? plural(pendObrigatorios, "obrigatório pendente", "obrigatórios pendentes") : "Obrigatórios ok"}
                icone={ListChecks}
                tom={pendObrigatorios > 0 ? "gold" : "success"}
              />
            </div>

            <div>
              <BarraSegmentada
                className="h-2"
                rotulo={`${resumo.aprovados} aprovados, ${resumo.glosados} glosados e ${resumo.pendentes} pendentes`}
                segmentos={[
                  { valor: resumo.valorAprovado, classe: "fill-tre-success" },
                  { valor: resumo.valorGlosado, classe: "fill-tre-danger" },
                  { valor: resumo.valorApresentado - resumo.valorAprovado - resumo.valorGlosado, classe: "fill-tre-warn" },
                ]}
              />
              <p aria-hidden className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-tre-success" />{resumo.aprovados} aprovados</span>
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-tre-danger" />{resumo.glosados} glosados</span>
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-tre-warn" />{resumo.pendentes} pendentes</span>
              </p>
            </div>

            {estado.reabertura && !leitura && (
              <p className="tre-tone-gold flex items-start gap-2 rounded-2xl px-4 py-3 text-sm">
                <RotateCcw className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  <strong className="font-semibold">Auditoria reaberta.</strong> Justificativa: {estado.reabertura}
                </span>
              </p>
            )}
            {leitura && fatura.motivo_glosa && (
              <p className="tre-tone-danger flex items-start gap-2 rounded-2xl px-4 py-3 text-sm">
                <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  <strong className="font-semibold">Motivo consolidado da glosa:</strong> {fatura.motivo_glosa}
                </span>
              </p>
            )}

            <Collapsible open={checklistAberto} onOpenChange={setChecklistAberto} className="tre-inset rounded-2xl">
              <button
                type="button"
                onClick={() => setChecklistAberto((v) => !v)}
                aria-expanded={checklistAberto}
                aria-controls={checklistAberto ? "checklist-conformidade" : undefined}
                className="tre-ring flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-white/50"
              >
                <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-xl bg-tre-navy/10 text-tre-navy">
                  <ClipboardCheck className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-tre-navy">Checklist de conformidade</span>
                  <span className="block text-xs text-slate-600">
                    {pendObrigatorios > 0
                      ? `${plural(pendObrigatorios, "item obrigatório pendente", "itens obrigatórios pendentes")} para concluir`
                      : "Todos os itens obrigatórios verificados"}
                  </span>
                </span>
                <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums", pendObrigatorios > 0 ? "tre-tone-warning" : "tre-tone-success")}>
                  {marcados}/{CHECKLIST_AUDITORIA.length}
                </span>
                <ChevronDown aria-hidden className={cn("size-5 shrink-0 text-slate-600 transition-transform", checklistAberto && "rotate-180")} />
              </button>
              <CollapsibleContent className="border-t border-white/70 p-2">
                <ul id="checklist-conformidade" className="grid gap-1 sm:grid-cols-2">
                  {CHECKLIST_AUDITORIA.map((c) => {
                    const id = `check-${fatura.id}-${c.id}`;
                    return (
                      <li key={c.id}>
                        <label
                          htmlFor={id}
                          className={cn(
                            "flex min-h-11 items-center gap-3 rounded-xl px-2.5 py-2 transition-colors",
                            leitura ? "cursor-default" : "cursor-pointer hover:bg-white/60",
                          )}
                        >
                          <Checkbox
                            id={id}
                            checked={estado.marcados.has(c.id)}
                            disabled={leitura}
                            onCheckedChange={() => alternarChecklist(fatura.id, c.id)}
                            className={CHECKBOX}
                          />
                          <span className="flex-1 text-sm text-slate-800">{c.item}</span>
                          {c.obrigatorio ? (
                            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">Obrigatório</span>
                          ) : (
                            <span className="text-[11px] font-medium text-slate-600">Opcional</span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </GlassCard>

        {/* Itens + observações */}
        <GlassCard variante="forte" as="section" aria-labelledby="itens-titulo" className={cn("overflow-hidden", ENTRADA, atraso(1))}>
          <GlassCardHeader>
            <SectionHeader
              id="itens-titulo"
              titulo="Itens da fatura"
              contador={resumo.total}
              icone={ClipboardList}
              descricao={leitura ? "Resultado da auditoria item a item." : "Aprove ou glose cada item. A glosa exige motivo."}
              className="w-full"
              acoes={
                !leitura && (
                  <Button
                    variant="ghost"
                    onClick={() => aprovarPendentes(fatura.id)}
                    disabled={resumo.pendentes === 0}
                    className={cn(BOTAO_VIDRO, BOTAO_BASE, "text-tre-success hover:text-tre-success")}
                  >
                    <CheckCircle2 aria-hidden />
                    Aprovar pendentes ({resumo.pendentes})
                  </Button>
                )
              }
            />
          </GlassCardHeader>

          {itensFatura.length === 0 ? (
            <div className="px-5 pb-5 sm:px-6">
              <EmptyState compacto icone={Inbox} titulo="Nenhum item importado" descricao="O XML desta fatura ainda não foi processado." />
            </div>
          ) : (
            <Table className="min-w-[680px]">
              <TableHeader>
                <TableRow className="border-tre-navy/10 hover:bg-transparent">
                  <TableHead className={cn(TH, "pl-5 sm:pl-6")}>Item</TableHead>
                  <TableHead className={cn(TH, "text-right")}>Qtd</TableHead>
                  <TableHead className={cn(TH, "text-right")}>Valor</TableHead>
                  <TableHead className={TH}>Origem</TableHead>
                  <TableHead className={cn(TH, leitura && "pr-5 sm:pr-6")}>Status</TableHead>
                  {!leitura && <TableHead className={cn(TH, "pr-5 text-right sm:pr-6")}>Ação</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {itensFatura.map((item) => {
                  const tipo = TIPO_ITEM[item.tipo] ?? TIPO_ITEM_PADRAO;
                  const IconeTipo = tipo.icone;
                  const glosado = item.status_auditoria === "Glosado";
                  const aprovado = item.status_auditoria === "Aprovado";
                  const extra = item.origem === "Inserido Manualmente";
                  const emEdicao = itemEmGlosa === item.id;
                  return (
                    <Fragment key={item.id}>
                      <TableRow
                        className={cn(TR, glosado && "bg-tre-danger/[0.04] hover:bg-tre-danger/[0.07]", emEdicao && "border-b-0 bg-white/70")}
                      >
                        <TableCell className={cn(TD, "pl-5 sm:pl-6")}>
                          <div className="flex items-start gap-3">
                            <span aria-hidden className={cn("grid size-9 shrink-0 place-items-center rounded-xl", tipo.classe)}>
                              <IconeTipo className="size-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="font-medium text-slate-900">{item.descricao}</p>
                              <p className="text-xs text-slate-600">
                                <span className="font-mono">{item.codigo}</span> · {item.tipo}
                              </p>
                              {glosado && item.motivo_glosa && (
                                <p className="mt-1 flex max-w-md items-start gap-1 text-xs text-tre-danger-ink">
                                  <TriangleAlert className="mt-px size-3.5 shrink-0" aria-hidden />
                                  <span>
                                    <span className="sr-only">Motivo da glosa: </span>
                                    {item.motivo_glosa}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className={cn(TD, "text-right tabular-nums text-slate-800")}>{formatNumero(item.quantidade)}</TableCell>
                        <TableCell className={cn(TD, "text-right tabular-nums")}>
                          <span className={cn("block font-semibold", glosado ? "text-tre-danger-ink line-through decoration-tre-danger/40" : "text-tre-navy")}>
                            {formatBRL(item.valor_total)}
                          </span>
                          <span className="block text-xs text-slate-600">{formatBRL(item.valor_unitario)} un.</span>
                        </TableCell>
                        <TableCell className={TD}>
                          {extra ? (
                            <ToneBadge tom="warning">
                              Extra<span className="sr-only"> (inserido manualmente pelo credenciado)</span>
                            </ToneBadge>
                          ) : (
                            <ToneBadge tom="neutral">XML</ToneBadge>
                          )}
                        </TableCell>
                        <TableCell className={cn(TD, leitura && "pr-5 sm:pr-6")}>
                          <StatusBadge status={item.status_auditoria} />
                        </TableCell>
                        {!leitura && (
                          <TableCell className={cn(TD, "pr-5 sm:pr-6")}>
                            <div className="flex justify-end gap-1.5">
                              <Button
                                variant="ghost"
                                onClick={() => aprovarItem(item.id)}
                                disabled={aprovado}
                                aria-label={`Aprovar ${item.descricao}`}
                                className={cn(BOTAO_BASE, "px-3 font-semibold text-tre-success hover:bg-tre-success/10 hover:text-tre-success")}
                              >
                                <ThumbsUp aria-hidden />
                                <span className="hidden sm:inline">Aprovar</span>
                              </Button>
                              <Button
                                id={`glosar-${item.id}`}
                                variant="ghost"
                                onClick={() => (emEdicao ? fecharEditorGlosa(item.id) : abrirGlosa(item))}
                                aria-expanded={emEdicao}
                                aria-label={glosado ? `Editar glosa de ${item.descricao}` : `Glosar ${item.descricao}`}
                                className={cn(
                                  BOTAO_BASE,
                                  "px-3 font-semibold text-tre-danger-ink hover:bg-tre-danger/10 hover:text-tre-danger-ink",
                                  emEdicao && "bg-tre-danger/10",
                                )}
                              >
                                <ThumbsDown aria-hidden />
                                <span className="hidden sm:inline">{glosado ? "Editar" : "Glosar"}</span>
                              </Button>
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                      {emEdicao && (
                        <TableRow className="border-tre-navy/[0.08] bg-white/70 hover:bg-white/70">
                          <TableCell colSpan={colunas} className="px-5 pb-5 pt-0 sm:px-6">
                            <EditorGlosa
                              item={item}
                              motivo={motivoGlosa}
                              erro={erroGlosa}
                              onMotivo={(v) => {
                                setMotivoGlosa(v);
                                if (erroGlosa) setErroGlosa(null);
                              }}
                              onConfirmar={() => confirmarGlosa(item.id)}
                              onCancelar={() => fecharEditorGlosa(item.id)}
                            />
                          </TableCell>
                        </TableRow>
                      )}
                    </Fragment>
                  );
                })}
              </TableBody>
            </Table>
          )}

          <div className="border-t border-tre-navy/10 p-5 sm:p-6">
            <Label htmlFor={`obs-${fatura.id}`} className={ROTULO}>
              Observações da auditoria
            </Label>
            <Textarea
              id={`obs-${fatura.id}`}
              value={estado.observacoes}
              onChange={(e) => alterarObservacoes(fatura.id, e.target.value)}
              readOnly={leitura}
              aria-readonly={leitura || undefined}
              placeholder={leitura ? "Sem observações registradas." : "Registre achados, divergências do XML e orientações ao credenciado…"}
              className={cn(CAMPO_LONGO, leitura && "bg-white/60 text-slate-700")}
            />
          </div>
        </GlassCard>

        {/* Barra de decisão */}
        <div
          role="region"
          aria-label="Decisão da auditoria"
          className={cn("tre-glass-navy sticky bottom-4 z-30 rounded-2xl px-4 py-3 sm:px-5 print:hidden", ENTRADA, atraso(2))}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <dl className="flex flex-wrap gap-x-5 gap-y-1">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Apresentado</dt>
                <dd className="font-semibold tabular-nums text-white">{formatBRL(resumo.valorApresentado)}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Glosado</dt>
                <dd className="font-semibold tabular-nums text-white">
                  {resumo.valorGlosado > 0 ? `−${formatBRL(resumo.valorGlosado)}` : formatBRL(0)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Líquido</dt>
                <dd className="font-bold tabular-nums text-tre-gold-soft">
                  {formatBRL(leitura ? fatura.valor_liquido : resumo.valorApresentado - resumo.valorGlosado)}
                </dd>
              </div>
            </dl>

            {leitura ? (
              <p className="flex items-center gap-1.5 text-xs text-white/80">
                <Lock className="size-3.5 text-tre-gold-soft" aria-hidden />
                {fatura.status === "Paga" ? "Fatura paga: não pode ser reaberta." : `Concluída${fatura.auditor_id ? ` por ${fatura.auditor_id}` : ""}.`}
              </p>
            ) : (
              bloqueios.length > 0 && (
                <p id="bloqueio-conclusao" className="flex items-start gap-1.5 text-xs text-tre-gold-soft">
                  <Lock className="mt-px size-3.5 shrink-0" aria-hidden />
                  Para concluir, falta resolver {bloqueios.join(" e ")}.
                </p>
              )
            )}

            <div className="ml-auto flex flex-wrap gap-2">
              <Button variant="ghost" onClick={fecharVistoria} className={cn(treBotao({ tom: "cabecalho" }), "tre-ring h-11 rounded-xl")}>
                Fechar
              </Button>
              {leitura ? (
                fatura.status !== "Paga" && (
                  <GlassDialog
                    open={reabrirAberto}
                    onOpenChange={(aberto) => {
                      setReabrirAberto(aberto);
                      if (!aberto) setErroJustificativa(null);
                    }}
                  >
                    <GlassDialogTrigger asChild>
                      <Button className={cn(treBotao({ tom: "ouro" }), "tre-ring h-11 rounded-xl px-5")}>
                        <RotateCcw aria-hidden />
                        Reabrir auditoria
                      </Button>
                    </GlassDialogTrigger>
                    <GlassPainel
                      icone={RotateCcw}
                      titulo={`Reabrir ${fatura.numero_fatura}`}
                      descricao="A fatura volta para a fila em análise. A justificativa fica registrada na vistoria."
                      largura="md"
                      rodape={
                        <>
                          <GlassDialogClose asChild>
                            <Button variant="ghost" className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}>
                              Cancelar
                            </Button>
                          </GlassDialogClose>
                          <Button onClick={reabrirAuditoria} className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}>
                            <RotateCcw aria-hidden />
                            Reabrir auditoria
                          </Button>
                        </>
                      }
                    >
                      <Label htmlFor="justificativa-reabertura" className={ROTULO}>
                        Justificativa
                      </Label>
                      <Textarea
                        id="justificativa-reabertura"
                        value={justificativa}
                        onChange={(e) => {
                          setJustificativa(e.target.value);
                          if (erroJustificativa) setErroJustificativa(null);
                        }}
                        aria-invalid={erroJustificativa ? true : undefined}
                        aria-describedby={erroJustificativa ? "erro-justificativa" : undefined}
                        placeholder="Ex.: recurso de glosa do credenciado com nova prescrição anexada."
                        className={CAMPO_LONGO}
                      />
                      {erroJustificativa && (
                        <p id="erro-justificativa" className="mt-1.5 text-xs font-medium text-tre-danger-ink">
                          {erroJustificativa}
                        </p>
                      )}
                    </GlassPainel>
                  </GlassDialog>
                )
              ) : (
                <Button
                  onClick={() => concluirAuditoria(fatura.id, temGlosa ? "com_glosa" : "integral")}
                  disabled={bloqueios.length > 0}
                  aria-describedby={bloqueios.length > 0 ? "bloqueio-conclusao" : undefined}
                  className={cn(treBotao({ tom: "ouro" }), "tre-ring h-11 rounded-xl px-5 disabled:opacity-60")}
                >
                  {temGlosa ? <Scale aria-hidden /> : <CheckCircle2 aria-hidden />}
                  {temGlosa
                    ? `Concluir com glosa (−${formatBRL(resumo.valorGlosado)})`
                    : `Aprovar integral (${formatBRL(resumo.valorAprovado)})`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ---------- Render ---------- */
  return (
    <TreShell
      perfil="auditor"
      titulo="Auditoria de Contas"
      subtitulo="Faturas, reciprocidade e pareceres OPME · padrão TISS"
      acoes={acoes}
      contexto={
        <ToneBadge tom="gold">
          <Lock className="size-3" aria-hidden />
          Acesso restrito a auditores autorizados
        </ToneBadge>
      }
    >
      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 print:hidden">
        <KpiCard
          rotulo="A auditar"
          valor={formatNumero(faturasAAuditar.length)}
          icone={Hourglass}
          tom="gold"
          detalhe={faturasAAuditar.length > 0 ? `${formatBRL(valorEmAuditoria)} em análise` : "Fila zerada"}
          onClick={() => alternarFiltroFila("a_auditar")}
          ativo={aba === "faturas" && filtroFila === "a_auditar"}
          className={cn(ENTRADA, atraso(0))}
        />
        <KpiCard
          rotulo="Glosadas"
          valor={formatNumero(faturasGlosadas.length)}
          icone={TriangleAlert}
          tom="danger"
          detalhe={`${formatBRL(valorGlosadoTotal)} glosados`}
          onClick={() => alternarFiltroFila("glosadas")}
          ativo={aba === "faturas" && filtroFila === "glosadas"}
          className={cn(ENTRADA, atraso(1))}
        />
        <KpiCard
          rotulo="Concluídas"
          valor={formatNumero(faturasConcluidas.length)}
          icone={ClipboardCheck}
          tom="green"
          detalhe={`${plural(faturas.filter((f) => f.status === "Paga").length, "paga", "pagas")} · de ${formatNumero(faturas.length)} faturas`}
          onClick={() => alternarFiltroFila("concluidas")}
          ativo={aba === "faturas" && filtroFila === "concluidas"}
          className={cn(ENTRADA, atraso(2))}
        />
        <KpiCard
          rotulo="Lotes pendentes"
          valor={formatNumero(lotesEmAberto.length)}
          icone={FileSpreadsheet}
          tom="navy"
          detalhe={`de ${plural(LOTES_RECIPROCIDADE.length, "lote recebido", "lotes recebidos")}`}
          onClick={alternarLotesEmAberto}
          ativo={aba === "lotes" && filtrosLotes.status === "abertos"}
          className={cn(ENTRADA, atraso(3))}
        />
      </div>

      <Tabs value={aba} onValueChange={trocarAba} className={cn("mt-8", ENTRADA, atraso(4))}>
        <GlassTabsList aria-label="Áreas da auditoria" className="print:hidden">
          <GlassTabsTrigger value="faturas" contador={faturasAAuditar.length} className="min-h-10">
            <ClipboardCheck className="size-4" aria-hidden />
            Faturas
          </GlassTabsTrigger>
          <GlassTabsTrigger value="lotes" contador={lotesEmAberto.length} className="min-h-10">
            <FileSpreadsheet className="size-4" aria-hidden />
            Lotes XML
          </GlassTabsTrigger>
          <GlassTabsTrigger value="reciprocidade" className="min-h-10">
            <Shield className="size-4" aria-hidden />
            Reciprocidade
          </GlassTabsTrigger>
          <GlassTabsTrigger value="opme" className="min-h-10">
            <Syringe className="size-4" aria-hidden />
            OPME e pareceres
          </GlassTabsTrigger>
        </GlassTabsList>

        {/* ABA FATURAS */}
        <TabsContent value="faturas" className="mt-6 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
          <div className="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
            {/* Fila */}
            <GlassCard
              as="section"
              aria-labelledby="fila-titulo"
              className="flex flex-col overflow-hidden lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:self-start"
            >
              <div className="space-y-3 border-b border-white/60 p-4">
                <SectionHeader id="fila-titulo" titulo="Fila de faturas" contador={fila.length} icone={Inbox} />
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-600" aria-hidden />
                  <Input
                    type="search"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    aria-label="Buscar por número da fatura ou credenciado"
                    placeholder="Número ou credenciado"
                    className={cn(TRE_CAMPO, "pl-9")}
                  />
                </div>
                <div role="group" aria-label="Filtrar a fila" className="tre-scroll-x -mx-1 flex gap-1.5 px-1 pb-0.5">
                  {FILTROS_FILA.map((f) => {
                    const ativo = filtroFila === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFiltroFila(f.id)}
                        aria-pressed={ativo}
                        className={cn(
                          "tre-ring inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-colors",
                          ativo ? "bg-tre-navy text-white shadow-sm" : "bg-white/60 text-slate-700 ring-1 ring-tre-navy/10 hover:bg-white/90",
                        )}
                      >
                        {f.rotulo}
                        <span className={cn("tabular-nums", ativo ? "text-tre-gold-soft" : "text-slate-600")}>{contagemFila[f.id]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {fila.length === 0 ? (
                <div className="p-3">
                  <EmptyState
                    compacto
                    icone={SearchX}
                    titulo={filtroFila === "a_auditar" && !termoBusca ? "Nenhuma fatura a auditar" : "Nada encontrado"}
                    descricao={
                      filtroFila === "a_auditar" && !termoBusca
                        ? "A fila está zerada. Reabra uma fatura concluída para revisá-la."
                        : "Ajuste a busca ou o filtro da fila."
                    }
                    acao={
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setFiltroFila("todas");
                          setBusca("");
                        }}
                        className={cn(BOTAO_VIDRO, BOTAO_BASE)}
                      >
                        Ver todas as faturas
                      </Button>
                    }
                  />
                </div>
              ) : (
                <ul className="min-h-0 flex-1 space-y-1.5 overflow-y-auto p-2">
                  {fila.map((f) => {
                    const r = resumoDe(f.id);
                    const selecionada = faturaSelecionada?.id === f.id;
                    return (
                      <li key={f.id}>
                        <button
                          type="button"
                          onClick={() => selecionarFatura(f.id)}
                          aria-current={selecionada ? "true" : undefined}
                          className={cn(
                            "tre-ring w-full rounded-2xl p-3.5 text-left transition-colors",
                            selecionada ? "bg-white/85 shadow-sm ring-2 ring-tre-navy/30" : "hover:bg-white/70",
                          )}
                        >
                          <span className="flex items-start justify-between gap-2">
                            <span className="font-semibold text-tre-navy">{f.numero_fatura}</span>
                            <StatusBadge status={f.status} />
                          </span>
                          <span className="mt-0.5 block truncate text-sm text-slate-700">{f.nome_credenciado}</span>
                          <span className="mt-2 flex items-baseline justify-between gap-2">
                            <span className="text-xs text-slate-600">
                              {formatCompetencia(f.mes_referencia, f.ano_referencia)} · {f.pdf_categoria}
                            </span>
                            <span className="text-sm font-semibold tabular-nums text-tre-navy">{formatBRL(r.valorApresentado)}</span>
                          </span>
                          <BarraSegmentada
                            className="mt-2"
                            segmentos={[
                              { valor: r.valorAprovado, classe: "fill-tre-success" },
                              { valor: r.valorGlosado, classe: "fill-tre-danger" },
                              { valor: r.valorApresentado - r.valorAprovado - r.valorGlosado, classe: "fill-tre-warn" },
                            ]}
                          />
                          <span className="mt-1.5 flex flex-wrap gap-x-3 text-[11px] font-medium tabular-nums text-slate-600">
                            <span>{r.aprovados} ok</span>
                            {r.glosados > 0 && <span className="text-tre-danger-ink">{r.glosados} glosa · {formatBRL(r.valorGlosado)}</span>}
                            {r.pendentes > 0 && <span className="text-tre-warn-ink">{r.pendentes} pendentes</span>}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </GlassCard>

            {/* Vistoria */}
            <div ref={vistoriaRef} className="min-w-0 scroll-mt-32">
              {faturaSelecionada ? (
                <div key={faturaSelecionada.id}>{renderVistoria(faturaSelecionada)}</div>
              ) : (
                <GlassCard className={cn("flex min-h-[26rem] items-center justify-center p-4 sm:p-6", ENTRADA, atraso(1))}>
                  {faturaParam ? (
                    <EmptyState
                      icone={SearchX}
                      titulo={`Fatura ${faturaParam} não encontrada`}
                      descricao="O link pode estar desatualizado. Escolha uma fatura na fila."
                      acao={
                        <Button variant="ghost" onClick={fecharVistoria} className={cn(BOTAO_VIDRO, BOTAO_BASE)}>
                          Limpar seleção
                        </Button>
                      }
                      className="w-full max-w-md"
                    />
                  ) : (
                    <EmptyState
                      icone={ClipboardCheck}
                      titulo="Selecione uma fatura"
                      descricao="Escolha uma fatura na fila para conferir o checklist, analisar item a item e registrar a decisão."
                      acao={
                        proximaAAuditar ? (
                          <Button onClick={() => selecionarFatura(proximaAAuditar.id)} className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}>
                            Abrir {proximaAAuditar.numero_fatura}
                            <ArrowRight aria-hidden />
                          </Button>
                        ) : undefined
                      }
                      className="w-full max-w-md"
                    />
                  )}
                </GlassCard>
              )}
            </div>
          </div>
        </TabsContent>

        {/* ABA LOTES (XML) */}
        <TabsContent value="lotes" className="mt-6 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
          <AbaLotes filtros={filtrosLotes} onFiltros={setFiltrosLotes} filtrosGuias={filtrosGuias} onFiltrosGuias={setFiltrosGuias} />
        </TabsContent>

        {/* ABA RECIPROCIDADE */}
        <TabsContent value="reciprocidade" className="mt-6 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
          <AbaReciprocidade onVerAcimaDaMargem={verGuiasAcimaDaMargem} />
        </TabsContent>

        {/* ABA OPME */}
        <TabsContent value="opme" className="mt-6 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
          <AbaOpme opme={opme} />
        </TabsContent>
      </Tabs>
    </TreShell>
  );
}

/* ============================================================
   Aba Lotes (XML)
   ============================================================ */

function AbaLotes({
  filtros,
  onFiltros,
  filtrosGuias,
  onFiltrosGuias,
}: {
  filtros: FiltrosLotes;
  onFiltros: (f: FiltrosLotes) => void;
  filtrosGuias: FiltrosGuias;
  onFiltrosGuias: React.Dispatch<React.SetStateAction<FiltrosGuias>>;
}) {
  const [loteId, setLoteId] = useState<string | null>(null);
  const [painelAberto, setPainelAberto] = useState(false);

  const lotes = buscarLotes({ ...filtros, status: filtros.status === "abertos" ? "todos" : filtros.status })
    .filter((l) => filtros.status !== "abertos" || LOTE_EM_ABERTO.has(l.status))
    .filter((l) => !filtrosGuias.acimaMargem || (ACIMA_POR_LOTE.get(l.id) ?? 0) > 0);

  const filtrosLotesAtivos =
    filtros.convenio !== "todos" || filtros.status !== "todos" || Boolean(filtros.dataInicio || filtros.dataFim || filtros.numeroLote) || filtrosGuias.acimaMargem;

  const lote = LOTES_RECIPROCIDADE.find((l) => l.id === loteId) ?? null;
  const guiasDoLote = lote ? GUIAS_RECIPROCIDADE.filter((g) => g.loteId === lote.id) : [];
  const guias = lote
    ? buscarGuias({
        loteId: lote.id,
        matricula: filtrosGuias.matricula,
        cpf: filtrosGuias.cpf,
        nome: filtrosGuias.nome,
        dataExecucao: filtrosGuias.dataExecucao,
        status: filtrosGuias.status,
      }).filter((g) => !filtrosGuias.acimaMargem || g.diferencaPercentual > MARGEM_BRASINDICE)
    : [];
  const filtrosGuiasAtivos =
    Boolean(filtrosGuias.matricula || filtrosGuias.cpf || filtrosGuias.nome || filtrosGuias.dataExecucao) ||
    filtrosGuias.status !== "todos" ||
    filtrosGuias.acimaMargem;

  const alterar = (patch: Partial<FiltrosLotes>) => onFiltros({ ...filtros, ...patch });
  const alterarGuias = (patch: Partial<FiltrosGuias>) => onFiltrosGuias((f) => ({ ...f, ...patch }));

  const limparFiltrosLotes = () => {
    onFiltros(FILTROS_LOTES_VAZIOS);
    onFiltrosGuias((f) => ({ ...f, acimaMargem: false }));
  };

  /** Ao trocar de lote, os filtros de guia voltam ao padrão (o recorte "acima da margem" é da aba e permanece). */
  const abrirLote = (id: string) => {
    onFiltrosGuias((f) => ({ ...FILTROS_GUIAS_VAZIOS, acimaMargem: f.acimaMargem }));
    setLoteId(id);
    setPainelAberto(true);
  };

  const exportarGuias = () => {
    if (!lote || guias.length === 0) return;
    baixarCSV(`guias-${lote.numeroLote}.csv`, [
      ["Guia", "Beneficiário", "Matrícula", "Execução", "Código", "Procedimento", "Credenciado", "Apresentado (R$)", "Brasíndice (R$)", "Diferença (%)", "Status", "Motivo da glosa"],
      ...guias.map((g) => [
        g.numeroGuia,
        g.nomeBeneficiario,
        g.matricula,
        formatData(g.dataExecucao),
        g.procedimentoCodigo,
        g.procedimentoDescricao,
        g.credenciado_nome,
        DECIMAL_2.format(g.valorApresentado),
        DECIMAL_2.format(g.valorBrasindice),
        DECIMAL_2.format(calcularDiferencaBrasindice(g.valorApresentado, g.valorBrasindice).diferencaPercentual),
        g.status,
        g.motivoGlosa ?? "",
      ]),
    ]);
    toast({ variant: "success", title: "CSV gerado", description: `${plural(guias.length, "guia exportada", "guias exportadas")} do lote ${lote.numeroLote}.` });
  };

  return (
    <div className="space-y-5">
      <SectionHeader
        titulo="Auditoria por lotes XML"
        descricao="Lotes de reciprocidade recebidos dos convênios, com guias conferidas contra o Brasíndice."
        icone={FileSpreadsheet}
        contador={lotes.length}
      />

      {/* Filtros */}
      <GlassCard variante="suave" as="section" aria-label="Filtros de lotes" className={cn("p-4 sm:p-5", ENTRADA, atraso(0))}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Label htmlFor="lote-convenio" className={ROTULO}>
              Convênio
            </Label>
            <Select value={filtros.convenio} onValueChange={(v) => alterar({ convenio: v })}>
              <SelectTrigger id="lote-convenio" className={CAMPO_SELECT}>
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent className={MENU_SELECT}>
                <SelectItem value="todos" className="min-h-10 rounded-lg">Todos</SelectItem>
                {CONVENIOS_RECIPROCIDADE.filter((c) => c.ativo).map((c) => (
                  <SelectItem key={c.id} value={c.id} className="min-h-10 rounded-lg">
                    {c.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="lote-status" className={ROTULO}>
              Status
            </Label>
            <Select value={filtros.status} onValueChange={(v) => alterar({ status: v as FiltroStatusLote })}>
              <SelectTrigger id="lote-status" className={CAMPO_SELECT}>
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent className={MENU_SELECT}>
                {STATUS_LOTE_OPCOES.map((s) => (
                  <SelectItem key={s.valor} value={s.valor} className="min-h-10 rounded-lg">
                    {s.rotulo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="lote-inicio" className={ROTULO}>
              Recebido a partir de
            </Label>
            <Input id="lote-inicio" type="date" value={filtros.dataInicio} onChange={(e) => alterar({ dataInicio: e.target.value })} className={TRE_CAMPO} />
          </div>
          <div>
            <Label htmlFor="lote-fim" className={ROTULO}>
              Recebido até
            </Label>
            <Input id="lote-fim" type="date" value={filtros.dataFim} onChange={(e) => alterar({ dataFim: e.target.value })} className={TRE_CAMPO} />
          </div>
          <div>
            <Label htmlFor="lote-numero" className={ROTULO}>
              Nº do lote
            </Label>
            <Input
              id="lote-numero"
              type="search"
              placeholder="Ex.: AUMED-001"
              value={filtros.numeroLote}
              onChange={(e) => alterar({ numeroLote: e.target.value })}
              className={TRE_CAMPO}
            />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="lote-acima-margem" className="flex min-h-10 cursor-pointer items-center gap-2.5 rounded-xl pr-2 text-sm text-slate-800">
            <Checkbox
              id="lote-acima-margem"
              checked={filtrosGuias.acimaMargem}
              onCheckedChange={(v) => alterarGuias({ acimaMargem: v === true })}
              className={CHECKBOX}
            />
            Só lotes com guias acima da margem do Brasíndice (&gt; {MARGEM_BRASINDICE}%)
          </label>
          {filtrosLotesAtivos && (
            <Button variant="ghost" onClick={limparFiltrosLotes} className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}>
              <FilterX aria-hidden />
              Limpar filtros
            </Button>
          )}
        </div>
      </GlassCard>

      {/* Tabela de lotes */}
      <GlassCard variante="forte" as="section" aria-label="Lotes recebidos" className={cn("overflow-hidden", ENTRADA, atraso(1))}>
        {lotes.length === 0 ? (
          <div className="p-5 sm:p-6">
            <EmptyState
              icone={SearchX}
              titulo="Nenhum lote com esses filtros"
              descricao="Ajuste o convênio, o período ou o status."
              acao={
                <Button variant="ghost" onClick={limparFiltrosLotes} className={cn(BOTAO_VIDRO, BOTAO_BASE)}>
                  <FilterX aria-hidden />
                  Limpar filtros
                </Button>
              }
            />
          </div>
        ) : (
          <Table className="min-w-[860px]">
            <TableHeader>
              <TableRow className="border-tre-navy/10 hover:bg-transparent">
                <TableHead className={cn(TH, "pl-5 sm:pl-6")}>Nº do lote</TableHead>
                <TableHead className={TH}>Convênio</TableHead>
                <TableHead className={TH}>Recebido</TableHead>
                <TableHead className={cn(TH, "text-right")}>Guias</TableHead>
                <TableHead className={cn(TH, "text-right")}>Valor total</TableHead>
                <TableHead className={TH}>Status</TableHead>
                <TableHead className={TH}>Auditor</TableHead>
                <TableHead className={cn(TH, "pr-5 text-right sm:pr-6")}>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lotes.map((l) => {
                const acima = ACIMA_POR_LOTE.get(l.id) ?? 0;
                return (
                  <TableRow key={l.id} className={TR}>
                    <TableCell className={cn(TD, "pl-5 sm:pl-6")}>
                      <p className="font-mono text-sm font-semibold text-tre-navy">{l.numeroLote}</p>
                      <p className="text-xs text-slate-600">{l.arquivoXml}</p>
                    </TableCell>
                    <TableCell className={cn(TD, "text-slate-800")}>{l.convenioNome}</TableCell>
                    <TableCell className={cn(TD, "tabular-nums text-slate-800")}>
                      {formatData(l.dataRecebimento)}
                      <span className="block text-xs text-slate-600">proc. {formatData(l.dataProcessamento)}</span>
                    </TableCell>
                    <TableCell className={cn(TD, "text-right tabular-nums")}>
                      <span className="font-semibold text-slate-900">{formatNumero(l.quantidadeGuias)}</span>
                      {acima > 0 && (
                        <span className="mt-1 flex justify-end">
                          <ToneBadge tom="warning">{plural(acima, "acima da margem", "acima da margem")}</ToneBadge>
                        </span>
                      )}
                    </TableCell>
                    <TableCell className={cn(TD, "text-right font-semibold tabular-nums text-tre-navy")}>{formatBRL(l.valorTotal)}</TableCell>
                    <TableCell className={TD}>
                      <StatusBadge status={l.status} />
                    </TableCell>
                    <TableCell className={cn(TD, "text-slate-800")}>{l.auditorResponsavel ?? <span className="text-slate-600">Não atribuído</span>}</TableCell>
                    <TableCell className={cn(TD, "pr-5 text-right sm:pr-6")}>
                      <Button
                        onClick={() => abrirLote(l.id)}
                        aria-label={`Ver guias do lote ${l.numeroLote}`}
                        className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}
                      >
                        <Eye aria-hidden />
                        Ver guias
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </GlassCard>

      {/* Painel de guias do lote */}
      <GlassDialog open={painelAberto} onOpenChange={setPainelAberto}>
        {lote && (
          <GlassPainel
            lado="direita"
            largura="xl"
            icone={FileSpreadsheet}
            titulo={`Guias do lote ${lote.numeroLote}`}
            descricao={`${lote.convenioNome} · recebido em ${formatData(lote.dataRecebimento)} · ${lote.arquivoXml}`}
            rodape={
              <>
                <Button variant="ghost" onClick={exportarGuias} disabled={guias.length === 0} className={cn(BOTAO_VIDRO, BOTAO_BASE, "mr-auto")}>
                  <Download aria-hidden />
                  Baixar CSV ({guias.length})
                </Button>
                <GlassDialogClose asChild>
                  <Button className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}>Fechar</Button>
                </GlassDialogClose>
              </>
            }
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <TileMetrica rotulo="Guias no XML" valor={formatNumero(lote.quantidadeGuias)} icone={FileCode2} />
                <TileMetrica rotulo="Importadas" valor={formatNumero(AMOSTRA_POR_LOTE.get(lote.id) ?? 0)} detalhe="amostra para auditoria" icone={Inbox} />
                <TileMetrica
                  rotulo="Acima da margem"
                  valor={formatNumero(ACIMA_POR_LOTE.get(lote.id) ?? 0)}
                  detalhe={`> ${MARGEM_BRASINDICE}% do Brasíndice`}
                  icone={TriangleAlert}
                  tom={(ACIMA_POR_LOTE.get(lote.id) ?? 0) > 0 ? "danger" : "navy"}
                />
                <TileMetrica rotulo="Valor do lote" valor={formatBRLCompacto(lote.valorTotal)} detalhe={formatBRL(lote.valorTotal)} icone={Wallet} />
              </div>

              {guiasDoLote.length === 0 ? (
                <EmptyState
                  icone={Inbox}
                  titulo="Nenhuma guia importada para este lote"
                  descricao={`O XML ${lote.arquivoXml} ainda não teve guias importadas para auditoria.`}
                />
              ) : (
                <>
                  <section aria-label="Filtros de guias" className="tre-inset rounded-2xl p-4">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <Label htmlFor="guia-matricula" className={ROTULO}>Matrícula</Label>
                        <Input id="guia-matricula" value={filtrosGuias.matricula} onChange={(e) => alterarGuias({ matricula: e.target.value })} placeholder="Ex.: AUMED001" className={TRE_CAMPO} />
                      </div>
                      <div>
                        <Label htmlFor="guia-cpf" className={ROTULO}>CPF</Label>
                        <Input id="guia-cpf" inputMode="numeric" value={filtrosGuias.cpf} onChange={(e) => alterarGuias({ cpf: e.target.value })} placeholder="000.000.000-00" className={TRE_CAMPO} />
                      </div>
                      <div>
                        <Label htmlFor="guia-nome" className={ROTULO}>Beneficiário</Label>
                        <Input id="guia-nome" value={filtrosGuias.nome} onChange={(e) => alterarGuias({ nome: e.target.value })} placeholder="Nome" className={TRE_CAMPO} />
                      </div>
                      <div>
                        <Label htmlFor="guia-data" className={ROTULO}>Data de execução</Label>
                        <Input id="guia-data" type="date" value={filtrosGuias.dataExecucao} onChange={(e) => alterarGuias({ dataExecucao: e.target.value })} className={TRE_CAMPO} />
                      </div>
                      <div>
                        <Label htmlFor="guia-status" className={ROTULO}>Status</Label>
                        <Select value={filtrosGuias.status} onValueChange={(v) => alterarGuias({ status: v })}>
                          <SelectTrigger id="guia-status" className={CAMPO_SELECT}>
                            <SelectValue placeholder="Todos" />
                          </SelectTrigger>
                          <SelectContent className={MENU_SELECT}>
                            {STATUS_GUIA_OPCOES.map((s) => (
                              <SelectItem key={s.valor} value={s.valor} className="min-h-10 rounded-lg">
                                {s.rotulo}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <label htmlFor="guia-acima-margem" className="flex min-h-11 w-full cursor-pointer items-center gap-2.5 rounded-xl text-sm text-slate-800">
                          <Checkbox
                            id="guia-acima-margem"
                            checked={filtrosGuias.acimaMargem}
                            onCheckedChange={(v) => alterarGuias({ acimaMargem: v === true })}
                            className={CHECKBOX}
                          />
                          Acima da margem (&gt; {MARGEM_BRASINDICE}%)
                        </label>
                      </div>
                    </div>
                  </section>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm text-slate-700" aria-live="polite">
                      {plural(guias.length, "guia", "guias")} de {formatNumero(guiasDoLote.length)} importadas
                    </p>
                    {filtrosGuiasAtivos && (
                      <Button
                        variant="ghost"
                        onClick={() => onFiltrosGuias(FILTROS_GUIAS_VAZIOS)}
                        className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}
                      >
                        <FilterX aria-hidden />
                        Limpar filtros de guia
                      </Button>
                    )}
                  </div>

                  {guias.length === 0 ? (
                    <EmptyState compacto icone={SearchX} titulo="Nenhuma guia com esses filtros" descricao="Revise matrícula, CPF, nome, data ou status." />
                  ) : (
                    <ul className="space-y-2.5">
                      {guias.map((g) => {
                        const dif = calcularDiferencaBrasindice(g.valorApresentado, g.valorBrasindice);
                        const tomDif: TomTRE = dif.status === "Acima" ? "danger" : dif.status === "Abaixo" ? "info" : "success";
                        return (
                          <li key={g.id} className="tre-inset rounded-2xl p-4 transition-colors hover:bg-white/75">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="font-semibold text-tre-navy">{g.nomeBeneficiario}</p>
                                  <ToneBadge tom="neutral">{g.matricula}</ToneBadge>
                                  <StatusBadge status={g.status} />
                                </div>
                                <p className="mt-1 text-sm text-slate-800">
                                  {g.procedimentoDescricao} <span className="font-mono text-xs text-slate-600">· {g.procedimentoCodigo}</span>
                                </p>
                                <p className="mt-0.5 text-xs text-slate-600">
                                  {g.credenciado_nome} · {g.prestador} · {g.cidade} · {formatData(g.dataExecucao)} · guia {g.numeroGuia}
                                </p>
                                {g.motivoGlosa && (
                                  <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-tre-danger-ink">
                                    <TriangleAlert className="mt-px size-3.5 shrink-0" aria-hidden />
                                    <span>
                                      <span className="sr-only">Motivo da glosa: </span>
                                      {g.motivoGlosa}
                                    </span>
                                  </p>
                                )}
                              </div>
                              <div className="text-right">
                                <p className="text-base font-bold tabular-nums text-tre-navy">{formatBRL(g.valorApresentado)}</p>
                                <p className="text-xs tabular-nums text-slate-600">Brasíndice {formatBRL(g.valorBrasindice)}</p>
                                <ToneBadge tom={tomDif} className="mt-1.5 tabular-nums">
                                  {dif.diferencaPercentual > 0 ? "+" : ""}
                                  {formatPct(dif.diferencaPercentual)} vs referência
                                </ToneBadge>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              )}
            </div>
          </GlassPainel>
        )}
      </GlassDialog>
    </div>
  );
}

/* ============================================================
   Aba Reciprocidade
   ============================================================ */

function AbaReciprocidade({ onVerAcimaDaMargem }: { onVerAcimaDaMargem: (convenioId: string) => void }) {
  return (
    <div className="space-y-10">
      {INDICADORES_RECIPROCIDADE.map((ind, idx) => {
        const nomeCompleto = CONVENIOS_RECIPROCIDADE.find((c) => c.id === ind.convenioId)?.nome ?? ind.convenioNome;
        const maiorProcedimento = Math.max(...ind.procedimentosMaisUtilizados.map((p) => p.valor), 1);
        const maiorMes = Math.max(...ind.evolucaoMensal.map((m) => m.valor), 1);
        const tituloId = `convenio-${ind.convenioId}`;
        return (
          <section key={ind.convenioId} aria-labelledby={tituloId} className="space-y-4">
            <SectionHeader
              id={tituloId}
              titulo={ind.convenioNome}
              descricao={`${nomeCompleto} · ${plural(ind.totalLotes, "lote", "lotes")} · ${plural(ind.totalGuias, "guia", "guias")}`}
              icone={Shield}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <KpiCard
                rotulo="Guias processadas"
                valor={formatNumero(ind.totalGuias)}
                icone={FileText}
                tom="navy"
                detalhe={plural(ind.totalLotes, "lote", "lotes")}
                className={cn(ENTRADA, atraso(idx * 3))}
              />
              <KpiCard
                rotulo="Valor apresentado"
                valor={formatBRLCompacto(ind.valorTotal)}
                icone={Wallet}
                tom="green"
                detalhe={`${formatBRL(ind.valorAprovado)} aprovados`}
                className={cn(ENTRADA, atraso(idx * 3 + 1))}
              />
              <KpiCard
                rotulo="Taxa de glosa"
                valor={formatPct(ind.percentualGlosa)}
                icone={Scale}
                tom="danger"
                detalhe={`${formatBRL(ind.valorGlosado)} glosados`}
                className={cn(ENTRADA, atraso(idx * 3 + 2))}
              />
            </div>

            <GlassCard className={cn("space-y-6 p-5 sm:p-6", ENTRADA, atraso(idx * 3 + 2))}>
              {ind.guiasAcimaBrasindice > 0 && (
                <button
                  type="button"
                  onClick={() => onVerAcimaDaMargem(ind.convenioId)}
                  className="tre-tone-warning tre-ring group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  <TriangleAlert className="size-5 shrink-0" aria-hidden />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">
                      {plural(ind.guiasAcimaBrasindice, "guia com valor acima do Brasíndice", "guias com valores acima do Brasíndice")}
                    </span>
                    <span className="block text-xs">Margem aceita de ±{MARGEM_BRASINDICE}%. Ver os lotes com guias fora da margem.</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden />
                </button>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-tre-navy">Procedimentos mais utilizados</h3>
                  <ul className="mt-3 space-y-3">
                    {ind.procedimentosMaisUtilizados.slice(0, 3).map((proc) => (
                      <li key={proc.nome}>
                        <div className="flex items-baseline justify-between gap-3 text-sm">
                          <span className="truncate text-slate-800">{proc.nome}</span>
                          <span className="shrink-0 tabular-nums text-slate-600">
                            {plural(proc.quantidade, "guia", "guias")} · <span className="font-semibold text-tre-navy">{formatBRLCompacto(proc.valor)}</span>
                          </span>
                        </div>
                        <BarraSegmentada
                          className="mt-1.5"
                          rotulo={`${proc.nome}: ${formatBRL(proc.valor)}`}
                          segmentos={[
                            { valor: proc.valor, classe: "fill-tre-navy" },
                            { valor: maiorProcedimento - proc.valor, classe: "fill-transparent" },
                          ]}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-tre-navy">Evolução mensal</h3>
                  <ul className="mt-3 space-y-3">
                    {ind.evolucaoMensal.map((mes) => (
                      <li key={mes.mes}>
                        <div className="flex items-baseline justify-between gap-3 text-sm">
                          <span className="text-slate-800">{mes.mes}</span>
                          <span className="tabular-nums text-slate-600">
                            <span className="font-semibold text-tre-navy">{formatBRLCompacto(mes.valor)}</span> · glosa{" "}
                            <span className="font-semibold text-tre-danger-ink">{formatBRLCompacto(mes.glosas)}</span>
                          </span>
                        </div>
                        <BarraSegmentada
                          className="mt-1.5 h-2"
                          rotulo={`${mes.mes}: ${formatBRL(mes.valor)}, dos quais ${formatBRL(mes.glosas)} glosados`}
                          segmentos={[
                            { valor: mes.valor - mes.glosas, classe: "fill-tre-green" },
                            { valor: mes.glosas, classe: "fill-tre-danger" },
                            { valor: maiorMes - mes.valor, classe: "fill-transparent" },
                          ]}
                        />
                      </li>
                    ))}
                  </ul>
                  <p aria-hidden className="mt-3 flex gap-4 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-tre-green" />Aprovado</span>
                    <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-tre-danger" />Glosado</span>
                  </p>
                </div>
              </div>
            </GlassCard>
          </section>
        );
      })}

      {/* Tabela Brasíndice */}
      <section aria-labelledby="brasindice-titulo" className="space-y-4">
        <SectionHeader
          id="brasindice-titulo"
          titulo="Tabela de referência Brasíndice"
          descricao={`Valores aceitos dentro da margem de ±${MARGEM_BRASINDICE}% sobre a referência.`}
          icone={Receipt}
          contador={TABELA_BRASINDICE.length}
        />
        <GlassCard variante="forte" className="overflow-hidden">
          <Table className="min-w-[820px]">
            <TableHeader>
              <TableRow className="border-tre-navy/10 hover:bg-transparent">
                <TableHead className={cn(TH, "pl-5 sm:pl-6")}>Código</TableHead>
                <TableHead className={TH}>Procedimento</TableHead>
                <TableHead className={TH}>Tipo</TableHead>
                <TableHead className={cn(TH, "text-right")}>Mínimo</TableHead>
                <TableHead className={cn(TH, "text-right")}>Referência</TableHead>
                <TableHead className={cn(TH, "text-right")}>Máximo</TableHead>
                <TableHead className={cn(TH, "text-right")}>Margem</TableHead>
                <TableHead className={cn(TH, "pr-5 sm:pr-6")}>Atualização</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TABELA_BRASINDICE.map((item) => (
                <TableRow key={item.id} className={TR}>
                  <TableCell className={cn(TD, "pl-5 font-mono text-xs text-slate-700 sm:pl-6")}>{item.procedimentoCodigo}</TableCell>
                  <TableCell className={cn(TD, "font-medium text-slate-900")}>{item.procedimentoDescricao}</TableCell>
                  <TableCell className={TD}>
                    <ToneBadge tom="neutral">{item.tipo}</ToneBadge>
                  </TableCell>
                  <TableCell className={cn(TD, "text-right tabular-nums text-slate-700")}>{formatBRL(item.valorMinimo)}</TableCell>
                  <TableCell className={cn(TD, "text-right font-semibold tabular-nums text-tre-navy")}>{formatBRL(item.valorReferencia)}</TableCell>
                  <TableCell className={cn(TD, "text-right tabular-nums text-slate-700")}>{formatBRL(item.valorMaximo)}</TableCell>
                  <TableCell className={cn(TD, "text-right tabular-nums text-slate-700")}>±{formatPct(item.margemAceitacao)}</TableCell>
                  <TableCell className={cn(TD, "pr-5 tabular-nums text-slate-700 sm:pr-6")}>{formatData(item.dataAtualizacao)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassCard>
      </section>
    </div>
  );
}

/* ============================================================
   OPME: estado do parecer (vive na página para sobreviver à troca de aba)
   ============================================================ */

function useParecerOpme() {
  const [procedimentoId, setProcedimentoId] = useState("");
  const [dados, setDados] = useState<Record<string, string>>({});
  const [docsMarcados, setDocsMarcados] = useState<Set<string>>(() => new Set());
  const [parecer, setParecer] = useState<ParecerEmEdicao | null>(null);

  const procedimento = PROCEDIMENTOS_OPME.find((p) => p.id === procedimentoId) ?? null;
  const dut = buscarDUT(procedimento);
  const camposObrigatorios = dut ? dut.camposVariaveis.filter((c) => c.obrigatorio) : [];
  const camposFaltando = camposObrigatorios.filter((c) => !(dados[c.nome] ?? "").trim());
  const docsFaltando = procedimento ? procedimento.documentosNecessarios.filter((d) => !docsMarcados.has(d)) : [];
  const faltam = camposFaltando.length + docsFaltando.length;
  const totalExigido = camposObrigatorios.length + (procedimento?.documentosNecessarios.length ?? 0);
  const travado = parecer !== null && parecer.estado !== "rascunho";

  const dadosLimpos = () =>
    Object.fromEntries(
      Object.entries(dados)
        .map(([chave, valor]) => [chave, valor.trim()] as const)
        .filter(([, valor]) => valor),
    );

  const selecionarProcedimento = (id: string) => {
    setProcedimentoId(id);
    setDados({});
    setDocsMarcados(new Set());
    setParecer(null);
  };

  const alterarCampo = (nome: string, valor: string) => {
    if (travado) return;
    setDados((prev) => ({ ...prev, [nome]: valor }));
  };

  const alternarDocumento = (doc: string) => {
    if (travado) return;
    setDocsMarcados((prev) => {
      const novo = new Set(prev);
      if (novo.has(doc)) novo.delete(doc);
      else novo.add(doc);
      return novo;
    });
  };

  const gerarParecer = () => {
    if (!procedimento || faltam > 0 || travado) return false;
    const p = gerarParecerAutomatico(procedimento.id, dadosLimpos(), true);
    setParecer({ ...p, condicionantes: p.condicionantes ? [...p.condicionantes] : undefined, estado: "rascunho" });
    toast({ variant: "success", title: "Parecer gerado", description: `${p.tipo} · revise o texto antes de assinar.` });
    return true;
  };

  const emitirComPendencia = () => {
    if (!procedimento || travado) return false;
    const p = gerarParecerAutomatico(procedimento.id, dadosLimpos(), false);
    const campos = camposFaltando.map((c) => c.descricao.toLocaleLowerCase("pt-BR"));
    const partes = [
      docsFaltando.length ? `documentos: ${docsFaltando.join(", ")}` : null,
      campos.length ? `campos da DUT: ${campos.slice(0, 6).join(", ")}${campos.length > 6 ? ` e mais ${campos.length - 6}` : ""}` : null,
      dut ? null : "DUT não cadastrada para o procedimento",
    ].filter(Boolean);
    setParecer({
      ...p,
      observacoes: partes.length ? `Pendências para nova análise — ${partes.join("; ")}.` : p.observacoes,
      estado: "rascunho",
    });
    toast({ title: "Parecer com pendência gerado", description: "Revise as pendências listadas e assine para enviar." });
    return true;
  };

  const usarModelo = (modelo: ParecerOPME) => {
    if (travado) return false;
    const trocou = modelo.procedimentoId !== procedimentoId;
    if (trocou) selecionarProcedimento(modelo.procedimentoId);
    setParecer({ ...modelo, condicionantes: modelo.condicionantes ? [...modelo.condicionantes] : undefined, estado: "rascunho" });
    toast({
      title: "Modelo carregado",
      description: trocou ? `Procedimento ajustado para ${modelo.procedimentoDescricao}. Edite o texto antes de assinar.` : "Edite o texto antes de assinar.",
    });
    return true;
  };

  const editarParecer = (patch: Partial<ParecerOPME>) =>
    setParecer((prev) => (prev && prev.estado === "rascunho" ? { ...prev, ...patch } : prev));

  const motivoBloqueioAssinatura = !parecer
    ? null
    : !parecer.motivo.trim()
      ? "Preencha o motivo do parecer."
      : TIPOS_AUTORIZATIVOS.has(parecer.tipo) && faltam > 0
        ? `Para autorizar, ${faltam === 1 ? "falta 1 item" : `faltam ${faltam} itens`} (documentos e campos obrigatórios da DUT).`
        : null;

  const assinar = () => {
    if (!parecer || parecer.estado !== "rascunho" || motivoBloqueioAssinatura) return;
    const condicionantes = (parecer.condicionantes ?? []).map((c) => c.trim()).filter(Boolean);
    setParecer({
      ...parecer,
      motivo: parecer.motivo.trim(),
      observacoes: parecer.observacoes.trim(),
      condicionantes: condicionantes.length ? condicionantes : undefined,
      estado: "assinado",
      assinadoEm: carimboAgora(),
    });
    toast({ variant: "success", title: "Parecer assinado", description: "A edição foi bloqueada. Envie ao credenciado e ao servidor." });
  };

  const enviar = () => {
    if (!parecer || parecer.estado !== "assinado") return;
    setParecer({ ...parecer, estado: "enviado", enviadoEm: carimboAgora() });
    toast({ variant: "success", title: "Parecer enviado", description: `${parecer.procedimentoDescricao} · credenciado e servidor notificados.` });
  };

  return {
    procedimento,
    dut,
    dados,
    docsMarcados,
    parecer,
    camposObrigatorios,
    camposFaltando,
    docsFaltando,
    faltam,
    totalExigido,
    travado,
    motivoBloqueioAssinatura,
    dadosLimpos,
    selecionarProcedimento,
    alterarCampo,
    alternarDocumento,
    gerarParecer,
    emitirComPendencia,
    usarModelo,
    editarParecer,
    assinar,
    enviar,
    descartar: () => setParecer(null),
    novoParecer: () => selecionarProcedimento(""),
  };
}

/* ============================================================
   Aba OPME
   ============================================================ */

const CAMPO_DUT_LONGO = /justificativa|indicacao|avaliacao|resultado|descricao_lesao|caracteristicas|diagnostico$/;

function CampoDUT({
  campo,
  valor,
  desabilitado,
  onChange,
}: {
  campo: DUT["camposVariaveis"][number];
  valor: string;
  desabilitado: boolean;
  onChange: (valor: string) => void;
}) {
  const id = `dut-${campo.nome}`;
  const longo = CAMPO_DUT_LONGO.test(campo.nome);
  const data = campo.nome.startsWith("data_");
  const numerico = /^(idade|peso|fe|fc_|percentual|diametro|comprimento|volume|area)/.test(campo.nome);
  return (
    <div className={cn(longo && "sm:col-span-2")}>
      <Label htmlFor={id} className={ROTULO}>
        {primeiraMaiuscula(campo.descricao)}
        {campo.obrigatorio ? (
          <>
            <span aria-hidden className="ml-0.5 text-tre-danger-ink">*</span>
            <span className="sr-only"> (obrigatório)</span>
          </>
        ) : (
          <span className="ml-1 font-normal text-slate-600">(opcional)</span>
        )}
      </Label>
      {longo ? (
        <Textarea
          id={id}
          value={valor}
          disabled={desabilitado}
          required={campo.obrigatorio}
          onChange={(e) => onChange(e.target.value)}
          className={cn(CAMPO_LONGO, "min-h-[4.5rem]")}
        />
      ) : (
        <Input
          id={id}
          type={data ? "date" : "text"}
          inputMode={numerico ? "decimal" : undefined}
          value={valor}
          disabled={desabilitado}
          required={campo.obrigatorio}
          onChange={(e) => onChange(e.target.value)}
          className={TRE_CAMPO}
        />
      )}
    </div>
  );
}

function AbaOpme({ opme }: { opme: ReturnType<typeof useParecerOpme> }) {
  const parecerRef = useRef<HTMLDivElement>(null);
  const { procedimento, dut, parecer, travado } = opme;
  const grupos = useMemo(() => (dut ? agruparCamposDUT(dut) : []), [dut]);

  const rolarParaParecer = (sempre = false) => {
    if (!sempre && !window.matchMedia("(max-width: 1023px)").matches) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => parecerRef.current?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" }));
  };

  const textoDUT = dut
    ? preencherDUT(dut.id, opme.dadosLimpos()).replace(/\{\{\w+\}\}/g, "____________")
    : "";
  const feitos = opme.totalExigido - opme.faltam;
  const editavel = parecer?.estado === "rascunho";

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Gerador */}
        <GlassCard variante="forte" as="section" aria-labelledby="opme-gerador" className={cn("print:hidden", ENTRADA, atraso(0))}>
          <GlassCardHeader>
            <SectionHeader
              id="opme-gerador"
              titulo="Gerador de parecer OPME"
              descricao="Confira os documentos e preencha a DUT antes de emitir."
              icone={Syringe}
            />
          </GlassCardHeader>
          <GlassCardContent className="space-y-5">
            <div>
              <Label htmlFor="opme-procedimento" className={ROTULO}>
                Procedimento
              </Label>
              <Select value={procedimento?.id ?? ""} onValueChange={opme.selecionarProcedimento} disabled={travado}>
                <SelectTrigger id="opme-procedimento" className={CAMPO_SELECT}>
                  <SelectValue placeholder="Escolha um procedimento…" />
                </SelectTrigger>
                <SelectContent className={MENU_SELECT}>
                  {PROCEDIMENTOS_OPME.map((p) => (
                    <SelectItem key={p.id} value={p.id} className="min-h-10 rounded-lg">
                      {p.descricao} · Ref. {formatBRL(p.valorReferencia)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {travado && <p className="mt-1.5 text-xs text-slate-600">Parecer assinado: inicie um novo parecer para trocar o procedimento.</p>}
            </div>

            {!procedimento ? (
              <EmptyState
                compacto
                icone={Syringe}
                titulo="Nenhum procedimento selecionado"
                descricao="Escolha o procedimento para ver os documentos exigidos e a DUT, ou use um modelo abaixo."
              />
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <TileMetrica rotulo="Valor de referência" valor={formatBRL(procedimento.valorReferencia)} detalhe={procedimento.codigo} icone={Wallet} />
                  <TileMetrica
                    rotulo="Prazo de carência"
                    valor={procedimento.prazoCarencia ? plural(procedimento.prazoCarencia, "dia", "dias") : "Sem carência"}
                    detalhe={`${procedimento.categoria} · ${procedimento.requerAutorizacao ? "exige autorização prévia" : "sem autorização prévia"}`}
                    icone={Hourglass}
                    tom="gold"
                  />
                </div>

                {/* Documentos */}
                <fieldset className="tre-inset rounded-2xl p-4">
                  <legend className="sr-only">Documentos necessários</legend>
                  <div className="flex items-center justify-between gap-2">
                    <p aria-hidden className="text-sm font-semibold text-tre-navy">Documentos necessários</p>
                    <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums", opme.docsFaltando.length ? "tre-tone-warning" : "tre-tone-success")}>
                      {procedimento.documentosNecessarios.length - opme.docsFaltando.length}/{procedimento.documentosNecessarios.length} conferidos
                    </span>
                  </div>
                  <ul className="mt-2 space-y-0.5">
                    {procedimento.documentosNecessarios.map((doc, i) => {
                      const id = `opme-doc-${i}`;
                      return (
                        <li key={doc}>
                          <label
                            htmlFor={id}
                            className={cn("flex min-h-10 items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-slate-800", travado ? "cursor-default" : "cursor-pointer hover:bg-white/60")}
                          >
                            <Checkbox
                              id={id}
                              checked={opme.docsMarcados.has(doc)}
                              disabled={travado}
                              onCheckedChange={() => opme.alternarDocumento(doc)}
                              className={CHECKBOX}
                            />
                            {doc}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>

                {/* DUT */}
                {dut ? (
                  <section aria-labelledby="dut-titulo" className="tre-inset rounded-2xl p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 id="dut-titulo" className="font-semibold text-tre-navy">{dut.titulo}</h3>
                        <p className="text-xs text-slate-600">
                          {dut.id} · {opme.camposObrigatorios.length - opme.camposFaltando.length}/{opme.camposObrigatorios.length} campos obrigatórios
                        </p>
                      </div>
                      <GlassDialog>
                        <GlassDialogTrigger asChild>
                          <Button variant="ghost" className={cn(BOTAO_VIDRO, BOTAO_BASE)}>
                            <Eye aria-hidden />
                            Pré-visualizar DUT
                          </Button>
                        </GlassDialogTrigger>
                        <GlassPainel
                          icone={FileText}
                          titulo={dut.titulo}
                          descricao="Formulário preenchido com os dados atuais. Campos em branco aparecem sublinhados."
                          largura="lg"
                          rodape={
                            <GlassDialogClose asChild>
                              <Button className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}>Fechar</Button>
                            </GlassDialogClose>
                          }
                        >
                          <pre className="whitespace-pre-wrap rounded-2xl bg-white p-5 font-mono text-[13px] leading-relaxed text-slate-800 ring-1 ring-tre-navy/10">
                            {textoDUT}
                          </pre>
                        </GlassPainel>
                      </GlassDialog>
                    </div>
                    <div className="mt-4 space-y-5">
                      {grupos.map((g) => {
                        const preenchidos = g.campos.filter((c) => (opme.dados[c.nome] ?? "").trim()).length;
                        return (
                          <fieldset key={g.titulo} className="space-y-3">
                            <legend className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                              {g.titulo}
                              <span className="ml-2 font-medium normal-case tracking-normal tabular-nums">
                                {preenchidos}/{g.campos.length}
                              </span>
                            </legend>
                            <div className="grid gap-3 sm:grid-cols-2">
                              {g.campos.map((campo) => (
                                <CampoDUT
                                  key={campo.nome}
                                  campo={campo}
                                  valor={opme.dados[campo.nome] ?? ""}
                                  desabilitado={travado}
                                  onChange={(v) => opme.alterarCampo(campo.nome, v)}
                                />
                              ))}
                            </div>
                          </fieldset>
                        );
                      })}
                    </div>
                  </section>
                ) : (
                  <div role="status" className="tre-tone-warning flex items-start gap-3 rounded-2xl p-4 text-sm">
                    <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden />
                    <div>
                      <p className="font-semibold">DUT não cadastrado</p>
                      <p className="mt-0.5">
                        Não há DUT vinculada a {procedimento.codigo}
                        {procedimento.dutPadrao ? ` (${procedimento.dutPadrao})` : ""}. O parecer segue para análise da comissão de OPME.
                      </p>
                    </div>
                  </div>
                )}

                {/* Situação e ação */}
                <div className="tre-inset space-y-3 rounded-2xl p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-tre-navy">
                      {opme.faltam === 0 ? "Tudo pronto para o parecer" : `Faltam ${plural(opme.faltam, "item", "itens")}`}
                    </p>
                    <p className="text-xs tabular-nums text-slate-600">
                      {plural(opme.docsFaltando.length, "documento", "documentos")} · {plural(opme.camposFaltando.length, "campo obrigatório", "campos obrigatórios")}
                    </p>
                  </div>
                  <BarraSegmentada
                    className="h-2"
                    rotulo={`${feitos} de ${opme.totalExigido} itens exigidos concluídos`}
                    segmentos={[
                      { valor: feitos, classe: opme.faltam === 0 ? "fill-tre-success" : "fill-tre-navy" },
                      { valor: opme.faltam, classe: "fill-transparent" },
                    ]}
                  />
                  <div className="flex flex-wrap justify-end gap-2">
                    {opme.faltam > 0 && (
                      <Button
                        variant="ghost"
                        onClick={() => opme.emitirComPendencia() && rolarParaParecer()}
                        disabled={travado}
                        className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}
                      >
                        <TriangleAlert aria-hidden />
                        Emitir com pendência
                      </Button>
                    )}
                    <Button
                      onClick={() => opme.gerarParecer() && rolarParaParecer()}
                      disabled={opme.faltam > 0 || travado}
                      className={cn(treBotao({ tom: "primario" }), BOTAO_BASE)}
                    >
                      <FileText aria-hidden />
                      {opme.faltam > 0 ? `Gerar parecer · faltam ${opme.faltam}` : "Gerar parecer"}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </GlassCardContent>
        </GlassCard>

        {/* Parecer */}
        <div ref={parecerRef} className="scroll-mt-32">
          <GlassCard as="section" aria-labelledby="opme-parecer" className={cn("print:border-0 print:shadow-none", ENTRADA, atraso(1))}>
            <GlassCardHeader className="print:hidden">
              <SectionHeader
                id="opme-parecer"
                titulo="Parecer"
                descricao={parecer ? "Revise, assine e envie. Depois de assinado, o texto fica bloqueado." : "O parecer aparece aqui como uma folha pronta para impressão."}
                icone={ClipboardList}
                acoes={parecer && <ToneBadge tom={ROTULO_ESTADO_PARECER[parecer.estado].tom}>{ROTULO_ESTADO_PARECER[parecer.estado].rotulo}</ToneBadge>}
              />
            </GlassCardHeader>
            <GlassCardContent className="print:p-0">
              {!parecer ? (
                <EmptyState
                  icone={ClipboardList}
                  titulo="Nenhum parecer em edição"
                  descricao="Selecione um procedimento e gere o parecer, ou carregue um dos modelos abaixo."
                />
              ) : (
                <div className="space-y-4">
                  <article
                    aria-labelledby="folha-titulo"
                    className="rounded-2xl bg-white p-5 shadow-glass-lg ring-1 ring-tre-navy/10 sm:p-7 print:p-0 print:shadow-none print:ring-0"
                  >
                    <header className="flex flex-wrap items-start justify-between gap-4 border-b border-tre-navy/10 pb-4">
                      <div className="flex items-center gap-3">
                        <span aria-hidden className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-tre-gold-soft to-tre-gold text-tre-navy-deep shadow-glow-gold print:shadow-none">
                          <Shield className="size-5" />
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">TRE-PA · Comissão de OPME</p>
                          <h3 id="folha-titulo" className="text-lg font-bold text-tre-navy">Parecer técnico OPME</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <StatusBadge status={parecer.tipo} tamanho="md" />
                        <p className="mt-1 break-all font-mono text-[11px] text-slate-600">{parecer.codigo}</p>
                      </div>
                    </header>

                    <dl className="grid gap-x-6 gap-y-3 border-b border-tre-navy/10 py-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-xs text-slate-600">Procedimento</dt>
                        <dd className="font-medium text-slate-900">{parecer.procedimentoDescricao}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-600">Valor de referência</dt>
                        <dd className="font-medium tabular-nums text-slate-900">{procedimento ? formatBRL(procedimento.valorReferencia) : "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-600">
                          {editavel ? <label htmlFor="parecer-validade">Validade</label> : "Validade"}
                        </dt>
                        <dd className="font-medium text-slate-900">
                          {editavel ? (
                            <Input
                              id="parecer-validade"
                              value={parecer.dataValidade ?? ""}
                              onChange={(e) => opme.editarParecer({ dataValidade: e.target.value || undefined })}
                              placeholder="Ex.: 90 dias"
                              className={cn(TRE_CAMPO, "mt-1 h-10")}
                            />
                          ) : (
                            parecer.dataValidade ?? "—"
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-600">{editavel ? <label htmlFor="parecer-tipo">Decisão</label> : "Decisão"}</dt>
                        <dd className="font-medium text-slate-900">
                          {editavel ? (
                            <Select value={parecer.tipo} onValueChange={(v) => opme.editarParecer({ tipo: v as TipoParecer })}>
                              <SelectTrigger id="parecer-tipo" className={cn(CAMPO_SELECT, "mt-1 h-10")}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className={MENU_SELECT}>
                                {TIPOS_PARECER.map((t) => (
                                  <SelectItem key={t} value={t} className="min-h-10 rounded-lg">
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            parecer.tipo
                          )}
                        </dd>
                      </div>
                    </dl>

                    <div className="space-y-5 pt-4">
                      <section>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                          {editavel ? <label htmlFor="parecer-motivo">Motivo</label> : "Motivo"}
                        </h4>
                        {editavel ? (
                          <Textarea
                            id="parecer-motivo"
                            value={parecer.motivo}
                            onChange={(e) => opme.editarParecer({ motivo: e.target.value })}
                            className={cn(CAMPO_LONGO, "mt-1.5")}
                          />
                        ) : (
                          <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-slate-800">{parecer.motivo}</p>
                        )}
                      </section>

                      {(editavel || (parecer.condicionantes && parecer.condicionantes.length > 0)) && (
                        <section>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                            {editavel ? <label htmlFor="parecer-condicionantes">Condicionantes (uma por linha)</label> : "Condicionantes"}
                          </h4>
                          {editavel ? (
                            <Textarea
                              id="parecer-condicionantes"
                              value={(parecer.condicionantes ?? []).join("\n")}
                              onChange={(e) => opme.editarParecer({ condicionantes: e.target.value ? e.target.value.split("\n") : undefined })}
                              placeholder="Opcional"
                              className={cn(CAMPO_LONGO, "mt-1.5")}
                            />
                          ) : (
                            <ul className="mt-1.5 space-y-1.5">
                              {parecer.condicionantes?.map((c) => (
                                <li key={c} className="flex items-start gap-2 text-sm text-slate-800">
                                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-tre-success" aria-hidden />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                      )}

                      <section>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                          {editavel ? <label htmlFor="parecer-observacoes">Observações</label> : "Observações"}
                        </h4>
                        {editavel ? (
                          <Textarea
                            id="parecer-observacoes"
                            value={parecer.observacoes}
                            onChange={(e) => opme.editarParecer({ observacoes: e.target.value })}
                            className={cn(CAMPO_LONGO, "mt-1.5")}
                          />
                        ) : (
                          <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-slate-800">{parecer.observacoes || "—"}</p>
                        )}
                      </section>
                    </div>

                    <footer className="mt-6 border-t border-dashed border-tre-navy/20 pt-4">
                      {parecer.estado === "rascunho" ? (
                        <p className="text-sm text-slate-600">Rascunho · ainda não assinado</p>
                      ) : (
                        <div className="flex items-start gap-2.5">
                          <PenLine className="mt-0.5 size-4 shrink-0 text-tre-success" aria-hidden />
                          <div className="text-sm">
                            <p className="font-semibold text-tre-navy">Assinado digitalmente por {AUDITOR.nome}</p>
                            <p className="text-xs text-slate-600">
                              {parecer.assinadoEm}
                              {parecer.enviadoEm && ` · enviado em ${parecer.enviadoEm}`}
                            </p>
                          </div>
                        </div>
                      )}
                    </footer>
                  </article>

                  {editavel && (
                    <p
                      id="bloqueio-assinatura"
                      className={cn("flex items-start gap-1.5 text-xs font-medium print:hidden", opme.motivoBloqueioAssinatura ? "text-tre-warn-ink" : "text-slate-600")}
                    >
                      <Lock className="mt-px size-3.5 shrink-0" aria-hidden />
                      {opme.motivoBloqueioAssinatura ?? "Assine o parecer para liberar o envio."}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 print:hidden">
                    <Button variant="ghost" onClick={() => window.print()} className={cn(BOTAO_VIDRO, BOTAO_BASE)}>
                      <Printer aria-hidden />
                      Imprimir
                    </Button>
                    {editavel ? (
                      <Button variant="ghost" onClick={opme.descartar} className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE, "text-tre-danger-ink hover:bg-tre-danger/10 hover:text-tre-danger-ink")}>
                        <Trash2 aria-hidden />
                        Descartar
                      </Button>
                    ) : (
                      <Button variant="ghost" onClick={opme.novoParecer} className={cn(treBotao({ tom: "fantasma" }), BOTAO_BASE)}>
                        <RotateCcw aria-hidden />
                        Novo parecer
                      </Button>
                    )}
                    <div className="ml-auto flex flex-wrap gap-2">
                      <Button
                        variant="ghost"
                        onClick={opme.enviar}
                        disabled={parecer.estado !== "assinado"}
                        aria-describedby={editavel ? "bloqueio-assinatura" : undefined}
                        className={cn(BOTAO_VIDRO, BOTAO_BASE)}
                      >
                        <Send aria-hidden />
                        {parecer.estado === "enviado" ? "Enviado" : "Enviar"}
                      </Button>
                      <Button
                        onClick={opme.assinar}
                        disabled={!editavel || Boolean(opme.motivoBloqueioAssinatura)}
                        aria-describedby={editavel ? "bloqueio-assinatura" : undefined}
                        className={cn(treBotao({ tom: "sucesso" }), BOTAO_BASE)}
                      >
                        <PenLine aria-hidden />
                        {editavel ? "Assinar" : "Assinado"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>

      {/* Modelos */}
      <GlassCard as="section" aria-labelledby="opme-modelos" className={cn("print:hidden", ENTRADA, atraso(2))}>
        <GlassCardHeader>
          <SectionHeader
            id="opme-modelos"
            titulo="Modelos de parecer"
            descricao="Carregue um modelo como ponto de partida: o texto fica editável até a assinatura."
            icone={FileText}
            contador={MODELOS_PARECER.length}
          />
        </GlassCardHeader>
        <GlassCardContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODELOS_PARECER.map((modelo) => (
              <li key={modelo.id} className="tre-inset flex flex-col rounded-2xl p-4 transition-all hover:bg-white/80 motion-safe:hover:-translate-y-0.5">
                <div className="flex items-center justify-between gap-2">
                  <StatusBadge status={modelo.tipo} />
                  <span className="font-mono text-[11px] text-slate-600">{modelo.codigo}</span>
                </div>
                <p className="mt-2 font-semibold text-tre-navy">{modelo.procedimentoDescricao}</p>
                <p className="mt-1 line-clamp-3 flex-1 text-sm text-slate-700">{modelo.motivo}</p>
                <p className="mt-2 text-xs text-slate-600">
                  {plural(modelo.condicionantes?.length ?? 0, "condicionante", "condicionantes")}
                  {modelo.dataValidade && ` · validade ${modelo.dataValidade}`}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => opme.usarModelo(modelo) && rolarParaParecer(true)}
                  disabled={travado}
                  aria-label={`Usar modelo ${modelo.tipo} de ${modelo.procedimentoDescricao}`}
                  className={cn(BOTAO_VIDRO, BOTAO_BASE, "mt-3 w-full")}
                >
                  <FileText aria-hidden />
                  Usar modelo
                </Button>
              </li>
            ))}
          </ul>
          {travado && <p className="mt-3 text-xs text-slate-600">Há um parecer assinado em tela. Inicie um novo parecer para usar outro modelo.</p>}
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
