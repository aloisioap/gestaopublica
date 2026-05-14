// @ts-ignore - Ignore erros de formato, conteúdo gerado automaticamente
export const PATENTES_PM = [
  { codigo: 'SD', nome: 'Soldado', nivel: 1, cor: 'bg-green-100 text-green-700' },
  { codigo: 'CB', nome: 'Cabo', nivel: 2, cor: 'bg-emerald-100 text-emerald-700' },
  { codigo: '3SGT', nome: '3º Sargento', nivel: 3, cor: 'bg-teal-100 text-teal-700' },
  { codigo: '2SGT', nome: '2º Sargento', nivel: 4, cor: 'bg-cyan-100 text-cyan-700' },
  { codigo: '1SGT', nome: '1º Sargento', nivel: 5, cor: 'bg-sky-100 text-sky-700' },
  { codigo: 'SUBTEN', nome: 'Subtenente', nivel: 6, cor: 'bg-blue-100 text-blue-700' },
  { codigo: 'ASP', nome: 'Aspirante', nivel: 7, cor: 'bg-indigo-100 text-indigo-700' },
  { codigo: '2TEN', nome: '2º Tenente', nivel: 8, cor: 'bg-violet-100 text-violet-700' },
  { codigo: '1TEN', nome: '1º Tenente', nivel: 9, cor: 'bg-purple-100 text-purple-700' },
  { codigo: 'CAP', nome: 'Capitão', nivel: 10, cor: 'bg-fuchsia-100 text-fuchsia-700' },
  { codigo: 'MAJ', nome: 'Major', nivel: 11, cor: 'bg-pink-100 text-pink-700' },
  { codigo: 'TC', nome: 'Tenente-Coronel', nivel: 12, cor: 'bg-rose-100 text-rose-700' },
  { codigo: 'CEL', nome: 'Coronel', nivel: 13, cor: 'bg-red-100 text-red-700' },
] as const;

export const UNIDADES_PM = [
  '1º Batalhão - Centro',
  '2º Batalhão - Zona Norte',
  '3º Batalhão - Zona Sul',
  '4º Batalhão - Zona Leste',
  '5º Batalhão - Zona Oeste',
  'Rondas Ostensivas Tobias de Aguiar (ROTA)',
  'Comando de Policiamento de Trânsito',
  'Polícia Militar Ambiental',
  'Polícia Militar Metropolitana',
  'Comando de Operações Especiais (CPO)',
  'Hospital da Polícia Militar'
] as const;

// Dados simplificados para compatibilidade
export const pacientesMockLista = [
  {
    id: 'PM-CEL-001',
    nome: 'Coronel Roberto Dias Ferreira',
    cpf: '456.789.123-00',
    matricula_pm: 'PM-009012',
    patente: 'Coronel',
    unidade_lotacao: 'Comando de Operações Especiais',
    numero_carteirinha: 'PMSP-009012-2024',
    alergias: ['Nenhuma conhecida'],
    dependente: undefined
  },
  {
    id: 'PM-1TEN-007',
    nome: 'Tenente Ricardo Mendes',
    cpf: '345.678.901-00',
    matricula_pm: 'PM-034556',
    patente: 'Tenente',
    unidade_lotacao: 'Hospital da Polícia Militar',
    numero_carteirinha: 'PMSP-034556-2024',
    alergias: ['Nenhuma'],
    dependente: undefined
  },
  {
    id: 'PM-CAP-005',
    nome: 'Capitão João Carlos Silva',
    cpf: '123.456.789-00',
    matricula_pm: 'PM-001234',
    patente: 'Capitão',
    unidade_lotacao: '1º Batalhão - Centro',
    numero_carteirinha: 'PMSP-001234-2024',
    alergias: ['Dipirona', 'Sulfas'],
    dependente: undefined
  }
];

export const protocolosMockLista = [
  {
    id: 'PROT-001',
    numero_protocolo: 'PMSP-2024-0001',
    paciente_id: 'PM-CEL-001',
    paciente_nome: 'Coronel Roberto Dias Ferreira',
    paciente_patente: 'Coronel',
    status: 'finalizado',
    tipo_atendimento: 'Consulta',
    especialidade: 'Cardiologia',
    prioridade: 'normal',
    valor_total: 320.00,
    valor_glosado: 0,
    data_solicitacao: '2024-01-15'
  },
  {
    id: 'PROT-002',
    numero_protocolo: 'PMSP-2024-0002',
    paciente_id: 'PM-1TEN-008',
    paciente_nome: 'Tenente Mariana Oliveira Santos',
    paciente_patente: 'Tenente',
    status: 'finalizado',
    tipo_atendimento: 'Exame',
    especialidade: 'Pneumologia',
    prioridade: 'urgente',
    valor_total: 430.00,
    valor_glosado: 0,
    data_solicitacao: '2024-02-20'
  }
];

// Stats para página principal
export const statsFunsauPM = {
  atendimentos_dia: 12,
  em_auditoria: 8,
  aprovados: 45,
  glosados: 3,
  valor_processado: 'R$ 158.750,50',
  
  // Compatibilidade
  total_policiais: 45,
  atendimentos_mes: 89,
  cirurgias_realizadas: 12,
  internacoes: 8,
  afastamentos_saude: 15,
  valor_mes: 158750.50,
  exames_realizados: 234,
  consultas: 145,
  emergencias: 23
};

// Exportações adicionais para compatibilidade
export const mockPacientesPM = pacientesMockLista;
export const mockProtocolosPM = protocolosMockLista;
