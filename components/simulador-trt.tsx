"use client";

import { useState } from "react";
import {
  Play,
  Clock,
  CheckCircle,
  AlertCircle,
  QrCode,
  Smartphone,
  Building2,
  FileText,
  ClipboardCheck,
  DollarSign,
  RefreshCw,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CORES_TRT,
  SERVIDORES_TRT,
  CREDENCIADOS_TRT,
  FLUXO_STATUS_TRT,
} from "@/lib/dados-trt-8a-regiao";

interface PassoSimulacao {
  id: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  status: "pendente" | "processando" | "concluido" | "erro" | "aviso";
  detalhes?: string;
  tempo_estimado?: string;
}

type ServidorTipo = {
  id: string;
  matricula: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cargo: string;
  lotacao: string;
  vara?: string;
  comarca: string;
  estado: string;
  tipo_sanguineo: string;
  alergias: string[];
  comorbidades: string[];
  carteirinha_saude: string;
  qr_code: string;
  foto_url?: string;
  ativo: boolean;
};

type CredenciadoTipo = {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  tipo_prestador: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;
  responsavel_tecnico: string;
  data_credenciamento: string;
  status: string;
  especialidades: string[];
  avaliacao: number;
};

export function SimuladorProtocoloTRT() {
  const [simulando, setSimulando] = useState(false);
  const [passos, setPassos] = useState<PassoSimulacao[]>([]);
  const [progresso, setProgresso] = useState(0);
  const [resultado, setResultado] = useState<"" | "aprovado" | "glosado" | "suspeito">("");
  const [dadosSimulacao, setDadosSimulacao] = useState<{
    servidor?: ServidorTipo;
    credenciado?: CredenciadoTipo;
    procedimento?: string;
  }>({});

  const iniciarSimulacao = async () => {
    setSimulando(true);
    setProgresso(0);
    setResultado("");

    // Seleciona dados aleatórios
    const servidor = JSON.parse(JSON.stringify(SERVIDORES_TRT[Math.floor(Math.random() * SERVIDORES_TRT.length)])) as ServidorTipo;
    const credenciado = JSON.parse(JSON.stringify(CREDENCIADOS_TRT[Math.floor(Math.random() * CREDENCIADOS_TRT.length)])) as CredenciadoTipo;
    const tiposProcedimento = ["Consulta", "Exame", "Internação", "Cirurgia"];
    const procedimento = tiposProcedimento[Math.floor(Math.random() * tiposProcedimento.length)];

    setDadosSimulacao({ servidor, credenciado, procedimento });

    // Define passos do fluxo TRT
    const passosSimulacao: PassoSimulacao[] = [
      {
        id: 1,
        titulo: "Solicitação do Servidor",
        descricao: "Servidor solicita procedimento via portal",
        icone: <Clock className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "1 min",
      },
      {
        id: 2,
        titulo: "Validação QR Code / WhatsApp",
        descricao: "Validação da carteirinha antes da execução",
        icone: <QrCode className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "30 seg",
      },
      {
        id: 3,
        titulo: "Execução do Procedimento",
        descricao: `Procedimento realizado no credenciado`,
        icone: <Building2 className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "30-90 min",
      },
      {
        id: 4,
        titulo: "Faturamento pelo Credenciado",
        descricao: "Inserção de XML TISS e PDF no sistema",
        icone: <FileText className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "10 min",
      },
      {
        id: 5,
        titulo: "Auditoria TIS",
        descricao: "Análise conforme checklist TRT",
        icone: <ClipboardCheck className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "15 min",
      },
      {
        id: 6,
        titulo: "Pagamento",
        descricao: "Liberação do pagamento ao credenciado",
        icone: <DollarSign className="h-5 w-5" />,
        status: "pendente",
        tempo_estimado: "5 min",
      },
    ];

    setPassos(passosSimulacao);

    // Executa simulação passo a passo
    let houveGlosa = false;
    for (let i = 0; i < passosSimulacao.length; i++) {
      setPassos((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: "processando" } : p)));
      setProgresso(((i + 1) / passosSimulacao.length) * 100);

      await new Promise((resolve) => setTimeout(resolve, 1200 + Math.random() * 800));

      let status: PassoSimulacao["status"] = "concluido";
      let detalhes = "";

      switch (i) {
        case 0:
          detalhes = `Servidor ${servidor.nome} solicitou ${procedimento.toLowerCase()}`;
          break;
        case 1:
          const tipoValidacao = Math.random() > 0.5 ? "QR Code" : "WhatsApp";
          detalhes = `Validação via ${tipoValidacao} confirmada`;
          break;
        case 2:
          detalhes = `Procedimento realizado em ${credenciado.nome_fantasia}`;
          break;
        case 3:
          detalhes = `XML TISS e PDF enviados (${procedimento})`;
          break;
        case 4:
          const resultadoAuditoria = Math.random();
          if (resultadoAuditoria > 0.85) {
            status = "aviso";
            houveGlosa = true;
            detalhes = "Glosa parcial aplicada (15%)";
          } else {
            detalhes = "Documentação aprovada";
          }
          break;
        case 5:
          detalhes = houveGlosa ? "Pagamento com retenção" : "Pagamento integral liberado";
          if (!houveGlosa) {
            setResultado("aprovado");
          } else {
            setResultado("glosado");
          }
          break;
      }

      setPassos((prev) => prev.map((p, idx) => (idx === i ? { ...p, status, detalhes } : p)));
    }

    setSimulando(false);
    setProgresso(100);
  };

  const resetSimulacao = () => {
    setSimulando(false);
    setPassos([]);
    setProgresso(0);
    setResultado("");
    setDadosSimulacao({});
  };

  const getStatusIcon = (status: PassoSimulacao["status"]) => {
    switch (status) {
      case "concluido":
        return <CheckCircle className="h-5 w-5" style={{ color: CORES_TRT.sucesso }} />;
      case "processando":
        return <Loader2 className="h-5 w-5 animate-spin" style={{ color: CORES_TRT.info }} />;
      case "aviso":
        return <AlertCircle className="h-5 w-5" style={{ color: CORES_TRT.alerta }} />;
      case "erro":
        return <AlertCircle className="h-5 w-5" style={{ color: CORES_TRT.erro }} />;
      default:
        return <Clock className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusBadge = () => {
    if (resultado === "aprovado") {
      return (
        <Badge
          className="text-white px-4 py-2 text-base"
          style={{ backgroundColor: CORES_TRT.sucesso }}
        >
          ✅ PROCESSO APROVADO
        </Badge>
      );
    } else if (resultado === "glosado") {
      return (
        <Badge
          className="text-white px-4 py-2 text-base"
          style={{ backgroundColor: CORES_TRT.alerta }}
        >
          ⚠️ GLOSA PARCIAL
        </Badge>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Botão Iniciar */}
      {!simulando && passos.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={iniciarSimulacao}
            size="lg"
            className="text-white px-8 py-6 text-lg font-semibold shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${CORES_TRT.primaria} 0%, ${CORES_TRT.secundaria} 100%)`,
            }}
          >
            <Play className="h-5 w-5 mr-2" />
            Iniciar Simulação do Processo
          </Button>
          <p className="text-sm text-slate-500">
            Simule o fluxo completo: Validação → Execução → Faturamento → Auditoria → Pagamento
          </p>
        </div>
      )}

      {/* Progresso */}
      {simulando && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Progresso do Processo</span>
            <span className="text-sm text-slate-500">{Math.round(progresso)}%</span>
          </div>
          <Progress value={progresso} className="h-2" />
        </div>
      )}

      {/* Dados da Simulação */}
      {dadosSimulacao.servidor && (
        <Card className="mb-6" style={{ backgroundColor: `${CORES_TRT.primaria}08` }}>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-slate-500">Servidor</p>
                <p className="font-semibold text-sm">{dadosSimulacao.servidor.nome}</p>
                <p className="text-xs text-slate-600">Matrícula: {dadosSimulacao.servidor.matricula}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Credenciado</p>
                <p className="font-semibold text-sm">{dadosSimulacao.credenciado?.nome_fantasia}</p>
                <p className="text-xs text-slate-600">{dadosSimulacao.credenciado?.cidade}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Procedimento</p>
                <p className="font-semibold text-sm">{dadosSimulacao.procedimento}</p>
                <p className="text-xs text-slate-600">
                  Valor estimado: R${" "}
                  {dadosSimulacao.procedimento === "Consulta"
                    ? "320,00"
                    : dadosSimulacao.procedimento === "Exame"
                    ? "450,00"
                    : dadosSimulacao.procedimento === "Internação"
                    ? "8.500,00"
                    : "12.500,00"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Passos */}
      {passos.length > 0 && (
        <div className="space-y-3 mb-6">
          {passos.map((passo) => (
            <Card
              key={passo.id}
              className={`border-l-4 ${
                passo.status === "concluido"
                  ? "bg-emerald-50"
                  : passo.status === "processando"
                  ? "bg-blue-50"
                  : passo.status === "aviso"
                  ? "bg-amber-50"
                  : "bg-slate-50"
              }`}
              style={{
                borderLeftColor:
                  passo.status === "concluido"
                    ? CORES_TRT.sucesso
                    : passo.status === "processando"
                    ? CORES_TRT.info
                    : passo.status === "aviso"
                    ? CORES_TRT.alerta
                    : "#94a3b8",
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      passo.status === "concluido"
                        ? "bg-emerald-100"
                        : passo.status === "processando"
                        ? "bg-blue-100"
                        : passo.status === "aviso"
                        ? "bg-amber-100"
                        : "bg-slate-100"
                    }`}
                  >
                    {passo.icone}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">
                        {passo.id}. {passo.titulo}
                      </h3>
                      <div className="flex items-center gap-2">
                        {passo.tempo_estimado && (
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {passo.tempo_estimado}
                          </span>
                        )}
                        {getStatusIcon(passo.status)}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{passo.descricao}</p>
                    {passo.detalhes && (
                      <p className="text-xs text-slate-500 mt-1 bg-white/50 p-2 rounded">
                        {passo.detalhes}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Resultado Final */}
      {!simulando && resultado && (
        <Card
          className="border-2"
          style={{
            borderColor: resultado === "aprovado" ? CORES_TRT.sucesso : CORES_TRT.alerta,
            backgroundColor:
              resultado === "aprovado"
                ? `${CORES_TRT.sucesso}10`
                : `${CORES_TRT.alerta}10`,
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900">Resultado da Simulação</h3>
              {getStatusBadge()}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold" style={{ color: CORES_TRT.sucesso }}>
                  {passos.filter((p) => p.status === "concluido").length}
                </div>
                <div className="text-xs text-slate-600">Passos Concluídos</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold" style={{ color: CORES_TRT.alerta }}>
                  {passos.filter((p) => p.status === "aviso").length}
                </div>
                <div className="text-xs text-slate-600">Alertas</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold" style={{ color: CORES_TRT.info }}>
                  {Math.round(progresso)}%
                </div>
                <div className="text-xs text-slate-600">Progresso</div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={iniciarSimulacao}
                variant="outline"
                className="flex-1"
                style={{ borderColor: CORES_TRT.primaria, color: CORES_TRT.primaria }}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Simular Novamente
              </Button>
              <Button onClick={resetSimulacao} variant="ghost" className="flex-1">
                Fechar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
