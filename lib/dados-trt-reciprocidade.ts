// ============================================================
// DADOS DE RECIPROCIDADE - TRT 8ª Região
// Convênios: AUMED, CACI, e outros planos
// ============================================================

export const CONVENIOS_RECIPROCIDADE = [
  { id: "AUMED", nome: "AUMED - Associação dos Magistrados", tipo: "Plano de Saúde", ativo: true },
  { id: "CACI", nome: "CACI - Caixa de Assistência", tipo: "Plano de Saúde", ativo: true },
  { id: "UNIMED", nome: "UNIMED", tipo: "Cooperativa Médica", ativo: true },
  { id: "AMIL", nome: "Amil", tipo: "Plano de Saúde", ativo: true },
  { id: "BRADESCO", nome: "Bradesco Saúde", tipo: "Plano de Saúde", ativo: false },
] as const;

export interface LoteReciprocidade {
  id: string;
  convenioId: string;
  convenioNome: string;
  numeroLote: string;
  dataRecebimento: string;
  dataProcessamento: string;
  quantidadeGuias: number;
  valorTotal: number;
  status: "Pendente" | "Em Auditoria" | "Auditado" | "Pago" | "Glosado";
  arquivoXml: string;
  auditorResponsavel?: string;
}

export interface GuiaReciprocidade {
  id: string;
  loteId: string;
  numeroGuia: string;
  matricula: string;
  cpf: string;
  nomeBeneficiario: string;
  dataNascimento: string;
  dataExecucao: string;
  procedimentoCodigo: string;
  procedimentoDescricao: string;
  valorApresentado: number;
  valorBrasindice: number;
  diferencaPercentual: number;
  status: "Aprovado" | "Glosado" | "Pendente" | "Análise";
  motivoGlosa?: string;
  convenioOrigem: string;
  credenciado_nome: string;
  prestador: string;
  cidade: string;
  especialidade: string;
  tipoAtendimento: "Consulta" | "Exame" | "Cirurgia" | "Internação" | "Emergência";
}

export interface AmostragemBrasindice {
  id: string;
  procedimentoCodigo: string;
  procedimentoDescricao: string;
  valorReferencia: number;
  valorMaximo: number;
  valorMinimo: number;
  margemAceitacao: number; // percentual
  dataAtualizacao: string;
  tipo: "Consulta" | "Exame" | "Cirurgia" | "Internação" | "Procedimento";
}

export const LOTES_RECIPROCIDADE: LoteReciprocidade[] = [
  {
    id: "LOTE-AUMED-001",
    convenioId: "AUMED",
    convenioNome: "AUMED",
    numeroLote: "20240315-AUMED-001",
    dataRecebimento: "2024-03-15",
    dataProcessamento: "2024-03-20",
    quantidadeGuias: 47,
    valorTotal: 15890.45,
    status: "Em Auditoria",
    arquivoXml: "aumed_lote_001_15032024.xml",
    auditorResponsavel: "Auditor Silva",
  },
  {
    id: "LOTE-CACI-001",
    convenioId: "CACI",
    convenioNome: "CACI",
    numeroLote: "20240318-CACI-001",
    dataRecebimento: "2024-03-18",
    dataProcessamento: "2024-03-22",
    quantidadeGuias: 32,
    valorTotal: 23450.80,
    status: "Pendente",
    arquivoXml: "caci_lote_001_18032024.xml",
  },
  {
    id: "LOTE-AUMED-002",
    convenioId: "AUMED",
    convenioNome: "AUMED",
    numeroLote: "20240320-AUMED-002",
    dataRecebimento: "2024-03-20",
    dataProcessamento: "2024-03-25",
    quantidadeGuias: 28,
    valorTotal: 12340.60,
    status: "Auditado",
    arquivoXml: "aumed_lote_002_20032024.xml",
    auditorResponsavel: "Auditor Oliveira",
  },
  {
    id: "LOTE-UNIMED-001",
    convenioId: "UNIMED",
    convenioNome: "UNIMED",
    numeroLote: "20240322-UNIMED-001",
    dataRecebimento: "2024-03-22",
    dataProcessamento: "2024-03-26",
    quantidadeGuias: 15,
    valorTotal: 8750.30,
    status: "Pendente",
    arquivoXml: "unimed_lote_001_22032024.xml",
  },
];

export const GUIAS_RECIPROCIDADE: GuiaReciprocidade[] = [
  // LOTE AUMED 001
  {
    id: "GUIA-AUMED-001-001",
    loteId: "LOTE-AUMED-001",
    numeroGuia: "123456789",
    matricula: "AUMED001",
    cpf: "123.456.789-00",
    nomeBeneficiario: "João Silva Santos",
    dataNascimento: "1985-05-15",
    dataExecucao: "2024-03-10",
    procedimentoCodigo: "10101012",
    procedimentoDescricao: "Consulta Cardiológica",
    valorApresentado: 450.00,
    valorBrasindice: 280.00,
    diferencaPercentual: 60.71,
    status: "Análise",
    convenioOrigem: "AUMED",
    credenciado_nome: "Hospital Metropolitano",
    prestador: "Dr. Carlos Mendes",
    cidade: "Belém",
    especialidade: "Cardiologia",
    tipoAtendimento: "Consulta",
  },
  {
    id: "GUIA-AUMED-001-002",
    loteId: "LOTE-AUMED-001",
    numeroGuia: "123456790",
    matricula: "AUMED002",
    cpf: "987.654.321-00",
    nomeBeneficiario: "Maria Oliveira Lima",
    dataNascimento: "1978-11-22",
    dataExecucao: "2024-03-12",
    procedimentoCodigo: "20101015",
    procedimentoDescricao: "Consulta Ortopédica",
    valorApresentado: 380.00,
    valorBrasindice: 260.00,
    diferencaPercentual: 46.15,
    status: "Glosado",
    motivoGlosa: "Valor acima da referência Brasíndice (limite: 15%)",
    convenioOrigem: "AUMED",
    credenciado_nome: "Clínica Ortopédica",
    prestador: "Dr. Ana Paula Santos",
    cidade: "Belém",
    especialidade: "Ortopedia",
    tipoAtendimento: "Consulta",
  },
  {
    id: "GUIA-AUMED-001-003",
    loteId: "LOTE-AUMED-001",
    numeroGuia: "123456791",
    matricula: "AUMED003",
    cpf: "456.789.123-00",
    nomeBeneficiario: "Pedro Costa Souza",
    dataNascimento: "1990-08-10",
    dataExecucao: "2024-03-08",
    procedimentoCodigo: "30101018",
    procedimentoDescricao: "Cirurgia de Hérnia",
    valorApresentado: 2850.00,
    valorBrasindice: 2450.00,
    diferencaPercentual: 16.33,
    status: "Análise",
    convenioOrigem: "AUMED",
    credenciado_nome: "Hospital São Lucas",
    prestador: "Hospital São Lucas",
    cidade: "Belém",
    especialidade: "Cirurgia Geral",
    tipoAtendimento: "Cirurgia",
  },
  {
    id: "GUIA-AUMED-001-004",
    loteId: "LOTE-AUMED-001",
    numeroGuia: "123456792",
    matricula: "AUMED004",
    cpf: "789.123.456-00",
    nomeBeneficiario: "Ana Beatriz Ferreira",
    dataNascimento: "1982-03-25",
    dataExecucao: "2024-03-11",
    procedimentoCodigo: "40102020",
    procedimentoDescricao: "Ressonância Magnética",
    valorApresentado: 1250.00,
    valorBrasindice: 890.00,
    diferencaPercentual: 40.45,
    status: "Glosado",
    motivoGlosa: "Valor divergente da tabela referência",
    convenioOrigem: "AUMED",
    credenciado_nome: "Clínica Imagem",
    prestador: "Clínica Imagem",
    cidade: "Belém",
    especialidade: "Radiologia",
    tipoAtendimento: "Exame",
  },
  {
    id: "GUIA-AUMED-001-005",
    loteId: "LOTE-AUMED-001",
    numeroGuia: "123456793",
    matricula: "AUMED005",
    cpf: "321.654.987-00",
    nomeBeneficiario: "Roberto Almeida",
    dataNascimento: "1975-09-18",
    dataExecucao: "2024-03-09",
    procedimentoCodigo: "10103015",
    procedimentoDescricao: "Consulta Clínica Geral",
    valorApresentado: 250.00,
    valorBrasindice: 230.00,
    diferencaPercentual: 8.70,
    status: "Aprovado",
    convenioOrigem: "AUMED",
    credenciado_nome: "UBS Central",
    prestador: "Dr. José Ricardo",
    cidade: "Belém",
    especialidade: "Clínica Médica",
    tipoAtendimento: "Consulta",
  },
  // LOTE CACI 001
  {
    id: "GUIA-CACI-001-001",
    loteId: "LOTE-CACI-001",
    numeroGuia: "987654321",
    matricula: "CACI001",
    cpf: "654.321.987-00",
    nomeBeneficiario: "Fernanda Lima Silva",
    dataNascimento: "1988-12-05",
    dataExecucao: "2024-03-14",
    procedimentoCodigo: "50101025",
    procedimentoDescricao: "Internação Clínica",
    valorApresentado: 3200.00,
    valorBrasindice: 2850.00,
    diferencaPercentual: 12.28,
    status: "Análise",
    convenioOrigem: "CACI",
    credenciado_nome: "Hospital Metropolitano",
    prestador: "Hospital Metropolitano",
    cidade: "Belém",
    especialidade: "Clínica Médica",
    tipoAtendimento: "Internação",
  },
  {
    id: "GUIA-CACI-001-002",
    loteId: "LOTE-CACI-001",
    numeroGuia: "987654322",
    matricula: "CACI002",
    cpf: "147.258.369-00",
    nomeBeneficiario: "Carlos Eduardo Santos",
    dataNascimento: "1968-04-30",
    dataExecucao: "2024-03-13",
    procedimentoCodigo: "20105012",
    procedimentoDescricao: "Artroscopia",
    valorApresentado: 4500.00,
    valorBrasindice: 3800.00,
    diferencaPercentual: 18.42,
    status: "Glosado",
    motivoGlosa: "Valor acima do limite contratual",
    convenioOrigem: "CACI",
    credenciado_nome: "Hospital Ortopédico",
    prestador: "Hospital Ortopédico",
    cidade: "Belém",
    especialidade: "Ortopedia",
    tipoAtendimento: "Cirurgia",
  },
];

export const TABELA_BRASINDICE: AmostragemBrasindice[] = [
  { id: "BRAS-001", procedimentoCodigo: "10101012", procedimentoDescricao: "Consulta Cardiológica", valorReferencia: 280.00, valorMaximo: 322.00, valorMinimo: 238.00, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Consulta" },
  { id: "BRAS-002", procedimentoCodigo: "20101015", procedimentoDescricao: "Consulta Ortopédica", valorReferencia: 260.00, valorMaximo: 299.00, valorMinimo: 221.00, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Consulta" },
  { id: "BRAS-003", procedimentoCodigo: "30101018", procedimentoDescricao: "Cirurgia de Hérnia", valorReferencia: 2450.00, valorMaximo: 2817.50, valorMinimo: 2082.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Cirurgia" },
  { id: "BRAS-004", procedimentoCodigo: "40102020", procedimentoDescricao: "Ressonância Magnética", valorReferencia: 890.00, valorMaximo: 1023.50, valorMinimo: 756.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Exame" },
  { id: "BRAS-005", procedimentoCodigo: "10103015", procedimentoDescricao: "Consulta Clínica Geral", valorReferencia: 230.00, valorMaximo: 264.50, valorMinimo: 195.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Consulta" },
  { id: "BRAS-006", procedimentoCodigo: "50101025", procedimentoDescricao: "Internação Clínica (diária)", valorReferencia: 2850.00, valorMaximo: 3277.50, valorMinimo: 2422.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Internação" },
  { id: "BRAS-007", procedimentoCodigo: "20105012", procedimentoDescricao: "Artroscopia", valorReferencia: 3800.00, valorMaximo: 4370.00, valorMinimo: 3230.00, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Cirurgia" },
  { id: "BRAS-008", procedimentoCodigo: "10105020", procedimentoDescricao: "Consulta Dermatológica", valorReferencia: 270.00, valorMaximo: 310.50, valorMinimo: 229.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Consulta" },
  { id: "BRAS-009", procedimentoCodigo: "40103025", procedimentoDescricao: "Tomografia Computadorizada", valorReferencia: 450.00, valorMaximo: 517.50, valorMinimo: 382.50, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Exame" },
  { id: "BRAS-010", procedimentoCodigo: "30102022", procedimentoDescricao: "Colecistectomia", valorReferencia: 3200.00, valorMaximo: 3680.00, valorMinimo: 2720.00, margemAceitacao: 15, dataAtualizacao: "2024-01-01", tipo: "Cirurgia" },
];

// Indicadores de análise
export interface IndicadorReciprocidade {
  convenioId: string;
  convenioNome: string;
  totalLotes: number;
  totalGuias: number;
  valorTotal: number;
  valorGlosado: number;
  valorAprovado: number;
  percentualGlosa: number;
  guiasAcimaBrasindice: number;
  procedimentosMaisUtilizados: { nome: string; quantidade: number; valor: number }[];
  cidadesMaisAtendidas: { nome: string; quantidade: number }[];
  evolucaoMensal: { mes: string; valor: number; glosas: number }[];
}

export const INDICADORES_RECIPROCIDADE: IndicadorReciprocidade[] = [
  {
    convenioId: "AUMED",
    convenioNome: "AUMED",
    totalLotes: 12,
    totalGuias: 487,
    valorTotal: 145890.50,
    valorGlosado: 23450.80,
    valorAprovado: 122439.70,
    percentualGlosa: 16.08,
    guiasAcimaBrasindice: 89,
    procedimentosMaisUtilizados: [
      { nome: "Consulta Cardiológica", quantidade: 45, valor: 12600.00 },
      { nome: "Ressonância Magnética", quantidade: 32, valor: 28480.00 },
      { nome: "Cirurgia de Hérnia", quantidade: 18, valor: 51300.00 },
    ],
    cidadesMaisAtendidas: [
      { nome: "Belém", quantidade: 320 },
      { nome: "Ananindeua", quantidade: 98 },
      { nome: "Marituba", quantidade: 45 },
    ],
    evolucaoMensal: [
      { mes: "Jan/2024", valor: 45200.00, glosas: 7200.00 },
      { mes: "Fev/2024", valor: 48900.00, glosas: 8100.00 },
      { mes: "Mar/2024", valor: 51890.50, glosas: 8150.80 },
    ],
  },
  {
    convenioId: "CACI",
    convenioNome: "CACI",
    totalLotes: 8,
    totalGuias: 256,
    valorTotal: 98750.30,
    valorGlosado: 15420.50,
    valorAprovado: 83329.80,
    percentualGlosa: 15.62,
    guiasAcimaBrasindice: 42,
    procedimentosMaisUtilizados: [
      { nome: "Internação Clínica", quantidade: 28, valor: 79800.00 },
      { nome: "Artroscopia", quantidade: 15, valor: 57000.00 },
      { nome: "Consulta Ortopédica", quantidade: 38, valor: 9880.00 },
    ],
    cidadesMaisAtendidas: [
      { nome: "Belém", quantidade: 180 },
      { nome: "Santarém", quantidade: 42 },
      { nome: "Marabá", quantidade: 34 },
    ],
    evolucaoMensal: [
      { mes: "Jan/2024", valor: 31200.00, glosas: 4800.00 },
      { mes: "Fev/2024", valor: 29800.00, glosas: 5200.00 },
      { mes: "Mar/2024", valor: 37750.30, glosas: 5420.50 },
    ],
  },
];

// Funções utilitárias
export const buscarLotes = (
  filtros: {
    convenio?: string;
    dataInicio?: string;
    dataFim?: string;
    status?: string;
    numeroLote?: string;
  }
) => {
  return LOTES_RECIPROCIDADE.filter((lote) => {
    if (filtros.convenio && filtros.convenio !== "todos" && lote.convenioId !== filtros.convenio) return false;
    if (filtros.status && filtros.status !== "todos" && lote.status !== filtros.status) return false;
    if (filtros.numeroLote && !lote.numeroLote.toLowerCase().includes(filtros.numeroLote.toLowerCase())) return false;
    if (filtros.dataInicio && lote.dataRecebimento < filtros.dataInicio) return false;
    if (filtros.dataFim && lote.dataRecebimento > filtros.dataFim) return false;
    return true;
  });
};

export const buscarGuias = (
  filtros: {
    loteId?: string;
    matricula?: string;
    cpf?: string;
    nome?: string;
    dataExecucao?: string;
    status?: string;
  }
) => {
  return GUIAS_RECIPROCIDADE.filter((guia) => {
    if (filtros.loteId && filtros.loteId !== "todos" && guia.loteId !== filtros.loteId) return false;
    if (filtros.status && filtros.status !== "todos" && guia.status !== filtros.status) return false;
    if (filtros.matricula && !guia.matricula.toLowerCase().includes(filtros.matricula.toLowerCase())) return false;
    if (filtros.cpf && !guia.cpf.includes(filtros.cpf)) return false;
    if (filtros.nome && !guia.nomeBeneficiario.toLowerCase().includes(filtros.nome.toLowerCase())) return false;
    if (filtros.dataExecucao && guia.dataExecucao !== filtros.dataExecucao) return false;
    return true;
  });
};

export const calcularDiferencaBrasindice = (valorApresentado: number, valorBrasindice: number) => {
  const diferenca = valorApresentado - valorBrasindice;
  const percentual = ((diferenca / valorBrasindice) * 100);
  return {
    diferencaValor: diferenca,
    diferencaPercentual: percentual,
    status: percentual > 15 ? "Acima" : percentual < -15 ? "Abaixo" : "Dentro",
  };
};
