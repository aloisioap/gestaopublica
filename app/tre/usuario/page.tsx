"use client";

import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bandage,
  BedDouble,
  Bell,
  BellOff,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  CheckCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  Download,
  Droplet,
  Eye,
  EyeOff,
  FileText,
  FlaskConical,
  FolderOpen,
  HeartPulse,
  History,
  Hourglass,
  Info,
  Mail,
  MapPin,
  Maximize2,
  Microscope,
  Navigation,
  Phone,
  Plus,
  Printer,
  QrCode,
  Search,
  SearchX,
  Send,
  Shield,
  Stethoscope,
  TriangleAlert,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { TreShell } from "@/components/tre/tre-shell";
import { GlassCard } from "@/components/tre/glass-card";
import { KpiCard } from "@/components/tre/kpi-card";
import { StatusBadge, ToneBadge } from "@/components/tre/status-badge";
import { SectionHeader } from "@/components/tre/section-header";
import { EmptyState } from "@/components/tre/empty-state";
import { GlassDialog, GlassDialogClose, GlassPainel } from "@/components/tre/glass-painel";
import { GlassTabsList, GlassTabsTrigger } from "@/components/tre/glass-tabs";
import { treBotao, TRE_CAMPO } from "@/components/tre/ui-tre";
import { AvatarIniciais } from "@/components/tre/avatar-iniciais";
import { useQueryParam } from "@/components/tre/use-query-param";
import { CREDENCIADOS_TRE, HISTORICO_SAUDE_TRE, NOTIFICACOES_TRE, SERVIDORES_TRE } from "@/lib/dados-tre";
import {
  DATA_REFERENCIA_TRE,
  diasEntre,
  formatCompetencia,
  formatData,
  formatNumero,
  mascararCPF,
} from "@/lib/tre/formatadores";
import { cn } from "@/lib/utils";

/* ============================================================
   Tipos
   ============================================================ */

type Servidor = (typeof SERVIDORES_TRE)[number];
type Notificacao = (typeof NOTIFICACOES_TRE)[number];
type TipoNotificacao = Notificacao["tipo"];
type Credenciado = (typeof CREDENCIADOS_TRE)[number];

type Categoria = "Consultas" | "Exames" | "Internações" | "Cirurgias";
type FiltroCategoria = Categoria | "Todos";

interface Laudo {
  especialidade?: string;
  medico?: string;
  crm?: string;
  laboratorio?: string;
  cnes?: string;
  conteudo: string;
}

interface HistoricoItem {
  id: string;
  matricula: string;
  usuario_nome: string;
  categoria: Categoria;
  procedimento_id: string;
  descricao: string;
  resultado: string;
  pdf_url: string;
  data_realizacao: string;
  laudo: Laudo | null;
}

type StatusAgendamento = "Confirmado" | "Pendente" | "Cancelado" | "Concluído";

interface Agendamento {
  id: string;
  matricula: string;
  descricao: string;
  especialidade: string;
  data: string;
  hora: string;
  local: string;
  medico: string;
  status: StatusAgendamento;
  observacoes?: string;
  credenciado_id?: string;
}

type TipoDocumento = "Exame" | "Receita";

interface Documento {
  id: string;
  matricula: string;
  titulo: string;
  tipo: TipoDocumento;
  data: string;
  tamanho: string;
  /** Registro do histórico cujo laudo este documento contém. */
  historicoId?: string;
}

interface FormAgendamento {
  tipo: string;
  especialidade: string;
  especialidadeOutra: string;
  credenciadoId: string;
  data: string;
  observacoes: string;
}

type ErrosForm = Partial<Record<"especialidade" | "especialidadeOutra" | "data", string>>;

const ABAS = ["historico", "agendamentos", "documentos"] as const;
type Aba = (typeof ABAS)[number];
const ehAba = (valor: string): valor is Aba => (ABAS as readonly string[]).includes(valor);

/* ============================================================
   Dados da tela
   ============================================================ */

const HISTORICO: readonly HistoricoItem[] = HISTORICO_SAUDE_TRE;
const MATRICULA_PADRAO = SERVIDORES_TRE[0].matricula;
const LOCAL_A_DEFINIR = "A definir";
const HORA_A_DEFINIR = "A definir";

/** AGD-000 é a consulta de 15/01/2024 (HIST-001) avisada em NOTIF-001. */
const AGENDAMENTOS_INICIAIS: Agendamento[] = [
  {
    id: "AGD-000",
    matricula: "TRE0001",
    descricao: "Consulta Cardiológica",
    especialidade: "Cardiologia",
    data: "2024-01-15",
    hora: "14:00",
    local: "Hospital Metropolitano - 3º Andar",
    medico: "Dr. Roberto Fernandes",
    status: "Concluído",
    credenciado_id: "CRED-001",
  },
  {
    id: "AGD-001",
    matricula: "TRE0001",
    descricao: "Consulta Cardiológica de Retorno",
    especialidade: "Cardiologia",
    data: "2024-02-15",
    hora: "14:00",
    local: "Hospital Metropolitano - 3º Andar",
    medico: "Dr. Roberto Fernandes",
    status: "Confirmado",
    credenciado_id: "CRED-001",
  },
  {
    id: "AGD-002",
    matricula: "TRE0001",
    descricao: "Check-up Laboratorial",
    especialidade: "Laboratorial",
    data: "2024-02-20",
    hora: "08:00",
    local: "Lab Einstein - Unidade Centro",
    medico: "Dra. Amanda Rocha",
    status: "Pendente",
    credenciado_id: "CRED-004",
  },
];

/** Datas alinhadas aos registros do histórico de onde cada documento saiu. */
const DOCUMENTOS: readonly Documento[] = [
  { id: "DOC-001", matricula: "TRE0001", titulo: "Resultado Hemograma", tipo: "Exame", data: "2024-02-10", tamanho: "1,2 MB", historicoId: "HIST-002" },
  { id: "DOC-002", matricula: "TRE0001", titulo: "Laudo ECG", tipo: "Exame", data: "2024-01-15", tamanho: "850 KB", historicoId: "HIST-004" },
  { id: "DOC-003", matricula: "TRE0001", titulo: "Receituário Médico", tipo: "Receita", data: "2024-01-15", tamanho: "450 KB" },
];

/** Notificação de agendamento → agendamento a que ela se refere. */
const AGENDAMENTO_DA_NOTIFICACAO: Record<string, string> = { "NOTIF-001": "AGD-000" };

const OUTRA_ESPECIALIDADE = "__outra";
const SEM_PREFERENCIA = "__sem-preferencia";
const TIPOS_ATENDIMENTO = ["Consulta", "Exame", "Procedimento"] as const;

const ESPECIALIDADES: string[] = Array.from(
  new Set(CREDENCIADOS_TRE.flatMap((c): string[] => [...c.especialidades])),
)
  .filter((e) => e !== "UTI")
  .sort((a, b) => a.localeCompare(b, "pt-BR"));

const FORM_VAZIO: FormAgendamento = {
  tipo: "Consulta",
  especialidade: "",
  especialidadeOutra: "",
  credenciadoId: SEM_PREFERENCIA,
  data: "",
  observacoes: "",
};

/* ============================================================
   Aparência
   ============================================================ */

const CATEGORIAS: Record<Categoria, { icone: LucideIcon; no: string; texto: string; singular: string }> = {
  Consultas: { icone: Stethoscope, no: "bg-tre-info", texto: "text-tre-info", singular: "Consulta" },
  Exames: { icone: Microscope, no: "bg-tre-green", texto: "text-tre-green", singular: "Exame" },
  Internações: { icone: BedDouble, no: "bg-tre-terra", texto: "text-tre-terra", singular: "Internação" },
  Cirurgias: { icone: Bandage, no: "bg-tre-danger", texto: "text-tre-danger-ink", singular: "Cirurgia" },
};
const ORDEM_CATEGORIAS: Categoria[] = ["Consultas", "Exames", "Internações", "Cirurgias"];

const NOTIF_CONFIG: Record<TipoNotificacao, { icone: LucideIcon; chip: string; acao: string }> = {
  agendamento: { icone: CalendarDays, chip: "bg-tre-info/10 text-tre-info", acao: "Ver agendamento" },
  resultado: { icone: FlaskConical, chip: "bg-tre-green/10 text-tre-green", acao: "Abrir laudo" },
  autorizacao: { icone: Hourglass, chip: "bg-tre-gold/20 text-tre-gold-ink", acao: "Ver status" },
  internacao: { icone: BedDouble, chip: "bg-tre-terra/10 text-tre-terra", acao: "Ver internação" },
};

const DOC_CONFIG: Record<TipoDocumento, { icone: LucideIcon; chip: string }> = {
  Exame: { icone: FileText, chip: "bg-tre-info/10 text-tre-info" },
  Receita: { icone: ClipboardList, chip: "bg-tre-terra/10 text-tre-terra" },
};

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
] as const;

/** Botão "vidro" sem blur próprio, para uso dentro de superfícies que já desfocam. */
const BOTAO_VIDRO = cn(treBotao({ tom: "vidro" }), "backdrop-blur-none");
const BOTAO_PERIGO_SUAVE = cn(treBotao({ tom: "fantasma" }), "text-tre-danger-ink hover:bg-tre-danger/10 hover:text-tre-danger-ink");
const CAMPO_SELECT = cn(TRE_CAMPO, "focus:ring-2 focus:ring-tre-navy/40 focus:ring-offset-0");
const MENU_SELECT = "rounded-xl border-white/70 bg-white/95 shadow-glass-lg";
const ID_SECAO_ABAS = "secao-abas";

const MESES_LONGOS = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

/* ============================================================
   Funções auxiliares (sem `new Date(iso)` para não perder um dia em America/Belem)
   ============================================================ */

const normalizar = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function partesData(iso: string) {
  const [dia = "", mes = "", ano = ""] = formatData(iso).split("/");
  return { dia, mes, ano };
}

function rotuloMes(iso: string) {
  const mes = Number(iso.slice(5, 7));
  return `${MESES_LONGOS[mes - 1] ?? ""} de ${iso.slice(0, 4)}`;
}

function diaDaSemana(iso: string) {
  const [a, m, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(a, m - 1, d)).toLocaleDateString("pt-BR", { weekday: "long", timeZone: "UTC" });
}

function quando(iso: string) {
  const dias = diasEntre(iso);
  if (dias === 0) return "Hoje";
  if (dias === 1) return "Amanhã";
  if (dias === -1) return "Ontem";
  return dias > 0 ? `Em ${formatNumero(dias)} dias` : `Há ${formatNumero(-dias)} dias`;
}

const textoHora = (hora: string) => (hora === HORA_A_DEFINIR ? "horário a definir" : `às ${hora}`);
const plural = (n: number, um: string, varios: string) => `${formatNumero(n)} ${n === 1 ? um : varios}`;

function nomeCurto(nome: string) {
  const partes = nome.trim().split(/\s+/);
  return partes.length > 1 ? `${partes[0]} ${partes[partes.length - 1]}` : nome;
}

function slug(texto: string) {
  return normalizar(texto).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function profissionalDoLaudo(laudo: Laudo) {
  if (!laudo.medico) return { nome: undefined, registro: laudo.crm };
  const [nome, ...resto] = laudo.medico.split(/\s+-\s+/);
  return { nome, registro: laudo.crm ?? (resto.join(" - ") || undefined) };
}

const cnesSemPrefixo = (cnes?: string) => cnes?.replace(/^CNES\s*/i, "");

function baixarArquivo(nome: string, conteudo: string, tipo: string) {
  const url = URL.createObjectURL(new Blob([conteudo], { type: tipo }));
  const link = document.createElement("a");
  link.href = url;
  link.download = nome;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function escaparHtml(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function camposDoLaudo(item: HistoricoItem): [string, string][] {
  const laudo = item.laudo;
  if (!laudo) return [];
  const { nome, registro } = profissionalDoLaudo(laudo);
  const pares: [string, string | undefined][] = [
    ["Profissional", nome],
    ["Registro", registro],
    ["Especialidade", laudo.especialidade],
    ["Laboratório", laudo.laboratorio],
    ["CNES", cnesSemPrefixo(laudo.cnes)],
  ];
  return pares.filter((p): p is [string, string] => Boolean(p[1]));
}

function textoDoLaudo(item: HistoricoItem, servidor: Servidor) {
  const linha = "-".repeat(56);
  return [
    "TRE-PA · Saúde do Servidor",
    `${item.laudo ? "LAUDO" : "REGISTRO"} — ${item.descricao.toUpperCase()}`,
    "",
    `Servidor: ${servidor.nome} (matrícula ${servidor.matricula})`,
    `Categoria: ${item.categoria}`,
    `Data de realização: ${formatData(item.data_realizacao)}`,
    `Registro: ${item.id} · Procedimento ${item.procedimento_id}`,
    ...camposDoLaudo(item).map(([rotulo, valor]) => `${rotulo}: ${valor}`),
    "",
    `Resumo: ${item.resultado}`,
    linha,
    item.laudo?.conteudo ?? "Laudo em processamento: o credenciado ainda não anexou o documento.",
    linha,
    `Gerado em ${new Date().toLocaleString("pt-BR")} pelo Portal do Servidor (demonstração).`,
  ].join("\n");
}

function htmlDoLaudo(item: HistoricoItem, servidor: Servidor) {
  const campos = [
    ["Servidor", `${servidor.nome} (${servidor.matricula})`],
    ["Categoria", item.categoria],
    ["Data", formatData(item.data_realizacao)],
    ...camposDoLaudo(item),
  ]
    .map(([rotulo, valor]) => `<dt>${escaparHtml(rotulo)}</dt><dd>${escaparHtml(valor)}</dd>`)
    .join("");
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>${escaparHtml(`Laudo — ${item.descricao}`)}</title>
<style>
  body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#0b1b30;margin:40px;line-height:1.5}
  header{border-bottom:2px solid #c8a415;padding-bottom:12px;margin-bottom:20px}
  .marca{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6f5708;font-weight:700}
  h1{font-size:20px;margin:4px 0 0;color:#1e3a5f}
  dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 16px;font-size:13px;margin:0 0 20px}
  dt{color:#475569}dd{margin:0;font-weight:600}
  .resumo{font-size:13px;background:#f1f5f9;border-radius:8px;padding:10px 12px;margin-bottom:20px}
  pre{white-space:pre-wrap;font:13px/1.65 ui-monospace,SFMono-Regular,Menlo,monospace;margin:0}
  footer{margin-top:28px;border-top:1px solid #cbd5e1;padding-top:8px;font-size:11px;color:#475569}
</style></head>
<body>
<header><div class="marca">TRE-PA · Saúde do Servidor</div><h1>${escaparHtml(item.descricao)}</h1></header>
<dl>${campos}</dl>
<div class="resumo"><strong>Resumo:</strong> ${escaparHtml(item.resultado)}</div>
<pre>${escaparHtml(item.laudo?.conteudo ?? "Laudo em processamento.")}</pre>
<footer>Documento emitido pelo Portal do Servidor TRE-PA (demonstração) · ${escaparHtml(item.id)}</footer>
<script>window.addEventListener("load",function(){window.focus();window.print();});window.addEventListener("afterprint",function(){window.close();});</script>
</body></html>`;
}

const escaparIcs = (texto: string) =>
  texto.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

function gerarIcs(ag: Agendamento, servidor: Servidor) {
  const data = ag.data.replace(/-/g, "");
  const horaValida = /^\d{2}:\d{2}$/.test(ag.hora);
  const carimbo = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const descricao = [
    `Especialidade: ${ag.especialidade}`,
    `Profissional: ${ag.medico}`,
    `Status: ${ag.status}`,
    ag.observacoes ? `Observações: ${ag.observacoes}` : null,
    `Servidor: ${servidor.nome} (${servidor.matricula})`,
  ]
    .filter(Boolean)
    .join("\n");
  const linhas = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TRE-PA//Saude do Servidor//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${ag.id}-${servidor.matricula}@tre-pa.jus.br`,
    `DTSTAMP:${carimbo}`,
    // Sem hora definida, vira evento de dia inteiro.
    ...(horaValida ? [`DTSTART:${data}T${ag.hora.replace(":", "")}00`, "DURATION:PT1H"] : [`DTSTART;VALUE=DATE:${data}`, "DURATION:P1D"]),
    `SUMMARY:${escaparIcs(ag.descricao)}`,
    ...(ag.local !== LOCAL_A_DEFINIR ? [`LOCATION:${escaparIcs(ag.local)}`] : []),
    `DESCRIPTION:${escaparIcs(descricao)}`,
    `STATUS:${ag.status === "Confirmado" ? "CONFIRMED" : "TENTATIVE"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `${linhas.join("\r\n")}\r\n`;
}

const credenciadoPorId = (id?: string): Credenciado | undefined => CREDENCIADOS_TRE.find((c) => c.id === id);

/* ============================================================
   Peças visuais locais
   ============================================================ */

function ContadorAba({ valor }: { valor: number }) {
  return (
    <span className="tre-tone-neutral min-w-5 rounded-full px-1.5 text-center text-[11px] font-bold tabular-nums">
      {formatNumero(valor)}
    </span>
  );
}

function ChipFiltro({
  ativo,
  onClick,
  rotulo,
  contagem,
  ponto,
}: {
  ativo: boolean;
  onClick: () => void;
  rotulo: string;
  contagem: number;
  ponto?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={ativo}
      onClick={onClick}
      className={cn(
        "tre-ring inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors",
        ativo ? "bg-tre-navy text-white shadow-md" : "bg-white/70 text-slate-700 ring-1 ring-tre-navy/10 hover:bg-white",
      )}
    >
      {ponto && <span aria-hidden className={cn("size-2 rounded-full", ponto, ativo && "ring-2 ring-white/70")} />}
      {rotulo}
      <span
        className={cn(
          "min-w-5 rounded-full px-1.5 text-center text-[11px] font-bold tabular-nums",
          ativo ? "bg-white/20 text-white" : "bg-tre-navy/10 text-tre-navy",
        )}
      >
        {formatNumero(contagem)}
      </span>
    </button>
  );
}

function ParInfo({ rotulo, children, className }: { rotulo: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("min-w-0", className)}>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-600">{rotulo}</dt>
      <dd className="mt-0.5 break-words font-medium text-tre-navy">{children}</dd>
    </div>
  );
}

function BlocoData({ iso, grande = false }: { iso: string; grande?: boolean }) {
  const { dia, mes, ano } = partesData(iso);
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-tre-navy to-tre-navy-deep text-white shadow-md ring-1 ring-white/20",
        grande ? "size-20" : "w-16 py-2.5",
      )}
    >
      <span className={cn("font-bold leading-none tabular-nums", grande ? "text-3xl" : "text-2xl")}>{dia}</span>
      <span className="mt-1 text-[11px] font-bold uppercase leading-none tracking-wide text-tre-gold-soft">
        {formatCompetencia(Number(mes), Number(ano)).split("/")[0]}
      </span>
      <span className="mt-0.5 text-[10px] font-medium leading-tight tabular-nums text-white/80">{ano}</span>
    </span>
  );
}

function Campo({
  id,
  rotulo,
  erro,
  ajuda,
  className,
  children,
}: {
  id: string;
  rotulo: string;
  erro?: string;
  ajuda?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-semibold text-tre-navy">
        {rotulo}
      </Label>
      {children}
      {erro ? (
        <p id={`${id}-erro`} className="flex items-center gap-1 text-xs font-medium text-tre-danger-ink">
          <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
          {erro}
        </p>
      ) : ajuda ? (
        <p id={`${id}-ajuda`} className="text-xs text-slate-600">
          {ajuda}
        </p>
      ) : null}
    </div>
  );
}

const descritoPor = (id: string, erro?: string, ajuda?: unknown) => (erro ? `${id}-erro` : ajuda ? `${id}-ajuda` : undefined);

/* ============================================================
   Página
   ============================================================ */

export default function PortalUsuarioTRE() {
  const [matricula, setMatricula] = useQueryParam("matricula", MATRICULA_PADRAO);
  const [abaParam, setAbaParam] = useQueryParam("aba", "historico");
  const aba: Aba = ehAba(abaParam) ? abaParam : "historico";

  const servidor: Servidor = useMemo(
    () => SERVIDORES_TRE.find((s) => s.matricula === matricula) ?? SERVIDORES_TRE[0],
    [matricula],
  );
  const primeiroNome = servidor.nome.split(" ")[0];

  // Estado
  const [lidas, setLidas] = useState<Set<string>>(() => new Set(NOTIFICACOES_TRE.filter((n) => n.lida).map((n) => n.id)));
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>(AGENDAMENTOS_INICIAIS);
  const [cpfVisivel, setCpfVisivel] = useState(false);

  const [filtroCategoria, setFiltroCategoria] = useState<FiltroCategoria>("Todos");
  const [busca, setBusca] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState<TipoDocumento | "Todos">("Todos");

  const [laudoId, setLaudoId] = useState<string | null>(null);
  const [laudoAberto, setLaudoAberto] = useState(false);
  const [agendamentoId, setAgendamentoId] = useState<string | null>(null);
  const [agendamentoAberto, setAgendamentoAberto] = useState(false);
  const [confirmandoCancelamento, setConfirmandoCancelamento] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);
  const [novoAberto, setNovoAberto] = useState(false);
  const [qrAberto, setQrAberto] = useState(false);

  const [destaqueAgendamento, setDestaqueAgendamento] = useState<string | null>(null);
  const [destaqueHistorico, setDestaqueHistorico] = useState<string | null>(null);
  const [rolarPara, setRolarPara] = useState<string | null>(null);

  const [form, setForm] = useState<FormAgendamento>(FORM_VAZIO);
  const [erros, setErros] = useState<ErrosForm>({});

  // Rola até o alvo depois que a aba trocou e o painel que estava aberto fechou.
  useEffect(() => {
    if (!rolarPara) return;
    const timer = window.setTimeout(() => {
      const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById(rolarPara)
        ?.scrollIntoView({ block: rolarPara === ID_SECAO_ABAS ? "start" : "center", behavior: reduzir ? "auto" : "smooth" });
      setRolarPara(null);
    }, 240);
    return () => window.clearTimeout(timer);
  }, [rolarPara, aba]);

  /* ---------- Derivados ---------- */

  const historicoServidor = useMemo(
    () =>
      HISTORICO.filter((h) => h.matricula === servidor.matricula).sort((a, b) =>
        b.data_realizacao.localeCompare(a.data_realizacao),
      ),
    [servidor.matricula],
  );

  const contagemCategorias = useMemo(() => {
    const contagem: Record<Categoria, number> = { Consultas: 0, Exames: 0, Internações: 0, Cirurgias: 0 };
    historicoServidor.forEach((h) => {
      contagem[h.categoria] += 1;
    });
    return contagem;
  }, [historicoServidor]);

  const historicoFiltrado = useMemo(() => {
    const termo = normalizar(busca);
    return historicoServidor.filter((h) => {
      if (filtroCategoria !== "Todos" && h.categoria !== filtroCategoria) return false;
      if (!termo) return true;
      const alvo = [h.descricao, h.laudo?.medico, h.laudo?.laboratorio, h.laudo?.especialidade].filter(Boolean).join(" ");
      return normalizar(alvo).includes(termo);
    });
  }, [historicoServidor, filtroCategoria, busca]);

  const gruposHistorico = useMemo(() => {
    const grupos: { chave: string; rotulo: string; itens: HistoricoItem[] }[] = [];
    historicoFiltrado.forEach((item) => {
      const chave = item.data_realizacao.slice(0, 7);
      const ultimo = grupos[grupos.length - 1];
      if (ultimo?.chave === chave) ultimo.itens.push(item);
      else grupos.push({ chave, rotulo: rotuloMes(item.data_realizacao), itens: [item] });
    });
    return grupos;
  }, [historicoFiltrado]);

  const exames = historicoServidor.filter((h) => h.categoria === "Exames");
  const examesComLaudo = exames.filter((h) => h.laudo);

  const notificacoes = useMemo(
    () =>
      NOTIFICACOES_TRE.filter((n) => n.matricula === servidor.matricula).sort((a, b) => b.data.localeCompare(a.data)),
    [servidor.matricula],
  );
  const notificacoesNovas = notificacoes.filter((n) => !lidas.has(n.id));
  const notificacoesAntigas = notificacoes.filter((n) => lidas.has(n.id));
  const naoLidas = notificacoesNovas.length;

  const agendamentosServidor = useMemo(
    () => agendamentos.filter((a) => a.matricula === servidor.matricula),
    [agendamentos, servidor.matricula],
  );
  const proximos = useMemo(
    () =>
      agendamentosServidor
        .filter((a) => a.data >= DATA_REFERENCIA_TRE)
        .sort((a, b) => a.data.localeCompare(b.data) || a.hora.localeCompare(b.hora)),
    [agendamentosServidor],
  );
  const anteriores = useMemo(
    () => agendamentosServidor.filter((a) => a.data < DATA_REFERENCIA_TRE).sort((a, b) => b.data.localeCompare(a.data)),
    [agendamentosServidor],
  );
  const proximoAtendimento = proximos.find((a) => a.status !== "Cancelado");
  const dataProximo = proximoAtendimento ? partesData(proximoAtendimento.data) : null;

  const documentosServidor = DOCUMENTOS.filter((d) => d.matricula === servidor.matricula);
  const tiposDocumento = (["Exame", "Receita"] as const).filter((t) => documentosServidor.some((d) => d.tipo === t));
  const documentosFiltrados =
    filtroDocumento === "Todos" ? documentosServidor : documentosServidor.filter((d) => d.tipo === filtroDocumento);

  const laudoItem = HISTORICO.find((h) => h.id === laudoId) ?? null;
  const agendamentoSel = agendamentos.find((a) => a.id === agendamentoId) ?? null;

  const listaAlergias: readonly string[] = servidor.alergias;
  const listaComorbidades: readonly string[] = servidor.comorbidades;
  const alergias = listaAlergias.filter((a) => !/^nenhum/i.test(a.trim()));
  const comorbidades = listaComorbidades.filter((c) => !/^nenhum/i.test(c.trim()));

  const credenciadosDaEspecialidade = useMemo(
    () =>
      form.especialidade && form.especialidade !== OUTRA_ESPECIALIDADE
        ? CREDENCIADOS_TRE.filter((c) => (c.especialidades as readonly string[]).includes(form.especialidade))
        : [...CREDENCIADOS_TRE],
    [form.especialidade],
  );

  /* ---------- Ações ---------- */

  const setAba = (valor: string) => setAbaParam(ehAba(valor) ? valor : "historico");

  function trocarServidor(novaMatricula: string) {
    if (novaMatricula === servidor.matricula) return;
    setMatricula(novaMatricula);
    setFiltroCategoria("Todos");
    setBusca("");
    setFiltroDocumento("Todos");
    setCpfVisivel(false);
    setDestaqueAgendamento(null);
    setDestaqueHistorico(null);
    setLaudoAberto(false);
    setAgendamentoAberto(false);
    const novo = SERVIDORES_TRE.find((s) => s.matricula === novaMatricula);
    if (novo) toast({ title: `Visualizando como ${novo.nome}`, description: `Persona de demonstração · matrícula ${novo.matricula}` });
  }

  function abrirLaudo(id: string) {
    setLaudoId(id);
    setLaudoAberto(true);
  }

  function abrirAgendamento(id: string) {
    setAgendamentoId(id);
    setConfirmandoCancelamento(false);
    setAgendamentoAberto(true);
  }

  function abrirNovoAgendamento() {
    setErros({});
    setNovoAberto(true);
  }

  function atualizarForm<K extends keyof FormAgendamento>(campo: K, valor: FormAgendamento[K]) {
    setForm((f) => ({ ...f, [campo]: valor }));
    if (campo in erros) setErros((e) => ({ ...e, [campo]: undefined }));
  }

  function escolherEspecialidade(valor: string) {
    setForm((f) => {
      const cred = credenciadoPorId(f.credenciadoId);
      const atende = valor === OUTRA_ESPECIALIDADE || (cred && (cred.especialidades as readonly string[]).includes(valor));
      return { ...f, especialidade: valor, credenciadoId: atende ? f.credenciadoId : SEM_PREFERENCIA };
    });
    setErros((e) => ({ ...e, especialidade: undefined }));
  }

  function solicitarAgendamento(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const novosErros: ErrosForm = {};
    if (!form.especialidade) novosErros.especialidade = "Escolha a especialidade.";
    else if (form.especialidade === OUTRA_ESPECIALIDADE && !form.especialidadeOutra.trim())
      novosErros.especialidadeOutra = "Informe qual especialidade você procura.";
    if (!form.data) novosErros.data = "Informe a data preferencial.";
    else if (form.data < DATA_REFERENCIA_TRE) novosErros.data = `Escolha uma data a partir de ${formatData(DATA_REFERENCIA_TRE)}.`;

    setErros(novosErros);
    const primeiroErro = (["especialidade", "especialidadeOutra", "data"] as const).find((c) => novosErros[c]);
    if (primeiroErro) {
      const ids = { especialidade: "agd-especialidade", especialidadeOutra: "agd-especialidade-outra", data: "agd-data" };
      document.getElementById(ids[primeiroErro])?.focus();
      return;
    }

    const especialidade = form.especialidade === OUTRA_ESPECIALIDADE ? form.especialidadeOutra.trim() : form.especialidade;
    const cred = credenciadoPorId(form.credenciadoId);
    const numero = agendamentos.reduce((max, a) => Math.max(max, Number(a.id.replace(/\D/g, "")) || 0), 0) + 1;
    const novo: Agendamento = {
      id: `AGD-${String(numero).padStart(3, "0")}`,
      matricula: servidor.matricula,
      descricao: `${form.tipo} - ${especialidade}`,
      especialidade,
      data: form.data,
      hora: HORA_A_DEFINIR,
      local: cred ? `${cred.nome_fantasia} — ${cred.endereco}, ${cred.bairro}, ${cred.cidade}/${cred.estado}` : LOCAL_A_DEFINIR,
      medico: "A definir",
      status: "Pendente",
      observacoes: form.observacoes.trim() || undefined,
      credenciado_id: cred?.id,
    };

    setAgendamentos((lista) => [...lista, novo]);
    setForm(FORM_VAZIO);
    setNovoAberto(false);
    setAba("agendamentos");
    setDestaqueAgendamento(novo.id);
    setRolarPara(`agd-${novo.id}`);
    toast({
      variant: "success",
      title: "Agendamento solicitado",
      description: `${novo.descricao} · preferência para ${formatData(novo.data)}. Você será avisado quando o Núcleo de Saúde confirmar.`,
    });
  }

  function cancelarAgendamento(ag: Agendamento) {
    setAgendamentos((lista) => lista.map((a) => (a.id === ag.id ? { ...a, status: "Cancelado" } : a)));
    setConfirmandoCancelamento(false);
    toast({ title: "Solicitação cancelada", description: `${ag.descricao} (${formatData(ag.data)}) foi cancelado.` });
  }

  function adicionarAgenda(ag: Agendamento) {
    baixarArquivo(`${ag.id.toLowerCase()}-${slug(ag.descricao)}.ics`, gerarIcs(ag, servidor), "text/calendar;charset=utf-8");
    toast({
      variant: "success",
      title: "Evento gerado",
      description:
        ag.hora === HORA_A_DEFINIR
          ? "Arquivo .ics de dia inteiro baixado; o horário será definido na confirmação."
          : "Abra o arquivo .ics para adicionar à sua agenda.",
    });
  }

  function marcarLida(id: string) {
    setLidas((atual) => (atual.has(id) ? atual : new Set(atual).add(id)));
  }

  function marcarTodasLidas() {
    setLidas((atual) => {
      const novo = new Set(atual);
      notificacoes.forEach((n) => novo.add(n.id));
      return novo;
    });
  }

  function abrirNotificacao(n: Notificacao) {
    marcarLida(n.id);
    setNotificacoesAbertas(false);
    switch (n.tipo) {
      case "resultado": {
        const exame = examesComLaudo[0];
        if (exame) {
          setAba("historico");
          abrirLaudo(exame.id);
        } else {
          toast({ title: "Resultado ainda sem laudo", description: "O laudo aparecerá no histórico assim que for anexado." });
        }
        break;
      }
      case "agendamento": {
        const vinculado = AGENDAMENTO_DA_NOTIFICACAO[n.id];
        const alvo = agendamentosServidor.some((a) => a.id === vinculado) ? vinculado : proximoAtendimento?.id;
        setAba("agendamentos");
        setDestaqueAgendamento(alvo ?? null);
        setRolarPara(alvo ? `agd-${alvo}` : ID_SECAO_ABAS);
        break;
      }
      case "autorizacao":
        toast({ title: "Aguardando análise da auditoria", description: n.mensagem });
        setAba("agendamentos");
        setRolarPara(ID_SECAO_ABAS);
        break;
      case "internacao": {
        const internacao = historicoServidor.find((h) => h.categoria === "Internações");
        setAba("historico");
        setFiltroCategoria("Internações");
        setBusca("");
        setDestaqueHistorico(internacao?.id ?? null);
        setRolarPara(internacao ? `hist-${internacao.id}` : ID_SECAO_ABAS);
        break;
      }
    }
  }

  function verResultados() {
    setAba("historico");
    setFiltroCategoria("Exames");
    setBusca("");
    setRolarPara(ID_SECAO_ABAS);
  }

  function imprimirLaudo(item: HistoricoItem) {
    const janela = window.open("", "_blank", "width=880,height=960");
    if (!janela) {
      toast({
        variant: "destructive",
        title: "Não foi possível abrir a impressão",
        description: "Permita janelas pop-up para este site e tente de novo.",
      });
      return;
    }
    janela.opener = null;
    janela.document.open();
    janela.document.write(htmlDoLaudo(item, servidor));
    janela.document.close();
  }

  function baixarLaudo(item: HistoricoItem) {
    baixarArquivo(`laudo-${item.id.toLowerCase()}-${slug(item.descricao)}.txt`, `\uFEFF${textoDoLaudo(item, servidor)}`, "text/plain;charset=utf-8");
    toast({ variant: "success", title: "Download iniciado", description: `Laudo de ${item.descricao}.` });
  }

  function verDocumento(doc: Documento) {
    const item = HISTORICO.find((h) => h.id === doc.historicoId);
    if (item?.laudo) {
      abrirLaudo(item.id);
      return;
    }
    toast({
      title: "Documento demonstrativo",
      description: "A visualização deste documento não está disponível na demonstração. Use Baixar para obter uma cópia.",
    });
  }

  function baixarDocumento(doc: Documento) {
    const item = HISTORICO.find((h) => h.id === doc.historicoId);
    const conteudo = item
      ? textoDoLaudo(item, servidor)
      : [
          "TRE-PA · Saúde do Servidor",
          doc.titulo.toUpperCase(),
          "",
          `Servidor: ${servidor.nome} (matrícula ${servidor.matricula})`,
          `Tipo: ${doc.tipo}`,
          `Data: ${formatData(doc.data)}`,
          `Documento: ${doc.id}`,
          "",
          "Documento demonstrativo gerado pelo Portal do Servidor.",
        ].join("\n");
    baixarArquivo(`${doc.id.toLowerCase()}-${slug(doc.titulo)}.txt`, `\uFEFF${conteudo}`, "text/plain;charset=utf-8");
    toast({ variant: "success", title: "Download iniciado", description: doc.titulo });
  }

  /* ---------- Cabeçalho ---------- */

  const acoes = (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setNotificacoesAbertas(true)}
        aria-label={naoLidas > 0 ? `Notificações (${plural(naoLidas, "não lida", "não lidas")})` : "Notificações"}
        className={cn(treBotao({ tom: "cabecalho" }), "tre-ring relative rounded-full")}
      >
        <Bell className="size-5" aria-hidden />
        {naoLidas > 0 && (
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-tre-danger px-1 text-[11px] font-bold tabular-nums text-white ring-2 ring-tre-navy"
          >
            {naoLidas}
          </span>
        )}
      </Button>
      <Select value={servidor.matricula} onValueChange={trocarServidor}>
        <SelectTrigger
          aria-label="Ver como (servidor de demonstração)"
          className="h-10 w-40 gap-2 rounded-full border-white/20 bg-white/10 pl-3 text-white hover:bg-white/15 focus:ring-2 focus:ring-tre-gold-soft focus:ring-offset-0 sm:w-56 [&>svg]:text-white [&>svg]:opacity-80"
        >
          <Users className="size-4 shrink-0 text-tre-gold-soft" aria-hidden />
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={MENU_SELECT} align="end">
          {SERVIDORES_TRE.map((s) => (
            <SelectItem key={s.matricula} value={s.matricula} className="min-h-10 rounded-lg">
              {nomeCurto(s.nome)} · {s.matricula}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <AvatarIniciais nome={servidor.nome} className="hidden sm:grid" />
    </>
  );

  /* ---------- Render ---------- */

  return (
    <TreShell
      perfil="servidor"
      titulo="Portal do Servidor"
      subtitulo={`Olá, ${primeiroNome} · ${servidor.lotacao}`}
      acoes={acoes}
    >
      {/* Carteirinha + saúde */}
      <div className="grid gap-6 lg:grid-cols-3 print:hidden">
        <GlassCard
          variante="navy"
          as="section"
          aria-labelledby="carteirinha-titulo"
          className={cn("relative overflow-hidden p-5 sm:p-7 lg:col-span-2", ENTRADA, ATRASO[0])}
        >
          <span aria-hidden className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-tre-gold/20 blur-3xl" />
          <span aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-tre-green/25 blur-3xl" />
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

          <div className="relative flex flex-col gap-6 sm:flex-row">
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="relative h-8 w-11 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-tre-gold-soft to-tre-gold shadow-glow-gold ring-1 ring-white/30"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-px bg-tre-navy-deep/25" />
                    <span className="absolute inset-y-0 left-1/3 w-px bg-tre-navy-deep/25" />
                    <span className="absolute inset-y-0 right-1/3 w-px bg-tre-navy-deep/25" />
                  </span>
                  <div className="leading-tight">
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-tre-gold-soft">
                      <Shield className="size-3.5" aria-hidden />
                      TRE-PA Saúde
                    </p>
                    <h2 id="carteirinha-titulo" className="text-sm font-medium text-white/85">
                      Carteirinha digital
                    </h2>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                  <span aria-hidden className={cn("size-1.5 rounded-full", servidor.ativo ? "bg-emerald-400" : "bg-slate-300")} />
                  {servidor.ativo ? "Ativa" : "Inativa"}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <AvatarIniciais nome={servidor.nome} tamanho="lg" className="ring-tre-gold-soft/60" />
                <div className="min-w-0">
                  <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">{servidor.nome}</p>
                  <p className="text-sm text-white/80">{servidor.cargo}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-white/70">Nº da carteirinha</p>
                <p className="font-mono text-lg font-semibold tracking-[0.2em] text-white sm:text-xl">{servidor.carteirinha_saude}</p>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-sm sm:gap-x-6">
                <div className="min-w-0">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Matrícula</dt>
                  <dd className="mt-0.5 text-base font-semibold tabular-nums text-white">{servidor.matricula}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">CPF</dt>
                  <dd className="-my-1.5 flex flex-wrap items-center gap-x-0.5">
                    <span className="whitespace-nowrap font-semibold tabular-nums text-white">
                      {cpfVisivel ? servidor.cpf : mascararCPF(servidor.cpf)}
                    </span>
                    <button
                      type="button"
                      aria-pressed={cpfVisivel}
                      aria-label="Mostrar CPF completo"
                      onClick={() => setCpfVisivel((v) => !v)}
                      className="tre-ring grid size-10 shrink-0 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                    >
                      {cpfVisivel ? <EyeOff className="size-4" aria-hidden /> : <Eye className="size-4" aria-hidden />}
                    </button>
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Lotação</dt>
                  <dd className="mt-0.5 font-semibold text-white">{servidor.lotacao}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-white/70">Comarca</dt>
                  <dd className="mt-0.5 flex items-center gap-1 font-semibold text-white">
                    <MapPin className="size-3.5 shrink-0 text-tre-gold-soft" aria-hidden />
                    {servidor.comarca} - {servidor.estado}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4 text-sm text-white/90">
                <span className="inline-flex min-w-0 items-center gap-2 break-all">
                  <Mail className="size-4 shrink-0 text-white/70" aria-hidden />
                  <span className="sr-only">E-mail: </span>
                  {servidor.email}
                </span>
                <span className="inline-flex items-center gap-2 tabular-nums">
                  <Phone className="size-4 shrink-0 text-white/70" aria-hidden />
                  <span className="sr-only">Telefone: </span>
                  {servidor.telefone}
                </span>
              </div>
            </div>

            {/* QR sempre visível (também no celular) */}
            <div className="flex items-center gap-4 rounded-2xl bg-white p-3 text-tre-navy-deep shadow-lg sm:w-44 sm:flex-col sm:justify-center sm:gap-2 sm:self-center sm:p-4 sm:text-center">
              <QrCode className="size-20 shrink-0 sm:size-28" strokeWidth={1.5} aria-hidden />
              <div className="min-w-0 flex-1 sm:w-full sm:flex-none">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">Código de validação</p>
                <p className="break-all font-mono text-xs font-semibold">{servidor.qr_code}</p>
                <Button
                  size="sm"
                  onClick={() => setQrAberto(true)}
                  className={cn(treBotao({ tom: "primario" }), "tre-ring mt-2 h-10 w-full rounded-xl")}
                >
                  <Maximize2 aria-hidden />
                  Apresentar
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard
          as="section"
          aria-labelledby="saude-titulo"
          className={cn("flex flex-col p-5 sm:p-6", ENTRADA, ATRASO[1])}
        >
          <SectionHeader id="saude-titulo" titulo="Informações de saúde" icone={HeartPulse} />

          <div className="mt-5 space-y-5">
            <div className="tre-inset flex items-center justify-between gap-3 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid size-10 place-items-center rounded-xl bg-tre-danger/10 text-tre-danger">
                  <Droplet className="size-5" />
                </span>
                <p className="text-sm font-semibold text-slate-700">Tipo sanguíneo</p>
              </div>
              <span className="tre-tone-danger rounded-2xl px-4 py-2 text-2xl font-extrabold tabular-nums">
                {servidor.tipo_sanguineo}
              </span>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600">Alergias</h3>
              {alergias.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {alergias.map((alergia) => (
                    <li key={alergia}>
                      <ToneBadge tom="warning" className="px-2.5 py-1 text-sm">
                        <TriangleAlert className="size-3.5" aria-hidden />
                        {alergia}
                      </ToneBadge>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="size-4 shrink-0 text-tre-success" aria-hidden />
                  Sem alergias registradas
                </p>
              )}
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600">Comorbidades</h3>
              {comorbidades.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {comorbidades.map((c) => (
                    <li key={c}>
                      <ToneBadge tom="info" className="px-2.5 py-1 text-sm">
                        {c}
                      </ToneBadge>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-600">Nenhuma registrada</p>
              )}
            </div>
          </div>

          <p className="mt-auto flex items-start gap-2 pt-6 text-xs text-slate-600">
            <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            Em caso de dúvidas, entre em contato com o Núcleo de Saúde.
          </p>
        </GlassCard>
      </div>

      {/* KPIs */}
      <section aria-label="Resumo" className="mt-6 grid gap-4 sm:grid-cols-3 print:hidden">
        <div className={cn("relative", ENTRADA, ATRASO[2])}>
          <KpiCard
            rotulo="Próximo atendimento"
            icone={CalendarClock}
            tom="info"
            valor={
              dataProximo ? (
                <span className="whitespace-nowrap">
                  {dataProximo.dia}/{dataProximo.mes}
                  <span className="text-lg font-semibold text-slate-600">/{dataProximo.ano}</span>
                </span>
              ) : (
                "Nenhum"
              )
            }
            detalhe={
              proximoAtendimento ? (
                <>
                  <ToneBadge tom="info">{quando(proximoAtendimento.data)}</ToneBadge>
                  <span className="line-clamp-2 w-full">
                    {proximoAtendimento.hora === HORA_A_DEFINIR ? "Horário a definir" : proximoAtendimento.hora} ·{" "}
                    {proximoAtendimento.local}
                  </span>
                </>
              ) : (
                <span>Toque para solicitar um agendamento</span>
              )
            }
            onClick={proximoAtendimento ? () => abrirAgendamento(proximoAtendimento.id) : abrirNovoAgendamento}
            className={cn("h-full", proximoAtendimento && "pb-[4.25rem]")}
          />
          {proximoAtendimento && (
            <Button
              size="sm"
              onClick={abrirNovoAgendamento}
              className={cn(treBotao({ tom: "primario" }), "tre-ring absolute bottom-4 left-5 z-10 h-10 rounded-xl")}
            >
              <CalendarPlus aria-hidden />
              Solicitar<span className="sr-only"> agendamento</span>
            </Button>
          )}
        </div>

        <KpiCard
          rotulo="Notificações"
          icone={Bell}
          tom={naoLidas > 0 ? "danger" : "navy"}
          valor={formatNumero(naoLidas)}
          detalhe={
            naoLidas > 0
              ? `${naoLidas === 1 ? "não lida" : "não lidas"} de ${formatNumero(notificacoes.length)} · abrir avisos`
              : notificacoes.length > 0
                ? "Tudo lido · ver avisos"
                : "Nenhuma notificação"
          }
          onClick={() => setNotificacoesAbertas(true)}
          className={cn("h-full", ENTRADA, ATRASO[3])}
        />

        <KpiCard
          rotulo="Resultados disponíveis"
          icone={FlaskConical}
          tom="green"
          valor={formatNumero(examesComLaudo.length)}
          detalhe={exames.length > 0 ? `de ${plural(exames.length, "exame", "exames")} · ver no histórico` : "Nenhum exame registrado"}
          onClick={verResultados}
          ativo={aba === "historico" && filtroCategoria === "Exames"}
          className={cn("h-full", ENTRADA, ATRASO[4])}
        />
      </section>

      {/* Abas */}
      <section id={ID_SECAO_ABAS} aria-label="Conteúdo do portal" className={cn("mt-8 scroll-mt-36", ENTRADA, ATRASO[4])}>
        <Tabs value={aba} onValueChange={setAba}>
          <GlassTabsList aria-label="Seções do portal do servidor" className="print:hidden">
            <GlassTabsTrigger value="historico" className="min-h-10 gap-1.5 px-3 sm:gap-2 sm:px-4">
              <History className="hidden size-4 sm:block" aria-hidden />
              <span className="sm:hidden">Histórico</span>
              <span className="hidden sm:inline">Histórico de saúde</span>
              <ContadorAba valor={historicoServidor.length} />
            </GlassTabsTrigger>
            <GlassTabsTrigger value="agendamentos" className="min-h-10 gap-1.5 px-3 sm:gap-2 sm:px-4">
              <CalendarDays className="hidden size-4 sm:block" aria-hidden />
              <span className="sm:hidden">Agenda</span>
              <span className="hidden sm:inline">Agendamentos</span>
              <ContadorAba valor={agendamentosServidor.length} />
            </GlassTabsTrigger>
            <GlassTabsTrigger value="documentos" className="min-h-10 gap-1.5 px-3 sm:gap-2 sm:px-4">
              <FileText className="hidden size-4 sm:block" aria-hidden />
              <span className="sm:hidden">Docs</span>
              <span className="hidden sm:inline">Documentos</span>
              <ContadorAba valor={documentosServidor.length} />
            </GlassTabsTrigger>
          </GlassTabsList>

          {/* ---------- Histórico ---------- */}
          <TabsContent value="historico" className="mt-4 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
            <GlassCard variante="forte" as="section" aria-labelledby="historico-titulo" className="overflow-hidden">
              <div className="p-5 sm:p-6">
                <SectionHeader
                  id="historico-titulo"
                  titulo="Linha do tempo de saúde"
                  descricao="Consultas, exames, internações e cirurgias, do mais recente ao mais antigo."
                  icone={History}
                  contador={historicoFiltrado.length}
                  acoes={
                    <Button
                      onClick={() => window.print()}
                      disabled={historicoFiltrado.length === 0}
                      className={cn(BOTAO_VIDRO, "tre-ring h-10 rounded-xl print:hidden")}
                    >
                      <Printer aria-hidden />
                      Exportar PDF
                    </Button>
                  }
                />

                <p className="mt-3 hidden text-sm text-slate-700 print:block">
                  {servidor.nome} · matrícula {servidor.matricula} · {servidor.lotacao}
                  {filtroCategoria !== "Todos" && ` · categoria: ${filtroCategoria}`}
                  {busca.trim() && ` · busca: “${busca.trim()}”`}
                </p>

                {historicoServidor.length > 0 && (
                  <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between print:hidden">
                    <div role="group" aria-label="Filtrar por categoria" className="tre-scroll-x -mx-1 flex gap-2 px-1 py-1">
                      <ChipFiltro
                        rotulo="Todos"
                        contagem={historicoServidor.length}
                        ativo={filtroCategoria === "Todos"}
                        onClick={() => setFiltroCategoria("Todos")}
                      />
                      {ORDEM_CATEGORIAS.filter((c) => contagemCategorias[c] > 0 || filtroCategoria === c).map((c) => (
                        <ChipFiltro
                          key={c}
                          rotulo={c}
                          contagem={contagemCategorias[c]}
                          ponto={CATEGORIAS[c].no}
                          ativo={filtroCategoria === c}
                          onClick={() => setFiltroCategoria(c)}
                        />
                      ))}
                    </div>
                    <div className="relative w-full lg:max-w-xs">
                      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-600" aria-hidden />
                      <Input
                        type="search"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        aria-label="Buscar no histórico por descrição, médico ou laboratório"
                        placeholder="Descrição, médico ou laboratório"
                        className={cn(TRE_CAMPO, "pl-10")}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/70 px-3 pb-5 pt-5 sm:px-6">
                {historicoServidor.length === 0 ? (
                  <EmptyState
                    icone={History}
                    titulo="Nenhum registro de saúde"
                    descricao={`Ainda não há consultas, exames, internações ou cirurgias registradas para ${primeiroNome}.`}
                  />
                ) : historicoFiltrado.length === 0 ? (
                  <EmptyState
                    icone={SearchX}
                    titulo="Nada encontrado"
                    descricao="Nenhum registro corresponde aos filtros escolhidos."
                    acao={
                      <Button
                        onClick={() => {
                          setFiltroCategoria("Todos");
                          setBusca("");
                        }}
                        className={cn(BOTAO_VIDRO, "tre-ring h-10 rounded-xl")}
                      >
                        Limpar filtros
                      </Button>
                    }
                  />
                ) : (
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute bottom-6 left-[19px] top-2 w-0.5 rounded-full bg-gradient-to-b from-tre-navy/30 via-tre-navy/15 to-transparent"
                    />
                    <ol className="relative space-y-6">
                      {gruposHistorico.map((grupo) => (
                        <li key={grupo.chave}>
                          <h3 className="relative flex min-h-6 items-center pl-14 text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                            <span aria-hidden className="absolute left-[14px] size-3 rounded-full border-2 border-tre-navy/30 bg-white" />
                            {grupo.rotulo}
                          </h3>
                          <ol className="mt-2 space-y-2">
                            {grupo.itens.map((item) => {
                              const cat = CATEGORIAS[item.categoria];
                              const IconeCat = cat.icone;
                              const prof = item.laudo ? profissionalDoLaudo(item.laudo).nome ?? item.laudo.laboratorio : undefined;
                              const destacado = destaqueHistorico === item.id;
                              return (
                                <li key={item.id} id={`hist-${item.id}`} className="relative scroll-mt-40 pl-14 print:break-inside-avoid">
                                  <span
                                    aria-hidden
                                    className={cn(
                                      "absolute left-0 top-4 grid size-10 place-items-center rounded-full text-white shadow-md ring-4 ring-white/90",
                                      cat.no,
                                    )}
                                  >
                                    <IconeCat className="size-[18px]" />
                                  </span>
                                  <article
                                    className={cn(
                                      "group relative rounded-2xl p-4 transition-colors hover:bg-white/60",
                                      destacado && "bg-tre-gold/10 ring-2 ring-tre-gold/60",
                                    )}
                                  >
                                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold">
                                      <span className={cn("uppercase tracking-wide", cat.texto)}>{cat.singular}</span>
                                      <span aria-hidden className="text-slate-600">
                                        •
                                      </span>
                                      <time dateTime={item.data_realizacao} className="tabular-nums text-slate-600">
                                        {formatData(item.data_realizacao)}
                                      </time>
                                    </p>
                                    <h4 className="mt-1 font-semibold text-tre-navy">{item.descricao}</h4>
                                    <p className="mt-1 line-clamp-2 text-sm text-slate-600 print:line-clamp-none">{item.resultado}</p>
                                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                      <StatusBadge status={item.laudo ? "Concluído" : "Em processamento"} />
                                      {item.laudo && (
                                        <ToneBadge tom="info">
                                          <FileText className="size-3" aria-hidden />
                                          PDF disponível
                                        </ToneBadge>
                                      )}
                                      {prof && (
                                        <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                                          <UserRound className="size-3.5" aria-hidden />
                                          {prof}
                                        </span>
                                      )}
                                      <button
                                        type="button"
                                        onClick={() => abrirLaudo(item.id)}
                                        className="tre-ring ml-auto inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-sm font-semibold text-tre-navy after:absolute after:inset-0 after:rounded-2xl print:hidden"
                                      >
                                        {item.laudo ? "Ver laudo" : "Ver detalhes"}
                                        <span className="sr-only">: {item.descricao}</span>
                                        <ChevronRight className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden />
                                      </button>
                                    </div>
                                  </article>
                                </li>
                              );
                            })}
                          </ol>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </GlassCard>
          </TabsContent>

          {/* ---------- Agendamentos ---------- */}
          <TabsContent value="agendamentos" className="mt-4 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
            <GlassCard variante="forte" as="section" aria-labelledby="agendamentos-titulo" className="p-5 sm:p-6">
              <SectionHeader
                id="agendamentos-titulo"
                titulo="Meus agendamentos"
                descricao="Toque em um agendamento para ver detalhes, adicioná-lo à agenda ou cancelar."
                icone={CalendarDays}
                contador={agendamentosServidor.length}
                acoes={
                  <Button onClick={abrirNovoAgendamento} className={cn(treBotao({ tom: "primario" }), "tre-ring h-10 rounded-xl")}>
                    <Plus aria-hidden />
                    Novo agendamento
                  </Button>
                }
              />

              {agendamentosServidor.length === 0 ? (
                <EmptyState
                  className="mt-6"
                  icone={CalendarPlus}
                  titulo="Você não possui agendamentos"
                  descricao="Solicite consulta, exame ou procedimento na rede credenciada. O Núcleo de Saúde confirma data, horário e local."
                  acao={
                    <Button onClick={abrirNovoAgendamento} className={cn(treBotao({ tom: "primario" }), "tre-ring h-10 rounded-xl")}>
                      <CalendarPlus aria-hidden />
                      Solicitar agendamento
                    </Button>
                  }
                />
              ) : (
                <div className="mt-6 space-y-8">
                  {(
                    [
                      {
                        chave: "proximos",
                        titulo: "Próximos",
                        dica: `a partir de ${formatData(DATA_REFERENCIA_TRE)} (data de referência da demonstração)`,
                        itens: proximos,
                        vazio: "Nenhum atendimento marcado daqui para frente.",
                      },
                      {
                        chave: "anteriores",
                        titulo: "Anteriores",
                        dica: undefined,
                        itens: anteriores,
                        vazio: "Nenhum atendimento anterior registrado.",
                      },
                    ] as const
                  ).map((bloco) => (
                    <section key={bloco.chave} aria-labelledby={`agd-bloco-${bloco.chave}`}>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h3 id={`agd-bloco-${bloco.chave}`} className="flex items-center gap-2 font-semibold text-tre-navy">
                          {bloco.titulo}
                          <span className="tre-tone-neutral rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums">
                            {formatNumero(bloco.itens.length)}
                          </span>
                        </h3>
                        {bloco.dica && <p className="text-xs text-slate-600">{bloco.dica}</p>}
                      </div>

                      {bloco.itens.length === 0 ? (
                        <EmptyState compacto className="mt-3" icone={CalendarDays} titulo={bloco.vazio} />
                      ) : (
                        <ul className="mt-3 grid gap-3 lg:grid-cols-2">
                          {bloco.itens.map((ag) => {
                            const destacado = destaqueAgendamento === ag.id;
                            const futuro = ag.data >= DATA_REFERENCIA_TRE;
                            return (
                              <li key={ag.id} id={`agd-${ag.id}`} className="scroll-mt-40">
                                <button
                                  type="button"
                                  onClick={() => abrirAgendamento(ag.id)}
                                  className={cn(
                                    "tre-inset tre-ring group flex h-full w-full items-start gap-3 rounded-2xl p-4 text-left sm:gap-4 transition-all hover:bg-white/85 motion-safe:hover:-translate-y-0.5",
                                    destacado && "bg-tre-gold/10 ring-2 ring-tre-gold",
                                    ag.status === "Cancelado" && "opacity-80",
                                  )}
                                >
                                  <BlocoData iso={ag.data} />
                                  <span className="min-w-0 flex-1">
                                    <span className="flex flex-wrap items-center gap-2">
                                      <span
                                        className={cn(
                                          "font-semibold text-tre-navy",
                                          ag.status === "Cancelado" && "line-through decoration-tre-danger/60",
                                        )}
                                      >
                                        {ag.descricao}
                                      </span>
                                      <StatusBadge status={ag.status} />
                                    </span>
                                    <span className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                                      <Stethoscope className="size-3.5 shrink-0" aria-hidden />
                                      {ag.medico}
                                    </span>
                                    <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                                      <span className="inline-flex items-center gap-1.5 tabular-nums">
                                        <Clock className="size-3.5 shrink-0" aria-hidden />
                                        {formatData(ag.data)} {textoHora(ag.hora)}
                                      </span>
                                      <span className="inline-flex min-w-0 items-center gap-1.5">
                                        <MapPin className="size-3.5 shrink-0" aria-hidden />
                                        <span className="line-clamp-1">{ag.local}</span>
                                      </span>
                                    </span>
                                    {futuro && ag.status !== "Cancelado" && (
                                      <span className="mt-2 flex">
                                        <ToneBadge tom="info">{quando(ag.data)}</ToneBadge>
                                      </span>
                                    )}
                                  </span>
                                  <ChevronRight
                                    className="mt-1 hidden size-5 shrink-0 text-slate-600 transition-transform motion-safe:group-hover:translate-x-0.5 sm:block"
                                    aria-hidden
                                  />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              )}
            </GlassCard>
          </TabsContent>

          {/* ---------- Documentos ---------- */}
          <TabsContent value="documentos" className="mt-4 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0">
            <GlassCard variante="forte" as="section" aria-labelledby="documentos-titulo" className="p-5 sm:p-6">
              <SectionHeader
                id="documentos-titulo"
                titulo="Meus documentos"
                descricao="Laudos, resultados e receitas emitidos pela rede credenciada."
                icone={FolderOpen}
                contador={documentosFiltrados.length}
              />

              {documentosServidor.length === 0 ? (
                <EmptyState
                  className="mt-6"
                  icone={FolderOpen}
                  titulo="Nenhum documento disponível"
                  descricao="Laudos e receitas aparecem aqui assim que o credenciado os anexar."
                />
              ) : (
                <>
                  <div role="group" aria-label="Filtrar por tipo de documento" className="tre-scroll-x -mx-1 mt-5 flex gap-2 px-1 py-1">
                    <ChipFiltro
                      rotulo="Todos"
                      contagem={documentosServidor.length}
                      ativo={filtroDocumento === "Todos"}
                      onClick={() => setFiltroDocumento("Todos")}
                    />
                    {tiposDocumento.map((tipo) => (
                      <ChipFiltro
                        key={tipo}
                        rotulo={tipo === "Exame" ? "Exames" : "Receitas"}
                        contagem={documentosServidor.filter((d) => d.tipo === tipo).length}
                        ativo={filtroDocumento === tipo}
                        onClick={() => setFiltroDocumento(tipo)}
                      />
                    ))}
                  </div>

                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {documentosFiltrados.map((doc) => {
                      const cfg = DOC_CONFIG[doc.tipo];
                      const IconeDoc = cfg.icone;
                      return (
                        <li
                          key={doc.id}
                          className="tre-inset flex flex-wrap items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/85 sm:p-4"
                        >
                          <span aria-hidden className={cn("grid size-11 shrink-0 place-items-center rounded-xl", cfg.chip)}>
                            <IconeDoc className="size-5" />
                          </span>
                          <div className="min-w-[9rem] flex-1">
                            <p className="font-semibold text-tre-navy">{doc.titulo}</p>
                            <p className="mt-0.5 text-xs tabular-nums text-slate-600">
                              {doc.tipo} · {formatData(doc.data)} · {doc.tamanho}
                            </p>
                          </div>
                          <div className="ml-auto flex shrink-0 items-center gap-1">
                            <Button
                              variant="ghost"
                              onClick={() => verDocumento(doc)}
                              className={cn(treBotao({ tom: "fantasma" }), "tre-ring h-10 rounded-xl px-3")}
                            >
                              <Eye aria-hidden />
                              Ver<span className="sr-only"> {doc.titulo}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => baixarDocumento(doc)}
                              aria-label={`Baixar ${doc.titulo}`}
                              className={cn(treBotao({ tom: "fantasma" }), "tre-ring rounded-xl")}
                            >
                              <Download aria-hidden />
                            </Button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </GlassCard>
          </TabsContent>
        </Tabs>
      </section>

      {/* ============================================================
          Painéis
          ============================================================ */}

      {/* Laudo */}
      <GlassDialog open={laudoAberto} onOpenChange={setLaudoAberto}>
        {laudoItem && (
          <GlassPainel
            largura="lg"
            icone={CATEGORIAS[laudoItem.categoria].icone}
            titulo={laudoItem.descricao}
            descricao={`${CATEGORIAS[laudoItem.categoria].singular} · ${formatData(laudoItem.data_realizacao)} · ${laudoItem.id}`}
            rodape={
              <>
                <GlassDialogClose asChild>
                  <Button variant="ghost" className={cn(treBotao({ tom: "fantasma" }), "tre-ring mr-auto h-10 rounded-xl")}>
                    Fechar
                  </Button>
                </GlassDialogClose>
                <Button
                  onClick={() => imprimirLaudo(laudoItem)}
                  disabled={!laudoItem.laudo}
                  className={cn(BOTAO_VIDRO, "tre-ring h-10 rounded-xl")}
                >
                  <Printer aria-hidden />
                  Imprimir
                </Button>
                <Button
                  onClick={() => baixarLaudo(laudoItem)}
                  disabled={!laudoItem.laudo}
                  className={cn(treBotao({ tom: "primario" }), "tre-ring h-10 rounded-xl")}
                >
                  <Download aria-hidden />
                  Download
                </Button>
              </>
            }
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={laudoItem.laudo ? "Concluído" : "Em processamento"} tamanho="md" />
                {laudoItem.laudo && (
                  <ToneBadge tom="info" className="px-3 py-1 text-sm">
                    <FileText className="size-4" aria-hidden />
                    PDF disponível
                  </ToneBadge>
                )}
              </div>

              <dl className="tre-inset grid gap-4 rounded-2xl p-4 sm:grid-cols-2">
                {camposDoLaudo(laudoItem).map(([rotulo, valor]) => (
                  <ParInfo key={rotulo} rotulo={rotulo}>
                    {valor}
                  </ParInfo>
                ))}
                <ParInfo rotulo="Resumo do resultado" className="sm:col-span-2">
                  <span className="font-normal text-slate-700">{laudoItem.resultado}</span>
                </ParInfo>
              </dl>

              {laudoItem.laudo ? (
                <article aria-labelledby="laudo-papel-titulo" className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                  <header className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 id="laudo-papel-titulo" className="flex items-center gap-2 font-semibold text-tre-navy">
                      <FileText className="size-4" aria-hidden />
                      Laudo técnico
                    </h3>
                    <span className="text-xs tabular-nums text-slate-600">{formatData(laudoItem.data_realizacao)}</span>
                  </header>
                  <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-slate-800">
                    {laudoItem.laudo.conteudo}
                  </pre>
                </article>
              ) : (
                <div className="tre-tone-warning flex items-start gap-3 rounded-2xl p-4">
                  <Hourglass className="mt-0.5 size-5 shrink-0" aria-hidden />
                  <div>
                    <p className="font-semibold">Laudo em processamento</p>
                    <p className="mt-0.5 text-sm">
                      O credenciado ainda não anexou o laudo. Você será notificado quando ele estiver disponível para impressão e
                      download.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </GlassPainel>
        )}
      </GlassDialog>

      {/* Detalhe do agendamento */}
      <GlassDialog
        open={agendamentoAberto}
        onOpenChange={(aberto) => {
          setAgendamentoAberto(aberto);
          if (!aberto) setConfirmandoCancelamento(false);
        }}
      >
        {agendamentoSel &&
          (() => {
            const ag = agendamentoSel;
            const cred = credenciadoPorId(ag.credenciado_id);
            const futuro = ag.data >= DATA_REFERENCIA_TRE;
            const podeCancelar = futuro && (ag.status === "Pendente" || ag.status === "Confirmado");
            const podeAgendar = futuro && ag.status !== "Cancelado";
            const temLocal = ag.local !== LOCAL_A_DEFINIR;
            return (
              <GlassPainel
                largura="md"
                icone={CalendarCheck2}
                titulo={ag.descricao}
                descricao={`${ag.especialidade} · ${ag.id}`}
                rodape={
                  <>
                    {podeCancelar && !confirmandoCancelamento && (
                      <Button
                        variant="ghost"
                        onClick={() => setConfirmandoCancelamento(true)}
                        className={cn(BOTAO_PERIGO_SUAVE, "tre-ring mr-auto h-10 rounded-xl")}
                      >
                        <XCircle aria-hidden />
                        Cancelar solicitação
                      </Button>
                    )}
                    {temLocal ? (
                      <Button asChild className={cn(BOTAO_VIDRO, "tre-ring h-10 rounded-xl")}>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ag.local)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation aria-hidden />
                          Como chegar
                          <span className="sr-only"> (abre o Google Maps em nova aba)</span>
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className={cn(BOTAO_VIDRO, "h-10 rounded-xl")}>
                        <MapPin aria-hidden />
                        Local a definir
                      </Button>
                    )}
                    <Button
                      onClick={() => adicionarAgenda(ag)}
                      disabled={!podeAgendar}
                      className={cn(treBotao({ tom: "primario" }), "tre-ring h-10 rounded-xl")}
                    >
                      <CalendarPlus aria-hidden />
                      Adicionar à agenda
                    </Button>
                  </>
                }
              >
                <div className="space-y-5">
                  <div className="tre-inset flex items-center gap-4 rounded-2xl p-4">
                    <BlocoData iso={ag.data} grande />
                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-bold capitalize text-tre-navy">{diaDaSemana(ag.data)}</p>
                      <p className="text-sm tabular-nums text-slate-600">
                        {formatData(ag.data)} {textoHora(ag.hora)}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <StatusBadge status={ag.status} tamanho="md" />
                        {ag.status !== "Cancelado" && (
                          <ToneBadge tom={futuro ? "info" : "neutral"} className="px-3 py-1 text-sm">
                            {quando(ag.data)}
                          </ToneBadge>
                        )}
                      </div>
                    </div>
                  </div>

                  <dl className="grid gap-4 sm:grid-cols-2">
                    <ParInfo rotulo="Profissional">{ag.medico}</ParInfo>
                    <ParInfo rotulo="Especialidade">{ag.especialidade}</ParInfo>
                    <ParInfo rotulo="Local" className="sm:col-span-2">
                      {ag.local}
                    </ParInfo>
                    {cred && (
                      <ParInfo rotulo="Credenciado" className="sm:col-span-2">
                        {cred.nome_fantasia} · <span className="tabular-nums">{cred.telefone}</span>
                      </ParInfo>
                    )}
                    {ag.observacoes && (
                      <ParInfo rotulo="Observações" className="sm:col-span-2">
                        <span className="whitespace-pre-wrap font-normal text-slate-700">{ag.observacoes}</span>
                      </ParInfo>
                    )}
                  </dl>

                  {ag.status === "Pendente" && futuro && (
                    <p className="tre-tone-warning flex items-start gap-2 rounded-2xl p-3 text-sm">
                      <Hourglass className="mt-0.5 size-4 shrink-0" aria-hidden />
                      Aguardando confirmação do Núcleo de Saúde. Data, horário e local podem mudar.
                    </p>
                  )}

                  {confirmandoCancelamento && podeCancelar && (
                    <div role="alert" className="tre-tone-danger rounded-2xl p-4">
                      <p className="font-semibold">Cancelar esta solicitação?</p>
                      <p className="mt-0.5 text-sm">O credenciado e o Núcleo de Saúde serão avisados. Esta ação não pode ser desfeita.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button
                          variant="ghost"
                          onClick={() => setConfirmandoCancelamento(false)}
                          className={cn(BOTAO_VIDRO, "tre-ring h-10 rounded-xl")}
                        >
                          Manter
                        </Button>
                        <Button onClick={() => cancelarAgendamento(ag)} className={cn(treBotao({ tom: "perigo" }), "tre-ring h-10 rounded-xl")}>
                          <XCircle aria-hidden />
                          Sim, cancelar
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </GlassPainel>
            );
          })()}
      </GlassDialog>

      {/* Novo agendamento */}
      <GlassDialog open={novoAberto} onOpenChange={setNovoAberto}>
        <GlassPainel
          largura="md"
          icone={CalendarPlus}
          titulo="Solicitar agendamento"
          descricao="O Núcleo de Saúde confirma data, horário e local e avisa você por notificação."
          rodape={
            <>
              <GlassDialogClose asChild>
                <Button variant="ghost" className={cn(treBotao({ tom: "fantasma" }), "tre-ring h-10 rounded-xl")}>
                  Cancelar
                </Button>
              </GlassDialogClose>
              <Button type="submit" form="form-novo-agendamento" className={cn(treBotao({ tom: "sucesso" }), "tre-ring h-10 rounded-xl")}>
                <Send aria-hidden />
                Solicitar
              </Button>
            </>
          }
        >
          <form id="form-novo-agendamento" noValidate onSubmit={solicitarAgendamento} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Campo id="agd-tipo" rotulo="Tipo">
                <Select value={form.tipo} onValueChange={(v) => atualizarForm("tipo", v)}>
                  <SelectTrigger id="agd-tipo" className={CAMPO_SELECT}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={MENU_SELECT}>
                    {TIPOS_ATENDIMENTO.map((t) => (
                      <SelectItem key={t} value={t} className="min-h-10 rounded-lg">
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Campo>

              <Campo
                id="agd-data"
                rotulo="Data preferencial *"
                erro={erros.data}
                ajuda={`A partir de ${formatData(DATA_REFERENCIA_TRE)}.`}
              >
                <Input
                  id="agd-data"
                  type="date"
                  min={DATA_REFERENCIA_TRE}
                  required
                  value={form.data}
                  onChange={(e) => atualizarForm("data", e.target.value)}
                  aria-invalid={Boolean(erros.data)}
                  aria-describedby={descritoPor("agd-data", erros.data, true)}
                  className={cn(TRE_CAMPO, erros.data && "border-tre-danger")}
                />
              </Campo>
            </div>

            <Campo id="agd-especialidade" rotulo="Especialidade *" erro={erros.especialidade}>
              <Select value={form.especialidade} onValueChange={escolherEspecialidade}>
                <SelectTrigger
                  id="agd-especialidade"
                  aria-invalid={Boolean(erros.especialidade)}
                  aria-describedby={descritoPor("agd-especialidade", erros.especialidade)}
                  className={cn(CAMPO_SELECT, erros.especialidade && "border-tre-danger")}
                >
                  <SelectValue placeholder="Escolha a especialidade" />
                </SelectTrigger>
                <SelectContent className={MENU_SELECT}>
                  {ESPECIALIDADES.map((e) => (
                    <SelectItem key={e} value={e} className="min-h-10 rounded-lg">
                      {e}
                    </SelectItem>
                  ))}
                  <SelectItem value={OUTRA_ESPECIALIDADE} className="min-h-10 rounded-lg">
                    Outra especialidade
                  </SelectItem>
                </SelectContent>
              </Select>
            </Campo>

            {form.especialidade === OUTRA_ESPECIALIDADE && (
              <Campo id="agd-especialidade-outra" rotulo="Qual especialidade? *" erro={erros.especialidadeOutra}>
                <Input
                  id="agd-especialidade-outra"
                  placeholder="Ex.: Dermatologia, Oftalmologia..."
                  value={form.especialidadeOutra}
                  onChange={(e) => atualizarForm("especialidadeOutra", e.target.value)}
                  aria-invalid={Boolean(erros.especialidadeOutra)}
                  aria-describedby={descritoPor("agd-especialidade-outra", erros.especialidadeOutra)}
                  className={cn(TRE_CAMPO, erros.especialidadeOutra && "border-tre-danger")}
                />
              </Campo>
            )}

            <Campo
              id="agd-credenciado"
              rotulo="Credenciado (opcional)"
              ajuda={
                form.especialidade && form.especialidade !== OUTRA_ESPECIALIDADE
                  ? `${plural(credenciadosDaEspecialidade.length, "credenciado atende", "credenciados atendem")} ${form.especialidade}.`
                  : "Escolha a especialidade para filtrar a rede credenciada."
              }
            >
              <Select value={form.credenciadoId} onValueChange={(v) => atualizarForm("credenciadoId", v)}>
                <SelectTrigger id="agd-credenciado" aria-describedby="agd-credenciado-ajuda" className={CAMPO_SELECT}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className={MENU_SELECT}>
                  <SelectItem value={SEM_PREFERENCIA} className="min-h-10 rounded-lg">
                    Sem preferência
                  </SelectItem>
                  {credenciadosDaEspecialidade.map((c) => (
                    <SelectItem key={c.id} value={c.id} className="min-h-10 rounded-lg">
                      {c.nome_fantasia} · {c.cidade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Campo>

            <Campo id="agd-observacoes" rotulo="Observações">
              <Textarea
                id="agd-observacoes"
                rows={3}
                placeholder="Informe sintomas, urgência ou preferências de horário..."
                value={form.observacoes}
                onChange={(e) => atualizarForm("observacoes", e.target.value)}
                className={cn(TRE_CAMPO, "h-auto min-h-24 py-3")}
              />
            </Campo>

            <p className="text-xs text-slate-600">* Campos obrigatórios.</p>
          </form>
        </GlassPainel>
      </GlassDialog>

      {/* Notificações */}
      <GlassDialog open={notificacoesAbertas} onOpenChange={setNotificacoesAbertas}>
        <GlassPainel
          lado="direita"
          largura="sm"
          icone={Bell}
          titulo="Notificações"
          descricao={naoLidas > 0 ? plural(naoLidas, "notificação não lida", "notificações não lidas") : "Você está em dia."}
          rodape={
            notificacoes.length > 0 ? (
              <Button
                variant="ghost"
                onClick={marcarTodasLidas}
                disabled={naoLidas === 0}
                className={cn(BOTAO_VIDRO, "tre-ring h-10 w-full rounded-xl sm:w-auto")}
              >
                <CheckCheck aria-hidden />
                Marcar todas como lidas
              </Button>
            ) : undefined
          }
        >
          {notificacoes.length === 0 ? (
            <EmptyState icone={BellOff} titulo="Nenhuma notificação" descricao="Avisos sobre agendamentos, resultados e autorizações aparecem aqui." />
          ) : (
            <div className="space-y-6">
              {(
                [
                  { chave: "novas", titulo: "Novas", itens: notificacoesNovas },
                  { chave: "anteriores", titulo: "Anteriores", itens: notificacoesAntigas },
                ] as const
              )
                .filter((g) => g.itens.length > 0)
                .map((grupo) => (
                  <section key={grupo.chave} aria-labelledby={`notif-${grupo.chave}`}>
                    <h3
                      id={`notif-${grupo.chave}`}
                      className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-600"
                    >
                      {grupo.titulo}
                      <span className="tre-tone-neutral rounded-full px-1.5 text-[11px] tabular-nums">{grupo.itens.length}</span>
                    </h3>
                    <ul className="space-y-2">
                      {grupo.itens.map((n) => {
                        const cfg = NOTIF_CONFIG[n.tipo];
                        const IconeNotif = cfg.icone;
                        const lida = lidas.has(n.id);
                        return (
                          <li key={n.id}>
                            <button
                              type="button"
                              onClick={() => abrirNotificacao(n)}
                              className={cn(
                                "tre-ring group flex w-full items-start gap-3 rounded-2xl p-3.5 text-left transition-colors",
                                lida
                                  ? "tre-inset hover:bg-white/85"
                                  : "bg-tre-info/[0.07] ring-1 ring-tre-info/20 hover:bg-tre-info/[0.12]",
                              )}
                            >
                              <span aria-hidden className={cn("grid size-10 shrink-0 place-items-center rounded-xl", cfg.chip)}>
                                <IconeNotif className="size-5" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-start justify-between gap-2">
                                  <span className="font-semibold text-tre-navy">
                                    {n.titulo}
                                    {!lida && <span className="sr-only"> (não lida)</span>}
                                  </span>
                                  {!lida && <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-tre-info" />}
                                </span>
                                <span className="mt-0.5 block text-sm text-slate-600">{n.mensagem}</span>
                                <span className="mt-2 flex items-center justify-between gap-2 text-xs">
                                  <time dateTime={n.data} className="tabular-nums text-slate-600">
                                    {formatData(n.data)}
                                  </time>
                                  <span className="inline-flex items-center gap-0.5 font-semibold text-tre-navy">
                                    {cfg.acao}
                                    <ChevronRight
                                      className="size-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
                                      aria-hidden
                                    />
                                  </span>
                                </span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
            </div>
          )}
        </GlassPainel>
      </GlassDialog>

      {/* Carteirinha em tela cheia */}
      <GlassDialog open={qrAberto} onOpenChange={setQrAberto}>
        <GlassPainel
          largura="sm"
          icone={QrCode}
          titulo="Carteirinha digital"
          descricao="Apresente este código ao credenciado para validar o atendimento."
        >
          <div className="rounded-3xl bg-white p-6 text-center text-tre-navy-deep shadow-sm ring-1 ring-slate-200">
            <QrCode className="mx-auto size-56 max-w-full" strokeWidth={1.25} aria-hidden />
            <p className="mt-3 break-all font-mono text-lg font-bold tracking-[0.2em]">{servidor.qr_code}</p>
            <p className="mt-4 font-semibold text-tre-navy">{servidor.nome}</p>
            <p className="text-sm tabular-nums text-slate-600">
              Matrícula {servidor.matricula} · Carteirinha {servidor.carteirinha_saude}
            </p>
          </div>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-600">
            <ToneBadge tom="gold">Em breve</ToneBadge>
            QR escaneável pelo credenciado.
          </p>
        </GlassPainel>
      </GlassDialog>
    </TreShell>
  );
}
