"use client";

import { useState, useEffect } from "react";
import { 
  Play, Clock, CheckCircle, AlertCircle, Shield, QrCode, 
  FileText, DollarSign, RefreshCw, Loader2, Hospital, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockPacientesPM, PATENTES_PM } from "@/lib/dados-mock";
import { AuditoriaEngine } from "@/lib/auditoria-engine";
import { ValidacaoQREngine } from "@/lib/validacao-qr";

interface PassoSimulacao {
  id: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
  status: 'pendente' | 'processando' | 'concluido' | 'erro' | 'aviso';
  detalhes?: string;
  tempo_estimado?: string;
}

interface ProtocoloSimulado {
  numero: string;
  paciente: typeof mockPacientesPM[0];
  tipo: string;
  especialidade: string;
  valor: number;
  data: string;
}

export function SimuladorProtocolo() {
  const [simulando, setSimulando] = useState(false);
  const [passos, setPassos] = useState<PassoSimulacao[]>([]);
  const [protocolo, setProtocolo] = useState<ProtocoloSimulado | null>(null);
  const [progresso, setProgresso] = useState(0);
  const [resultado, setResultado] = useState<'' | 'aprovado' | 'glosado' | 'suspeito'>('');

  const iniciarSimulacao = async () => {
    setSimulando(true);
    setProgresso(0);
    setResultado('');
    
    // Seleciona paciente aleatório
    const paciente = mockPacientesPM[Math.floor(Math.random() * mockPacientesPM.length)];
    
    // Gera protocolo
    const novoProtocolo: ProtocoloSimulado = {
      numero: `PMSP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`,
      paciente,
      tipo: ['Consulta', 'Exame', 'Cirurgia', 'Procedimento'][Math.floor(Math.random() * 4)],
      especialidade: ['Cardiologia', 'Ortopedia', 'Pneumologia', 'Endocrinologia', 'Traumatologia'][Math.floor(Math.random() * 5)],
      valor: Math.floor(Math.random() * 15000) + 500,
      data: new Date().toLocaleDateString('pt-BR')
    };
    
    setProtocolo(novoProtocolo);

    // Define passos do fluxo
    const passosSimulacao: PassoSimulacao[] = [
      {
        id: 1,
        titulo: "Triagem Inicial",
        descricao: "Cadastro do policial e abertura de protocolo",
        icone: <Shield className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "2 min"
      },
      {
        id: 2,
        titulo: "Auditoria Prévia",
        descricao: "Análise automatizada por regras do sistema",
        icone: <AlertCircle className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "5 min"
      },
      {
        id: 3,
        titulo: "Validação Biométrica",
        descricao: "QR Code e validação do paciente",
        icone: <QrCode className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "1 min"
      },
      {
        id: 4,
        titulo: "Execução do Procedimento",
        descricao: "Realização da consulta/exame/cirurgia",
        icone: <Hospital className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "30-60 min"
      },
      {
        id: 5,
        titulo: "Documentação",
        descricao: "Upload de documentos e laudos",
        icone: <FileText className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "10 min"
      },
      {
        id: 6,
        titulo: "Auditoria Final",
        descricao: "Revisão completa e aplicação de regras",
        icone: <CheckCircle className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "15 min"
      },
      {
        id: 7,
        titulo: "Financeiro",
        descricao: "Cálculo de glosas e aprovação de pagamento",
        icone: <DollarSign className="h-5 w-5" />,
        status: 'pendente',
        tempo_estimado: "5 min"
      }
    ];
    
    setPassos(passosSimulacao);

    // Executa simulação passo a passo
    for (let i = 0; i < passosSimulacao.length; i++) {
      // Atualiza status para processando
      setPassos(prev => prev.map((p, idx) => 
        idx === i ? { ...p, status: 'processando' } : p
      ));
      
      setProgresso(((i + 1) / passosSimulacao.length) * 100);
      
      // Simula processamento
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      // Atualiza status baseado na etapa
      let status: PassoSimulacao['status'] = 'concluido';
      let detalhes = '';
      
      switch (i) {
        case 0: // Triagem
          detalhes = `Paciente ${paciente.nome} (${paciente.patente}) cadastrado com sucesso`;
          break;
          
        case 1: // Auditoria Prévia
          // Simula auditoria
          const auditoria = AuditoriaEngine.executarAuditoriaPrevia({
            ...novoProtocolo,
            paciente,
            data_solicitacao: new Date().toISOString(),
            numero_protocolo: novoProtocolo.numero,
            procedimentos: [{
              codigo: '10101012',
              descricao: 'Procedimento simulado',
              quantidade: 1,
              valor: novoProtocolo.valor,
              valor_total: novoProtocolo.valor
            }],
            status: 'Triagem',
            prioridade: 'Normal',
            medico_solicitante: 'Dr. Simulação',
            crm: '12345-SP',
            unidade_solicitante: 'Hospital Militar',
            observacoes: ''
          } as any);
          
          if (auditoria.glosa > 0) {
            status = 'aviso';
            detalhes = `Auditado com ${((auditoria.glosa / novoProtocolo.valor) * 100).toFixed(0)}% de glosa`;
          } else {
            detalhes = 'Aprovado sem glosas';
          }
          break;
          
        case 2: // Validação QR
          const validacao = await ValidacaoQREngine.validarQRPaciente({
            paciente_id: paciente.id,
            matricula_pm: paciente.matricula,
            patente: paciente.patente,
            nome: paciente.nome,
            tipo_sanguineo: paciente.tipo_sanguineo,
            alergias: paciente.alergias,
            qr_code_hash: ValidacaoQREngine.gerarHashQRPaciente(paciente.matricula, paciente.created_at),
            data_validade_qr: new Date(Date.now() + ValidacaoQREngine.TEMPO_EXPIRACAO_QR).toISOString()
          }, {
            user_agent: 'simulador',
            ip: '192.168.1.1',
            tipo: 'desktop'
          }, false);
          
          status = validacao.proxima_acao === 'liberar' ? 'concluido' : 'aviso';
          detalhes = validacao.proxima_acao === 'liberar' 
            ? 'Validação biométrica aprovada' 
            : 'Requer verificação adicional';
          break;
          
        case 3: // Execução
          detalhes = `${novoProtocolo.tipo} realizado com sucesso`;
          break;
          
        case 4: // Documentos
          detalhes = 'XML TISS e laudos anexados ao protocolo';
          break;
          
        case 5: // Auditoria Final
          status = Math.random() > 0.3 ? 'concluido' : 'aviso';
          detalhes = status === 'concluido' 
            ? 'Protocolo aprovado para pagamento'
            : 'Aceite parcial com glosas';
          break;
          
        case 6: // Financeiro
          const glosaFinal = Math.random() > 0.7 ? novoProtocolo.valor * 0.15 : 0;
          const statusFinanceiro = glosaFinal > 0 ? 'aviso' : 'concluido';
          
          detalhes = statusFinanceiro === 'concluido'
            ? `Valor total aprovado: R$ ${novoProtocolo.valor.toLocaleString('pt-BR')}`
            : `Valor glosado: R$ ${glosaFinal.toLocaleString('pt-BR')} (15%)`;
          
          // Define resultado final
          if (statusFinanceiro === 'concluido') {
            setResultado('aprovado');
            detalhes += ' ✅ APROVADO';
          } else {
            setResultado('glosado');
            detalhes += ' ⚠️ GLOSADO';
          }
          break;
      }
      
      setPassos(prev => prev.map((p, idx) => 
        idx === i ? { ...p, status, detalhes } : p
      ));
    }
    
    setSimulando(false);
    setProgresso(100);
  };

  const resetSimulacao = () => {
    setSimulando(false);
    setPassos([]);
    setProtocolo(null);
    setProgresso(0);
    setResultado('');
  };

  const getStatusIcon = (status: PassoSimulacao['status']) => {
    switch (status) {
      case 'concluido':
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case 'processando':
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'aviso':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'erro':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (resultado: string) => {
    switch (resultado) {
      case 'aprovado':
        return <Badge className="bg-emerald-100 text-emerald-700">✅ APROVADO</Badge>;
      case 'glosado':
        return <Badge className="bg-amber-100 text-amber-700">⚠️ GLOSA PARCIAL</Badge>;
      case 'suspeito':
        return <Badge className="bg-red-100 text-red-700">🚨 FRAUDE DETECTADA</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Botão de Iniciar Simulação */}
      {!simulando && passos.length === 0 && (
        <Button 
          onClick={iniciarSimulacao}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-6 rounded-xl"
        >
          <Play className="h-5 w-5 mr-2" />
          Simular Protocolo Completo - Passo a Passo
          <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
            Modo Demo
          </span>
        </Button>
      )}

      {/* Progresso e Passos */}
      {simulando && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Progresso</span>
            <span className="text-sm text-slate-500">{Math.round(progresso)}%</span>
          </div>
          <Progress value={progresso} className="h-2" />
        </div>
      )}

      {/* Protocolo Info */}
      {protocolo && (
        <Card className="mb-6 border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">Protocolo</p>
                <p className="font-bold text-slate-900 text-lg">{protocolo.numero}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Data</p>
                <p className="font-medium">{protocolo.data}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Paciente</p>
                <p className="font-medium">{protocolo.paciente.nome}</p>
                <Badge className={`text-xs mt-1 ${PATENTES_PM.find(p => p.nome === protocolo.paciente.patente)?.cor || 'bg-gray-100'}`}>
                  {protocolo.paciente.patente}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-slate-500">Procedimento</p>
                <p className="font-medium">{protocolo.tipo} - {protocolo.especialidade}</p>
                <p className="text-xs text-slate-600">Valor: R$ {protocolo.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cards dos Passos */}
      {passos.length > 0 && (
        <div className="space-y-4 mb-6">
          {passos.map((passo) => (
            <Card key={passo.id} className={`border-l-4 ${
              passo.status === 'concluido' ? 'border-emerald-500 bg-emerald-50/30' :
              passo.status === 'processando' ? 'border-blue-500 bg-blue-50/30' :
              passo.status === 'aviso' ? 'border-amber-500 bg-amber-50/30' :
              passo.status === 'erro' ? 'border-red-500 bg-red-50/30' :
              'border-slate-300 bg-slate-50/30'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    passo.status === 'concluido' ? 'bg-emerald-100' :
                    passo.status === 'processando' ? 'bg-blue-100' :
                    passo.status === 'aviso' ? 'bg-amber-100' :
                    passo.status === 'erro' ? 'bg-red-100' :
                    'bg-slate-100'
                  }`}>
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
                            <Clock className="h-3 w-3 inline mr-1" />
                            {passo.tempo_estimado}
                          </span>
                        )}
                        {getStatusIcon(passo.status)}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{passo.descricao}</p>
                    {passo.detalhes && (
                      <p className="text-xs text-slate-500 mt-2 bg-white/50 p-2 rounded">
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
      {!simulando && protocolo && (
        <Card className="border-2 border-emerald-300 bg-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900">Resultado da Simulação</h3>
              {getStatusBadge(resultado)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-slate-900">
                  {passos.filter(p => p.status === 'concluido').length}
                </div>
                <div className="text-xs text-slate-600">Passos Concluídos</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-amber-600">
                  {passos.filter(p => p.status === 'aviso').length}
                </div>
                <div className="text-xs text-slate-600">Alertas</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">
                  {Math.round(progresso)}%
                </div>
                <div className="text-xs text-slate-600">Progresso Total</div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={iniciarSimulacao}
                variant="outline"
                className="flex-1"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Simular Novamente
              </Button>
              <Button 
                onClick={resetSimulacao}
                variant="ghost"
                className="flex-1"
              >
                Fechar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
