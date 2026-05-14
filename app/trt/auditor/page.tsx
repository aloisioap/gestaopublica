"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, Plus, X, Save, Loader2, Home, Filter, Activity, TrendingUp, 
  AlertTriangle, CheckCircle, Clock, Users, Calendar, MapPin, Stethoscope,
  Search, FileText, Eye, Download, DollarSign, Building2, FileSearch,
  XSquare, CheckSquare, Package, Syringe, Pill, ThumbsUp, ThumbsDown,
  MinusCircle, BarChart3, ClipboardList, Shield, Receipt, FileSpreadsheet,
  ChevronDown, ChevronUp, Printer, Send, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CORES_TRT, 
  FATURAS_TRT, 
  CHECKLIST_AUDITORIA, 
  SERVIDORES_TRT, 
  CREDENCIADOS_TRT, 
  ITENS_FATURA_TRT,
} from "@/lib/dados-trt-8a-regiao";
import {
  CONVENIOS_RECIPROCIDADE,
  LOTES_RECIPROCIDADE,
  GUIAS_RECIPROCIDADE,
  TABELA_BRASINDICE,
  INDICADORES_RECIPROCIDADE,
  buscarLotes,
  buscarGuias,
  calcularDiferencaBrasindice,
  type LoteReciprocidade,
  type GuiaReciprocidade,
} from "@/lib/dados-trt-reciprocidade";
import {
  PROCEDIMENTOS_OPME,
  DUTS,
  MODELOS_PARECER,
  gerarParecerAutomatico,
  preencherDUT,
  type ProcedimentoOPME,
  type DUT,
  type ParecerOPME,
} from "@/lib/dados-trt-opme";

// Processos para análise
const PROCESSOS_ANALISE = [
  {
    id: "PROC-ANL-001",
    matricula: "TRT0001",
    servidor_nome: "Maria Santos Oliveira",
    credenciado_id: "CRED-001",
    credenciado_nome: "Hospital Metropolitano",
    tipo: "Consulta",
    descricao: "Consulta Cardiológica",
    data_execucao: "2024-01-15",
    data_envio: "2024-01-20",
    status: "Aguardando Análise",
    valor: 250.00,
    documentos: {
      xml: "consulta_cardio_001.xml",
      pdf: "consulta_cardio_001.pdf",
      guia: "guia_autorizacao_001.pdf",
    },
    historico: [
      { data: "2024-01-10", acao: "Solicitação criada", responsavel: "Sistema" },
      { data: "2024-01-15", acao: "Procedimento executado", responsavel: "Hospital Metropolitano" },
      { data: "2024-01-20", acao: "Documentos enviados", responsavel: "TRT - Servidor" },
    ],
  },
];

type ItemAuditoria = {
  id: string;
  fatura_id: string;
  codigo: string;
  descricao: string;
  tipo: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  origem: string;
  status_auditoria: "Aprovado" | "Glosado" | "Pendente";
  motivo_glosa: string | null;
};

export default function AreaAuditoriaTRT() {
  type FaturaTipo = {
    id: string;
    numero_fatura: string;
    status: string;
    valor_bruto: number;
    valor_liquido: number;
    pdf_categoria: string;
    mes_referencia: number;
    ano_referencia: number;
    procedimento_id: string;
    credenciado_id: string;
    motivo_glosa: string | null;
    observacoes_auditoria?: string | null;
    nome_credenciado?: string;
    xml_arquivo?: string;
    pdf_arquivo?: string;
    auditor_id?: string | null;
  };
  
  const [faturas, setFaturas] = useState<FaturaTipo[]>(FATURAS_TRT.map(f => ({...f})));
  const [faturaSelecionada, setFaturaSelecionada] = useState<FaturaTipo | null>(null);
  const [itensAuditoria, setItensAuditoria] = useState<ItemAuditoria[]>(
    ITENS_FATURA_TRT.map(i => ({...i, status_auditoria: i.status_auditoria as ItemAuditoria["status_auditoria"]}))
  );
  const [checklist, setChecklist] = useState<{id: number; item: string; verificado: boolean; obrigatorio: boolean}[]>(
    CHECKLIST_AUDITORIA.map(item => ({...item}))
  );
  const [observacoes, setObservacoes] = useState("");
  const [processoSelecionado, setProcessoSelecionado] = useState<typeof PROCESSOS_ANALISE[0] | null>(null);
  const [modalProcessoAberto, setModalProcessoAberto] = useState(false);
  const [documentoVisualizando, setDocumentoVisualizando] = useState<string | null>(null);
  const [itemEmGlosa, setItemEmGlosa] = useState<string | null>(null);
  const [motivoGlosaItem, setMotivoGlosaItem] = useState("");

  // Estados para Reciprocidade
  const [filtrosReciprocidade, setFiltrosReciprocidade] = useState<{
    convenio: string;
    status: string;
    dataInicio: string;
    dataFim: string;
    numeroLote: string;
  }>({
    convenio: "todos",
    status: "todos",
    dataInicio: "",
    dataFim: "",
    numeroLote: "",
  });
  const [filtrosGuias, setFiltrosGuias] = useState({
    matricula: "",
    cpf: "",
    nome: "",
    dataExecucao: "",
    status: "todos",
  });
  const [loteSelecionado, setLoteSelecionado] = useState<LoteReciprocidade | null>(null);
  const [guiaSelecionada, setGuiaSelecionada] = useState<GuiaReciprocidade | null>(null);

  // Estados para OPME
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState<ProcedimentoOPME | null>(null);
  const [dutPreenchido, setDutPreenchido] = useState<Record<string, string>>({});
  const [parecerGerado, setParecerGerado] = useState<ParecerOPME | null>(null);
  const [abaAuditorAtiva, setAbaAuditorAtiva] = useState("faturas");

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, verificado: !item.verificado } : item))
    );
  };

  const aprovarItem = (itemId: string) => {
    setItensAuditoria(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status_auditoria: "Aprovado" as const, motivo_glosa: null }
        : item
    ));
  };

  const glosarItem = (itemId: string, motivo: string) => {
    setItensAuditoria(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status_auditoria: "Glosado" as const, motivo_glosa: motivo }
        : item
    ));
    setItemEmGlosa(null);
    setMotivoGlosaItem("");
  };

  const aprovarTodosItens = (faturaId: string) => {
    setItensAuditoria(prev => prev.map(item => 
      item.fatura_id === faturaId 
        ? { ...item, status_auditoria: "Aprovado" as const, motivo_glosa: null }
        : item
    ));
  };

  const getResumoFatura = (faturaId: string) => {
    const itens = itensAuditoria.filter(i => i.fatura_id === faturaId);
    const aprovados = itens.filter(i => i.status_auditoria === "Aprovado");
    const glosados = itens.filter(i => i.status_auditoria === "Glosado");
    const pendentes = itens.filter(i => i.status_auditoria === "Pendente");
    const valorAprovado = aprovados.reduce((acc, item) => acc + item.valor_total, 0);
    const valorGlosado = glosados.reduce((acc, item) => acc + item.valor_total, 0);
    
    return {
      total: itens.length,
      aprovados: aprovados.length,
      glosados: glosados.length,
      pendentes: pendentes.length,
      valorAprovado,
      valorGlosado,
    };
  };

  const abrirModalProcesso = (processo: typeof PROCESSOS_ANALISE[0]) => {
    setProcessoSelecionado(processo);
    setModalProcessoAberto(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pendente":
        return <Badge variant="secondary">Pendente</Badge>;
      case "Inserida":
        return <Badge style={{ backgroundColor: CORES_TRT.info, color: "white" }}>Inserida</Badge>;
      case "Auditada":
        return <Badge style={{ backgroundColor: CORES_TRT.terciaria, color: "white" }}>Auditada</Badge>;
      case "Aprovada":
        return <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>Aprovada</Badge>;
      case "Glosada":
        return <Badge style={{ backgroundColor: CORES_TRT.alerta }}>Glosada</Badge>;
      case "Aguardando Análise":
        return <Badge style={{ backgroundColor: CORES_TRT.alerta }}>Aguardando</Badge>;
      case "Em Análise":
        return <Badge style={{ backgroundColor: CORES_TRT.info }}>Em Análise</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getIconeTipo = (tipo: string) => {
    switch (tipo) {
      case "Insumo":
        return <Syringe className="h-4 w-4" style={{ color: CORES_TRT.terciaria }} />;
      case "Medicamento":
        return <Pill className="h-4 w-4" style={{ color: CORES_TRT.erro }} />;
      case "Material":
        return <Package className="h-4 w-4" style={{ color: CORES_TRT.destaque }} />;
      case "Procedimento":
        return <Stethoscope className="h-4 w-4" style={{ color: CORES_TRT.info }} />;
      default:
        return <FileText className="h-4 w-4" style={{ color: CORES_TRT.primaria }} />;
    }
  };

  // Funções para Reciprocidade
  const lotesFiltrados = buscarLotes(filtrosReciprocidade);
  const guiasFiltradas = guiaSelecionada ? [guiaSelecionada] : buscarGuias({
    ...filtrosGuias,
    loteId: loteSelecionado?.id || "",
  });

  // Função para gerar parecer OPME
  const handleGerarParecer = () => {
    if (!procedimentoSelecionado) return;
    const parecer = gerarParecerAutomatico(
      procedimentoSelecionado.id,
      dutPreenchido,
      Object.keys(dutPreenchido).length >= 3
    );
    setParecerGerado(parecer);
  };

  const itensPendentes = checklist.filter((item) => !item.verificado && item.obrigatorio).length;
  const itensVerificados = checklist.filter((item) => item.verificado).length;
  const progresso = (itensVerificados / checklist.length) * 100;

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_TRT.fundo }}>
      {/* Header */}
      <header
        className="text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${CORES_TRT.primaria} 0%, ${CORES_TRT.secundaria} 100%)`,
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
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Auditoria TIS</h1>
                  <p className="text-sm opacity-90">Análise de Conformidade - Lotes e Reciprocidade</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              Acesso TIS/TRT
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.alerta }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Pendentes</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {faturas.filter((f) => f.status === "Pendente" || f.status === "Inserida").length}
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.alerta}20` }}>
                  <AlertTriangle className="h-6 w-6" style={{ color: CORES_TRT.alerta }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.info }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Em Análise</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {faturas.filter((f) => f.status === "Auditada").length}
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.info}20` }}>
                  <ClipboardCheck className="h-6 w-6" style={{ color: CORES_TRT.info }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.sucesso }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Aprovadas</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {faturas.filter((f) => f.status === "Aprovada").length}
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.sucesso}20` }}>
                  <CheckCircle className="h-6 w-6" style={{ color: CORES_TRT.sucesso }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4" style={{ borderLeftColor: CORES_TRT.destaque }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Reciprocidade</p>
                  <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                    {LOTES_RECIPROCIDADE.length} lotes
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_TRT.destaque}20` }}>
                  <Shield className="h-6 w-6" style={{ color: CORES_TRT.destaque }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abas Principais */}
        <Tabs value={abaAuditorAtiva} onValueChange={setAbaAuditorAtiva} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faturas" className="flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4" />
              Faturas
            </TabsTrigger>
            <TabsTrigger value="lotes" className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              Lotes (XML)
            </TabsTrigger>
            <TabsTrigger value="reciprocidade" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Reciprocidade
            </TabsTrigger>
            <TabsTrigger value="opme" className="flex items-center gap-2">
              <Syringe className="h-4 w-4" />
              OPME / Pareceres
            </TabsTrigger>
          </TabsList>

          {/* ABA FATURAS */}
          <TabsContent value="faturas" className="space-y-4">
            {/* ... conteúdo existente das faturas ... */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Lista de Faturas */}
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                      <Search className="h-4 w-4" />
                      Faturas Pendentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y max-h-[600px] overflow-y-auto">
                      {faturas.map((fatura) => {
                        const resumo = getResumoFatura(fatura.id);
                        
                        return (
                          <div
                            key={fatura.id}
                            className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors ${
                              faturaSelecionada?.id === fatura.id ? "bg-blue-50 border-l-4 border-blue-500" : ""
                            }`}
                            onClick={() => setFaturaSelecionada(fatura)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <span className="font-semibold text-sm">{fatura.numero_fatura}</span>
                              {getStatusBadge(fatura.status)}
                            </div>
                            
                            <div className="flex gap-1 mb-2">
                              <Badge variant="outline" style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }} className="text-xs">
                                {resumo.aprovados} OK
                              </Badge>
                              {resumo.glosados > 0 && (
                                <Badge variant="outline" style={{ borderColor: CORES_TRT.erro, color: CORES_TRT.erro }} className="text-xs">
                                  {resumo.glosados} Glosa
                                </Badge>
                              )}
                              {resumo.pendentes > 0 && (
                                <Badge variant="outline" style={{ borderColor: CORES_TRT.alerta, color: CORES_TRT.alerta }} className="text-xs">
                                  {resumo.pendentes} Pend
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium" style={{ color: CORES_TRT.primaria }}>
                                R$ {fatura.valor_bruto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </span>
                              <span className="text-xs text-slate-500">
                                {fatura.mes_referencia}/{fatura.ano_referencia}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Área de Auditoria Detalhada */}
              <div className="lg:col-span-2">
                {faturaSelecionada ? (
                  <Card className="h-full">
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle style={{ color: CORES_TRT.primaria }}>
                            Vistoria Detalhada: {faturaSelecionada.numero_fatura}
                          </CardTitle>
                          <p className="text-sm text-slate-500 mt-1">
                            Análise item por item da fatura
                          </p>
                        </div>
                        {(() => {
                          const resumo = getResumoFatura(faturaSelecionada.id);
                          return (
                            <div className="text-right">
                              <p className="text-sm text-slate-500">Valor Aprovado</p>
                              <p className="text-xl font-bold" style={{ color: CORES_TRT.sucesso }}>
                                R$ {resumo.valorAprovado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </p>
                              {resumo.valorGlosado > 0 && (
                                <p className="text-sm text-red-600">
                                  Glosado: R$ {resumo.valorGlosado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </p>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      {/* Checklist Rápido */}
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                          <CheckSquare className="h-4 w-4" />
                          Checklist de Conformidade
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {checklist.slice(0, 4).map((item) => (
                            <div key={item.id} className="flex items-center gap-2">
                              <Checkbox
                                id={`check-${item.id}`}
                                checked={item.verificado}
                                onCheckedChange={() => toggleChecklistItem(item.id)}
                              />
                              <label htmlFor={`check-${item.id}`} className="text-sm cursor-pointer">
                                {item.item}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tabela de Itens */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold" style={{ color: CORES_TRT.primaria }}>
                            Itens da Fatura
                          </h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => aprovarTodosItens(faturaSelecionada.id)}
                            style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Aprovar Todos
                          </Button>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                          <table className="w-full text-sm">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="text-left p-3">Item</th>
                                <th className="text-center p-3">Tipo</th>
                                <th className="text-center p-3">Qtd</th>
                                <th className="text-right p-3">Valor</th>
                                <th className="text-center p-3">Origem</th>
                                <th className="text-center p-3">Status</th>
                                <th className="text-center p-3">Ação</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {itensAuditoria
                                .filter((item) => item.fatura_id === faturaSelecionada.id)
                                .map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50">
                                  <td className="p-3">
                                    <div className="flex items-center gap-2">
                                      {getIconeTipo(item.tipo)}
                                      <div>
                                        <p className="font-medium">{item.descricao}</p>
                                        <p className="text-xs text-slate-500 font-mono">{item.codigo}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-3 text-center">
                                    <Badge variant="outline">{item.tipo}</Badge>
                                  </td>
                                  <td className="p-3 text-center">{item.quantidade}</td>
                                  <td className="p-3 text-right">
                                    R$ {item.valor_total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                  </td>
                                  <td className="p-3 text-center">
                                    <span className={`text-xs ${item.origem === "Inserido Manualmente" ? "text-amber-600 font-medium" : "text-slate-500"}`}>
                                      {item.origem === "Inserido Manualmente" ? "Extra" : "XML"}
                                    </span>
                                  </td>
                                  <td className="p-3 text-center">
                                    {item.status_auditoria === "Aprovado" ? (
                                      <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>
                                        <ThumbsUp className="h-3 w-3 mr-1" />
                                        OK
                                      </Badge>
                                    ) : item.status_auditoria === "Glosado" ? (
                                      <Badge style={{ backgroundColor: CORES_TRT.erro }}>
                                        <ThumbsDown className="h-3 w-3 mr-1" />
                                        Glosado
                                      </Badge>
                                    ) : (
                                      <Badge variant="outline" style={{ borderColor: CORES_TRT.alerta, color: CORES_TRT.alerta }}>
                                        <MinusCircle className="h-3 w-3 mr-1" />
                                        Pendente
                                      </Badge>
                                    )}
                                  </td>
                                  <td className="p-3 text-center">
                                    {itemEmGlosa === item.id ? (
                                      <div className="flex flex-col gap-2">
                                        <Input
                                          size={10}
                                          placeholder="Motivo da glosa"
                                          value={motivoGlosaItem}
                                          onChange={(e) => setMotivoGlosaItem(e.target.value)}
                                          className="text-xs"
                                        />
                                        <div className="flex gap-1">
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setItemEmGlosa(null)}
                                          >
                                            Cancelar
                                          </Button>
                                          <Button
                                            size="sm"
                                            style={{ backgroundColor: CORES_TRT.erro }}
                                            onClick={() => glosarItem(item.id, motivoGlosaItem)}
                                            disabled={!motivoGlosaItem}
                                          >
                                            Confirmar
                                          </Button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex gap-1 justify-center">
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => aprovarItem(item.id)}
                                          style={{ color: CORES_TRT.sucesso }}
                                          disabled={item.status_auditoria === "Aprovado"}
                                        >
                                          <ThumbsUp className="h-4 w-4" />
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => {
                                            setItemEmGlosa(item.id);
                                            setMotivoGlosaItem(item.motivo_glosa || "");
                                          }}
                                          style={{ color: CORES_TRT.erro }}
                                          disabled={item.status_auditoria === "Glosado"}
                                        >
                                          <ThumbsDown className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Observações */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: CORES_TRT.primaria }}>
                          Observações da Auditoria
                        </label>
                        <textarea
                          className="w-full p-3 border rounded-lg text-sm min-h-[100px]"
                          placeholder="Digite suas observações sobre a fatura..."
                          value={observacoes}
                          onChange={(e) => setObservacoes(e.target.value)}
                        />
                      </div>

                      {/* Resumo e Ações */}
                      {(() => {
                        const resumo = getResumoFatura(faturaSelecionada.id);
                        const temPendentes = resumo.pendentes > 0;
                        
                        return (
                          <div className="flex gap-3 pt-4 border-t">
                            <Button
                              className="flex-1"
                              size="lg"
                              disabled={temPendentes}
                              style={{
                                backgroundColor: temPendentes ? "#ccc" : CORES_TRT.sucesso,
                              }}
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Aprovar Fatura
                            </Button>
                            
                            <Button
                              className="flex-1"
                              size="lg"
                              variant="outline"
                              onClick={() => setFaturaSelecionada(null)}
                            >
                              Cancelar
                            </Button>
                            
                            <Button
                              className="flex-1"
                              size="lg"
                              variant="destructive"
                              disabled={resumo.aprovados === 0}
                            >
                              <X className="h-4 w-4 mr-2" />
                              Aprovação Parcial
                            </Button>
                          </div>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-full flex items-center justify-center">
                    <CardContent className="text-center py-12">
                      <ClipboardCheck className="h-16 w-16 mx-auto mb-4 opacity-30" style={{ color: CORES_TRT.primaria }} />
                      <h3 className="text-lg font-semibold text-slate-600">Selecione uma fatura</h3>
                      <p className="text-sm text-slate-500">
                        Clique em uma fatura da lista à esquerda para iniciar a vistoria detalhada
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* ABA LOTES (XML) */}
          <TabsContent value="lotes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  Auditoria por Lotes XML
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Filtros de Lotes */}
                <div className="grid grid-cols-5 gap-4 mb-6">
                  <div>
                    <Label className="text-xs">Convênio</Label>
                    <Select value={filtrosReciprocidade.convenio} onValueChange={(v) => setFiltrosReciprocidade({...filtrosReciprocidade, convenio: v})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        {CONVENIOS_RECIPROCIDADE.filter(c => c.ativo).map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.nome}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs">Status</Label>
                    <Select value={filtrosReciprocidade.status} onValueChange={(v) => setFiltrosReciprocidade({...filtrosReciprocidade, status: v})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="Pendente">Pendente</SelectItem>
                        <SelectItem value="Em Auditoria">Em Auditoria</SelectItem>
                        <SelectItem value="Auditado">Auditado</SelectItem>
                        <SelectItem value="Glosado">Glosado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs">Data Início</Label>
                    <Input type="date" value={filtrosReciprocidade.dataInicio} onChange={(e) => setFiltrosReciprocidade({...filtrosReciprocidade, dataInicio: e.target.value})} />
                  </div>
                  <div>
                    <Label className="text-xs">Data Fim</Label>
                    <Input type="date" value={filtrosReciprocidade.dataFim} onChange={(e) => setFiltrosReciprocidade({...filtrosReciprocidade, dataFim: e.target.value})} />
                  </div>
                  <div>
                    <Label className="text-xs">Nº Lote</Label>
                    <Input placeholder="Buscar lote..." value={filtrosReciprocidade.numeroLote} onChange={(e) => setFiltrosReciprocidade({...filtrosReciprocidade, numeroLote: e.target.value})} />
                  </div>
                </div>

                {/* Lista de Lotes */}
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow>
                        <TableHead>Nº Lote</TableHead>
                        <TableHead>Convênio</TableHead>
                        <TableHead>Data Receb.</TableHead>
                        <TableHead>Qtde Guias</TableHead>
                        <TableHead>Valor Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Auditor</TableHead>
                        <TableHead>Ação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lotesFiltrados.map((lote) => (
                        <TableRow key={lote.id} className="hover:bg-slate-50">
                          <TableCell className="font-medium">{lote.numeroLote}</TableCell>
                          <TableCell>{lote.convenioNome}</TableCell>
                          <TableCell>{new Date(lote.dataRecebimento).toLocaleDateString("pt-BR")}</TableCell>
                          <TableCell>{lote.quantidadeGuias}</TableCell>
                          <TableCell className="font-medium" style={{ color: CORES_TRT.primaria }}>
                            R$ {lote.valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell>
                            <Badge variant={lote.status === "Auditado" ? "default" : lote.status === "Glosado" ? "destructive" : "secondary"}>
                              {lote.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{lote.auditorResponsavel || "-"}</TableCell>
                          <TableCell>
                            <Button size="sm" onClick={() => setLoteSelecionado(lote)}>
                              <Eye className="h-4 w-4 mr-1" />
                              Ver Guias
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Guias do Lote Selecionado */}
                {loteSelecionado && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Guias do Lote: {loteSelecionado.numeroLote}
                      </h3>
                      <Button variant="ghost" size="sm" onClick={() => setLoteSelecionado(null)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Filtros de Guias */}
                    <div className="grid grid-cols-5 gap-4 mb-4">
                      <Input placeholder="Matrícula" value={filtrosGuias.matricula} onChange={(e) => setFiltrosGuias({...filtrosGuias, matricula: e.target.value})} />
                      <Input placeholder="CPF" value={filtrosGuias.cpf} onChange={(e) => setFiltrosGuias({...filtrosGuias, cpf: e.target.value})} />
                      <Input placeholder="Nome" value={filtrosGuias.nome} onChange={(e) => setFiltrosGuias({...filtrosGuias, nome: e.target.value})} />
                      <Input type="date" value={filtrosGuias.dataExecucao} onChange={(e) => setFiltrosGuias({...filtrosGuias, dataExecucao: e.target.value})} />
                      <Select value={filtrosGuias.status} onValueChange={(v) => setFiltrosGuias({...filtrosGuias, status: v})}>
                        <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">Todos</SelectItem>
                          <SelectItem value="Aprovado">Aprovado</SelectItem>
                          <SelectItem value="Glosado">Glosado</SelectItem>
                          <SelectItem value="Pendente">Pendente</SelectItem>
                          <SelectItem value="Análise">Análise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Lista de Guias */}
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {guiasFiltradas.filter(g => g.loteId === loteSelecionado.id).map((guia) => (
                          <div key={guia.id} className="p-3 bg-white rounded border hover:shadow-sm">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium">{guia.nomeBeneficiario}</span>
                                  <Badge variant="outline" className="text-xs">{guia.matricula}</Badge>
                                  <Badge className={guia.status === "Glosado" ? "bg-red-500" : guia.status === "Aprovado" ? "bg-green-500" : "bg-amber-500"}>
                                    {guia.status}
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-600">{guia.procedimentoDescricao}</p>
                                <p className="text-xs text-slate-500">{guia.credenciado_nome} • {new Date(guia.dataExecucao).toLocaleDateString("pt-BR")}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold" style={{ color: CORES_TRT.primaria }}>
                                  R$ {guia.valorApresentado.toFixed(2)}
                                </p>
                                <p className="text-xs text-slate-500">Ref: R$ {guia.valorBrasindice.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ABA RECIPROCIDADE */}
          <TabsContent value="reciprocidade" className="space-y-4">
            {/* Dashboard de Indicadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDICADORES_RECIPROCIDADE.map((indicador) => (
                <Card key={indicador.convenioId}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="h-5 w-5" style={{ color: CORES_TRT.primaria }} />
                      {indicador.convenioNome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-50 rounded">
                        <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>{indicador.totalGuias}</p>
                        <p className="text-xs text-slate-500">Guias</p>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded">
                        <p className="text-2xl font-bold" style={{ color: CORES_TRT.primaria }}>
                          R$ {(indicador.valorTotal / 1000).toFixed(0)}k
                        </p>
                        <p className="text-xs text-slate-500">Total</p>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded">
                        <p className="text-2xl font-bold text-red-600">{indicador.percentualGlosa.toFixed(1)}%</p>
                        <p className="text-xs text-red-600">Glosa</p>
                      </div>
                    </div>

                    {/* Alertas de Valores Acima */}
                    {indicador.guiasAcimaBrasindice > 0 && (
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 mb-4">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                          <span className="text-amber-800 font-medium">
                            {indicador.guiasAcimaBrasindice} guias com valores acima do Brasíndice
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Procedimentos Mais Utilizados */}
                    <div>
                      <p className="text-sm font-medium mb-2">Procedimentos Mais Utilizados</p>
                      <div className="space-y-1">
                        {indicador.procedimentosMaisUtilizados.slice(0, 3).map((proc, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-slate-600 truncate">{proc.nome}</span>
                            <span className="font-medium">{proc.quantidade} ({(proc.valor / 1000).toFixed(0)}k)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabela Brasíndice de Referência */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Tabela de Referência - Brasíndice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow>
                        <TableHead>Código</TableHead>
                        <TableHead>Procedimento</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead className="text-right">Valor Referência</TableHead>
                        <TableHead className="text-right">Valor Máximo</TableHead>
                        <TableHead className="text-right">Margem</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {TABELA_BRASINDICE.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-mono text-xs">{item.procedimentoCodigo}</TableCell>
                          <TableCell>{item.procedimentoDescricao}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.tipo}</Badge>
                          </TableCell>
                          <TableCell className="text-right">R$ {item.valorReferencia.toFixed(2)}</TableCell>
                          <TableCell className="text-right">R$ {item.valorMaximo.toFixed(2)}</TableCell>
                          <TableCell className="text-right">±{item.margemAceitacao}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ABA OPME */}
          <TabsContent value="opme" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Seleção de Procedimento */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Syringe className="h-5 w-5" />
                    Gerador de Parecer OPME
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Selecione o Procedimento</Label>
                      <Select value={procedimentoSelecionado?.id || ""} onValueChange={(v) => {
                        const proc = PROCEDIMENTOS_OPME.find(p => p.id === v);
                        setProcedimentoSelecionado(proc || null);
                        setDutPreenchido({});
                        setParecerGerado(null);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha um procedimento..." />
                        </SelectTrigger>
                        <SelectContent>
                          {PROCEDIMENTOS_OPME.map((proc) => (
                            <SelectItem key={proc.id} value={proc.id}>
                              {proc.descricao} (Ref: R$ {proc.valorReferencia.toLocaleString()})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {procedimentoSelecionado && (
                      <>
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-2">Documentos Necessários:</h4>
                          <ul className="space-y-1">
                            {procedimentoSelecionado.documentosNecessarios.map((doc, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-blue-50 rounded text-center">
                            <p className="text-lg font-bold text-blue-600">R$ {procedimentoSelecionado.valorReferencia.toLocaleString()}</p>
                            <p className="text-xs text-blue-600">Valor Referência</p>
                          </div>
                          <div className="p-3 bg-amber-50 rounded text-center">
                            <p className="text-lg font-bold text-amber-600">{procedimentoSelecionado.prazoCarencia} dias</p>
                            <p className="text-xs text-amber-600">Prazo Carência</p>
                          </div>
                        </div>

                        {/* DUT Dinâmico */}
                        {(() => {
                          const dut = DUTS.find(d => d.codigoProcedimento === procedimentoSelecionado.codigo);
                          if (!dut) return null;
                          
                          return (
                            <div className="border rounded-lg p-4">
                              <h4 className="font-medium mb-3">{dut.titulo}</h4>
                              <div className="space-y-3">
                                {dut.camposVariaveis.slice(0, 6).map((campo) => (
                                  <div key={campo.nome}>
                                    <Label className="text-xs">{campo.descricao} {campo.obrigatorio && "*"}</Label>
                                    <Input
                                      value={dutPreenchido[campo.nome] || ""}
                                      onChange={(e) => setDutPreenchido({...dutPreenchido, [campo.nome]: e.target.value})}
                                      placeholder={`Digite ${campo.descricao.toLowerCase()}`}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}

                        <Button 
                          className="w-full" 
                          onClick={handleGerarParecer}
                          style={{ backgroundColor: CORES_TRT.primaria }}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Gerar Parecer Automático
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Parecer Gerado */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Parecer Gerado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {parecerGerado ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className={
                          parecerGerado.tipo === "Autorizado" ? "bg-green-500" :
                          parecerGerado.tipo === "Negado" ? "bg-red-500" :
                          parecerGerado.tipo === "Autorizado Parcialmente" ? "bg-amber-500" :
                          "bg-blue-500"
                        }>
                          {parecerGerado.tipo}
                        </Badge>
                        <span className="text-sm text-slate-500">{parecerGerado.codigo}</span>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-medium mb-2">Motivo:</h4>
                        <p className="text-sm text-slate-700">{parecerGerado.motivo}</p>
                      </div>

                      {parecerGerado.condicionantes && parecerGerado.condicionantes.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2">Condicionantes:</h4>
                          <ul className="space-y-1">
                            {parecerGerado.condicionantes.map((cond, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                                {cond}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium mb-2">Observações:</h4>
                        <p className="text-sm text-slate-700">{parecerGerado.observacoes}</p>
                      </div>

                      {parecerGerado.dataValidade && (
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          Validade: {parecerGerado.dataValidade}
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button className="flex-1" variant="outline">
                          <Printer className="h-4 w-4 mr-2" />
                          Imprimir
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <Send className="h-4 w-4 mr-2" />
                          Enviar
                        </Button>
                        <Button className="flex-1" style={{ backgroundColor: CORES_TRT.sucesso }}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Assinar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-slate-400">
                      <ClipboardList className="h-16 w-16 mx-auto mb-4" />
                      <p>Selecione um procedimento e gere o parecer</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Modelos de Parecer */}
            <Card>
              <CardHeader>
                <CardTitle>Modelos de Parecer Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {MODELOS_PARECER.map((modelo) => (
                    <div key={modelo.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={
                          modelo.tipo === "Autorizado" ? "bg-green-500" :
                          modelo.tipo === "Negado" ? "bg-red-500" :
                          "bg-amber-500"
                        }>
                          {modelo.tipo}
                        </Badge>
                      </div>
                      <p className="font-medium text-sm mb-1">{modelo.procedimentoDescricao}</p>
                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">{modelo.motivo}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-1" />
                        Usar Modelo
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_TRT.primaria }}>TRT 8ª Região - Sistema de Auditoria TIS</p>
          <p>Acesso restrito a auditores autorizados</p>
        </footer>
      </div>
    </main>
  );
}
