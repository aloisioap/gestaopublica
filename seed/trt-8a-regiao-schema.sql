-- ============================================================
-- SCHEMA COMPLETO TRT 8ª REGIÃO (PARÁ E AMAPÁ)
-- Sistema de Gestão de Saúde e Faturamento
-- ============================================================

-- TABELA DE USUÁRIOS (SERVIDORES TRT)
CREATE TABLE IF NOT EXISTS trt_usuarios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  matricula TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  cpf TEXT UNIQUE NOT NULL,
  rg TEXT,
  data_nascimento DATE,
  email TEXT UNIQUE NOT NULL,
  telefone TEXT,
  
  -- Dados Funcionais
  cargo TEXT NOT NULL,
  lotacao TEXT NOT NULL,
  vara TEXT,
  comarca TEXT,
  estado TEXT CHECK (estado IN ('PA', 'AP')),
  
  -- Saúde
  tipo_sanguineo TEXT,
  alergias JSONB DEFAULT '[]',
  comorbidades JSONB DEFAULT '[]',
  medicamentos_continuos JSONB DEFAULT '[]',
  
  -- Documentação
  carteirinha_saude TEXT,
  qr_code TEXT,
  foto_url TEXT,
  
  -- Status
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_trt_usuarios_matricula ON trt_usuarios(matricula);
CREATE INDEX idx_trt_usuarios_cpf ON trt_usuarios(cpf);
CREATE INDEX idx_trt_usuarios_comarca ON trt_usuarios(comarca);
CREATE INDEX idx_trt_usuarios_estado ON trt_usuarios(estado);

-- TABELA DE CREDENCIADOS (HOSPITAIS, CLÍNICAS, CONSULTÓRIOS)
CREATE TABLE IF NOT EXISTS trt_credenciados (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cnpj TEXT UNIQUE NOT NULL,
  razao_social TEXT NOT NULL,
  nome_fantasia TEXT NOT NULL,
  
  -- Endereço
  endereco TEXT NOT NULL,
  bairro TEXT,
  cidade TEXT NOT NULL,
  estado TEXT CHECK (estado IN ('PA', 'AP')),
  cep TEXT,
  
  -- Contato
  telefone TEXT,
  email TEXT,
  
  -- Especialidades
  tipo TEXT NOT NULL, -- Hospital, Clínica, Consultório, Laboratório
  especialidades JSONB DEFAULT '[]', -- Array de strings
  
  -- Contrato
  numero_contrato TEXT,
  data_inicio DATE,
  data_fim DATE,
  
  -- Status
  ativo BOOLEAN DEFAULT true,
  avaliacao DECIMAL(3,2) DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_trt_credenciados_cnpj ON trt_credenciados(cnpj);
CREATE INDEX idx_trt_credenciados_cidade ON trt_credenciados(cidade);
CREATE INDEX idx_trt_credenciados_tipo ON trt_credenciados(tipo);

-- TABELA DE PROCEDIMENTOS
CREATE TABLE IF NOT EXISTS trt_procedimentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Usuário
  usuario_id UUID REFERENCES trt_usuarios(id) ON DELETE CASCADE,
  matricula_usuario TEXT NOT NULL,
  
  -- Credenciado
  credenciado_id UUID REFERENCES trt_credenciados(id),
  nome_credenciado TEXT,
  
  -- Detalhes do Procedimento
  tipo TEXT NOT NULL, -- Consulta, Exame, Internação, Cirurgia, Procedimento
  especialidade TEXT,
  cid TEXT,
  diagnostico TEXT,
  
  -- Datas
  data_solicitacao DATE,
  data_agendamento DATE,
  data_execucao DATE,
  
  -- Valores
  valor_total DECIMAL(10,2) DEFAULT 0,
  valor_glosado DECIMAL(10,2) DEFAULT 0,
  valor_aprovado DECIMAL(10,2) DEFAULT 0,
  
  -- Status do Fluxo
  status TEXT NOT NULL DEFAULT 'Solicitado', -- Solicitado, Validado, Agendado, Executado, Documentado, Faturado, Auditado, Pago, Glosado
  
  -- Validação
  validado_qr BOOLEAN DEFAULT false,
  validado_whatsapp BOOLEAN DEFAULT false,
  data_validacao TIMESTAMP WITH TIME ZONE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_trt_procedimentos_usuario ON trt_procedimentos(usuario_id);
CREATE INDEX idx_trt_procedimentos_matricula ON trt_procedimentos(matricula_usuario);
CREATE INDEX idx_trt_procedimentos_status ON trt_procedimentos(status);
CREATE INDEX idx_trt_procedimentos_tipo ON trt_procedimentos(tipo);

-- TABELA DE FATURAS (XML + PDF)
CREATE TABLE IF NOT EXISTS trt_faturas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Procedimento vinculado
  procedimento_id UUID REFERENCES trt_procedimentos(id) ON DELETE CASCADE,
  
  -- Credenciado
  credenciado_id UUID REFERENCES trt_credenciados(id),
  
  -- Dados da Fatura
  numero_fatura TEXT NOT NULL,
  mes_referencia INTEGER,
  ano_referencia INTEGER,
  
  -- XML TISS
  xml_arquivo TEXT,
  xml_path TEXT,
  xml_conteudo TEXT,
  
  -- PDF
  pdf_arquivo TEXT,
  pdf_path TEXT,
  pdf_categoria TEXT, -- Exames, Consultas, Internações
  
  -- Valores
  valor_bruto DECIMAL(10,2),
  valor_liquido DECIMAL(10,2),
  
  -- Status
  status TEXT DEFAULT 'Pendente', -- Pendente, Inserida, Auditada, Aprovada, Paga, Glosada
  
  -- Auditoria
  auditor_id UUID,
  observacoes_auditoria TEXT,
  motivo_glosa TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_trt_faturas_procedimento ON trt_faturas(procedimento_id);
CREATE INDEX idx_trt_faturas_status ON trt_faturas(status);
CREATE INDEX idx_trt_faturas_categoria ON trt_faturas(pdf_categoria);

-- TABELA DE HISTÓRICO DE SAÚDE (por categoria)
CREATE TABLE IF NOT EXISTS trt_historico_saude (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario_id UUID REFERENCES trt_usuarios(id) ON DELETE CASCADE,
  matricula TEXT NOT NULL,
  
  -- Categoria
  categoria TEXT NOT NULL, -- Exames, Consultas, Internações, Cirurgias
  
  -- Procedimento
  procedimento_id UUID REFERENCES trt_procedimentos(id),
  descricao TEXT,
  resultado TEXT,
  
  -- Documentos
  pdf_url TEXT,
  laudo_url TEXT,
  
  -- Data
  data_realizacao DATE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_trt_historico_usuario ON trt_historico_saude(usuario_id);
CREATE INDEX idx_trt_historico_categoria ON trt_historico_saude(categoria);

-- TABELA DE USUÁRIOS DO SISTEMA (Perfis)
CREATE TABLE IF NOT EXISTS trt_usuarios_sistema (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL,
  
  -- Perfil
  perfil TEXT NOT NULL, -- Gestor_TRT, Auditor, Credenciado, Funcionario_TRT
  
  -- Se for credenciado
  credenciado_id UUID REFERENCES trt_credenciados(id),
  
  -- Permissões
  permissoes JSONB DEFAULT '[]',
  
  ativo BOOLEAN DEFAULT true,
  ultimo_acesso TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- TABELA DE CHECKLIST DE AUDITORIA
CREATE TABLE IF NOT EXISTS trt_checklist_auditoria (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  fatura_id UUID REFERENCES trt_faturas(id) ON DELETE CASCADE,
  auditor_id UUID,
  
  -- Itens do Checklist
  itens JSONB DEFAULT '[
    {"item": "XML válido e completo", "verificado": false},
    {"item": "PDF legível e assinado", "verificado": false},
    {"item": "Procedimento compatível com CID", "verificado": false},
    {"item": "Valor conforme tabela", "verificado": false},
    {"item": "Autorização prévia verificada", "verificado": false},
    {"item": "Guia de internação (se aplicável)", "verificado": false},
    {"item": "Laudo médico anexado", "verificado": false}
  ]',
  
  -- Resultado
  status_final TEXT DEFAULT 'Pendente',
  observacoes TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- ============================================================
-- DADOS DE SEED - TRT 8ª REGIÃO
-- ============================================================

-- USUÁRIOS (Servidores TRT)
INSERT INTO trt_usuarios (matricula, nome, cpf, email, telefone, cargo, lotacao, vara, comarca, estado, tipo_sanguineo, carteirinha_saude, qr_code, ativo) VALUES
('TRT0001', 'Maria Santos Oliveira', '123.456.789-00', 'maria.oliveira@trt8.jus.br', '(91) 99999-1111', 'Analista Judiciário', '1ª Vara do Trabalho', '1ª Vara', 'Belém', 'PA', 'O+', 'TRT8-0001-2024', 'TRT8-QR-0001', true),
('TRT0002', 'João Carlos Silva', '987.654.321-00', 'joao.silva@trt8.jus.br', '(91) 99999-2222', 'Técnico Judiciário', '2ª Vara do Trabalho', '2ª Vara', 'Belém', 'PA', 'A+', 'TRT8-0002-2024', 'TRT8-QR-0002', true),
('TRT0003', 'Ana Paula Costa', '456.789.123-00', 'ana.costa@trt8.jus.br', '(96) 99999-3333', 'Analista Judiciário', '1ª Vara do Trabalho', '1ª Vara', 'Macapá', 'AP', 'B+', 'TRT8-0003-2024', 'TRT8-QR-0003', true),
('TRT0004', 'Pedro Henrique Lima', '789.123.456-00', 'pedro.lima@trt8.jus.br', '(91) 99999-4444', 'Juiz do Trabalho', '3ª Vara do Trabalho', '3ª Vara', 'Belém', 'PA', 'AB+', 'TRT8-0004-2024', 'TRT8-QR-0004', true),
('TRT0005', 'Fernanda Souza', '321.654.987-00', 'fernanda.souza@trt8.jus.br', '(91) 99999-5555', 'Diretora de Secretaria', 'Secretaria Geral', 'N/A', 'Belém', 'PA', 'O-', 'TRT8-0005-2024', 'TRT8-QR-0005', true);

-- CREDENCIADOS (Hospitais e Clínicas)
INSERT INTO trt_credenciados (cnpj, razao_social, nome_fantasia, endereco, cidade, estado, telefone, email, tipo, especialidades, numero_contrato, ativo, avaliacao) VALUES
('12.345.678/0001-90', 'Hospital Metropolitano S.A.', 'Hospital Metropolitano', 'Av. Almirante Barroso, 1000', 'Belém', 'PA', '(91) 3210-1000', 'contato@hospitalmetro.com.br', 'Hospital', '["Clínica Médica", "Cirurgia Geral", "Ortopedia", "Cardiologia"]', 'CONT-2024-001', true, 4.5),
('23.456.789/0001-01', 'Clínica Santa Maria Ltda.', 'Clínica Santa Maria', 'Rua dos Mundurucus, 2500', 'Belém', 'PA', '(91) 3222-2000', 'atendimento@santamaria.com.br', 'Clínica', '["Ortopedia", "Fisioterapia", "Radiologia"]', 'CONT-2024-002', true, 4.2),
('34.567.890/0001-12', 'Hospital de Clínicas do Amapá', 'HCA', 'Av. FAB, 100', 'Macapá', 'AP', '(96) 3210-3000', 'hca@hospital.ap.gov.br', 'Hospital', '["Clínica Médica", "Cirurgia", "Pediatria", "Ginecologia"]', 'CONT-2024-003', true, 4.0),
('45.678.901/0001-23', 'Laboratório Einstein S.A.', 'Lab Einstein', 'Av. Magalhães Barata, 800', 'Belém', 'PA', '(91) 3233-4000', 'lab@einstein.com.br', 'Laboratório', '["Análises Clínicas", "Imagem", "Ultrassonografia"]', 'CONT-2024-004', true, 4.7),
('56.789.012/0001-34', 'Clínica São Lucas', 'São Lucas', 'Travessa 14 de Março, 500', 'Belém', 'PA', '(91) 3244-5000', 'contato@saolucas.com.br', 'Clínica', '["Cardiologia", "Neurologia", "Endocrinologia"]', 'CONT-2024-005', true, 4.3);

-- USUÁRIOS DO SISTEMA
INSERT INTO trt_usuarios_sistema (nome, email, senha_hash, perfil, permissoes, ativo) VALUES
('Administrador TRT', 'admin@trt8.jus.br', '$2b$10$AdminHash123', 'Gestor_TRT', '["dashboard", "relatorios", "auditoria", "cadastros", "configuracoes"]', true),
('Auditor Contábil', 'auditor@trt8.jus.br', '$2b$10$AuditorHash456', 'Auditor', '["auditoria", "faturas", "checklist", "glosas"]', true),
('Funcionário Hospital Metro', 'hospital@credenciado.com', '$2b$10$HospitalHash789', 'Credenciado', '["inserir_fatura", "inserir_pdf", "visualizar_status"]', true),
('Servidor TRT', 'servidor@trt8.jus.br', '$2b$10$ServidorHash012', 'Funcionario_TRT', '["visualizar_historico", "agendar_procedimento", "visualizar_status"]', true);

-- PROCEDIMENTOS
INSERT INTO trt_procedimentos (matricula_usuario, credenciado_id, nome_credenciado, tipo, especialidade, cid, diagnostico, data_solicitacao, data_agendamento, data_execucao, valor_total, status) VALUES
('TRT0001', (SELECT id FROM trt_credenciados WHERE cnpj = '12.345.678/0001-90'), 'Hospital Metropolitano', 'Consulta', 'Cardiologia', 'I10', 'Hipertensão Arterial', '2024-01-10', '2024-01-15', '2024-01-15', 350.00, 'Pago'),
('TRT0001', (SELECT id FROM trt_credenciados WHERE cnpj = '45.678.901/0001-23'), 'Lab Einstein', 'Exame', 'Laboratorial', '', 'Check-up anual', '2024-02-05', '2024-02-10', '2024-02-10', 450.00, 'Faturado'),
('TRT0002', (SELECT id FROM trt_credenciados WHERE cnpj = '12.345.678/0001-90'), 'Hospital Metropolitano', 'Internação', 'Clínica Médica', 'J18', 'Pneumonia', '2024-03-01', '2024-03-02', '2024-03-05', 8500.00, 'Auditado'),
('TRT0003', (SELECT id FROM trt_credenciados WHERE cnpj = '34.567.890/0001-12'), 'Hospital de Clínicas do Amapá', 'Cirurgia', 'Ortopedia', 'M23', 'Menisco', '2024-03-15', '2024-03-20', '2024-03-20', 12500.00, 'Executado'),
('TRT0004', (SELECT id FROM trt_credenciados WHERE cnpj = '56.789.012/0001-34'), 'Clínica São Lucas', 'Consulta', 'Neurologia', 'G43', 'Enxaqueca', '2024-03-25', '2024-03-28', NULL, 400.00, 'Validado');

-- FATURAS
INSERT INTO trt_faturas (procedimento_id, credenciado_id, numero_fatura, mes_referencia, ano_referencia, xml_arquivo, pdf_arquivo, pdf_categoria, valor_bruto, valor_liquido, status) VALUES
((SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0001' AND tipo = 'Consulta'), (SELECT id FROM trt_credenciados WHERE cnpj = '12.345.678/0001-90'), 'FAT-2024-001', 1, 2024, 'xml_001.tiss', 'consulta_cardio_001.pdf', 'Consultas', 350.00, 350.00, 'Paga'),
((SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0001' AND tipo = 'Exame'), (SELECT id FROM trt_credenciados WHERE cnpj = '45.678.901/0001-23'), 'FAT-2024-002', 2, 2024, 'xml_002.tiss', 'exames_checkup_002.pdf', 'Exames', 450.00, 450.00, 'Auditada'),
((SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0002' AND tipo = 'Internação'), (SELECT id FROM trt_credenciados WHERE cnpj = '12.345.678/0001-90'), 'FAT-2024-003', 3, 2024, 'xml_003.tiss', 'internacao_pneumonia_003.pdf', 'Internações', 8500.00, 8200.00, 'Glosada');

-- HISTÓRICO DE SAÚDE
INSERT INTO trt_historico_saude (usuario_id, matricula, categoria, procedimento_id, descricao, resultado, data_realizacao) VALUES
((SELECT id FROM trt_usuarios WHERE matricula = 'TRT0001'), 'TRT0001', 'Consultas', (SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0001' AND tipo = 'Consulta'), 'Consulta Cardiológica', 'Paciente hipertenso controlado', '2024-01-15'),
((SELECT id FROM trt_usuarios WHERE matricula = 'TRT0001'), 'TRT0001', 'Exames', (SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0001' AND tipo = 'Exame'), 'Check-up Laboratorial Completo', 'Colesterol elevado, demais parâmetros normais', '2024-02-10'),
((SELECT id FROM trt_usuarios WHERE matricula = 'TRT0002'), 'TRT0002', 'Internações', (SELECT id FROM trt_procedimentos WHERE matricula_usuario = 'TRT0002' AND tipo = 'Internação'), 'Internação por Pneumonia', 'Alta hospitalar após 3 dias', '2024-03-05');

-- ============================================================
-- FIM DO SEED
-- ============================================================
