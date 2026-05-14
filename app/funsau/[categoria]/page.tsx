"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, Plus, X, Save, Loader2, Home, Filter, Search,
  User, Calendar, FileText, CheckCircle, AlertTriangle, QrCode
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FUNSAU_CATEGORIAS, TIPOS_ATENDIMENTO, STATUS_PROTOCOLO } from "@/types/funsau";

export default function FunsauCategoriaPage() {
  const params = useParams();
  const categoriaId = params?.categoria as string;
  
  const [activeSecao, setActiveSecao] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({ 
    status: "Triagem", 
    prioridade: "Normal",
    tipo_atendimento: "Consulta"
  });

  const catInfo = FUNSAU_CATEGORIAS[categoriaId];

  useEffect(() => {
    if (catInfo) {
      setActiveSecao(catInfo.secoes[0]);
      setLoading(false);
    }
  }, [catInfo]);

  if (!catInfo || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
      </div>
    );
  }

  // Formulários específicos por seção
  const renderForm = () => {
    // Triagem Médica - Novo Atendimento
    if (categoriaId === "triagem" && activeSecao === "Novo Atendimento") {
      return (
        <>
          <div className="bg-emerald-50 p-4 rounded-xl mb-6">
            <h4 className="font-semibold text-emerald-800 flex items-center gap-2">
              <User className="h-4 w-4" />
              Dados do Paciente
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>CPF *</Label>
              <Input 
                placeholder="000.000.000-00"
                value={formData.cpf || ""}
                onChange={(e) => setFormData({...formData, cpf: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Nome Completo *</Label>
              <Input 
                placeholder="Nome do paciente"
                value={formData.nome || ""}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data de Nascimento</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Sexo</Label>
              <select className="w-full h-10 rounded-md border border-slate-200 px-3">
                <option value="">Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Telefone</Label>
              <Input placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <Label>Número da Carteirinha</Label>
              <Input placeholder="Número da carteirinha" />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl mb-6 mt-6">
            <h4 className="font-semibold text-blue-800 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Dados do Atendimento
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tipo de Atendimento *</Label>
              <select 
                className="w-full h-10 rounded-md border border-slate-200 px-3"
                value={formData.tipo_atendimento || ""}
                onChange={(e) => setFormData({...formData, tipo_atendimento: e.target.value})}
              >
                {TIPOS_ATENDIMENTO.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Especialidade</Label>
              <Input placeholder="Ex: Cardiologia, Ortopedia" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Sintomas / Queixas</Label>
            <Textarea 
              placeholder="Descreva os sintomas ou queixas do paciente..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>CID Principal</Label>
              <Input placeholder="Código CID-10" />
            </div>
            <div className="space-y-2">
              <Label>Prioridade</Label>
              <select className="w-full h-10 rounded-md border border-slate-200 px-3">
                <option value="Normal">Normal</option>
                <option value="Urgente">Urgente</option>
                <option value="Emergência">Emergência</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Observações</Label>
            <Textarea 
              placeholder="Observações adicionais..."
              rows={2}
            />
          </div>
        </>
      );
    }

    // Auditoria
    if (categoriaId === "auditoria") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Número do Protocolo</Label>
              <Input placeholder="Ex: PROT-001-2026" />
            </div>
            <div className="space-y-2">
              <Label>CPF do Paciente</Label>
              <Input placeholder="000.000.000-00" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tipo de Auditoria</Label>
            <select className="w-full h-10 rounded-md border border-slate-200 px-3">
              <option value="Prévia">Auditoria Prévia</option>
              <option value="Final">Auditoria Final</option>
            </select>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl my-4">
            <h4 className="font-semibold text-blue-800">Critérios de Verificação</h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Dados completos</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Documentação compatível</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Procedimento adequado</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Valor conforme Brasíndice</span>
            </label>
          </div>

          <div className="space-y-2">
            <Label>Resultado da Auditoria</Label>
            <select className="w-full h-10 rounded-md border border-slate-200 px-3">
              <option value="">Selecione...</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Ajuste">Necessita Ajuste</option>
              <option value="Reprovado">Reprovado</option>
              <option value="Aceite Total">Aceite Total</option>
              <option value="Aceite Parcial">Aceite Parcial</option>
              <option value="Glosa Total">Glosa Total</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Valor Aprovado (R$)</Label>
            <Input placeholder="0,00" />
          </div>

          <div className="space-y-2">
            <Label>Justificativa / Parecer</Label>
            <Textarea 
              placeholder="Descreva o parecer da auditoria..."
              rows={4}
            />
          </div>
        </>
      );
    }

    // Validação de Paciente
    if (categoriaId === "atendimentos" && activeSecao === "Validação de Paciente") {
      return (
        <>
          <div className="bg-purple-50 p-6 rounded-xl text-center mb-6">
            <QrCode className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h4 className="font-semibold text-purple-800 text-lg">Validação do Paciente</h4>
            <p className="text-purple-600 text-sm mt-2">
              Escaneie o QR Code da carteirinha ou digite o código de validação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>CPF do Paciente</Label>
              <div className="flex gap-2">
                <Input placeholder="000.000.000-00" className="flex-1" />
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Código de Validação</Label>
              <Input placeholder="Código de 6 dígitos" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tipo de Validação</Label>
            <select className="w-full h-10 rounded-md border border-slate-200 px-3">
              <option value="QR Code">QR Code na Carteirinha</option>
              <option value="Código Email">Código por Email</option>
              <option value="Código SMS">Código por SMS</option>
              <option value="Carteirinha Foto">Carteirinha com Foto</option>
              <option value="Biometria">Biometria</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Protocolo Liberado</Label>
            <Input placeholder="Número do protocolo" readOnly className="bg-slate-50" />
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-2 text-green-800">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Paciente Validado</span>
            </div>
            <p className="text-green-600 text-sm mt-1">
              Procedimento liberado para execução
            </p>
          </div>
        </>
      );
    }

    // Upload de Documentos
    if (categoriaId === "documentos" && activeSecao === "Upload de XML") {
      return (
        <>
          <div className="space-y-2">
            <Label>Número da Guia TISS</Label>
            <Input placeholder="Número da guia" />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Guia</Label>
            <select className="w-full h-10 rounded-md border border-slate-200 px-3">
              <option value="">Selecione...</option>
              <option value="Consulta">Consulta</option>
              <option value="SADT">SADT</option>
              <option value="Honorário">Honorário</option>
              <option value="Internação">Internação</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>CPF do Paciente</Label>
            <Input placeholder="000.000.000-00" />
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
            <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Arraste o arquivo XML aqui</p>
            <p className="text-slate-400 text-sm mt-1">ou clique para selecionar</p>
            <Input type="file" accept=".xml" className="hidden" />
            <Button variant="outline" className="mt-4">
              Selecionar Arquivo
            </Button>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-amber-800 font-medium">Validação Automática</p>
                <p className="text-amber-600 text-sm">
                  O sistema validará a estrutura do XML conforme o padrão TISS
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Formulário padrão
    return (
      <>
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
      </>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-emerald-600 flex items-center gap-1">
            <Home className="h-4 w-4" />
            Início
          </Link>
          <span>/</span>
          <Link href="/funsau" className="hover:text-emerald-600">FUNSAU</Link>
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
                    onClick={() => { setActiveSecao(secao); setShowForm(false); }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSecao === secao 
                      ? "bg-emerald-50 text-emerald-600" 
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
                <p className="text-slate-500 text-sm">Gerencie os registros desta seção</p>
              </div>
              <Button 
                onClick={() => setShowForm(!showForm)}
                variant={showForm ? "outline" : "default"}
                className={showForm ? "" : "bg-emerald-600 hover:bg-emerald-700"}
              >
                {showForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                {showForm ? "Cancelar" : "Novo Registro"}
              </Button>
            </div>

            {/* Formulário */}
            {showForm && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{activeSecao}</h3>
                  <form className="space-y-4">
                    {renderForm()}
                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setShowForm(false)}>
                        Cancelar
                      </Button>
                      <Button type="button" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        <Save className="h-4 w-4 mr-2" />
                        Salvar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Lista vazia */}
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-slate-100 flex items-center justify-center">
                <Plus className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Nenhum registro</h3>
              <p className="text-slate-500 mb-6">Clique em "Novo Registro" para adicionar</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
