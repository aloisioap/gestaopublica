"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Stethoscope, ClipboardCheck, Hospital, FileText, DollarSign, Brain, Settings,
  ArrowLeft, Plus, Search, AlertTriangle, CheckCircle, Clock, TrendingUp,
  Activity, Users, Calendar, BarChart3, Shield, MapPin, ChevronRight, Play,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FUNSAU_CATEGORIAS } from "@/types/funsau";
import { pacientesMockLista, protocolosMockLista, statsFunsauPM, PATENTES_PM, mockPacientesPM } from "@/lib/dados-mock-completos";
import { RelatoriosEngine } from "@/lib/relatorios-engine";
import { AuditoriaEngine } from "@/lib/auditoria-engine";
import { ValidacaoQREngine } from "@/lib/validacao-qr";
import { SimuladorProtocolo } from "@/components/simulador-protocolo";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="h-8 w-8 text-emerald-500" />,
  ClipboardCheck: <ClipboardCheck className="h-8 w-8 text-blue-500" />,
  Hospital: <Hospital className="h-8 w-8 text-purple-500" />,
  FileText: <FileText className="h-8 w-8 text-amber-500" />,
  DollarSign: <DollarSign className="h-8 w-8 text-green-500" />,
  Brain: <Brain className="h-8 w-8 text-rose-500" />,
  Settings: <Settings className="h-8 w-8 text-slate-500" />,
};

const gradientMap: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-600",
  blue: "from-blue-500 to-indigo-600",
  purple: "from-purple-500 to-violet-600",
  amber: "from-amber-500 to-orange-600",
  green: "from-green-500 to-emerald-600",
  rose: "from-rose-500 to-pink-600",
  slate: "from-slate-500 to-gray-600",
};

const bgMap: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-green-100 text-green-700",
  rose: "bg-rose-100 text-rose-700",
  slate: "bg-slate-100 text-slate-700",
};

export default function FunsauPage() {
  const [cpfBusca, setCpfBusca] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // Pacientes com atendimentos em andamento (para demonstração)
  const pacientesEmAndamento = pacientesMockLista.slice(0, 3) as (typeof pacientesMockLista[0] & {
    dependente?: { nome: string; parentesco: string };
    alergias?: string[];
  })[];
  
  // Protocolos recentes
  const protocolosRecentes = protocolosMockLista.slice(0, 5);

  const buscarPaciente = () => {
    if (!cpfBusca) return;
    // Procurar paciente e navegar
    const paciente = mockPacientesPM.find(p => p.cpf === cpfBusca);
    if (paciente) {
      router.push(`/funsau/paciente/${paciente.id}`);
    } else {
      alert("Paciente não encontrado. Tente CPF: 123.456.789-00, 987.654.321-00 ou 456.789.123-00");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">FUNSAU PM</h1>
                  <p className="text-xs text-slate-500">Fundo de Saúde da Polícia Militar</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                🟢 Sistema Operacional
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Busca Rápida por CPF */}
        <Card className="mb-8 border-emerald-200 bg-emerald-50/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Search className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Consulta por CPF</h3>
                  <p className="text-sm text-slate-500">Acesse protocolos e histórico do policial/dependente</p>
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Digite o CPF do policial..."
                    value={cpfBusca}
                    onChange={(e) => setCpfBusca(e.target.value)}
                    className="flex-1 rounded-xl"
                  />
                  <Button 
                    onClick={buscarPaciente}
                    className="bg-emerald-600 hover:bg-emerald-700 rounded-xl"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  💡 Dica: Tente CPFs de demonstração: 123.456.789-00, 987.654.321-00 ou 456.789.123-00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview - PM */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Atendimentos Hoje</p>
                  <p className="text-2xl font-bold text-slate-900">{statsFunsauPM.atendimentos_dia}</p>
                </div>
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Activity className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Em Auditoria</p>
                  <p className="text-2xl font-bold text-slate-900">{statsFunsauPM.em_auditoria}</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <ClipboardCheck className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Aprovados</p>
                  <p className="text-2xl font-bold text-slate-900">{statsFunsauPM.aprovados}</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-rose-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Glosados</p>
                  <p className="text-2xl font-bold text-slate-900">{statsFunsauPM.glosados}</p>
                </div>
                <div className="p-2 bg-rose-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-rose-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 col-span-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Valor Processado (Mês)</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {statsFunsauPM.valor_processado}
                  </p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simulador de Protocolo */}
        <div className="mb-10">
          <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">🎬 Simulador de Protocolo</h3>
                    <p className="text-sm text-slate-600">Clique para ver o fluxo completo passo a passo</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Auto Demo
                </Badge>
              </div>
              <SimuladorProtocolo />
            </CardContent>
          </Card>
        </div>

        {/* Policiais em Atendimento */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Policiais em Atendimento */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">🚔 Policiais em Atendimento</h3>
              <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Dados fictícios</span>
            </div>
            <div className="space-y-3">
              {pacientesEmAndamento.map((pac) => (
                <Link key={pac.id} href={`/funsau/paciente/${pac.id}`}>
                  <Card className="border-l-4 border-l-emerald-400 hover:shadow-md transition-shadow cursor-pointer mb-3">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{pac.nome}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${PATENTES_PM.find(p => p.nome === pac.patente)?.cor || 'bg-gray-100 text-gray-700'}`}>
                              {pac.patente}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">CPF: {pac.cpf}</p>
                          <p className="text-xs text-slate-400">{pac.unidade_lotacao}</p>
                          {/* Dependentes desabilitados temporariamente para build */}
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-emerald-600">{pac.matricula_pm}</p>
                          <p className="text-xs text-slate-400">Carteirinha: {pac.numero_carteirinha}</p>
                          {pac.alergias && pac.alergias.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1 justify-end">
                              {pac.alergias.map((alergia, idx) => (
                                <span key={idx} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                                  ⚠️ {alergia}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-slate-400">💡 Clique em um policial para ver histórico completo</p>
            </div>
          </div>

          {/* Protocolos Recentes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">📋 Protocolos Recentes</h3>
              <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Dados fictícios</span>
            </div>
            <div className="space-y-3">
              {protocolosRecentes.map((prot) => (
                <Card key={prot.id} className="border-l-4 border-l-blue-400">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900">{prot.numero_protocolo}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        prot.status === 'aprovado' ? 'bg-emerald-100 text-emerald-700' : 
                        prot.status === 'glosado' ? 'bg-red-100 text-red-700' : 
                        prot.status === 'em_auditoria' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {prot.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">
                      {prot.paciente_nome} 
                      <span className="text-xs text-slate-500 ml-1">({prot.paciente_patente})</span>
                    </p>
                    <p className="text-xs text-slate-500">{prot.tipo_atendimento} - {prot.especialidade}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded ${
                        prot.prioridade === 'urgente' ? 'bg-red-100 text-red-700' :
                        prot.prioridade === 'alta' ? 'bg-orange-100 text-orange-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {prot.prioridade.toUpperCase()}
                      </span>
                      <span className="text-sm font-bold text-emerald-600">
                        R$ {prot.valor_total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    {prot.valor_glosado > 0 && (
                      <p className="text-xs text-red-600 mt-1">
                        Glosado: R$ {prot.valor_glosado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link href="/funsau/triagem">
            <Button className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Atendimento
            </Button>
          </Link>
          <Link href="/funsau/auditoria">
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-700">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Auditoria
            </Button>
          </Link>
          <Link href="/funsau/execucao">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-violet-700">
              <Hospital className="h-4 w-4 mr-2" />
              Validar Paciente
            </Button>
          </Link>
          <Link href="/funsau/documentos">
            <Button variant="outline" className="rounded-full border-amber-200 text-amber-700 hover:bg-amber-50">
              <FileText className="h-4 w-4 mr-2" />
              Upload XML
            </Button>
          </Link>
        </div>

        {/* Dashboard Avançado */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">📊 Análises e KPIs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Detecção de Fraudes */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">🚨 Alertas de Fraude</h3>
              <div className="space-y-3">
                {RelatoriosEngine.detectarFraude().slice(0, 3).map((alerta, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                    alerta.nivel === 'critico' ? 'border-red-500 bg-red-50' :
                    alerta.nivel === 'alto' ? 'border-orange-500 bg-orange-50' :
                    'border-amber-500 bg-amber-50'
                  }`}>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                        alerta.nivel === 'critico' ? 'text-red-600' :
                        alerta.nivel === 'alto' ? 'text-orange-600' :
                        'text-amber-600'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {alerta.paciente} - {alerta.descricao}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          Protocolo: {alerta.protocolo} | Valor: R$ {alerta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-xs font-medium text-blue-700 mt-2">
                          Ação: {alerta.acao_recomendada}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/funsau/relatorios">
                  <Button variant="outline" size="sm" className="text-xs">
                    Ver todos os alertas
                  </Button>
                </Link>
              </div>
            </div>

            {/* Análise por Patente */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">⭐ Desempenho por Patente</h3>
              <div className="space-y-3">
                {RelatoriosEngine.getRelatorioByPatente().slice(0, 4).map((rel, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-medium">{rel.patente}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500">
                        {rel.quantidade} PMs
                      </span>
                      <div className="text-xs font-medium text-emerald-700">
                        {rel.taxa_aprovacao.toFixed(1)}% aprovação
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Auditoria Inteligente */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">🤖 Auditoria Inteligente - Regras Ativas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700">{AuditoriaEngine.regras.length}</div>
                <div className="text-xs text-emerald-600">Regras Totais</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {AuditoriaEngine.regras.filter(r => r.severidade === 'critica').length}
                </div>
                <div className="text-xs text-blue-600">Críticas</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">
                  {Object.keys(AuditoriaEngine.tabelaBrasindice).length}
                </div>
                <div className="text-xs text-amber-600">Procedimentos na Tabela</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {Object.keys(AuditoriaEngine.tabelaBrasindice).reduce((sum, key) => {
                    const proc = AuditoriaEngine.tabelaBrasindice[key];
                    return sum + proc.valor;
                  }, 0).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-purple-600">Valor Máximo (R$)</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600">
              💡 As regras de auditoria são aplicadas automaticamente em 100% dos protocolos acima de R$ 5.000 ou com prioridade alta
            </div>
          </div>
        </div>

        {/* Módulos */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Módulos do Sistema</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(FUNSAU_CATEGORIAS).map((cat) => (
            <Link
              key={cat.id}
              href={cat.rota}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 group-hover:border-slate-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientMap[cat.cor]} shadow-lg`}>
                      {iconMap[cat.icone]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{cat.nome}</h3>
                      <p className="text-sm text-slate-500 mb-3">{cat.descricao}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${bgMap[cat.cor]}`}>
                          {cat.total_registros} registros
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Fluxo de Trabalho */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Fluxo de Atendimento FUNSAU PM</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { step: 1, label: "Triagem", color: "emerald" },
              { step: 2, label: "Auditoria Prévia", color: "blue" },
              { step: 3, label: "Execução", color: "purple" },
              { step: 4, label: "Validação QR", color: "amber" },
              { step: 5, label: "Documentos", color: "slate" },
              { step: 6, label: "Auditoria Final", color: "rose" },
              { step: 7, label: "Financeiro", color: "green" },
              { step: 8, label: "Histórico", color: "indigo" },
            ].map((item, idx) => (
              <div key={item.step} className="flex items-center">
                <div className={`px-4 py-2 rounded-lg bg-${item.color}-100 text-${item.color}-700 text-sm font-medium`}>
                  {item.step}. {item.label}
                </div>
                {idx < 7 && (
                  <ChevronRight className="h-4 w-4 text-slate-400 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Sistema de Gestão FUNSAU - Polícia Militar
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Dados de demonstração - Não usar em produção
          </p>
        </footer>
      </div>
    </main>
  );
}
