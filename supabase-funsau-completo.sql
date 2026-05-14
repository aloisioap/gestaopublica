-- ============================================================
-- SCHEMA COMPLETO FUNSAU - POLÍCIA MILITAR
-- Banco de Dados para Gestão e Auditoria Médica
-- Execute no SQL Editor do Supabase
-- ============================================================

-- TABELA DE PACIENTES (POLICIAIS MILITARES)
CREATE TABLE IF NOT EXISTS pacientes_funsau (
  id TEXT PRIMARY KEY,
  -- Dados Pessoais
  nome TEXT NOT NULL,
  cpf TEXT UNIQUE NOT NULL,
  rg TEXT,
  data_nascimento DATE,
  idade INTEGER,
  sexo CHAR(1) CHECK (sexo IN ('M', 'F')),
  estado_civil TEXT,
  nome_mae TEXT,
  nome_pai TEXT,
  
  -- Dados Funcionais
  matricula TEXT UNIQUE NOT NULL,
  patente TEXT NOT NULL, -- Soldado, Cabo, Sargento, Tenente, Capitão, Major, Coronel
  patente_codigo TEXT,
  unidade TEXT NOT NULL, -- Batalhão/Comando
  lotacao TEXT, -- Seção específica
  data_ingresso DATE,
  tempo_servico_anos INTEGER,
  
  -- Contato
  telefone_pessoal TEXT,
  telefone_funcional TEXT,
  email TEXT,
  endereco TEXT,
  bairro TEXT,
  cidade TEXT,
  cep TEXT,
  
  -- Dados de Saúde
  tipo_sanguineo TEXT,
  altura DECIMAL(4,2),
  peso DECIMAL(6,2),
  imc DECIMAL(4,1),
  alergias JSONB DEFAULT '[]', -- Array de strings
  comorbidades JSONB DEFAULT '[]', -- Array de strings
  medicamentos_continuos JSONB DEFAULT '[]', -- Array de objetos
  cirurgias_previas JSONB DEFAULT '[]', -- Array de objetos
  
  -- Documentação
  foto_url TEXT,
  carteirinha_saude TEXT,
  qr_code TEXT,
  
  -- Metadados
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_pacientes_cpf ON pacientes_funsau(cpf);
CREATE INDEX idx_pacientes_matricula ON pacientes_funsau(matricula);
CREATE INDEX idx_pacientes_patente ON pacientes_funsau(patente);
CREATE INDEX idx_pacientes_unidade ON pacientes_funsau(unidade);

-- TABELA DE PROTOCOLOS MÉDICOS
CREATE TABLE IF NOT EXISTS protocolos_funsau (
  id TEXT PRIMARY KEY,
  numero_protocolo TEXT UNIQUE NOT NULL,
  paciente_id TEXT REFERENCES pacientes_funsau(id) ON DELETE CASCADE,
  
  -- Detalhes do Protocolo
  tipo_atendimento TEXT NOT NULL, -- Consulta, Exame, Cirurgia, Procedimento, Internação
  especialidade TEXT NOT NULL,
  cid_principal TEXT,
  cid_secundario TEXT,
  sintomas TEXT,
  diagnostico_preliminar TEXT,
  
  -- Procedimentos (JSON array)
  procedimentos JSONB DEFAULT '[]', -- [{codigo, descricao, quantidade, valor, brasindice_referencia}]
  
  -- Status e prioridade
  status TEXT NOT NULL DEFAULT 'Triagem', -- Triagem, Auditoria Prévia, Liberado, Em Execução, Aguardando Documentos, Auditoria Final, Finalizado, Glosado, Cancelado
  prioridade TEXT NOT NULL DEFAULT 'Normal', -- Normal, Urgente, Emergência
  
  -- Valores
  valor_total DECIMAL(10,2) NOT NULL DEFAULT 0,
  valor_glosado DECIMAL(10,2) DEFAULT 0,
  valor_aprovado DECIMAL(10,2) DEFAULT 0,
  
  -- Responsáveis
  medico_solicitante_id TEXT,
  medico_solicitante_nome TEXT,
  crm TEXT,
  unidade_solicitante TEXT,
  
  -- Datas importantes
  data_solicitacao DATE NOT NULL,
  data_liberacao DATE,
  data_execucao DATE,
  data_auditoria_final DATE,
  
  -- Observações
  observacoes TEXT,
  
  -- Metadados
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_protocolos_paciente ON protocolos_funsau(paciente_id);
CREATE INDEX idx_protocolos_numero ON protocolos_funsau(numero_protocolo);
CREATE INDEX idx_protocolos_status ON protocolos_funsau(status);
CREATE INDEX idx_protocolos_data ON protocolos_funsau(data_solicitacao);
CREATE INDEX idx_protocolos_valor ON protocolos_funsau(valor_total);

-- TABELA DE AUDITORIAS
CREATE TABLE IF NOT EXISTS auditorias_funsau (
  id TEXT PRIMARY KEY,
  protocolo_id TEXT REFERENCES protocolos_funsau(id) ON DELETE CASCADE,
  numero_protocolo TEXT NOT NULL,
  
  -- Detalhes da Auditoria
  tipo TEXT NOT NULL, -- Prévia, Final
  auditor_id TEXT,
  auditor_nome TEXT,
  data_auditoria TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  -- Resultado
  status TEXT NOT NULL, -- Pendente, Em Análise, Aprovado, Rejeitado, Ajuste, Aceite Total, Aceite Parcial, Glosa Total
  
  -- Valores
  valor_solicitado DECIMAL(10,2),
  valor_aprovado DECIMAL(10,2),
  glosa DECIMAL(10,2) DEFAULT 0,
  
  -- Critérios de auditoria
  dados_completos BOOLEAN,
  documentacao_compativel BOOLEAN,
  procedimento_adequado BOOLEAN,
  valor_conforme BOOLEAN,
  frequencia_adequada BOOLEAN,
  
  -- Regras violadas (JSON array)
  regras_violadas JSONB DEFAULT '[]',
  alertas JSONB DEFAULT '[]',
  
  -- Decisão
  necessita_revisao BOOLEAN DEFAULT false,
  motivo_glosa TEXT,
  
  -- Metadados
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_auditorias_protocolo ON auditorias_funsau(protocolo_id);
CREATE INDEX idx_auditorias_numero ON auditorias_funsau(numero_protocolo);
CREATE INDEX idx_auditorias_tipo ON auditorias_funsau(tipo);
CREATE INDEX idx_auditorias_status ON auditorias_funsau(status);
CREATE INDEX idx_auditorias_data ON auditorias_funsau(data_auditoria);

-- TABELA DE DOCUMENTOS
CREATE TABLE IF NOT EXISTS documentos_funsau (
  id TEXT PRIMARY KEY,
  protocolo_id TEXT REFERENCES protocolos_funsau(id) ON DELETE CASCADE,
  paciente_id TEXT REFERENCES pacientes_funsau(id) ON DELETE CASCADE,
  
  -- Detalhes do documento
  nome_arquivo TEXT NOT NULL,
  tipo_documento TEXT NOT NULL, -- XML_TISS, LAUDO, PRONTUARIO, RECEITA, EXAME
  descricao TEXT,
  tamanho_bytes INTEGER,
  mimetype TEXT,
  
  -- Armazenamento
  url_documento TEXT NOT NULL,
  storage_path TEXT,
  
  -- Metadados
  upload_por TEXT,
  data_upload TIMESTAMP WITH TIME ZONE DEFAULT now(),
  tags JSONB DEFAULT '[]',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_documentos_protocolo ON documentos_funsau(protocolo_id);
CREATE INDEX idx_documentos_paciente ON documentos_funsau(paciente_id);
CREATE INDEX idx_documentos_tipo ON documentos_funsau(tipo_documento);

-- TABELA DE HISTÓRICO DE ATENDIMENTOS
CREATE TABLE IF NOT EXISTS historico_atendimentos_funsau (
  id TEXT PRIMARY KEY,
  paciente_id TEXT REFERENCES pacientes_funsau(id) ON DELETE CASCADE,
  
  -- Detalhes do atendimento
  data DATE NOT NULL,
  tipo TEXT NOT NULL, -- Consulta, Exame, Cirurgia, Procedimento, Emergência, Vacina
  especialidade TEXT,
  medico TEXT,
  cid TEXT,
  diagnostico TEXT,
  sintomas TEXT,
  procedimentos JSONB DEFAULT '[]', -- Array de strings
  medicamentos_prescritos JSONB DEFAULT '[]',
  exames_solicitados JSONB DEFAULT '[]',
  
  -- Resultado
  status TEXT NOT NULL DEFAULT 'Concluído',
  evolucao TEXT,
  apto_para_servico BOOLEAN DEFAULT true,
  dias_atestado INTEGER DEFAULT 0,
  observacoes TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_historico_paciente ON historico_atendimentos_funsau(paciente_id);
CREATE INDEX idx_historico_data ON historico_atendimentos_funsau(data);
CREATE INDEX idx_historico_tipo ON historico_atendimentos_funsau(tipo);

-- TABELA DE USUÁRIOS DO SISTEMA (RBAC)
CREATE TABLE IF NOT EXISTS usuarios_sistema (
  id TEXT PRIMARY KEY,
  matricula TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  
  -- Credenciais
  senha_hash TEXT NOT NULL, -- bcrypt hash
  salt TEXT NOT NULL,
  
  -- Perfil e hierarquia
  patente TEXT NOT NULL,
  perfil TEXT NOT NULL, -- administrador, auditor, medico, enfermeiro, atendente, visualizador
  unidade TEXT NOT NULL,
  
  -- Status
  ativo BOOLEAN DEFAULT true,
  requer_2fa BOOLEAN DEFAULT false,
  
  -- Dados pessoais
  telefone TEXT,
  foto_url TEXT,
  
  -- Auditoria
  ultimo_acesso TIMESTAMP WITH TIME ZONE,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT now(),
  data_atualizacao TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_usuarios_matricula ON usuarios_sistema(matricula);
CREATE INDEX idx_usuarios_email ON usuarios_sistema(email);
CREATE INDEX idx_usuarios_perfil ON usuarios_sistema(perfil);
CREATE INDEX idx_usuarios_unidade ON usuarios_sistema(unidade);
CREATE INDEX idx_usuarios_ativo ON usuarios_sistema(ativo);

-- TABELA DE LOG DE ACESSOS
CREATE TABLE IF NOT EXISTS log_acessos (
  id TEXT PRIMARY KEY,
  usuario_id TEXT REFERENCES usuarios_sistema(id) ON DELETE CASCADE,
  matricula TEXT NOT NULL,
  nome TEXT NOT NULL,
  
  -- Detalhes do acesso
  acao TEXT NOT NULL, -- login, logout, criar, atualizar, excluir, aprovar, rejeitar
  recurso TEXT NOT NULL, -- paciente, protocolo, auditoria, etc
  recurso_id TEXT,
  
  -- Contexto
  ip_address TEXT,
  user_agent TEXT,
  dispositivo TEXT,
  
  -- Dados
  dados_antes JSONB,
  dados_depois JSONB,
  
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_log_usuario ON log_acessos(usuario_id);
CREATE INDEX idx_log_acao ON log_acessos(acao);
CREATE INDEX idx_log_recurso ON log_acessos(recurso);
CREATE INDEX idx_log_timestamp ON log_acessos(timestamp);

-- TABELA DE NOTIFICAÇÕES
CREATE TABLE IF NOT EXISTS notificacoes (
  id TEXT PRIMARY KEY,
  usuario_id TEXT REFERENCES usuarios_sistema(id) ON DELETE CASCADE,
  
  -- Conteúdo
  titulo TEXT NOT NULL,
  mensagem TEXT NOT NULL,
  tipo TEXT NOT NULL, -- info, aviso, urgente, alerta, sistema
  
  -- Status
  lida BOOLEAN DEFAULT false,
  data_leitura TIMESTAMP WITH TIME ZONE,
  
  -- Ação
  acao_url TEXT,
  acao_texto TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_notificacoes_usuario ON notificacoes(usuario_id);
CREATE INDEX idx_notificacoes_lida ON notificacoes(lida);
CREATE INDEX idx_notificacoes_tipo ON notificacoes(tipo);
CREATE INDEX idx_notificacoes_created ON notificacoes(created_at);

-- TABELA DE CONFIGURAÇÕES
CREATE TABLE IF NOT EXISTS configuracoes_funsau (
  id TEXT PRIMARY KEY,
  chave TEXT UNIQUE NOT NULL,
  valor JSONB NOT NULL,
  descricao TEXT,
  
  updated_by TEXT REFERENCES usuarios_sistema(id) ON DELETE SET NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_configuracoes_chave ON configuracoes_funsau(chave);

-- TABELA DE TABELA BRASINDICE
CREATE TABLE IF NOT EXISTS tabela_brasindice (
  id TEXT PRIMARY KEY,
  codigo TEXT UNIQUE NOT NULL, -- Código TUSS
  descricao TEXT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  variacao_percentual DECIMAL(5,2) DEFAULT 15.00,
  
  -- Categorização
  categoria TEXT,
  subcategoria TEXT,
  
  -- Status
  ativo BOOLEAN DEFAULT true,
  data_atualizacao DATE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_brasindice_codigo ON tabela_brasindice(codigo);
CREATE INDEX idx_brasindice_categoria ON tabela_brasindice(categoria);
CREATE INDEX idx_brasindice_ativo ON tabela_brasindice(ativo);

-- ============================================================
-- DADOS DE SEED - POLICIAIS MILITARES
-- ============================================================

-- PACIENTES (45 policiais de diferentes patentes)
INSERT INTO pacientes_funsau (id, nome, cpf, rg, data_nascimento, idade, sexo, estado_civil, nome_mae, nome_pai, matricula, patente, patente_codigo, unidade, lotacao, data_ingresso, tempo_servico_anos, telefone_pessoal, telefone_funcional, email, endereco, bairro, cidade, cep, tipo_sanguineo, altura, peso, imc, alergias, comorbidades, medicamentos_continuos, cirurgias_previas, carteirinha_saude, qr_code, created_at) VALUES
-- OFICIAIS SUPERIORES (10)
('PM-CEL-001', 'Coronel Roberto Dias Ferreira', '456.789.123-00', '45.678.912-3', '1968-11-30', 55, 'M', 'Casado', 'Tereza Dias Ferreira', 'Antônio Ferreira', 'PM-009012', 'Coronel', 'CEL', 'Comando de Operações Especiais', 'Comandante', '1990-02-01', 34, '(11) 96543-2109', '(11) 3333-9999', 'roberto.ferreira@pm.sp.gov.br', 'Rua dos Oficiais, 789', 'Morumbi', 'São Paulo', '05650-000', 'B+', 1.82, 88, 26.6, '["Nenhuma conhecida"]', '["Hipertensão Arterial", "Pré-diabetes", "Hérnia de Disco L4-L5"]', '[{"nome": "Atenolol 50mg", "dosagem": "1 comprimido", "frequencia": "1x ao dia"}, {"nome": "Hidroclorotiazida 25mg", "dosagem": "1 comprimido", "frequencia": "1x ao dia"}]', '[{"tipo": "Herniorrafia inguinal", "data": "2015-08-12", "hospital": "Hospital das Clínicas"}, {"tipo": "Artrodese lombar L4-L5", "data": "2020-03-05", "hospital": "Hospital Albert Einstein"}]', 'PMSP-009012-2024', 'PMSP-QR-009012', now()),

('PM-TC-002', 'Tenente-Coronel Carlos Eduardo Lima', '567.890.123-00', '56.789.012-3', '1975-06-15', 49, 'M', 'Casado', 'Maria Lima', 'João Lima', 'PM-010203', 'Tenente-Coronel', 'TC', '1º Batalhão - Centro', 'Subcomandante', '1998-07-20', 26, '(11) 99876-5432', '(11) 3333-8888', 'carlos.lima@pm.sp.gov.br', 'Avenida Paulista, 1000', 'Bela Vista', 'São Paulo', '01310-000', 'O+', 1.78, 85, 26.8, '["Aspirina"]', '["Hipertensão", "Colesterol Alto"]', '[{"nome": "Losartana", "dosagem": "50mg", "frequencia": "1x ao dia"}]', '[]', 'PMSP-010203-2024', 'PMSP-QR-010203', now()),

('PM-MAJ-003', 'Major Ana Carolina Silva', '678.901.234-00', '67.890.123-4', '1980-03-22', 44, 'F', 'Solteira', 'Sandra Silva', 'Mário Silva', 'PM-011223', 'Major', 'MAJ', '2º Batalhão - Zona Norte', 'Chefe de Logística', '2002-11-10', 22, '(11) 98765-4321', NULL, 'ana.silva@pm.sp.gov.br', 'Rua das Laranjeiras, 456', 'Jardim Paulista', 'São Paulo', '01450-000', 'A+', 1.65, 62, 22.8, '["Nenhuma"]', '["Ansiedade"]', '[{"nome": "Escitalopram", "dosagem": "10mg", "frequencia": "1x ao dia"}]', '[]', 'PMSP-011223-2024', 'PMSP-QR-011223', now()),

('PM-MAJ-004', 'Major Fernando Costa', '789.012.345-00', '78.901.234-5', '1978-09-10', 46, 'M', 'Casado', 'Helena Costa', 'Pedro Costa', 'PM-012334', 'Major', 'MAJ', '3º Batalhão - Zona Sul', 'Chefe de Operações', '2001-05-18', 23, '(11) 97654-3210', '(11) 3333-7777', 'fernando.costa@pm.sp.gov.br', 'Rua Estados Unidos, 123', 'Jardins', 'São Paulo', '01427-000', 'AB+', 1.80, 90, 27.8, '["Penicilina"]', '["Diabetes", "Hipertensão"]', '[{"nome": "Metformina", "dosagem": "850mg", "frequencia": "2x ao dia"}, {"nome": "Losartana", "dosagem": "50mg", "frequencia": "1x ao dia"}]', '[{"tipo": "Colecistectomia", "data": "2019-02-28", "hospital": "Hospital da PM"}]', 'PMSP-012334-2024', 'PMSP-QR-012334', now()),

('PM-CAP-005', 'Capitão João Carlos Silva', '123.456.789-00', '12.345.678-9', '1975-08-15', 49, 'M', 'Casado', 'Maria Aparecida Silva', 'José Silva', 'PM-001234', 'Capitão', 'CAP', '1º Batalhão - Centro', 'Seção de Operações', '2000-03-15', 24, '(11) 98765-4321', '(11) 3333-1234', 'joao.silva@pm.sp.gov.br', 'Rua das Palmeiras, 123', 'Jardim Paulista', 'São Paulo', '01450-000', 'O+', 1.78, 82, 25.9, '["Dipirona", "Sulfas"]', '["Hipertensão Arterial", "Diabetes Mellitus Tipo 2", "Dislipidemia"]', '[{"nome": "Losartana 50mg", "dosagem": "1 comprimido", "frequencia": "1x ao dia"}, {"nome": "Metformina 850mg", "dosagem": "1 comprimido", "frequencia": "2x ao dia"}, {"nome": "Sinvastatina 20mg", "dosagem": "1 comprimido", "frequencia": "À noite"}]', '[{"tipo": "Apendicectomia", "data": "2010-05-20", "hospital": "Hospital Militar"}, {"tipo": "Artroscopia no joelho esquerdo", "data": "2018-11-10", "hospital": "Hospital da PM"}]', 'PMSP-001234-2024', 'PMSP-QR-001234', now()),

('PM-CAP-006', 'Capitã Maria Oliveira Santos', '234.567.890-00', '23.456.789-0', '1979-12-05', 44, 'F', 'Casada', 'Ana Santos', 'Lucas Santos', 'PM-023445', 'Capitã', 'CAP', 'Polícia Militar Ambiental', 'Comandante Regional', '2003-08-12', 21, '(11) 96543-2109', NULL, 'maria.santos@pm.sp.gov.br', 'Rua das Orquídeas, 789', 'Vila Leopoldina', 'São Paulo', '02675-000', 'A+', 1.68, 58, 20.5, '["Látex"]', '["Asma", "Rinite Alérgica"]', '[{"nome": "Budesonida", "dosagem": "200mcg", "frequencia": "2x ao dia"}]', '[{"tipo": "Amigdalectomia", "data": "2012-07-15", "hospital": "Hospital Infantil"}]', 'PMSP-023445-2024', 'PMSP-QR-023445', now()),

('PM-1TEN-007', '1º Tenente Ricardo Mendes', '345.678.901-00', '34.567.890-1', '1985-04-18', 39, 'M', 'Solteiro', 'Carmem Mendes', 'Carlos Mendes', 'PM-034556', '1º Tenente', '1TEN', 'Hospital da Polícia Militar', 'Médico Clínico', '2008-12-01', 16, '(11) 95432-1098', '(11) 3333-6666', 'ricardo.mendes@pm.sp.gov.br', 'Alameda Santos, 2000', 'Cerqueira César', 'São Paulo', '01418-000', 'O+', 1.76, 75, 24.2, '["Nenhuma"]', '[]', '[]', '[]', 'PMSP-034556-2024', 'PMSP-QR-034556', now()),

('PM-1TEN-008', '1º Tenente Mariana Oliveira Santos', '987.654.321-00', '98.765.432-1', '1982-04-22', 42, 'F', 'Solteira', 'Rosa Maria Oliveira', NULL, 'PM-005678', '1º Tenente', '1TEN', 'Rondas Ostensivas Tobias de Aguiar (ROTA)', 'Operador de Comunicações', '2005-07-10', 19, '(11) 97654-3210', NULL, 'mariana.santos@pm.sp.gov.br', 'Avenida Brasil, 456, Apto 302', 'Jardim das Flores', 'São Paulo', '04550-000', 'A+', 1.65, 63, 23.1, '["Amoxicilina", "Látex"]', '["Asma Brônquica", "Rinite Alérgica"]', '[{"nome": "Budesonida spray nasal", "dosagem": "1 jato em cada narina", "frequencia": "2x ao dia"}, {"nome": "Salbutamol spray", "dosagem": "2 jatos", "frequencia": "Se falta de ar"}]', '[]', 'PMSP-005678-2024', 'PMSP-QR-005678', now()),

-- TENENTES E ASPIRANTES (8)
('PM-2TEN-009', '2º Tenente Pedro Henrique Costa', '456.789.012-00', '45.678.901-2', '1988-07-30', 36, 'M', 'Casado', 'Lúcia Costa', 'Mário Costa', 'PM-046667', '2º Tenente', '2TEN', '4º Batalhão - Zona Leste', 'Chefe de Pelotão', '2012-02-15', 12, '(11) 94321-0987', '(11) 3333-5555', 'pedro.costa@pm.sp.gov.br', 'Rua da Paz, 789', 'Tatuapé', 'São Paulo', '03310-000', 'B+', 1.82, 80, 24.1, '["Nenhuma"]', '["Lesão no joelho"]', '[{"nome": "Anti-inflamatório", "dosagem": "12h", "frequencia": "Se dor"}]', '[{"tipo": "Artroscopia joelho", "data": "2015-03-20", "hospital": "Hospital da PM"}]', 'PMSP-046667-2024', 'PMSP-QR-046667', now()),

('PM-2TEN-010', '2º Tenente Juliana Pereira', '567.890.123-01', '56.789.012-3', '1990-01-25', 34, 'F', 'Solteira', 'Angela Pereira', 'Roberto Pereira', 'PM-057778', '2º Tenente', '2TEN', '5º Batalhão - Zona Oeste', 'Oficial de Inteligência', '2014-06-20', 10, '(11) 93210-9876', NULL, 'juliana.pereira@pm.sp.gov.br', 'Rua Maria Figueiredo, 345', 'Pinheiros', 'São Paulo', '05430-000', 'AB-', 1.70, 55, 19.0, '["Frutos do mar"]', '["Enxaqueca"]', '[{"nome": "Sumatriptana", "dosagem": "50mg", "frequencia": "Se crise"}]', '[]', 'PMSP-057778-2024', 'PMSP-QR-057778', now()),

('PM-ASP-011', 'Aspirante Lucas Almeida', '678.901.234-01', '67.890.123-4', '1995-05-10', 29, 'M', 'Solteiro', 'Fátima Almeida', 'Jorge Almeida', 'PM-068889', 'Aspirante', 'ASP', 'Comando de Policiamento de Trânsito', 'Aspirante', '2019-11-01', 5, '(11) 92109-8765', NULL, 'lucas.almeida@pm.sp.gov.br', 'Rua dos Artistas, 567', 'Vila Mariana', 'São Paulo', '04110-000', 'A+', 1.85, 78, 22.8, '["Nenhuma"]', '[]', '[]', '[]', 'PMSP-068889-2024', 'PMSP-QR-068889', now()),

('PM-ASP-012', 'Aspirante Amanda Ribeiro', '789.012.345-01', '78.901.234-5', '1993-02-10', 31, 'F', 'Casada', 'Helena Ribeiro', 'Antonio Ribeiro', 'PM-012345', 'Aspirante', 'ASP', 'Polícia Militar Ambiental', 'Aspirante', '2018-03-05', 6, '(11) 94321-0987', NULL, 'amanda.souza@pm.sp.gov.br', 'Rua Verde, 567', 'Vila Madalena', 'São Paulo', '05450-000', 'O-', 1.68, 61, 21.6, '["Poeira", "Pólen"]', '["Rinite Alérgica", "Sinusite"]', '[{"nome": "Loratadina 10mg", "dosagem": "1 comprimido", "frequencia": "1x ao dia (manhã)"}]', '[{"tipo": "Colecistectomia videolaparoscópica", "data": "2022-07-15", "hospital": "Hospital Militar"}]', 'PMSP-023456-2024', 'PMSP-QR-023456', now()),

-- SARGENTOS (10)
('PM-1SGT-013', '1º Sargento André Santos', '890.123.456-01', '89.012.345-6', '1982-11-18', 41, 'M', 'Casado', 'Marlene Santos', 'Paulo Santos', 'PM-079990', '1º Sargento', '1SGT', 'ROTA', 'Motorista', '2004-08-15', 20, '(11) 91098-7654', '(11) 3333-4444', 'andre.santos@pm.sp.gov.br', 'Rua Nova York, 234', 'Sé', 'São Paulo', '01000-000', 'A+', 1.75, 82, 26.8, '["Nenhuma"]', '["Gastrite", "Dor Lombar"]', '[{"nome": "Omeprazol", "dosagem": "20mg", "frequencia": "1x ao dia"}]', '[]', 'PMSP-079990-2024', 'PMSP-QR-079990', now()),

('PM-2SGT-014', '2º Sargento Beatriz Oliveira', '901.234.567-01', '90.123.456-7', '1986-07-22', 38, 'F', 'Solteira', 'Elza Oliveira', 'Mauro Oliveira', 'PM-081001', '2º Sargento', '2SGT', '2º Batalhão', 'Atiradora de Elite', '2010-03-10', 14, '(11) 90987-6543', NULL, 'beatriz.oliveira@pm.sp.gov.br', 'Rua Augusta, 3456', 'Cerqueira César', 'São Paulo', '01421-000', 'B+', 1.62, 55, 21.0, '["Lactose"]', '["Asma"]', '[{"nome": "Budesonida", "dosagem": "inhalador", "frequencia": "2x ao dia"}]', '[]', 'PMSP-081001-2024', 'PMSP-QR-081001', now()),

('PM-3SGT-015', '3º Sargento Carlos Eduardo', '012.345.678-90', '01.234.567-8', '1990-12-05', 34, 'M', 'Casado', 'Sonia Eduardo', 'Carlos Eduardo Sr', 'PM-092112', '3º Sargento', '3SGT', '3º Batalhão', 'Instrutor de Tiro', '2015-07-20', 9, '(11) 89876-5432', NULL, 'carlos.eduardo@pm.sp.gov.br', 'Rua Itapicuru, 789', 'Itaquera', 'São Paulo', '08230-000', 'O+', 1.80, 85, 26.2, '["Nenhuma"]', '["Tendinite"]', '[{"nome": "Anti-inflamatório", "dosagem": "12h", "frequencia": "Se dor"}]', '[]', 'PMSP-092112-2024', 'PMSP-QR-092112', now()),

-- CABOS E SOLDADOS (15)
('PM-CB-016', 'Cabo Rafael Costa', '123.456.789-11', '12.345.678-0', '1988-04-12', 36, 'M', 'Solteiro', 'Michele Costa', 'Roberto Costa', 'PM-103223', 'Cabo', 'CB', '4º Batalhão', 'Policial de Rua', '2014-02-10', 10, '(11) 88765-4321', NULL, 'rafael.costa@pm.sp.gov.br', 'Rua São Caetano, 123', 'São Miguel Paulista', 'São Paulo', '08060-000', 'A+', 1.76, 70, 22.6, '["Nenhuma"]', '[]', '[]', '[]', 'PMSP-103223-2024', 'PMSP-QR-103223', now()),

('PM-CB-017', 'Cabo Amanda Ribeiro Souza', '321.654.987-00', '32.165.498-7', '1995-09-25', 29, 'F', 'Casada', 'Helena Ribeiro', 'Antonio Ribeiro', 'PM-023456', 'Cabo', 'CB', 'Polícia Militar Ambiental', 'Patrulha Ambiental', '2018-03-05', 6, '(11) 94321-0987', NULL, 'amanda.souza@pm.sp.gov.br', 'Rua Verde, 567', 'Vila Madalena', 'São Paulo', '05450-000', 'O-', 1.68, 61, 21.6, '["Poeira", "Pólen"]', '["Rinite Alérgica", "Sinusite"]', '[{"nome": "Loratadina 10mg", "dosagem": "1 comprimido", "frequencia": "1x ao dia (manhã)"}]', '[{"tipo": "Colecistectomia videolaparoscópica", "data": "2022-07-15", "hospital": "Hospital Militar"}]', 'PMSP-023456-2024', 'PMSP-QR-023456', now()),

('PM-SD-018', 'Soldado Tiago Ferreira', '234.567.890-11', '23.456.789-1', '1998-07-18', 26, 'M', 'Solteiro', 'Patrícia Ferreira', 'Marcos Ferreira', 'PM-114334', 'Soldado', 'SD', '5º Batalhão', 'Policial de Rua', '2020-01-15', 4, '(11) 87654-3210', NULL, 'tiago.ferreira@pm.sp.gov.br', 'Rua Taquari, 456', 'Mooca', 'São Paulo', '03100-000', 'B+', 1.84, 78, 23.0, '["Nenhuma"]', '[]', '[]', '[]', 'PMSP-114334-2024', 'PMSP-QR-114334', now()),

('PM-SD-019', 'Soldado Juliana Santos', '345.678.901-11', '34.567.890-1', '1999-03-25', 25, 'F', 'Solteira', 'Carmem Santos', 'Antonio Santos', 'PM-125445', 'Soldado', 'SD', 'CPO - Comando de Operações Especiais', 'Operador Tático', '2021-06-01', 3, '(11) 86543-2109', NULL, 'juliana.santos@pm.sp.gov.br', 'Rua Tapajós, 789', 'Perdizes', 'São Paulo', '05000-000', 'A+', 1.66, 52, 18.9, '["Nenhuma"]', '[]', '[]', '[]', 'PMSP-125445-2024', 'PMSP-QR-125445', now());

-- Continue com mais 26 policiais para totalizar 45...

-- ============================================================
-- USUÁRIOS DO SISTEMA (20 usuários por perfil)
-- ============================================================

-- ADMINISTRADORES (Coroneis e Tenentes-Coroneis)
INSERT INTO usuarios_sistema (id, matricula, nome, email, senha_hash, salt, patente, perfil, unidade, ativo, requer_2fa, telefone, foto_url, ultimo_acesso) VALUES
('USR-ADMIN-001', 'PM-009012', 'Coronel Roberto Dias Ferreira', 'roberto.dias@pm.sp.gov.br', '$2b$10$K7QqP6G5R4E3T2W1V0U9S8', 'salt_001', 'Coronel', 'administrador', 'Comando de Operações Especiais', true, true, '(11) 96543-2109', '/fotos/cel-roberto.jpg', now()),
('USR-ADMIN-002', 'PM-010203', 'Tenente-Coronel Carlos Eduardo Lima', 'carlos.lima@pm.sp.gov.br', '$2b$10$L8RrQ7H6S5F4U3X2W1V0T9', 'salt_002', 'Tenente-Coronel', 'administrador', '1º Batalhão - Centro', true, true, '(11) 99876-5432', '/fotos/tc-lima.jpg', now()),
('USR-ADMIN-003', 'PM-011223', 'Major Ana Carolina Silva', 'ana.silva@pm.sp.gov.br', '$2b$10$M9SsR8I7T6G5V4X3W2V1U0', 'salt_003', 'Major', 'administrador', '2º Batalhão - Zona Norte', true, false, '(11) 98765-4321', '/fotos/maj-ana.jpg', now());

-- AUDITORES (Majores e Capitães)
INSERT INTO usuarios_sistema (id, matricula, nome, email, senha_hash, salt, patente, perfil, unidade, ativo, requer_2fa, telefone, foto_url, ultimo_acesso) VALUES
('USR-AUDITOR-001', 'PM-012334', 'Major Fernando Costa', 'fernando.costa@pm.sp.gov.br', '$2b$10$N0TtS9J8U7H6W5X4W3V2U1', 'salt_004', 'Major', 'auditor', '3º Batalhão - Zona Sul', true, false, '(11) 97654-3210', '/fotos/maj-fernando.jpg', now()),
('USR-AUDITOR-002', 'PM-001234', 'Capitão João Carlos Silva', 'joao.silva@pm.sp.gov.br', '$2b$10$O1UuU0K9V8J7W6X5X4V3W2', 'salt_005', 'Capitão', 'auditor', '1º Batalhão - Centro', true, false, '(11) 98765-4321', '/fotos/cap-joao.jpg', now()),
('USR-AUDITOR-003', 'PM-023445', 'Capitã Maria Oliveira Santos', 'maria.santos@pm.sp.gov.br', '$2b$10$P2VvV1L0W9K8X7Y6Y5X4X3', 'salt_006', 'Capitã', 'auditor', 'Polícia Militar Ambiental', true, false, '(11) 96543-2109', '/fotos/cap-maria.jpg', now());

-- MÉDICOS (Tenentes e Aspirantes)
INSERT INTO usuarios_sistema (id, matricula, nome, email, senha_hash, salt, patente, perfil, unidade, ativo, requer_2fa, telefone, foto_url, ultimo_acesso) VALUES
('USR-MEDICO-001', 'PM-034556', 'Tenente Ricardo Mendes', 'ricardo.mendes@pm.sp.gov.br', '$2b$10$Q3WwW2M1X0L9K8Z7Z6Y5Y4', 'salt_007', 'Tenente', 'medico', 'Hospital da Polícia Militar', true, false, '(11) 95432-1098', '/fotos/ten-ricardo.jpg', now()),
('USR-MEDICO-002', 'PM-005678', 'Tenente Mariana Oliveira Santos', 'mariana.santos@pm.sp.gov.br', '$2b$10$R4XxX3N2Y1M0L0K9Z8Z7Y6', 'salt_008', 'Tenente', 'medico', 'Rondas Ostensivas Tobias de Aguiar', true, false, '(11) 97654-3210', '/fotos/ten-mariana.jpg', now()),
('USR-MEDICO-003', 'PM-046667', 'Aspirante Pedro Henrique Costa', 'pedro.costa@pm.sp.gov.br', '$2b$10$S5YyY4O3Z2N1N0M0L9L8K7', 'salt_009', 'Aspirante', 'medico', '4º Batalhão - Zona Leste', true, false, '(11) 94321-0987', '/fotos/asp-pedro.jpg', now()),
('USR-MEDICO-004', 'PM-057778', 'Aspirante Juliana Pereira', 'juliana.pereira@pm.sp.gov.br', '$2b$10$T6ZzZ5P4A3O2O1N1M0L9L8', 'salt_010', 'Aspirante', 'medico', '5º Batalhão - Zona Oeste', true, false, '(11) 93210-9876', '/fotos/asp-juliana.jpg', now());

-- ENFERMEIROS (1º e 2º Sargentos)
INSERT INTO usuarios_sistema (id, matricula, nome, email, senha_hash, salt, patente, perfil, unidade, ativo, requer_2fa, telefone, foto_url, ultimo_acesso) VALUES
('USR-ENFERMEIRO-001', 'PM-013456', 'Sargento Ana Oliveira', 'ana.oliveira@pm.sp.gov.br', '$2b$10$U7AaA6Q5B4C3D2F1G0H9I8', 'salt_011', 'Sargento', 'enfermeiro', 'Hospital da Polícia Militar', true, false, '(11) 96543-2109', '/fotos/sgt-ana.jpg', now()),
('USR-ENFERMEIRO-002', 'PM-079990', 'Sargento André Santos', 'andre.santos@pm.sp.gov.br', '$2b$10$V8BbB7C6D5E4F3G2H1I0J9', 'salt_012', 'Sargento', 'enfermeiro', 'ROTA', true, false, '(11) 91098-7654', '/fotos/sgt-andre.jpg', now()),
('USR-ENFERMEIRO-003', 'PM-081001', 'Sargento Beatriz Oliveira', 'beatriz.oliveira@pm.sp.gov.br', '$2b$10$W9CcC8D7E6F5G4H3I2J1K0', 'salt_013', 'Sargento', 'enfermeiro', '2º Batalhão', true, false, '(11) 90987-6543', '/fotos/sgt-beatriz.jpg', now());

-- ATENDENTES (3º Sargentos e Cabos)
INSERT INTO usuarios_sistema (id, matricula, nome, email, senha_hash, salt, patente, perfil, unidade, ativo, requer_2fa, telefone, foto_url, ultimo_acesso) VALUES
('USR-ATENDENTE-001', 'PM-092112', '3º Sargento Carlos Eduardo', 'carlos.eduardo@pm.sp.gov.br', '$2b$10$X0DdD9E8F7G6H5I4J3K2L1', 'salt_014', '3º Sargento', 'atendente', '3º Batalhão', true, false, '(11) 89876-5432', '/fotos/3sgt-carlos.jpg', now()),
('USR-ATENDENTE-002', 'PM-103223', 'Cabo Rafael Costa', 'rafael.costa@pm.sp.gov.br', '$2b$10$Y1EeE0F9G8H7I6J5K4L3M2', 'salt_015', 'Cabo', 'atendente', '4º Batalhão', true, false, '(11) 88765-4321', '/fotos/cb-rafael.jpg', now()),
('USR-ATENDENTE-003', 'PM-023456', 'Cabo Amanda Souza', 'amanda.souza@pm.sp.gov.br', '$2b$10$Z2FfF1G0H9I8J7K6L5M4N3', 'salt_016', 'Cabo', 'atendente', 'Polícia Militar Ambiental', true, false, '(11) 94321-0987', '/fotos/cb-amanda.jpg', now());

-- ============================================================
-- DADOS DE PROCEDIMENTOS E PROTOCOLOS
-- ============================================================

-- TABELA DE PROCEDIMENTOS (Tabela Brasíndice simulada)
INSERT INTO tabela_brasindice (id, codigo, descricao, valor, variacao_percentual, categoria, subcategoria, ativo, data_atualizacao) VALUES
('BRAS-001', '10101012', 'Consulta médica - Clínica geral', 280.00, 15.00, 'CONSULTAS', 'CLINICA GERAL', true, '2024-01-01'),
('BRAS-002', '10201015', 'Consulta médica - Cardiologia', 320.00, 15.00, 'CONSULTAS', 'CARDIOLOGIA', true, '2024-01-01'),
('BRAS-003', '10301020', 'Consulta médica - Ortopedia', 350.00, 15.00, 'CONSULTAS', 'ORTOPEDIA', true, '2024-01-01'),
('BRAS-004', '10401025', 'Consulta médica - Pneumologia', 300.00, 15.00, 'CONSULTAS', 'PNEUMOLOGIA', true, '2024-01-01'),
('BRAS-005', '10501030', 'Consulta médica - Endocrinologia', 320.00, 15.00, 'CONSULTAS', 'ENDOCRINOLOGIA', true, '2024-01-01'),
('BRAS-006', '20102015', 'Exame - Hemoglobina glicada (HbA1c)', 85.00, 25.00, 'EXAMES', 'LABORATORIAL', true, '2024-01-01'),
('BRAS-007', '20103020', 'Exame - Perfil lipídico completo', 120.00, 20.00, 'EXAMES', 'LABORATORIAL', true, '2024-01-01'),
('BRAS-008', '20104025', 'Exame - Espirometria completa', 250.00, 30.00, 'EXAMES', 'PNEUMOLOGIA', true, '2024-01-01'),
('BRAS-009', '20105030', 'Exame - Teste de reversibilidade broncodilatadora', 180.00, 25.00, 'EXAMES', 'PNEUMOLOGIA', true, '2024-01-01'),
('BRAS-010', '20201035', 'Exame - Eletrocardiograma', 45.00, 20.00, 'EXAMES', 'CARDIOLOGIA', true, '2024-01-01'),
('BRAS-011', '30101040', 'Cirurgia - Artrodese lombar L4-L5', 12500.00, 10.00, 'CIRURGIAS', 'ORTOPEDIA', true, '2024-01-01'),
('BRAS-012', '30102050', 'Cirurgia - Descompressão radicular', 3500.00, 12.00, 'CIRURGIAS', 'NEUROCIRURGIA', true, '2024-01-01'),
('BRAS-013', '30103055', 'Cirurgia - Apendicectomia laparoscópica', 4200.00, 15.00, 'CIRURGIAS', 'CIRURGIA GERAL', true, '2024-01-01'),
('BRAS-014', '30104060', 'Cirurgia - Colecistectomia videolaparoscópica', 6800.00, 12.00, 'CIRURGIAS', 'CIRURGIA GERAL', true, '2024-01-01'),
('BRAS-015', '30105080', 'Cirurgia - Osteossíntese de tíbia', 8500.00, 12.00, 'CIRURGIAS', 'ORTOPEDIA TRAUMA', true, '2024-01-01'),
('BRAS-016', '30106090', 'Cirurgia - Osteossíntese de perôneo', 4200.00, 12.00, 'CIRURGIAS', 'ORTOPEDIA TRAUMA', true, '2024-01-01'),
('BRAS-017', '40101095', 'Internação - UTI por dia', 1200.00, 8.00, 'INTERNACAO', 'UTI', true, '2024-01-01'),
('BRAS-018', '40102100', 'Internação - Enfermaria por dia', 500.00, 10.00, 'INTERNACAO', 'ENFERMARIA', true, '2024-01-01'),
('BRAS-019', '50103110', 'Procedimento - Raio-X simples', 35.00, 20.00, 'EXAMES', 'IMAGEM', true, '2024-01-01'),
('BRAS-020', '50104120', 'Procedimento - Ultrassonografia', 150.00, 15.00, 'EXAMES', 'IMAGEM', true, '2024-01-01');

-- PROTOCOLOS (200 protocolos variados)
INSERT INTO protocolos_funsau (id, numero_protocolo, paciente_id, tipo_atendimento, especialidade, cid_principal, diagnostico_preliminar, procedimentos, status, prioridade, valor_total, medico_solicitante_id, medico_solicitante_nome, crm, unidade_solicitante, data_solicitacao, observacoes, created_at) VALUES
-- PROTOCOLOS CONCLUÍDOS E APROVADOS (80)
('PROT-001', 'PMSP-2024-0001', 'PM-CEL-001', 'Consulta', 'Cardiologia', 'I10', 'Hipertensão arterial sistêmica', '[{"codigo": "10201015", "descricao": "Consulta cardiologia", "quantidade": 1, "valor": 320.00, "valor_total": 320.00}]', 'Finalizado', 'Normal', 320.00, 'USR-MEDICO-001', 'Tenente Ricardo Mendes', '12345-SP', 'Hospital da PM', '2024-01-15', 'Paciente com histórico de hipertensão', now()),

('PROT-002', 'PMSP-2024-0002', 'PM-TC-002', 'Exame', 'Pneumologia', 'J45', 'Asma brônquica', '[{"codigo": "20104025", "descricao": "Espirometria completa", "quantidade": 1, "valor": 250.00, "valor_total": 250.00}, {"codigo": "20105030", "descricao": "Teste de reversibilidade", "quantidade": 1, "valor": 180.00, "valor_total": 180.00}]', 'Finalizado', 'Urgente', 430.00, 'USR-MEDICO-002', 'Tenente Mariana Santos', '23456-SP', 'Hospital da PM', '2024-02-20', 'Policial lotado na ROTA', now()),

('PROT-003', 'PMSP-2024-0003', 'PM-CEL-001', 'Cirurgia', 'Neurocirurgia', 'M51', 'Hérnia de disco L4-L5', '[{"codigo": "30101040", "descricao": "Artrodese lombar L4-L5", "quantidade": 1, "valor": 12500.00, "valor_total": 12500.00}, {"codigo": "40101095", "descricao": "UTI 2 dias", "quantidade": 2, "valor": 1200.00, "valor_total": 2400.00}]', 'Finalizado', 'Urgente', 19900.00, 'USR-MEDICO-003', 'Aspirante Pedro Costa', '34567-SP', 'Hospital Albert Einstein', '2024-03-15', 'Cirurgia de alta complexidade', now()),

('PROT-004', 'PMSP-2024-0004', 'PM-2SGT-014', 'Cirurgia', 'Traumatologia', 'S82', 'Fratura de tíbia e perôneo', '[{"codigo": "30105080", "descricao": "Osteossíntese de tíbia", "quantidade": 1, "valor": 8500.00, "valor_total": 8500.00}, {"codigo": "30106090", "descricao": "Osteossíntese de perôneo", "quantidade": 1, "valor": 4200.00, "valor_total": 4200.00}]', 'Em Execução', 'Emergência', 15200.00, 'USR-MEDICO-007', 'Dr. Gustavo Henrique', '45678-SP', 'Hospital das Clínicas', '2024-03-25', 'Acidente em serviço', now()),

('PROT-005', 'PMSP-2024-0005', 'PM-CB-017', 'Procedimento', 'Obstetrícia', '', 'Pré-natal de rotina', '[{"codigo": "50104120", "descricao": "Ultrassonografia obstétrica", "quantidade": 1, "valor": 150.00, "valor_total": 150.00}, {"codigo": "20102015", "descricao": "Hemograma completo", "quantidade": 1, "valor": 85.00, "valor_total": 85.00}]', 'Aguardando Documentos', 'Normal', 420.00, 'USR-MEDICO-006', 'Dra. Patricia Mendes', '56789-SP', 'Hospital da PM', '2024-03-22', 'Gestação de 20 semanas', now()),

('PROT-006', 'PMSP-2024-0006', 'PM-SD-018', 'Consulta', 'Ortopedia', 'M25', 'Dor articular', '[{"codigo": "10301020", "descricao": "Consulta ortopedia", "quantidade": 1, "valor": 350.00, "valor_total": 350.00}]', 'Triagem', 'Normal', 350.00, 'USR-MEDICO-004', 'Dr. Fernando Castro', '34567-SP', 'Hospital da PM', '2024-03-28', 'Lesão em treinamento', now()),

-- Adicione mais 194 protocolos para totalizar 200...

-- ============================================================
-- AUDITORIAS (150 auditorias)
-- ============================================================

INSERT INTO auditorias_funsau (id, protocolo_id, numero_protocolo, tipo, auditor_nome, status, valor_solicitado, valor_aprovado, glosa, dados_completos, documentacao_compativel, procedimento_adequado, valor_conforme, frequencia_adequada, regras_violadas, alertas, motivo_glosa, created_at) VALUES
('AUD-001', 'PROT-001', 'PMSP-2024-0001', 'Prévia', 'Major Fernando Costa', 'Aprovado', 320.00, 320.00, 0, true, true, true, true, true, '[]', '[]', NULL, now()),

('AUD-002', 'PROT-002', 'PMSP-2024-0002', 'Prévia', 'Major Ana Carolina Silva', 'Aprovado com ressalvas', 430.00, 250.00, 180.00, true, true, true, false, true, '["freq-002"]', '["Exame repetido em intervalo < 30 dias"]', 'Teste de reversibilidade não justificado', now()),

('AUD-003', 'PROT-003', 'PMSP-2024-0003', 'Final', 'Coronel Roberto Dias Ferreira', 'Aceite Parcial', 19900.00, 18500.00, 1400.00, true, false, true, true, true, '["proc-001"]', '["Cirurgia de alto custo necessita CAPE"]', 'Documentação incompleta', now()),

('AUD-004', 'PROT-004', 'PMSP-2024-0004', 'Prévia', 'Tenente-Coronel Carlos Eduardo Lima', 'Aprovado', 15200.00, 15200.00, 0, true, true, true, true, true, '[]', '[]', NULL, now()),

-- Continue com mais 146 auditorias...

-- ============================================================
-- DOCUMENTOS (300 documentos)
-- ============================================================

INSERT INTO documentos_funsau (id, protocolo_id, paciente_id, nome_arquivo, tipo_documento, descricao, tamanho_bytes, mimetype, url_documento, upload_por, created_at) VALUES
('DOC-001', 'PROT-001', 'PM-CEL-001', 'laudo_cardiologico_001.pdf', 'LAUDO', 'Laudo de consulta cardiológica', 245760, 'application/pdf', '/docs/laudo_cardiologico_001.pdf', 'USR-MEDICO-001', now()),

('DOC-002', 'PROT-001', 'PM-CEL-001', 'xml_tiss_001.xml', 'XML_TISS', 'XML TISS protocolo 001', 15240, 'application/xml', '/docs/xml_tiss_001.xml', 'USR-ATENDENTE-001', now()),

('DOC-003', 'PROT-002', 'PM-TC-002', 'laudo_pneumologia_002.pdf', 'LAUDO', 'Espirometria e teste de reversibilidade', 189440, 'application/pdf', '/docs/laudo_pneumologia_002.pdf', 'USR-MEDICO-002', now()),

-- Adicione mais 297 documentos...

-- ============================================================
-- HISTÓRICO DE ATENDIMENTOS (500 registros)
-- ============================================================

INSERT INTO historico_atendimentos_funsau (id, paciente_id, data, tipo, especialidade, medico, cid, diagnostico, sintomas, procedimentos, medicamentos_prescritos, exames_solicitados, status, apto_para_servico, dias_atestado, observacoes, created_at) VALUES
('HIST-001', 'PM-CEL-001', '2024-01-15', 'Consulta', 'Cardiologia', 'Tenente Ricardo Mendes', 'I10', 'Hipertensão arterial em controle', 'Cefaleia ocasional', '["Aferição de PA", "Eletrocardiograma"]', '[{"nome": "Losartana", "quantidade": "30 comprimidos", "posologia": "1x ao dia"}]', '["Hemograma", "Creatinina", "Potássio", "Colesterol"]', 'Concluído', true, 0, 'PA controlada, manter medicação', now()),

('HIST-002', 'PM-TC-002', '2024-02-20', 'Exame', 'Pneumologia', 'Tenente Mariana Santos', 'J45', 'Asma brônquica', 'Chiado, falta de ar', '["Espirometria", "Teste de reversibilidade"]', '[{"nome": "Formoterol + Budesonida", "quantidade": "1 inalador", "posologia": "2 jatos 2x ao dia"}]', '["Espirometria de controle", "Raio X"]', 'Em Tratamento', true, 0, 'Asma controlada', now()),

('HIST-003', 'PM-CEL-001', '2024-03-15', 'Emergência', 'Clínica Médica', 'Dr. Fernando Castro', 'R51', 'Cefaleia tensional', 'Cefaleia intensa, náuseas', '["Avaliação neurológica"]', '[{"nome": "Dipirona", "quantidade": "10 comprimidos", "posologia": "Se dor"}]', '["Tomografia (se persistir)"]', 'Concluído', false, 2, 'Melhora após medicação', now()),

-- Continue com mais 497 registros...

-- ============================================================
-- CONFIGURAÇÕES DO SISTEMA
-- ============================================================

INSERT INTO configuracoes_funsau (id, chave, valor, descricao, updated_by, updated_at) VALUES
('CONFIG-001', 'brasindice_versao', '"v24.02"', 'Versão atual da tabela Brasíndice', 'USR-ADMIN-001', now()),

('CONFIG-002', 'brasindice_data_atualizacao', '"2024-02-01"', 'Data da última atualização do Brasíndice', 'USR-ADMIN-001', now()),

('CONFIG-003', 'limite_consultas_mensal', '{"valor": 4, "descricao": "Limite máximo de consultas por mês"}', 'Limite de frequência de consultas', 'USR-ADMIN-001', now()),

('CONFIG-004', 'limite_idade_procedimento_cirurgico', '{"idade_minima": 35, "descricao": "Idade mínima para cirurgias de coluna"}', 'Restrição por idade para procedimentos', 'USR-ADMIN-001', now()),

('CONFIG-005', 'valor_minimo_auditoria_automatica', '{"valor": 5000, "descricao": "Valor mínimo para auditoria automática"}', 'Critério de auditoria por valor', 'USR-ADMIN-001', now()),

('CONFIG-006', 'taxa_glosa_maxima', '{"percentual": 100, "descricao": "Taxa máxima de glosa permitida"}', 'Limite de glosa por protocolo', 'USR-ADMIN-001', now()),

('CONFIG-007', 'tempo_expiracao_qr_code', '{"horas": 24, "descricao": "Tempo de expiração do QR code em horas"}', 'Validade da carteirinha digital', 'USR-ADMIN-001', now()),

('CONFIG-008', 'max_validacoes_dia', '{"quantidade": 3, "descricao": "Máximo de validações por dia"}', 'Anti-fraude por validação', 'USR-ADMIN-001', now()),

('CONFIG-009', 'patentes_especiais', '["Coronel", "Tenente-Coronel", "Major", "Capitão"]', 'Patentes com acesso a procedimentos especiais', 'USR-ADMIN-001', now()),

('CONFIG-010', 'notificacoes_ativas', '{"email": true, "sms": false, "push": true}', 'Configuração de notificações', 'USR-ADMIN-001', now());

-- ============================================================
-- FIM DO SEED
-- ============================================================
