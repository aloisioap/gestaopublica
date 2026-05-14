// ============================================================
// TYPES DO MÓDULO FUNSAU - Gestão e Auditoria de Processos Médicos
// ============================================================

export interface ConfiguracaoFunsau {
  id: string;
  nome_instituicao: string;
  cnpj: string;
  logo_url?: string;
  brasindice_versao: string;
  brasindice_data_atualizacao: string;
  created_at: string;
  updated_at: string;
}

// Pacientes
export interface Paciente {
  id: string;
  cpf: string;
  nome: string;
  data_nascimento: string;
  sexo: 'M' | 'F' | 'Outro';
  telefone?: string;
  email?: string;
  endereco?: string;
  numero_carteirinha?: string;
  qr_code?: string;
  foto_url?: string;
  // Dados para controle de perfil
  patente?: string;
  tempo_servico?: number;
  cargo?: string;
  condicoes_especiais?: string[]; // diabetes, hipertensão, etc
  historico_condicoes?: string;
  created_at: string;
  updated_at: string;
}

// Médicos e Profissionais
export interface ProfissionalSaude {
  id: string;
  nome: string;
  cpf: string;
  crm?: string;
  conselho?: string;
  numero_conselho?: string;
  especialidade: string;
  tipo: 'Médico' | 'Enfermeiro' | 'Dentista' | 'Fisioterapeuta' | 'Outro';
  telefone: string;
  email: string;
  ativo: boolean;
  assinatura_digital_url?: string;
  created_at: string;
  updated_at: string;
}

// Protocolos Médicos (Processos)
export interface ProtocoloMedico {
  id: string;
  numero_protocolo: string;
  ano: number;
  paciente_id: string;
  profissional_solicitante_id: string;
  data_solicitacao: string;
  tipo_atendimento: 'Consulta' | 'Exame' | 'Cirurgia' | 'Procedimento' | 'Internação' | 'Emergência';
  especialidade: string;
  cid_principal?: string;
  cid_secundario?: string;
  sintomas?: string;
  diagnostico_preliminar?: string;
  procedimentos_solicitados: ProcedimentoSolicitado[];
  status: 'Triagem' | 'Auditoria Prévia' | 'Liberado' | 'Em Execução' | 'Aguardando Documentos' | 'Auditoria Final' | 'Finalizado' | 'Glosado' | 'Cancelado';
  prioridade: 'Normal' | 'Urgente' | 'Emergência';
  observacoes?: string;
  created_at: string;
  updated_at: string;
}

export interface ProcedimentoSolicitado {
  codigo_tuss: string;
  descricao: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  brasindice_referencia?: string;
}

// Auditorias
export interface Auditoria {
  id: string;
  protocolo_id: string;
  tipo: 'Prévia' | 'Final';
  auditor_id: string;
  data_auditoria: string;
  status: 'Pendente' | 'Em Análise' | 'Aprovado' | 'Reprovado' | 'Ajuste' | 'Aceite Total' | 'Aceite Parcial' | 'Glosa Total';
  
  // Critérios de auditoria
  dados_completos: boolean;
  documentacao_compativel: boolean;
  procedimento_adequado: boolean;
  valor_conforme_brasindice: boolean;
  historico_consistente: boolean;
  
  // Análise inteligente
  frequencia_procedimentos?: string;
  discrepancia_preco?: string;
  alertas?: string[];
  
  // Resultado
  valor_aprovado: number;
  valor_glosado: number;
  motivo_glosa?: string;
  justificativa: string;
  
  // Amostragem
  amostragem_inteligente: boolean;
  criterio_amostragem?: string;
  
  created_at: string;
  updated_at: string;
}

// Atendimentos/Execuções
export interface AtendimentoExecutado {
  id: string;
  protocolo_id: string;
  paciente_id: string;
  profissional_executante_id: string;
  local_execucao: string;
  tipo_local: 'Clínica' | 'Hospital' | 'Laboratório' | 'Ambulatório' | 'Outro';
  
  data_execucao: string;
  hora_inicio?: string;
  hora_fim?: string;
  
  // Validação do paciente
  validacao_realizada: boolean;
  tipo_validacao: 'Carteirinha Foto' | 'QR Code' | 'Código Email' | 'Código SMS' | 'Biometria' | 'Outro';
  codigo_validacao?: string;
  
  procedimentos_executados: ProcedimentoExecutado[];
  
  observacoes?: string;
  created_at: string;
  updated_at: string;
}

export interface ProcedimentoExecutado {
  codigo_tuss: string;
  descricao: string;
  quantidade_realizada: number;
  valor_executado: number;
  resultado?: string;
}

// Documentos Clínicos
export interface DocumentoClinico {
  id: string;
  protocolo_id: string;
  paciente_id: string;
  atendimento_id?: string;
  
  tipo: 'XML' | 'Laudo' | 'Prontuário' | 'Prescrição' | 'Exame' | 'Receituário' | 'Outro';
  descricao: string;
  
  arquivo_url: string;
  nome_arquivo: string;
  tamanho_arquivo: number;
  formato: string;
  
  // Controle de acesso
  acesso_liberado: boolean;
  liberacao_qr_code: boolean;
  data_upload: string;
  uploaded_by: string;
  
  created_at: string;
  updated_at: string;
}

// XML de Atendimento (TISS)
export interface XMLAtendimento {
  id: string;
  protocolo_id: string;
  numero_guia: string;
  tipo_guia: 'Consulta' | 'SADT' | 'Honorário' | 'Internação';
  
  // Dados do XML
  xml_original_url: string;
  xml_processado_url?: string;
  
  // Validação
  validacao_estrutura: boolean;
  erros_validacao?: string[];
  
  // Dados extraídos
  dados_extraidos?: {
    numero_guia_operadora?: string;
    senha?: string;
    data_autorizacao?: string;
    data_execucao?: string;
    valor_total?: number;
    valor_guia?: number;
  };
  
  status: 'Pendente' | 'Validado' | 'Rejeitado' | 'Processado';
  created_at: string;
  updated_at: string;
}

// Controle Financeiro
export interface ControlePagamento {
  id: string;
  protocolo_id: string;
  numero_nota_fiscal?: string;
  
  valor_solicitado: number;
  valor_auditado: number;
  valor_aprovado: number;
  valor_glosado: number;
  
  status_pagamento: 'Pendente' | 'Liberado para Pagamento' | 'Pago' | 'Glosado';
  data_prevista_pagamento?: string;
  data_pagamento?: string;
  
  historico_glosas: Glosa[];
  
  created_at: string;
  updated_at: string;
}

export interface Glosa {
  id: string;
  codigo: string;
  descricao: string;
  valor_glosado: number;
  motivo: string;
  data_glosa: string;
}

// Liberações Automáticas por Perfil
export interface LiberacaoAutomatica {
  id: string;
  paciente_id?: string;
  condicao: string; // Ex: "Diabetes", "Hipertensão"
  
  procedimentos_liberados: string[]; // Códigos TUSS
  validade?: string;
  
  criterio_liberacao: string;
  observacoes?: string;
  
  ativo: boolean;
  created_at: string;
  updated_at: string;
}

// Histórico de Auditoria Inteligente
export interface AuditoriaInteligente {
  id: string;
  paciente_id: string;
  protocolo_id: string;
  
  // Análise de padrões
  frequencia_mensal_procedimentos: number;
  valor_medio_procedimentos: number;
  discrepancia_preco_detectada: boolean;
  variacao_percentual_preco?: number;
  
  // Alertas
  alertas_gerados: string[];
  risco_fraude: 'Baixo' | 'Médio' | 'Alto';
  
  // Recomendações
  recomendacao_auditoria: string;
  necessita_auditoria_detalhada: boolean;
  
  created_at: string;
}

// Categorias do FUNSAU
export interface FunsauCategoriaInfo {
  id: string;
  nome: string;
  title: string;
  descricao: string;
  icone: string;
  icon: string;
  cor: string;
  rota: string;
  total_registros: number;
  secoes: string[];
}

export const FUNSAU_CATEGORIAS: Record<string, FunsauCategoriaInfo> = {
  triagem: {
    id: 'triagem',
    nome: 'Triagem Médica',
    title: 'Triagem Médica',
    descricao: 'Atendimento inicial, cadastro de pacientes e abertura de protocolos',
    icone: 'Stethoscope',
    icon: 'Stethoscope',
    cor: 'emerald',
    rota: '/funsau/triagem',
    total_registros: 12,
    secoes: ['Novo Atendimento', 'Protocolos em Aberto', 'Histórico de Pacientes'],
  },
  auditoria: {
    id: 'auditoria',
    nome: 'Auditoria Médica',
    title: 'Auditoria Médica',
    descricao: 'Auditoria prévia e final de processos médicos',
    icone: 'ClipboardCheck',
    icon: 'ClipboardCheck',
    cor: 'blue',
    rota: '/funsau/auditoria',
    total_registros: 28,
    secoes: ['Fila de Auditoria', 'Auditoria Prévia', 'Auditoria Final', 'Glosas'],
  },
  execucao: {
    id: 'execucao',
    nome: 'Execução de Procedimentos',
    title: 'Execução de Procedimentos',
    descricao: 'Validação de pacientes e execução de consultas, exames e cirurgias',
    icone: 'Hospital',
    icon: 'Hospital',
    cor: 'purple',
    rota: '/funsau/execucao',
    total_registros: 15,
    secoes: ['Consulta por CPF', 'Validação de Paciente', 'Procedimentos Realizados'],
  },
  documentos: {
    id: 'documentos',
    nome: 'Documentos Clínicos',
    title: 'Documentos Clínicos',
    descricao: 'Upload e gestão de XML, laudos e prontuários',
    icone: 'FileText',
    icon: 'FileText',
    cor: 'amber',
    rota: '/funsau/documentos',
    total_registros: 156,
    secoes: ['Upload de XML', 'Laudos Médicos', 'Prontuários', 'Histórico por Paciente'],
  },
  financeiro: {
    id: 'financeiro',
    nome: 'Controle Financeiro',
    title: 'Controle Financeiro',
    descricao: 'Controle de pagamentos, glosas e valores auditados',
    icone: 'DollarSign',
    icon: 'DollarSign',
    cor: 'green',
    rota: '/funsau/financeiro',
    total_registros: 89,
    secoes: ['Processos Aprovados', 'Pagamentos Pendentes', 'Glosas', 'Relatórios Financeiros'],
  },
  relatorios: {
    id: 'relatorios',
    nome: 'Auditoria Inteligente',
    title: 'Auditoria Inteligente',
    descricao: 'Análise de padrões, alertas e relatórios estatísticos',
    icone: 'Brain',
    icon: 'Brain',
    cor: 'rose',
    rota: '/funsau/relatorios',
    total_registros: 34,
    secoes: ['Dashboard', 'Análise de Padrões', 'Alertas de Fraude', 'Brasíndice'],
  },
  configuracoes: {
    id: 'configuracoes',
    nome: 'Configurações',
    title: 'Configurações',
    descricao: 'Liberações automáticas, perfis de pacientes e cadastros',
    icone: 'Settings',
    icon: 'Settings',
    cor: 'slate',
    rota: '/funsau/configuracoes',
    total_registros: 8,
    secoes: ['Liberações Automáticas', 'Profissionais de Saúde', 'Regras de Auditoria'],
  },
};

// Status
export const STATUS_PROTOCOLO = [
  'Triagem',
  'Auditoria Prévia',
  'Liberado',
  'Em Execução',
  'Aguardando Documentos',
  'Auditoria Final',
  'Finalizado',
  'Glosado',
  'Cancelado',
] as const;

export const STATUS_AUDITORIA = [
  'Pendente',
  'Em Análise',
  'Aprovado',
  'Reprovado',
  'Ajuste',
  'Aceite Total',
  'Aceite Parcial',
  'Glosa Total',
] as const;

export const TIPOS_ATENDIMENTO = [
  'Consulta',
  'Exame',
  'Cirurgia',
  'Procedimento',
  'Internação',
  'Emergência',
] as const;

export const TIPOS_DOCUMENTO = [
  'XML',
  'Laudo',
  'Prontuário',
  'Prescrição',
  'Exame',
  'Receituário',
  'Outro',
] as const;
