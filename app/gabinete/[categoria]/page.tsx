"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, Plus, X, Save, AlertCircle, Loader2, 
  FileText, Users, Calendar, Scale, MapPin, BarChart3, Edit, Trash2,
  Home, Filter, CheckCircle2, Clock, FileCheck, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { GABINETE_CATEGORIAS, STATUS_INDICACAO, STATUS_REQUERIMENTO, STATUS_ATENDIMENTO, TIPOS_MOCAO, ORGAOS_MUNICIPAIS } from "@/types/gabinete";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-8 w-8 text-blue-500" />,
  Users: <Users className="h-8 w-8 text-emerald-500" />,
  Calendar: <Calendar className="h-8 w-8 text-purple-500" />,
  Scale: <Scale className="h-8 w-8 text-amber-500" />,
  MapPin: <MapPin className="h-8 w-8 text-rose-500" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-indigo-500" />,
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100",
  emerald: "bg-emerald-100",
  purple: "bg-purple-100",
  amber: "bg-amber-100",
  rose: "bg-rose-100",
  indigo: "bg-indigo-100",
};

const statusConfig: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
  // Indicações
  "Protocolada": { bg: "bg-blue-100", text: "text-blue-700", icon: <FileCheck className="h-3 w-3" /> },
  "Em tramitação": { bg: "bg-amber-100", text: "text-amber-700", icon: <Clock className="h-3 w-3" /> },
  "Respondida": { bg: "bg-emerald-100", text: "text-emerald-700", icon: <CheckCircle2 className="h-3 w-3" /> },
  "Arquivada": { bg: "bg-slate-100", text: "text-slate-700", icon: <FileText className="h-3 w-3" /> },
  // Requerimentos
  "Protocolado": { bg: "bg-blue-100", text: "text-blue-700", icon: <FileCheck className="h-3 w-3" /> },
  "Atendido": { bg: "bg-emerald-100", text: "text-emerald-700", icon: <CheckCircle2 className="h-3 w-3" /> },
  "Não atendido": { bg: "bg-red-100", text: "text-red-700", icon: <X className="h-3 w-3" /> },
  // Atendimentos
  "Novo": { bg: "bg-blue-100", text: "text-blue-700", icon: <FileCheck className="h-3 w-3" /> },
  "Em análise": { bg: "bg-amber-100", text: "text-amber-700", icon: <Clock className="h-3 w-3" /> },
  "Encaminhado": { bg: "bg-purple-100", text: "text-purple-700", icon: <Send className="h-3 w-3" /> },
  "Em tratativa": { bg: "bg-orange-100", text: "text-orange-700", icon: <Clock className="h-3 w-3" /> },
  "Resolvido": { bg: "bg-emerald-100", text: "text-emerald-700", icon: <CheckCircle2 className="h-3 w-3" /> },
  "Arquivado": { bg: "bg-slate-100", text: "text-slate-700", icon: <FileText className="h-3 w-3" /> },
  // Default
  "Pendente": { bg: "bg-amber-100", text: "text-amber-700", icon: <Clock className="h-3 w-3" /> },
};

export default function GabineteCategoriaPage() {
  const params = useParams();
  const categoriaId = params?.categoria as string;
  
  const [registros, setRegistros] = useState<any[]>([]);
  const [activeSecao, setActiveSecao] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({ status: "Novo", prioridade: "Média" });
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);
  const { toast } = useToast();

  const catInfo = GABINETE_CATEGORIAS[categoriaId];

  const fetchRegistros = useCallback(async () => {
    if (!categoriaId || !activeSecao) return;
    
    try {
      setLoading(true);
      // Por enquanto simulamos os dados (depois conectamos ao banco)
      setRegistros([]);
    } catch (err) {
      console.error(err);
      setRegistros([]);
    } finally {
      setLoading(false);
    }
  }, [categoriaId, activeSecao]);

  useEffect(() => {
    if (catInfo) {
      setActiveSecao(catInfo.secoes[0]);
      setLoading(false);
    }
  }, [catInfo]);

  useEffect(() => {
    fetchRegistros();
  }, [fetchRegistros]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSalvando(true);
      
      toast({
        title: editandoId ? "✅ Registro atualizado!" : "✨ Registro criado!",
        description: "Funcionalidade em desenvolvimento - conectar ao banco",
      });
      
      resetForm();
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao salvar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setSalvando(false);
    }
  };

  const resetForm = () => {
    setFormData({ status: "Novo", prioridade: "Média" });
    setShowForm(false);
    setEditandoId(null);
  };

  // Formulários específicos por categoria
  const renderDocumentosForm = () => {
    // Indicações
    if (activeSecao === "Indicações") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Número</Label>
              <Input className="rounded-xl" placeholder="Ex: 001/2026" value={formData.numero || ""} onChange={(e) => setFormData({...formData, numero: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Data de Protocolo</Label>
              <Input type="date" className="rounded-xl" value={formData.data_protocolo || ""} onChange={(e) => setFormData({...formData, data_protocolo: e.target.value})} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Destinatário (Órgão)</Label>
            <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
              value={formData.destinatario || ""} onChange={(e) => setFormData({...formData, destinatario: e.target.value})}>
              <option value="">Selecione o órgão...</option>
              {ORGAOS_MUNICIPAIS.map((orgao) => <option key={orgao} value={orgao}>{orgao}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <Label>Assunto</Label>
            <Input className="rounded-xl" placeholder="Assunto da indicação" value={formData.assunto || ""} onChange={(e) => setFormData({...formData, assunto: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Descrição / Solicitação</Label>
            <Textarea className="rounded-xl" rows={4} placeholder="Descreva detalhadamente o que está sendo solicitado..." value={formData.descricao || ""} onChange={(e) => setFormData({...formData, descricao: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Bairros Beneficiados</Label>
            <Input className="rounded-xl" placeholder="Liste os bairros (separados por vírgula)" value={formData.bairros || ""} onChange={(e) => setFormData({...formData, bairros: e.target.value})} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Status</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.status || "Protocolada"} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                {STATUS_INDICACAO.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Prioridade</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.prioridade || "Média"} onChange={(e) => setFormData({...formData, prioridade: e.target.value})}>
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>
          </div>
        </>
      );
    }

    // Requerimentos
    if (activeSecao === "Requerimentos") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Número</Label>
              <Input className="rounded-xl" placeholder="Ex: 001/2026" value={formData.numero || ""} onChange={(e) => setFormData({...formData, numero: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Data de Protocolo</Label>
              <Input type="date" className="rounded-xl" value={formData.data_protocolo || ""} onChange={(e) => setFormData({...formData, data_protocolo: e.target.value})} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tipo de Requerimento</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.tipo || ""} onChange={(e) => setFormData({...formData, tipo: e.target.value})}>
                <option value="">Selecione...</option>
                <option value="Informação">Informação</option>
                <option value="Documentos">Documentos</option>
                <option value="Medidas">Medidas</option>
                <option value="Providências">Providências</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Destinatário</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.destinatario || ""} onChange={(e) => setFormData({...formData, destinatario: e.target.value})}>
                <option value="">Selecione o órgão...</option>
                {ORGAOS_MUNICIPAIS.map((orgao) => <option key={orgao} value={orgao}>{orgao}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Assunto</Label>
            <Input className="rounded-xl" placeholder="Assunto do requerimento" value={formData.assunto || ""} onChange={(e) => setFormData({...formData, assunto: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Fundação / Argumentação</Label>
            <Textarea className="rounded-xl" rows={4} placeholder="Fundamente o pedido..." value={formData.fundamentacao || ""} onChange={(e) => setFormData({...formData, fundamentacao: e.target.value})} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Status</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.status || "Protocolado"} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                {STATUS_REQUERIMENTO.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Prioridade</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.prioridade || "Média"} onChange={(e) => setFormData({...formData, prioridade: e.target.value})}>
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>
          </div>
        </>
      );
    }

    // Ofícios
    if (activeSecao === "Ofícios") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Número</Label>
              <Input className="rounded-xl" placeholder="Ex: 001/2026" value={formData.numero || ""} onChange={(e) => setFormData({...formData, numero: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Tipo</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.tipo || ""} onChange={(e) => setFormData({...formData, tipo: e.target.value})}>
                <option value="">Selecione...</option>
                <option value="Expedido">Expedido (enviado)</option>
                <option value="Recebido">Recebido</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Destinatário</Label>
              <Input className="rounded-xl" placeholder="Para quem foi enviado" value={formData.destinatario || ""} onChange={(e) => setFormData({...formData, destinatario: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Remetente</Label>
              <Input className="rounded-xl" placeholder="Quem enviou" value={formData.remetente || ""} onChange={(e) => setFormData({...formData, remetente: e.target.value})} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Assunto</Label>
            <Input className="rounded-xl" placeholder="Assunto do ofício" value={formData.assunto || ""} onChange={(e) => setFormData({...formData, assunto: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Conteúdo</Label>
            <Textarea className="rounded-xl" rows={4} placeholder="Texto do ofício..." value={formData.conteudo || ""} onChange={(e) => setFormData({...formData, conteudo: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Data de Emissão</Label>
            <Input type="date" className="rounded-xl" value={formData.data_emissao || ""} onChange={(e) => setFormData({...formData, data_emissao: e.target.value})} />
          </div>
        </>
      );
    }

    // Moções
    if (activeSecao === "Moções") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Número</Label>
              <Input className="rounded-xl" placeholder="Ex: 001/2026" value={formData.numero || ""} onChange={(e) => setFormData({...formData, numero: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>Tipo de Moção</Label>
              <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
                value={formData.tipo || ""} onChange={(e) => setFormData({...formData, tipo: e.target.value})}>
                <option value="">Selecione...</option>
                {TIPOS_MOCAO.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Título</Label>
            <Input className="rounded-xl" placeholder="Título da moção" value={formData.titulo || ""} onChange={(e) => setFormData({...formData, titulo: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Destinatário / Homenageado</Label>
            <Input className="rounded-xl" placeholder="Nome da pessoa, entidade ou comunidade" value={formData.destinatario || ""} onChange={(e) => setFormData({...formData, destinatario: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Conteúdo / Justificativa</Label>
            <Textarea className="rounded-xl" rows={4} placeholder="Texto da moção..." value={formData.conteudo || ""} onChange={(e) => setFormData({...formData, conteudo: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Data de Protocolo</Label>
            <Input type="date" className="rounded-xl" value={formData.data_protocolo || ""} onChange={(e) => setFormData({...formData, data_protocolo: e.target.value})} />
          </div>
        </>
      );
    }

    return null;
  };

  const renderAtendimentosForm = () => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Protocolo</Label>
            <Input className="rounded-xl" placeholder="Número de protocolo" value={formData.protocolo || ""} onChange={(e) => setFormData({...formData, protocolo: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Data do Atendimento</Label>
            <Input type="date" className="rounded-xl" value={formData.data_atendimento || ""} onChange={(e) => setFormData({...formData, data_atendimento: e.target.value})} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Tipo de Atendimento</Label>
          <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
            value={formData.tipo || ""} onChange={(e) => setFormData({...formData, tipo: e.target.value})}>
            <option value="">Selecione...</option>
            <option value="Presencial">Presencial</option>
            <option value="Telefone">Telefone</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Redes Sociais">Redes Sociais</option>
            <option value="Visita">Visita</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Nome do Cidadão</Label>
            <Input className="rounded-xl" placeholder="Nome completo" value={formData.cidadao_nome || ""} onChange={(e) => setFormData({...formData, cidadao_nome: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>CPF</Label>
            <Input className="rounded-xl" placeholder="000.000.000-00" value={formData.cidadao_cpf || ""} onChange={(e) => setFormData({...formData, cidadao_cpf: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input className="rounded-xl" placeholder="(00) 00000-0000" value={formData.cidadao_telefone || ""} onChange={(e) => setFormData({...formData, cidadao_telefone: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Bairro</Label>
            <Input className="rounded-xl" placeholder="Bairro do cidadão" value={formData.bairro || ""} onChange={(e) => setFormData({...formData, bairro: e.target.value})} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Demanda / Solicitação</Label>
          <Textarea className="rounded-xl" rows={3} placeholder="Descreva a demanda do cidadão..." value={formData.demanda || ""} onChange={(e) => setFormData({...formData, demanda: e.target.value})} />
        </div>
        <div className="space-y-2">
          <Label>Categoria</Label>
          <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
            value={formData.categoria || ""} onChange={(e) => setFormData({...formData, categoria: e.target.value})}>
            <option value="">Selecione...</option>
            <option value="Saúde">Saúde</option>
            <option value="Educação">Educação</option>
            <option value="Infraestrutura">Infraestrutura</option>
            <option value="Social">Social</option>
            <option value="Segurança">Segurança</option>
            <option value="Habitação">Habitação</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label>Encaminhamento</Label>
          <Textarea className="rounded-xl" rows={2} placeholder="Para qual órgão foi encaminhado..." value={formData.encaminhamento || ""} onChange={(e) => setFormData({...formData, encaminhamento: e.target.value})} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
              value={formData.status || "Novo"} onChange={(e) => setFormData({...formData, status: e.target.value})}>
              {STATUS_ATENDIMENTO.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <Label>Prioridade</Label>
            <select className="w-full h-11 rounded-xl border border-slate-200 bg-white px-4"
              value={formData.prioridade || "Média"} onChange={(e) => setFormData({...formData, prioridade: e.target.value})}>
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>
        </div>
      </>
    );
  };

  const renderForm = () => {
    if (!categoriaId) return null;

    if (categoriaId === "documentos") {
      const form = renderDocumentosForm();
      if (form) return form;
    }

    if (categoriaId === "atendimentos") {
      return renderAtendimentosForm();
    }

    // Formulário padrão
    return (
      <>
        <div className="space-y-2">
          <Label>Título</Label>
          <Input className="rounded-xl" placeholder="Título do registro" value={formData.titulo || ""} onChange={(e) => setFormData({...formData, titulo: e.target.value})} />
        </div>
        <div className="space-y-2">
          <Label>Descrição</Label>
          <Textarea className="rounded-xl" rows={4} placeholder="Descrição detalhada" value={formData.descricao || ""} onChange={(e) => setFormData({...formData, descricao: e.target.value})} />
        </div>
      </>
    );
  };

  const getStatusBadge = (status: string) => {
    const config = statusConfig[status] || statusConfig["Pendente"];
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
        {config.icon}
        {status}
      </span>
    );
  };

  if (!catInfo || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-amber-600 mx-auto" />
          <p className="mt-4 text-slate-500 font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            Início
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/gabinete" className="hover:text-amber-600 transition-colors">Gabinete</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900 font-medium">{catInfo.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`p-5 rounded-3xl shadow-lg ${iconBgMap[catInfo.cor]}`}>
              {iconMap[catInfo.icon]}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                {catInfo.title}
              </h1>
              <p className="text-slate-500 mt-2 text-lg">{catInfo.descricao}</p>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-3 sticky top-4">
              <h3 className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Filter className="h-3.5 w-3.5" />
                Seções
              </h3>
              <div className="space-y-1">
                {catInfo.secoes.map((secao) => (
                  <button
                    key={secao}
                    onClick={() => { setActiveSecao(secao); resetForm(); }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeSecao === secao 
                      ? "bg-gradient-to-r from-amber-50 to-amber-100/50 text-amber-600 shadow-sm" 
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${activeSecao === secao ? "bg-amber-500" : "bg-slate-300"}`} />
                    {secao}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <section className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  {activeSecao}
                  <Badge variant="secondary" className="text-xs font-medium">
                    {registros.length} registro{registros.length !== 1 ? 's' : ''}
                  </Badge>
                </h2>
                <p className="text-slate-500 text-sm mt-1">Gerencie os registros desta seção</p>
              </div>
              <Button 
                onClick={() => setShowForm(!showForm)} 
                className={`gap-2 rounded-xl transition-all ${
                  showForm 
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200" 
                    : "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25"
                }`}
              >
                {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                {showForm ? "Cancelar" : "Novo Registro"}
              </Button>
            </div>

            {/* Formulário */}
            {showForm && (
              <Card className="mb-8 border-0 shadow-xl shadow-slate-200/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      {editandoId ? <Edit className="h-5 w-5 text-amber-600" /> : <Plus className="h-5 w-5 text-amber-600" />}
                    </div>
                    {editandoId ? "Editar Registro" : `Adicionar: ${activeSecao}`}
                  </h3>
                  <form onSubmit={handleSave} className="space-y-5">
                    {renderForm()}
                    
                    <div className="flex gap-3 pt-6">
                      <Button type="button" variant="outline" className="flex-1 rounded-xl h-11" onClick={resetForm}>
                        Cancelar
                      </Button>
                      <Button type="submit" className="flex-1 rounded-xl h-11 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" disabled={salvando}>
                        {salvando && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                        <Save className="h-4 w-4 mr-2" />
                        {editandoId ? "Atualizar" : "Salvar"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Lista de Registros */}
            <div className="space-y-4">
              {registros.length === 0 && (
                <div className="py-20 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <AlertCircle className="h-12 w-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Nenhum registro encontrado</h3>
                  <p className="text-slate-400 mb-6">Clique em "Novo Registro" para adicionar</p>
                  <Button 
                    onClick={() => setShowForm(true)}
                    className="gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600"
                  >
                    <Plus className="h-4 w-4" />
                    Criar Primeiro Registro
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
