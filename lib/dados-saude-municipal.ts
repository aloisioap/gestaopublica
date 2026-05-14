// Cores do tema de Saúde Municipal
export const CORES_SAUDE_MUNICIPAL = {
  primaria: "#16a34a",    // green-600 - saúde
  secundaria: "#0d9488",  // teal-600
  terciaria: "#0891b2",   // cyan-600
  destaque: "#ea580c",    // orange-600 - urgência
  alerta: "#dc2626",      // red-600
  sucesso: "#16a34a",     // green-600
  info: "#2563eb",        // blue-600
  fundo: "#f0fdf4",       // green-50
  hospital: "#dc2626",    // red-600
  urgencia: "#ea580c",    // orange-600
  movel: "#0891b2",       // cyan-600
  atencaoBasica: "#16a34a", // green
};

// Indicadores Gerais
export const INDICADORES_SAUDE_MUNICIPAL = {
  coberturaAB: 78,
  atendimentosMes: 12500,
  satisfacaoUsuario: 4.2,
  tempoEsperaMedia: 42,
  leitosTotal: 450,
  taxaOcupacaoHospital: 85,
  tempoPermanenciaMedia: 4.2,
};

// ============================================================
// ATENÇÃO BÁSICA - UBS
// ============================================================
export interface MetaSecao {
  id: string;
  nome: string;
  valorMeta: number;
  valorAtual: number;
  unidade: string;
}

export interface UBS {
  id: string;
  tipo: "UMS" | "ESF";
  nome: string;
  bairro: string;
  endereco: string;
  telefone: string;
  horario: string;
  equipes: number;
  agentesComunitarios: number;
  imagem: string;
  servicos: string[];
  metas: {
    consultasMensais: number;
    atendidos: number;
    cumprimento: number;
  };
  secoes: MetaSecao[];
}

export const UNIDADES_BASICAS_SAUDE: UBS[] = [
  {
    id: "ubs-01",
    tipo: "UMS",
    nome: "UMS Sacramenta",
    bairro: "Sacramenta",
    endereco: "Av. Augusto Montenegro, 4000 - Sacramenta",
    telefone: "(91) 3230-1001",
    horario: "07:00 - 18:00",
    equipes: 3,
    agentesComunitarios: 8,
    imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Enfermagem", "Odontologia", "Vacinação", "Farmácia"],
    metas: {
      consultasMensais: 1200,
      atendidos: 1085,
      cumprimento: 90.4,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 800, valorAtual: 720, unidade: "atendimentos" },
      { id: "enfermagem", nome: "Procedimentos Enfermagem", valorMeta: 600, valorAtual: 580, unidade: "procedimentos" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 400, valorAtual: 385, unidade: "doses" },
      { id: "odontologia", nome: "Consultas Odonto", valorMeta: 300, valorAtual: 280, unidade: "atendimentos" },
    ],
  },
  {
    id: "ubs-02",
    tipo: "UMS",
    nome: "UMS Jurunas",
    bairro: "Jurunas",
    endereco: "Tv. Padre Eutíquio, 220 - Jurunas",
    telefone: "(91) 3230-1002",
    horario: "07:00 - 18:00",
    equipes: 2,
    agentesComunitarios: 5,
    imagem: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Enfermagem", "Vacinação", "Agentes Comunitários"],
    metas: {
      consultasMensais: 800,
      atendidos: 720,
      cumprimento: 90.0,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 500, valorAtual: 450, unidade: "atendimentos" },
      { id: "enfermagem", nome: "Procedimentos Enfermagem", valorMeta: 400, valorAtual: 380, unidade: "procedimentos" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 250, valorAtual: 230, unidade: "doses" },
    ],
  },
  {
    id: "ubs-03",
    tipo: "UMS",
    nome: "UMS Terra Firme",
    bairro: "Terra Firme",
    endereco: "Passagem Vitória, 450 - Terra Firme",
    telefone: "(91) 3230-1003",
    horario: "07:00 - 18:00",
    equipes: 2,
    agentesComunitarios: 6,
    imagem: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Enfermagem", "Odontologia", "Vacinação"],
    metas: {
      consultasMensais: 700,
      atendidos: 650,
      cumprimento: 92.8,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 450, valorAtual: 420, unidade: "atendimentos" },
      { id: "enfermagem", nome: "Procedimentos Enfermagem", valorMeta: 350, valorAtual: 340, unidade: "procedimentos" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 200, valorAtual: 195, unidade: "doses" },
    ],
  },
  {
    id: "ubs-04",
    tipo: "UMS",
    nome: "UMS Guamá",
    bairro: "Guamá",
    endereco: "Tv. Lomas Valentinas, 3000 - Guamá",
    telefone: "(91) 3230-1004",
    horario: "07:00 - 18:00",
    equipes: 2,
    agentesComunitarios: 4,
    imagem: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Enfermagem", "Vacinação", "Agentes Comunitários"],
    metas: {
      consultasMensais: 600,
      atendidos: 530,
      cumprimento: 88.3,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 400, valorAtual: 350, unidade: "atendimentos" },
      { id: "enfermagem", nome: "Procedimentos Enfermagem", valorMeta: 300, valorAtual: 280, unidade: "procedimentos" },
    ],
  },
  {
    id: "ubs-05",
    tipo: "ESF",
    nome: "ESF Canal da Visconde",
    bairro: "Cremação",
    endereco: "Canal da Visconde de Inhaúma s/n - Cremação",
    telefone: "(91) 3230-1005",
    horario: "07:00 - 18:00",
    equipes: 3,
    agentesComunitarios: 7,
    imagem: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Visita Domiciliar", "Grupos de Saúde", "Vacinação", "Farmácia"],
    metas: {
      consultasMensais: 1000,
      atendidos: 920,
      cumprimento: 92.0,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 650, valorAtual: 600, unidade: "atendimentos" },
      { id: "visitas", nome: "Visitas Domiciliares", valorMeta: 300, valorAtual: 285, unidade: "visitas" },
      { id: "grupos", nome: "Grupos de Saúde", valorMeta: 12, valorAtual: 11, unidade: "grupos" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 350, valorAtual: 340, unidade: "doses" },
    ],
  },
  {
    id: "ubs-06",
    tipo: "ESF",
    nome: "ESF Condor",
    bairro: "Condor",
    endereco: "Rua dos Mundurucus, 3580 - Condor",
    telefone: "(91) 3230-1006",
    horario: "07:00 - 18:00",
    equipes: 2,
    agentesComunitarios: 5,
    imagem: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Visita Domiciliar", "Pré-Natal", "Vacinação"],
    metas: {
      consultasMensais: 750,
      atendidos: 680,
      cumprimento: 90.6,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 500, valorAtual: 455, unidade: "atendimentos" },
      { id: "visitas", nome: "Visitas Domiciliares", valorMeta: 200, valorAtual: 185, unidade: "visitas" },
      { id: "prenatal", nome: "Pré-Natal", valorMeta: 80, valorAtual: 75, unidade: "gestantes" },
    ],
  },
  {
    id: "ubs-07",
    tipo: "ESF",
    nome: "ESF Bengui",
    bairro: "Bengui",
    endereco: "Passagem Mucajá, 100 - Bengui",
    telefone: "(91) 3230-1007",
    horario: "07:00 - 18:00",
    equipes: 2,
    agentesComunitarios: 6,
    imagem: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Visita Domiciliar", "Grupos de Saúde", "Vacinação"],
    metas: {
      consultasMensais: 680,
      atendidos: 620,
      cumprimento: 91.2,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 440, valorAtual: 405, unidade: "atendimentos" },
      { id: "visitas", nome: "Visitas Domiciliares", valorMeta: 180, valorAtual: 168, unidade: "visitas" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 220, valorAtual: 210, unidade: "doses" },
    ],
  },
  {
    id: "ubs-08",
    tipo: "UMS",
    nome: "UMS Marco",
    bairro: "Marco",
    endereco: "Av. Almirante Barroso, 4800 - Marco",
    telefone: "(91) 3230-1008",
    horario: "07:00 - 18:00",
    equipes: 3,
    agentesComunitarios: 7,
    imagem: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=400&fit=crop",
    servicos: ["Consultas Médicas", "Enfermagem", "Odontologia", "Vacinação", "Farmácia"],
    metas: {
      consultasMensais: 950,
      atendidos: 870,
      cumprimento: 91.6,
    },
    secoes: [
      { id: "consultas", nome: "Consultas Médicas", valorMeta: 600, valorAtual: 548, unidade: "atendimentos" },
      { id: "enfermagem", nome: "Procedimentos Enfermagem", valorMeta: 450, valorAtual: 418, unidade: "procedimentos" },
      { id: "odontologia", nome: "Consultas Odonto", valorMeta: 250, valorAtual: 228, unidade: "atendimentos" },
      { id: "vacinas", nome: "Vacinas Aplicadas", valorMeta: 300, valorAtual: 285, unidade: "doses" },
    ],
  },
];

// ============================================================
// ATENÇÃO BÁSICA - CASAS ESPECIALIZADAS
// ============================================================
export interface CasaEspecializada {
  id: string;
  sigla: string;
  nome: string;
  descricao: string;
  endereco: string;
  bairro: string;
  telefone: string;
  horario: string;
  imagem: string;
  tipo: string;
  servicos: string[];
  indicadores: Record<string, number>;
  secoes: MetaSecao[];
}

export const CASAS_ESPECIALIZADAS: CasaEspecializada[] = [
  {
    id: "cemo",
    sigla: "CEMO",
    nome: "Centro Municipal de Oncologia",
    descricao: "Atendimento especializado em oncologia clínica e cirúrgica",
    endereco: "Tv. Angustura, 800 - Umarizal",
    bairro: "Umarizal",
    telefone: "(91) 3190-2001",
    horario: "07:00 - 19:00",
    imagem: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop",
    tipo: "Oncologia",
    servicos: ["Quimioterapia", "Radioterapia", "Consultas Oncológicas", "Apoio Psicológico"],
    indicadores: { pacientesAtivos: 180, sessoesQuimioMes: 450, tempoAtendimento: 4.5 },
    secoes: [
      { id: "quimio", nome: "Sessões Quimioterapia", valorMeta: 500, valorAtual: 450, unidade: "sessões" },
      { id: "radio", nome: "Sessões Radioterapia", valorMeta: 300, valorAtual: 280, unidade: "sessões" },
      { id: "consultas", nome: "Consultas Onco", valorMeta: 200, valorAtual: 180, unidade: "consultas" },
    ],
  },
  {
    id: "casa-dia",
    sigla: "CASA DIA",
    nome: "Centro de Atendimento Socioassistencial",
    descricao: "Atendimento diurno para idosos e PCDs",
    endereco: "Rua das Flores, 100",
    bairro: "Centenário",
    telefone: "(95) 3199-2002",
    horario: "08:00 - 17:00",
    imagem: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop",
    tipo: "CASA DIA",
    servicos: ["Atividades Terapêuticas", "Alimentação", "Fisioterapia", "Atendimento Médico"],
    indicadores: { frequenciaMedia: 92, idososAtendidos: 45, pcdAtendidos: 15 },
    secoes: [
      { id: "frequencia", nome: "Frequência Diária", valorMeta: 60, valorAtual: 55, unidade: "pessoas" },
      { id: "refeicoes", nome: "Refeições Servidas", valorMeta: 1800, valorAtual: 1650, unidade: "refeições/mês" },
      { id: "fisio", nome: "Sessões Fisio", valorMeta: 400, valorAtual: 380, unidade: "sessões" },
    ],
  },
  {
    id: "casa-idoso",
    sigla: "CASA IDOSO",
    nome: "Casa do Idoso",
    descricao: "Instituição de longa permanência",
    endereco: "Rua da Paz, 200",
    bairro: "Nova Boa Vista",
    telefone: "(95) 3199-2003",
    horario: "24 horas",
    imagem: "https://images.unsplash.com/photo-1576765608866-5b51f8d6f5c5?w=400&h=300&fit=crop",
    tipo: "ILPI",
    servicos: ["Alojamento", "Alimentação", "Cuidados de Enfermagem", "Atividades Sociais"],
    indicadores: { ocupacao: 85, idososAlojados: 34, idososInscritos: 156 },
    secoes: [
      { id: "ocupacao", nome: "Taxa Ocupação", valorMeta: 40, valorAtual: 34, unidade: "leitos" },
      { id: "frequencia", nome: "Frequência Atividades", valorMeta: 95, valorAtual: 92, unidade: "%" },
    ],
  },
  {
    id: "casa-mulher",
    sigla: "CASA MULHER",
    nome: "Casa da Mulher",
    descricao: "Atendimento integral à mulher",
    endereco: "Av. das Mulheres, 300",
    bairro: "Centro",
    telefone: "(95) 3199-2004",
    horario: "08:00 - 18:00",
    imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    tipo: "Saúde da Mulher",
    servicos: ["Saúde da Mulher", "Atendimento Psicológico", "Orientação Jurídica", "Grupos de Apoio"],
    indicadores: { atendimentosMes: 320, prevencaoViolencia: 45 },
    secoes: [
      { id: "consultas", nome: "Consultas Gineco", valorMeta: 400, valorAtual: 350, unidade: "consultas" },
      { id: "preven", nome: "Exames Preventivos", valorMeta: 250, valorAtual: 220, unidade: "exames" },
    ],
  },
  {
    id: "casa-mental",
    sigla: "CASA MENTAL",
    nome: "Casa da Saúde Mental",
    descricao: "CAPS para saúde mental",
    endereco: "Rua da Esperança, 150",
    bairro: "São João",
    telefone: "(95) 3199-2005",
    horario: "08:00 - 18:00",
    imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    tipo: "CAPS III",
    servicos: ["Atendimento Psiquiátrico", "Terapia Ocupacional", "Grupos Terapêuticos", "Reinserção Social"],
    indicadores: { usuariosAtivos: 280, atendimentosMes: 850, reinsercaoTrabalho: 35 },
    secoes: [
      { id: "atendimentos", nome: "Atendimentos", valorMeta: 900, valorAtual: 850, unidade: "atendimentos" },
      { id: "grupos", nome: "Grupos Terapêuticos", valorMeta: 20, valorAtual: 18, unidade: "grupos" },
    ],
  },
];

// ============================================================
// URGÊNCIA - UPA
// ============================================================
export interface UPASecao {
  id: string;
  nome: string;
  descricao: string;
  metas: MetaSecao[];
}

export interface UPA {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  telefone: string;
  imagem: string;
  tipo: string;
  classificacaoRisco: {
    vermelho: number;
    laranja: number;
    amarelo: number;
    verde: number;
    azul: number;
  };
  indicadores: {
    atendimentosMes: number;
    metaMes: number;
    taxaOcupacao: number;
    tempoMedioPermanencia: number;
    taxaInternacao: number;
  };
  secoes: UPASecao[];
}

export const UNIDADES_PRONTO_ATENDIMENTO: UPA[] = [
  {
    id: "upa-01",
    nome: "UPA 24h Sacramenta",
    endereco: "Av. Augusto Montenegro, 7200 - Sacramenta",
    bairro: "Sacramenta",
    telefone: "(91) 3276-1920",
    imagem: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop",
    tipo: "UPA 24h",
    classificacaoRisco: { vermelho: 3, laranja: 8, amarelo: 15, verde: 25, azul: 5 },
    indicadores: {
      atendimentosMes: 3800,
      metaMes: 4200,
      taxaOcupacao: 78,
      tempoMedioPermanencia: 3.5,
      taxaInternacao: 12,
    },
    secoes: [
      {
        id: "ambulatorio",
        nome: "Ambulatório",
        descricao: "Consultas médicas e enfermagem",
        metas: [
          { id: "atend-dia", nome: "Atendimentos/Dia", valorMeta: 120, valorAtual: 115, unidade: "atendimentos" },
          { id: "tempo", nome: "Tempo Médio", valorMeta: 30, valorAtual: 28, unidade: "minutos" },
        ],
      },
      {
        id: "sadt",
        nome: "SADT",
        descricao: "Raio-X, ECG e Laboratório",
        metas: [
          { id: "raiox", nome: "Raio-X", valorMeta: 800, valorAtual: 750, unidade: "exames" },
          { id: "ecg", nome: "ECG", valorMeta: 400, valorAtual: 380, unidade: "exames" },
          { id: "lab", nome: "Exames Lab", valorMeta: 1200, valorAtual: 1150, unidade: "exames" },
        ],
      },
      {
        id: "medicina",
        nome: "Medicina",
        descricao: "Procedimentos e suturas",
        metas: [
          { id: "suturas", nome: "Suturas", valorMeta: 500, valorAtual: 480, unidade: "procedimentos" },
          { id: "curativos", nome: "Curativos", valorMeta: 800, valorAtual: 820, unidade: "curativos" },
          { id: "retirada", nome: "Retirada Pontos", valorMeta: 300, valorAtual: 290, unidade: "procedimentos" },
        ],
      },
      {
        id: "enfermaria",
        nome: "Enfermaria Obs",
        descricao: "Leitos para observação",
        metas: [
          { id: "leitos", nome: "Leitos Ocupados", valorMeta: 12, valorAtual: 10, unidade: "leitos" },
          { id: "tempo-obs", nome: "Tempo Observação", valorMeta: 24, valorAtual: 22, unidade: "horas" },
        ],
      },
      {
        id: "farmacia",
        nome: "Farmácia",
        descricao: "Dispensação de medicamentos",
        metas: [
          { id: "disp", nome: "Dispensações", valorMeta: 200, valorAtual: 195, unidade: "dispensações/dia" },
          { id: "tempo-disp", nome: "Tempo Dispensação", valorMeta: 10, valorAtual: 8, unidade: "minutos" },
        ],
      },
    ],
  },
  {
    id: "upa-02",
    nome: "UPA 24h Condor",
    endereco: "Av. Marquês de Herval, 2000 - Condor",
    bairro: "Condor",
    telefone: "(91) 3276-1921",
    imagem: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
    tipo: "UPA 24h",
    classificacaoRisco: { vermelho: 1, laranja: 3, amarelo: 8, verde: 18, azul: 3 },
    indicadores: {
      atendimentosMes: 500,
      metaMes: 550,
      taxaOcupacao: 72,
      tempoMedioPermanencia: 2.8,
      taxaInternacao: 8,
    },
    secoes: [
      {
        id: "ambulatorio",
        nome: "Ambulatório Pediátrico",
        descricao: "Consultas pediátricas",
        metas: [
          { id: "atend-dia", nome: "Atendimentos/Dia", valorMeta: 20, valorAtual: 18, unidade: "atendimentos" },
          { id: "tempo", nome: "Tempo Médio", valorMeta: 25, valorAtual: 23, unidade: "minutos" },
        ],
      },
      {
        id: "sadt",
        nome: "SADT Pediátrico",
        descricao: "Exames para crianças",
        metas: [
          { id: "raiox", nome: "Raio-X", valorMeta: 150, valorAtual: 140, unidade: "exames" },
          { id: "lab", nome: "Exames Lab", valorMeta: 250, valorAtual: 230, unidade: "exames" },
        ],
      },
    ],
  },
];

// ============================================================
// HOSPITAIS - EXPANDIDO
// ============================================================
export interface HospitalEspecialidade {
  nome: string;
  leitos: number;
  ocupados: number;
}

export interface Hospital {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  telefone: string;
  imagem: string;
  indicadores: {
    leitosTotal: number;
    taxaOcupacao: number;
    tempoMedioInternacao: number;
    cirurgiasMes: number;
    partosMes: number;
    altasMes: number;
    obitosMes: number;
    biopsiasMes: number;
    consultasAmbulatorioMes: number;
    examesSadtMes: number;
  };
  especialidades: HospitalEspecialidade[];
  metas: {
    cirurgiasMes: number;
    partosMes: number;
    taxaOcupacaoMeta: number;
    tempoPermanenciaMax: number;
    biopsiasMes: number;
    consultasAmbulatorioMes: number;
    examesSadtMes: number;
  };
  secoes: MetaSecao[];
  // Seções detalhadas do hospital
  ambulatorio: {
    consultas: MetaSecao[];
    especialidades: string[];
  };
  cirurgias: {
    eletivas: MetaSecao[];
    emergencias: MetaSecao[];
    ortopedia: MetaSecao[];
    oftalmologia: MetaSecao[];
  };
  sadt: {
    raioX: MetaSecao[];
    ultrassom: MetaSecao[];
    tomografia: MetaSecao[];
    laboratorio: MetaSecao[];
    eletrocardiograma: MetaSecao[];
  };
  biopsias: {
    papanicolau: MetaSecao;
    mama: MetaSecao;
    prostata: MetaSecao;
    pele: MetaSecao;
  };
}

export const HOSPITAIS_MUNICIPAIS: Hospital[] = [
  {
    id: "hospital-01",
    nome: "Hospital Municipal Pronto Socorro Mário Pinotti",
    endereco: "Av. Almirante Barroso, 1758 - Marco",
    bairro: "Marco",
    telefone: "(91) 3190-1500",
    imagem: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=400&fit=crop",
    indicadores: {
      leitosTotal: 120,
      taxaOcupacao: 85,
      tempoMedioInternacao: 4.2,
      cirurgiasMes: 180,
      partosMes: 65,
      altasMes: 320,
      obitosMes: 8,
      biopsiasMes: 145,
      consultasAmbulatorioMes: 2400,
      examesSadtMes: 1850,
    },
    especialidades: [
      { nome: "Clínica Médica", leitos: 40, ocupados: 34 },
      { nome: "Cirurgia Geral", leitos: 30, ocupados: 26 },
      { nome: "Obstetrícia", leitos: 25, ocupados: 22 },
      { nome: "Pediatria", leitos: 20, ocupados: 16 },
      { nome: "UTI", leitos: 5, ocupados: 5 },
    ],
    metas: {
      cirurgiasMes: 200,
      partosMes: 70,
      taxaOcupacaoMeta: 90,
      tempoPermanenciaMax: 5,
      biopsiasMes: 180,
      consultasAmbulatorioMes: 2800,
      examesSadtMes: 2200,
    },
    secoes: [
      { id: "cirurgias", nome: "Cirurgias Eletivas", valorMeta: 150, valorAtual: 130, unidade: "cirurgias" },
      { id: "emergencia", nome: "Cirurgias Emergência", valorMeta: 50, valorAtual: 50, unidade: "cirurgias" },
      { id: "partos", nome: "Partos Normais", valorMeta: 50, valorAtual: 45, unidade: "partos" },
      { id: "cesareas", nome: "Cesáreas", valorMeta: 20, valorAtual: 20, unidade: "cirurgias" },
      { id: "biopsias", nome: "Biópsias", valorMeta: 180, valorAtual: 145, unidade: "biopsias" },
      { id: "ambulatorio", nome: "Consultas Ambulatório", valorMeta: 2800, valorAtual: 2400, unidade: "consultas" },
      { id: "sadt", nome: "Exames SADT", valorMeta: 2200, valorAtual: 1850, unidade: "exames" },
    ],
    // Ambulatório detalhado
    ambulatorio: {
      consultas: [
        { id: "amb-geral", nome: "Clínica Geral", valorMeta: 800, valorAtual: 720, unidade: "consultas" },
        { id: "amb-cardio", nome: "Cardiologia", valorMeta: 400, valorAtual: 350, unidade: "consultas" },
        { id: "amb-gineco", nome: "Ginecologia", valorMeta: 450, valorAtual: 380, unidade: "consultas" },
        { id: "amb-orto", nome: "Ortopedia", valorMeta: 350, valorAtual: 290, unidade: "consultas" },
        { id: "amb-ped", nome: "Pediatria", valorMeta: 300, valorAtual: 260, unidade: "consultas" },
        { id: "amb-derma", nome: "Dermatologia", valorMeta: 200, valorAtual: 180, unidade: "consultas" },
        { id: "amb-oftal", nome: "Oftalmologia", valorMeta: 150, valorAtual: 130, unidade: "consultas" },
        { id: "amb-uro", nome: "Urologia", valorMeta: 150, valorAtual: 90, unidade: "consultas" },
      ],
      especialidades: ["Clínica Geral", "Cardiologia", "Ginecologia", "Ortopedia", "Pediatria", "Dermatologia", "Oftalmologia", "Urologia"],
    },
    // Cirurgias detalhadas
    cirurgias: {
      eletivas: [
        { id: "ele-hernia", nome: "Herniorrafia", valorMeta: 30, valorAtual: 28, unidade: "cirurgias" },
        { id: "ele-colec", nome: "Colecistectomia", valorMeta: 25, valorAtual: 22, unidade: "cirurgias" },
        { id: "ele-apend", nome: "Apendicectomia Eletiva", valorMeta: 15, valorAtual: 14, unidade: "cirurgias" },
        { id: "ele-tireo", nome: "Tireoidectomia", valorMeta: 10, valorAtual: 8, unidade: "cirurgias" },
        { id: "ele-variz", nome: "Tratamento Varizes", valorMeta: 20, valorAtual: 18, unidade: "cirurgias" },
        { id: "ele-prost", nome: "Próstata (VPP)", valorMeta: 12, valorAtual: 10, unidade: "cirurgias" },
      ],
      emergencias: [
        { id: "eme-apend", nome: "Apendicectomia Emergencial", valorMeta: 20, valorAtual: 18, unidade: "cirurgias" },
        { id: "eme-ostom", nome: "Ostomia Emergencial", valorMeta: 10, valorAtual: 10, unidade: "cirurgias" },
        { id: "eme-traum", nome: "Cirurgia Trauma", valorMeta: 15, valorAtual: 15, unidade: "cirurgias" },
        { id: "eme-ginec", nome: "Ginecologia Emergencial", valorMeta: 5, valorAtual: 7, unidade: "cirurgias" },
      ],
      ortopedia: [
        { id: "orto-frat", nome: "Redução Fraturas", valorMeta: 40, valorAtual: 38, unidade: "cirurgias" },
        { id: "orto-art", nome: "Artroplastia", valorMeta: 15, valorAtual: 12, unidade: "cirurgias" },
        { id: "orto-col", nome: "Cirurgia Coluna", valorMeta: 8, valorAtual: 6, unidade: "cirurgias" },
      ],
      oftalmologia: [
        { id: "ofta-catar", nome: "Catarata", valorMeta: 50, valorAtual: 45, unidade: "cirurgias" },
        { id: "ofta-ptose", nome: "Ptose Palpebral", valorMeta: 15, valorAtual: 12, unidade: "cirurgias" },
        { id: "ofta-pter", nome: "Pterígio", valorMeta: 20, valorAtual: 18, unidade: "cirurgias" },
      ],
    },
    // SADT detalhado
    sadt: {
      raioX: [
        { id: "rx-tora", nome: "Tórax", valorMeta: 400, valorAtual: 350, unidade: "exames" },
        { id: "rx-abdo", nome: "Abdomen", valorMeta: 200, valorAtual: 180, unidade: "exames" },
        { id: "rx-memb", nome: "Membros", valorMeta: 300, valorAtual: 250, unidade: "exames" },
        { id: "rx-cran", nome: "Crânio", valorMeta: 100, valorAtual: 90, unidade: "exames" },
      ],
      ultrassom: [
        { id: "us-abdo", nome: "Abdominal Total", valorMeta: 350, valorAtual: 320, unidade: "exames" },
        { id: "us-obst", nome: "Obstétrico", valorMeta: 280, valorAtual: 240, unidade: "exames" },
        { id: "us-tire", nome: "Tireoide", valorMeta: 120, valorAtual: 100, unidade: "exames" },
        { id: "us-mama", nome: "Mamário", valorMeta: 150, valorAtual: 130, unidade: "exames" },
      ],
      tomografia: [
        { id: "tc-cran", nome: "Crânio", valorMeta: 80, valorAtual: 65, unidade: "exames" },
        { id: "tc-tora", nome: "Tórax", valorMeta: 60, valorAtual: 50, unidade: "exames" },
        { id: "tc-abdo", nome: "Abdomen", valorMeta: 50, valorAtual: 45, unidade: "exames" },
      ],
      laboratorio: [
        { id: "lab-hemo", nome: "Hemograma", valorMeta: 800, valorAtual: 720, unidade: "exames" },
        { id: "lab-bioq", nome: "Bioquímica", valorMeta: 600, valorAtual: 520, unidade: "exames" },
        { id: "lab-urin", nome: "Urina/EAS", valorMeta: 400, valorAtual: 380, unidade: "exames" },
        { id: "lab-horm", nome: "Hormônios", valorMeta: 200, valorAtual: 170, unidade: "exames" },
      ],
      eletrocardiograma: [
        { id: "ecg-norm", nome: "ECG Padrão", valorMeta: 450, valorAtual: 420, unidade: "exames" },
        { id: "ecg-holt", nome: "Holter", valorMeta: 80, valorAtual: 65, unidade: "exames" },
        { id: "ecg-map", nome: "MAPA", valorMeta: 60, valorAtual: 55, unidade: "exames" },
      ],
    },
    // Biópsias detalhadas
    biopsias: {
      papanicolau: { id: "bio-papa", nome: "Papanicolau", valorMeta: 60, valorAtual: 55, unidade: "biopsias" },
      mama: { id: "bio-mama", nome: "Biópsia de Mama", valorMeta: 25, valorAtual: 20, unidade: "biopsias" },
      prostata: { id: "bio-pros", nome: "Biópsia de Próstata", valorMeta: 20, valorAtual: 15, unidade: "biopsias" },
      pele: { id: "bio-pele", nome: "Biópsia de Pele", valorMeta: 40, valorAtual: 35, unidade: "biopsias" },
    },
  },
];

// ============================================================
// SERVIÇOS MÓVEIS - EXPANDIDO
// ============================================================
export interface ManutencaoVeiculo {
  id: string;
  data: string;
  tipo: string;
  descricao: string;
  custo: number;
  status: "Concluída" | "Pendente" | "Em andamento";
  kmAtual: number;
  proximaRevisao: number;
}

export interface VeiculoMovel {
  id: string;
  nome: string;
  tipo: string;
  placa: string;
  ano: number;
  kmAtual: number;
  status: "Operacional" | "Manutenção" | "Inoperante";
  atendimentosMes: number;
  metaMes: number;
  manutencoes: ManutencaoVeiculo[];
}

export interface ServicoMovel {
  id: string;
  sigla: string;
  nome: string;
  descricao: string;
  telefone: string;
  imagem: string;
  veiculos: VeiculoMovel[];
  indicadores: {
    atendimentosMes: number;
    metaTotalMes: number;
    cumprimentoMeta: number;
    comunidadesAtendidas: number;
  };
  secoes: MetaSecao[];
}

export const SERVICOS_MOVEIS: ServicoMovel[] = [
  {
    id: "samu",
    sigla: "SAMU",
    nome: "Serviço de Atendimento Móvel de Urgência",
    descricao: "Atendimento pré-hospitalar de urgência e emergência",
    telefone: "192",
    imagem: "https://images.unsplash.com/photo-1615463867977-c5d459b0469a?w=400&h=300&fit=crop",
    veiculos: [
      {
        id: "samu-01",
        nome: "USA Alfa",
        tipo: "Ambulância Avançada",
        placa: "ABC-1234",
        ano: 2022,
        kmAtual: 45000,
        status: "Operacional",
        atendimentosMes: 180,
        metaMes: 200,
        manutencoes: [
          { id: "m1", data: "2024-01-15", tipo: "Preventiva", descricao: "Troca de óleo e filtros", custo: 800, status: "Concluída", kmAtual: 42000, proximaRevisao: 47000 },
        ],
      },
      {
        id: "samu-02",
        nome: "USA Beta",
        tipo: "Ambulância Avançada",
        placa: "ABC-1235",
        ano: 2023,
        kmAtual: 28000,
        status: "Operacional",
        atendimentosMes: 195,
        metaMes: 200,
        manutencoes: [],
      },
      {
        id: "samu-03",
        nome: "USB Gama",
        tipo: "Ambulância Básica",
        placa: "ABC-1236",
        ano: 2021,
        kmAtual: 62000,
        status: "Manutenção",
        atendimentosMes: 150,
        metaMes: 180,
        manutencoes: [
          { id: "m2", data: "2024-03-10", tipo: "Corretiva", descricao: "Reparo no sistema de ar", custo: 2500, status: "Em andamento", kmAtual: 62000, proximaRevisao: 67000 },
        ],
      },
      {
        id: "samu-moto",
        nome: "Moto Resgate 01",
        tipo: "Moto",
        placa: "XYZ-9999",
        ano: 2023,
        kmAtual: 12000,
        status: "Operacional",
        atendimentosMes: 85,
        metaMes: 100,
        manutencoes: [],
      },
    ],
    indicadores: {
      atendimentosMes: 850,
      metaTotalMes: 900,
      cumprimentoMeta: 94.4,
      comunidadesAtendidas: 25,
    },
    secoes: [
      { id: "chamadas", nome: "Chamadas Atendidas", valorMeta: 900, valorAtual: 850, unidade: "chamadas" },
      { id: "tempo", nome: "Tempo Resposta", valorMeta: 12, valorAtual: 10, unidade: "minutos" },
    ],
  },
  {
    id: "sadt-movel",
    sigla: "SADT",
    nome: "Serviço de Apoio Diagnóstico Móvel",
    descricao: "Exames diagnósticos em comunidades",
    telefone: "(95) 3199-1800",
    imagem: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
    veiculos: [
      {
        id: "sadt-01",
        nome: "Raio-X Móvel",
        tipo: "Unidade de Raio-X",
        placa: "DEF-4567",
        ano: 2022,
        kmAtual: 35000,
        status: "Operacional",
        atendimentosMes: 320,
        metaMes: 350,
        manutencoes: [],
      },
      {
        id: "sadt-02",
        nome: "Mamógrafo Móvel",
        tipo: "Rastreamento",
        placa: "DEF-4568",
        ano: 2021,
        kmAtual: 48000,
        status: "Operacional",
        atendimentosMes: 180,
        metaMes: 200,
        manutencoes: [
          { id: "m3", data: "2024-02-20", tipo: "Preventiva", descricao: "Calibração equipamento", custo: 1500, status: "Concluída", kmAtual: 45000, proximaRevisao: 50000 },
        ],
      },
      {
        id: "sadt-03",
        nome: "US Móvel",
        tipo: "Ultrassom",
        placa: "DEF-4569",
        ano: 2023,
        kmAtual: 22000,
        status: "Operacional",
        atendimentosMes: 250,
        metaMes: 280,
        manutencoes: [],
      },
      {
        id: "sadt-04",
        nome: "ECG Móvel",
        tipo: "Cardiologia",
        placa: "DEF-4570",
        ano: 2022,
        kmAtual: 31000,
        status: "Operacional",
        atendimentosMes: 420,
        metaMes: 450,
        manutencoes: [],
      },
      {
        id: "sadt-05",
        nome: "Lab Móvel",
        tipo: "Laboratório",
        placa: "DEF-4571",
        ano: 2023,
        kmAtual: 18000,
        status: "Operacional",
        atendimentosMes: 380,
        metaMes: 400,
        manutencoes: [],
      },
    ],
    indicadores: {
      atendimentosMes: 1550,
      metaTotalMes: 1680,
      cumprimentoMeta: 92.2,
      comunidadesAtendidas: 25,
    },
    secoes: [
      { id: "raiox", nome: "Raio-X", valorMeta: 350, valorAtual: 320, unidade: "exames" },
      { id: "mamo", nome: "Mamografia", valorMeta: 200, valorAtual: 180, unidade: "exames" },
      { id: "us", nome: "Ultrassom", valorMeta: 280, valorAtual: 250, unidade: "exames" },
      { id: "ecg", nome: "ECG", valorMeta: 450, valorAtual: 420, unidade: "exames" },
      { id: "lab", nome: "Exames Lab", valorMeta: 400, valorAtual: 380, unidade: "exames" },
    ],
  },
  {
    id: "odonto-movel",
    sigla: "ODONTO MÓVEL",
    nome: "Consultório Odontológico Móvel",
    descricao: "Atendimento odontológico em comunidades",
    telefone: "(95) 3199-1801",
    imagem: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
    veiculos: [
      {
        id: "odonto-01",
        nome: "Dentista Móvel 01",
        tipo: "Consultório Odontológico",
        placa: "GHI-7890",
        ano: 2023,
        kmAtual: 15000,
        status: "Operacional",
        atendimentosMes: 280,
        metaMes: 300,
        manutencoes: [],
      },
      {
        id: "odonto-02",
        nome: "Dentista Móvel 02",
        tipo: "Consultório Odontológico",
        placa: "GHI-7891",
        ano: 2022,
        kmAtual: 28000,
        status: "Operacional",
        atendimentosMes: 260,
        metaMes: 300,
        manutencoes: [
          { id: "m4", data: "2024-01-10", tipo: "Preventiva", descricao: "Manutenção equipamentos", custo: 1200, status: "Concluída", kmAtual: 25000, proximaRevisao: 30000 },
        ],
      },
    ],
    indicadores: {
      atendimentosMes: 540,
      metaTotalMes: 600,
      cumprimentoMeta: 90.0,
      comunidadesAtendidas: 15,
    },
    secoes: [
      { id: "consultas", nome: "Consultas", valorMeta: 600, valorAtual: 540, unidade: "consultas" },
      { id: "prevencao", nome: "Fluorização", valorMeta: 400, valorAtual: 380, unidade: "aplicações" },
      { id: "extracoes", nome: "Extrações", valorMeta: 150, valorAtual: 140, unidade: "procedimentos" },
    ],
  },
  {
    id: "farma-movel",
    sigla: "FARMA MÓVEL",
    nome: "Farmácia Móvel",
    descricao: "Dispensação de medicamentos em comunidades",
    telefone: "(95) 3199-1802",
    imagem: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
    veiculos: [
      {
        id: "farma-01",
        nome: "Farmácia Móvel 01",
        tipo: "Unidade Dispensação",
        placa: "JKL-0123",
        ano: 2023,
        kmAtual: 12000,
        status: "Operacional",
        atendimentosMes: 450,
        metaMes: 500,
        manutencoes: [],
      },
    ],
    indicadores: {
      atendimentosMes: 450,
      metaTotalMes: 500,
      cumprimentoMeta: 90.0,
      comunidadesAtendidas: 10,
    },
    secoes: [
      { id: "dispensacao", nome: "Dispensações", valorMeta: 500, valorAtual: 450, unidade: "dispensações" },
      { id: "continuos", nome: "Medicamentos Contínuos", valorMeta: 300, valorAtual: 280, unidade: "entregas" },
    ],
  },
  {
    id: "fisioterapia-movel",
    sigla: "FISIO MÓVEL",
    nome: "Fisioterapia Móvel",
    descricao: "Atendimento fisioterapêutico domiciliar",
    telefone: "(95) 3199-1803",
    imagem: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
    veiculos: [
      {
        id: "fisio-01",
        nome: "Fisio Móvel 01",
        tipo: "Unidade Fisioterapia",
        placa: "MNO-4567",
        ano: 2022,
        kmAtual: 22000,
        status: "Operacional",
        atendimentosMes: 180,
        metaMes: 200,
        manutencoes: [],
      },
    ],
    indicadores: {
      atendimentosMes: 180,
      metaTotalMes: 200,
      cumprimentoMeta: 90.0,
      comunidadesAtendidas: 8,
    },
    secoes: [
      { id: "sessoes", nome: "Sessões Fisio", valorMeta: 200, valorAtual: 180, unidade: "sessões" },
      { id: "avaliacoes", nome: "Avaliações", valorMeta: 100, valorAtual: 90, unidade: "avaliações" },
    ],
  },
];

// ============================================================
// REGISTROS DE AUDITORIA (SIMULAÇÃO)
// ============================================================
export interface RegistroAuditoria {
  id: string;
  unidadeId: string;
  secaoId: string;
  data: string;
  quantidade: number;
  observacao?: string;
  usuario: string;
}

// Simulação de registros
export const REGISTROS_AUDITORIA: RegistroAuditoria[] = [
  { id: "r1", unidadeId: "upa-01", secaoId: "suturas", data: "2024-03-25", quantidade: 15, observacao: "15 suturas realizadas", usuario: "Dr. Silva" },
  { id: "r2", unidadeId: "upa-01", secaoId: "curativos", data: "2024-03-25", quantidade: 28, usuario: "Enf. Maria" },
  { id: "r3", unidadeId: "samu", secaoId: "chamadas", data: "2024-03-25", quantidade: 32, usuario: "Téc. João" },
];

export const adicionarRegistro = (registro: Omit<RegistroAuditoria, "id">): RegistroAuditoria => {
  const novo: RegistroAuditoria = {
    ...registro,
    id: `r${Date.now()}`,
  };
  REGISTROS_AUDITORIA.push(novo);
  return novo;
};

export const getRegistrosPorUnidade = (unidadeId: string): RegistroAuditoria[] => {
  return REGISTROS_AUDITORIA.filter(r => r.unidadeId === unidadeId);
};

export const getRegistrosPorSecao = (unidadeId: string, secaoId: string): RegistroAuditoria[] => {
  return REGISTROS_AUDITORIA.filter(r => r.unidadeId === unidadeId && r.secaoId === secaoId);
};
