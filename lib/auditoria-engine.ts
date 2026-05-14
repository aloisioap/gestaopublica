// ============================================================
// MOTOR DE AUDITORIA INTELIGENTE - FUNSAU PM
// Regras de negócio para auditoria médica automatizada
// ============================================================

import { ProtocoloMedicoPM, mockMedicos } from "./dados-mock";

export interface RegraAuditoria {
  id: string;
  categoria: 'frequencia' | 'valor' | 'procedimento' | 'idade' | 'patente' | 'urgencia';
  descricao: string;
  severidade: 'baixa' | 'media' | 'alta' | 'critica';
  condicao: (protocolo: ProtocoloMedicoPM) => boolean;
  mensagem: string;
  perc_glosa?: number;
  requer_aprovacao_manual?: boolean;
}

// Tabela Brasíndice simulada (exemplo com procedimentos comuns)
export const TABELA_BRASINDICE: Record<string, { descricao: string; valor: number; variacao: number }> = {
  '10101012': { descricao: 'Consulta endocrinologia', valor: 280.00, variacao: 15 },
  '10201015': { descricao: 'Consulta cardiologia', valor: 320.00, variacao: 15 },
  '10301020': { descricao: 'Consulta ortopedia', valor: 350.00, variacao: 15 },
  '10401025': { descricao: 'Consulta pneumologia', valor: 300.00, variacao: 15 },
  '20102015': { descricao: 'HbA1c', valor: 85.00, variacao: 25 },
  '20103020': { descricao: 'Perfil lipídico', valor: 120.00, variacao: 20 },
  '20104025': { descricao: 'Espirometria completa', valor: 250.00, variacao: 30 },
  '20105030': { descricao: 'Teste de reversibilidade broncodilatadora', valor: 180.00, variacao: 25 },
  '30101040': { descricao: 'Artrodese lombar L4-L5', valor: 12500.00, variacao: 10 },
  '30105080': { descricao: 'Osteossíntese de tíbia', valor: 8500.00, variacao: 12 },
};

// REGRAS DE AUDITORIA INTELIGENTE
export const REGRAS_AUDITORIA: RegraAuditoria[] = [
  // REGRAS DE FREQUÊNCIA
  {
    id: 'freq-001',
    categoria: 'frequencia',
    descricao: 'Limite de consultas por mês (PM ativo)',
    severidade: 'media',
    condicao: (p) => {
      // Simula histórico: se protocolo é consulta e paciente já teve 4+ consultas no mês
      const consultasMes = Math.floor(Math.random() * 8);
      return p.tipo_atendimento === 'Consulta' && consultasMes > 4;
    },
    mensagem: 'Paciente excedeu limite mensal de consultas. Verificar necessidade clínica.',
    perc_glosa: 30,
    requer_aprovacao_manual: true
  },
  
  {
    id: 'freq-002',
    categoria: 'frequencia',
    descricao: 'Exames repetidos em curto período',
    severidade: 'alta',
    condicao: (p) => {
      const diasDesdeUltimoExame = Math.floor(Math.random() * 60);
      return p.tipo_atendimento === 'Exame' && diasDesdeUltimoExame < 30;
    },
    mensagem: 'Exame repetido em intervalo menor que 30 dias. Exigir justificativa médica.',
    perc_glosa: 100,
    requer_aprovacao_manual: true
  },

  // REGRAS DE VALOR (BRASINDICE)
  {
    id: 'val-001',
    categoria: 'valor',
    descricao: 'Valor acima da tabela Brasíndice',
    severidade: 'critica',
    condicao: (p) => {
      return p.procedimentos.some(proc => {
        const tabela = TABELA_BRASINDICE[proc.codigo];
        if (!tabela) return false;
        
        // Calcula limite máximo (valor + variação %) + 50% de tolerância
        const limiteMax = tabela.valor * (1 + (tabela.variacao / 100)) * 1.5;
        return proc.valor > limiteMax;
      });
    },
    mensagem: 'Valor ultrapassou limite máximo do Brasíndice com tolerância. Glosa automática.',
    perc_glosa: 100,
    requer_aprovacao_manual: false
  },

  {
    id: 'val-002',
    categoria: 'valor',
    descricao: 'Valor abaixo do mínimo suspeito',
    severidade: 'alta',
    condicao: (p) => {
      return p.procedimentos.some(proc => {
        const tabela = TABELA_BRASINDICE[proc.codigo];
        if (!tabela) return false;
        
        const limiteMin = tabela.valor * 0.5; // 50% abaixo da tabela
        return proc.valor < limiteMin;
      });
    },
    mensagem: 'Valor significativamente abaixo da tabela. Possível fraude ou erro de digitação.',
    perc_glosa: 0,
    requer_aprovacao_manual: true
  },

  // REGRAS POR PATENTE
  {
    id: 'pat-001',
    categoria: 'patente',
    descricao: 'Procedimento não autorizado para graduação',
    severidade: 'alta',
    condicao: (p) => {
      // Coronel e Tenente Coronel têm acesso a procedimentos especiais
      const patentesEspeciais = ['Coronel', 'Tenente-Coronel', 'Major'];
      if (patentesEspeciais.includes(p.paciente.patente)) return false;
      
      // Simula procedimento especial apenas para oficiais superiores
      const procedimentosEspeciais = ['30101040']; // Artrodese
      return p.procedimentos.some(proc => procedimentosEspeciais.includes(proc.codigo));
    },
    mensagem: 'Procedimento de alta complexidade requer patente mínima de Major.',
    perc_glosa: 100,
    requer_aprovacao_manual: true
  },

  // REGRAS DE URGÊNCIA
  {
    id: 'urg-001',
    categoria: 'urgencia',
    descricao: 'Inconsistência entre prioridade e procedimento',
    severidade: 'media',
    condicao: (p) => {
      const procedimentosUrgentes = ['30105080', '40103100']; // Fratura, internação
      const ehUrgente = procedimentosUrgentes.includes(p.procedimentos[0]?.codigo || '');
      return ehUrgente && p.prioridade === 'Normal';
    },
    mensagem: 'Procedimento de urgência/emergência com classificação Normal. Corrigir prioridade.',
    perc_glosa: 0,
    requer_aprovacao_manual: true
  },

  // REGRAS DE IDADE
  {
    id: 'age-001',
    categoria: 'idade',
    descricao: 'Procedimento não indicado para faixa etária',
    severidade: 'alta',
    condicao: (p) => {
      const idade = p.paciente.idade;
      if (idade < 40) {
        // Procedimentos restritos para jovens
        const restritos = ['30101040']; // Artrodese lombar rara < 40 anos
        return p.procedimentos.some(proc => restritos.includes(proc.codigo));
      }
      return false;
    },
    mensagem: 'Procedimento raro para esta faixa etária. Exigir justificativa detalhada.',
    perc_glosa: 50,
    requer_aprovacao_manual: true
  },

  // REGRAS DE PROCEDIMENTO ESPECÍFICO
  {
    id: 'proc-001',
    categoria: 'procedimento',
    descricao: 'Cirurgia requer avaliação prévia por comissão',
    severidade: 'critica',
    condicao: (p) => {
      const codigosComissao = ['30101040']; // Artrodese
      return p.tipo_atendimento === 'Cirurgia' && 
             p.procedimentos.some(proc => codigosComissao.includes(proc.codigo));
    },
    mensagem: 'CIRURGIA DE ALTO CUSTO: Requer avaliação prévia da Comissão de Avaliação de Procedimentos Especiais (CAPE).',
    perc_glosa: 100,
    requer_aprovacao_manual: true
  },
];

// MOTOR DE AUDITORIA PRÉVIA
export function executarAuditoriaPrevia(protocolo: ProtocoloMedicoPM): {
  aprovado: boolean;
  glosa: number;
  regrasVioladas: RegraAuditoria[];
  alertas: string[];
  necessitaAuditoriaManual: boolean;
} {
  const regrasVioladas = REGRAS_AUDITORIA.filter(regra => regra.condicao(protocolo));
  
  // Calcula glosa total
  let glosaTotal = 0;
  let necessitaAuditoriaManual = false;
  
  regrasVioladas.forEach(regra => {
    if (regra.perc_glosa) {
      const valorGlosa = protocolo.valor_total * (regra.perc_glosa / 100);
      glosaTotal += valorGlosa;
    }
    
    if (regra.requer_aprovacao_manual) {
      necessitaAuditoriaManual = true;
    }
  });
  
  // Limita glosa a 100%
  glosaTotal = Math.min(glosaTotal, protocolo.valor_total);
  
  const aprovado = glosaTotal < protocolo.valor_total; // Aprovado se não for glosa total
  
  // Gera alertas
  const alertas = regrasVioladas.map(r => `(${r.severidade.toUpperCase()}) ${r.mensagem}`);
  
  return {
    aprovado,
    glosa: glosaTotal,
    regrasVioladas,
    alertas,
    necessitaAuditoriaManual
  };
}

// CRITÉRIOS DE AMOSTRAGEM
export function deveIrParaAuditoriaPrevia(protocolo: ProtocoloMedicoPM): boolean {
  // Critérios OBRIGATÓRIOS de auditoria prévia (100%)
  const criteriosObrigatorios = [
    // Valor acima de R$ 5.000
    () => protocolo.valor_total > 5000,
    
    // Paciente com patente de oficial superior
    () => ['Coronel', 'Tenente-Coronel', 'Major', 'Capitão'].includes(protocolo.paciente.patente),
    
    // Procedimentos de alta complexidade
    () => protocolo.procedimentos.some(p => 
      ['Cirurgia', 'Internação'].includes(protocolo.tipo_atendimento)
    ),
    
    // Paciente com histórico de glosas
    () => Math.random() > 0.7, // Simula histórico
    
    // Protocolo de emergência
    () => protocolo.prioridade === 'Emergência'
  ];
  
  // Se qualquer critério obrigatório for verdadeiro, vai para auditoria
  if (criteriosObrigatorios.some(criterio => criterio())) {
    return true;
  }
  
  // Critérios de amostragem aleatória (10% dos demais)
  return Math.random() < 0.10;
}

// VERIFICAÇÃO DE CONFORMIDADE TISS
export function validarConformidadeTISS(xmlData: string): {
  valido: boolean;
  erros: string[];
  alertas: string[];
} {
  const erros: string[] = [];
  const alertas: string[] = [];
  
  try {
    // Simula validação de XML TISS
    if (!xmlData.includes('<ANS>')) {
      erros.push('Arquivo não contém cabeçalho ANS válido');
    }
    
    if (!xmlData.includes('<procedimentos>')) {
      erros.push('Seção de procedimentos não encontrada');
    }
    
    if (xmlData.length < 1000) {
      alertas.push('XML muito pequeno - possível arquivo incompleto');
    }
    
    // Valida formato de datas
    const dateMatches = xmlData.match(/\d{4}-\d{2}-\d{2}/g);
    if (!dateMatches || dateMatches.length < 2) {
      erros.push('Formato de data incorreto ou ausente');
    }
    
    return {
      valido: erros.length === 0,
      erros,
      alertas
    };
  } catch (error) {
    return {
      valido: false,
      erros: ['Erro ao processar arquivo XML'],
      alertas: []
    };
  }
}

// EXPORTAÇÃO PARA USO
export const AuditoriaEngine = {
  executarAuditoriaPrevia,
  deveIrParaAuditoriaPrevia,
  validarConformidadeTISS,
  regras: REGRAS_AUDITORIA,
  tabelaBrasindice: TABELA_BRASINDICE
};

export default AuditoriaEngine;
