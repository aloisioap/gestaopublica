"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Calendar,
  FileText,
  QrCode,
  History,
  Bell,
  MapPin,
  Phone,
  Mail,
  Droplet,
  AlertTriangle,
  CheckCircle,
  X,
  Download,
  Printer,
  Stethoscope,
  Microscope,
  Eye,
  HeartPulse,
  Activity,
  Plus,
  Clock,
  Search,
  FileSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CORES_TRT, SERVIDORES_TRT, HISTORICO_SAUDE_TRT, NOTIFICACOES_TRT } from "@/lib/dados-trt-8a-regiao";

interface HistoricoItem {
  id: string;
  matricula: string;
  usuario_nome: string;
  categoria: string;
  procedimento_id: string;
  descricao: string;
  resultado: string;
  pdf_url: string;
  data_realizacao: string;
  laudo?: {
    especialidade?: string;
    medico?: string;
    crm?: string;
    laboratorio?: string;
    cnes?: string;
    conteudo: string;
  } | null;
}

interface Agendamento {
  id: string;
  descricao: string;
  especialidade: string;
  data: string;
  hora: string;
  local: string;
  medico: string;
  status: "Confirmado" | "Pendente" | "Cancelado";
}

interface Documento {
  id: string;
  titulo: string;
  tipo: string;
  data: string;
  tamanho: string;
}

export default function PortalUsuarioTRT() {
  const [servidor] = useState(SERVIDORES_TRT[0]);
  const [historico] = useState<HistoricoItem[]>(
    HISTORICO_SAUDE_TRT.filter((h) => h.matricula === servidor.matricula).map(h => ({...h}))
  );
  const [notificacoes] = useState(NOTIFICACOES_TRT.filter(n => n.matricula === servidor.matricula));
  
  const [itemSelecionado, setItemSelecionado] = useState<HistoricoItem | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  
  // Estados para modais funcionais
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);
  const [modalNovoAgendamentoAberto, setModalNovoAgendamentoAberto] = useState(false);
  const [modalNotificacoesAberto, setModalNotificacoesAberto] = useState(false);
  const [modalDocumentosAberto, setModalDocumentosAberto] = useState(false);
  
  // Estados para formulários
  const [novoAgendamento, setNovoAgendamento] = useState({
    tipo: "Consulta",
    especialidade: "",
    data: "",
    observacoes: "",
  });
  
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: "AGD-001",
      descricao: "Consulta Cardiológica de Retorno",
      especialidade: "Cardiologia",
      data: "2024-02-15",
      hora: "14:00",
      local: "Hospital Metropolitano - 3º Andar",
      medico: "Dr. Roberto Fernandes",
      status: "Confirmado",
    },
    {
      id: "AGD-002",
      descricao: "Check-up Laboratorial",
      especialidade: "Laboratorial",
      data: "2024-02-20",
      hora: "08:00",
      local: "Lab Einstein - Unidade Centro",
      medico: "Dra. Amanda Rocha",
      status: "Pendente",
    },
  ]);
  
  const [documentos, setDocumentos] = useState<Documento[]>([
    { id: "DOC-001", titulo: "Resultado Hemograma", tipo: "Exame", data: "2024-01-15", tamanho: "1.2 MB" },
    { id: "DOC-002", titulo: "Laudo ECG", tipo: "Exame", data: "2024-01-20", tamanho: "850 KB" },
    { id: "DOC-003", titulo: "Receituário Médico", tipo: "Receita", data: "2024-01-15", tamanho: "450 KB" },
  ]);

  const abrirModal = (item: HistoricoItem) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const solicitarAgendamento = () => {
    if (!novoAgendamento.especialidade || !novoAgendamento.data) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }
    
    const novo: Agendamento = {
      id: `AGD-${Date.now()}`,
      descricao: `${novoAgendamento.tipo} - ${novoAgendamento.especialidade}`,
      especialidade: novoAgendamento.especialidade,
      data: novoAgendamento.data,
      hora: "A definir",
      local: "A definir",
      medico: "A definir",
      status: "Pendente",
    };
    
    setAgendamentos([...agendamentos, novo]);
    setNovoAgendamento({ tipo: "Consulta", especialidade: "", data: "", observacoes: "" });
    setModalNovoAgendamentoAberto(false);
    alert("Agendamento solicitado com sucesso!");
  };

  const notificacoesNaoLidas = notificacoes.filter(n => !n.lida).length;

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
              <div>
                <h1 className="text-xl font-bold">Portal do Beneficiário</h1>
                <p className="text-sm opacity-90">TRT 8ª Região</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20 relative"
                onClick={() => setModalNotificacoesAberto(true)}
              >
                <Bell className="h-5 w-5" />
                {notificacoesNaoLidas > 0 && (
                  <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                    {notificacoesNaoLidas}
                  </span>
                )}
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div className="hidden md:block text-sm">
                  <p className="font-semibold">{servidor.nome}</p>
                  <p className="opacity-75">{servidor.matricula}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Carteirinha Virtual */}
          <Card
            className="lg:col-span-2 overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${CORES_TRT.primaria} 0%, ${CORES_TRT.terciaria} 100%)` }}
          >
            <CardContent className="p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-full">
                      <User className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{servidor.nome}</h2>
                      <p className="text-sm opacity-90">{servidor.cargo}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="opacity-75">Matrícula</p>
                      <p className="font-semibold text-lg">{servidor.matricula}</p>
                    </div>
                    <div>
                      <p className="opacity-75">CPF</p>
                      <p className="font-semibold">{servidor.cpf}</p>
                    </div>
                    <div>
                      <p className="opacity-75">Lotação</p>
                      <p className="font-semibold">{servidor.lotacao}</p>
                    </div>
                    <div>
                      <p className="opacity-75">Comarca</p>
                      <p className="font-semibold flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {servidor.comarca} - {servidor.estado}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 opacity-75" />
                        <span className="text-sm">{servidor.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 opacity-75" />
                        <span className="text-sm">{servidor.telefone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="hidden md:block text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <QrCode className="h-24 w-24" style={{ color: CORES_TRT.primaria }} />
                  </div>
                  <p className="text-xs mt-2 opacity-75">Carteirinha Digital</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações de Saúde */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2" style={{ color: CORES_TRT.primaria }}>
                <Droplet className="h-5 w-5" style={{ color: CORES_TRT.erro }} />
                Informações de Saúde
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Tipo Sanguíneo</span>
                <Badge
                  variant="secondary"
                  className="text-lg font-bold"
                  style={{ backgroundColor: `${CORES_TRT.erro}20`, color: CORES_TRT.erro }}
                >
                  {servidor.tipo_sanguineo}
                </Badge>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-2">Alergias</p>
                <div className="flex flex-wrap gap-2">
                  {servidor.alergias.map((alergia, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      style={{ borderColor: CORES_TRT.alerta, color: CORES_TRT.alerta }}
                    >
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {alergia}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-2">Comorbidades</p>
                <div className="flex flex-wrap gap-2">
                  {servidor.comorbidades.map((comorbidade, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {comorbidade}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abas Principais */}
        <Tabs defaultValue="historico" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger value="historico" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Histórico de Saúde
            </TabsTrigger>
            <TabsTrigger value="agendamentos" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Agendamentos
            </TabsTrigger>
            <TabsTrigger value="documentos" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="historico" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold" style={{ color: CORES_TRT.primaria }}>
                Histórico de Saúde por Categoria
              </h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  style={{ backgroundColor: CORES_TRT.secundaria, color: "white" }}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Exportar PDF
                </Button>
              </div>
            </div>

            {/* Categorias */}
            {["Consultas", "Exames", "Internações", "Cirurgias"].map((categoria) => {
              const itens = historico.filter((h) => h.categoria === categoria);
              return (
                <Card key={categoria} className="overflow-hidden">
                  <CardHeader
                    className="py-3"
                    style={{
                      backgroundColor:
                        categoria === "Consultas"
                          ? `${CORES_TRT.info}10`
                          : categoria === "Exames"
                          ? `${CORES_TRT.terciaria}10`
                          : categoria === "Internações"
                          ? `${CORES_TRT.destaque}10`
                          : `${CORES_TRT.erro}10`,
                    }}
                  >
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{categoria}</span>
                      <Badge variant="secondary">{itens.length} registros</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {itens.length === 0 ? (
                      <div className="p-4 text-center text-slate-500 text-sm">
                        Nenhum registro nesta categoria
                      </div>
                    ) : (
                      <div className="divide-y">
                        {itens.map((item) => (
                          <div key={item.id} className="p-4 hover:bg-slate-50">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-slate-900">{item.descricao}</h4>
                                  <Badge
                                    variant="outline"
                                    className="text-xs"
                                    style={{ borderColor: CORES_TRT.sucesso, color: CORES_TRT.sucesso }}
                                  >
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Concluído
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-600 mb-2">{item.resultado}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(item.data_realizacao).toLocaleDateString("pt-BR")}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    PDF disponível
                                  </span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" onClick={() => abrirModal(item)}>
                                <Eye className="h-4 w-4 mr-1" />
                                Visualizar
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="agendamentos" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle style={{ color: CORES_TRT.primaria }}>Meus Agendamentos</CardTitle>
                <Button 
                  size="sm" 
                  style={{ backgroundColor: CORES_TRT.primaria }}
                  onClick={() => setModalNovoAgendamentoAberto(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Agendamento
                </Button>
              </CardHeader>
              <CardContent>
                {agendamentos.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Você não possui agendamentos</p>
                    <Button 
                      className="mt-4" 
                      style={{ backgroundColor: CORES_TRT.primaria }}
                      onClick={() => setModalNovoAgendamentoAberto(true)}
                    >
                      Solicitar Agendamento
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {agendamentos.map((agendamento) => (
                      <div
                        key={agendamento.id}
                        className="p-4 border rounded-lg hover:bg-slate-50 cursor-pointer"
                        onClick={() => setModalAgendamentoAberto(true)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{agendamento.descricao}</h4>
                              <Badge
                                style={{
                                  backgroundColor:
                                    agendamento.status === "Confirmado"
                                      ? CORES_TRT.sucesso
                                      : agendamento.status === "Pendente"
                                      ? CORES_TRT.alerta
                                      : CORES_TRT.erro,
                                }}
                              >
                                {agendamento.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 flex items-center gap-1">
                              <Stethoscope className="h-3 w-3" />
                              {agendamento.medico}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(agendamento.data).toLocaleDateString("pt-BR")} às {agendamento.hora}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {agendamento.local}
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentos" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle style={{ color: CORES_TRT.primaria }}>Meus Documentos</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setModalDocumentosAberto(true)}
                >
                  <FileSearch className="h-4 w-4 mr-2" />
                  Ver Todos
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documentos.slice(0, 5).map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5" style={{ color: CORES_TRT.primaria }} />
                        <div>
                          <p className="font-medium text-sm">{doc.titulo}</p>
                          <p className="text-xs text-slate-500">
                            {doc.tipo} • {new Date(doc.data).toLocaleDateString("pt-BR")} • {doc.tamanho}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {documentos.length > 5 && (
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4"
                    onClick={() => setModalDocumentosAberto(true)}
                  >
                    Ver todos os {documentos.length} documentos
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_TRT.primaria }}>TRT 8ª Região - Portal do Servidor</p>
          <p>Em caso de dúvidas, entre em contato com o Núcleo de Saúde</p>
        </footer>
      </div>

      {/* Modal de Visualização do Laudo */}
      {modalAberto && itemSelecionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ backgroundColor: CORES_TRT.primaria }}
            >
              <div className="flex items-center gap-3">
                {itemSelecionado.categoria === "Consultas" ? (
                  <Stethoscope className="h-6 w-6 text-white" />
                ) : itemSelecionado.categoria === "Exames" ? (
                  <Microscope className="h-6 w-6 text-white" />
                ) : (
                  <FileText className="h-6 w-6 text-white" />
                )}
                <div>
                  <h3 className="text-lg font-bold text-white">{itemSelecionado.descricao}</h3>
                  <p className="text-sm text-white/80">
                    {itemSelecionado.categoria} • {new Date(itemSelecionado.data_realizacao).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={fecharModal} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {itemSelecionado.laudo ? (
                <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-3">Informações do Profissional/Instituição</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {itemSelecionado.laudo.medico && (
                        <div>
                          <span className="text-slate-500">Profissional:</span>
                          <p className="font-medium">{itemSelecionado.laudo.medico}</p>
                        </div>
                      )}
                      {itemSelecionado.laudo.crm && (
                        <div>
                          <span className="text-slate-500">Registro:</span>
                          <p className="font-medium">{itemSelecionado.laudo.crm}</p>
                        </div>
                      )}
                      {itemSelecionado.laudo.laboratorio && (
                        <div>
                          <span className="text-slate-500">Laboratório:</span>
                          <p className="font-medium">{itemSelecionado.laudo.laboratorio}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="px-4 py-3 border-b flex items-center gap-2" style={{ backgroundColor: `${CORES_TRT.primaria}10` }}>
                      <FileText className="h-4 w-4" style={{ color: CORES_TRT.primaria }} />
                      <span className="font-semibold" style={{ color: CORES_TRT.primaria }}>Laudo Técnico</span>
                    </div>
                    <div className="p-6 bg-white">
                      <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 leading-relaxed">
                        {itemSelecionado.laudo.conteudo}
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-800">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold">Laudo em processamento</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">Informações Disponíveis</h4>
                    <p className="text-slate-600">{itemSelecionado.resultado}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={fecharModal}>Fechar</Button>
              <div className="flex gap-2">
                <Button style={{ backgroundColor: CORES_TRT.primaria }} className="text-white">
                  <Printer className="h-4 w-4 mr-2" />Imprimir
                </Button>
                <Button style={{ backgroundColor: CORES_TRT.terciaria }} className="text-white">
                  <Download className="h-4 w-4 mr-2" />Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Agendamentos */}
      {modalAgendamentoAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: CORES_TRT.primaria }}>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-white" />
                <h3 className="text-lg font-bold text-white">Todos os Agendamentos</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setModalAgendamentoAberto(false)} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-4">
                {agendamentos.map((ag) => (
                  <div key={ag.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{ag.descricao}</h4>
                      <Badge
                        style={{
                          backgroundColor:
                            ag.status === "Confirmado"
                              ? CORES_TRT.sucesso
                              : ag.status === "Pendente"
                              ? CORES_TRT.alerta
                              : CORES_TRT.erro,
                        }}
                      >
                        {ag.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Data:</span>
                        <p>{new Date(ag.data).toLocaleDateString("pt-BR")} às {ag.hora}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Local:</span>
                        <p>{ag.local}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Médico:</span>
                        <p>{ag.medico}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Especialidade:</span>
                        <p>{ag.especialidade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={() => setModalAgendamentoAberto(false)}>Fechar</Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Novo Agendamento */}
      {modalNovoAgendamentoAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: CORES_TRT.primaria }}>
              <div className="flex items-center gap-3">
                <Plus className="h-6 w-6 text-white" />
                <h3 className="text-lg font-bold text-white">Solicitar Novo Agendamento</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setModalNovoAgendamentoAberto(false)} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Tipo</label>
                <select
                  className="w-full p-2 border rounded-lg mt-1"
                  value={novoAgendamento.tipo}
                  onChange={(e) => setNovoAgendamento({...novoAgendamento, tipo: e.target.value})}
                >
                  <option value="Consulta">Consulta</option>
                  <option value="Exame">Exame</option>
                  <option value="Procedimento">Procedimento</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Especialidade *</label>
                <Input
                  placeholder="Ex: Cardiologia, Ortopedia..."
                  value={novoAgendamento.especialidade}
                  onChange={(e) => setNovoAgendamento({...novoAgendamento, especialidade: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Data Preferencial *</label>
                <Input
                  type="date"
                  value={novoAgendamento.data}
                  onChange={(e) => setNovoAgendamento({...novoAgendamento, data: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Observações</label>
                <textarea
                  className="w-full p-2 border rounded-lg mt-1 text-sm"
                  rows={3}
                  placeholder="Informe sintomas, urgência ou preferências..."
                  value={novoAgendamento.observacoes}
                  onChange={(e) => setNovoAgendamento({...novoAgendamento, observacoes: e.target.value})}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={() => setModalNovoAgendamentoAberto(false)}>Cancelar</Button>
              <Button style={{ backgroundColor: CORES_TRT.sucesso }} onClick={solicitarAgendamento}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Solicitar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Notificações */}
      {modalNotificacoesAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: CORES_TRT.primaria }}>
              <div className="flex items-center gap-3">
                <Bell className="h-6 w-6 text-white" />
                <h3 className="text-lg font-bold text-white">Notificações</h3>
                {notificacoesNaoLidas > 0 && (
                  <Badge className="bg-red-500">{notificacoesNaoLidas} novas</Badge>
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={() => setModalNotificacoesAberto(false)} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-3">
                {notificacoes.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 border rounded-lg ${notif.lida ? "bg-slate-50" : "bg-blue-50 border-blue-200"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{notif.titulo}</h4>
                          {!notif.lida && <Badge className="bg-blue-500">Nova</Badge>}
                        </div>
                        <p className="text-sm text-slate-600">{notif.mensagem}</p>
                        <p className="text-xs text-slate-500 mt-2">
                          {new Date(notif.data).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      {notif.tipo === "agendamento" && <Calendar className="h-5 w-5 text-slate-400" />}
                      {notif.tipo === "resultado" && <FileText className="h-5 w-5 text-slate-400" />}
                      {notif.tipo === "autorizacao" && <CheckCircle className="h-5 w-5 text-slate-400" />}
                      {(notif as any).tipo === "internacao" && <HeartPulse className="h-5 w-5 text-slate-400" />}
                    </div>
                  </div>
                ))}
                {notificacoes.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <Bell className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhuma notificação</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={() => setModalNotificacoesAberto(false)}>Fechar</Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Documentos */}
      {modalDocumentosAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: CORES_TRT.primaria }}>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-white" />
                <h3 className="text-lg font-bold text-white">Todos os Documentos</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setModalDocumentosAberto(false)} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-3">
                {documentos.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6" style={{ color: CORES_TRT.primaria }} />
                      <div>
                        <p className="font-medium">{doc.titulo}</p>
                        <p className="text-xs text-slate-500">
                          {doc.tipo} • {new Date(doc.data).toLocaleDateString("pt-BR")} • {doc.tamanho}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />Visualizar
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end p-4 border-t bg-slate-50">
              <Button variant="outline" onClick={() => setModalDocumentosAberto(false)}>Fechar</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
