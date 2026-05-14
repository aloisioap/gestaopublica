// ============================================================
// DADOS OPME - ÓRTESES, PRÓTESES E MATERIAIS ESPECIAIS
// TRT 8ª Região - Pareceres Automatizados
// ============================================================

export interface ProcedimentoOPME {
  id: string;
  codigo: string;
  descricao: string;
  categoria: "Ortese" | "Protese" | "Material Especial" | "Implante";
  valorReferencia: number;
  tipoDocumento: "DUT" | "Laudo" | "Prescricao" | "Orçamento";
  dutPadrao?: string;
  prazoCarencia?: number; // dias
  requerAutorizacao: boolean;
  documentosNecessarios: string[];
}

export interface DUT {
  id: string;
  codigoProcedimento: string;
  descricaoProcedimento: string;
  titulo: string;
  conteudo: string;
  camposVariaveis: { nome: string; descricao: string; obrigatorio: boolean }[];
}

export interface ParecerOPME {
  id: string;
  codigo: string;
  tipo: "Autorizado" | "Negado" | "Com Pendência" | "Autorizado Parcialmente";
  procedimentoId: string;
  procedimentoDescricao: string;
  motivo: string;
  condicionantes?: string[];
  dataValidade?: string;
  observacoes: string;
}

// Procedimentos OPME cadastrados
export const PROCEDIMENTOS_OPME: ProcedimentoOPME[] = [
  {
    id: "OPME-001",
    codigo: "OPME001",
    descricao: "Prótese Total de Quadril",
    categoria: "Protese",
    valorReferencia: 15000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-001",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo médico com CID",
      "Exames de imagem (RM/Tomografia)",
      "Relatório ortopédico",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-002",
    codigo: "OPME002",
    descricao: "Prótese Total de Joelho",
    categoria: "Protese",
    valorReferencia: 18000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-002",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo médico com CID",
      "Radiografias",
      "Relatório ortopédico",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-003",
    codigo: "OPME003",
    descricao: "Marcapasso Cardíaco",
    categoria: "Implante",
    valorReferencia: 25000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-003",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo cardiológico",
      "Eletrocardiograma",
      "Holter",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-004",
    codigo: "OPME004",
    descricao: "Prótese de Mama (Reconstrutiva)",
    categoria: "Protese",
    valorReferencia: 12000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-004",
    prazoCarencia: 0,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo oncológico",
      "Histopatológico",
      "Relatório cirúrgico",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-005",
    codigo: "OPME005",
    descricao: "Órtese para Coluna Vertebral",
    categoria: "Ortese",
    valorReferencia: 3500.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-005",
    prazoCarencia: 90,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo ortopédico",
      "Radiografias",
      "Orçamento",
    ],
  },
  {
    id: "OPME-006",
    codigo: "OPME006",
    descricao: "Lente Intraocular",
    categoria: "Implante",
    valorReferencia: 4500.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-006",
    prazoCarencia: 60,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo oftalmológico",
      "Biometria",
      "Orçamento",
    ],
  },
  {
    id: "OPME-007",
    codigo: "OPME007",
    descricao: "Stent Coronário",
    categoria: "Implante",
    valorReferencia: 8000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-007",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo cardiológico",
      "Cateterismo",
      "Orçamento",
    ],
  },
  {
    id: "OPME-008",
    codigo: "OPME008",
    descricao: "Prótese de Válvula Cardíaca",
    categoria: "Protese",
    valorReferencia: 35000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-008",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo cardiológico",
      "Ecocardiograma",
      "Cateterismo",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-009",
    codigo: "OPME009",
    descricao: "Desfibrilador Implantável (CDI)",
    categoria: "Implante",
    valorReferencia: 45000.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-009",
    prazoCarencia: 180,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo cardiológico",
      "Eletrofisiológico",
      "Orçamento de 3 fornecedores",
    ],
  },
  {
    id: "OPME-010",
    codigo: "OPME010",
    descricao: "Ossos Artificiais (Alógeno)",
    categoria: "Material Especial",
    valorReferencia: 8500.00,
    tipoDocumento: "DUT",
    dutPadrao: "DUT-010",
    prazoCarencia: 0,
    requerAutorizacao: true,
    documentosNecessarios: [
      "DUT preenchido",
      "Laudo ortopédico",
      "Relatório cirúrgico",
      "Orçamento",
    ],
  },
];

// DUTs (Documentos Únicos de Trabalho)
export const DUTS: DUT[] = [
  {
    id: "DUT-001",
    codigoProcedimento: "OPME001",
    descricaoProcedimento: "Prótese Total de Quadril",
    titulo: "DUT - Prótese Total de Quadril",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE TOTAL DE QUADRIL

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos
   Peso: {{peso}} kg

2. DIAGNÓSTICO CLÍNICO
   CID Principal: {{cid_principal}}
   Diagnóstico: {{diagnostico}}

3. JUSTIFICATIVA CLÍNICA
   {{justificativa_clinica}}

4. DESCRITIVO DA PRÓTESE
   Tipo: {{tipo_protese}}
   Fixação: {{tipo_fixacao}}
   Material: {{material}}

5. AVALIAÇÃO DO MÉDICO ASSISTENTE
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Especialidade: {{especialidade}}
   Assinatura: _______________________
   Data: {{data_assinatura}}

6. DECLARAÇÃO DO PACIENTE
   Declaro estar ciente da indicação cirúrgica e da necessidade da prótese.
   
   Assinatura do Paciente: _______________________
   Data: {{data_paciente}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome completo do paciente", obrigatorio: true },
      { nome: "matricula", descricao: "Número da matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade em anos", obrigatorio: true },
      { nome: "peso", descricao: "Peso em kg", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID do diagnóstico principal", obrigatorio: true },
      { nome: "diagnostico", descricao: "Descrição do diagnóstico", obrigatorio: true },
      { nome: "justificativa_clinica", descricao: "Justificativa clínica detalhada", obrigatorio: true },
      { nome: "tipo_protese", descricao: "Tipo de prótese (cementada/não-cementada)", obrigatorio: true },
      { nome: "tipo_fixacao", descricao: "Tipo de fixação", obrigatorio: true },
      { nome: "material", descricao: "Material da prótese", obrigatorio: true },
      { nome: "nome_medico", descricao: "Nome do médico assistente", obrigatorio: true },
      { nome: "crm", descricao: "CRM do médico", obrigatorio: true },
      { nome: "especialidade", descricao: "Especialidade médica", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data da assinatura do médico", obrigatorio: true },
      { nome: "data_paciente", descricao: "Data da assinatura do paciente", obrigatorio: true },
    ],
  },
  {
    id: "DUT-002",
    codigoProcedimento: "OPME002",
    descricaoProcedimento: "Prótese Total de Joelho",
    titulo: "DUT - Prótese Total de Joelho",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE TOTAL DE JOELHO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO CLÍNICO
   CID Principal: {{cid_principal}}
   Diagnóstico: {{diagnostico}}
   Grau de Comprometimento: {{grau_comprometimento}}

3. JUSTIFICATIVA CLÍNICA
   {{justificativa_clinica}}

4. AVALIAÇÃO RADIOGRÁFICA
   Descrição: {{avaliacao_radiografica}}

5. DESCRITIVO DA PRÓTESE
   Tipo: {{tipo_protese}}
   Componentes: {{componentes}}

6. AVALIAÇÃO DO MÉDICO
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome completo do paciente", obrigatorio: true },
      { nome: "matricula", descricao: "Número da matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade em anos", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID principal", obrigatorio: true },
      { nome: "diagnostico", descricao: "Diagnóstico", obrigatorio: true },
      { nome: "grau_comprometimento", descricao: "Grau de comprometimento articular", obrigatorio: true },
      { nome: "justificativa_clinica", descricao: "Justificativa clínica", obrigatorio: true },
      { nome: "avaliacao_radiografica", descricao: "Avaliação radiográfica", obrigatorio: true },
      { nome: "tipo_protese", descricao: "Tipo de prótese", obrigatorio: true },
      { nome: "componentes", descricao: "Componentes da prótese", obrigatorio: true },
      { nome: "nome_medico", descricao: "Nome do médico", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-003",
    codigoProcedimento: "OPME003",
    descricaoProcedimento: "Marcapasso Cardíaco",
    titulo: "DUT - Marcapasso Cardíaco",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - MARCAPASSO CARDÍACO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO CARDIOLÓGICO
   CID: {{cid_principal}}
   Arritmia: {{tipo_arritmia}}
   FC de Repouso: {{fc_repouso}} bpm
   FC Máxima: {{fc_maxima}} bpm

3. INDICAÇÃO CLÍNICA
   {{indicacao_clinica}}

4. TIPO DE DISPOSITIVO
   Modelo: {{modelo_marcapasso}}
   Características: {{caracteristicas}}

5. AVALIAÇÃO CARDIOLOGISTA
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome do paciente", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "tipo_arritmia", descricao: "Tipo de arritmia", obrigatorio: true },
      { nome: "fc_repouso", descricao: "Frequência cardíaca de repouso", obrigatorio: true },
      { nome: "fc_maxima", descricao: "Frequência cardíaca máxima", obrigatorio: true },
      { nome: "indicacao_clinica", descricao: "Indicação clínica", obrigatorio: true },
      { nome: "modelo_marcapasso", descricao: "Modelo do marcapasso", obrigatorio: true },
      { nome: "caracteristicas", descricao: "Características do dispositivo", obrigatorio: true },
      { nome: "nome_medico", descricao: "Nome do cardiologista", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-004",
    codigoProcedimento: "OPME004",
    descricaoProcedimento: "Prótese de Mama (Reconstrutiva)",
    titulo: "DUT - Prótese de Mama Reconstrutiva",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE DE MAMA RECONSTRUTIVA

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO ONCOLÓGICO
   CID: {{cid_principal}}
   Estadiamento: {{estadiamento}}
   Data Diagnóstico: {{data_diagnostico}}

3. TRATAMENTO REALIZADO
   Cirurgia: {{tipo_cirurgia}}
   Data: {{data_cirurgia}}
   Quimioterapia: {{quimioterapia}}
   Radioterapia: {{radioterapia}}

4. INDICAÇÃO DE RECONSTRUÇÃO
   {{justificativa_reconstrucao}}

5. AVALIAÇÃO MÉDICA
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "estadiamento", descricao: "Estadiamento", obrigatorio: true },
      { nome: "data_diagnostico", descricao: "Data do diagnóstico", obrigatorio: true },
      { nome: "tipo_cirurgia", descricao: "Tipo de cirurgia", obrigatorio: true },
      { nome: "data_cirurgia", descricao: "Data da cirurgia", obrigatorio: true },
      { nome: "quimioterapia", descricao: "Quimioterapia (Sim/Não)", obrigatorio: true },
      { nome: "radioterapia", descricao: "Radioterapia (Sim/Não)", obrigatorio: true },
      { nome: "justificativa_reconstrucao", descricao: "Justificativa da reconstrução", obrigatorio: true },
      { nome: "nome_medico", descricao: "Nome do médico", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-005",
    codigoProcedimento: "OPME005",
    descricaoProcedimento: "Órtese para Coluna Vertebral",
    titulo: "DUT - Órtese para Coluna",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - ÓRTESE PARA COLUNA VERTEBRAL

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Patologia: {{patologia}}
   Nível Vertebral: {{nivel_vertebral}}

3. INDICAÇÃO DA ÓRTESE
   {{indicacao_ortese}}

4. TIPO DE ÓRTESE
   Modelo: {{modelo_ortese}}
   Finalidade: {{finalidade}}

5. PRESCRIÇÃO MÉDICA
   Médico: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "patologia", descricao: "Patologia", obrigatorio: true },
      { nome: "nivel_vertebral", descricao: "Nível vertebral", obrigatorio: true },
      { nome: "indicacao_ortese", descricao: "Indicação", obrigatorio: true },
      { nome: "modelo_ortese", descricao: "Modelo", obrigatorio: true },
      { nome: "finalidade", descricao: "Finalidade", obrigatorio: true },
      { nome: "nome_medico", descricao: "Médico", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-006",
    codigoProcedimento: "OPME006",
    descricaoProcedimento: "Lente Intraocular",
    titulo: "DUT - Lente Intraocular",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - LENTE INTRAOCULAR

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO OFTALMOLÓGICO
   CID: {{cid_principal}}
   Oftalmo: {{olho_afetado}}
   Acuidade Visual: {{acuidade_visual}}

3. BIOMETRIA
   Poder Dioptria: {{poder_dioptria}}
   Comprimento Axial: {{comprimento_axial}} mm

4. TIPO DE LENTE
   Modelo: {{modelo_lente}}
   Características: {{caracteristicas}}

5. PRESCRIÇÃO
   Oftalmologista: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "olho_afetado", descricao: "Olho afetado", obrigatorio: true },
      { nome: "acuidade_visual", descricao: "Acuidade visual", obrigatorio: true },
      { nome: "poder_dioptria", descricao: "Poder em dioptrias", obrigatorio: true },
      { nome: "comprimento_axial", descricao: "Comprimento axial", obrigatorio: true },
      { nome: "modelo_lente", descricao: "Modelo da lente", obrigatorio: true },
      { nome: "caracteristicas", descricao: "Características", obrigatorio: true },
      { nome: "nome_medico", descricao: "Oftalmologista", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-007",
    codigoProcedimento: "OPME007",
    descricaoProcedimento: "Stent Coronário",
    titulo: "DUT - Stent Coronário",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - STENT CORONÁRIO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Lesão: {{descricao_lesao}}
   Percentual Estenose: {{percentual_estenose}}%

3. PROCEDIMENTO
   Cateterismo realizado em: {{data_cateterismo}}
   Resultado: {{resultado_cateterismo}}

4. STENT INDICADO
   Tipo: {{tipo_stent}}
   Diâmetro: {{diametro}} mm
   Comprimento: {{comprimento}} mm

5. AVALIAÇÃO
   Cardiologista: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "descricao_lesao", descricao: "Descrição da lesão", obrigatorio: true },
      { nome: "percentual_estenose", descricao: "Percentual de estenose", obrigatorio: true },
      { nome: "data_cateterismo", descricao: "Data do cateterismo", obrigatorio: true },
      { nome: "resultado_cateterismo", descricao: "Resultado", obrigatorio: true },
      { nome: "tipo_stent", descricao: "Tipo de stent", obrigatorio: true },
      { nome: "diametro", descricao: "Diâmetro", obrigatorio: true },
      { nome: "comprimento", descricao: "Comprimento", obrigatorio: true },
      { nome: "nome_medico", descricao: "Cardiologista", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
  {
    id: "DUT-008",
    codigoProcedimento: "OPME008",
    descricaoProcedimento: "Prótese de Válvula Cardíaca",
    titulo: "DUT - Prótese de Válvula Cardíaca",
    conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE DE VÁLVULA CARDÍACA

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Válvula Afetada: {{valvula_afetada}}
   Grau de Insuficiência: {{grau_insuficiencia}}

3. EXAMES
   Ecocardiograma: {{data_eco}}
   Área Valvar: {{area_valvar}} cm²
   Fração de Ejeção: {{fe}}%

4. PRÓTESE INDICADA
   Tipo: {{tipo_protese}}
   Modelo: {{modelo}}
   Tamanho: {{tamanho}}

5. AVALIAÇÃO
   Cirurgião: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
    camposVariaveis: [
      { nome: "nome_paciente", descricao: "Nome", obrigatorio: true },
      { nome: "matricula", descricao: "Matrícula", obrigatorio: true },
      { nome: "idade", descricao: "Idade", obrigatorio: true },
      { nome: "cid_principal", descricao: "CID", obrigatorio: true },
      { nome: "valvula_afetada", descricao: "Válvula afetada", obrigatorio: true },
      { nome: "grau_insuficiencia", descricao: "Grau de insuficiência", obrigatorio: true },
      { nome: "data_eco", descricao: "Data do ecocardiograma", obrigatorio: true },
      { nome: "area_valvar", descricao: "Área valvar", obrigatorio: true },
      { nome: "fe", descricao: "Fração de ejeção", obrigatorio: true },
      { nome: "tipo_protese", descricao: "Tipo de prótese", obrigatorio: true },
      { nome: "modelo", descricao: "Modelo", obrigatorio: true },
      { nome: "tamanho", descricao: "Tamanho", obrigatorio: true },
      { nome: "nome_medico", descricao: "Cirurgião", obrigatorio: true },
      { nome: "crm", descricao: "CRM", obrigatorio: true },
      { nome: "data_assinatura", descricao: "Data", obrigatorio: true },
    ],
  },
];

// Pareceres modelo
export const MODELOS_PARECER: ParecerOPME[] = [
  {
    id: "PARECER-001",
    codigo: "PARECER-AUT-001",
    tipo: "Autorizado",
    procedimentoId: "OPME-001",
    procedimentoDescricao: "Prótese Total de Quadril",
    motivo: "Paciente com diagnóstico de artrose avançada de quadril, com limitação funcional severa e dor refrataria ao tratamento clínico. Indicação cirúrgica adequada conforme literatura médica.",
    condicionantes: [
      "Utilização de prótese de primeira linha",
      "Cirurgia deve ser realizada em até 90 dias",
      "Acompanhamento fisioterápico obrigatório",
    ],
    dataValidade: "90 dias",
    observacoes: "Autorização concedida conforme protocolo OPME TRT."
  },
  {
    id: "PARECER-002",
    codigo: "PARECER-NEG-001",
    tipo: "Negado",
    procedimentoId: "OPME-001",
    procedimentoDescricao: "Prótese Total de Quadril",
    motivo: "Documentação incompleta. Ausência de exames de imagem recentes e laudo detalhado. Não comprovada a incapacidade funcional severa.",
    observacoes: "Solicitante deve apresentar RM de quadril com menos de 30 dias e relatório ortopédico detalhado.",
  },
  {
    id: "PARECER-003",
    codigo: "PARECER-PAR-001",
    tipo: "Autorizado Parcialmente",
    procedimentoId: "OPME-003",
    procedimentoDescricao: "Marcapasso Cardíaco",
    motivo: "Indicação clínica confirmada. Entretanto, o modelo solicitado possui recursos não essenciais.",
    condicionantes: [
      "Autorizado marcapasso modelo básico com função VVI ou DDD",
      "Modelo com recursos avançados (resposta frequencial, etc) não autorizado",
      "Troca para modelo autorizado deve ser confirmada pelo hospital",
    ],
    dataValidade: "60 dias",
    observacoes: "Diferença de valor entre modelos será de responsabilidade do paciente caso opte pelo modelo não autorizado.",
  },
];

// Função para gerar parecer automático
export const gerarParecerAutomatico = (
  procedimentoId: string,
  dados: Record<string, string>,
  documentacaoCompleta: boolean
): ParecerOPME => {
  const procedimento = PROCEDIMENTOS_OPME.find(p => p.id === procedimentoId);
  if (!procedimento) throw new Error("Procedimento não encontrado");

  if (!documentacaoCompleta) {
    return {
      id: `PARECER-PEND-${Date.now()}`,
      codigo: `PARECER-PEND-${Date.now()}`,
      tipo: "Com Pendência",
      procedimentoId: procedimento.id,
      procedimentoDescricao: procedimento.descricao,
      motivo: "Documentação incompleta para análise.",
      observacoes: `Documentos pendentes: ${procedimento.documentosNecessarios.join(", ")}`,
    };
  }

  // Lógica simplificada para geração de parecer
  const modelo = MODELOS_PARECER.find(m => m.procedimentoId === procedimentoId && m.tipo === "Autorizado");
  if (modelo) {
    return {
      ...modelo,
      id: `PARECER-AUT-${Date.now()}`,
      codigo: `PARECER-AUT-${Date.now()}`,
    };
  }

  return {
    id: `PARECER-ANALISE-${Date.now()}`,
    codigo: `PARECER-ANALISE-${Date.now()}`,
    tipo: "Com Pendência",
    procedimentoId: procedimento.id,
    procedimentoDescricao: procedimento.descricao,
    motivo: "Análise em andamento.",
    observacoes: "Caso será analisado pela comissão de OPME.",
  };
};

// Função para preencher DUT
export const preencherDUT = (dutId: string, dados: Record<string, string>): string => {
  const dut = DUTS.find(d => d.id === dutId);
  if (!dut) throw new Error("DUT não encontrado");

  let conteudo = dut.conteudo;
  Object.entries(dados).forEach(([chave, valor]) => {
    conteudo = conteudo.replace(new RegExp(`{{${chave}}}`, "g"), valor);
  });

  return conteudo;
};
