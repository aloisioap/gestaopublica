import type { LucideIcon } from "lucide-react";
import {
  Ban, Banknote, CalendarClock, CheckCircle2, CircleDot, ClipboardCheck, Clock, FileCheck2,
  Hourglass, Receipt, Scale, ShieldCheck, Stethoscope, TriangleAlert, XCircle,
} from "lucide-react";
import type { FLUXO_STATUS_TRE } from "@/lib/dados-tre";

export type TomTRE = "neutral" | "info" | "progress" | "success" | "warning" | "danger" | "gold";

export const TOM_CLASSES: Record<TomTRE, string> = {
  neutral: "tre-tone-neutral", info: "tre-tone-info", progress: "tre-tone-progress",
  success: "tre-tone-success", warning: "tre-tone-warning", danger: "tre-tone-danger", gold: "tre-tone-gold",
};

export interface StatusInfo { rotulo: string; tom: TomTRE; icone: LucideIcon }
export type StatusFluxoTRE = (typeof FLUXO_STATUS_TRE)[number];

/** O TypeScript obriga a mapear os 9 estados de FLUXO_STATUS_TRE */
export const STATUS_FLUXO_TRE: Record<StatusFluxoTRE, StatusInfo> = {
  Solicitado:  { rotulo: "Solicitado",  tom: "neutral",  icone: Clock },
  Validado:    { rotulo: "Validado",    tom: "info",     icone: ShieldCheck },
  Agendado:    { rotulo: "Agendado",    tom: "info",     icone: CalendarClock },
  Executado:   { rotulo: "Executado",   tom: "progress", icone: Stethoscope },
  Documentado: { rotulo: "Documentado", tom: "progress", icone: FileCheck2 },
  Faturado:    { rotulo: "Faturado",    tom: "gold",     icone: Receipt },
  Auditado:    { rotulo: "Auditado",    tom: "success",  icone: ClipboardCheck },
  Pago:        { rotulo: "Pago",        tom: "success",  icone: Banknote },
  Glosado:     { rotulo: "Glosado",     tom: "danger",   icone: TriangleAlert },
};

const OUTROS_STATUS: Record<string, StatusInfo> = {
  // Fatura
  Paga: { rotulo: "Paga", tom: "success", icone: Banknote },
  Auditada: { rotulo: "Auditada", tom: "success", icone: ClipboardCheck },
  Glosada: { rotulo: "Glosada", tom: "danger", icone: TriangleAlert },
  Aprovada: { rotulo: "Aprovada", tom: "success", icone: CheckCircle2 },
  Inserida: { rotulo: "Inserida", tom: "info", icone: Receipt },
  "Em análise": { rotulo: "Em análise", tom: "progress", icone: Hourglass },
  "Aguardando Análise": { rotulo: "Aguardando", tom: "warning", icone: Hourglass },
  "Em recurso": { rotulo: "Em recurso", tom: "gold", icone: Scale },
  // Item / guia / agendamento / histórico
  Pendente: { rotulo: "Pendente", tom: "warning", icone: Clock },
  Aprovado: { rotulo: "Aprovado", tom: "success", icone: CheckCircle2 },
  Confirmado: { rotulo: "Confirmado", tom: "success", icone: CheckCircle2 },
  Cancelado: { rotulo: "Cancelado", tom: "danger", icone: XCircle },
  Concluído: { rotulo: "Concluído", tom: "success", icone: CheckCircle2 },
  "Em processamento": { rotulo: "Em processamento", tom: "warning", icone: Hourglass },
  // Lotes e guias de reciprocidade
  "Em Auditoria": { rotulo: "Em auditoria", tom: "progress", icone: Hourglass },
  Análise: { rotulo: "Em análise", tom: "progress", icone: Hourglass },
  // Autorizações e pareceres OPME
  Autorizado: { rotulo: "Autorizado", tom: "success", icone: ShieldCheck },
  Vencida: { rotulo: "Vencida", tom: "danger", icone: Ban },
  Negado: { rotulo: "Negado", tom: "danger", icone: XCircle },
  "Com Pendência": { rotulo: "Com pendência", tom: "warning", icone: TriangleAlert },
  "Autorizado Parcialmente": { rotulo: "Autorizado parcialmente", tom: "gold", icone: Scale },
  // Cadastro
  Ativo: { rotulo: "Ativo", tom: "success", icone: CheckCircle2 },
  Inativo: { rotulo: "Inativo", tom: "neutral", icone: Ban },
};

const normalizar = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const INDICE = new Map<string, StatusInfo>(
  Object.entries({ ...OUTROS_STATUS, ...STATUS_FLUXO_TRE }).map(([chave, info]) => [normalizar(chave), info]),
);

/** Aceita variações de caixa e acento ("Em Análise" = "Em análise"). Fallback neutro. */
export function getStatusInfo(status: string): StatusInfo {
  return INDICE.get(normalizar(status)) ?? { rotulo: status, tom: "neutral", icone: CircleDot };
}

/** Etapas lineares (Glosado é desvio) com o perfil responsável. */
export const ETAPAS_FLUXO_TRE = [
  { status: "Solicitado", perfil: "servidor" },
  { status: "Validado", perfil: "credenciado" },
  { status: "Agendado", perfil: "servidor" },
  { status: "Executado", perfil: "credenciado" },
  { status: "Documentado", perfil: "credenciado" },
  { status: "Faturado", perfil: "credenciado" },
  { status: "Auditado", perfil: "auditor" },
  { status: "Pago", perfil: "gestor" },
] as const satisfies ReadonlyArray<{ status: StatusFluxoTRE; perfil: "servidor" | "credenciado" | "auditor" | "gestor" }>;
