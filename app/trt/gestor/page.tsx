"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
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

// Mock de utilização por servidor
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

export default function PainelGestorTRT() {
  const [periodo] = useState("2024");
  const [buscaServidor, setBuscaServidor] = useState("");
  const [servidorSelecionado, setServidorSelecionado] = useState<typeof UTILIZACAO_SERVIDORES[0] | null>(null);
  const [modalServidorAberto, setModalServidorAberto] = useState(false);

  // Dados simulados para gráficos
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
      mensagem: "Servidor TRT0001 realizou 4 consultas no mesmo mês",
      severidade: "media",
    },
    {
      id: 3,
      tipo: "documentacao",
      mensagem: "Fatura FAT-2024-003 pendente de documentação",
      severidade: "baixa",
    },
  ];

  const abrirModalServidor = (servidor: typeof UTILIZACAO_SERVIDORES[0]) => {
    setServidorSelecionado(servidor);
    setModalServidorAberto(true);
  };

  const getHistoricoServidor = (matricula: string) => {
    return HISTORICO_SAUDE_TRT.filter((h) => h.matricula === matricula).map(h => ({...h}));
  };

  const getDadosServidor = (matricula: string) => {
    return SERVIDORES_TRT.find((s) => s.matricula === matricula);
  };

  const servidoresFiltrados = UTILIZACAO_SERVIDORES.filter(
    (s) =>
      s.nome.toLowerCase().includes(buscaServidor.toLowerCase()) ||
      s.matricula.toLowerCase().includes(buscaServidor.toLowerCase())
  );

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
        {/* KPIs Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.primaria }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Servidores</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {ESTATISTICAS_TRT.total_servidores}
                  </p>
                </div>
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${CORES_TRT.primaria}20` }}
                >
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
                </div>
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${CORES_TRT.terciaria}20` }}
                >
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
                </div>
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${CORES_TRT.secundaria}20` }}
                >
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
                </div>
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${CORES_TRT.destaque}20` }}
                >
                  <AlertTriangle className="h-6 w-6" style={{ color: CORES_TRT.destaque }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abas */}
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-flex">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="servidores" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Servidores
            </TabsTrigger>
            <TabsTrigger value="credenciados" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Credenciados
            </TabsTrigger>
            <TabsTrigger value="alertas" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Alertas
            </TabsTrigger>
            <TabsTrigger value="relatorios" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Relatórios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            {/* Gráfico Mensal (Simulado com Cards) */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>
                  Evolução Mensal - Atendimentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dadosMensais.map((mes) => (
                    <div key={mes.mes} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium w-12">{mes.mes}</span>
                        <div className="flex-1 mx-4 space-y-1">
                          <div className="flex gap-1">
                            <div
                              className="h-4 rounded-l"
                              style={{
                                width: `${(mes.consultas / 70) * 100}%`,
                                backgroundColor: CORES_TRT.info,
                              }}
                              title={`Consultas: ${mes.consultas}`}
                            />
                            <div
                              className="h-4"
                              style={{
                                width: `${(mes.exames / 70) * 100}%`,
                                backgroundColor: CORES_TRT.terciaria,
                              }}
                              title={`Exames: ${mes.exames}`}
                            />
                            <div
                              className="h-4"
                              style={{
                                width: `${(mes.internacoes / 70) * 100}%`,
                                backgroundColor: CORES_TRT.destaque,
                              }}
                              title={`Internações: ${mes.internacoes}`}
                            />
                            <div
                              className="h-4 rounded-r"
                              style={{
                                width: `${(mes.cirurgias / 70) * 100}%`,
                                backgroundColor: CORES_TRT.erro,
                              }}
                              title={`Cirurgias: ${mes.cirurgias}`}
                            />
                          </div>
                        </div>
                        <span className="text-slate-600 w-24 text-right">
                          R$ {(mes.valor / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legenda */}
                <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: CORES_TRT.info }} />
                    <span className="text-sm text-slate-600">Consultas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: CORES_TRT.terciaria }}
                    />
                    <span className="text-sm text-slate-600">Exames</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: CORES_TRT.destaque }}
                    />
                    <span className="text-sm text-slate-600">Internações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: CORES_TRT.erro }} />
                    <span className="text-sm text-slate-600">Cirurgias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Distribuição por Estado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                    Distribuição por Estado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" style={{ color: CORES_TRT.terciaria }} />
                        <span className="font-medium">Pará (PA)</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{ESTATISTICAS_TRT.por_estado.PA}</p>
                        <p className="text-xs text-slate-500">
                          {((ESTATISTICAS_TRT.por_estado.PA / ESTATISTICAS_TRT.total_servidores) * 100).toFixed(0)}%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" style={{ color: CORES_TRT.destaque }} />
                        <span className="font-medium">Amapá (AP)</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{ESTATISTICAS_TRT.por_estado.AP}</p>
                        <p className="text-xs text-slate-500">
                          {((ESTATISTICAS_TRT.por_estado.AP / ESTATISTICAS_TRT.total_servidores) * 100).toFixed(0)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base" style={{ color: CORES_TRT.primaria }}>
                    Custos por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(ESTATISTICAS_TRT.por_categoria).map(([cat, qtd]) => (
                      <div key={cat} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="capitalize">{cat}</span>
                        <Badge variant="secondary">{qtd}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="servidores" className="space-y-4">
            {/* Busca */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Search className="h-5 w-5 text-slate-400 mt-2" />
                  <Input
                    placeholder="Buscar servidor por nome ou matrícula..."
                    value={buscaServidor}
                    onChange={(e) => setBuscaServidor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Lista de Servidores */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>
                  Acompanhamento de Servidores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Servidor</th>
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
                    <p>Nenhum servidor encontrado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credenciados" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Top Credenciados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ESTATISTICAS_TRT.top_credenciados.map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: CORES_TRT.primaria }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{cred.nome}</p>
                          <p className="text-sm text-slate-500">{cred.atendimentos} atendimentos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold" style={{ color: CORES_TRT.terciaria }}>
                          R$ {(cred.valor / 1000).toFixed(0)}k
                        </p>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <CheckCircle className="h-3 w-3" style={{ color: CORES_TRT.sucesso }} />
                          Ativo
                        </div>
                      </div>
                    </div>
                  ))}
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
                          <td className="py-3">
                            {cred.cidade} - {cred.estado}
                          </td>
                          <td className="py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <span className="font-bold" style={{ color: CORES_TRT.secundaria }}>
                                {cred.avaliacao}
                              </span>
                              <span className="text-xs text-slate-400">/5</span>
                            </div>
                          </td>
                          <td className="py-3 text-center">
                            <Badge
                              variant="outline"
                              style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}
                            >
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
                      className={`p-4 rounded-lg border-l-4 ${
                        alerta.severidade === "alta"
                          ? "bg-red-50 border-red-500"
                          : alerta.severidade === "media"
                          ? "bg-amber-50 border-amber-500"
                          : "bg-blue-50 border-blue-500"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle
                          className={`h-5 w-5 ${
                            alerta.severidade === "alta"
                              ? "text-red-500"
                              : alerta.severidade === "media"
                              ? "text-amber-500"
                              : "text-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{alerta.mensagem}</p>
                          <p className="text-sm text-slate-500 capitalize mt-1">
                            Tipo: {alerta.tipo}
                          </p>
                        </div>
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
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${CORES_TRT.primaria}20` }}
                    >
                      <FileText className="h-8 w-8" style={{ color: CORES_TRT.primaria }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Relatório de Custos</h3>
                      <p className="text-sm text-slate-500">Análise detalhada por categoria</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${CORES_TRT.terciaria}20` }}
                    >
                      <Users className="h-8 w-8" style={{ color: CORES_TRT.terciaria }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Relatório por Servidor</h3>
                      <p className="text-sm text-slate-500">Utilização individual</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${CORES_TRT.secundaria}20` }}
                    >
                      <Building2 className="h-8 w-8" style={{ color: CORES_TRT.secundaria }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Relatório por Credenciado</h3>
                      <p className="text-sm text-slate-500">Desempenho e faturamento</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${CORES_TRT.destaque}20` }}
                    >
                      <AlertTriangle className="h-8 w-8" style={{ color: CORES_TRT.destaque }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Relatório de Glosas</h3>
                      <p className="text-sm text-slate-500">Análise de irregularidades</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_TRT.primaria }}>TRT 8ª Região - Painel Gerencial</p>
          <p>Relatórios atualizados em: {new Date().toLocaleDateString("pt-BR")}</p>
        </footer>
      </div>

      {/* Modal de Detalhes do Servidor */}
      {modalServidorAberto && servidorSelecionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
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

            {/* Conteúdo */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Informações do Servidor */}
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

                {/* Categorias */}
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

              {/* Informações Completas do Servidor */}
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

            {/* Footer */}
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
