import type { LucideIcon } from "lucide-react";
import { Building2, ClipboardCheck, Stethoscope, Users } from "lucide-react";

export type PerfilTRE = "servidor" | "credenciado" | "auditor" | "gestor";

export interface PerfilConfig {
  id: PerfilTRE;
  rotulo: string;
  area: string;
  rota: string;              // rotas atuais preservadas
  etapa: 1 | 2 | 3 | 4;      // ordem no processo
  icone: LucideIcon;
  descricao: string;
  destaques: [string, string, string];
  cta: string;
  classes: { orb: string; dot: string; texto: string; barra: string };
}

export const PERFIS_TRE: Record<PerfilTRE, PerfilConfig> = {
  servidor: {
    id: "servidor", rotulo: "Servidor", area: "Área do Servidor", rota: "/tre/usuario", etapa: 1, icone: Users,
    descricao: "Carteirinha digital, histórico de saúde, laudos, agendamentos e avisos.",
    destaques: ["Carteirinha digital", "Histórico e laudos", "Agendamentos"],
    cta: "Entrar como Servidor",
    classes: { orb: "from-tre-info to-tre-navy text-white", dot: "bg-tre-info", texto: "text-tre-info", barra: "from-tre-info" },
  },
  credenciado: {
    id: "credenciado", rotulo: "Credenciado", area: "Área do Credenciado", rota: "/tre/prestador", etapa: 2, icone: Stethoscope,
    descricao: "Valida o servidor, envia o XML TISS com itens extras e acompanha as faturas.",
    destaques: ["Validação do servidor", "XML TISS + itens extras", "Status e glosas"],
    cta: "Entrar como Credenciado",
    classes: { orb: "from-tre-green to-tre-navy text-white", dot: "bg-tre-green", texto: "text-tre-green", barra: "from-tre-green" },
  },
  auditor: {
    id: "auditor", rotulo: "Auditor", area: "Área do Auditor", rota: "/tre/auditor", etapa: 3, icone: ClipboardCheck,
    descricao: "Fila de faturas com checklist e glosas, lotes de reciprocidade e pareceres OPME.",
    destaques: ["Checklist e glosas", "Reciprocidade", "Pareceres OPME"],
    cta: "Entrar como Auditor",
    classes: { orb: "from-tre-gold-soft to-tre-gold text-tre-navy-deep", dot: "bg-tre-gold", texto: "text-tre-gold-ink", barra: "from-tre-gold" },
  },
  gestor: {
    id: "gestor", rotulo: "Gestor", area: "Área do Gestor", rota: "/tre/gestor", etapa: 4, icone: Building2,
    descricao: "Custos, utilização por servidor e credenciado, alertas e relatórios.",
    destaques: ["Painel de custos", "Alertas acionáveis", "Relatórios CSV/PDF"],
    cta: "Entrar como Gestor",
    classes: { orb: "from-tre-terra to-[#7F2508] text-white", dot: "bg-tre-terra", texto: "text-tre-terra", barra: "from-tre-terra" },
  },
};

export const ORDEM_PERFIS: PerfilTRE[] = ["servidor", "credenciado", "auditor", "gestor"];
