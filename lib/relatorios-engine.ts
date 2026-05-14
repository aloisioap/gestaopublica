// ============================================================
// SISTEMA DE RELATÓRIOS E DASHBOARDS - FUNSAU PM
// Métricas, KPIs e análises específicas para Polícia Militar
// ============================================================

import { 
  mockPacientesPM, 
  mockProtocolosPM, 
  mockAuditorias, 
  ProtocoloMedicoPM,
  PacientePM 
} from "./dados-mock";
import { AuditoriaEngine } from "./auditoria-engine";

// ============================================================
// TIPOS DE RELATÓRIOS
// ============================================================

export interface KPIFunsau {
  titulo: string;
  valor: string | number;
  tendencia: 'up' | 'down' | 'stable';
  variacao: number;
  icone: string;
  cor: string;
}

export interface RelatorioPatente {
  patente: string;
  quantidade: number;
  valor_total: number;
  glosa_media: number;
  tempo_medio_auditoria: number; // dias
  taxa_aprovacao: number; // %
}

export interface RelatorioUnidade {
  unidade: string;
  total_atendimentos: number;
  afastamentos_saude: number;
  aptos_servico: number;
  valor_processado: number;
}

export interface AnaliseCustoBeneficio {
  procedimento: string;
  quantidade: number;
  custo_total: number;
  resultado_clinico: 'excelente' | 'bom' | 'regular' | 'ruim';
  recomendacao: 'manter' | 'reduzir' | 'avaliar';
}

export interface AlertaFraudulenta {
  nivel: 'baixo' | 'medio' | 'alto' | 'critico';
  tipo: 'valor' | 'frequencia' | 'procedimento' | 'patente';
  descricao: string;
  paciente: string;
  protocolo: string;
  valor: number;
  acao_recomendada: string;
}

// ============================================================
// DASHBOARD PRINCIPAL - METAS DA PM
// ============================================================

export function getDashboardPrincipal(): KPIFunsau[] {
  const agora = new Date();
  const mesAtual = agora.getMonth();
  const anoAtual = agora.getFullYear();
  
  // Filtra protocolos do mês atual
  const protocolosMes = mockProtocolosPM.filter(p => {
    const data = new Date(p.data_solicitacao);
    return data.getMonth() === mesAtual && data.getFullYear() === anoAtual;
  });
  
  // Calcula métricas
  const totalAtendimentos = protocolosMes.length;
  const valorTotal = protocolosMes.reduce((sum, p) => sum + p.valor_total, 0);
  const glosas = mockAuditorias.filter(a => a.status === 'Glosa').length;
  const tempoMedio = 3.5; // dias
  
  // Policiais aptos vs afastados
  const policiaisAfastados = mockPacientesPM.filter(p => 
    p.historico_atendimentos.some(h => 
      (new Date(h.data)).getMonth() === mesAtual && !h.apto_para_servico
    )
  ).length;
  
  const policiaisAptos = mockPacientesPM.length - policiaisAfastados;
  
  return [
    {
      titulo: 'Atendimentos no Mês',
      valor: totalAtendimentos,
      tendencia: totalAtendimentos > 50 ? 'up' : 'down',
      variacao: Math.floor(Math.random() * 20) - 10,
      icone: 'Stethoscope',
      cor: 'emerald'
    },
    {
      titulo: 'Valor Processado',
      valor: `R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      tendencia: 'stable',
      variacao: 0,
      icone: 'DollarSign',
      cor: 'purple'
    },
    {
      titulo: 'Taxa de Glosa',
      valor: `${((glosas / totalAtendimentos) * 100).toFixed(1)}%`,
      tendencia: glosas > 5 ? 'up' : 'down',
      variacao: 12,
      icone: 'AlertTriangle',
      cor: 'rose'
    },
    {
      titulo: 'Tempo Médio Auditoria',
      valor: `${tempoMedio} dias`,
      tendencia: tempoMedio > 3 ? 'down' : 'up',
      variacao: -8,
      icone: 'Clock',
      cor: 'blue'
    },
    {
      titulo: 'Policiais Aptos',
      valor: `${policiaisAptos}/${mockPacientesPM.length}`,
      tendencia: 'stable',
      variacao: 0,
      icone: 'Shield',
      cor: 'emerald'
    },
    {
      titulo: 'Afastamentos Saúde',
      valor: policiaisAfastados,
      tendencia: policiaisAfastados > 2 ? 'up' : 'down',
      variacao: policiaisAfastados - 2,
      icone: 'UserX',
      cor: 'amber'
    }
  ];
}

// ============================================================
// RELATÓRIO POR PATENTE
// ============================================================

export function getRelatorioByPatente(): RelatorioPatente[] {
  const patentes = ['Soldado', 'Cabo', 'Sargento', 'Tenente', 'Capitão', 'Major', 'Coronel'];
  
  return patentes.map(patente => {
    const pacientes = mockPacientesPM.filter(p => p.patente === patente);
    const protocolos = mockProtocolosPM.filter(p => p.paciente.patente === patente);
    
    const valorTotal = protocolos.reduce((sum, p) => sum + p.valor_total, 0);
    const valorGlosa = protocolos.reduce((sum, p) => {
      const auditoria = mockAuditorias.find(a => a.protocolo === p.numero_protocolo);
      return sum + (auditoria?.glosa || 0);
    }, 0);
    
    const taxaAprovacao = protocolos.length > 0 
      ? (((valorTotal - valorGlosa) / valorTotal) * 100)
      : 100;
    
    return {
      patente,
      quantidade: pacientes.length,
      valor_total: valorTotal,
      glosa_media: protocolos.length > 0 ? valorGlosa / protocolos.length : 0,
      tempo_medio_auditoria: Math.floor(Math.random() * 7) + 1, // 1-7 dias
      taxa_aprovacao: taxaAprovacao
    };
  }).filter(r => r.quantidade > 0); // Remove patentes sem dados
}

// ============================================================
// RELATÓRIO POR UNIDADE/BAIRRO
// ============================================================

export function getRelatorioByUnidade(): RelatorioUnidade[] {
  const unidades = [
    '1º Batalhão - Centro',
    '3º Batalhão - Zona Sul',
    'ROTA',
    'Ambiental',
    'CPO'
  ];
  
  return unidades.map(unidade => {
    const pacientes = mockPacientesPM.filter(p => 
      p.unidade.toLowerCase().includes(unidade.toLowerCase()) ||
      (unidade === 'ROTA' && p.unidade.includes('ROTA')) ||
      (unidade === 'CPO' && p.unidade.includes('Comando de Operações Especiais'))
    );
    
    const protocolos = mockProtocolosPM.filter(p => 
      pacientes.some(pac => pac.id === p.paciente.id)
    );
    
    const valorProcessado = protocolos.reduce((sum, p) => sum + p.valor_total, 0);
    
    const afastados = pacientes.filter(p => 
      p.historico_atendimentos.some(h => !h.apto_para_servico)
    ).length;
    
    return {
      unidade,
      total_atendimentos: pacientes.length,
      afastamentos_saude: afastados,
      aptos_servico: pacientes.length - afastados,
      valor_processado: valorProcessado
    };
  });
}

// ============================================================
// DETECÇÃO DE FRAUDES E ANOMALIAS
// ============================================================

export function detectarFraude(): AlertaFraudulenta[] {
  const alertas: AlertaFraudulenta[] = [];
  
  // 1. Valores muito altos para patente baixa
  mockProtocolosPM.forEach(prot => {
    const patente = prot.paciente.patente;
    const valor = prot.valor_total;
    
    // Sargento ou inferior com procedimento > R$ 10.000
    if (['Sargento', 'Cabo', 'Soldado'].includes(patente) && valor > 10000) {
      alertas.push({
        nivel: 'alto',
        tipo: 'valor',
        descricao: `Valor elevado para patente ${patente}`,
        paciente: prot.paciente.nome,
        protocolo: prot.numero_protocolo,
        valor: valor,
        acao_recomendada: 'Auditoria manual obrigatória'
      });
    }
  });
  
  // 2. Frequência suspeita (múltiplos atendimentos no mesmo dia)
  const atendimentosPorDia = new Map<string, number>();
  mockProtocolosPM.forEach(prot => {
    const data = prot.data_solicitacao;
    const key = `${prot.paciente.id}-${data}`;
    atendimentosPorDia.set(key, (atendimentosPorDia.get(key) || 0) + 1);
  });
  
  atendimentosPorDia.forEach((count, key) => {
    if (count >= 3) {
      const [pacienteId] = key.split('-');
      const paciente = mockPacientesPM.find(p => p.id === pacienteId);
      if (paciente) {
        alertas.push({
          nivel: 'critico',
          tipo: 'frequencia',
          descricao: `${count} atendimentos no mesmo dia`,
          paciente: paciente.nome,
          protocolo: 'Múltiplos protocolos',
          valor: 0,
          acao_recomendada: 'Investigar possível fraude'
        });
      }
    }
  });
  
  // 3. Inconsistência entre CID e procedimento
  mockProtocolosPM.forEach(prot => {
    // CID de diabetes mas procedimento de ortopedia
    if (prot.cid.startsWith('E11') && prot.especialidade === 'Ortopedia') {
      alertas.push({
        nivel: 'medio',
        tipo: 'procedimento',
        descricao: 'Inconsistência entre CID e especialidade',
        paciente: prot.paciente.nome,
        protocolo: prot.numero_protocolo,
        valor: prot.valor_total,
        acao_recomendada: 'Verificar justificativa clínica'
      });
    }
  });
  
  return alertas;
}

// ============================================================
// ANALISE DE CUSTO-BENEFÍCIO
// ============================================================

export function analisarCustoBeneficio(): AnaliseCustoBeneficio[] {
  const procedimentos = new Map<string, {
    quantidade: number;
    custo_total: number;
    resultados: string[];
  }>();
  
  // Agrupa por tipo de procedimento
  mockProtocolosPM.forEach(prot => {
    const key = prot.tipo_atendimento;
    const existente = procedimentos.get(key) || { quantidade: 0, custo_total: 0, resultados: [] };
    
    existente.quantidade++;
    existente.custo_total += prot.valor_total;
    existente.resultados.push(prot.status);
    
    procedimentos.set(key, existente);
  });
  
  // Calcula resultado clínico baseado nos status
  return Array.from(procedimentos.entries()).map(([procedimento, dados]) => {
    const taxaSucesso = (dados.resultados.filter(r => r === 'Finalizado' || r === 'Liberado').length / dados.quantidade) * 100;
    
    let resultado_clinico: AnaliseCustoBeneficio['resultado_clinico'];
    if (taxaSucesso >= 90) resultado_clinico = 'excelente';
    else if (taxaSucesso >= 70) resultado_clinico = 'bom';
    else if (taxaSucesso >= 50) resultado_clinico = 'regular';
    else resultado_clinico = 'ruim';
    
    let recomendacao: AnaliseCustoBeneficio['recomendacao'];
    const custoMedio = dados.custo_total / dados.quantidade;
    
    if (resultado_clinico === 'excelente' && custoMedio < 500) {
      recomendacao = 'manter';
    } else if (resultado_clinico === 'ruim' || custoMedio > 5000) {
      recomendacao = 'reduzir';
    } else {
      recomendacao = 'avaliar';
    }
    
    return {
      procedimento,
      quantidade: dados.quantidade,
      custo_total: dados.custo_total,
      resultado_clinico,
      recomendacao
    };
  });
}

// ============================================================
// EXPORT DA ENGINE
// ============================================================

export const RelatoriosEngine = {
  getDashboardPrincipal,
  getRelatorioByPatente,
  getRelatorioByUnidade,
  detectarFraude,
  analisarCustoBeneficio
};

export default RelatoriosEngine;
