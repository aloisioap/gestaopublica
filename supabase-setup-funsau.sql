-- ============================================================
-- MÓDULO FUNSAU - Gestão e Auditoria de Processos Médicos
-- ============================================================

-- Tabela de Configurações
CREATE TABLE IF NOT EXISTS funsau_configuracoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_instituicao TEXT DEFAULT 'FUNSAU',
  cnpj TEXT,
  logo_url TEXT,
  brasindice_versao TEXT DEFAULT 'v24.01',
  brasindice_data_atualizacao DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Pacientes
CREATE TABLE IF NOT EXISTS funsau_pacientes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cpf TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  data_nascimento DATE,
  sexo TEXT CHECK (sexo IN ('M', 'F', 'Outro')),
  telefone TEXT,
  email TEXT,
  endereco TEXT,
  numero_carteirinha TEXT,
  qr_code TEXT,
  foto_url TEXT,
  -- Dados de perfil
  patente TEXT,
  tempo_servico INTEGER,
  cargo TEXT,
  condicoes_especiais TEXT[],
  historico_condicoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Profissionais de Saúde
CREATE TABLE IF NOT EXISTS funsau_profissionais (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  crm TEXT,
  conselho TEXT,
  numero_conselho TEXT,
  especialidade TEXT NOT NULL,
  tipo TEXT CHECK (tipo IN ('Médico', 'Enfermeiro', 'Dentista', 'Fisioterapeuta', 'Outro')),
  telefone TEXT,
  email TEXT,
  ativo BOOLEAN DEFAULT true,
  assinatura_digital_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Protocolos Médicos
CREATE TABLE IF NOT EXISTS funsau_protocolos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_protocolo TEXT NOT NULL,
  ano INTEGER NOT NULL,
  paciente_id UUID REFERENCES funsau_pacientes(id),
  profissional_solicitante_id UUID REFERENCES funsau_profissionais(id),
  data_solicitacao TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  tipo_atendimento TEXT CHECK (tipo_atendimento IN ('Consulta', 'Exame', 'Cirurgia', 'Procedimento', 'Internação', 'Emergência')),
  especialidade TEXT,
  cid_principal TEXT,
  cid_secundario TEXT,
  sintomas TEXT,
  diagnostico_preliminar TEXT,
  procedimentos_solicitados JSONB DEFAULT '[]',
  status TEXT DEFAULT 'Triagem' CHECK (status IN ('Triagem', 'Auditoria Prévia', 'Liberado', 'Em Execução', 'Aguardando Documentos', 'Auditoria Final', 'Finalizado', 'Glosado', 'Cancelado')),
  prioridade TEXT DEFAULT 'Normal' CHECK (prioridade IN ('Normal', 'Urgente', 'Emergência')),
  observacoes TEXT,
  valor_total_solicitado DECIMAL(12,2) DEFAULT 0,
  valor_total_aprovado DECIMAL(12,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Auditorias
CREATE TABLE IF NOT EXISTS funsau_auditorias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo_id UUID REFERENCES funsau_protocolos(id) ON DELETE CASCADE,
  tipo TEXT CHECK (tipo IN ('Prévia', 'Final')),
  auditor_id UUID,
  data_auditoria TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  status TEXT DEFAULT 'Pendente' CHECK (status IN ('Pendente', 'Em Análise', 'Aprovado', 'Reprovado', 'Ajuste', 'Aceite Total', 'Aceite Parcial', 'Glosa Total')),
  -- Critérios
  dados_completos BOOLEAN DEFAULT false,
  documentacao_compativel BOOLEAN DEFAULT false,
  procedimento_adequado BOOLEAN DEFAULT false,
  valor_conforme_brasindice BOOLEAN DEFAULT false,
  historico_consistente BOOLEAN DEFAULT false,
  -- Análise inteligente
  frequencia_procedimentos TEXT,
  discrepancia_preco TEXT,
  alertas JSONB DEFAULT '[]',
  -- Resultado
  valor_aprovado DECIMAL(12,2) DEFAULT 0,
  valor_glosado DECIMAL(12,2) DEFAULT 0,
  motivo_glosa TEXT,
  justificativa TEXT,
  -- Amostragem
  amostragem_inteligente BOOLEAN DEFAULT false,
  criterio_amostragem TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Atendimentos Executados
CREATE TABLE IF NOT EXISTS funsau_atendimentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo_id UUID REFERENCES funsau_protocolos(id),
  paciente_id UUID REFERENCES funsau_pacientes(id),
  profissional_executante_id UUID REFERENCES funsau_profissionais(id),
  local_execucao TEXT,
  tipo_local TEXT CHECK (tipo_local IN ('Clínica', 'Hospital', 'Laboratório', 'Ambulatório', 'Outro')),
  data_execucao DATE,
  hora_inicio TEXT,
  hora_fim TEXT,
  -- Validação
  validacao_realizada BOOLEAN DEFAULT false,
  tipo_validacao TEXT CHECK (tipo_validacao IN ('Carteirinha Foto', 'QR Code', 'Código Email', 'Código SMS', 'Biometria', 'Outro')),
  codigo_validacao TEXT,
  procedimentos_executados JSONB DEFAULT '[]',
  observacoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Documentos Clínicos
CREATE TABLE IF NOT EXISTS funsau_documentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo_id UUID REFERENCES funsau_protocolos(id),
  paciente_id UUID REFERENCES funsau_pacientes(id),
  atendimento_id UUID REFERENCES funsau_atendimentos(id),
  tipo TEXT CHECK (tipo IN ('XML', 'Laudo', 'Prontuário', 'Prescrição', 'Exame', 'Receituário', 'Outro')),
  descricao TEXT,
  arquivo_url TEXT NOT NULL,
  nome_arquivo TEXT,
  tamanho_arquivo INTEGER,
  formato TEXT,
  acesso_liberado BOOLEAN DEFAULT false,
  liberacao_qr_code BOOLEAN DEFAULT false,
  data_upload TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de XML TISS
CREATE TABLE IF NOT EXISTS funsau_xml_tiss (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo_id UUID REFERENCES funsau_protocolos(id),
  numero_guia TEXT NOT NULL,
  tipo_guia TEXT CHECK (tipo_guia IN ('Consulta', 'SADT', 'Honorário', 'Internação')),
  xml_original_url TEXT NOT NULL,
  xml_processado_url TEXT,
  validacao_estrutura BOOLEAN DEFAULT false,
  erros_validacao JSONB DEFAULT '[]',
  dados_extraidos JSONB DEFAULT '{}',
  status TEXT DEFAULT 'Pendente' CHECK (status IN ('Pendente', 'Validado', 'Rejeitado', 'Processado')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Controle de Pagamentos
CREATE TABLE IF NOT EXISTS funsau_pagamentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo_id UUID REFERENCES funsau_protocolos(id),
  numero_nota_fiscal TEXT,
  valor_solicitado DECIMAL(12,2) DEFAULT 0,
  valor_auditado DECIMAL(12,2) DEFAULT 0,
  valor_aprovado DECIMAL(12,2) DEFAULT 0,
  valor_glosado DECIMAL(12,2) DEFAULT 0,
  status_pagamento TEXT DEFAULT 'Pendente' CHECK (status_pagamento IN ('Pendente', 'Liberado para Pagamento', 'Pago', 'Glosado')),
  data_prevista_pagamento DATE,
  data_pagamento DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Glosas
CREATE TABLE IF NOT EXISTS funsau_glosas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pagamento_id UUID REFERENCES funsau_pagamentos(id),
  auditoria_id UUID REFERENCES funsau_auditorias(id),
  codigo TEXT,
  descricao TEXT,
  valor_glosado DECIMAL(12,2),
  motivo TEXT,
  data_glosa TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Liberações Automáticas
CREATE TABLE IF NOT EXISTS funsau_liberacoes_automaticas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  paciente_id UUID REFERENCES funsau_pacientes(id),
  condicao TEXT,
  procedimentos_liberados TEXT[],
  validade DATE,
  criterio_liberacao TEXT,
  observacoes TEXT,
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Auditoria Inteligente
CREATE TABLE IF NOT EXISTS funsau_auditoria_inteligente (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  paciente_id UUID REFERENCES funsau_pacientes(id),
  protocolo_id UUID REFERENCES funsau_protocolos(id),
  frequencia_mensal_procedimentos INTEGER,
  valor_medio_procedimentos DECIMAL(12,2),
  discrepancia_preco_detectada BOOLEAN DEFAULT false,
  variacao_percentual_preco DECIMAL(5,2),
  alertas_gerados JSONB DEFAULT '[]',
  risco_fraude TEXT CHECK (risco_fraude IN ('Baixo', 'Médio', 'Alto')),
  recomendacao_auditoria TEXT,
  necessita_auditoria_detalhada BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_pacientes_cpf ON funsau_pacientes(cpf);
CREATE INDEX IF NOT EXISTS idx_pacientes_carteirinha ON funsau_pacientes(numero_carteirinha);
CREATE INDEX IF NOT EXISTS idx_protocolos_paciente ON funsau_protocolos(paciente_id);
CREATE INDEX IF NOT EXISTS idx_protocolos_status ON funsau_protocolos(status);
CREATE INDEX IF NOT EXISTS idx_protocolos_numero ON funsau_protocolos(numero_protocolo);
CREATE INDEX IF NOT EXISTS idx_auditorias_protocolo ON funsau_auditorias(protocolo_id);
CREATE INDEX IF NOT EXISTS idx_atendimentos_protocolo ON funsau_atendimentos(protocolo_id);
CREATE INDEX IF NOT EXISTS idx_documentos_protocolo ON funsau_documentos(protocolo_id);
CREATE INDEX IF NOT EXISTS idx_xml_protocolo ON funsau_xml_tiss(protocolo_id);

-- ============================================================
-- POLÍTICAS DE SEGURANÇA (RLS)
-- ============================================================

ALTER TABLE funsau_pacientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_profissionais ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_protocolos ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_auditorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_atendimentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_documentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_xml_tiss ENABLE ROW LEVEL SECURITY;
ALTER TABLE funsau_pagamentos ENABLE ROW LEVEL SECURITY;

-- Políticas permissivas para desenvolvimento
CREATE POLICY "Allow all pacientes" ON funsau_pacientes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all profissionais" ON funsau_profissionais FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all protocolos" ON funsau_protocolos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all auditorias" ON funsau_auditorias FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all atendimentos" ON funsau_atendimentos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all documentos" ON funsau_documentos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all xml" ON funsau_xml_tiss FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all pagamentos" ON funsau_pagamentos FOR ALL USING (true) WITH CHECK (true);

-- ============================================================
-- FUNÇÃO DE ATUALIZAÇÃO AUTOMÁTICA
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers
CREATE TRIGGER update_funsau_pacientes_updated_at BEFORE UPDATE ON funsau_pacientes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_funsau_profissionais_updated_at BEFORE UPDATE ON funsau_profissionais
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_funsau_protocolos_updated_at BEFORE UPDATE ON funsau_protocolos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_funsau_auditorias_updated_at BEFORE UPDATE ON funsau_auditorias
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_funsau_atendimentos_updated_at BEFORE UPDATE ON funsau_atendimentos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
