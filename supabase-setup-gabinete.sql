-- ============================================================
-- MÓDULO GABINETE DO VEREADOR - Setup do Supabase
-- ============================================================

-- Tabela de Vereadores (configuração do gabinete)
CREATE TABLE IF NOT EXISTS vereadores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  partido TEXT,
  email TEXT,
  telefone TEXT,
  foto_url TEXT,
  biografia TEXT,
  mandato_inicio DATE,
  mandato_fim DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Assessores
CREATE TABLE IF NOT EXISTS assessores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  cargo TEXT,
  email TEXT,
  telefone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Indicações
CREATE TABLE IF NOT EXISTS indicacoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  destinatario TEXT NOT NULL,
  assunto TEXT NOT NULL,
  descricao TEXT,
  bairros TEXT[],
  data_protocolo DATE,
  prazo_resposta DATE,
  resposta TEXT,
  data_resposta DATE,
  status TEXT DEFAULT 'Protocolada',
  prioridade TEXT DEFAULT 'Média',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Requerimentos
CREATE TABLE IF NOT EXISTS requerimentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  tipo TEXT,
  destinatario TEXT NOT NULL,
  assunto TEXT NOT NULL,
  fundamentacao TEXT,
  data_protocolo DATE,
  prazo_resposta DATE,
  resposta TEXT,
  data_resposta DATE,
  status TEXT DEFAULT 'Protocolado',
  prioridade TEXT DEFAULT 'Média',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Ofícios
CREATE TABLE IF NOT EXISTS oficios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  tipo TEXT, -- 'Expedido' ou 'Recebido'
  destinatario TEXT,
  remetente TEXT,
  assunto TEXT NOT NULL,
  conteudo TEXT,
  data_emissao DATE,
  data_recebimento DATE,
  anexos TEXT[],
  status TEXT DEFAULT 'Rascunho',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Moções
CREATE TABLE IF NOT EXISTS mocoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  tipo TEXT, -- 'Aplauso', 'Congratulação', 'Pesar', etc
  titulo TEXT NOT NULL,
  destinatario TEXT,
  conteudo TEXT,
  data_protocolo DATE,
  data_aprovacao DATE,
  status TEXT DEFAULT 'Protocolada',
  autoridades_presentes TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Atendimentos
CREATE TABLE IF NOT EXISTS atendimentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  protocolo TEXT,
  data_atendimento DATE,
  tipo TEXT, -- 'Presencial', 'Telefone', 'Email', etc
  cidadao_nome TEXT NOT NULL,
  cidadao_cpf TEXT,
  cidadao_telefone TEXT,
  cidadao_email TEXT,
  cidadao_endereco TEXT,
  bairro TEXT,
  demanda TEXT NOT NULL,
  categoria TEXT, -- 'Saúde', 'Educação', 'Infraestrutura', etc
  encaminhamento TEXT,
  orgao_destino TEXT,
  prazo_acompanhamento DATE,
  resolucao TEXT,
  status TEXT DEFAULT 'Novo',
  prioridade TEXT DEFAULT 'Média',
  assessor_responsavel TEXT,
  anexos TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Compromissos/Agenda
CREATE TABLE IF NOT EXISTS compromissos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descricao TEXT,
  tipo TEXT, -- 'Sessão Plenária', 'Reunião', 'Visita', etc
  data_inicio DATE,
  hora_inicio TEXT,
  data_fim DATE,
  hora_fim TEXT,
  local TEXT,
  endereco TEXT,
  bairro TEXT,
  participantes TEXT[],
  pauta TEXT,
  status TEXT DEFAULT 'Confirmado',
  privado BOOLEAN DEFAULT false,
  lembrete INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Projetos de Lei
CREATE TABLE IF NOT EXISTS projetos_lei (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  tipo TEXT, -- 'Projeto de Lei', 'Projeto de Lei Complementar', etc
  ementa TEXT NOT NULL,
  objeto TEXT,
  justificativa TEXT,
  data_apresentacao DATE,
  comissao TEXT,
  relator TEXT,
  parecer TEXT,
  data_votacao DATE,
  resultado TEXT, -- 'Aprovado', 'Rejeitado', etc
  status TEXT DEFAULT 'Elaboração',
  tramitacao JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Lideranças (base eleitoral)
CREATE TABLE IF NOT EXISTS liderancas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  cargo TEXT,
  telefone TEXT,
  email TEXT,
  endereco TEXT,
  bairro TEXT,
  zona TEXT,
  secao TEXT,
  tipo TEXT, -- 'Liderança', 'Apoiador', 'Militante', etc
  potencial TEXT, -- 'Alto', 'Médio', 'Baixo'
  anotacoes TEXT,
  ultimo_contato DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Comunidades
CREATE TABLE IF NOT EXISTS comunidades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  tipo TEXT, -- 'Associação', 'Cooperativa', 'Movimento', etc
  endereco TEXT,
  bairro TEXT,
  responsavel TEXT,
  telefone TEXT,
  email TEXT,
  numero_membros INTEGER,
  demandas TEXT,
  historico_atendimentos TEXT,
  prioridade TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Relatórios de Mandato
CREATE TABLE IF NOT EXISTS relatorios_mandato (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vereador_id UUID REFERENCES vereadores(id) ON DELETE CASCADE,
  periodo_inicio DATE,
  periodo_fim DATE,
  titulo TEXT NOT NULL,
  resumo_executivo TEXT,
  projetos_apresentados INTEGER DEFAULT 0,
  projetos_aprovados INTEGER DEFAULT 0,
  indicacoes_protocoladas INTEGER DEFAULT 0,
  indicacoes_atendidas INTEGER DEFAULT 0,
  requerimentos_protocolados INTEGER DEFAULT 0,
  requerimentos_atendidos INTEGER DEFAULT 0,
  atendimentos_realizados INTEGER DEFAULT 0,
  comunidades_visitadas INTEGER DEFAULT 0,
  eventos_participados INTEGER DEFAULT 0,
  destaques TEXT[],
  dificuldades TEXT[],
  proximos_passos TEXT,
  publicado BOOLEAN DEFAULT false,
  data_publicacao DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ============================================================
-- ÍNDICES PARA OTIMIZAÇÃO
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_indicacoes_vereador ON indicacoes(vereador_id);
CREATE INDEX IF NOT EXISTS idx_indicacoes_status ON indicacoes(status);
CREATE INDEX IF NOT EXISTS idx_requerimentos_vereador ON requerimentos(vereador_id);
CREATE INDEX IF NOT EXISTS idx_requerimentos_status ON requerimentos(status);
CREATE INDEX IF NOT EXISTS idx_atendimentos_vereador ON atendimentos(vereador_id);
CREATE INDEX IF NOT EXISTS idx_atendimentos_status ON atendimentos(status);
CREATE INDEX IF NOT EXISTS idx_compromissos_vereador ON compromissos(vereador_id);
CREATE INDEX IF NOT EXISTS idx_compromissos_data ON compromissos(data_inicio);
CREATE INDEX IF NOT EXISTS idx_liderancas_vereador ON liderancas(vereador_id);
CREATE INDEX IF NOT EXISTS idx_comunidades_vereador ON comunidades(vereador_id);

-- ============================================================
-- POLÍTICAS DE SEGURANÇA (RLS)
-- ============================================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE vereadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessores ENABLE ROW LEVEL SECURITY;
ALTER TABLE indicacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE requerimentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE oficios ENABLE ROW LEVEL SECURITY;
ALTER TABLE mocoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE atendimentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE compromissos ENABLE ROW LEVEL SECURITY;
ALTER TABLE projetos_lei ENABLE ROW LEVEL SECURITY;
ALTER TABLE liderancas ENABLE ROW LEVEL SECURITY;
ALTER TABLE comunidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE relatorios_mandato ENABLE ROW LEVEL SECURITY;

-- Políticas permissivas para desenvolvimento
-- (Em produção, restrinja por user_id ou vereador_id)

CREATE POLICY "Allow all vereadores" ON vereadores FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all assessores" ON assessores FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all indicacoes" ON indicacoes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all requerimentos" ON requerimentos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all oficios" ON oficios FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all mocoes" ON mocoes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all atendimentos" ON atendimentos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all compromissos" ON compromissos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all projetos_lei" ON projetos_lei FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all liderancas" ON liderancas FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all comunidades" ON comunidades FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all relatorios" ON relatorios_mandato FOR ALL USING (true) WITH CHECK (true);

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

-- Triggers para todas as tabelas do gabinete
CREATE TRIGGER update_vereadores_updated_at BEFORE UPDATE ON vereadores
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_indicacoes_updated_at BEFORE UPDATE ON indicacoes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_requerimentos_updated_at BEFORE UPDATE ON requerimentos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_oficios_updated_at BEFORE UPDATE ON oficios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_mocoes_updated_at BEFORE UPDATE ON mocoes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_atendimentos_updated_at BEFORE UPDATE ON atendimentos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_compromissos_updated_at BEFORE UPDATE ON compromissos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projetos_lei_updated_at BEFORE UPDATE ON projetos_lei
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_liderancas_updated_at BEFORE UPDATE ON liderancas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_comunidades_updated_at BEFORE UPDATE ON comunidades
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_relatorios_updated_at BEFORE UPDATE ON relatorios_mandato
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
