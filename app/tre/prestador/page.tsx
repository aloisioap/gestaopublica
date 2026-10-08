"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Ban,
  Building2,
  CalendarClock,
  Check,
  CircleDashed,
  ClipboardCheck,
  CloudUpload,
  Download,
  Eye,
  FileCode2,
  FilePlus2,
  FileSearch,
  FileText,
  FlaskConical,
  Hourglass,
  IdCard,
  ListChecks,
  Loader2,
  Minus,
  Package,
  Paperclip,
  Percent,
  Pill,
  Plus,
  Receipt,
  RefreshCw,
  ScanLine,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Trash2,
  TriangleAlert,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { TreShell } from "@/components/tre/tre-shell";
import { GlassCard } from "@/components/tre/glass-card";
import { KpiCard } from "@/components/tre/kpi-card";
import { StatusBadge, ToneBadge } from "@/components/tre/status-badge";
import { SectionHeader } from "@/components/tre/section-header";
import { EmptyState } from "@/components/tre/empty-state";
import { FluxoStepper, type EstadoEtapa, type EtapaFluxo } from "@/components/tre/fluxo-stepper";
import { GlassDialog, GlassDialogClose, GlassPainel } from "@/components/tre/glass-painel";
import { GlassTabsList, GlassTabsTrigger } from "@/components/tre/glass-tabs";
import { treBotao, TRE_CAMPO } from "@/components/tre/ui-tre";
import { AvatarIniciais } from "@/components/tre/avatar-iniciais";
import { useQueryParam } from "@/components/tre/use-query-param";
import {
  CHECKLIST_AUDITORIA,
  CREDENCIADOS_TRE,
  FATURAS_TRE,
  ITENS_FATURA_TRE,
  PROCEDIMENTOS_TRE,
  SERVIDORES_TRE,
} from "@/lib/dados-tre";
import {
  DATA_REFERENCIA_TRE,
  diasEntre,
  formatBRL,
  formatCompetencia,
  formatData,
  formatNumero,
  formatPct,
  mascararCPF,
} from "@/lib/tre/formatadores";
import { getStatusInfo } from "@/lib/tre/status";

/* ============================================================
   Tipos
   ============================================================ */

type Servidor = (typeof SERVIDORES_TRE)[number];
type TipoItem = "Insumo" | "Material" | "Medicamento" | "Procedimento" | "Exame" | "Consulta";
type EstadoBusca = "ocioso" | "vazio" | "encontrado" | "inativo" | "nao_encontrado";
type FiltroFatura = "todas" | "analise" | "auditadas" | "glosadas" | "pagas";
type EstadoChecklist = "ok" | "pendente" | "erro" | "dispensado";

interface Autorizacao {
  id: string;
  matricula: string;
  tipo: "Consulta" | "Exame";
  descricao: string;
  data_autorizacao: string;
  data_validade: string;
  status: "Autorizado";
  medico_solicitante: string;
}

interface ItemXml {
  codigo: string;
  descricao: string;
  tipo: TipoItem;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
}

interface ItemExtra {
  id: string;
  codigo: string;
  descricao: string;
  tipo: TipoItem;
  quantidade: number;
  valor_unitario: number;
  justificativa: string;
  documento_justificativa: string;
}

interface ItemFatura {
  id: string;
  codigo: string;
  descricao: string;
  tipo: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  origem: string;
  status_auditoria: string;
  motivo_glosa: string | null;
  justificativa?: string | null;
  documento?: string | null;
}

interface Fatura {
  id: string;
  numero_fatura: string;
  credenciado_id: string;
  procedimento_id: string | null;
  processo_id: string | null;
  matricula: string | null;
  servidor_nome: string | null;
  descricao: string | null;
  mes_referencia: number;
  ano_referencia: number;
  xml_arquivo: string;
  pdf_arquivo: string | null;
  valor_bruto: number;
  valor_liquido: number;
  status: string;
  motivo_glosa: string | null;
  observacoes_auditoria: string | null;
  data_envio: string | null;
  /** Itens das faturas criadas nesta sessão; as do mock vêm de ITENS_FATURA_TRE. */
  itens: ItemFatura[] | null;
}

interface ArquivoXml {
  nome: string;
  tamanho: number | null;
}

interface FormExtra {
  tipo: TipoItem;
  codigo: string;
  descricao: string;
  quantidade: string;
  valor: string;
  justificativa: string;
  documento: string;
}

interface ItemChecklist {
  id: string;
  rotulo: string;
  detalhe: string;
  estado: EstadoChecklist;
  pendencia: string;
}

/* ============================================================
   Dados simulados desta tela
   ============================================================ */

/** Autorizações liberadas para execução (mock). A vigência é calculada contra DATA_REFERENCIA_TRE. */
const PROCESSOS_LIBERADOS: Autorizacao[] = [
  {
    id: "PROC-LIB-001",
    matricula: "TRE0001",
    tipo: "Consulta",
    descricao: "Consulta Cardiológica de Retorno",
    data_autorizacao: "2024-01-10",
    data_validade: "2024-02-10",
    status: "Autorizado",
    medico_solicitante: "Dr. José Silva - CRM/PA 1234",
  },
  {
    id: "PROC-LIB-002",
    matricula: "TRE0001",
    tipo: "Exame",
    descricao: "Hemograma Completo",
    data_autorizacao: "2024-01-10",
    data_validade: "2024-02-10",
    status: "Autorizado",
    medico_solicitante: "Dr. José Silva - CRM/PA 1234",
  },
  {
    id: "PROC-LIB-003",
    matricula: "TRE0001",
    tipo: "Exame",
    descricao: "Holter 24 horas",
    data_autorizacao: "2023-12-18",
    data_validade: "2024-01-18",
    status: "Autorizado",
    medico_solicitante: "Dr. José Silva - CRM/PA 1234",
  },
  {
    id: "PROC-LIB-004",
    matricula: "TRE0002",
    tipo: "Consulta",
    descricao: "Consulta Pneumológica de Retorno",
    data_autorizacao: "2024-01-22",
    data_validade: "2024-02-06",
    status: "Autorizado",
    medico_solicitante: "Dra. Lúcia Ferreira - CRM/PA 5678",
  },
  {
    id: "PROC-LIB-005",
    matricula: "TRE0005",
    tipo: "Exame",
    descricao: "Ultrassonografia de Abdome Total",
    data_autorizacao: "2024-01-26",
    data_validade: "2024-03-26",
    status: "Autorizado",
    medico_solicitante: "Dr. Marcos Rocha - CRM/PA 4321",
  },
];

/**
 * "Parser" simulado do XML TISS. No arquivo, o valor de cada linha é o total
 * (quantidade × unitário): os 5 itens somam R$ 350,00, como a FAT-2024-001.
 */
const XML_EXEMPLO: { numero_guia: string; data_execucao: string; senha: string; itens: ItemXml[] } = {
  numero_guia: "123456789",
  data_execucao: "2024-01-15",
  senha: "SENHA-001",
  itens: [
    { codigo: "10101012", descricao: "Consulta Cardiológica", tipo: "Procedimento", quantidade: 1, valor_unitario: 250, valor_total: 250 },
    { codigo: "10101020", descricao: "Eletrocardiograma", tipo: "Procedimento", quantidade: 1, valor_unitario: 80, valor_total: 80 },
    { codigo: "INS-001", descricao: "Agulha Descartável 40x12", tipo: "Insumo", quantidade: 2, valor_unitario: 2.5, valor_total: 5 },
    { codigo: "INS-002", descricao: "Seringa Descartável 10ml", tipo: "Insumo", quantidade: 2, valor_unitario: 3, valor_total: 6 },
    { codigo: "MAT-001", descricao: "Eletrodo ECG Descartável", tipo: "Material", quantidade: 10, valor_unitario: 0.9, valor_total: 9 },
  ],
};

const FATURAS_INICIAIS: Fatura[] = FATURAS_TRE.map((f) => ({
  id: f.id,
  numero_fatura: f.numero_fatura,
  credenciado_id: f.credenciado_id,
  procedimento_id: f.procedimento_id,
  processo_id: null,
  matricula: null,
  servidor_nome: null,
  descricao: null,
  mes_referencia: f.mes_referencia,
  ano_referencia: f.ano_referencia,
  xml_arquivo: f.xml_arquivo,
  pdf_arquivo: f.pdf_arquivo,
  valor_bruto: f.valor_bruto,
  valor_liquido: f.valor_liquido,
  status: f.status,
  motivo_glosa: f.motivo_glosa,
  observacoes_auditoria: f.observacoes_auditoria,
  data_envio: null,
  itens: null,
}));

const ITENS_POR_FATURA: Record<string, ItemFatura[]> = ITENS_FATURA_TRE.reduce<Record<string, ItemFatura[]>>((acc, i) => {
  (acc[i.fatura_id] ??= []).push({
    id: i.id,
    codigo: i.codigo,
    descricao: i.descricao,
    tipo: i.tipo,
    quantidade: i.quantidade,
    valor_unitario: i.valor_unitario,
    valor_total: i.valor_total,
    origem: i.origem,
    status_auditoria: i.status_auditoria,
    motivo_glosa: i.motivo_glosa,
  });
  return acc;
}, {});

const PROCEDIMENTO_POR_ID = new Map<string, (typeof PROCEDIMENTOS_TRE)[number]>(PROCEDIMENTOS_TRE.map((p) => [p.id, p]));

/* ============================================================
   Constantes de interface
   ============================================================ */

const TIPOS_ITEM: TipoItem[] = ["Insumo", "Material", "Medicamento", "Procedimento", "Exame", "Consulta"];

const TIPO_VISUAL: Record<TipoItem, { icone: LucideIcon; classe: string }> = {
  Insumo: { icone: Syringe, classe: "bg-tre-green/10 text-tre-green-ink" },
  Material: { icone: Package, classe: "bg-tre-gold/15 text-tre-gold-ink" },
  Medicamento: { icone: Pill, classe: "bg-tre-danger/10 text-tre-danger-ink" },
  Procedimento: { icone: Stethoscope, classe: "bg-tre-info/10 text-tre-info" },
  Exame: { icone: FlaskConical, classe: "bg-tre-navy/10 text-tre-navy" },
  Consulta: { icone: FileText, classe: "bg-tre-navy/10 text-tre-navy" },
};

const FILTROS: { id: FiltroFatura; rotulo: string }[] = [
  { id: "todas", rotulo: "Todas" },
  { id: "analise", rotulo: "Em análise" },
  { id: "auditadas", rotulo: "Auditadas" },
  { id: "glosadas", rotulo: "Glosadas" },
  { id: "pagas", rotulo: "Pagas" },
];

const ETAPAS_FATURA: EtapaFluxo[] = [
  { id: "faturada", titulo: "Faturada", perfil: "credenciado" },
  { id: "auditoria", titulo: "Em auditoria", perfil: "auditor" },
  { id: "auditada", titulo: "Auditada", perfil: "auditor" },
  { id: "paga", titulo: "Paga", perfil: "gestor" },
];

const MIN_JUSTIFICATIVA = 10;
const FORM_EXTRA_VAZIO: FormExtra = { tipo: "Insumo", codigo: "", descricao: "", quantidade: "1", valor: "", justificativa: "", documento: "" };

const ROTULO_CHECK_XML = CHECKLIST_AUDITORIA.find((c) => c.id === 1)?.item ?? "XML TISS válido e completo";
const OUTROS_CHECKS_AUDITORIA = CHECKLIST_AUDITORIA.filter((c) => c.id !== 1 && c.obrigatorio);

/*
 * Entrada animada (tailwindcss-animate). Duração e atraso vão como propriedades
 * arbitrárias com o mesmo prefixo motion-safe para não perder para o
 * `animation-duration` do próprio `animate-in` nem atrasar as transições de hover.
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

/** Botão "vidro" sem blur próprio, para uso dentro de superfícies que já desfocam. */
const BOTAO_VIDRO = cn(treBotao({ tom: "vidro" }), "backdrop-blur-none");
const BOTAO_FANTASMA = treBotao({ tom: "fantasma" });
const BOTAO_REMOVER = cn(treBotao({ tom: "fantasma" }), "size-10 rounded-xl text-tre-danger-ink hover:bg-tre-danger/10 hover:text-tre-danger-ink");
const CAMPO_TEXTAREA = "rounded-xl border-tre-navy/15 bg-white/85 text-sm placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0";
const MENU_SELECT = "rounded-xl border-white/70 bg-white/95 shadow-glass-lg";
const ROLAGEM_ALVO = "scroll-mt-32 md:scroll-mt-24";
const TH = "px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600";

const DECIMAL = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const UMA_CASA = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });

/* ============================================================
   Funções auxiliares
   ============================================================ */

const normalizar = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const plural = (n: number, singular: string, pluralTexto: string) => `${formatNumero(n)} ${n === 1 ? singular : pluralTexto}`;

function nomeCurto(nome: string) {
  const partes = nome.trim().split(/\s+/);
  return partes.length > 1 ? `${partes[0]} ${partes[partes.length - 1]}` : nome;
}

/** "tre0001", " TRE0001 " e "1" viram "TRE0001". */
function normalizarMatricula(valor: string) {
  const s = valor.trim().toUpperCase().replace(/\s+/g, "");
  return /^\d{1,4}$/.test(s) ? `TRE${s.padStart(4, "0")}` : s;
}

/** Aceita "12,50", "1.234,50" e "12.5". Retorna NaN se inválido. */
function lerValor(texto: string) {
  const limpo = texto.trim();
  if (!limpo) return Number.NaN;
  const normal = limpo.includes(",") ? limpo.replace(/\./g, "").replace(",", ".") : limpo;
  return /^\d+(\.\d+)?$/.test(normal) ? Math.round(Number(normal) * 100) / 100 : Number.NaN;
}

function formatTamanho(bytes: number) {
  if (bytes < 1024) return `${formatNumero(bytes)} B`;
  if (bytes < 1024 * 1024) return `${UMA_CASA.format(bytes / 1024)} KB`;
  return `${UMA_CASA.format(bytes / (1024 * 1024))} MB`;
}

const valorGlosado = (f: Fatura) => Math.max(0, f.valor_bruto - f.valor_liquido);

function passaFiltro(f: Fatura, filtro: FiltroFatura) {
  switch (filtro) {
    case "analise":
      return f.status === "Em análise";
    case "auditadas":
      return f.status === "Auditada";
    case "glosadas":
      return f.status === "Glosada" || valorGlosado(f) > 0;
    case "pagas":
      return f.status === "Paga";
    default:
      return true;
  }
}

function infoFatura(f: Fatura) {
  const p = f.procedimento_id ? PROCEDIMENTO_POR_ID.get(f.procedimento_id) : undefined;
  return {
    servidor: f.servidor_nome ?? p?.usuario_nome ?? "Servidor não identificado",
    matricula: f.matricula ?? p?.matricula_usuario ?? null,
    procedimento: f.descricao ?? (p ? `${p.tipo} · ${p.especialidade}` : (f.procedimento_id ?? "—")),
  };
}

const itensDaFatura = (f: Fatura): ItemFatura[] => f.itens ?? ITENS_POR_FATURA[f.id] ?? [];

function estadosFatura(f: Fatura): EstadoEtapa[] {
  const glosa = valorGlosado(f) > 0;
  switch (f.status) {
    case "Paga":
      return ["concluida", "concluida", glosa ? "alerta" : "concluida", "concluida"];
    case "Auditada":
      return ["concluida", "concluida", glosa ? "alerta" : "concluida", "atual"];
    case "Glosada":
      return ["concluida", "concluida", "alerta", "atual"];
    default:
      return ["concluida", "atual", "pendente", "pendente"];
  }
}

function validarExtra(form: FormExtra) {
  const qtd = Number(form.quantidade);
  const valor = lerValor(form.valor);
  const faltam = MIN_JUSTIFICATIVA - form.justificativa.trim().length;
  const erros: Partial<Record<"codigo" | "descricao" | "quantidade" | "valor" | "justificativa", string>> = {};
  if (!form.codigo.trim()) erros.codigo = "Informe o código do item.";
  if (!form.descricao.trim()) erros.descricao = "Descreva o item.";
  if (!/^\d+$/.test(form.quantidade) || qtd < 1) erros.quantidade = "A quantidade mínima é 1.";
  if (!(valor > 0)) erros.valor = "Informe um valor unitário maior que zero.";
  if (faltam > 0) erros.justificativa = `A justificativa precisa de pelo menos ${MIN_JUSTIFICATIVA} caracteres (faltam ${faltam}).`;
  return erros;
}

function baixarCSV(nomeArquivo: string, linhas: (string | number)[][]) {
  const csv = "\uFEFF" + linhas.map((l) => l.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = nomeArquivo;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const movimentoReduzido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function rolarPara(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: movimentoReduzido() ? "auto" : "smooth", block: "start" });
}

function focarCampo(campo: HTMLElement | null) {
  if (!campo) return;
  campo.scrollIntoView({ behavior: movimentoReduzido() ? "auto" : "smooth", block: "center" });
  campo.focus({ preventScroll: true });
}

/** Executa depois do commit do React (o alvo pode ainda não estar no DOM). */
const depoisDoRender = (fn: () => void) => window.setTimeout(fn, 60);

/* ============================================================
   Componentes locais
   ============================================================ */

function IconeTipo({ tipo, className }: { tipo: string; className?: string }) {
  const visual = TIPO_VISUAL[tipo as TipoItem] ?? TIPO_VISUAL.Consulta;
  const Icone = visual.icone;
  return (
    <span aria-hidden className={cn("grid size-9 shrink-0 place-items-center rounded-xl", visual.classe, className)}>
      <Icone className="size-4" />
    </span>
  );
}

function OrigemBadge({ origem }: { origem: string }) {
  return origem === "XML" ? (
    <ToneBadge tom="info">
      <FileCode2 className="size-3" aria-hidden />
      XML
    </ToneBadge>
  ) : (
    <ToneBadge tom="warning">
      <Plus className="size-3" aria-hidden />
      Extra
    </ToneBadge>
  );
}

function Dado({ rotulo, valor, className }: { rotulo: string; valor: React.ReactNode; className?: string }) {
  return (
    <div className={cn("min-w-0", className)}>
      <dt className="text-xs text-slate-600">{rotulo}</dt>
      <dd className="break-words font-medium text-slate-900">{valor}</dd>
    </div>
  );
}

function RotuloPasso({ numero, titulo }: { numero: number; titulo: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
      <span aria-hidden className="grid size-6 place-items-center rounded-full bg-tre-navy text-[11px] font-bold text-white">
        {numero}
      </span>
      <span>
        <span className="sr-only">Passo {numero}: </span>
        {titulo}
      </span>
    </p>
  );
}

function ChipVigencia({ validade }: { validade: string }) {
  const dias = diasEntre(validade);
  if (dias < 0) return <StatusBadge status="Vencida" />;
  if (dias <= 7) {
    return (
      <ToneBadge tom="warning">
        <CalendarClock className="size-3" aria-hidden />
        {dias === 0 ? "vence hoje" : `vence em ${plural(dias, "dia", "dias")}`}
      </ToneBadge>
    );
  }
  return <StatusBadge status="Autorizado" rotulo={`Vigente · ${plural(dias, "dia", "dias")}`} />;
}

function BarraAprovacao({ fatura, className }: { fatura: Fatura; className?: string }) {
  if (fatura.status === "Em análise") {
    return (
      <span className={cn("block h-1.5 w-full overflow-hidden rounded-full bg-tre-navy/10", className)} role="img" aria-label="Aguardando auditoria">
        <span className="block h-full w-1/3 rounded-full bg-tre-navy/30" />
      </span>
    );
  }
  const pct = fatura.valor_bruto > 0 ? Math.min(100, Math.max(0, (fatura.valor_liquido / fatura.valor_bruto) * 100)) : 0;
  const glosa = 100 - pct;
  return (
    <span
      role="img"
      aria-label={glosa > 0 ? `${formatPct(pct)} aprovado e ${formatPct(glosa)} glosado` : `${formatPct(pct)} aprovado`}
      className={cn("flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-slate-200/80", className)}
    >
      <span className="h-full rounded-full bg-tre-success" style={{ width: `${pct}%` }} />
      {glosa > 0 && <span className="h-full flex-1 rounded-full bg-tre-danger" />}
    </span>
  );
}

function ResumoItens({ itens }: { itens: ItemFatura[] }) {
  if (itens.length === 0) return <span className="text-xs text-slate-600">Sem detalhamento</span>;
  const aprovados = itens.filter((i) => i.status_auditoria === "Aprovado").length;
  const glosados = itens.filter((i) => i.status_auditoria === "Glosado").length;
  const pendentes = itens.filter((i) => i.status_auditoria === "Pendente").length;
  const extras = itens.filter((i) => i.origem !== "XML").length;
  return (
    <span className="flex flex-wrap gap-1">
      {aprovados > 0 && <ToneBadge tom="success">{aprovados} ok</ToneBadge>}
      {glosados > 0 && <ToneBadge tom="danger">{plural(glosados, "glosa", "glosas")}</ToneBadge>}
      {pendentes > 0 && <ToneBadge tom="progress">{plural(pendentes, "em análise", "em análise")}</ToneBadge>}
      {extras > 0 && <ToneBadge tom="warning">{plural(extras, "extra", "extras")}</ToneBadge>}
    </span>
  );
}

interface FormValidacaoProps {
  id: string;
  valor: string;
  onValor: (valor: string) => void;
  onValidar: (matricula?: string) => void;
  busca: { estado: EstadoBusca; termo: string };
  servidor: Servidor | null;
  inputRef: React.Ref<HTMLInputElement>;
  /** Só uma instância anuncia o resultado para leitores de tela. */
  anunciar?: boolean;
  compacto?: boolean;
  className?: string;
}

function FormValidacao({ id, valor, onValor, onValidar, busca, servidor, inputRef, anunciar = false, compacto = false, className }: FormValidacaoProps) {
  const erro = busca.estado === "vazio" || busca.estado === "nao_encontrado";
  return (
    <form
      role="search"
      aria-label={compacto ? "Validar servidor pela matrícula (nova fatura)" : "Validar servidor pela matrícula"}
      onSubmit={(e) => {
        e.preventDefault();
        onValidar();
      }}
      className={className}
    >
      <Label htmlFor={id} className="text-sm font-medium text-tre-navy">
        Matrícula do servidor
      </Label>
      <div className="mt-1.5 flex gap-2">
        <div className="relative min-w-0 flex-1">
          <IdCard aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-600" />
          <Input
            id={id}
            ref={inputRef}
            value={valor}
            onChange={(e) => onValor(e.target.value)}
            placeholder="Ex.: TRE0001"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
            aria-invalid={erro}
            aria-describedby={`${id}-retorno`}
            className={cn(TRE_CAMPO, "pl-11 font-mono uppercase tracking-wide placeholder:normal-case", compacto ? "h-11" : "h-12 text-base")}
          />
        </div>
        <Button type="submit" className={cn(treBotao({ tom: "primario" }), "shrink-0 rounded-xl px-5", compacto ? "h-11" : "h-12")}>
          <Search aria-hidden />
          Validar
        </Button>
      </div>

      <div id={`${id}-retorno`} aria-live={anunciar ? "polite" : undefined} className="mt-2 min-h-5 text-sm">
        {busca.estado === "vazio" && <p className="font-medium text-tre-danger-ink">Digite a matrícula do servidor.</p>}
        {busca.estado === "nao_encontrado" && (
          <p className="flex items-start gap-1.5 font-medium text-tre-danger-ink">
            <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
            <span>
              Matrícula <span className="font-mono">{busca.termo}</span> não encontrada. Confira o número na carteirinha do servidor.
            </span>
          </p>
        )}
        {busca.estado === "inativo" && servidor && (
          <p className="flex items-start gap-1.5 font-medium text-tre-warn-ink">
            <Ban aria-hidden className="mt-0.5 size-4 shrink-0" />
            {nomeCurto(servidor.nome)} está inativo: atendimento sem cobertura do TRE-PA.
          </p>
        )}
        {busca.estado === "encontrado" && servidor && (
          <p className="flex items-center gap-1.5 font-medium text-tre-green-ink">
            <BadgeCheck aria-hidden className="size-4 shrink-0" />
            Matrícula <span className="font-mono">{servidor.matricula}</span> verificada.
          </p>
        )}
      </div>

      {!compacto && (
        <div className="mt-1 flex flex-wrap items-center gap-x-1 text-xs text-slate-600">
          <span className="mr-1">Matrículas de demonstração:</span>
          {SERVIDORES_TRE.map((s) => (
            <button
              key={s.matricula}
              type="button"
              onClick={() => onValidar(s.matricula)}
              className="tre-ring group inline-flex h-10 items-center rounded-full"
              aria-label={`Validar matrícula de demonstração ${s.matricula}`}
            >
              <span className="rounded-full bg-white/80 px-2.5 py-1 font-mono font-semibold text-tre-navy ring-1 ring-tre-navy/15 transition-colors group-hover:bg-white group-hover:ring-tre-navy/30">
                {s.matricula}
              </span>
            </button>
          ))}
        </div>
      )}
    </form>
  );
}

function CarteirinhaServidor({ servidor, className }: { servidor: Servidor; className?: string }) {
  const alergias = servidor.alergias.filter((a) => normalizar(a) !== "nenhuma");
  return (
    <div className={cn("tre-inset relative overflow-hidden rounded-2xl p-4 pl-5", className)}>
      <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-tre-green to-tre-navy" />
      <div className="flex items-start gap-3">
        <AvatarIniciais nome={servidor.nome} tamanho="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold leading-tight text-tre-navy">{servidor.nome}</p>
            <StatusBadge status={servidor.ativo ? "Ativo" : "Inativo"} />
          </div>
          <p className="mt-0.5 text-sm text-slate-600">{servidor.cargo}</p>
          <ToneBadge tom="success" className="mt-2">
            <BadgeCheck className="size-3" aria-hidden />
            Matrícula verificada
          </ToneBadge>
        </div>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <Dado rotulo="Matrícula" valor={<span className="font-mono">{servidor.matricula}</span>} />
        <Dado rotulo="Carteirinha" valor={<span className="font-mono">{servidor.carteirinha_saude}</span>} />
        <Dado rotulo="Lotação" valor={`${servidor.lotacao} · ${servidor.comarca}/${servidor.estado}`} className="col-span-2" />
        <Dado rotulo="CPF" valor={<span className="tabular-nums">{mascararCPF(servidor.cpf)}</span>} />
        <Dado rotulo="Tipo sanguíneo" valor={servidor.tipo_sanguineo} />
      </dl>
      <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-tre-navy/10 pt-3">
        <span className="text-xs font-medium text-slate-600">Alergias:</span>
        {alergias.length > 0 ? (
          alergias.map((a) => (
            <ToneBadge key={a} tom="danger">
              <TriangleAlert className="size-3" aria-hidden />
              {a}
            </ToneBadge>
          ))
        ) : (
          <span className="text-xs text-slate-700">nenhuma registrada</span>
        )}
      </div>
    </div>
  );
}

const ICONE_CHECK: Record<EstadoChecklist, { icone: LucideIcon; classe: string; rotulo: string }> = {
  ok: { icone: Check, classe: "bg-tre-success text-white", rotulo: "concluído" },
  pendente: { icone: CircleDashed, classe: "bg-white text-slate-600 ring-1 ring-slate-300", rotulo: "pendente" },
  erro: { icone: TriangleAlert, classe: "bg-tre-danger text-white", rotulo: "bloqueado" },
  dispensado: { icone: Minus, classe: "bg-slate-200 text-slate-700", rotulo: "não se aplica" },
};

function LinhaChecklist({ item }: { item: ItemChecklist }) {
  const visual = ICONE_CHECK[item.estado];
  const Icone = visual.icone;
  return (
    <li className={cn("tre-inset flex items-start gap-3 rounded-2xl p-4", item.estado === "erro" && "ring-1 ring-tre-danger/30")}>
      <span aria-hidden className={cn("grid size-8 shrink-0 place-items-center rounded-full", visual.classe)}>
        <Icone className="size-4" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-tre-navy">
          {item.rotulo}
          <span className="sr-only"> — {visual.rotulo}</span>
        </p>
        <p className={cn("mt-0.5 text-xs", item.estado === "erro" ? "font-medium text-tre-danger-ink" : "text-slate-600")}>{item.detalhe}</p>
      </div>
    </li>
  );
}

function DetalheFatura({ fatura }: { fatura: Fatura }) {
  const itens = itensDaFatura(fatura);
  const glosado = valorGlosado(fatura);
  const info = infoFatura(fatura);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={fatura.status} tamanho="md" />
        <ToneBadge tom="neutral">Competência {formatCompetencia(fatura.mes_referencia, fatura.ano_referencia)}</ToneBadge>
        {fatura.processo_id && <ToneBadge tom="info">Autorização {fatura.processo_id}</ToneBadge>}
        {fatura.data_envio && <ToneBadge tom="neutral">Enviada em {formatData(fatura.data_envio)}</ToneBadge>}
      </div>

      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <Dado rotulo="Servidor" valor={info.matricula ? `${info.servidor} · ${info.matricula}` : info.servidor} />
        <Dado
          rotulo="Procedimento"
          valor={
            <>
              {info.procedimento}
              {fatura.procedimento_id && <span className="font-mono text-xs font-normal text-slate-600"> · {fatura.procedimento_id}</span>}
            </>
          }
        />
        <Dado rotulo="Arquivo XML" valor={<span className="font-mono text-xs">{fatura.xml_arquivo || "—"}</span>} />
        <Dado rotulo="Documento PDF" valor={<span className="font-mono text-xs">{fatura.pdf_arquivo || "—"}</span>} />
      </dl>

      <section aria-labelledby="detalhe-andamento" className="tre-inset rounded-2xl p-4">
        <h3 id="detalhe-andamento" className="mb-4 text-sm font-semibold text-tre-navy">
          Andamento
        </h3>
        <FluxoStepper etapas={ETAPAS_FATURA} estados={estadosFatura(fatura)} rotulo="Andamento da fatura" />
      </section>

      <section aria-labelledby="detalhe-valores">
        <h3 id="detalhe-valores" className="sr-only">
          Valores
        </h3>
        {/* < sm: linhas rótulo/valor (o valor em BRL não quebra); sm+: três blocos */}
        <dl className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          <div className="tre-inset flex items-baseline justify-between gap-3 rounded-2xl px-4 py-3 sm:block sm:p-3">
            <dt className="text-xs text-slate-600">Bruto</dt>
            <dd className="font-semibold tabular-nums text-tre-navy sm:mt-0.5 sm:text-lg">{formatBRL(fatura.valor_bruto)}</dd>
          </div>
          <div className="tre-inset flex items-baseline justify-between gap-3 rounded-2xl px-4 py-3 sm:block sm:p-3">
            <dt className="text-xs text-slate-600">Glosado</dt>
            <dd className={cn("font-semibold tabular-nums sm:mt-0.5 sm:text-lg", glosado > 0 ? "text-tre-danger-ink" : "text-slate-700")}>{formatBRL(glosado)}</dd>
          </div>
          <div className="tre-inset flex items-baseline justify-between gap-3 rounded-2xl px-4 py-3 sm:block sm:p-3">
            <dt className="text-xs text-slate-600">{fatura.status === "Em análise" ? "Líquido previsto" : "Líquido"}</dt>
            <dd className="font-bold tabular-nums text-tre-navy sm:mt-0.5 sm:text-lg">{formatBRL(fatura.valor_liquido)}</dd>
          </div>
        </dl>
        <BarraAprovacao fatura={fatura} className="mt-3" />
      </section>

      {fatura.motivo_glosa && (
        <div className="tre-tone-danger rounded-2xl p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold">
            <TriangleAlert className="size-4" aria-hidden />
            Motivo da glosa
          </p>
          <p className="mt-1">{fatura.motivo_glosa}</p>
        </div>
      )}
      {fatura.observacoes_auditoria && (
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-tre-navy">Observação da auditoria:</span> {fatura.observacoes_auditoria}
        </p>
      )}

      <section aria-labelledby="detalhe-itens">
        <h3 id="detalhe-itens" className="flex items-center gap-2 text-sm font-semibold text-tre-navy">
          Itens da fatura
          <span className="tre-tone-neutral rounded-full px-2 py-0.5 text-xs tabular-nums">{itens.length}</span>
        </h3>
        {itens.length === 0 ? (
          <EmptyState compacto icone={ListChecks} titulo="Itens não detalhados" descricao="Esta fatura não tem o detalhamento por item." className="mt-3" />
        ) : (
          <ul className="mt-3 space-y-2">
            {itens.map((item) => (
              <li
                key={item.id}
                className={cn("tre-inset rounded-2xl p-3 sm:p-4", item.status_auditoria === "Glosado" && "ring-1 ring-tre-danger/25")}
              >
                <div className="flex items-start gap-3">
                  <IconeTipo tipo={item.tipo} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900">{item.descricao}</p>
                        <p className="text-xs text-slate-600">
                          <span className="font-mono">{item.codigo}</span> · {item.tipo}
                        </p>
                      </div>
                      <StatusBadge status={item.status_auditoria} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                      <OrigemBadge origem={item.origem} />
                      <span className="tabular-nums">
                        {formatNumero(item.quantidade)} × {formatBRL(item.valor_unitario)}
                      </span>
                      <span className="ml-auto text-sm font-semibold tabular-nums text-tre-navy">{formatBRL(item.valor_total)}</span>
                    </div>
                    {item.justificativa && (
                      <p className="mt-2 text-xs text-slate-700">
                        <span className="font-semibold">Justificativa:</span> {item.justificativa}
                      </p>
                    )}
                    {item.motivo_glosa && (
                      <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-tre-danger-ink">
                        <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                        {item.motivo_glosa}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

/* ============================================================
   Página
   ============================================================ */

export default function AreaCredenciadoTRE() {
  /* ---------- Persona e navegação (deep links) ---------- */
  const [credenciadoId, setCredenciadoId] = useQueryParam("credenciado", CREDENCIADOS_TRE[0].id);
  const [abaParam, setAbaParam] = useQueryParam("aba", "upload");
  const credenciado = CREDENCIADOS_TRE.find((c) => c.id === credenciadoId) ?? CREDENCIADOS_TRE[0];
  // "status" é a antiga aba de acompanhamento, hoje unificada em "Minhas faturas".
  const aba = abaParam === "faturas" || abaParam === "status" ? "faturas" : "upload";

  /* ---------- Faturas ---------- */
  const [faturas, setFaturas] = useState<Fatura[]>(FATURAS_INICIAIS);
  const [filtro, setFiltro] = useState<FiltroFatura>("todas");
  const [faturaDetalheId, setFaturaDetalheId] = useState<string | null>(null);
  const [detalheAberto, setDetalheAberto] = useState(false);

  /* ---------- Validação do servidor ---------- */
  const [matriculaBusca, setMatriculaBusca] = useState("");
  const [busca, setBusca] = useState<{ estado: EstadoBusca; termo: string }>({ estado: "ocioso", termo: "" });
  const [servidor, setServidor] = useState<Servidor | null>(null);
  const [processoId, setProcessoId] = useState<string | null>(null);
  /** Autorizações já faturadas nesta sessão: id → número da fatura. */
  const [faturados, setFaturados] = useState<Record<string, string>>({});
  const inputTopoRef = useRef<HTMLInputElement>(null);
  const inputFluxoRef = useRef<HTMLInputElement>(null);

  /* ---------- XML TISS ---------- */
  const [arquivoXml, setArquivoXml] = useState<ArquivoXml | null>(null);
  const [analisando, setAnalisando] = useState(false);
  const [itensXml, setItensXml] = useState<ItemXml[]>([]);
  const [arrastando, setArrastando] = useState(false);
  const inputXmlRef = useRef<HTMLInputElement>(null);
  const timerAnaliseRef = useRef<number | null>(null);

  /* ---------- Itens extras ---------- */
  const [itensExtras, setItensExtras] = useState<ItemExtra[]>([]);
  const [painelExtraAberto, setPainelExtraAberto] = useState(false);
  const [formExtra, setFormExtra] = useState<FormExtra>(FORM_EXTRA_VAZIO);
  const [tentouSalvarExtra, setTentouSalvarExtra] = useState(false);
  const inputDocRef = useRef<HTMLInputElement>(null);

  useEffect(
    () => () => {
      if (timerAnaliseRef.current !== null) window.clearTimeout(timerAnaliseRef.current);
    },
    [],
  );

  // Deep link (?aba=upload|faturas|status): leva o usuário direto às abas, que ficam abaixo da validação.
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("aba")) return;
    const timer = window.setTimeout(() => rolarPara("secao-abas"), 150);
    return () => window.clearTimeout(timer);
  }, []);

  /* ---------- Derivados: faturas ---------- */
  const faturasCredenciado = useMemo(() => faturas.filter((f) => f.credenciado_id === credenciado.id), [faturas, credenciado.id]);

  const resumo = useMemo(() => {
    let bruto = 0;
    let glosado = 0;
    let aReceber = 0;
    let abertas = 0;
    let comGlosa = 0;
    let emAnalise = 0;
    for (const f of faturasCredenciado) {
      const g = valorGlosado(f);
      bruto += f.valor_bruto;
      glosado += g;
      if (g > 0) comGlosa += 1;
      if (f.status !== "Paga") {
        aReceber += f.valor_liquido;
        abertas += 1;
      }
      if (f.status === "Em análise") emAnalise += 1;
    }
    return { bruto, glosado, aReceber, abertas, comGlosa, emAnalise, taxaGlosa: bruto > 0 ? (glosado / bruto) * 100 : 0 };
  }, [faturasCredenciado]);

  const contagem = useMemo(() => {
    const c = {} as Record<FiltroFatura, number>;
    for (const f of FILTROS) c[f.id] = faturasCredenciado.filter((fat) => passaFiltro(fat, f.id)).length;
    return c;
  }, [faturasCredenciado]);

  const faturasFiltradas = useMemo(() => faturasCredenciado.filter((f) => passaFiltro(f, filtro)), [faturasCredenciado, filtro]);
  const faturaDetalhe = faturas.find((f) => f.id === faturaDetalheId) ?? null;

  /* ---------- Derivados: nova fatura ---------- */
  const processosServidor = useMemo(
    () => (servidor ? PROCESSOS_LIBERADOS.filter((p) => p.matricula === servidor.matricula) : []),
    [servidor],
  );
  const processo = processosServidor.find((p) => p.id === processoId) ?? null;
  const processoVencido = processo ? diasEntre(processo.data_validade) < 0 : false;
  const autorizacoesEmAberto = processosServidor.filter((p) => !faturados[p.id] && diasEntre(p.data_validade) >= 0);
  const exigeAutorizacao = autorizacoesEmAberto.length > 0;

  const xmlAnalisado = !analisando && itensXml.length > 0;
  const totalXml = itensXml.reduce((soma, i) => soma + i.valor_total, 0);
  const totalExtras = itensExtras.reduce((soma, i) => soma + i.quantidade * i.valor_unitario, 0);
  const total = totalXml + totalExtras;
  const extrasSemJustificativa = itensExtras.filter((i) => i.justificativa.trim().length < MIN_JUSTIFICATIVA).length;
  const temRascunho = arquivoXml !== null || itensExtras.length > 0;

  const checklist: ItemChecklist[] = [
    {
      id: "servidor",
      rotulo: "Servidor validado e ativo",
      estado: !servidor ? "pendente" : servidor.ativo ? "ok" : "erro",
      detalhe: !servidor
        ? "Valide a matrícula do servidor atendido."
        : servidor.ativo
          ? `${servidor.nome} · ${servidor.matricula}`
          : "Servidor inativo: o atendimento não tem cobertura.",
      pendencia: !servidor ? "Valide o servidor" : "Servidor inativo",
    },
    {
      id: "autorizacao",
      rotulo: "Autorização vigente vinculada",
      estado: processo ? (processoVencido ? "erro" : "ok") : exigeAutorizacao ? "pendente" : servidor ? "dispensado" : "pendente",
      detalhe: processo
        ? processoVencido
          ? `${processo.id} venceu em ${formatData(processo.data_validade)}: faturamento bloqueado.`
          : `${processo.id} · ${processo.descricao} · válida até ${formatData(processo.data_validade)}`
        : exigeAutorizacao
          ? `Selecione uma das ${plural(autorizacoesEmAberto.length, "autorização liberada", "autorizações liberadas")}.`
          : servidor
            ? "Sem autorização prévia em aberto: faturamento sem vínculo."
            : "Disponível depois da validação do servidor.",
      pendencia: processoVencido ? "Autorização vencida" : "Selecione a autorização",
    },
    {
      id: "xml",
      rotulo: ROTULO_CHECK_XML,
      estado: xmlAnalisado ? "ok" : "pendente",
      detalhe: xmlAnalisado
        ? `Guia ${XML_EXEMPLO.numero_guia} · ${plural(itensXml.length, "item extraído", "itens extraídos")}`
        : "Envie o XML TISS do atendimento.",
      pendencia: "Envie o XML TISS",
    },
    {
      id: "extras",
      rotulo: "Itens extras justificados",
      estado: itensExtras.length === 0 ? "dispensado" : extrasSemJustificativa > 0 ? "erro" : "ok",
      detalhe:
        itensExtras.length === 0
          ? "Nenhum item fora do XML."
          : extrasSemJustificativa > 0
            ? `${plural(extrasSemJustificativa, "item sem", "itens sem")} justificativa suficiente.`
            : `${plural(itensExtras.length, "item justificado", "itens justificados")} · ${formatBRL(totalExtras)}`,
      pendencia: "Justifique os itens extras",
    },
  ];
  const pendencias = checklist.filter((c) => c.estado === "pendente" || c.estado === "erro").map((c) => c.pendencia);

  const passosFeitos = [
    Boolean(servidor?.ativo),
    checklist[1].estado === "ok" || checklist[1].estado === "dispensado",
    xmlAnalisado && extrasSemJustificativa === 0,
    false,
  ];
  const primeiroPendente = passosFeitos.findIndex((feito) => !feito);
  const estadosFluxo: EstadoEtapa[] = passosFeitos.map((feito, i) => (feito ? "concluida" : i === primeiroPendente ? "atual" : "pendente"));
  if (servidor && !servidor.ativo) estadosFluxo[0] = "alerta";
  if (processoVencido) estadosFluxo[1] = "alerta";

  const etapasFluxo: EtapaFluxo[] = [
    { id: "servidor", titulo: "Servidor", descricao: servidor ? nomeCurto(servidor.nome) : "Validar matrícula" },
    {
      id: "autorizacao",
      titulo: "Autorização",
      descricao: processo ? (processoVencido ? "Vencida" : processo.id) : exigeAutorizacao ? "Selecionar" : servidor ? "Dispensada" : "Aguardando servidor",
    },
    {
      id: "itens",
      titulo: "XML e itens",
      descricao: xmlAnalisado ? plural(itensXml.length + itensExtras.length, "item", "itens") : analisando ? "Analisando…" : "Enviar XML TISS",
    },
    {
      id: "revisao",
      titulo: "Revisão",
      descricao: pendencias.length > 0 ? plural(pendencias.length, "pendência", "pendências") : "Pronta para envio",
    },
  ];

  const errosExtra = validarExtra(formExtra);
  const qtdExtra = Number(formExtra.quantidade);
  const valorExtra = lerValor(formExtra.valor);
  const subtotalExtra = !errosExtra.quantidade && !errosExtra.valor ? qtdExtra * valorExtra : null;
  const erroVisivel = (campo: keyof typeof errosExtra) => (tentouSalvarExtra ? errosExtra[campo] : undefined);

  /* ---------- Ações: validação ---------- */

  function validarServidor(entrada: string = matriculaBusca) {
    const termo = normalizarMatricula(entrada);
    setMatriculaBusca(termo);
    if (!termo) {
      setBusca({ estado: "vazio", termo });
      setServidor(null);
      setProcessoId(null);
      return;
    }
    const encontrado = SERVIDORES_TRE.find((s) => s.matricula.toUpperCase() === termo);
    if (!encontrado) {
      setBusca({ estado: "nao_encontrado", termo });
      setServidor(null);
      setProcessoId(null);
      return;
    }
    if (encontrado.matricula !== servidor?.matricula) setProcessoId(null);
    setServidor(encontrado);
    setBusca({ estado: encontrado.ativo ? "encontrado" : "inativo", termo });
  }

  function trocarServidor(origem: "topo" | "fluxo") {
    setServidor(null);
    setProcessoId(null);
    setMatriculaBusca("");
    setBusca({ estado: "ocioso", termo: "" });
    depoisDoRender(() => focarCampo(origem === "fluxo" ? inputFluxoRef.current : inputTopoRef.current));
  }

  function faturarAutorizacao(id: string) {
    const p = processosServidor.find((x) => x.id === id);
    if (!p) return;
    setProcessoId(id);
    if (diasEntre(p.data_validade) < 0) {
      toast({
        variant: "destructive",
        title: "Autorização vencida",
        description: `${p.id} venceu em ${formatData(p.data_validade)}. Solicite a renovação ao TRE-PA antes de faturar.`,
      });
      return;
    }
    irParaNovaFatura();
  }

  /* ---------- Ações: XML ---------- */

  function analisarXml(arquivo: ArquivoXml) {
    if (timerAnaliseRef.current !== null) window.clearTimeout(timerAnaliseRef.current);
    setArquivoXml(arquivo);
    setItensXml([]);
    setAnalisando(true);
    timerAnaliseRef.current = window.setTimeout(() => {
      timerAnaliseRef.current = null;
      setItensXml(XML_EXEMPLO.itens);
      setAnalisando(false);
      toast({
        variant: "success",
        title: "XML analisado",
        description: `${plural(XML_EXEMPLO.itens.length, "item extraído", "itens extraídos")} da guia ${XML_EXEMPLO.numero_guia}.`,
      });
    }, 700);
  }

  function receberArquivoXml(arquivo: File | undefined) {
    if (!arquivo) return;
    if (!/\.xml$/i.test(arquivo.name)) {
      toast({ variant: "destructive", title: "Formato não suportado", description: `"${arquivo.name}" não é um XML. Envie o arquivo TISS (.xml).` });
      return;
    }
    analisarXml({ nome: arquivo.name, tamanho: arquivo.size });
  }

  function removerXml() {
    if (timerAnaliseRef.current !== null) window.clearTimeout(timerAnaliseRef.current);
    timerAnaliseRef.current = null;
    setArquivoXml(null);
    setItensXml([]);
    setAnalisando(false);
  }

  /* ---------- Ações: itens extras ---------- */

  function abrirPainelExtra() {
    setTentouSalvarExtra(false);
    setPainelExtraAberto(true);
  }

  function salvarExtra(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ordem = ["codigo", "descricao", "quantidade", "valor", "justificativa"] as const;
    const primeiroErro = ordem.find((campo) => errosExtra[campo]);
    if (primeiroErro) {
      setTentouSalvarExtra(true);
      document.getElementById(`extra-${primeiroErro}`)?.focus();
      return;
    }
    const item: ItemExtra = {
      id: `EXTRA-${Date.now()}`,
      codigo: formExtra.codigo.trim().toUpperCase(),
      descricao: formExtra.descricao.trim(),
      tipo: formExtra.tipo,
      quantidade: qtdExtra,
      valor_unitario: valorExtra,
      justificativa: formExtra.justificativa.trim(),
      documento_justificativa: formExtra.documento.trim(),
    };
    setItensExtras((prev) => [...prev, item]);
    setFormExtra(FORM_EXTRA_VAZIO);
    setTentouSalvarExtra(false);
    setPainelExtraAberto(false);
    toast({ variant: "success", title: "Item extra adicionado", description: `${item.descricao} · ${formatBRL(item.quantidade * item.valor_unitario)}` });
  }

  function removerExtra(item: ItemExtra) {
    setItensExtras((prev) => prev.filter((i) => i.id !== item.id));
    toast({ title: "Item removido", description: `${item.descricao} saiu da fatura.` });
  }

  /* ---------- Ações: fluxo e envio ---------- */

  function limparItens() {
    removerXml();
    setItensExtras([]);
    setFormExtra(FORM_EXTRA_VAZIO);
    setTentouSalvarExtra(false);
  }

  function resetarFluxo() {
    limparItens();
    setServidor(null);
    setProcessoId(null);
    setMatriculaBusca("");
    setBusca({ estado: "ocioso", termo: "" });
  }

  function descartarRascunho() {
    limparItens();
    setProcessoId(null);
    toast({ title: "Rascunho descartado", description: "XML e itens extras foram removidos." });
  }

  function verFatura(id: string) {
    setAbaParam("faturas");
    setFiltro("todas");
    setFaturaDetalheId(id);
    setDetalheAberto(true);
  }

  function enviarFatura() {
    if (pendencias.length > 0 || !servidor) {
      toast({
        variant: "destructive",
        title: pendencias.length === 1 ? "Falta 1 item para enviar" : `Faltam ${pendencias.length} itens para enviar`,
        description: pendencias.join(" · "),
      });
      rolarPara("secao-revisao");
      return;
    }
    const proximo = Math.max(0, ...faturas.map((f) => Number(f.id.replace(/\D/g, "")) || 0)) + 1;
    const sufixo = String(proximo).padStart(3, "0");
    const id = `FAT-${sufixo}`;
    const [ano, mes] = XML_EXEMPLO.data_execucao.split("-").map(Number);
    const itens: ItemFatura[] = [
      ...itensXml.map((i, n) => ({
        id: `${id}-X${n + 1}`,
        codigo: i.codigo,
        descricao: i.descricao,
        tipo: i.tipo,
        quantidade: i.quantidade,
        valor_unitario: i.valor_unitario,
        valor_total: i.valor_total,
        origem: "XML",
        status_auditoria: "Pendente",
        motivo_glosa: null,
      })),
      ...itensExtras.map((i, n) => ({
        id: `${id}-E${n + 1}`,
        codigo: i.codigo,
        descricao: i.descricao,
        tipo: i.tipo,
        quantidade: i.quantidade,
        valor_unitario: i.valor_unitario,
        valor_total: i.quantidade * i.valor_unitario,
        origem: "Inserido Manualmente",
        status_auditoria: "Pendente",
        motivo_glosa: null,
        justificativa: i.justificativa,
        documento: i.documento_justificativa || null,
      })),
    ];
    const nova: Fatura = {
      id,
      numero_fatura: `FAT-${ano}-${sufixo}`,
      credenciado_id: credenciado.id,
      procedimento_id: null,
      processo_id: processo?.id ?? null,
      matricula: servidor.matricula,
      servidor_nome: servidor.nome,
      descricao: processo?.descricao ?? itensXml[0]?.descricao ?? "Atendimento",
      mes_referencia: mes,
      ano_referencia: ano,
      xml_arquivo: arquivoXml?.nome ?? "",
      pdf_arquivo: itensExtras.find((i) => i.documento_justificativa)?.documento_justificativa ?? null,
      valor_bruto: total,
      valor_liquido: total,
      status: "Em análise",
      motivo_glosa: null,
      observacoes_auditoria: null,
      data_envio: DATA_REFERENCIA_TRE,
      itens,
    };
    setFaturas((prev) => [nova, ...prev]);
    if (processo) setFaturados((prev) => ({ ...prev, [processo.id]: nova.numero_fatura }));
    resetarFluxo();
    toast({
      variant: "success",
      title: "Fatura enviada para auditoria",
      description: `${nova.numero_fatura} · ${formatBRL(total)} · ${nomeCurto(servidor.nome)}`,
      action: (
        <ToastAction altText={`Ver a fatura ${nova.numero_fatura}`} onClick={() => verFatura(id)}>
          Ver fatura
        </ToastAction>
      ),
    });
  }

  /* ---------- Ações: faturas ---------- */

  function irParaNovaFatura() {
    setAbaParam("upload");
    depoisDoRender(() => rolarPara(xmlAnalisado ? "secao-itens" : "secao-xml"));
  }

  function irParaFaturas(novoFiltro: FiltroFatura) {
    setFiltro(novoFiltro);
    setAbaParam("faturas");
    depoisDoRender(() => rolarPara("secao-abas"));
  }

  function abrirDetalhe(fatura: Fatura) {
    setFaturaDetalheId(fatura.id);
    setDetalheAberto(true);
  }

  function exportarFaturas() {
    baixarCSV(`faturas-${credenciado.id.toLowerCase()}-${filtro}.csv`, [
      ["Fatura", "Servidor", "Procedimento", "Competência", "Valor bruto", "Valor glosado", "Valor líquido", "Situação", "Motivo da glosa"],
      ...faturasFiltradas.map((f) => {
        const info = infoFatura(f);
        return [
          f.numero_fatura,
          info.servidor,
          info.procedimento,
          formatCompetencia(f.mes_referencia, f.ano_referencia),
          DECIMAL.format(f.valor_bruto),
          DECIMAL.format(valorGlosado(f)),
          DECIMAL.format(f.valor_liquido),
          getStatusInfo(f.status).rotulo,
          f.motivo_glosa ?? "",
        ];
      }),
    ]);
    toast({ variant: "success", title: "Planilha gerada", description: `${plural(faturasFiltradas.length, "fatura exportada", "faturas exportadas")} em CSV.` });
  }

  function baixarDemonstrativo(f: Fatura) {
    baixarCSV(`demonstrativo-${f.numero_fatura.toLowerCase()}.csv`, [
      ["Código", "Descrição", "Tipo", "Origem", "Quantidade", "Valor unitário", "Subtotal", "Situação", "Motivo da glosa"],
      ...itensDaFatura(f).map((i) => [
        i.codigo,
        i.descricao,
        i.tipo,
        i.origem === "XML" ? "XML" : "Extra",
        i.quantidade,
        DECIMAL.format(i.valor_unitario),
        DECIMAL.format(i.valor_total),
        i.status_auditoria,
        i.motivo_glosa ?? "",
      ]),
    ]);
    toast({ variant: "success", title: "Demonstrativo gerado", description: `${f.numero_fatura} baixado em CSV.` });
  }

  function trocarCredenciado(id: string) {
    if (id === credenciado.id) return;
    const novo = CREDENCIADOS_TRE.find((c) => c.id === id);
    setCredenciadoId(id);
    resetarFluxo();
    setFiltro("todas");
    setDetalheAberto(false);
    if (novo) toast({ title: "Credenciado de demonstração", description: `Agora você está vendo como ${novo.nome_fantasia}.` });
  }

  /* ---------- Cabeçalho ---------- */

  const acoes = (
    <>
      <StatusBadge
        status={credenciado.ativo ? "Ativo" : "Inativo"}
        rotulo={`Contrato ${credenciado.numero_contrato}`}
        className="hidden bg-white lg:inline-flex"
      />
      <Select value={credenciado.id} onValueChange={trocarCredenciado}>
        <SelectTrigger
          aria-label="Ver como (credenciado de demonstração)"
          className="h-10 w-44 justify-start gap-2 rounded-full border-white/20 bg-white/10 pl-3 text-white hover:bg-white/15 focus:ring-2 focus:ring-tre-gold-soft focus:ring-offset-0 sm:w-64 [&>span]:flex-1 [&>span]:text-left [&>svg:last-child]:text-white [&>svg:last-child]:opacity-80"
        >
          <Building2 className="size-4 shrink-0 text-tre-gold-soft" aria-hidden />
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={MENU_SELECT} align="end">
          {CREDENCIADOS_TRE.map((c) => (
            <SelectItem key={c.id} value={c.id} className="min-h-10 rounded-lg">
              {c.nome_fantasia} · {c.tipo}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );

  const contexto = servidor ? (
    <div className="tre-inset inline-flex max-w-full items-center gap-2 rounded-full p-1 text-sm">
      <AvatarIniciais nome={servidor.nome} tamanho="sm" />
      <span className="min-w-0 truncate px-1">
        <span className="text-slate-600">Atendimento: </span>
        <span className="font-semibold text-tre-navy">{nomeCurto(servidor.nome)}</span>
        <span className="font-mono text-xs text-slate-600"> · {servidor.matricula}</span>
      </span>
      {!servidor.ativo && <StatusBadge status="Inativo" />}
      <Button
        type="button"
        variant="ghost"
        onClick={() => trocarServidor("topo")}
        aria-label="Trocar servidor em atendimento"
        className={cn(BOTAO_FANTASMA, "h-10 shrink-0 rounded-full px-4")}
      >
        <RefreshCw aria-hidden />
        Trocar
      </Button>
    </div>
  ) : undefined;

  /* ---------- Render ---------- */

  return (
    <TreShell
      perfil="credenciado"
      titulo="Área do Credenciado"
      subtitulo={
        <>
          {credenciado.nome_fantasia} · CNPJ <span className="tabular-nums">{credenciado.cnpj}</span>
          <span className="lg:hidden"> · Contrato {credenciado.numero_contrato}</span>
        </>
      }
      acoes={acoes}
      contexto={contexto}
    >
      {/* KPIs */}
      <section aria-label="Resumo financeiro" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          rotulo="A receber"
          valor={formatBRL(resumo.aReceber)}
          icone={Wallet}
          tom="green"
          detalhe={plural(resumo.abertas, "fatura em aberto", "faturas em aberto")}
          onClick={() => irParaFaturas("todas")}
          className={cn(ENTRADA, ATRASO[0])}
        />
        <KpiCard
          rotulo="Glosado"
          valor={formatBRL(resumo.glosado)}
          icone={TriangleAlert}
          tom="danger"
          detalhe={resumo.comGlosa > 0 ? `em ${plural(resumo.comGlosa, "fatura", "faturas")}` : "nenhuma glosa"}
          onClick={() => irParaFaturas("glosadas")}
          ativo={aba === "faturas" && filtro === "glosadas"}
          className={cn(ENTRADA, ATRASO[1])}
        />
        <KpiCard
          rotulo="Em análise"
          valor={formatNumero(resumo.emAnalise)}
          icone={Hourglass}
          tom="info"
          detalhe="aguardando a auditoria"
          onClick={() => irParaFaturas("analise")}
          ativo={aba === "faturas" && filtro === "analise"}
          className={cn(ENTRADA, ATRASO[2])}
        />
        <KpiCard
          rotulo="Taxa de glosa"
          valor={formatPct(resumo.taxaGlosa)}
          icone={Percent}
          tom="gold"
          detalhe={`sobre ${formatBRL(resumo.bruto)} faturados`}
          className={cn(ENTRADA, ATRASO[3])}
        />
      </section>

      {/* Validação do servidor + autorizações */}
      <GlassCard
        variante="forte"
        as="section"
        id="secao-validacao"
        aria-labelledby="validacao-titulo"
        className={cn("mt-6 overflow-hidden", ROLAGEM_ALVO, ENTRADA, ATRASO[4])}
      >
        <div className="grid lg:grid-cols-12">
          <div className="p-5 sm:p-6 lg:col-span-5 lg:border-r lg:border-tre-navy/10">
            <SectionHeader
              id="validacao-titulo"
              icone={ScanLine}
              titulo="Validação do servidor"
              descricao="Confirme a elegibilidade antes do atendimento."
            />
            <FormValidacao
              id="matricula-topo"
              valor={matriculaBusca}
              onValor={setMatriculaBusca}
              onValidar={validarServidor}
              busca={busca}
              servidor={servidor}
              inputRef={inputTopoRef}
              anunciar
              className="mt-5"
            />
            {servidor && <CarteirinhaServidor servidor={servidor} className="mt-4 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95" />}
          </div>

          <div className="border-t border-tre-navy/10 bg-tre-navy/[0.03] p-5 sm:p-6 lg:col-span-7 lg:border-t-0">
            <SectionHeader
              nivel={3}
              id="autorizacoes-titulo"
              icone={ShieldCheck}
              titulo="Autorizações liberadas"
              contador={servidor ? processosServidor.length : undefined}
              descricao="Escolha a autorização que será executada e faturada."
            />
            {!servidor ? (
              <EmptyState
                icone={ShieldCheck}
                titulo="As autorizações aparecem aqui"
                descricao="Valide a matrícula do servidor para listar as autorizações liberadas para execução."
                className="mt-4"
              />
            ) : !servidor.ativo ? (
              <EmptyState icone={Ban} titulo="Servidor inativo" descricao="Não há cobertura para novos atendimentos deste servidor." className="mt-4" />
            ) : processosServidor.length === 0 ? (
              <EmptyState
                icone={ClipboardCheck}
                titulo="Nenhuma autorização em aberto"
                descricao="Atendimentos que não exigem autorização prévia podem ser faturados normalmente."
                acao={
                  <Button type="button" onClick={irParaNovaFatura} className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}>
                    <FilePlus2 aria-hidden />
                    Ir para nova fatura
                  </Button>
                }
                className="mt-4"
              />
            ) : (
              <div role="radiogroup" aria-labelledby="autorizacoes-titulo" className="mt-4 grid gap-3 xl:grid-cols-2">
                {processosServidor.map((p) => {
                  const vencida = diasEntre(p.data_validade) < 0;
                  const faturadaEm = faturados[p.id];
                  const selecionada = p.id === processoId;
                  return (
                    <div
                      key={p.id}
                      className={cn(
                        "tre-inset rounded-2xl transition-all duration-200",
                        "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tre-navy",
                        selecionada
                          ? "bg-white/85 shadow-glass ring-2 ring-tre-green/60"
                          : faturadaEm
                            ? "opacity-75"
                            : "hover:bg-white/75 motion-safe:hover:-translate-y-0.5",
                      )}
                    >
                      <label className={cn("flex items-start gap-3 p-4", faturadaEm ? "cursor-not-allowed" : "cursor-pointer")}>
                        <input
                          type="radio"
                          name="autorizacao"
                          value={p.id}
                          checked={selecionada}
                          disabled={Boolean(faturadaEm)}
                          onChange={() => setProcessoId(p.id)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden
                          className={cn(
                            "mt-2 grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
                            selecionada ? "border-tre-green bg-tre-green" : "border-slate-400 bg-white",
                          )}
                        >
                          {selecionada && <span className="size-2 rounded-full bg-white" />}
                        </span>
                        <IconeTipo tipo={p.tipo} />
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold leading-snug text-tre-navy">{p.descricao}</span>
                          <span className="mt-0.5 block text-xs text-slate-600">
                            {p.tipo} · <span className="font-mono">{p.id}</span>
                          </span>
                          <span className="block text-xs text-slate-600">{p.medico_solicitante}</span>
                          <span className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                            {faturadaEm ? <StatusBadge status="Faturado" rotulo={`Faturada · ${faturadaEm}`} /> : <ChipVigencia validade={p.data_validade} />}
                            <span className="text-xs text-slate-600">
                              {formatData(p.data_autorizacao)} → {formatData(p.data_validade)}
                            </span>
                          </span>
                        </span>
                      </label>
                      {selecionada && (
                        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-tre-navy/10 px-4 py-3">
                          {vencida ? (
                            <>
                              <p className="flex min-w-0 flex-1 items-start gap-2 text-xs font-medium text-tre-danger-ink">
                                <Ban aria-hidden className="mt-0.5 size-4 shrink-0" />
                                Vencida em {formatData(p.data_validade)}: faturamento bloqueado. Solicite a renovação ao TRE-PA.
                              </p>
                              <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setProcessoId(null)}
                                aria-label={`Desmarcar a autorização vencida ${p.id}`}
                                className={cn(BOTAO_FANTASMA, "h-10 shrink-0 rounded-xl px-3")}
                              >
                                <X aria-hidden />
                                Desmarcar
                              </Button>
                            </>
                          ) : (
                            <>
                              <span className="text-xs font-medium text-tre-green-ink">Selecionada para faturamento</span>
                              <Button
                                type="button"
                                onClick={() => faturarAutorizacao(p.id)}
                                className={cn(treBotao({ tom: "sucesso" }), "h-10 rounded-xl px-4")}
                              >
                                Faturar esta autorização
                                <ArrowRight aria-hidden />
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Abas */}
      <Tabs
        value={aba}
        onValueChange={setAbaParam}
        id="secao-abas"
        className={cn("mt-8", ROLAGEM_ALVO)}
      >
        <GlassTabsList aria-label="Seções do credenciado" className={cn(ENTRADA, ATRASO[5])}>
          <GlassTabsTrigger value="upload">
            <FilePlus2 className="size-4" aria-hidden />
            Nova fatura
          </GlassTabsTrigger>
          <GlassTabsTrigger value="faturas" contador={contagem.glosadas}>
            <Receipt className="size-4" aria-hidden />
            Minhas faturas
          </GlassTabsTrigger>
        </GlassTabsList>

        {/* ============ Nova fatura ============ */}
        <TabsContent value="upload" className="mt-5">
          <div className="space-y-6">
            <GlassCard as="section" aria-labelledby="nova-fatura-titulo" className={cn("p-5 sm:p-6", ENTRADA, ATRASO[0])}>
              <SectionHeader
                id="nova-fatura-titulo"
                icone={FilePlus2}
                titulo="Nova fatura"
                descricao="Do atendimento ao envio para a auditoria do TRE-PA em quatro passos."
                acoes={
                  temRascunho ? (
                    <Button type="button" variant="ghost" onClick={descartarRascunho} className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-4")}>
                      <Trash2 aria-hidden />
                      Descartar rascunho
                    </Button>
                  ) : undefined
                }
              />
              <FluxoStepper etapas={etapasFluxo} estados={estadosFluxo} rotulo="Passos da nova fatura" className="mt-6" />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {/* Passo 1 */}
                <div className="tre-inset rounded-2xl p-4">
                  <RotuloPasso numero={1} titulo="Servidor atendido" />
                  {servidor ? (
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <AvatarIniciais nome={servidor.nome} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-tre-navy">{servidor.nome}</p>
                        <p className="text-xs text-slate-600">
                          <span className="font-mono">{servidor.matricula}</span> · {servidor.cargo}
                        </p>
                      </div>
                      <StatusBadge status={servidor.ativo ? "Ativo" : "Inativo"} />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => trocarServidor("fluxo")}
                        aria-label="Trocar servidor"
                        className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
                      >
                        <RefreshCw aria-hidden />
                        Trocar
                      </Button>
                    </div>
                  ) : (
                    <FormValidacao
                      id="matricula-fluxo"
                      valor={matriculaBusca}
                      onValor={setMatriculaBusca}
                      onValidar={validarServidor}
                      busca={busca}
                      servidor={servidor}
                      inputRef={inputFluxoRef}
                      compacto
                      className="mt-3"
                    />
                  )}
                </div>

                {/* Passo 2 */}
                <div className="tre-inset rounded-2xl p-4">
                  <RotuloPasso numero={2} titulo="Autorização" />
                  {!servidor ? (
                    <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                      <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0" />
                      Valide o servidor para listar as autorizações liberadas.
                    </p>
                  ) : processo ? (
                    <div className="mt-3">
                      <div className="flex items-start gap-3">
                        <IconeTipo tipo={processo.tipo} />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold leading-snug text-tre-navy">{processo.descricao}</p>
                          <p className="text-xs text-slate-600">
                            <span className="font-mono">{processo.id}</span> · válida até {formatData(processo.data_validade)}
                          </p>
                          <div className="mt-2">
                            <ChipVigencia validade={processo.data_validade} />
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => rolarPara("secao-validacao")}
                          aria-label="Trocar autorização"
                          className={cn(BOTAO_FANTASMA, "h-10 shrink-0 rounded-xl px-3")}
                        >
                          <RefreshCw aria-hidden />
                          Trocar
                        </Button>
                      </div>
                      {processoVencido && (
                        <p className="tre-tone-danger mt-3 flex items-start gap-2 rounded-xl px-3 py-2 text-xs font-medium">
                          <Ban aria-hidden className="mt-0.5 size-4 shrink-0" />
                          Autorização vencida: o envio fica bloqueado até a renovação ou a escolha de outra autorização.
                        </p>
                      )}
                    </div>
                  ) : exigeAutorizacao ? (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-slate-700">
                        {plural(autorizacoesEmAberto.length, "autorização liberada", "autorizações liberadas")} para{" "}
                        {nomeCurto(servidor.nome)}.
                      </p>
                      <Button type="button" onClick={() => rolarPara("secao-validacao")} className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}>
                        <ShieldCheck aria-hidden />
                        Escolher autorização
                      </Button>
                    </div>
                  ) : (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <ToneBadge tom="neutral">Dispensada</ToneBadge>
                      <p className="text-sm text-slate-700">Sem autorização prévia em aberto: a fatura segue sem vínculo.</p>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>

            {/* Passo 3: XML TISS */}
            <GlassCard as="section" id="secao-xml" aria-labelledby="xml-titulo" className={cn("p-5 sm:p-6", ROLAGEM_ALVO, ENTRADA, ATRASO[1])}>
              <SectionHeader
                id="xml-titulo"
                icone={FileSearch}
                titulo={
                  <>
                    <span className="sr-only">Passo 3: </span>XML TISS
                  </>
                }
                descricao="Os itens são extraídos automaticamente do arquivo da guia."
              />
              <input
                ref={inputXmlRef}
                type="file"
                accept=".xml,text/xml,application/xml"
                hidden
                onChange={(e) => {
                  receberArquivoXml(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />

              {xmlAnalisado && arquivoXml ? (
                <div className="tre-inset mt-5 rounded-2xl p-4 motion-safe:animate-in motion-safe:fade-in-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-xl bg-tre-green/10 text-tre-green-ink">
                      <FileCode2 className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-tre-navy">{arquivoXml.nome}</p>
                      <p className="text-xs text-slate-600">
                        {arquivoXml.tamanho !== null ? formatTamanho(arquivoXml.tamanho) : "Arquivo de demonstração"} · guia{" "}
                        {XML_EXEMPLO.numero_guia}
                      </p>
                    </div>
                    <ToneBadge tom="success">
                      <BadgeCheck className="size-3" aria-hidden />
                      XML válido
                    </ToneBadge>
                    <div className="flex items-center gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => inputXmlRef.current?.click()}
                        aria-label="Trocar arquivo XML"
                        className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
                      >
                        <RefreshCw aria-hidden />
                        Trocar
                      </Button>
                      <Button type="button" variant="ghost" size="icon" onClick={removerXml} aria-label="Remover o XML" className={BOTAO_REMOVER}>
                        <X aria-hidden />
                      </Button>
                    </div>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-tre-navy/10 pt-4 text-sm sm:grid-cols-4">
                    <Dado rotulo="Nº da guia" valor={<span className="font-mono">{XML_EXEMPLO.numero_guia}</span>} />
                    <Dado rotulo="Execução" valor={<span className="tabular-nums">{formatData(XML_EXEMPLO.data_execucao)}</span>} />
                    <Dado rotulo="Senha" valor={<span className="font-mono">{XML_EXEMPLO.senha}</span>} />
                    <Dado rotulo="Itens extraídos" valor={<span className="tabular-nums">{formatNumero(itensXml.length)}</span>} />
                  </dl>
                </div>
              ) : (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "copy";
                    if (!arrastando) setArrastando(true);
                  }}
                  onDragLeave={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setArrastando(false);
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setArrastando(false);
                    receberArquivoXml(e.dataTransfer.files?.[0]);
                  }}
                  className={cn(
                    "tre-inset mt-5 flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-tre-navy/20 px-5 py-10 text-center transition-colors sm:py-12",
                    arrastando && "border-tre-green bg-white/80",
                  )}
                >
                  {analisando ? (
                    <div role="status" className="flex flex-col items-center gap-3">
                      <Loader2 aria-hidden className="size-10 text-tre-green motion-safe:animate-spin" />
                      <p className="font-semibold text-tre-navy">Analisando {arquivoXml?.nome ?? "o XML"}…</p>
                      <p className="text-sm text-slate-600">Conferindo a estrutura TISS e extraindo os itens.</p>
                    </div>
                  ) : (
                    <>
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-tre-green to-tre-navy text-white shadow-lg transition-transform",
                          arrastando && "motion-safe:scale-110",
                        )}
                      >
                        <CloudUpload className="size-8" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-tre-navy">{arrastando ? "Solte o arquivo para analisar" : "Arraste o XML TISS aqui"}</p>
                        <p className="mt-0.5 text-sm text-slate-600">ou escolha o arquivo no computador · formato .xml</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Button type="button" onClick={() => inputXmlRef.current?.click()} className={cn(treBotao({ tom: "sucesso" }), "h-11 rounded-xl px-5")}>
                          <FileCode2 aria-hidden />
                          Selecionar XML
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => analisarXml({ nome: `guia-tiss-${XML_EXEMPLO.numero_guia}.xml`, tamanho: null })}
                          className={cn(BOTAO_FANTASMA, "h-11 rounded-xl px-5")}
                        >
                          <Sparkles aria-hidden />
                          Usar XML de exemplo
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </GlassCard>

            {/* Itens da fatura (XML + extras) */}
            <GlassCard variante="forte" as="section" id="secao-itens" aria-labelledby="itens-titulo" className={cn("overflow-hidden", ROLAGEM_ALVO, ENTRADA, ATRASO[2])}>
              <div className="p-5 sm:p-6">
                <SectionHeader
                  id="itens-titulo"
                  icone={ListChecks}
                  titulo="Itens da fatura"
                  contador={itensXml.length + itensExtras.length}
                  descricao="Itens do XML e extras não constantes na guia, sempre com justificativa."
                  acoes={
                    <Button type="button" onClick={abrirPainelExtra} className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}>
                      <Plus aria-hidden />
                      Adicionar item extra
                    </Button>
                  }
                />
              </div>

              {itensXml.length + itensExtras.length === 0 ? (
                <div className="px-5 pb-6 sm:px-6">
                  <EmptyState
                    icone={FileSearch}
                    titulo="Nenhum item ainda"
                    descricao="Envie o XML TISS para extrair os itens automaticamente ou adicione itens que não constam na guia."
                  />
                </div>
              ) : (
                <>
                  {/* md+: tabela */}
                  <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-sm">
                      <caption className="sr-only">Itens da nova fatura, com origem, quantidade e valores</caption>
                      <thead>
                        <tr className="border-y border-tre-navy/10 bg-tre-navy/[0.04] text-left">
                          <th scope="col" className={TH}>Código</th>
                          <th scope="col" className={TH}>Descrição</th>
                          <th scope="col" className={TH}>Origem</th>
                          <th scope="col" className={cn(TH, "text-right")}>Qtd</th>
                          <th scope="col" className={cn(TH, "text-right")}>Vl. unit.</th>
                          <th scope="col" className={cn(TH, "text-right")}>Subtotal</th>
                          <th scope="col" className={cn(TH, "w-14")}>
                            <span className="sr-only">Ações</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {itensXml.map((item) => (
                          <tr key={`xml-${item.codigo}`} className="border-b border-tre-navy/10 transition-colors hover:bg-white/60">
                            <td className="px-4 py-3 font-mono text-xs text-slate-700">{item.codigo}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <IconeTipo tipo={item.tipo} />
                                <div className="min-w-0">
                                  <p className="font-medium text-slate-900">{item.descricao}</p>
                                  <p className="text-xs text-slate-600">{item.tipo}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <OrigemBadge origem="XML" />
                            </td>
                            <td className="px-4 py-3 text-right tabular-nums">{formatNumero(item.quantidade)}</td>
                            <td className="px-4 py-3 text-right tabular-nums text-slate-700">{formatBRL(item.valor_unitario)}</td>
                            <td className="px-4 py-3 text-right font-semibold tabular-nums text-tre-navy">{formatBRL(item.valor_total)}</td>
                            <td className="px-2 py-3" />
                          </tr>
                        ))}
                        {itensExtras.map((item) => (
                          <tr key={item.id} className="border-b border-tre-navy/10 bg-tre-warn/[0.06] transition-colors hover:bg-white/60">
                            <td className="px-4 py-3 font-mono text-xs text-slate-700">{item.codigo}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-start gap-3">
                                <IconeTipo tipo={item.tipo} />
                                <div className="min-w-0">
                                  <p className="font-medium text-slate-900">{item.descricao}</p>
                                  <p className="line-clamp-2 max-w-md text-xs text-slate-600">
                                    {item.tipo} · {item.justificativa}
                                  </p>
                                  {item.documento_justificativa && (
                                    <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-tre-navy">
                                      <Paperclip className="size-3" aria-hidden />
                                      {item.documento_justificativa}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <OrigemBadge origem="Extra" />
                            </td>
                            <td className="px-4 py-3 text-right tabular-nums">{formatNumero(item.quantidade)}</td>
                            <td className="px-4 py-3 text-right tabular-nums text-slate-700">{formatBRL(item.valor_unitario)}</td>
                            <td className="px-4 py-3 text-right font-semibold tabular-nums text-tre-navy">
                              {formatBRL(item.quantidade * item.valor_unitario)}
                            </td>
                            <td className="px-2 py-3 text-right">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removerExtra(item)}
                                aria-label={`Remover ${item.descricao}`}
                                className={BOTAO_REMOVER}
                              >
                                <Trash2 aria-hidden />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="text-sm">
                        <tr>
                          <td colSpan={5} className="px-4 pt-4 text-right text-slate-600">
                            Itens do XML ({formatNumero(itensXml.length)})
                          </td>
                          <td className="px-4 pt-4 text-right tabular-nums text-slate-900">{formatBRL(totalXml)}</td>
                          <td />
                        </tr>
                        <tr>
                          <td colSpan={5} className="px-4 pt-1 text-right text-slate-600">
                            Itens extras ({formatNumero(itensExtras.length)})
                          </td>
                          <td className="px-4 pt-1 text-right tabular-nums text-slate-900">{formatBRL(totalExtras)}</td>
                          <td />
                        </tr>
                        <tr>
                          <td colSpan={5} className="px-4 pb-5 pt-2 text-right font-semibold text-tre-navy">
                            Total da fatura
                          </td>
                          <td className="px-4 pb-5 pt-2 text-right text-lg font-bold tabular-nums text-tre-navy">{formatBRL(total)}</td>
                          <td />
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* < md: cartões */}
                  <ul className="space-y-3 px-4 pb-4 md:hidden">
                    {itensXml.map((item) => (
                      <li key={`xml-${item.codigo}`} className="tre-inset rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                          <IconeTipo tipo={item.tipo} />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-slate-900">{item.descricao}</p>
                            <p className="text-xs text-slate-600">
                              <span className="font-mono">{item.codigo}</span> · {item.tipo}
                            </p>
                          </div>
                          <OrigemBadge origem="XML" />
                        </div>
                        <div className="mt-3 flex items-baseline justify-between gap-2 text-sm">
                          <span className="tabular-nums text-slate-600">
                            {formatNumero(item.quantidade)} × {formatBRL(item.valor_unitario)}
                          </span>
                          <span className="font-semibold tabular-nums text-tre-navy">{formatBRL(item.valor_total)}</span>
                        </div>
                      </li>
                    ))}
                    {itensExtras.map((item) => (
                      <li key={item.id} className="tre-inset rounded-2xl p-4 ring-1 ring-tre-warn/40">
                        <div className="flex items-start gap-3">
                          <IconeTipo tipo={item.tipo} />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-slate-900">{item.descricao}</p>
                            <p className="text-xs text-slate-600">
                              <span className="font-mono">{item.codigo}</span> · {item.tipo}
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removerExtra(item)}
                            aria-label={`Remover ${item.descricao}`}
                            className={cn(BOTAO_REMOVER, "-mr-2 -mt-2")}
                          >
                            <Trash2 aria-hidden />
                          </Button>
                        </div>
                        <p className="mt-2 text-xs text-slate-700">
                          <span className="font-semibold">Justificativa:</span> {item.justificativa}
                        </p>
                        {item.documento_justificativa && (
                          <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-tre-navy">
                            <Paperclip className="size-3" aria-hidden />
                            {item.documento_justificativa}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                          <OrigemBadge origem="Extra" />
                          <span className="tabular-nums text-slate-600">
                            {formatNumero(item.quantidade)} × {formatBRL(item.valor_unitario)}
                          </span>
                          <span className="font-semibold tabular-nums text-tre-navy">{formatBRL(item.quantidade * item.valor_unitario)}</span>
                        </div>
                      </li>
                    ))}
                    <li className="rounded-2xl bg-tre-navy/[0.06] px-4 py-3">
                      <dl className="space-y-1 text-sm">
                        <div className="flex items-baseline justify-between gap-2 text-slate-600">
                          <dt>Itens do XML ({formatNumero(itensXml.length)})</dt>
                          <dd className="tabular-nums text-slate-900">{formatBRL(totalXml)}</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-2 text-slate-600">
                          <dt>Itens extras ({formatNumero(itensExtras.length)})</dt>
                          <dd className="tabular-nums text-slate-900">{formatBRL(totalExtras)}</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-2 border-t border-tre-navy/10 pt-2">
                          <dt className="font-semibold text-tre-navy">Total da fatura</dt>
                          <dd className="text-lg font-bold tabular-nums text-tre-navy">{formatBRL(total)}</dd>
                        </div>
                      </dl>
                    </li>
                  </ul>
                </>
              )}
            </GlassCard>

            {/* Passo 4: revisão */}
            <GlassCard as="section" id="secao-revisao" aria-labelledby="revisao-titulo" className={cn("p-5 sm:p-6", ROLAGEM_ALVO, ENTRADA, ATRASO[3])}>
              <SectionHeader
                id="revisao-titulo"
                icone={ClipboardCheck}
                titulo={
                  <>
                    <span className="sr-only">Passo 4: </span>Revisão e pré-conferência
                  </>
                }
                descricao="Pendências bloqueiam o envio. Resolver tudo aqui reduz o risco de glosa."
              />
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {checklist.map((item) => (
                  <LinhaChecklist key={item.id} item={item} />
                ))}
              </ul>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">A auditoria do TRE-PA também confere</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {OUTROS_CHECKS_AUDITORIA.map((c) => (
                    <li key={c.id}>
                      <ToneBadge tom="neutral">{c.item}</ToneBadge>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>

            {/* Barra de resumo e envio (sticky: nunca fixed dentro de vidro) */}
            <div role="region" aria-label="Resumo da fatura" className={cn("tre-glass-navy tre-no-print sticky bottom-4 z-30 rounded-2xl px-4 py-3 sm:px-5 sm:py-4", ENTRADA, ATRASO[4])}>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
                <dl className="hidden flex-1 grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid lg:flex lg:flex-wrap lg:items-center lg:gap-x-8">
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-white/75">Servidor</dt>
                    <dd className="truncate font-semibold text-white">{servidor ? nomeCurto(servidor.nome) : "—"}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-white/75">Autorização</dt>
                    <dd className="truncate font-mono font-semibold text-white">
                      {processo ? processo.id : servidor && !exigeAutorizacao ? "Dispensada" : "—"}
                    </dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-white/75">Itens XML</dt>
                    <dd className="truncate font-semibold tabular-nums text-white">
                      {formatNumero(itensXml.length)} · {formatBRL(totalXml)}
                    </dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-white/75">Extras</dt>
                    <dd className="truncate font-semibold tabular-nums text-white">
                      {formatNumero(itensExtras.length)} · {formatBRL(totalExtras)}
                    </dd>
                  </div>
                </dl>
                <div className="flex items-center gap-3">
                  <div className="min-w-0 flex-1 lg:flex-none lg:text-right">
                    <p className="text-xs font-medium text-white/75">Total da fatura</p>
                    <p className="text-xl font-bold tabular-nums text-tre-gold-soft">{formatBRL(total)}</p>
                  </div>
                  {pendencias.length > 0 && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-tre-warn px-2.5 py-1 text-xs font-bold text-tre-navy-deep">
                      <TriangleAlert className="size-3.5" aria-hidden />
                      <span className="tabular-nums">{pendencias.length}</span>
                      <span className="hidden sm:inline">{pendencias.length === 1 ? "pendência" : "pendências"}</span>
                    </span>
                  )}
                  <Button
                    type="button"
                    onClick={enviarFatura}
                    aria-disabled={pendencias.length > 0}
                    aria-describedby="resumo-pendencias"
                    className={cn(treBotao({ tom: "ouro" }), "tre-ring h-11 shrink-0 rounded-xl px-5", pendencias.length > 0 && "opacity-80")}
                  >
                    <Send aria-hidden />
                    Enviar fatura
                  </Button>
                </div>
              </div>
              <p id="resumo-pendencias" className="sr-only">
                {pendencias.length > 0 ? `Pendências: ${pendencias.join("; ")}.` : "Fatura pronta para envio."}
              </p>
            </div>
          </div>
        </TabsContent>

        {/* ============ Minhas faturas ============ */}
        <TabsContent value="faturas" className="mt-5">
          <GlassCard variante="forte" as="section" aria-labelledby="faturas-titulo" className={cn("overflow-hidden", ENTRADA)}>
            <div className="space-y-4 p-5 sm:p-6">
              <SectionHeader
                id="faturas-titulo"
                icone={Receipt}
                titulo="Minhas faturas"
                contador={faturasCredenciado.length}
                descricao="Acompanhe auditoria, glosas e pagamentos. Abra uma fatura para ver o detalhamento por item."
                acoes={
                  <Button
                    type="button"
                    onClick={exportarFaturas}
                    disabled={faturasFiltradas.length === 0}
                    className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}
                  >
                    <Download aria-hidden />
                    Exportar CSV
                  </Button>
                }
              />
              <div role="group" aria-label="Filtrar faturas por situação" className="tre-scroll-x -mx-1 flex gap-2 px-1 pb-1">
                {FILTROS.map((f) => {
                  const ativo = filtro === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      aria-pressed={ativo}
                      onClick={() => setFiltro(f.id)}
                      className={cn(
                        "tre-ring inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors",
                        ativo ? "bg-tre-navy text-white shadow-md" : "bg-white/70 text-slate-700 ring-1 ring-tre-navy/10 hover:bg-white",
                      )}
                    >
                      {f.rotulo}
                      <span
                        className={cn(
                          "min-w-5 rounded-full px-1.5 text-center text-[11px] font-bold tabular-nums",
                          ativo ? "bg-white/20 text-white" : "tre-tone-neutral",
                        )}
                      >
                        {contagem[f.id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {faturasFiltradas.length === 0 ? (
              <div className="px-5 pb-6 sm:px-6">
                {faturasCredenciado.length === 0 ? (
                  <EmptyState
                    icone={Receipt}
                    titulo="Nenhuma fatura enviada ainda"
                    descricao={`${credenciado.nome_fantasia} ainda não tem faturas. Valide um servidor e envie o XML TISS para começar.`}
                    acao={
                      <Button type="button" onClick={irParaNovaFatura} className={cn(treBotao({ tom: "sucesso" }), "h-10 rounded-xl px-4")}>
                        <FilePlus2 aria-hidden />
                        Nova fatura
                      </Button>
                    }
                  />
                ) : (
                  <EmptyState
                    icone={Receipt}
                    titulo="Nenhuma fatura nesta situação"
                    descricao="Troque o filtro para ver as demais faturas."
                    acao={
                      <Button type="button" onClick={() => setFiltro("todas")} className={cn(BOTAO_VIDRO, "h-10 rounded-xl px-4")}>
                        Ver todas
                      </Button>
                    }
                  />
                )}
              </div>
            ) : (
              <>
                {/* lg+: tabela */}
                <div className="hidden overflow-x-auto lg:block">
                  <table className="w-full min-w-[1040px] text-sm">
                    <caption className="sr-only">Faturas do credenciado, com valores, situação e motivo de glosa</caption>
                    <thead>
                      <tr className="border-y border-tre-navy/10 bg-tre-navy/[0.04] text-left">
                        <th scope="col" className={TH}>Fatura</th>
                        <th scope="col" className={TH}>Servidor e procedimento</th>
                        <th scope="col" className={TH}>Competência</th>
                        <th scope="col" className={TH}>Itens</th>
                        <th scope="col" className={cn(TH, "text-right")}>Bruto</th>
                        <th scope="col" className={cn(TH, "text-right")}>Glosado</th>
                        <th scope="col" className={cn(TH, "text-right")}>Líquido</th>
                        <th scope="col" className={TH}>Situação</th>
                        <th scope="col" className={TH}>
                          <span className="sr-only">Ações</span>
                        </th>
                      </tr>
                    </thead>
                    {faturasFiltradas.map((f) => {
                      const info = infoFatura(f);
                      const glosado = valorGlosado(f);
                      return (
                        <tbody
                          key={f.id}
                          onClick={() => abrirDetalhe(f)}
                          className="cursor-pointer border-b border-tre-navy/10 transition-colors last:border-0 hover:bg-white/60"
                        >
                          <tr>
                            <td className="px-4 py-3 align-top">
                              <p className="font-semibold text-tre-navy">{f.numero_fatura}</p>
                              <p className="text-xs text-slate-600">{f.data_envio ? `Enviada em ${formatData(f.data_envio)}` : f.xml_arquivo}</p>
                            </td>
                            <td className="px-4 py-3 align-top">
                              <p className="font-medium text-slate-900">{info.servidor}</p>
                              <p className="text-xs text-slate-600">{info.procedimento}</p>
                            </td>
                            <td className="px-4 py-3 align-top tabular-nums text-slate-700">{formatCompetencia(f.mes_referencia, f.ano_referencia)}</td>
                            <td className="px-4 py-3 align-top">
                              <ResumoItens itens={itensDaFatura(f)} />
                            </td>
                            <td className="px-4 py-3 text-right align-top tabular-nums text-slate-700">{formatBRL(f.valor_bruto)}</td>
                            <td className={cn("px-4 py-3 text-right align-top tabular-nums", glosado > 0 ? "font-semibold text-tre-danger-ink" : "text-slate-600")}>
                              {glosado > 0 ? formatBRL(glosado) : "—"}
                            </td>
                            <td className="px-4 py-3 text-right align-top font-semibold tabular-nums text-tre-navy">{formatBRL(f.valor_liquido)}</td>
                            <td className="px-4 py-3 align-top">
                              <StatusBadge status={f.status} />
                              <BarraAprovacao fatura={f} className="mt-2 w-24" />
                            </td>
                            <td className="px-2 py-2 text-right align-top">
                              <Button
                                type="button"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  abrirDetalhe(f);
                                }}
                                aria-label={`Ver detalhes da fatura ${f.numero_fatura}`}
                                className={cn(BOTAO_FANTASMA, "h-10 rounded-xl px-3")}
                              >
                                <Eye aria-hidden />
                                Detalhes
                              </Button>
                            </td>
                          </tr>
                          {f.motivo_glosa && (
                            <tr>
                              <td colSpan={9} className="px-4 pb-4">
                                <p className="tre-tone-danger flex items-start gap-2 rounded-xl px-3 py-2 text-xs">
                                  <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                                  <span>
                                    <span className="font-semibold">Motivo da glosa:</span> {f.motivo_glosa}
                                  </span>
                                </p>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      );
                    })}
                  </table>
                </div>

                {/* < lg: cartões */}
                <ul className="space-y-3 px-4 pb-5 sm:px-6 lg:hidden">
                  {faturasFiltradas.map((f) => {
                    const info = infoFatura(f);
                    const glosado = valorGlosado(f);
                    return (
                      <li key={f.id}>
                        <button
                          type="button"
                          onClick={() => abrirDetalhe(f)}
                          className="tre-inset tre-ring block w-full rounded-2xl p-4 text-left transition-colors hover:bg-white/80"
                        >
                          <span className="flex items-start justify-between gap-2">
                            <span className="min-w-0">
                              <span className="block font-semibold text-tre-navy">{f.numero_fatura}</span>
                              <span className="block text-xs text-slate-600">
                                {formatCompetencia(f.mes_referencia, f.ano_referencia)}
                                {f.data_envio && ` · enviada em ${formatData(f.data_envio)}`}
                              </span>
                            </span>
                            <StatusBadge status={f.status} />
                          </span>
                          <span className="mt-2 block text-sm font-medium text-slate-900">{info.servidor}</span>
                          <span className="block text-xs text-slate-600">{info.procedimento}</span>
                          <span className="mt-3 grid grid-cols-3 gap-2 text-xs">
                            <span>
                              <span className="block text-slate-600">Bruto</span>
                              <span className="block font-semibold tabular-nums text-slate-900">{formatBRL(f.valor_bruto)}</span>
                            </span>
                            <span>
                              <span className="block text-slate-600">Glosado</span>
                              <span className={cn("block font-semibold tabular-nums", glosado > 0 ? "text-tre-danger-ink" : "text-slate-700")}>
                                {glosado > 0 ? formatBRL(glosado) : "—"}
                              </span>
                            </span>
                            <span>
                              <span className="block text-slate-600">Líquido</span>
                              <span className="block font-bold tabular-nums text-tre-navy">{formatBRL(f.valor_liquido)}</span>
                            </span>
                          </span>
                          <BarraAprovacao fatura={f} className="mt-3" />
                          <span className="mt-3 flex flex-wrap items-center justify-between gap-2">
                            <ResumoItens itens={itensDaFatura(f)} />
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-tre-navy">
                              <Eye className="size-3.5" aria-hidden />
                              Detalhes
                            </span>
                          </span>
                          {f.motivo_glosa && (
                            <span className="tre-tone-danger mt-3 flex items-start gap-2 rounded-xl px-3 py-2 text-xs">
                              <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                              <span>
                                <span className="font-semibold">Motivo da glosa:</span> {f.motivo_glosa}
                              </span>
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </GlassCard>
        </TabsContent>
      </Tabs>

      {/* Painel: detalhe da fatura */}
      <GlassDialog open={detalheAberto && faturaDetalhe !== null} onOpenChange={setDetalheAberto}>
        {faturaDetalhe && (
          <GlassPainel
            lado="direita"
            largura="lg"
            icone={Receipt}
            titulo={`Fatura ${faturaDetalhe.numero_fatura}`}
            descricao={`${infoFatura(faturaDetalhe).servidor} · ${formatCompetencia(faturaDetalhe.mes_referencia, faturaDetalhe.ano_referencia)}`}
            rodape={
              <>
                <Button type="button" onClick={() => baixarDemonstrativo(faturaDetalhe)} className={cn(BOTAO_VIDRO, "h-11 rounded-xl px-4")}>
                  <Download aria-hidden />
                  Baixar demonstrativo
                </Button>
                <GlassDialogClose asChild>
                  <Button type="button" className={cn(treBotao({ tom: "primario" }), "h-11 rounded-xl px-5")}>
                    Fechar
                  </Button>
                </GlassDialogClose>
              </>
            }
          >
            <DetalheFatura fatura={faturaDetalhe} />
          </GlassPainel>
        )}
      </GlassDialog>

      {/* Painel: adicionar item extra */}
      <GlassDialog
        open={painelExtraAberto}
        onOpenChange={(aberto) => {
          setPainelExtraAberto(aberto);
          if (!aberto) setTentouSalvarExtra(false);
        }}
      >
        <GlassPainel
          lado="direita"
          largura="md"
          icone={Plus}
          titulo="Adicionar item"
          descricao="Insumo, material ou procedimento usado no atendimento e que não consta no XML TISS."
          rodape={
            <>
              <GlassDialogClose asChild>
                <Button type="button" variant="ghost" className={cn(BOTAO_FANTASMA, "h-11 rounded-xl px-5")}>
                  Cancelar
                </Button>
              </GlassDialogClose>
              <Button type="submit" form="form-item-extra" className={cn(treBotao({ tom: "sucesso" }), "h-11 rounded-xl px-5")}>
                <Plus aria-hidden />
                Adicionar item
              </Button>
            </>
          }
        >
          <form id="form-item-extra" noValidate onSubmit={salvarExtra} className="space-y-5">
            <fieldset>
              <legend className="text-sm font-medium text-tre-navy">Tipo</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {TIPOS_ITEM.map((tipo) => {
                  const ativo = formExtra.tipo === tipo;
                  const Icone = TIPO_VISUAL[tipo].icone;
                  return (
                    <label
                      key={tipo}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-3 text-sm font-medium transition-colors",
                        "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tre-navy",
                        ativo ? "bg-tre-navy text-white shadow-md" : "bg-white/80 text-slate-700 ring-1 ring-tre-navy/15 hover:bg-white",
                      )}
                    >
                      <input
                        type="radio"
                        name="extra-tipo"
                        value={tipo}
                        checked={ativo}
                        onChange={() => setFormExtra((f) => ({ ...f, tipo }))}
                        className="sr-only"
                      />
                      <Icone className="size-4 shrink-0" aria-hidden />
                      {tipo}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div>
                <Label htmlFor="extra-codigo" className="text-tre-navy">
                  Código
                </Label>
                <Input
                  id="extra-codigo"
                  value={formExtra.codigo}
                  onChange={(e) => setFormExtra((f) => ({ ...f, codigo: e.target.value }))}
                  placeholder="Ex.: INS-010"
                  autoComplete="off"
                  aria-invalid={Boolean(erroVisivel("codigo"))}
                  aria-describedby={erroVisivel("codigo") ? "extra-codigo-erro" : undefined}
                  className={cn(TRE_CAMPO, "mt-1.5 font-mono uppercase placeholder:normal-case")}
                />
                {erroVisivel("codigo") && (
                  <p id="extra-codigo-erro" className="mt-1 text-xs text-tre-danger-ink">
                    {erroVisivel("codigo")}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="extra-descricao" className="text-tre-navy">
                  Descrição
                </Label>
                <Input
                  id="extra-descricao"
                  value={formExtra.descricao}
                  onChange={(e) => setFormExtra((f) => ({ ...f, descricao: e.target.value }))}
                  placeholder="Descrição do item"
                  aria-invalid={Boolean(erroVisivel("descricao"))}
                  aria-describedby={erroVisivel("descricao") ? "extra-descricao-erro" : undefined}
                  className={cn(TRE_CAMPO, "mt-1.5")}
                />
                {erroVisivel("descricao") && (
                  <p id="extra-descricao-erro" className="mt-1 text-xs text-tre-danger-ink">
                    {erroVisivel("descricao")}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="extra-quantidade" className="text-tre-navy">
                  Quantidade
                </Label>
                <Input
                  id="extra-quantidade"
                  inputMode="numeric"
                  value={formExtra.quantidade}
                  onChange={(e) => setFormExtra((f) => ({ ...f, quantidade: e.target.value.replace(/\D/g, "") }))}
                  aria-invalid={Boolean(erroVisivel("quantidade"))}
                  aria-describedby={erroVisivel("quantidade") ? "extra-quantidade-erro" : undefined}
                  className={cn(TRE_CAMPO, "mt-1.5 tabular-nums")}
                />
                {erroVisivel("quantidade") && (
                  <p id="extra-quantidade-erro" className="mt-1 text-xs text-tre-danger-ink">
                    {erroVisivel("quantidade")}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="extra-valor" className="text-tre-navy">
                  Valor unitário
                </Label>
                <div className="relative mt-1.5">
                  <span aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-600">
                    R$
                  </span>
                  <Input
                    id="extra-valor"
                    inputMode="decimal"
                    value={formExtra.valor}
                    onChange={(e) => setFormExtra((f) => ({ ...f, valor: e.target.value.replace(/[^\d.,]/g, "") }))}
                    placeholder="0,00"
                    aria-invalid={Boolean(erroVisivel("valor"))}
                    aria-describedby={erroVisivel("valor") ? "extra-valor-erro" : undefined}
                    className={cn(TRE_CAMPO, "pl-10 tabular-nums")}
                  />
                </div>
                {erroVisivel("valor") && (
                  <p id="extra-valor-erro" className="mt-1 text-xs text-tre-danger-ink">
                    {erroVisivel("valor")}
                  </p>
                )}
              </div>
            </div>

            <div className="tre-inset flex items-center justify-between rounded-2xl px-4 py-3">
              <span className="text-sm text-slate-700">Subtotal do item</span>
              <span className="text-lg font-bold tabular-nums text-tre-navy">{subtotalExtra !== null ? formatBRL(subtotalExtra) : "—"}</span>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-2">
                <Label htmlFor="extra-justificativa" className="text-tre-navy">
                  Justificativa
                </Label>
                <span
                  className={cn(
                    "text-xs tabular-nums",
                    formExtra.justificativa.trim().length >= MIN_JUSTIFICATIVA ? "text-tre-green-ink" : "text-slate-600",
                  )}
                >
                  {formExtra.justificativa.trim().length}/{MIN_JUSTIFICATIVA} mín.
                </span>
              </div>
              <Textarea
                id="extra-justificativa"
                rows={3}
                value={formExtra.justificativa}
                onChange={(e) => setFormExtra((f) => ({ ...f, justificativa: e.target.value }))}
                placeholder="Explique por que o item foi necessário e não consta no XML."
                aria-invalid={Boolean(erroVisivel("justificativa"))}
                aria-describedby={erroVisivel("justificativa") ? "extra-justificativa-erro" : undefined}
                className={cn(CAMPO_TEXTAREA, "mt-1.5")}
              />
              {erroVisivel("justificativa") && (
                <p id="extra-justificativa-erro" className="mt-1 text-xs text-tre-danger-ink">
                  {erroVisivel("justificativa")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="extra-documento" className="text-tre-navy">
                Documento de justificativa <span className="font-normal text-slate-600">(opcional)</span>
              </Label>
              <div className="mt-1.5 flex gap-2">
                <Input
                  id="extra-documento"
                  value={formExtra.documento}
                  onChange={(e) => setFormExtra((f) => ({ ...f, documento: e.target.value }))}
                  placeholder="Nome do arquivo ou descrição"
                  className={cn(TRE_CAMPO, "min-w-0 flex-1")}
                />
                <input
                  ref={inputDocRef}
                  type="file"
                  accept="application/pdf,image/*"
                  hidden
                  onChange={(e) => {
                    const arquivo = e.target.files?.[0];
                    if (arquivo) setFormExtra((f) => ({ ...f, documento: arquivo.name }));
                    e.target.value = "";
                  }}
                />
                <Button type="button" onClick={() => inputDocRef.current?.click()} className={cn(BOTAO_VIDRO, "h-11 shrink-0 rounded-xl px-4")}>
                  <Paperclip aria-hidden />
                  Anexar
                </Button>
              </div>
              <p className="mt-1 text-xs text-slate-600">PDF ou imagem: laudo, prescrição ou nota do material.</p>
            </div>
          </form>
        </GlassPainel>
      </GlassDialog>
    </TreShell>
  );
}
