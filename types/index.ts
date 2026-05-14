export interface Bairro {
  id: string;
  nome: string;
  descricao?: string;
  imagem_url?: string;
  cidade?: string;
  estado?: string;
  created_at: string;
  updated_at: string;
}

export interface Registro {
  id: string;
  bairro_id: string;
  categoria: 'epidemiologico' | 'infraestrutura' | 'gestao' | 'residentes' | 'saude' | 'educacao' | 'social';
  secao: string;
  dados: Record<string, any>;
  status: 'Pendente' | 'Em análise' | 'Em atendimento' | 'Resolvido' | 'Arquivado';
  created_at: string;
  updated_at: string;
}

export interface BairroComEstatisticas extends Bairro {
  total_moradores: number;
  problemas_pendentes: number;
  problemas_resolvidos: number;
  ultimos_moradores: { nome: string; id: string }[];
  tipos_problemas: string[];
}

export interface CategoriaInfo {
  id: string;
  title: string;
  descricao: string;
  icon: string;
  cor: string;
  secoes: string[];
}

export const CATEGORIAS: Record<string, CategoriaInfo> = {

  infraestrutura: {
    id: 'infraestrutura',
    title: 'Infraestrutura Urbana',
    descricao: 'Alagamentos, deslizamentos, saneamento, vias públicas, energia, água e iluminação',
    icon: 'Building2',
    cor: 'blue',
    secoes: [
      'Alagamentos',
      'Deslizamentos',
      'Falta de Energia',
      'Falta de Água',
      'Iluminação Pública',
      'Vias Públicas',
      'Saneamento'
    ],
  },
  saude: {
    id: 'saude',
    title: 'Saúde',
    descricao: 'Postos de saúde, perfil epidemiológico, serviços, programas e medicamentos',
    icon: 'Heart',
    cor: 'red',
    secoes: [
      'Posto de Saúde Referência',
      'Perfil Epidemiológico',
      'Dengue',
      'Cirurgias',
      'Pacientes Internados',
      'Vacinação',
      'Cadastros (ASS, UBS)',
      'Serviços e Programas',
      'Medicamentos em Falta',
      'Vacinas em Falta',
      'Materiais em Falta'
    ],
  },
  educacao: {
    id: 'educacao',
    title: 'Educação',
    descricao: 'Escolas, matrículas, perfil educacional e inconformidades',
    icon: 'GraduationCap',
    cor: 'indigo',
    secoes: [
      'Escola Referência',
      'Perfil Educacional',
      'Matrículas',
      'Inconformidades',
      'Alunos sem Estudar'
    ],
  },
  social: {
    id: 'social',
    title: 'Cadastro Social',
    descricao: 'Famílias, auxílios governamentais, vulnerabilidades e acolhimentos',
    icon: 'Users',
    cor: 'emerald',
    secoes: [
      'Famílias do Bairro',
      'Auxílios Governamentais',
      'Vulnerabilidades Sociais',
      'Acolhimentos e Auxílios'
    ],
  },
  gestao: {
    id: 'gestao',
    title: 'Gestão Pública',
    descricao: 'Ações, projetos, orçamento participativo, segurança, limpeza e fiscalização',
    icon: 'Gavel',
    cor: 'amber',
    secoes: [
      'Ações Realizadas',
      'Projetos',
      'Orçamento Participativo',
      'Segurança',
      'Limpeza Urbana',
      'Fiscalização',
      'Sugestões e Reclamações'
    ],
  },
  residentes: {
    id: 'residentes',
    title: 'Cadastro de Residentes',
    descricao: 'Moradores, contatos, documentação e histórico de atendimentos',
    icon: 'UserCircle',
    cor: 'cyan',
    secoes: ['Moradores', 'Contatos', 'Documentação', 'Histórico'],
  },
};

export const STATUS_OPCOES = [
  'Pendente',
  'Em análise',
  'Em atendimento',
  'Resolvido',
  'Arquivado',
] as const;

export const STATUS_PROJETO = [
  'Proposto',
  'Em análise',
  'Aprovado',
  'Em execução',
  'Concluído',
  'Cancelado',
] as const;

export const NIVEIS_RISCO = [
  'Baixo',
  'Médio',
  'Alto',
  'Crítico',
] as const;

export const TIPOS_PROBLEMAS = [
  'Infraestrutura',
  'Saneamento',
  'Segurança',
  'Saúde',
  'Iluminação',
  'Transporte',
  'Ruído',
  'Outros',
] as const;

export const PERFIL_EDUCACAO = [
  'Educação Infantil',
  'Ensino Fundamental I',
  'Ensino Fundamental II',
  'Ensino Médio',
  'EJA',
  'Educação Especial',
] as const;

export const TIPOS_AUXILIO = [
  'Bolsa Família',
  'BPC',
  'Auxílio Emergencial',
  'Auxílio Gás',
  'Vale Gás',
  'Programa Social Municipal',
  'Outro',
] as const;

export const TIPOS_VULNERABILIDADE = [
  'Baixa renda (menos de ½ salário mínimo)',
  'Desempregado',
  'Desalentado',
  'Família monoparental',
  'Idoso sozinho',
  'Pessoa com deficiência',
  'Situação de rua',
  'Outro',
] as const;
