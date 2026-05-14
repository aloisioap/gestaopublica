# 🔧 Diagnóstico do Banco de Dados

## Passo 1: Verificar se o Projeto Supabase está Ativo

1. Acesse: https://supabase.com/dashboard
2. Faça login com sua conta
3. Verifique se o projeto `exnqmgcolnfawleqslce` aparece na lista
4. Se estiver **pausado**, clique em "Restore" para reativar

> ⚠️ Projetos no plano gratuito são pausados após 7 dias de inatividade!

---

## Passo 2: Criar as Tabelas no Supabase

No seu projeto do Supabase:

### 1. Vá em "SQL Editor" (no menu lateral)

### 2. Clique em "New Query"

### 3. Cole e execute este SQL completo:

```sql
-- ============================================================
-- CRIAR TABELAS
-- ============================================================

-- Tabela de bairros
CREATE TABLE IF NOT EXISTS bairros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  imagem_url TEXT,
  cidade TEXT,
  estado TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de registros
CREATE TABLE IF NOT EXISTS registros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bairro_id UUID REFERENCES bairros(id) ON DELETE CASCADE,
  categoria TEXT NOT NULL,
  secao TEXT NOT NULL,
  dados JSONB DEFAULT '{}',
  status TEXT DEFAULT 'Pendente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ============================================================
-- CRIAR ÍNDICES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_registros_bairro ON registros(bairro_id);
CREATE INDEX IF NOT EXISTS idx_registros_categoria ON registros(categoria);
CREATE INDEX IF NOT EXISTS idx_registros_secao ON registros(secao);

-- ============================================================
-- CRIAR STORAGE BUCKET
-- ============================================================

-- Criar bucket para imagens (se não existir)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('imagens', 'imagens', true)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- POLÍTICAS DE SEGURANÇA (RLS)
-- ============================================================

-- Habilitar RLS nas tabelas
ALTER TABLE bairros ENABLE ROW LEVEL SECURITY;
ALTER TABLE registros ENABLE ROW LEVEL SECURITY;

-- Política para bairros: permitir tudo para anon (desenvolvimento)
DROP POLICY IF EXISTS "Allow all" ON bairros;
CREATE POLICY "Allow all" ON bairros
  FOR ALL USING (true) WITH CHECK (true);

-- Política para registros: permitir tudo para anon (desenvolvimento)
DROP POLICY IF EXISTS "Allow all" ON registros;
CREATE POLICY "Allow all" ON registros
  FOR ALL USING (true) WITH CHECK (true);

-- Políticas para Storage
DROP POLICY IF EXISTS "Imagens públicas" ON storage.objects;
CREATE POLICY "Imagens públicas" ON storage.objects
  FOR SELECT USING (bucket_id = 'imagens');

DROP POLICY IF EXISTS "Permitir upload" ON storage.objects;
CREATE POLICY "Permitir upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'imagens');

DROP POLICY IF EXISTS "Permitir delete" ON storage.objects;
CREATE POLICY "Permitir delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'imagens');

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

-- Triggers para atualização automática
DROP TRIGGER IF EXISTS update_bairros_updated_at ON bairros;
CREATE TRIGGER update_bairros_updated_at 
  BEFORE UPDATE ON bairros
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_registros_updated_at ON registros;
CREATE TRIGGER update_registros_updated_at 
  BEFORE UPDATE ON registros
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 4. Clique em "Run" ▶️

---

## Passo 3: Verificar Conexão

### Teste rápido no Console do Navegador:

1. Abra seu site (localhost:3000 ou o deploy na Vercel)
2. Pressione `F12` → aba "Console"
3. Digite:

```javascript
// Verificar se as variáveis estão carregadas
console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Configurada' : 'NÃO configurada');
```

> Nota: No Next.js, as variáveis só aparecem no servidor ou se forem NEXT_PUBLIC_

---

## Passo 4: Verificar Erros no Console

No navegador (F12 → Console), procure por erros como:

| Erro | Solução |
|------|---------|
| `Invalid API key` | A chave do Supabase está incorreta |
| `relation "bairros" does not exist` | As tabelas não foram criadas - execute o SQL acima |
| `new row violates row-level security policy` | As políticas RLS estão bloqueando - execute a parte de RLS do SQL |
| `Failed to fetch` | Projeto pode estar pausado ou sem internet |

---

## Passo 5: Teste Manual

Depois de executar o SQL, teste criando um bairro direto no Supabase:

1. No Supabase Dashboard, vá em "Table Editor"
2. Clique em "bairros"
3. Clique em "Insert" → "Insert row"
4. Preencha: `nome: "Teste Bairro"`, `cidade: "São Paulo"`
5. Clique em "Save"

6. Volte ao seu site e recarregue - o bairro deve aparecer!

---

## 🔑 Credenciais Atuais (do arquivo .env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://exnqmgcolnfawleqslce.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Se quiser criar um novo projeto:
1. Vá em https://supabase.com/dashboard
2. "New Project"
3. Cole as novas credenciais no arquivo `.env.local`
4. Execute o SQL acima no novo projeto

---

## 🆘 Ainda não funciona?

Me mostre:
1. Print do erro que aparece no console do navegador (F12)
2. Print da tela "Table Editor" do Supabase mostrando as tabelas
3. Confirme se o projeto está ativo (não pausado)
