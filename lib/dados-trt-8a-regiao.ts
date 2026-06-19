// ============================================================
// DADOS MOCK - TRT 8ª REGIÃO (PARÁ E AMAPÁ)
// Sistema de Gestão de Saúde e Faturamento
// ============================================================

// Cores oficiais TRT 8ª Região (Pará e Amapá)
export const CORES_TRT = {
  primaria: '#1E3A5F',     // Azul Marinho (Corporativo)
  secundaria: '#C8A415',   // Dourado (Justiça)
  terciaria: '#00796B',    // Verde Amazônia
  destaque: '#D84315',     // Laranja/Terra
  fundo: '#F5F5F5',        // Cinza claro
  texto: '#212121',        // Quase preto
  sucesso: '#2E7D32',      // Verde
  alerta: '#F9A825',       // Amarelo
  erro: '#C62828',         // Vermelho
  info: '#1565C0',         // Azul
} as const;

// Logos e identidade visual
export const IDENTIDADE_TRT = {
  nome: 'TRT 8ª Região',
  subtitulo: 'Tribunal Regional do Trabalho do Pará e Amapá',
  lema: 'PAS / TRT - 8ª Região',
  brasao: '/images/trt8-brasao.png',
  fundo: '/images/trt8-fundo-amazonia.jpg',
} as const;

// Estados da jurisdição
export const ESTADOS_JURISDICAO = [
  { sigla: 'PA', nome: 'Pará', capital: 'Belém', comarcas: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Castanhal'] },
  { sigla: 'AP', nome: 'Amapá', capital: 'Macapá', comarcas: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque'] },
] as const;

// Servidores TRT (15 servidores)
export const SERVIDORES_TRT = [
  {
    id: 'TRT0001',
    matricula: 'TRT0001',
    nome: 'Maria Santos Oliveira',
    cpf: '123.456.789-00',
    email: 'maria.oliveira@trt8.jus.br',
    telefone: '(91) 99999-1111',
    cargo: 'Analista Judiciário',
    lotacao: '1ª Vara do Trabalho',
    vara: '1ª Vara',
    comarca: 'Belém',
    estado: 'PA' as const,
    tipo_sanguineo: 'O+',
    alergias: ['Nenhuma'],
    comorbidades: ['Hipertensão'],
    carteirinha_saude: 'TRT8-0001-2024',
    qr_code: 'TRT8-QR-0001',
    foto_url: '/fotos/servidor-0001.jpg',
    ativo: true,
  },
  {
    id: 'TRT0002',
    matricula: 'TRT0002',
    nome: 'João Carlos Silva',
    cpf: '987.654.321-00',
    email: 'joao.silva@trt8.jus.br',
    telefone: '(91) 99999-2222',
    cargo: 'Técnico Judiciário',
    lotacao: '2ª Vara do Trabalho',
    vara: '2ª Vara',
    comarca: 'Belém',
    estado: 'PA' as const,
    tipo_sanguineo: 'A+',
    alergias: ['Dipirona'],
    comorbidades: [],
    carteirinha_saude: 'TRT8-0002-2024',
    qr_code: 'TRT8-QR-0002',
    foto_url: '/fotos/servidor-0002.jpg',
    ativo: true,
  },
  {
    id: 'TRT0003',
    matricula: 'TRT0003',
    nome: 'Ana Paula Costa',
    cpf: '456.789.123-00',
    email: 'ana.costa@trt8.jus.br',
    telefone: '(96) 99999-3333',
    cargo: 'Analista Judiciário',
    lotacao: '1ª Vara do Trabalho',
    vara: '1ª Vara',
    comarca: 'Macapá',
    estado: 'AP' as const,
    tipo_sanguineo: 'B+',
    alergias: ['Nenhuma'],
    comorbidades: ['Asma'],
    carteirinha_saude: 'TRT8-0003-2024',
    qr_code: 'TRT8-QR-0003',
    foto_url: '/fotos/servidor-0003.jpg',
    ativo: true,
  },
  {
    id: 'TRT0004',
    matricula: 'TRT0004',
    nome: 'Pedro Henrique Lima',
    cpf: '789.123.456-00',
    email: 'pedro.lima@trt8.jus.br',
    telefone: '(91) 99999-4444',
    cargo: 'Juiz do Trabalho',
    lotacao: '3ª Vara do Trabalho',
    vara: '3ª Vara',
    comarca: 'Belém',
    estado: 'PA' as const,
    tipo_sanguineo: 'AB+',
    alergias: ['Nenhuma'],
    comorbidades: [],
    carteirinha_saude: 'TRT8-0004-2024',
    qr_code: 'TRT8-QR-0004',
    foto_url: '/fotos/servidor-0004.jpg',
    ativo: true,
  },
  {
    id: 'TRT0005',
    matricula: 'TRT0005',
    nome: 'Fernanda Souza',
    cpf: '321.654.987-00',
    email: 'fernanda.souza@trt8.jus.br',
    telefone: '(91) 99999-5555',
    cargo: 'Diretora de Secretaria',
    lotacao: 'Secretaria Geral',
    vara: 'N/A',
    comarca: 'Belém',
    estado: 'PA' as const,
    tipo_sanguineo: 'O-',
    alergias: ['Penicilina'],
    comorbidades: ['Diabetes'],
    carteirinha_saude: 'TRT8-0005-2024',
    qr_code: 'TRT8-QR-0005',
    foto_url: '/fotos/servidor-0005.jpg',
    ativo: true,
  },
] as const;

// Credenciados (Hospitais e Clínicas)
export const CREDENCIADOS_TRT = [
  {
    id: 'CRED-001',
    cnpj: '12.345.678/0001-90',
    razao_social: 'Hospital Metropolitano S.A.',
    nome_fantasia: 'Hospital Metropolitano',
    endereco: 'Av. Almirante Barroso, 1000',
    bairro: 'Campina',
    cidade: 'Belém',
    estado: 'PA' as const,
    cep: '66010-020',
    telefone: '(91) 3210-1000',
    email: 'contato@hospitalmetro.com.br',
    tipo: 'Hospital' as const,
    especialidades: ['Clínica Médica', 'Cirurgia Geral', 'Ortopedia', 'Cardiologia', 'UTI'],
    numero_contrato: 'CONT-2024-001',
    data_inicio: '2024-01-01',
    avaliacao: 4.5,
    ativo: true,
  },
  {
    id: 'CRED-002',
    cnpj: '23.456.789/0001-01',
    razao_social: 'Clínica Santa Maria Ltda.',
    nome_fantasia: 'Clínica Santa Maria',
    endereco: 'Rua dos Mundurucus, 2500',
    bairro: 'Cidade Velha',
    cidade: 'Belém',
    estado: 'PA' as const,
    cep: '66020-050',
    telefone: '(91) 3222-2000',
    email: 'atendimento@santamaria.com.br',
    tipo: 'Clínica' as const,
    especialidades: ['Ortopedia', 'Fisioterapia', 'Radiologia'],
    numero_contrato: 'CONT-2024-002',
    data_inicio: '2024-01-15',
    avaliacao: 4.2,
    ativo: true,
  },
  {
    id: 'CRED-003',
    cnpj: '34.567.890/0001-12',
    razao_social: 'Hospital de Clínicas do Amapá',
    nome_fantasia: 'HCA',
    endereco: 'Av. FAB, 100',
    bairro: 'Centro',
    cidade: 'Macapá',
    estado: 'AP' as const,
    cep: '68900-073',
    telefone: '(96) 3210-3000',
    email: 'hca@hospital.ap.gov.br',
    tipo: 'Hospital' as const,
    especialidades: ['Clínica Médica', 'Cirurgia', 'Pediatria', 'Ginecologia'],
    numero_contrato: 'CONT-2024-003',
    data_inicio: '2024-02-01',
    avaliacao: 4.0,
    ativo: true,
  },
  {
    id: 'CRED-004',
    cnpj: '45.678.901/0001-23',
    razao_social: 'Laboratório Einstein S.A.',
    nome_fantasia: 'Lab Einstein',
    endereco: 'Av. Magalhães Barata, 800',
    bairro: 'São Brás',
    cidade: 'Belém',
    estado: 'PA' as const,
    cep: '66060-160',
    telefone: '(91) 3233-4000',
    email: 'lab@einstein.com.br',
    tipo: 'Laboratório' as const,
    especialidades: ['Análises Clínicas', 'Imagem', 'Ultrassonografia'],
    numero_contrato: 'CONT-2024-004',
    data_inicio: '2024-01-10',
    avaliacao: 4.7,
    ativo: true,
  },
  {
    id: 'CRED-005',
    cnpj: '56.789.012/0001-34',
    razao_social: 'Clínica São Lucas',
    nome_fantasia: 'São Lucas',
    endereco: 'Travessa 14 de Março, 500',
    bairro: 'Nazaré',
    cidade: 'Belém',
    estado: 'PA' as const,
    cep: '66035-200',
    telefone: '(91) 3244-5000',
    email: 'contato@saolucas.com.br',
    tipo: 'Clínica' as const,
    especialidades: ['Cardiologia', 'Neurologia', 'Endocrinologia'],
    numero_contrato: 'CONT-2024-005',
    data_inicio: '2024-02-15',
    avaliacao: 4.3,
    ativo: true,
  },
] as const;

// Procedimentos (20 procedimentos)
export const PROCEDIMENTOS_TRT = [
  {
    id: 'PROC-001',
    matricula_usuario: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    credenciado_id: 'CRED-001',
    nome_credenciado: 'Hospital Metropolitano',
    tipo: 'Consulta' as const,
    especialidade: 'Cardiologia',
    cid: 'I10',
    diagnostico: 'Hipertensão Arterial',
    data_solicitacao: '2024-01-10',
    data_agendamento: '2024-01-15',
    data_execucao: '2024-01-15',
    valor_total: 350.00,
    valor_glosado: 0,
    valor_aprovado: 350.00,
    status: 'Pago' as const,
    validado_qr: true,
    validado_whatsapp: false,
  },
  {
    id: 'PROC-002',
    matricula_usuario: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    credenciado_id: 'CRED-004',
    nome_credenciado: 'Lab Einstein',
    tipo: 'Exame' as const,
    especialidade: 'Laboratorial',
    cid: '',
    diagnostico: 'Check-up anual',
    data_solicitacao: '2024-02-05',
    data_agendamento: '2024-02-10',
    data_execucao: '2024-02-10',
    valor_total: 450.00,
    valor_glosado: 0,
    valor_aprovado: 450.00,
    status: 'Faturado' as const,
    validado_qr: true,
    validado_whatsapp: true,
  },
  {
    id: 'PROC-003',
    matricula_usuario: 'TRT0002',
    usuario_nome: 'João Carlos Silva',
    credenciado_id: 'CRED-001',
    nome_credenciado: 'Hospital Metropolitano',
    tipo: 'Internação' as const,
    especialidade: 'Clínica Médica',
    cid: 'J18',
    diagnostico: 'Pneumonia',
    data_solicitacao: '2024-03-01',
    data_agendamento: '2024-03-02',
    data_execucao: '2024-03-05',
    valor_total: 8500.00,
    valor_glosado: 300.00,
    valor_aprovado: 8200.00,
    status: 'Auditado' as const,
    validado_qr: true,
    validado_whatsapp: false,
  },
  {
    id: 'PROC-004',
    matricula_usuario: 'TRT0003',
    usuario_nome: 'Ana Paula Costa',
    credenciado_id: 'CRED-003',
    nome_credenciado: 'Hospital de Clínicas do Amapá',
    tipo: 'Cirurgia' as const,
    especialidade: 'Ortopedia',
    cid: 'M23',
    diagnostico: 'Lesão de menisco',
    data_solicitacao: '2024-03-15',
    data_agendamento: '2024-03-20',
    data_execucao: '2024-03-20',
    valor_total: 12500.00,
    valor_glosado: 0,
    valor_aprovado: 12500.00,
    status: 'Executado' as const,
    validado_qr: true,
    validado_whatsapp: true,
  },
  {
    id: 'PROC-005',
    matricula_usuario: 'TRT0004',
    usuario_nome: 'Pedro Henrique Lima',
    credenciado_id: 'CRED-005',
    nome_credenciado: 'Clínica São Lucas',
    tipo: 'Consulta' as const,
    especialidade: 'Neurologia',
    cid: 'G43',
    diagnostico: 'Enxaqueca crônica',
    data_solicitacao: '2024-03-25',
    data_agendamento: '2024-03-28',
    data_execucao: null,
    valor_total: 400.00,
    valor_glosado: 0,
    valor_aprovado: 0,
    status: 'Validado' as const,
    validado_qr: true,
    validado_whatsapp: false,
  },
] as const;

// Itens/Insumos de Faturas (extraídos do XML TISS)
export const ITENS_FATURA_TRT = [
  // FAT-001 - Consulta Cardiológica
  {
    id: 'ITEM-001',
    fatura_id: 'FAT-001',
    codigo: '10101012',
    descricao: 'Consulta Cardiológica',
    tipo: 'Procedimento' as const,
    quantidade: 1,
    valor_unitario: 250.00,
    valor_total: 250.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-002',
    fatura_id: 'FAT-001',
    codigo: '10101020',
    descricao: 'Eletrocardiograma',
    tipo: 'Procedimento' as const,
    quantidade: 1,
    valor_unitario: 80.00,
    valor_total: 80.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-003',
    fatura_id: 'FAT-001',
    codigo: 'INS-001',
    descricao: 'Agulha Descartável 40x12',
    tipo: 'Insumo' as const,
    quantidade: 2,
    valor_unitario: 2.50,
    valor_total: 5.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-004',
    fatura_id: 'FAT-001',
    codigo: 'INS-002',
    descricao: 'Seringa Descartável 10ml',
    tipo: 'Insumo' as const,
    quantidade: 2,
    valor_unitario: 3.00,
    valor_total: 6.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-005',
    fatura_id: 'FAT-001',
    codigo: 'MAT-001',
    descricao: 'Eletrodo ECG Descartável',
    tipo: 'Material' as const,
    quantidade: 10,
    valor_unitario: 0.90,
    valor_total: 9.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  // FAT-002 - Exames Laboratoriais
  {
    id: 'ITEM-006',
    fatura_id: 'FAT-002',
    codigo: '40301380',
    descricao: 'Hemograma Completo',
    tipo: 'Exame' as const,
    quantidade: 1,
    valor_unitario: 45.00,
    valor_total: 45.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-007',
    fatura_id: 'FAT-002',
    codigo: '40302360',
    descricao: 'Glicemia de Jejum',
    tipo: 'Exame' as const,
    quantidade: 1,
    valor_unitario: 25.00,
    valor_total: 25.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-008',
    fatura_id: 'FAT-002',
    codigo: '40303340',
    descricao: 'Colesterol Total',
    tipo: 'Exame' as const,
    quantidade: 1,
    valor_unitario: 35.00,
    valor_total: 35.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-009',
    fatura_id: 'FAT-002',
    codigo: 'INS-003',
    descricao: 'Tubo Vacuntainer EDTA',
    tipo: 'Insumo' as const,
    quantidade: 3,
    valor_unitario: 2.80,
    valor_total: 8.40,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-010',
    fatura_id: 'FAT-002',
    codigo: 'INS-004',
    descricao: 'Luva de Procedimento',
    tipo: 'Insumo' as const,
    quantidade: 5,
    valor_unitario: 1.20,
    valor_total: 6.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  // FAT-003 - Internação (com glosas)
  {
    id: 'ITEM-011',
    fatura_id: 'FAT-003',
    codigo: '50101010',
    descricao: 'Internação Clínica - Dia',
    tipo: 'Procedimento' as const,
    quantidade: 3,
    valor_unitario: 850.00,
    valor_total: 2550.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-012',
    fatura_id: 'FAT-003',
    codigo: '60101015',
    descricao: 'Antibiótico EV (Ceftriaxona)',
    tipo: 'Medicamento' as const,
    quantidade: 6,
    valor_unitario: 35.00,
    valor_total: 210.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-013',
    fatura_id: 'FAT-003',
    codigo: '70101010',
    descricao: 'Oxigenioterapia',
    tipo: 'Procedimento' as const,
    quantidade: 3,
    valor_unitario: 150.00,
    valor_total: 450.00,
    origem: 'XML' as const,
    status_auditoria: 'Glosado' as const,
    motivo_glosa: 'Quantidade excedente - autorizado: 2 dias',
  },
  {
    id: 'ITEM-014',
    fatura_id: 'FAT-003',
    codigo: 'INS-005',
    descricao: 'Soro Fisiológico 500ml',
    tipo: 'Insumo' as const,
    quantidade: 10,
    valor_unitario: 15.00,
    valor_total: 150.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-015',
    fatura_id: 'FAT-003',
    codigo: 'MAT-002',
    descricao: 'Cateter Intravenoso 20G',
    tipo: 'Material' as const,
    quantidade: 5,
    valor_unitario: 12.00,
    valor_total: 60.00,
    origem: 'XML' as const,
    status_auditoria: 'Aprovado' as const,
    motivo_glosa: null,
  },
  {
    id: 'ITEM-016',
    fatura_id: 'FAT-003',
    codigo: 'EXT-001',
    descricao: 'Holter 24h (Não Autorizado)',
    tipo: 'Procedimento' as const,
    quantidade: 1,
    valor_unitario: 350.00,
    valor_total: 350.00,
    origem: 'Inserido Manualmente' as const,
    status_auditoria: 'Glosado' as const,
    motivo_glosa: 'Procedimento não previsto na guia de autorização',
  },
] as const;

// Notificações para Servidores
export const NOTIFICACOES_TRT = [
  {
    id: 'NOTIF-001',
    matricula: 'TRT0001',
    titulo: 'Agendamento Confirmado',
    mensagem: 'Sua consulta cardiológica foi agendada para 15/01/2024 às 14h.',
    tipo: 'agendamento' as const,
    data: '2024-01-10',
    lida: false,
  },
  {
    id: 'NOTIF-002',
    matricula: 'TRT0001',
    titulo: 'Exame Disponível',
    mensagem: 'O resultado do seu check-up laboratorial está disponível.',
    tipo: 'resultado' as const,
    data: '2024-02-12',
    lida: false,
  },
  {
    id: 'NOTIF-003',
    matricula: 'TRT0001',
    titulo: 'Autorização Pendente',
    mensagem: 'Solicitação de ecocardiograma aguardando aprovação.',
    tipo: 'autorizacao' as const,
    data: '2024-01-08',
    lida: true,
  },
  {
    id: 'NOTIF-004',
    matricula: 'TRT0002',
    titulo: 'Internação Registrada',
    mensagem: 'Alta hospitalar registrada em 05/03/2024.',
    tipo: 'internacao' as const,
    data: '2024-03-06',
    lida: false,
  },
] as const;

// Faturas
export const FATURAS_TRT = [
  {
    id: 'FAT-001',
    procedimento_id: 'PROC-001',
    credenciado_id: 'CRED-001',
    nome_credenciado: 'Hospital Metropolitano',
    numero_fatura: 'FAT-2024-001',
    mes_referencia: 1,
    ano_referencia: 2024,
    xml_arquivo: 'xml_001.tiss',
    pdf_arquivo: 'consulta_cardio_001.pdf',
    pdf_categoria: 'Consultas' as const,
    valor_bruto: 350.00,
    valor_liquido: 350.00,
    status: 'Paga' as const,
    auditor_id: null,
    observacoes_auditoria: null,
    motivo_glosa: null,
  },
  {
    id: 'FAT-002',
    procedimento_id: 'PROC-002',
    credenciado_id: 'CRED-004',
    nome_credenciado: 'Lab Einstein',
    numero_fatura: 'FAT-2024-002',
    mes_referencia: 2,
    ano_referencia: 2024,
    xml_arquivo: 'xml_002.tiss',
    pdf_arquivo: 'exames_checkup_002.pdf',
    pdf_categoria: 'Exames' as const,
    valor_bruto: 450.00,
    valor_liquido: 450.00,
    status: 'Auditada' as const,
    auditor_id: 'AUDITOR-001',
    observacoes_auditoria: 'Documentação completa',
    motivo_glosa: null,
  },
  {
    id: 'FAT-003',
    procedimento_id: 'PROC-003',
    credenciado_id: 'CRED-001',
    nome_credenciado: 'Hospital Metropolitano',
    numero_fatura: 'FAT-2024-003',
    mes_referencia: 3,
    ano_referencia: 2024,
    xml_arquivo: 'xml_003.tiss',
    pdf_arquivo: 'internacao_pneumonia_003.pdf',
    pdf_categoria: 'Internações' as const,
    valor_bruto: 8500.00,
    valor_liquido: 8200.00,
    status: 'Glosada' as const,
    auditor_id: 'AUDITOR-001',
    observacoes_auditoria: 'Glosa parcial aplicada',
    motivo_glosa: 'Procedimento não coberto 100%',
  },
] as const;

// Modelos de laudos médicos
export const MODELOS_LAUDOS_TRT = {
  consulta_cardiologia: {
    especialidade: 'Cardiologia',
    medico: 'Dr. Roberto Fernandes Silva - CRM/PA 4589',
    crm: 'CRM/PA 4589',
    conteudo: `QUEIXA PRINCIPAL:
Paciente refere dor torácica em aperto ocasional, não relacionada a esforço físico.

HISTÓRIA DA DOENÇA ATUAL:
Dor torácica de características atípicas, sem irradiação, com duração de poucos minutos e alívio espontâneo.

ANTECEDENTES:
- Hipertensão arterial sistêmica há 5 anos
- Dislipidemia em tratamento
- Nega diabetes
- Cirurgia prévia: apendicectomia

EXAME FÍSICO:
PA: 138/88 mmHg | FC: 72 bpm
Peso: 68kg | Altura: 1,65m | IMC: 25,0
Ausculta cardíaca: ritmos regulares, sem sopros
Pulmões: murmúrio vesicular presente, sem ruídos adventícios

CONDUTA:
1. Manter medicação atual: Losartana 50mg 1x/dia
2. Solicitar ECG e ECO para avaliação
3. Retorno em 3 meses ou ante intercorrência
4. Orientações sobre estilo de vida

OBSERVAÇÕES:
Paciente estável, hipertenso controlado. Necessário monitoramento periódico.`
  },
  exame_laboratorial: {
    especialidade: 'Laboratorial',
    laboratorio: 'Laboratório Einstein Belém',
    cnes: 'CNES 1234567',
    conteudo: `RESULTADO DE EXAMES LABORATORIAIS

HEMOGRAMA COMPLETO:
- Hemácias: 4,8 milhões/mm³ (VR: 4,0-5,4)
- Hemoglobina: 14,2 g/dL (VR: 12,0-16,0)
- Hematócrito: 42% (VR: 36-48)
- Leucócitos: 6.200/mm³ (VR: 4.000-10.000)
- Plaquetas: 280.000/mm³ (VR: 150.000-450.000)

PERFIL LIPÍDICO:
- Colesterol Total: 218 mg/dL (Desejável: <200)
- HDL: 48 mg/dL (Desejável: >40)
- LDL: 162 mg/dL (Desejável: <130) - ELEVADO
- Triglicerídeos: 145 mg/dL (Desejável: <150)
- VLDL: 29 mg/dL

FUNÇÃO RENAL:
- Creatinina: 0,9 mg/dL (VR: 0,6-1,2)
- Ureia: 32 mg/dL (VR: 15-45)

FUNÇÃO HEPÁTICA:
- TGO: 28 U/L (VR: <50)
- TGP: 31 U/L (VR: <50)
- Gama-GT: 35 U/L (VR: <55)

GLICEMIA:
- Glicemia de Jejum: 98 mg/dL (VR: 70-99)
- Hemoglobina Glicada: 5,4% (VR: <5,7)

INTERPRETAÇÃO:
Paciente apresenta LDL levemente elevado. Recomendada alteração na dieta e controle periódico. Demais parâmetros dentro da normalidade.`
  },
  raio_x: {
    especialidade: 'Radiologia',
    medico: 'Dr. Carlos Mendes - CRM/PA 7823',
    conteudo: `RAIO X DE TÓRAX (PA E PERFIL)

TECNICA:
Projeção PA e perfil esquerdo

LAUDO:
Arcos costais preservados. 
Campos pulmonares livres, sem infiltrados ou condensações.
Seio costofrênico livre bilateralmente.
Mediastino sem alargamento.
Silhueta cardíaca com contornos normais.
Cúpulas diafragmáticas bem posicionadas.

IMPRESSÃO DIAGNÓSTICA:
Raio X de tórax sem alterações significativas.`
  },
  eletrocardiograma: {
    especialidade: 'Eletrofisiologia',
    medico: 'Dra. Amanda Rocha - CRM/PA 6541',
    conteudo: `ELETROCARDIOGRAMA (ECG) - 12 DERIVAÇÕES

RITMO: Sinusal
FREQUÊNCIA CARDÍACA: 72 bpm
EIXO: Normal (0° a +90°)

ONDA P:
- Morfologia: Normal
- Duração: 0,08s
- Amplitude: 2,5 mm

INTERVALO PR:
- Duração: 0,16s (VR: 0,12-0,20s)

COMPLEXO QRS:
- Duração: 0,08s (VR: <0,12s)
- Morfologia: Normal em todas as derivações

SEGMENTO ST:
- Isoelétrico em todas as derivações

ONDA T:
- Morfologia: Normal
- Positiva em D1, D2, V2-V6

QT CORRIGIDO:
- QTc: 420 ms (VR: <440ms)

CONCLUSÃO:
ECG dentro dos limites da normalidade para a idade.`
  },
  ultrassom: {
    especialidade: 'Ultrassonografia',
    medico: 'Dra. Fernanda Lima - CRM/PA 8934',
    conteudo: `ULTRASSONOGRAFIA ABDOMINAL TOTAL

TÉCNICA:
Exame realizado com transdutor convexo de 3,5 MHz

FÍGADO:
- Dimensões normais
- Ecosnormotexture
- Sem lesões focais
- Veia porta com fluxo preservado

VESÍCULA BILIAR:
- Dimensões normais
- Paredes não espessadas
- Sem cálculos
- Colédoco com diâmetro normal (<6mm)

BAÇO:
- Dimensões normais
- Ecosnormotexture

RINS:
- Direito: dimensões normais, sem hidronefrose
- Esquerdo: dimensões normais, sem hidronefrose
- Sem cálculos ou masses

PÂNCREAS:
- Dimensões normais
- Limites preservados
- Sem dilatação do ducto de Wirsung

AORTA ABDOMINAL:
- Sem aneurismas
- Calibres preservados

CONCLUSÃO:
Ultrassonografia abdominal sem alterações significativas.`
  },
  tomografia: {
    especialidade: 'Tomografia',
    medico: 'Dr. Ricardo Alves - CRM/PA 7234',
    conteudo: `TOMOGRAFIA COMPUTADORIZADA DE CRÂNIO

TÉCNICA:
Cortes axiais de 5mm, sem contraste

LAUDO:
- Parênquima cerebral com densidade preservada
- Fissuras e sulcos com morfologia habitual
- Ventrículos de tamanho normal
- Linha mediana sem desvio
- Base do crânio sem alterações
- Estruturas ósseas íntegras
- Seios paranasais pneumotizados
- Mastoides sem alterações

IMPRESSÃO DIAGNÓSTICA:
Tomografia de crânio sem alterações significativas.`
  }
};

// Histórico de saúde por categoria
export const HISTORICO_SAUDE_TRT = [
  {
    id: 'HIST-001',
    matricula: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    categoria: 'Consultas' as const,
    procedimento_id: 'PROC-001',
    descricao: 'Consulta Cardiológica',
    resultado: 'Paciente hipertenso controlado. Manter medicação.',
    pdf_url: '/docs/consulta_cardio_001.pdf',
    data_realizacao: '2024-01-15',
    laudo: MODELOS_LAUDOS_TRT.consulta_cardiologia,
  },
  {
    id: 'HIST-002',
    matricula: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    categoria: 'Exames' as const,
    procedimento_id: 'PROC-002',
    descricao: 'Check-up Laboratorial Completo',
    resultado: 'Colesterol LDL: 160mg/dL (elevado). Demais parâmetros normais.',
    pdf_url: '/docs/exames_checkup_002.pdf',
    data_realizacao: '2024-02-10',
    laudo: MODELOS_LAUDOS_TRT.exame_laboratorial,
  },
  {
    id: 'HIST-003',
    matricula: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    categoria: 'Exames' as const,
    procedimento_id: 'PROC-005',
    descricao: 'Raio X de Tórax',
    resultado: 'Sem alterações significativas.',
    pdf_url: '/docs/raiox_torax_005.pdf',
    data_realizacao: '2024-01-20',
    laudo: MODELOS_LAUDOS_TRT.raio_x,
  },
  {
    id: 'HIST-004',
    matricula: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    categoria: 'Exames' as const,
    procedimento_id: 'PROC-006',
    descricao: 'Eletrocardiograma',
    resultado: 'ECG normal.',
    pdf_url: '/docs/ecg_006.pdf',
    data_realizacao: '2024-01-22',
    laudo: MODELOS_LAUDOS_TRT.eletrocardiograma,
  },
  {
    id: 'HIST-005',
    matricula: 'TRT0001',
    usuario_nome: 'Maria Santos Oliveira',
    categoria: 'Exames' as const,
    procedimento_id: 'PROC-007',
    descricao: 'Ultrassonografia Abdominal',
    resultado: 'Sem alterações.',
    pdf_url: '/docs/usg_abdominal_007.pdf',
    data_realizacao: '2024-02-05',
    laudo: MODELOS_LAUDOS_TRT.ultrassom,
  },
  {
    id: 'HIST-006',
    matricula: 'TRT0002',
    usuario_nome: 'João Carlos Silva',
    categoria: 'Internações' as const,
    procedimento_id: 'PROC-003',
    descricao: 'Internação por Pneumonia',
    resultado: 'Paciente internado por 3 dias. Tratamento com antibióticos. Alta hospitalar em 05/03/2024.',
    pdf_url: '/docs/internacao_pneumonia_003.pdf',
    data_realizacao: '2024-03-05',
    laudo: null,
  },
  {
    id: 'HIST-007',
    matricula: 'TRT0003',
    usuario_nome: 'Ana Paula Costa',
    categoria: 'Cirurgias' as const,
    procedimento_id: 'PROC-004',
    descricao: 'Artroscopia de Joelho - Meniscectomia',
    resultado: 'Procedimento realizado com sucesso. Reabilitação em andamento.',
    pdf_url: '/docs/cirurgia_menisco_004.pdf',
    data_realizacao: '2024-03-20',
    laudo: null,
  },
] as const;

// Usuários do sistema (perfis)
export const USUARIOS_SISTEMA_TRT = [
  {
    id: 'USER-001',
    nome: 'Administrador TRT',
    email: 'admin@trt8.jus.br',
    perfil: 'Gestor_TRT' as const,
    permissoes: ['dashboard', 'relatorios', 'auditoria', 'cadastros', 'configuracoes'],
    ultimo_acesso: new Date().toISOString(),
  },
  {
    id: 'USER-002',
    nome: 'Auditor Contábil',
    email: 'auditor@trt8.jus.br',
    perfil: 'Auditor' as const,
    permissoes: ['auditoria', 'faturas', 'checklist', 'glosas'],
    ultimo_acesso: new Date().toISOString(),
  },
  {
    id: 'USER-003',
    nome: 'Funcionário Hospital Metro',
    email: 'hospital@credenciado.com',
    perfil: 'Credenciado' as const,
    permissoes: ['inserir_fatura', 'inserir_pdf', 'visualizar_status'],
    credenciado_id: 'CRED-001',
    ultimo_acesso: new Date().toISOString(),
  },
  {
    id: 'USER-004',
    nome: 'Maria Santos Oliveira',
    email: 'maria.oliveira@trt8.jus.br',
    perfil: 'Funcionario_TRT' as const,
    permissoes: ['visualizar_historico', 'agendar_procedimento', 'visualizar_status'],
    matricula: 'TRT0001',
    ultimo_acesso: new Date().toISOString(),
  },
] as const;

// Checklist de auditoria
export const CHECKLIST_AUDITORIA = [
  { id: 1, item: 'XML válido e completo', verificado: true, obrigatorio: true },
  { id: 2, item: 'PDF legível e assinado', verificado: true, obrigatorio: true },
  { id: 3, item: 'Procedimento compatível com CID', verificado: true, obrigatorio: true },
  { id: 4, item: 'Valor conforme tabela TRT', verificado: true, obrigatorio: true },
  { id: 5, item: 'Autorização prévia verificada', verificado: true, obrigatorio: true },
  { id: 6, item: 'Guia de internação (se aplicável)', verificado: false, obrigatorio: false },
  { id: 7, item: 'Laudo médico anexado', verificado: true, obrigatorio: true },
  { id: 8, item: 'Carteirinha TRT validada', verificado: true, obrigatorio: true },
] as const;

// Estatísticas para dashboards
export const ESTATISTICAS_TRT = {
  total_servidores: 245,
  total_credenciados: 28,
  total_procedimentos_ano: 1250,
  total_faturas_pendentes: 45,
  
  por_categoria: {
    consultas: 680,
    exames: 420,
    internacoes: 95,
    cirurgias: 55,
  },
  
  por_estado: {
    PA: 890,
    AP: 360,
  },
  
  valor_total_processado: 2850000.00,
  valor_medio_consulta: 320.00,
  valor_medio_internacao: 8500.00,
  taxa_glosa_media: 3.2,
  
  // Top credenciados
  top_credenciados: [
    { nome: 'Hospital Metropolitano', atendimentos: 245, valor: 850000 },
    { nome: 'Lab Einstein', atendimentos: 180, valor: 320000 },
    { nome: 'Clínica Santa Maria', atendimentos: 120, valor: 180000 },
  ],
} as const;

// Fluxo de status
export const FLUXO_STATUS_TRT = [
  'Solicitado',
  'Validado',
  'Agendado',
  'Executado',
  'Documentado',
  'Faturado',
  'Auditado',
  'Pago',
  'Glosado',
] as const;

// Exportações
export default {
  CORES_TRT,
  IDENTIDADE_TRT,
  ESTADOS_JURISDICAO,
  SERVIDORES_TRT,
  CREDENCIADOS_TRT,
  PROCEDIMENTOS_TRT,
  FATURAS_TRT,
  HISTORICO_SAUDE_TRT,
  USUARIOS_SISTEMA_TRT,
  CHECKLIST_AUDITORIA,
  ESTATISTICAS_TRT,
  FLUXO_STATUS_TRT,
  ITENS_FATURA_TRT,
  NOTIFICACOES_TRT,
};
