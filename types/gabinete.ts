// ============================================================
// TYPES DO MÓDULO GABINETE DO VEREADOR
// ============================================================

export interface Vereador {
  id: string;
  nome: string;
  partido: string;
  email: string;
  telefone: string;
  foto_url?: string;
  biografia?: string;
  mandato_inicio: string;
  mandato_fim: string;
  created_at: string;
  updated_at: string;
}

export interface Assessor {
  id: string;
  vereador_id: string;
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  created_at: string;
}

// Documentos Parlamentares
export interface Indicacao {
  id: string;
  numero: string;
  ano: number;
  vereador_id: string;
  destinatario: string; // Órgão público (SEMUR, SEMUSB, etc)
  assunto: string;
  descricao: string;
  bairros?: string[];
  data_protocolo: string;
  prazo_resposta?: string;
  resposta?: string;
  data_resposta?: string;
  status: 'Protocolada' | 'Em tramitação' | 'Respondida' | 'Arquivada';
  prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
  created_at: string;
  updated_at: string;
}

export interface Requerimento {
  id: string;
  numero: string;
  ano: number;
  vereador_id: string;
  tipo: 'Informação' | 'Documentos' | 'Medidas' | 'Providências' | 'Outro';
  destinatario: string;
  assunto: string;
  fundamentacao: string;
  data_protocolo: string;
  prazo_resposta?: string;
  resposta?: string;
  data_resposta?: string;
  status: 'Protocolado' | 'Em tramitação' | 'Atendido' | 'Não atendido' | 'Arquivado';
  prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
  created_at: string;
  updated_at: string;
}

export interface Oficio {
  id: string;
  numero: string;
  ano: number;
  vereador_id: string;
  tipo: 'Expedido' | 'Recebido';
  destinatario: string;
  remetente: string;
  assunto: string;
  conteudo: string;
  data_emissao: string;
  data_recebimento?: string;
  anexos?: string[];
  status: 'Rascunho' | 'Enviado' | 'Recebido' | 'Respondido' | 'Arquivado';
  created_at: string;
  updated_at: string;
}

export interface Mocao {
  id: string;
  numero: string;
  ano: number;
  vereador_id: string;
  tipo: 'Aplauso' | 'Congratulação' | 'Pesar' | 'Repúdio' | 'Censura' | 'Outro';
  titulo: string;
  destinatario: string;
  conteudo: string;
  data_protocolo: string;
  data_aprovacao?: string;
  status: 'Protocolada' | 'Em pauta' | 'Aprovada' | 'Rejeitada';
  autoridades_presentes?: string[];
  created_at: string;
  updated_at: string;
}

// Atendimentos e Demandas
export interface Atendimento {
  id: string;
  vereador_id: string;
  protocolo: string;
  data_atendimento: string;
  tipo: 'Presencial' | 'Telefone' | 'Email' | 'WhatsApp' | 'Redes Sociais' | 'Visita';
  cidadao_nome: string;
  cidadao_cpf?: string;
  cidadao_telefone?: string;
  cidadao_email?: string;
  cidadao_endereco?: string;
  bairro?: string;
  demanda: string;
  categoria: 'Saúde' | 'Educação' | 'Infraestrutura' | 'Social' | 'Segurança' | 'Habitação' | 'Outro';
  encaminhamento?: string;
  orgao_destino?: string;
  prazo_acompanhamento?: string;
  resolucao?: string;
  status: 'Novo' | 'Em análise' | 'Encaminhado' | 'Em tratativa' | 'Resolvido' | 'Arquivado';
  prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
  assessor_responsavel?: string;
  anexos?: string[];
  created_at: string;
  updated_at: string;
}

// Agenda e Compromissos
export interface Compromisso {
  id: string;
  vereador_id: string;
  titulo: string;
  descricao?: string;
  tipo: 'Sessão Plenária' | 'Reunião de Comissão' | 'Audiência Pública' | 'Reunião' | 'Visita' | 'Evento' | 'Entrevista' | 'Outro';
  data_inicio: string;
  hora_inicio: string;
  data_fim?: string;
  hora_fim?: string;
  local?: string;
  endereco?: string;
  bairro?: string;
  participantes?: string[];
  pauta?: string;
  status: 'Confirmado' | 'Pendente' | 'Cancelado' | 'Realizado';
  privado: boolean;
  lembrete?: number; // minutos antes
  created_at: string;
  updated_at: string;
}

// Projetos de Lei
export interface ProjetoLei {
  id: string;
  numero: string;
  ano: number;
  vereador_id: string;
  tipo: 'Projeto de Lei' | 'Projeto de Lei Complementar' | 'Projeto de Decreto Legislativo' | 'Projeto de Resolução' | 'Emenda';
  ementa: string;
  objeto: string;
  justificativa?: string;
  data_apresentacao: string;
  comissao?: string;
  relator?: string;
  parecer?: string;
  data_votacao?: string;
  resultado?: 'Aprovado' | 'Rejeitado' | 'Em votação' | 'Retirado' | 'Arquivado';
  status: 'Elaboração' | 'Protocolado' | 'Em comissão' | 'Em pauta' | 'Aprovado' | 'Sancionado' | 'Vetado' | 'Arquivado';
  tramitacao?: TramitacaoItem[];
  created_at: string;
  updated_at: string;
}

export interface TramitacaoItem {
  data: string;
  origem: string;
  destino: string;
  situacao: string;
  observacao?: string;
}

// Controle Eleitoral
export interface Lideranca {
  id: string;
  vereador_id: string;
  nome: string;
  cargo?: string;
  telefone: string;
  email?: string;
  endereco?: string;
  bairro: string;
  zona?: string;
  secao?: string;
  tipo: 'Liderança' | 'Apoiador' | 'Militante' | 'Voluntário' | 'Sympathizante';
  potencial: 'Alto' | 'Médio' | 'Baixo';
  anotacoes?: string;
  ultimo_contato?: string;
  created_at: string;
  updated_at: string;
}

export interface Comunidade {
  id: string;
  vereador_id: string;
  nome: string;
  tipo: 'Associação' | 'Cooperativa' | 'Movimento' | 'ONG' | 'Grupo Comunitário' | 'Outro';
  endereco?: string;
  bairro: string;
  responsavel: string;
  telefone: string;
  email?: string;
  numero_membros?: number;
  demandas?: string;
  historico_atendimentos?: string;
  prioridade: 'Alta' | 'Média' | 'Baixa';
  created_at: string;
  updated_at: string;
}

// Relatório de Mandato
export interface RelatorioMandato {
  id: string;
  vereador_id: string;
  periodo_inicio: string;
  periodo_fim: string;
  titulo: string;
  resumo_executivo?: string;
  projetos_apresentados: number;
  projetos_aprovados: number;
  indicacoes_protocoladas: number;
  indicacoes_atendidas: number;
  requerimentos_protocolados: number;
  requerimentos_atendidos: number;
  atendimentos_realizados: number;
  comunidades_visitadas: number;
  eventos_participados: number;
  destaques?: string[];
  dificuldades?: string[];
  proximos_passos?: string;
  publicado: boolean;
  data_publicacao?: string;
  created_at: string;
  updated_at: string;
}

// Categorias do Gabinete
export interface GabineteCategoriaInfo {
  id: string;
  title: string;
  descricao: string;
  icon: string;
  cor: string;
  secoes: string[];
}

export const GABINETE_CATEGORIAS: Record<string, GabineteCategoriaInfo> = {
  documentos: {
    id: 'documentos',
    title: 'Documentos Parlamentares',
    descricao: 'Indicações, requerimentos, ofícios e moções protocolados',
    icon: 'FileText',
    cor: 'blue',
    secoes: ['Indicações', 'Requerimentos', 'Ofícios', 'Moções'],
  },
  atendimentos: {
    id: 'atendimentos',
    title: 'Atendimentos',
    descricao: 'Registro de demandas e atendimentos ao cidadão',
    icon: 'Users',
    cor: 'emerald',
    secoes: ['Novo Atendimento', 'Em Andamento', 'Resolvidos', 'Arquivados'],
  },
  agenda: {
    id: 'agenda',
    title: 'Agenda',
    descricao: 'Compromissos, sessões, reuniões e eventos',
    icon: 'Calendar',
    cor: 'purple',
    secoes: ['Próximos', 'Hoje', 'Esta Semana', 'Este Mês', 'Passados'],
  },
  projetos: {
    id: 'projetos',
    title: 'Projetos de Lei',
    descricao: 'Projetos, emendas e tramitação legislativa',
    icon: 'Scale',
    cor: 'amber',
    secoes: ['Em Elaboração', 'Protocolados', 'Em Tramitação', 'Aprovados', 'Arquivados'],
  },
  base: {
    id: 'base',
    title: 'Base e Comunidades',
    descricao: 'Lideranças, apoiadores, comunidades e mapeamento',
    icon: 'MapPin',
    cor: 'rose',
    secoes: ['Lideranças', 'Apoiadores', 'Comunidades', 'Mapeamento'],
  },
  relatorios: {
    id: 'relatorios',
    title: 'Relatórios',
    descricao: 'Relatório de mandato e estatísticas',
    icon: 'BarChart3',
    cor: 'indigo',
    secoes: ['Relatório de Mandato', 'Estatísticas', 'Atividades', 'Prestação de Contas'],
  },
};

// Status para selects
export const STATUS_INDICACAO = [
  'Protocolada',
  'Em tramitação', 
  'Respondida',
  'Arquivada',
] as const;

export const STATUS_REQUERIMENTO = [
  'Protocolado',
  'Em tramitação',
  'Atendido',
  'Não atendido',
  'Arquivado',
] as const;

export const STATUS_ATENDIMENTO = [
  'Novo',
  'Em análise',
  'Encaminhado',
  'Em tratativa',
  'Resolvido',
  'Arquivado',
] as const;

export const STATUS_PROJETO_LEI = [
  'Elaboração',
  'Protocolado',
  'Em comissão',
  'Em pauta',
  'Aprovado',
  'Sancionado',
  'Vetado',
  'Arquivado',
] as const;

export const TIPOS_MOCAO = [
  'Aplauso',
  'Congratulação',
  'Pesar',
  'Repúdio',
  'Censura',
  'Outro',
] as const;

export const ORGAOS_MUNICIPAIS = [
  'SEMUR - Secretaria de Urbanismo',
  'SEMUSB - Secretaria de Saúde',
  'SEMED - Secretaria de Educação',
  'SEMAS - Secretaria de Assistência Social',
  'SEMOB - Secretaria de Mobilidade',
  'SEMINF - Secretaria de Infraestrutura',
  'SEMCOP - Secretaria de Copa e Ordem Pública',
  'SEMFAZ - Secretaria da Fazenda',
  'SEMAGRI - Secretaria de Agricultura',
  'SEMTRAB - Secretaria do Trabalho',
  'SECULT - Secretaria de Cultura',
  'SEMDES - Secretaria de Desenvolvimento',
  'Guarda Municipal',
  'Defesa Civil',
  'Procuradoria Geral',
  'Outro',
] as const;
