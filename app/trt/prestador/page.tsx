"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Upload,
  FileText,
  QrCode,
  CheckCircle,
  Clock,
  Search,
  AlertCircle,
  User,
  X,
  Eye,
  Download,
  Stethoscope,
  Microscope,
  AlertTriangle,
  CheckSquare,
  XSquare,
  DollarSign,
  Plus,
  Trash2,
  FileSearch,
  Package,
  Syringe,
  Pill,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CORES_TRT, CREDENCIADOS_TRT, SERVIDORES_TRT, FATURAS_TRT, ITENS_FATURA_TRT } from "@/lib/dados-trt-8a-regiao";

// Processos liberados para execução (mock)
const PROCESSOS_LIBERADOS = [
  {
    id: "PROC-LIB-001",
    matricula: "TRT0001",
    tipo: "Consulta",
    descricao: "Consulta Cardiológica de Retorno",
    data_autorizacao: "2024-01-10",
    data_validade: "2024-02-10",
    status: "Autorizado",
    medico_solicitante: "Dr. José Silva - CRM/PA 1234",
  },
  {
    id: "PROC-LIB-002",
    matricula: "TRT0001",
    tipo: "Exame",
    descricao: "Hemograma Completo",
    data_autorizacao: "2024-01-10",
    data_validade: "2024-02-10",
    status: "Autorizado",
    medico_solicitante: "Dr. José Silva - CRM/PA 1234",
  },
];

// Dados simulados de XML extraídos
const XML_EXEMPLO = {
  numero_guia: "123456789",
  data_execucao: "2024-01-15",
  senha: "SENHA-001",
  itens: [
    { codigo: "10101012", descricao: "Consulta Cardiológica", tipo: "Procedimento", quantidade: 1, valor: 250.00 },
    { codigo: "10101020", descricao: "Eletrocardiograma", tipo: "Procedimento", quantidade: 1, valor: 80.00 },
    { codigo: "INS-001", descricao: "Agulha Descartável 40x12", tipo: "Insumo", quantidade: 2, valor: 5.00 },
    { codigo: "INS-002", descricao: "Seringa Descartável 10ml", tipo: "Insumo", quantidade: 2, valor: 6.00 },
    { codigo: "MAT-001", descricao: "Eletrodo ECG Descartável", tipo: "Material", quantidade: 10, valor: 9.00 },
  ],
};

type ServidorTipo = {
  id: string;
  matricula: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cargo: string;
  secretaria?: string;
  lotacao: string;
  vara?: string;
  comarca: string;
  estado: string;
  tipo_sanguineo: string;
  alergias: string[];
  comorbidades: string[];
  carteirinha_saude: string;
  qr_code: string;
  numero_guia?: string;
  titular?: boolean;
  data_admissao?: string;
  data_nascimento?: string;
  plano_saude?: string;
  matricula_titular?: string | null;
  foto_url?: string;
  ativo: boolean;
};

type FaturaTipo = {
  id: string;
  procedimento_id: string;
  credenciado_id: string;
  numero_fatura: string;
  xml_arquivo: string;
  pdf_arquivo: string;
  pdf_categoria: string;
  valor_bruto: number;
  valor_liquido: number;
  status: string;
  auditor_id: string | null;
  motivo_glosa: string | null;
  mes_referencia: number;
  ano_referencia: number;
  nome_credenciado?: string;
  observacoes_auditoria?: string | null;
};

type ItemExtra = {
  id: string;
  codigo: string;
  descricao: string;
  tipo: "Insumo" | "Procedimento" | "Consulta" | "Material" | "Medicamento";
  quantidade: number;
  valor_unitario: number;
  justificativa: string;
  documento_justificativa: string;
};

export default function AreaPrestadorTRT() {
  const [credenciado] = useState(CREDENCIADOS_TRT[0]);
  const [matriculaBusca, setMatriculaBusca] = useState("");
  const [servidorEncontrado, setServidorEncontrado] = useState<ServidorTipo | null>(null);
  const [processosServidor, setProcessosServidor] = useState<typeof PROCESSOS_LIBERADOS>([]);
  const [faturas] = useState<FaturaTipo[]>(FATURAS_TRT.filter((f) => f.credenciado_id === credenciado.id).map(f => ({...f})));
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [matriculaUpload, setMatriculaUpload] = useState("");
  const [processoSelecionado, setProcessoSelecionado] = useState<any | null>(null);
  const [modalStatusAberto, setModalStatusAberto] = useState(false);
  const [faturaSelecionada, setFaturaSelecionada] = useState<FaturaTipo | null>(null);
  const [modalFaturaAberto, setModalFaturaAberto] = useState(false);
  
  // Estados para análise de XML
  const [xmlAnalisado, setXmlAnalisado] = useState(false);
  const [itensXml, setItensXml] = useState<typeof XML_EXEMPLO.itens>([]);
  const [itensExtras, setItensExtras] = useState<ItemExtra[]>([]);
  const [mostrarFormExtra, setMostrarFormExtra] = useState(false);
  const [novoItemExtra, setNovoItemExtra] = useState<Partial<ItemExtra>>({
    tipo: "Insumo",
    quantidade: 1,
    valor_unitario: 0,
  });

  const buscarServidor = () => {
    const servidor = SERVIDORES_TRT.find((s) => s.matricula === matriculaBusca) as ServidorTipo | undefined;
    if (servidor) {
      setServidorEncontrado(servidor);
      const processos = PROCESSOS_LIBERADOS.filter((p) => p.matricula === servidor.matricula);
      setProcessosServidor(processos);
    } else {
      alert("Beneficiário não encontrado. Tente: TRT0001, TRT0002, TRT0003, TRT0004 ou TRT0005");
      setProcessosServidor([]);
    }
  };

  const analisarXml = () => {
    // Simulação de análise de XML
    setItensXml(XML_EXEMPLO.itens);
    setXmlAnalisado(true);
    alert("XML analisado com sucesso! Itens extraídos automaticamente.");
  };

  const adicionarItemExtra = () => {
    if (!novoItemExtra.descricao || !novoItemExtra.codigo) {
      alert("Preencha código e descrição do item");
      return;
    }
    
    const item: ItemExtra = {
      id: `EXTRA-${Date.now()}`,
      codigo: novoItemExtra.codigo || "",
      descricao: novoItemExtra.descricao || "",
      tipo: novoItemExtra.tipo as ItemExtra["tipo"] || "Insumo",
      quantidade: novoItemExtra.quantidade || 1,
      valor_unitario: novoItemExtra.valor_unitario || 0,
      justificativa: novoItemExtra.justificativa || "",
      documento_justificativa: novoItemExtra.documento_justificativa || "",
    };
    
    setItensExtras([...itensExtras, item]);
    setNovoItemExtra({
      tipo: "Insumo",
      quantidade: 1,
      valor_unitario: 0,
    });
    setMostrarFormExtra(false);
  };

  const removerItemExtra = (id: string) => {
    setItensExtras(itensExtras.filter((item) => item.id !== id));
  };

  const abrirModalStatus = (faturaId: string) => {
    const itens = ITENS_FATURA_TRT.filter((i) => i.fatura_id === faturaId);
    if (itens.length > 0) {
      setProcessoSelecionado({ fatura_id: faturaId, itens });
      setModalStatusAberto(true);
    }
  };

  const abrirModalFatura = (fatura: FaturaTipo) => {
    setFaturaSelecionada(fatura);
    setModalFaturaAberto(true);
  };

  const getItensFatura = (faturaId: string) => {
    return ITENS_FATURA_TRT.filter((i) => i.fatura_id === faturaId);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paga":
        return <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>Paga</Badge>;
      case "Auditada":
        return <Badge style={{ backgroundColor: CORES_TRT.info }}>Auditada</Badge>;
      case "Glosada":
        return <Badge style={{ backgroundColor: CORES_TRT.alerta }}>Glosada</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
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

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_TRT.fundo }}>
      {/* Header */}
      <header
        className="text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${CORES_TRT.terciaria} 0%, ${CORES_TRT.primaria} 100%)`,
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
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Área do Credenciado</h1>
                  <p className="text-sm opacity-90">{credenciado.nome_fantasia}</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              <CheckCircle className="h-3 w-3 mr-1" />
              Contrato Ativo
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Validação de Beneficiário */}
        <Card className="mb-6 border-2" style={{ borderColor: CORES_TRT.terciaria }}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
              <QrCode className="h-5 w-5" />
              Validação de Beneficiário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite a matrícula do beneficiário (ex: TRT0001)"
                    value={matriculaBusca}
                    onChange={(e) => setMatriculaBusca(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={buscarServidor}
                    style={{ backgroundColor: CORES_TRT.terciaria }}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Dica: Use matrículas de demonstração: TRT0001, TRT0002, TRT0003, TRT0004 ou TRT0005
                </p>
              </div>
            </div>

            {servidorEncontrado && (
              <div className="mt-4 space-y-4">
                {/* Dados do Beneficiário */}
                <div
                  className="p-4 rounded-lg border-l-4"
                  style={{ backgroundColor: `${CORES_TRT.sucesso}10`, borderLeftColor: CORES_TRT.sucesso }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{servidorEncontrado.nome}</h3>
                        <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Válido
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">
                        Matrícula: {servidorEncontrado.matricula} | Cargo: {servidorEncontrado.cargo}
                      </p>
                      <p className="text-sm text-slate-600">
                        Lotação: {servidorEncontrado.lotacao} - {servidorEncontrado.comarca}/{servidorEncontrado.estado}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white p-2 rounded-lg shadow">
                        <QrCode className="h-16 w-16" style={{ color: CORES_TRT.primaria }} />
                      </div>
                      <p className="text-xs mt-1 text-slate-500">QR Validado</p>
                    </div>
                  </div>
                </div>

                {/* Processos Liberados */}
                {processosServidor.length > 0 && (
                  <div className="border rounded-lg overflow-hidden">
                    <div
                      className="px-4 py-3 flex items-center gap-2"
                      style={{ backgroundColor: `${CORES_TRT.info}15` }}
                    >
                      <CheckSquare className="h-5 w-5" style={{ color: CORES_TRT.info }} />
                      <span className="font-semibold" style={{ color: CORES_TRT.primaria }}>
                        Processos Liberados para Execução
                      </span>
                      <Badge className="ml-auto">{processosServidor.length} autorizações</Badge>
                    </div>
                    <div className="divide-y">
                      {processosServidor.map((processo) => (
                        <div key={processo.id} className="p-4 hover:bg-slate-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                {processo.tipo === "Consulta" ? (
                                  <Stethoscope className="h-4 w-4" style={{ color: CORES_TRT.info }} />
                                ) : (
                                  <Microscope className="h-4 w-4" style={{ color: CORES_TRT.terciaria }} />
                                )}
                                <span className="font-medium">{processo.descricao}</span>
                                <Badge variant="outline">{processo.tipo}</Badge>
                              </div>
                              <p className="text-sm text-slate-500">
                                Autorizado em: {new Date(processo.data_autorizacao).toLocaleDateString("pt-BR")} | 
                                Válido até: {new Date(processo.data_validade).toLocaleDateString("pt-BR")}
                              </p>
                            </div>
                            <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>{processo.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Abas */}
        <Tabs defaultValue="upload" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger value="faturas" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Faturas
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Enviar Documentos
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Status
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faturas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Minhas Faturas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Fatura</th>
                        <th className="text-left py-2">Procedimento</th>
                        <th className="text-left py-2">Itens</th>
                        <th className="text-right py-2">Valor</th>
                        <th className="text-center py-2">Status</th>
                        <th className="text-center py-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {faturas.map((fatura) => {
                        const itens = getItensFatura(fatura.id);
                        const itensAprovados = itens.filter(i => i.status_auditoria === "Aprovado").length;
                        const itensGlosados = itens.filter(i => i.status_auditoria === "Glosado").length;
                        
                        return (
                          <tr key={fatura.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => abrirModalFatura(fatura)}>
                            <td className="py-3 font-medium">{fatura.numero_fatura}</td>
                            <td className="py-3">{fatura.procedimento_id}</td>
                            <td className="py-3">
                              <div className="flex gap-1">
                                <Badge variant="outline" style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}>
                                  {itensAprovados} OK
                                </Badge>
                                {itensGlosados > 0 && (
                                  <Badge variant="outline" style={{ borderColor: CORES_TRT.erro, color: CORES_TRT.erro }}>
                                    {itensGlosados} Glosa
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="py-3 text-right">
                              R$ {fatura.valor_bruto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-3 text-center">{getStatusBadge(fatura.status)}</td>
                            <td className="py-3 text-center">
                              <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); abrirModalFatura(fatura); }}>
                                <Eye className="h-4 w-4 mr-1" />
                                Detalhes
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            {/* Analisador de XML */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                  <FileSearch className="h-5 w-5" />
                  Analisador de XML TISS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload XML */}
                <div className="p-6 border-2 border-dashed rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-3" style={{ color: CORES_TRT.info }} />
                    <h3 className="font-semibold text-lg">XML TISS</h3>
                    <p className="text-sm text-slate-500 mb-4">
                      Arraste ou clique para enviar o arquivo XML do protocolo TISS
                    </p>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" style={{ borderColor: CORES_TRT.info, color: CORES_TRT.info }}>
                        Selecionar XML
                      </Button>
                      <Button 
                        onClick={analisarXml}
                        style={{ backgroundColor: CORES_TRT.terciaria }}
                      >
                        <FileSearch className="h-4 w-4 mr-2" />
                        Analisar XML
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Resultado da Análise */}
                {xmlAnalisado && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold" style={{ color: CORES_TRT.primaria }}>
                        Itens Extraídos do XML ({itensXml.length} itens)
                      </h4>
                      <Badge style={{ backgroundColor: CORES_TRT.sucesso }}>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        XML Válido
                      </Badge>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="text-left p-3">Código</th>
                            <th className="text-left p-3">Descrição</th>
                            <th className="text-center p-3">Tipo</th>
                            <th className="text-center p-3">Qtd</th>
                            <th className="text-right p-3">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {itensXml.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 font-mono text-xs">{item.codigo}</td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  {getIconeTipo(item.tipo)}
                                  {item.descricao}
                                </div>
                              </td>
                              <td className="p-3 text-center">
                                <Badge variant="outline">{item.tipo}</Badge>
                              </td>
                              <td className="p-3 text-center">{item.quantidade}</td>
                              <td className="p-3 text-right">
                                R$ {item.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Total */}
                    <div className="p-4 bg-slate-50 rounded-lg flex justify-between items-center">
                      <span className="font-medium">Total dos Itens do XML:</span>
                      <span className="text-xl font-bold" style={{ color: CORES_TRT.primaria }}>
                        R$ {itensXml.reduce((acc, item) => acc + item.valor, 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Insumos Extras (Não no XML) */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                  <Plus className="h-5 w-5" />
                  Itens Não Constantes no XML
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Adicione insumos, procedimentos ou custos que não estão no XML original mas foram utilizados.
                </p>

                {/* Lista de Itens Extras */}
                {itensExtras.length > 0 && (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="text-left p-3">Código</th>
                          <th className="text-left p-3">Descrição</th>
                          <th className="text-center p-3">Tipo</th>
                          <th className="text-center p-3">Qtd</th>
                          <th className="text-right p-3">Valor</th>
                          <th className="text-center p-3">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {itensExtras.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50">
                            <td className="p-3 font-mono text-xs">{item.codigo}</td>
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                {getIconeTipo(item.tipo)}
                                <div>
                                  <p className="font-medium">{item.descricao}</p>
                                  <p className="text-xs text-slate-500 truncate max-w-[200px]">
                                    {item.justificativa}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <Badge variant="outline">{item.tipo}</Badge>
                            </td>
                            <td className="p-3 text-center">{item.quantidade}</td>
                            <td className="p-3 text-right">
                              R$ {(item.quantidade * item.valor_unitario).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </td>
                            <td className="p-3 text-center">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removerItemExtra(item.id)}
                                style={{ color: CORES_TRT.erro }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Botão Adicionar */}
                {!mostrarFormExtra && (
                  <Button
                    variant="outline"
                    onClick={() => setMostrarFormExtra(true)}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Item Extra
                  </Button>
                )}

                {/* Formulário de Item Extra */}
                {mostrarFormExtra && (
                  <div className="p-4 border rounded-lg space-y-4">
                    <h4 className="font-semibold" style={{ color: CORES_TRT.primaria }}>
                      Novo Item Extra
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-600">Tipo</label>
                        <select
                          className="w-full p-2 border rounded-lg mt-1"
                          value={novoItemExtra.tipo}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, tipo: e.target.value as ItemExtra["tipo"]})}
                        >
                          <option value="Insumo">Insumo</option>
                          <option value="Procedimento">Procedimento</option>
                          <option value="Consulta">Consulta</option>
                          <option value="Material">Material</option>
                          <option value="Medicamento">Medicamento</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm text-slate-600">Código</label>
                        <Input
                          placeholder="Ex: INS-001"
                          value={novoItemExtra.codigo || ""}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, codigo: e.target.value})}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="text-sm text-slate-600">Descrição</label>
                        <Input
                          placeholder="Descrição do item"
                          value={novoItemExtra.descricao || ""}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, descricao: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-slate-600">Quantidade</label>
                        <Input
                          type="number"
                          min={1}
                          value={novoItemExtra.quantidade}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, quantidade: parseInt(e.target.value) || 1})}
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-slate-600">Valor Unitário (R$)</label>
                        <Input
                          type="number"
                          step="0.01"
                          min={0}
                          value={novoItemExtra.valor_unitario}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, valor_unitario: parseFloat(e.target.value) || 0})}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="text-sm text-slate-600">Justificativa</label>
                        <textarea
                          className="w-full p-2 border rounded-lg mt-1 text-sm"
                          rows={2}
                          placeholder="Justifique a necessidade deste item"
                          value={novoItemExtra.justificativa || ""}
                          onChange={(e) => setNovoItemExtra({...novoItemExtra, justificativa: e.target.value})}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="text-sm text-slate-600">Documento de Justificativa</label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            placeholder="Nome do arquivo ou descrição"
                            value={novoItemExtra.documento_justificativa || ""}
                            onChange={(e) => setNovoItemExtra({...novoItemExtra, documento_justificativa: e.target.value})}
                          />
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-1" />
                            Anexar
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setMostrarFormExtra(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        onClick={adicionarItemExtra}
                        style={{ backgroundColor: CORES_TRT.sucesso }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Item
                      </Button>
                    </div>
                  </div>
                )}

                {/* Total de Extras */}
                {itensExtras.length > 0 && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 flex justify-between items-center">
                    <span className="font-medium">Total de Itens Extras:</span>
                    <span className="text-xl font-bold" style={{ color: CORES_TRT.destaque }}>
                      R$ {itensExtras.reduce((acc, item) => acc + (item.quantidade * item.valor_unitario), 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Matrícula e Envio */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="p-4 border rounded-lg" style={{ backgroundColor: `${CORES_TRT.primaria}05` }}>
                  <label className="block text-sm font-medium mb-2" style={{ color: CORES_TRT.primaria }}>
                    Vincular ao Servidor (Matrícula)
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite a matrícula para vincular os documentos"
                      value={matriculaUpload}
                      onChange={(e) => setMatriculaUpload(e.target.value)}
                    />
                    <Button variant="outline">
                      <Search className="h-4 w-4 mr-2" />
                      Verificar
                    </Button>
                  </div>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  disabled={!matriculaUpload || (!xmlAnalisado && itensExtras.length === 0)}
                  style={{ backgroundColor: CORES_TRT.terciaria }}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Enviar Fatura Completa
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: CORES_TRT.primaria }}>Status das Faturas em Trâmite</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faturas.map((fatura) => {
                    const itens = getItensFatura(fatura.id);
                    return (
                      <div
                        key={fatura.id}
                        className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => abrirModalStatus(fatura.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{fatura.numero_fatura}</h4>
                          {getStatusBadge(fatura.status)}
                        </div>
                        
                        {/* Resumo de Itens */}
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline" style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}>
                            {itens.filter(i => i.status_auditoria === "Aprovado").length} Aprovados
                          </Badge>
                          <Badge variant="outline" style={{ borderColor: CORES_TRT.erro, color: CORES_TRT.erro }}>
                            {itens.filter(i => i.status_auditoria === "Glosado").length} Glosados
                          </Badge>
                          <Badge variant="outline" style={{ borderColor: CORES_TRT.alerta, color: CORES_TRT.alerta }}>
                            {itens.filter(i => i.origem === "Inserido Manualmente").length} Extras
                          </Badge>
                        </div>

                        {fatura.motivo_glosa && (
                          <div className="mt-2 p-2 bg-red-50 rounded text-sm">
                            <span className="font-medium text-red-700">Motivo da Glosa: </span>
                            <span className="text-red-600">{fatura.motivo_glosa}</span>
                          </div>
                        )}
                        
                        <div className="mt-3 flex justify-end">
                          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); abrirModalStatus(fatura.id); }}>
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Detalhamento
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_TRT.primaria }}>TRT 8ª Região - Área do Credenciado</p>
          <p>CNPJ: {credenciado.cnpj}</p>
          <p>Contrato: {credenciado.numero_contrato}</p>
        </footer>
      </div>

      {/* Modais permanecem os mesmos... */}
    </main>
  );
}
