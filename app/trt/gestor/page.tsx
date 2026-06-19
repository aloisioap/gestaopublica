"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  DollarSign,
  FileText,
  BarChart3,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Download,
  Search,
  Eye,
  X,
  Stethoscope,
  Microscope,
  HeartPulse,
  Activity,
  User,
  Droplet,
  Clock,
  Zap,
  ChevronRight,
  ClipboardList,
  Target,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  CORES_TRT,
  ESTATISTICAS_TRT,
  CREDENCIADOS_TRT,
  SERVIDORES_TRT,
  HISTORICO_SAUDE_TRT,
} from "@/lib/dados-trt-8a-regiao";

// Mock de utilização por beneficiário
const UTILIZACAO_SERVIDORES = [
  {
    matricula: "TRT0001",
    nome: "Maria Santos Oliveira",
    cargo: "Analista Judiciário",
    comarca: "Belém",
    consultas_ano: 4,
    exames_ano: 8,
    internacoes_ano: 0,
    valor_total_ano: 2850.00,
    ultimo_atendimento: "2024-02-10",
    status: "Ativo",
  },
  {
    matricula: "TRT0002",
    nome: "João Carlos Silva",
    cargo: "Técnico Judiciário",
    comarca: "Belém",
    consultas_ano: 2,
    exames_ano: 3,
    internacoes_ano: 1,
    valor_total_ano: 8750.00,
    ultimo_atendimento: "2024-03-05",
    status: "Ativo",
  },
  {
    matricula: "TRT0003",
    nome: "Ana Paula Costa",
    cargo: "Analista Judiciário",
    comarca: "Macapá",
    consultas_ano: 6,
    exames_ano: 4,
    internacoes_ano: 0,
    valor_total_ano: 1850.00,
    ultimo_atendimento: "2024-03-20",
    status: "Ativo",
  },
  {
    matricula: "TRT0004",
    nome: "Pedro Henrique Lima",
    cargo: "Técnico Judiciário",
    comarca: "Santarém",
    consultas_ano: 1,
    exames_ano: 2,
    internacoes_ano: 0,
    valor_total_ano: 650.00,
    ultimo_atendimento: "2024-01-15",
    status: "Ativo",
  },
  {
    matricula: "TRT0005",
    nome: "Fernanda Souza",
    cargo: "Analista Judiciário",
    comarca: "Belém",
    consultas_ano: 3,
    exames_ano: 5,
    internacoes_ano: 0,
    valor_total_ano: 1450.00,
    ultimo_atendimento: "2024-02-28",
    status: "Ativo",
  },
];

const PROCESSOS_PENDENTES = [
  {
    id: "PROC-001",
    beneficiario: "Maria Santos Oliveira",
    matricula: "TRT0001",
    tipo: "Consulta",
    descricao: "Cardiologia - 1ª Consulta",
    data_solicitacao: "2024-06-08",
    prazo: "2024-06-15",
    prioridade: "alta",
    status: "Aguardando Autorização",
  },
  {
    id: "PROC-002",
    beneficiario: "João Carlos Silva",
    matricula: "TRT0002",
    tipo: "Exame",
    descricao: "Ressonância Magnética Lombar",
    data_solicitacao: "2024-06-09",
    prazo: "2024-06-14",
    prioridade: "alta",
    status: "Em Análise",
  },
  {
    id: "PROC-003",
    beneficiario: "Ana Paula Costa",
    matricula: "TRT0003",
    tipo: "Internação",
    descricao: "Cirurgia de Joelho - Eletiva",
    data_solicitacao: "2024-06-05",
    prazo: "2024-06-20",
    prioridade: "normal",
    status: "Em Análise",
  },
  {
    id: "PROC-004",
    beneficiario: "Pedro Henrique Lima",
    matricula: "TRT0004",
    tipo: "Exame",
    descricao: "Hemograma Completo",
    data_solicitacao: "2024-06-10",
    prazo: "2024-06-17",
    prioridade: "normal",
    status: "Aguardando Autorização",
  },
  {
    id: "PROC-005",
    beneficiario: "Fernanda Souza",
    matricula: "TRT0005",
    tipo: "Consulta",
    descricao: "Dermatologia - Retorno",
    data_solicitacao: "2024-06-11",
    prazo: "2024-06-25",
    prioridade: "baixa",
    status: "Autorizado",
  },
  {
    id: "PROC-006",
    beneficiario: "Maria Santos Oliveira",
    matricula: "TRT0001",
    tipo: "Exame",
    descricao: "Ecocardiograma",
    data_solicitacao: "2024-06-12",
    prazo: "2024-06-19",
    prioridade: "alta",
    status: "Aguardando Autorização",
  },
];

const FATURAS_KANBAN = {
  pendentes: [
    { id: "FAT-001", credenciado: "Hospital Metropolitano", valor: 12500, mes: "Jun/24" },
    { id: "FAT-002", credenciado: "Clínica São Lucas", valor: 3800, mes: "Jun/24" },
    { id: "FAT-008", credenciado: "Dr. Ana Paula Santos", valor: 900, mes: "Jun/24" },
  ],
  em_auditoria: [
    { id: "FAT-003", credenciado: "Lab Einstein", valor: 5200, mes: "Mai/24" },
    { id: "FAT-004", credenciado: "Dr. Roberto Fernandes", valor: 1500, mes: "Mai/24" },
  ],
  glosadas: [
    { id: "FAT-005", credenciado: "Hospital Ortopédico", valor: 8900, mes: "Abr/24", motivo: "Documentação incompleta" },
  ],
  pagas: [
    { id: "FAT-006", credenciado: "Clínica Cardiológica", valor: 6700, mes: "Mar/24" },
    { id: "FAT-007", credenciado: "Lab Belém", valor: 2100, mes: "Mar/24" },
  ],
};

const METAS_PERIODO = [
  { label: "Taxa de Glosa", atual: 8.5, meta: 10, unidade: "%", menor_melhor: true },
  { label: "Tempo Médio Auditoria", atual: 4.2, meta: 5, unidade: "dias", menor_melhor: true },
  { label: "Faturas Processadas", atual: 142, meta: 160, unidade: "un", menor_melhor: false },
  { label: "Satisfação Credenciados", atual: 4.1, meta: 4.0, unidade: "/5", menor_melhor: false },
];

export default function PainelGestorTRT() {
  const [periodo] = useState("2024");
  const [buscaServidor, setBuscaServidor] = useState("");
  const [buscaProcesso, setBuscaProcesso] = useState("");
  const [servidorSelecionado, setServidorSelecionado] = useState<typeof UTILIZACAO_SERVIDORES[0] | null>(null);
  const [modalServidorAberto, setModalServidorAberto] = useState(false);
  const [ultimaAtualizacao] = useState(new Date());

  const dadosMensais = [
    { mes: "Jan", consultas: 45, exames: 32, internacoes: 8, cirurgias: 3, valor: 125000 },
    { mes: "Fev", consultas: 52, exames: 38, internacoes: 6, cirurgias: 4, valor: 142000 },
    { mes: "Mar", consultas: 48, exames: 35, internacoes: 12, cirurgias: 5, valor: 185000 },
    { mes: "Abr", consultas: 55, exames: 42, internacoes: 9, cirurgias: 2, valor: 158000 },
    { mes: "Mai", consultas: 60, exames: 48, internacoes: 10, cirurgias: 6, valor: 195000 },
    { mes: "Jun", consultas: 58, exames: 45, internacoes: 7, cirurgias: 4, valor: 168000 },
  ];

  const alertas = [
    {
      id: 1,
      tipo: "custo",
      mensagem: "Internação TRT0002 ultrapassou valor médio em 35%",
      severidade: "alta",
    },
    {
      id: 2,
      tipo: "frequencia",
      mensagem: "Beneficiário TRT0001 realizou 4 consultas no mesmo mês",
      severidade: "media",
    },
    {
      id: 3,
      tipo: "documentacao",
      mensagem: "Fatura FAT-2024-003 pendente de documentação",
      severidade: "baixa",
    },
    {
      id: 4,
      tipo: "prazo",
      mensagem: "PROC-002 vence em 2 dias sem autorização emitida",
      severidade: "alta",
    },
  ];

  const abrirModalServidor = (servidor: typeof UTILIZACAO_SERVIDORES[0]) => {
    setServidorSelecionado(servidor);
    setModalServidorAberto(true);
  };

  const getHistoricoServidor = (matricula: string) => {
    return HISTORICO_SAUDE_TRT.filter((h) => h.matricula === matricula).map(h => ({ ...h }));
  };

  const getDadosServidor = (matricula: string) => {
    return SERVIDORES_TRT.find((s) => s.matricula === matricula);
  };

  const servidoresFiltrados = UTILIZACAO_SERVIDORES.filter(
    (s) =>
      s.nome.toLowerCase().includes(buscaServidor.toLowerCase()) ||
      s.matricula.toLowerCase().includes(buscaServidor.toLowerCase())
  );

  const processosFiltrados = PROCESSOS_PENDENTES.filter(
    (p) =>
      p.beneficiario.toLowerCase().includes(buscaProcesso.toLowerCase()) ||
      p.descricao.toLowerCase().includes(buscaProcesso.toLowerCase()) ||
      p.status.toLowerCase().includes(buscaProcesso.toLowerCase())
  );

  const maxValorMensal = Math.max(...dadosMensais.map((m) => m.valor));
  const totalAtendimentosMes = dadosMensais[dadosMensais.length - 1];
  const totalAtendimentosMesAnterior = dadosMensais[dadosMensais.length - 2];
  const variacaoAtendimentos = (
    ((totalAtendimentosMes.consultas + totalAtendimentosMes.exames) -
      (totalAtendimentosMesAnterior.consultas + totalAtendimentosMesAnterior.exames)) /
    (totalAtendimentosMesAnterior.consultas + totalAtendimentosMesAnterior.exames)) * 100;

  const processosUrgentes = PROCESSOS_PENDENTES.filter(
    (p) => p.prioridade === "alta" && p.status !== "Autorizado"
  ).length;

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_TRT.fundo }}>
      {/* Header */}
      <header
        className="text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${CORES_TRT.primaria} 0%, ${CORES_TRT.terciaria} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/trt">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Painel Gerencial</h1>
                  <p className="text-sm opacity-90">Gestão de Custos e Processos</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {processosUrgentes > 0 && (
                <Badge className="bg-red-500 text-white border-0">
                  <Bell className="h-3 w-3 mr-1" />
                  {processosUrgentes} urgentes
                </Badge>
              )}
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                <RefreshCw className="h-3 w-3 mr-1" />
                {ultimaAtualizacao.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                <Calendar className="h-3 w-3 mr-1" />
                {periodo}
              </Badge>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Download className="h-4 w-4 mr-1" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* KPIs Principais com Tendências */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.primaria }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Beneficiários</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {ESTATISTICAS_TRT.total_servidores}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">+3 este mês</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.primaria}20` }}>
                  <Users className="h-6 w-6" style={{ color: CORES_TRT.primaria }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.terciaria }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Credenciados</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {ESTATISTICAS_TRT.total_credenciados}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">+1 novo</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.terciaria}20` }}>
                  <Building2 className="h-6 w-6" style={{ color: CORES_TRT.terciaria }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.secundaria }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Valor Total (Ano)</p>
                  <p className="text-xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    R$ {(ESTATISTICAS_TRT.valor_total_processado / 1000000).toFixed(2)}M
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowDownRight className="h-3 w-3 text-amber-500" />
                    <span className="text-xs text-amber-600">-2.1% vs mai</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.secundaria}20` }}>
                  <DollarSign className="h-6 w-6" style={{ color: CORES_TRT.secundaria }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.destaque }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Taxa de Glosa Média</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {ESTATISTICAS_TRT.taxa_glosa_media}%
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowDownRight className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">-0.8% melhorou</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.destaque}20` }}>
                  <AlertTriangle className="h-6 w-6" style={{ color: CORES_TRT.destaque }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metas do Período */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {METAS_PERIODO.map((meta) => {
            const atingido = meta.menor_melhor ? meta.atual <= meta.meta : meta.atual >= meta.meta;
            const pct = meta.menor_melhor
              ? Math.min(100, (meta.atual / meta.meta) * 100)
              : Math.min(100, (meta.atual / meta.meta) * 100);
            return (
              <Card key={meta.label} className="overflow-hidden">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-medium">{meta.label}</span>
                    <Target
                      className="h-3.5 w-3.5"
                      style={{ color: atingido ? CORES_TRT.sucesso : CORES_TRT.alerta }}
                    />
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-lg font-bold" style={{ color: CORES_TRT.primaria }}>
                      {meta.atual}
                    </span>
                    <span className="text-xs text-slate-400 mb-0.5">{meta.unidade}</span>
                    <span className="text-xs text-slate-400 mb-0.5 ml-1">/ meta {meta.meta}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: atingido ? CORES_TRT.sucesso : CORES_TRT.alerta,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Abas */}
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="flex flex-wrap gap-1 h-auto lg:inline-flex">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="gestao-vista" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Gestão à Vista
            </TabsTrigger>
            <TabsTrigger value="processos" className="flex items-center gap-2 relative">
              <ClipboardList className="h-4 w-4" />
              Processos
              {processosUrgentes > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {processosUrgentes}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="servidores" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Beneficiários
            </TabsTrigger>
            <TabsTrigger value="credenciados" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Credenciados
            </TabsTrigger>
            <TabsTrigger value="alertas" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Alertas
              {alertas.filter((a) => a.severidade === "alta").length > 0 && (
                <Badge className="bg-red-500 text-white text-xs px-1 py-0 h-4">
                  {alertas.filter((a) => a.severidade === "alta").length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="relatorios" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Relatórios
            </TabsTrigger>
          </TabsList>

          {/* ─── DASHBOARD ─── */}
          <TabsContent value="dashboard" className="space-y-4">
            {/* Gráfico de barras mensal melhorado */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle style={{ color: CORES_TRT.primaria }}>
                  Evolução Mensal — Atendimentos & Custo
                </CardTitle>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-green-600 font-medium">
                    {variacaoAtendimentos > 0 ? "+" : ""}
                    {variacaoAtendimentos.toFixed(1)}% vs mês anterior
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dadosMensais.map((mes) => {
                    const totalAtend = mes.consultas + mes.exames + mes.internacoes + mes.cirurgias;
                    const maxTotal = Math.max(...dadosMensais.map((m) => m.consultas + m.exames + m.internacoes + m.cirurgias));
                    return (
                      <div key={mes.mes} className="flex items-center gap-3 text-sm">
                        <span className="font-medium w-8 text-slate-600">{mes.mes}</span>
                        <div className="flex-1 space-y-1">
                          {/* Barra de atendimentos */}
                          <div className="flex items-center gap-1 h-5">
                            <div
                              className="h-4 rounded transition-all flex items-center justify-end pr-1"
                              style={{ width: `${(mes.consultas / maxTotal) * 100}%`, backgroundColor: CORES_TRT.info, minWidth: 4 }}
                              title={`Consultas: ${mes.consultas}`}
                            />
                            <div
                              className="h-4 transition-all"
                              style={{ width: `${(mes.exames / maxTotal) * 100}%`, backgroundColor: CORES_TRT.terciaria, minWidth: 4 }}
                              title={`Exames: ${mes.exames}`}
                            />
                            <div
                              className="h-4 transition-all"
                              style={{ width: `${(mes.internacoes / maxTotal) * 100}%`, backgroundColor: CORES_TRT.destaque, minWidth: mes.internacoes > 0 ? 4 : 0 }}
                              title={`Internações: ${mes.internacoes}`}
                            />
                            <div
                              className="h-4 rounded transition-all"
                              style={{ width: `${(mes.cirurgias / maxTotal) * 100}%`, backgroundColor: CORES_TRT.erro, minWidth: mes.cirurgias > 0 ? 4 : 0 }}
                              title={`Cirurgias: ${mes.cirurgias}`}
                            />
                          </div>
                          {/* Barra de custo */}
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-2 rounded-full transition-all"
                              style={{
                                width: `${(mes.valor / maxValorMensal) * 100}%`,
                                backgroundColor: CORES_TRT.secundaria,
                                opacity: 0.7,
                              }}
                              title={`Custo: R$ ${(mes.valor / 1000).toFixed(0)}k`}
                            />
                          </div>
                        </div>
                        <div className="text-right w-28">
                          <p className="font-semibold text-slate-700">
                            R$ {(mes.valor / 1000).toFixed(0)}k
                          </p>
                          <p className="text-xs text-slate-400">{totalAtend} atend.</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t">
                  {[
                    { cor: CORES_TRT.info, label: "Consultas" },
                    { cor: CORES_TRT.terciaria, label: "Exames" },
                    { cor: CORES_TRT.destaque, label: "Internações" },
                    { cor: CORES_TRT.erro, label: "Cirurgias" },
                    { cor: CORES_TRT.secundaria, label: "Custo (R$)" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.cor }} />
                      <span className="text-xs text-slate-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Distribuição + Custos por Categoria */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                    Distribuição por Estado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { estado: "Pará (PA)", key: "PA", cor: CORES_TRT.terciaria },
                      { estado: "Amapá (AP)", key: "AP", cor: CORES_TRT.destaque },
                    ].map(({ estado, key, cor }) => {
                      const qtd = ESTATISTICAS_TRT.por_estado[key as "PA" | "AP"];
                      const pct = ((qtd / ESTATISTICAS_TRT.total_servidores) * 100).toFixed(0);
                      return (
                        <div key={key} className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" style={{ color: cor }} />
                              <span className="font-medium text-sm">{estado}</span>
                            </div>
                            <div className="text-right">
                              <span className="font-bold">{qtd}</span>
                              <span className="text-xs text-slate-400 ml-1">({pct}%)</span>
                            </div>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{ width: `${pct}%`, backgroundColor: cor }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                    Procedimentos por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(ESTATISTICAS_TRT.por_categoria).map(([cat, qtd]) => {
                      const total = Object.values(ESTATISTICAS_TRT.por_categoria).reduce((a, b) => a + b, 0);
                      const pct = ((qtd / total) * 100).toFixed(0);
                      const corCat =
                        cat === "consultas" ? CORES_TRT.info :
                        cat === "exames" ? CORES_TRT.terciaria :
                        cat === "internacoes" ? CORES_TRT.destaque : CORES_TRT.erro;
                      return (
                        <div key={cat} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: corCat }} />
                          <span className="capitalize text-sm flex-1">{cat}</span>
                          <div className="flex-1 mx-2">
                            <div className="w-full bg-slate-100 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full"
                                style={{ width: `${pct}%`, backgroundColor: corCat }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Badge variant="secondary" className="text-xs">{qtd}</Badge>
                            <span className="text-xs text-slate-400">{pct}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resumo rápido do mês atual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                  Resumo — Junho 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Consultas", valor: totalAtendimentosMes.consultas, cor: CORES_TRT.info, icone: <Stethoscope className="h-4 w-4" /> },
                    { label: "Exames", valor: totalAtendimentosMes.exames, cor: CORES_TRT.terciaria, icone: <Microscope className="h-4 w-4" /> },
                    { label: "Internações", valor: totalAtendimentosMes.internacoes, cor: CORES_TRT.destaque, icone: <HeartPulse className="h-4 w-4" /> },
                    { label: "Cirurgias", valor: totalAtendimentosMes.cirurgias, cor: CORES_TRT.erro, icone: <Activity className="h-4 w-4" /> },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3 rounded-lg border" style={{ borderColor: `${item.cor}30`, backgroundColor: `${item.cor}08` }}>
                      <div className="flex justify-center mb-1" style={{ color: item.cor }}>{item.icone}</div>
                      <p className="text-2xl font-bold" style={{ color: item.cor }}>{item.valor}</p>
                      <p className="text-xs text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── GESTÃO À VISTA ─── */}
          <TabsContent value="gestao-vista" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2">
              {[
                { label: "Pendentes", qtd: FATURAS_KANBAN.pendentes.length, cor: CORES_TRT.alerta },
                { label: "Em Auditoria", qtd: FATURAS_KANBAN.em_auditoria.length, cor: CORES_TRT.info },
                { label: "Glosadas", qtd: FATURAS_KANBAN.glosadas.length, cor: CORES_TRT.erro },
                { label: "Pagas", qtd: FATURAS_KANBAN.pagas.length, cor: CORES_TRT.sucesso },
              ].map((item) => (
                <Card key={item.label} className="border-t-4" style={{ borderTopColor: item.cor }}>
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold" style={{ color: item.cor }}>{item.qtd}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Kanban de faturas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pendentes */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CORES_TRT.alerta }} />
                  <h3 className="font-semibold text-sm text-slate-700">Aguardando</h3>
                  <Badge variant="secondary" className="ml-auto">{FATURAS_KANBAN.pendentes.length}</Badge>
                </div>
                <div className="space-y-2">
                  {FATURAS_KANBAN.pendentes.map((f) => (
                    <Card key={f.id} className="border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: CORES_TRT.alerta }}>
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{f.credenciado}</p>
                        <p className="text-xs text-slate-500">{f.id} · {f.mes}</p>
                        <p className="font-bold mt-1 text-sm" style={{ color: CORES_TRT.primaria }}>
                          R$ {f.valor.toLocaleString("pt-BR")}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Em Auditoria */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CORES_TRT.info }} />
                  <h3 className="font-semibold text-sm text-slate-700">Em Auditoria</h3>
                  <Badge variant="secondary" className="ml-auto">{FATURAS_KANBAN.em_auditoria.length}</Badge>
                </div>
                <div className="space-y-2">
                  {FATURAS_KANBAN.em_auditoria.map((f) => (
                    <Card key={f.id} className="border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: CORES_TRT.info }}>
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{f.credenciado}</p>
                        <p className="text-xs text-slate-500">{f.id} · {f.mes}</p>
                        <p className="font-bold mt-1 text-sm" style={{ color: CORES_TRT.primaria }}>
                          R$ {f.valor.toLocaleString("pt-BR")}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Glosadas */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CORES_TRT.erro }} />
                  <h3 className="font-semibold text-sm text-slate-700">Glosadas</h3>
                  <Badge variant="secondary" className="ml-auto">{FATURAS_KANBAN.glosadas.length}</Badge>
                </div>
                <div className="space-y-2">
                  {FATURAS_KANBAN.glosadas.map((f) => (
                    <Card key={f.id} className="border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: CORES_TRT.erro }}>
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{f.credenciado}</p>
                        <p className="text-xs text-slate-500">{f.id} · {f.mes}</p>
                        <p className="font-bold mt-1 text-sm" style={{ color: CORES_TRT.erro }}>
                          R$ {f.valor.toLocaleString("pt-BR")}
                        </p>
                        {"motivo" in f && (
                          <p className="text-xs text-red-500 mt-1">{f.motivo}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagas */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CORES_TRT.sucesso }} />
                  <h3 className="font-semibold text-sm text-slate-700">Pagas</h3>
                  <Badge variant="secondary" className="ml-auto">{FATURAS_KANBAN.pagas.length}</Badge>
                </div>
                <div className="space-y-2">
                  {FATURAS_KANBAN.pagas.map((f) => (
                    <Card key={f.id} className="border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: CORES_TRT.sucesso }}>
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{f.credenciado}</p>
                        <p className="text-xs text-slate-500">{f.id} · {f.mes}</p>
                        <p className="font-bold mt-1 text-sm" style={{ color: CORES_TRT.sucesso }}>
                          R$ {f.valor.toLocaleString("pt-BR")}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumo financeiro kanban */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                  Resumo Financeiro — Faturas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {[
                    {
                      label: "A Pagar",
                      valor: FATURAS_KANBAN.pendentes.reduce((a, f) => a + f.valor, 0),
                      cor: CORES_TRT.alerta,
                    },
                    {
                      label: "Em Análise",
                      valor: FATURAS_KANBAN.em_auditoria.reduce((a, f) => a + f.valor, 0),
                      cor: CORES_TRT.info,
                    },
                    {
                      label: "Glosado",
                      valor: FATURAS_KANBAN.glosadas.reduce((a, f) => a + f.valor, 0),
                      cor: CORES_TRT.erro,
                    },
                    {
                      label: "Pago (histórico)",
                      valor: FATURAS_KANBAN.pagas.reduce((a, f) => a + f.valor, 0),
                      cor: CORES_TRT.sucesso,
                    },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-lg bg-slate-50">
                      <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                      <p className="text-lg font-bold" style={{ color: item.cor }}>
                        R$ {item.valor.toLocaleString("pt-BR")}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── PROCESSOS ─── */}
          <TabsContent value="processos" className="space-y-4">
            {/* Resumo status processos */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Aguardando",
                  qtd: PROCESSOS_PENDENTES.filter((p) => p.status === "Aguardando Autorização").length,
                  cor: CORES_TRT.alerta,
                },
                {
                  label: "Em Análise",
                  qtd: PROCESSOS_PENDENTES.filter((p) => p.status === "Em Análise").length,
                  cor: CORES_TRT.info,
                },
                {
                  label: "Autorizados",
                  qtd: PROCESSOS_PENDENTES.filter((p) => p.status === "Autorizado").length,
                  cor: CORES_TRT.sucesso,
                },
              ].map((item) => (
                <Card key={item.label} className="border-t-4" style={{ borderTopColor: item.cor }}>
                  <CardContent className="p-3 text-center">
                    <p className="text-3xl font-bold" style={{ color: item.cor }}>{item.qtd}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Busca + lista */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Search className="h-5 w-5 text-slate-400 mt-2" />
                  <Input
                    placeholder="Buscar por beneficiário, procedimento ou status..."
                    value={buscaProcesso}
                    onChange={(e) => setBuscaProcesso(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>
                  Processos em Andamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b">
                      <tr>
                        <th className="text-left p-3">Beneficiário</th>
                        <th className="text-left p-3">Procedimento</th>
                        <th className="text-center p-3">Tipo</th>
                        <th className="text-center p-3">Prazo</th>
                        <th className="text-center p-3">Prioridade</th>
                        <th className="text-center p-3">Status</th>
                        <th className="text-center p-3">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {processosFiltrados.map((proc) => {
                        const diasRestantes = Math.ceil(
                          (new Date(proc.prazo).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                        );
                        return (
                          <tr key={proc.id} className="hover:bg-slate-50">
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                  style={{ backgroundColor: CORES_TRT.primaria }}
                                >
                                  {proc.beneficiario.charAt(0)}
                                </div>
                                <div>
                                  <p className="font-medium">{proc.beneficiario}</p>
                                  <p className="text-xs text-slate-400">{proc.matricula}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3">
                              <p className="font-medium">{proc.descricao}</p>
                              <p className="text-xs text-slate-400">
                                Sol. {new Date(proc.data_solicitacao).toLocaleDateString("pt-BR")}
                              </p>
                            </td>
                            <td className="p-3 text-center">
                              <Badge variant="outline" className="text-xs">{proc.tipo}</Badge>
                            </td>
                            <td className="p-3 text-center">
                              <div>
                                <p
                                  className="font-medium text-xs"
                                  style={{ color: diasRestantes <= 2 ? CORES_TRT.erro : diasRestantes <= 5 ? CORES_TRT.alerta : CORES_TRT.sucesso }}
                                >
                                  {diasRestantes <= 0 ? "Vencido" : `${diasRestantes}d`}
                                </p>
                                <p className="text-xs text-slate-400">
                                  {new Date(proc.prazo).toLocaleDateString("pt-BR")}
                                </p>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <Badge
                                className="text-xs"
                                style={{
                                  backgroundColor:
                                    proc.prioridade === "alta" ? `${CORES_TRT.erro}20` :
                                    proc.prioridade === "normal" ? `${CORES_TRT.alerta}20` :
                                    `${CORES_TRT.sucesso}20`,
                                  color:
                                    proc.prioridade === "alta" ? CORES_TRT.erro :
                                    proc.prioridade === "normal" ? CORES_TRT.alerta :
                                    CORES_TRT.sucesso,
                                  border: "none",
                                }}
                              >
                                {proc.prioridade.charAt(0).toUpperCase() + proc.prioridade.slice(1)}
                              </Badge>
                            </td>
                            <td className="p-3 text-center">
                              <Badge
                                variant="outline"
                                className="text-xs"
                                style={{
                                  borderColor:
                                    proc.status === "Autorizado" ? CORES_TRT.sucesso :
                                    proc.status === "Em Análise" ? CORES_TRT.info :
                                    CORES_TRT.alerta,
                                  color:
                                    proc.status === "Autorizado" ? CORES_TRT.sucesso :
                                    proc.status === "Em Análise" ? CORES_TRT.info :
                                    CORES_TRT.alerta,
                                }}
                              >
                                {proc.status}
                              </Badge>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1">
                                {proc.status !== "Autorizado" && (
                                  <Button
                                    size="sm"
                                    className="text-xs h-7 px-2"
                                    style={{ backgroundColor: CORES_TRT.sucesso }}
                                    onClick={() => alert(`Autorizar ${proc.id}`)}
                                  >
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Autorizar
                                  </Button>
                                )}
                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                  <Eye className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {processosFiltrados.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <ClipboardList className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhum processo encontrado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── BENEFICIÁRIOS ─── */}
          <TabsContent value="servidores" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Search className="h-5 w-5 text-slate-400 mt-2" />
                  <Input
                    placeholder="Buscar beneficiário por nome ou matrícula..."
                    value={buscaServidor}
                    onChange={(e) => setBuscaServidor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>
                  Acompanhamento de Beneficiários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Beneficiário</th>
                        <th className="text-left py-3">Comarca</th>
                        <th className="text-center py-3">Consultas</th>
                        <th className="text-center py-3">Exames</th>
                        <th className="text-center py-3">Internações</th>
                        <th className="text-right py-3">Valor Total</th>
                        <th className="text-center py-3">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {servidoresFiltrados.map((servidor) => (
                        <tr
                          key={servidor.matricula}
                          className="hover:bg-slate-50 cursor-pointer"
                          onClick={() => abrirModalServidor(servidor)}
                        >
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: CORES_TRT.primaria }}
                              >
                                {servidor.nome.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium">{servidor.nome}</p>
                                <p className="text-xs text-slate-500">{servidor.matricula}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <div>
                              <p>{servidor.comarca}</p>
                              <p className="text-xs text-slate-500">{servidor.cargo}</p>
                            </div>
                          </td>
                          <td className="py-3 text-center">
                            <Badge variant="outline" style={{ borderColor: CORES_TRT.info, color: CORES_TRT.info }}>
                              {servidor.consultas_ano}
                            </Badge>
                          </td>
                          <td className="py-3 text-center">
                            <Badge variant="outline" style={{ borderColor: CORES_TRT.terciaria, color: CORES_TRT.terciaria }}>
                              {servidor.exames_ano}
                            </Badge>
                          </td>
                          <td className="py-3 text-center">
                            <Badge variant="outline" style={{ borderColor: CORES_TRT.destaque, color: CORES_TRT.destaque }}>
                              {servidor.internacoes_ano}
                            </Badge>
                          </td>
                          <td className="py-3 text-right font-medium">
                            R$ {servidor.valor_total_ano.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 text-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                abrirModalServidor(servidor);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {servidoresFiltrados.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhum beneficiário encontrado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── CREDENCIADOS ─── */}
          <TabsContent value="credenciados" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Top Credenciados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ESTATISTICAS_TRT.top_credenciados.map((cred, idx) => {
                    const maxValor = Math.max(...ESTATISTICAS_TRT.top_credenciados.map((c) => c.valor));
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                          style={{ backgroundColor: CORES_TRT.primaria }}
                        >
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold truncate">{cred.nome}</p>
                            <p className="font-bold ml-2 flex-shrink-0" style={{ color: CORES_TRT.terciaria }}>
                              R$ {(cred.valor / 1000).toFixed(0)}k
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full"
                                style={{ width: `${(cred.valor / maxValor) * 100}%`, backgroundColor: CORES_TRT.terciaria }}
                              />
                            </div>
                            <span className="text-xs text-slate-500 flex-shrink-0">{cred.atendimentos} atend.</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                          <CheckCircle className="h-3 w-3" style={{ color: CORES_TRT.sucesso }} />
                          Ativo
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Lista de Credenciados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Nome</th>
                        <th className="text-left py-2">Tipo</th>
                        <th className="text-left py-2">Cidade</th>
                        <th className="text-center py-2">Avaliação</th>
                        <th className="text-center py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {CREDENCIADOS_TRT.map((cred) => (
                        <tr key={cred.id} className="hover:bg-slate-50">
                          <td className="py-3">
                            <p className="font-medium">{cred.nome_fantasia}</p>
                            <p className="text-xs text-slate-500">{cred.razao_social}</p>
                          </td>
                          <td className="py-3">{cred.tipo}</td>
                          <td className="py-3">{cred.cidade} - {cred.estado}</td>
                          <td className="py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <span className="font-bold" style={{ color: CORES_TRT.secundaria }}>{cred.avaliacao}</span>
                              <span className="text-xs text-slate-400">/5</span>
                            </div>
                          </td>
                          <td className="py-3 text-center">
                            <Badge variant="outline" style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Ativo
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── ALERTAS ─── */}
          <TabsContent value="alertas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Alertas do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alertas.map((alerta) => (
                    <div
                      key={alerta.id}
                      className={`p-4 rounded-lg border-l-4 flex items-start gap-3 ${
                        alerta.severidade === "alta"
                          ? "bg-red-50 border-red-500"
                          : alerta.severidade === "media"
                          ? "bg-amber-50 border-amber-500"
                          : "bg-blue-50 border-blue-500"
                      }`}
                    >
                      <AlertTriangle
                        className={`h-5 w-5 flex-shrink-0 ${
                          alerta.severidade === "alta"
                            ? "text-red-500"
                            : alerta.severidade === "media"
                            ? "text-amber-500"
                            : "text-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{alerta.mensagem}</p>
                        <p className="text-sm text-slate-500 capitalize mt-1">Tipo: {alerta.tipo}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            alerta.severidade === "alta"
                              ? "border-red-500 text-red-600"
                              : alerta.severidade === "media"
                              ? "border-amber-500 text-amber-600"
                              : "border-blue-500 text-blue-600"
                          }`}
                        >
                          {alerta.severidade.toUpperCase()}
                        </Badge>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── RELATÓRIOS ─── */}
          <TabsContent value="relatorios" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titulo: "Relatório de Custos", desc: "Análise detalhada por categoria", icone: <FileText className="h-8 w-8" />, cor: CORES_TRT.primaria },
                { titulo: "Relatório por Beneficiário", desc: "Utilização individual", icone: <Users className="h-8 w-8" />, cor: CORES_TRT.terciaria },
                { titulo: "Relatório por Credenciado", desc: "Desempenho e faturamento", icone: <Building2 className="h-8 w-8" />, cor: CORES_TRT.secundaria },
                { titulo: "Relatório de Glosas", desc: "Análise de irregularidades", icone: <AlertTriangle className="h-8 w-8" />, cor: CORES_TRT.destaque },
                { titulo: "Relatório de Processos", desc: "Autorizações e prazos", icone: <ClipboardList className="h-8 w-8" />, cor: CORES_TRT.info },
                { titulo: "Relatório de Metas", desc: "Desempenho vs metas do período", icone: <Target className="h-8 w-8" />, cor: CORES_TRT.sucesso },
              ].map((rel) => (
                <Card key={rel.titulo} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: `${rel.cor}20`, color: rel.cor }}>
                        {rel.icone}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{rel.titulo}</h3>
                        <p className="text-sm text-slate-500">{rel.desc}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-8 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_TRT.primaria }}>TRT 8ª Região - Painel Gerencial</p>
          <p>Atualizado em: {ultimaAtualizacao.toLocaleString("pt-BR")}</p>
        </footer>
      </div>

      {/* Modal de Detalhes do Beneficiário */}
      {modalServidorAberto && servidorSelecionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ backgroundColor: CORES_TRT.primaria }}
            >
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-white" />
                <div>
                  <h3 className="text-lg font-bold text-white">{servidorSelecionado.nome}</h3>
                  <p className="text-sm text-white/80">{servidorSelecionado.matricula}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setModalServidorAberto(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Informações do Beneficiário */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="h-5 w-5" style={{ color: CORES_TRT.primaria }} />
                      <span className="font-medium">Dados Pessoais</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-slate-500">Cargo:</span> {servidorSelecionado.cargo}</p>
                      <p><span className="text-slate-500">Comarca:</span> {servidorSelecionado.comarca}</p>
                      <p><span className="text-slate-500">Status:</span> <Badge>{servidorSelecionado.status}</Badge></p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Activity className="h-5 w-5" style={{ color: CORES_TRT.terciaria }} />
                      <span className="font-medium">Resumo do Ano</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-slate-500">Consultas:</span> {servidorSelecionado.consultas_ano}</p>
                      <p><span className="text-slate-500">Exames:</span> {servidorSelecionado.exames_ano}</p>
                      <p><span className="text-slate-500">Internações:</span> {servidorSelecionado.internacoes_ano}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-5 w-5" style={{ color: CORES_TRT.secundaria }} />
                      <span className="font-medium">Custo Total</span>
                    </div>
                    <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                      R$ {servidorSelecionado.valor_total_ano.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Último atendimento: {new Date(servidorSelecionado.ultimo_atendimento).toLocaleDateString("pt-BR")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Histórico de Saúde */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                  <HeartPulse className="h-5 w-5" />
                  Histórico de Saúde
                </h4>

                {["Consultas", "Exames", "Internações", "Cirurgias"].map((categoria) => {
                  const itens = getHistoricoServidor(servidorSelecionado.matricula).filter(
                    (h) => h.categoria === categoria
                  );
                  if (itens.length === 0) return null;

                  return (
                    <div key={categoria} className="mb-4">
                      <h5 className="text-sm font-medium text-slate-600 mb-2">{categoria}</h5>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="text-left p-3">Descrição</th>
                              <th className="text-left p-3">Resultado</th>
                              <th className="text-center p-3">Data</th>
                              <th className="text-center p-3">PDF</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {itens.map((item) => (
                              <tr key={item.id} className="hover:bg-slate-50">
                                <td className="p-3">
                                  <div className="flex items-center gap-2">
                                    {categoria === "Consultas" ? (
                                      <Stethoscope className="h-4 w-4" style={{ color: CORES_TRT.info }} />
                                    ) : categoria === "Exames" ? (
                                      <Microscope className="h-4 w-4" style={{ color: CORES_TRT.terciaria }} />
                                    ) : (
                                      <Activity className="h-4 w-4" style={{ color: CORES_TRT.destaque }} />
                                    )}
                                    <span>{item.descricao}</span>
                                  </div>
                                </td>
                                <td className="p-3 text-slate-600">{item.resultado}</td>
                                <td className="p-3 text-center">
                                  {new Date(item.data_realizacao).toLocaleDateString("pt-BR")}
                                </td>
                                <td className="p-3 text-center">
                                  <Button variant="ghost" size="sm">
                                    <FileText className="h-4 w-4 mr-1" />
                                    Ver
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}

                {getHistoricoServidor(servidorSelecionado.matricula).length === 0 && (
                  <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg">
                    <HeartPulse className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhum histórico registrado</p>
                  </div>
                )}
              </div>

              {/* Informações Complementares */}
              {(() => {
                const dadosCompletos = getDadosServidor(servidorSelecionado.matricula);
                if (!dadosCompletos) return null;

                return (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-4" style={{ color: CORES_TRT.primaria }}>
                      Informações Complementares
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Tipo Sanguíneo:</span>
                        <p className="font-medium">{dadosCompletos.tipo_sanguineo}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Alergias:</span>
                        <p className="font-medium">{dadosCompletos.alergias.join(", ")}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Comorbidades:</span>
                        <p className="font-medium">
                          {dadosCompletos.comorbidades.length > 0
                            ? dadosCompletos.comorbidades.join(", ")
                            : "Nenhuma"}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-500">Lotação:</span>
                        <p className="font-medium">{dadosCompletos.lotacao}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="flex items-center justify-end gap-2 p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={() => setModalServidorAberto(false)}>
                Fechar
              </Button>
              <Button style={{ backgroundColor: CORES_TRT.primaria }} className="text-white">
                <Download className="h-4 w-4 mr-2" />
                Exportar Ficha
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
