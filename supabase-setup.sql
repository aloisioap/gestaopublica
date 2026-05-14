-- CONFIGURAÇÃO DO BANCO DE DADOS - PERFIL GESTÃO
-- Execute no SQL Editor do Supabase

CREATE TABLE IF NOT EXISTS bairros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  imagem_url TEXT,
  cidade TEXT,
  estado TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS registros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bairro_id UUID REFERENCES bairros(id) ON DELETE CASCADE,
  categoria TEXT NOT NULL,
  secao TEXT NOT NULL,
  dados JSONB DEFAULT '{}',
  status TEXT DEFAULT 'Pendente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_registros_bairro ON registros(bairro_id);
CREATE INDEX IF NOT EXISTS idx_registros_categoria ON registros(categoria);
