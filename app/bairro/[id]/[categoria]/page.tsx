"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, Plus, X, Save, Loader2, Home, Filter, Activity, TrendingUp, 
  AlertTriangle, CheckCircle, Clock, Users, Calendar, MapPin, Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CATEGORIAS } from "@/types";

// Dados mock para Perfil Epidemiológico
const EXEMPLOS_EPIDEMIOLOGICO: Record<string, any[]> = {
  "Dengue": [
    { id: 1, tipo: "Caso Confirmado", paciente: "Maria Silva", idade: 34, data: "2024-03-15", status: "Em tratamento", local: "Rua das Flores, 123" },
    { id: 2, tipo: "Caso Suspeito", paciente: "João Santos", idade: 28, data: "2024-03-18", status: "Aguardando exame", local: "Av. Principal, 456" },
    { id: 3, tipo: "Caso Confirmado", paciente: "Ana Oliveira", idade: 45, data: "2024-03-20", status: "Recuperado", local: "Rua do Comércio, 789" },
  ],
  "Cirurgias": [
    { id: 1, tipo: "Cirurgia Eletiva", paciente: "Carlos Mendes", procedimento: "Colecistectomia", data: "2024-03-10", hospital: "Hospital Municipal", status: "Realizada" },
    { id: 2, tipo: "Cirurgia de Emergência", paciente: "Fernanda Lima", procedimento: "Apendicectomia", data: "2024-03-14", hospital: "UPA Central", status: "Realizada" },
    { id: 3, tipo: "Cirurgia Eletiva", paciente: "Pedro Costa", procedimento: "Herniorrafia", data: "2024-03-25", hospital: "Hospital Municipal", status: "Agendada" },
  ],
  "Pacientes Internados": [
    { id: 1, paciente: "Maria José", idade: 67, leito: "Enfermaria 3 - Leito 12", diagnóstico: "Pneumonia", dataInternacao: "2024-03-12", status: "Estável" },
    { id: 2, paciente: "Antônio Silva", idade: 72, leito: "UTI - Leito 5", diagnóstico: "Infarto Agudo do Miocárdio", dataInternacao: "2024-03-15", status: "Grave" },
    { id: 3, paciente: "Luiza Pereira", idade: 45, leito: "Enfermaria 2 - Leito 8", diagnóstico: "Diabetes Descompensada", dataInternacao: "2024-03-18", status: "Melhorando" },
  ],
  "Vacinação": [
    { id: 1, vacina: "COVID-19 (Dose Reforço)", paciente: "José Almeida", idade: 55, data: "2024-03-05", local: "UBS Centro", lote: "PFZ202403001" },
    { id: 2, vacina: "Gripe (Influenza)", paciente: "Criança Santos", idade: 4, data: "2024-03-08", local: "UBS Bairro", lote: "INF20240315" },
    { id: 3, vacina: "Febre Amarela", paciente: "Maria Ferreira", idade: 38, data: "2024-03-12", local: "Posto de Saúde", lote: "FA20240310" },
  ],
  "Cadastros (ASS, UBS)": [
    { id: 1, tipo: "Cadastro Família", responsavel: "Família Silva", membros: 4, data: "2024-03-01", ubs: "UBS Nazaré", agente: "ACS Ana" },
    { id: 2, tipo: "Atualização Cadastral", responsavel: "Família Costa", membros: 3, data: "2024-03-10", ubs: "UBS Campina", agente: "ACS João" },
    { id: 3, tipo: "Novo Cadastro", responsavel: "Família Oliveira", membros: 5, data: "2024-03-15", ubs: "UBS Marco", agente: "ACS Maria" },
  ],
  "Perfil Epidemiológico": [
    { id: 1, indicador: "Incidência de Dengue", valor: "45 casos/100mil hab", tendencia: "Aumento", periodo: "Mar/2024", alerta: "Alto" },
    { id: 2, indicador: "Cobertura Vacinal", valor: "87%", tendencia: "Estável", periodo: "Fev/2024", alerta: "Médio" },
    { id: 3, indicador: "Mortalidade Infantil", valor: "12/1000 nascidos", tendencia: "Redução", periodo: "2023", alerta: "Baixo" },
    { id: 4, indicador: "Casos de Tuberculose", valor: "8 casos", tendencia: "Redução", periodo: "Jan-Mar/2024", alerta: "Baixo" },
  ],
};

// Dados mock para outras seções de Saúde
const EXEMPLOS_SAUDE: Record<string, any[]> = {
  "Posto de Saúde Referência": [
    { id: 1, nome: "UBS Nazaré", endereco: "Rua Manoel Barata, 100", telefone: "(91) 3210-1001", horario: "7h às 17h", equipes: 3 },
    { id: 2, nome: "UBS Campina", endereco: "Av. Presidente Vargas, 500", telefone: "(91) 3210-1002", horario: "7h às 17h", equipes: 2 },
  ],
  "Serviços e Programas": [
    { id: 1, programa: "Hipertensão e Diabetes (HIPERDIA)", participantes: 450, meta: 500, cobertura: "90%" },
    { id: 2, programa: "Saúde da Família", familiasCadastradas: 1200, cobertura: "85%" },
    { id: 3, programa: "Programa de Tuberculose", casosAcompanhados: 23, cura: "78%" },
  ],
  "Medicamentos em Falta": [
    { id: 1, medicamento: "Metformina 500mg", situacao: "Crítica", ultimaEntrega: "15/02/2024", previsao: "Indeterminada" },
    { id: 2, medicamento: "Losartana 50mg", situacao: "Em reposição", ultimaEntrega: "01/03/2024", previsao: "25/03/2024" },
    { id: 3, medicamento: "Insulina NPH", situacao: "Estável", ultimaEntrega: "10/03/2024", previsao: "20/03/2024" },
  ],
};

export default function CategoriaPage() {
  const params = useParams();
  const bairroId = params?.id as string;
  const categoriaId = params?.categoria as string;
  
  const [activeSecao, setActiveSecao] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({ status: "Pendente" });
  const [registros, setRegistros] = useState<any[]>([]);

  const catInfo = CATEGORIAS[categoriaId];

  useEffect(() => {
    if (catInfo) {
      setActiveSecao(catInfo.secoes[0]);
      carregarExemplos(catInfo.secoes[0]);
      setLoading(false);
    }
  }, [catInfo]);

  const carregarExemplos = (secao: string) => {
    // Carrega exemplos se existirem
    if (categoriaId === 'saude') {
      const exemplos = EXEMPLOS_EPIDEMIOLOGICO[secao] || EXEMPLOS_SAUDE[secao] || [];
      setRegistros(exemplos);
    } else {
      setRegistros([]);
    }
  };

  const handleSecaoChange = (secao: string) => {
    setActiveSecao(secao);
    setShowForm(false);
    carregarExemplos(secao);
  };

  const handleSimularInsercao = () => {
    const novoRegistro = gerarNovoRegistro(activeSecao);
    setRegistros([novoRegistro, ...registros]);
    setShowForm(false);
  };

  const gerarNovoRegistro = (secao: string) => {
    const id = Date.now();
    switch (secao) {
      case "Dengue":
        return {
          id,
          tipo: Math.random() > 0.5 ? "Caso Confirmado" : "Caso Suspeito",
          paciente: `Paciente ${Math.floor(Math.random() * 100)}`,
          idade: Math.floor(Math.random() * 60) + 18,
          data: new Date().toISOString().split('T')[0],
          status: "Em investigação",
          local: `Endereço ${Math.floor(Math.random() * 1000)}`
        };
      case "Cirurgias":
        return {
          id,
          tipo: Math.random() > 0.5 ? "Cirurgia Eletiva" : "Cirurgia de Emergência",
          paciente: `Paciente ${Math.floor(Math.random() * 100)}`,
          procedimento: ["Colecistectomia", "Herniorrafia", "Apendicectomia", "Cesárea"][Math.floor(Math.random() * 4)],
          data: new Date().toISOString().split('T')[0],
          hospital: "Hospital Municipal",
          status: "Agendada"
        };
      case "Pacientes Internados":
        return {
          id,
          paciente: `Paciente ${Math.floor(Math.random() * 100)}`,
          idade: Math.floor(Math.random() * 70) + 20,
          leito: `Enfermaria ${Math.floor(Math.random() * 5) + 1} - Leito ${Math.floor(Math.random() * 20) + 1}`,
          diagnóstico: ["Pneumonia", "Diabetes", "Hipertensão", "Gripe", "COVID-19"][Math.floor(Math.random() * 5)],
          dataInternacao: new Date().toISOString().split('T')[0],
          status: "Estável"
        };
      case "Vacinação":
        return {
          id,
          vacina: ["COVID-19", "Gripe", "Febre Amarela", "Hepatite B", "Tétano"][Math.floor(Math.random() * 5)],
          paciente: `Paciente ${Math.floor(Math.random() * 100)}`,
          idade: Math.floor(Math.random() * 80) + 1,
          data: new Date().toISOString().split('T')[0],
          local: "UBS Local",
          lote: `LOT${Date.now().toString().slice(-6)}`
        };
      case "Cadastros (ASS, UBS)":
        return {
          id,
          tipo: "Novo Cadastro",
          responsavel: `Família ${["Silva", "Costa", "Oliveira", "Santos"][Math.floor(Math.random() * 4)]}`,
          membros: Math.floor(Math.random() * 5) + 2,
          data: new Date().toISOString().split('T')[0],
          ubs: "UBS do Bairro",
          agente: `ACS ${["Ana", "João", "Maria", "Pedro"][Math.floor(Math.random() * 4)]}`
        };
      case "Perfil Epidemiológico":
        return {
          id,
          indicador: ["Incidência de Dengue", "Cobertura Vacinal", "Mortalidade", "Nascidos Vivos"][Math.floor(Math.random() * 4)],
          valor: `${Math.floor(Math.random() * 100)} casos`,
          tendencia: ["Aumento", "Redução", "Estável"][Math.floor(Math.random() * 3)],
          periodo: "Mar/2024",
          alerta: ["Alto", "Médio", "Baixo"][Math.floor(Math.random() * 3)]
        };
      default:
        return { id, titulo: `Registro ${id}`, data: new Date().toISOString().split('T')[0] };
    }
  };

  if (!catInfo || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
            <Home className="h-4 w-4" />
            Início
          </Link>
          <span>/</span>
          <Link href="/bairro" className="hover:text-blue-600">Bairros</Link>
          <span>/</span>
          <Link href={`/bairro/${bairroId}`} className="hover:text-blue-600">Bairro</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{catInfo.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">{catInfo.title}</h1>
          <p className="text-slate-500 mt-2">{catInfo.descricao}</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-3">
              <h3 className="px-4 py-3 text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                <Filter className="h-3.5 w-3.5" />
                Seções
              </h3>
              <div className="space-y-1">
                {catInfo.secoes.map((secao) => (
                  <button
                    key={secao}
                    onClick={() => handleSecaoChange(secao)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSecao === secao 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {secao}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Conteúdo */}
          <section className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{activeSecao}</h2>
                <p className="text-slate-500 text-sm">
                  {registros.length} registro{registros.length !== 1 ? 's' : ''} encontrado{registros.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="flex gap-2">
                {categoriaId === 'saude' && (
                  <Button 
                    onClick={handleSimularInsercao}
                    variant="outline"
                    className="border-green-200 text-green-600 hover:bg-green-50"
                  >
                    <Activity className="h-4 w-4 mr-2" />
                    Simular Inserção
                  </Button>
                )}
                <Button 
                  onClick={() => setShowForm(!showForm)}
                  variant={showForm ? "outline" : "default"}
                >
                  {showForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                  {showForm ? "Cancelar" : "Novo Registro"}
                </Button>
              </div>
            </div>

            {/* Formulário */}
            {showForm && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Adicionar: {activeSecao}</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label>Título</Label>
                      <Input 
                        placeholder="Título do registro"
                        value={formData.titulo || ""}
                        onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Descrição</Label>
                      <Textarea 
                        placeholder="Descrição detalhada"
                        rows={4}
                        value={formData.descricao || ""}
                        onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setShowForm(false)}>
                        Cancelar
                      </Button>
                      <Button type="button" className="flex-1">
                        <Save className="h-4 w-4 mr-2" />
                        Salvar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Lista de Registros */}
            {registros.length > 0 ? (
              <div className="space-y-4">
                {registros.map((registro) => (
                  <Card key={registro.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      {renderRegistroContent(registro, activeSecao)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Lista vazia */
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-slate-100 flex items-center justify-center">
                  <Plus className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Nenhum registro</h3>
                <p className="text-slate-500 mb-6">Clique em "Novo Registro" ou "Simular Inserção" para adicionar</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function renderRegistroContent(registro: any, secao: string) {
  switch (secao) {
    case "Dengue":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={registro.tipo === "Caso Confirmado" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}>
                {registro.tipo}
              </Badge>
              <span className="text-sm text-slate-400">{registro.data}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.paciente}</h4>
            <p className="text-sm text-slate-500">{registro.idade} anos • {registro.local}</p>
            <Badge variant="outline" className="mt-2">{registro.status}</Badge>
          </div>
          <AlertTriangle className={`h-5 w-5 ${registro.tipo === "Caso Confirmado" ? "text-red-500" : "text-amber-500"}`} />
        </div>
      );
    case "Cirurgias":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={registro.tipo === "Cirurgia de Emergência" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}>
                {registro.tipo}
              </Badge>
              <span className="text-sm text-slate-400">{registro.data}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.procedimento}</h4>
            <p className="text-sm text-slate-500">Paciente: {registro.paciente}</p>
            <p className="text-sm text-slate-400">{registro.hospital}</p>
            <Badge variant="outline" className="mt-2">{registro.status}</Badge>
          </div>
          <Stethoscope className="h-5 w-5 text-slate-400" />
        </div>
      );
    case "Pacientes Internados":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={registro.status === "Grave" ? "bg-red-100 text-red-700" : registro.status === "Estável" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                {registro.status}
              </Badge>
              <span className="text-sm text-slate-400">Internado em {registro.dataInternacao}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.paciente}</h4>
            <p className="text-sm text-slate-500">{registro.idade} anos • {registro.leito}</p>
            <p className="text-sm text-slate-400 mt-1"><strong>Diagnóstico:</strong> {registro.diagnóstico}</p>
          </div>
          <Activity className="h-5 w-5 text-slate-400" />
        </div>
      );
    case "Vacinação":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-green-100 text-green-700">
                <CheckCircle className="h-3 w-3 mr-1" />
                Aplicada
              </Badge>
              <span className="text-sm text-slate-400">{registro.data}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.vacina}</h4>
            <p className="text-sm text-slate-500">Paciente: {registro.paciente} • {registro.idade} anos</p>
            <p className="text-sm text-slate-400">Local: {registro.local} • Lote: {registro.lote}</p>
          </div>
        </div>
      );
    case "Cadastros (ASS, UBS)":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-blue-100 text-blue-700">{registro.tipo}</Badge>
              <span className="text-sm text-slate-400">{registro.data}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.responsavel}</h4>
            <p className="text-sm text-slate-500">{registro.membros} membros</p>
            <p className="text-sm text-slate-400">UBS: {registro.ubs} • ACS: {registro.agente}</p>
          </div>
          <Users className="h-5 w-5 text-slate-400" />
        </div>
      );
    case "Perfil Epidemiológico":
      return (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={registro.alerta === "Alto" ? "bg-red-100 text-red-700" : registro.alerta === "Médio" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}>
                Alerta {registro.alerta}
              </Badge>
              <span className="text-sm text-slate-400">{registro.periodo}</span>
            </div>
            <h4 className="font-semibold text-slate-900">{registro.indicador}</h4>
            <p className="text-2xl font-bold text-blue-600 mt-1">{registro.valor}</p>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className={`h-4 w-4 ${registro.tendencia === "Redução" ? "text-green-500" : registro.tendencia === "Aumento" ? "text-red-500" : "text-slate-400"}`} />
              <span className="text-sm text-slate-500">Tendência: {registro.tendencia}</span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h4 className="font-semibold text-slate-900">{registro.titulo || registro.nome || `Registro #${registro.id}`}</h4>
          <p className="text-sm text-slate-500">{registro.data}</p>
        </div>
      );
  }
}
