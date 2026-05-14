# 🚀 Guia de Deploy - Perfil Gestão

## 1️⃣ Configurar o Supabase

### Obter as credenciais:
1. Acesse: https://app.supabase.com
2. Clique no seu projeto
3. Vá em **Project Settings** (engrenagem no menu lateral)
4. Clique em **API**
5. Copie:
   - `URL` (ex: `https://exnqmgcolnfawleqslce.supabase.co`)
   - `anon public` (começa com `eyJ...`)

### Configurar o Banco de Dados:
1. No Supabase, vá em **SQL Editor**
2. Cole e execute este SQL:

```sql
-- Tabela de bairros
CREATE TABLE bairros (
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
CREATE TABLE registros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bairro_id UUID REFERENCES bairros(id) ON DELETE CASCADE,
  categoria TEXT NOT NULL,
  secao TEXT NOT NULL,
  dados JSONB DEFAULT '{}',
  status TEXT DEFAULT 'Pendente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Índices para performance
CREATE INDEX idx_registros_bairro ON registros(bairro_id);
CREATE INDEX idx_registros_categoria ON registros(categoria);

-- Bucket para imagens (já deve existir, mas por precaução)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('imagens', 'imagens', true)
ON CONFLICT (id) DO NOTHING;
```

### Configurar permissões do Storage:
1. Vá em **Storage** → **Policies**
2. Clique em **New Policy** no bucket "imagens"
3. Crie estas 2 policies:

**Policy 1 - Leitura pública:**
```sql
CREATE POLICY "Imagens públicas" ON storage.objects
  FOR SELECT USING (bucket_id = 'imagens');
```

**Policy 2 - Upload permitido:**
```sql
CREATE POLICY "Permitir upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'imagens');
```

---

## 2️⃣ Preparar o Projeto Local

##1# Atualizar o arquivo `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://exnqmgcolnfawleqslce.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui-cole-a-chave-completa
```

> ⚠️ **IMPORTANTE**: Substitua `sua-chave-anon-aqui` pela chave real do Supabase!

---

## 3️⃣ Deploy na Vercel

### Opção A - Deploy via GitHub (Recomendado)

1. **Crie um repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/perfil-gestao.git
   git push -u origin main
   ```

2. **Acesse a Vercel:**
   - Vá para https://vercel.com
   - Login com sua conta GitHub
   - Clique **"Add New Project"**
   - Importe o repositório `perfil-gestao`

3. **Configurar variáveis de ambiente:**
   - No painel de deploy, clique em **"Environment Variables"**
   - Adicione:
     ```
     NEXT_PUBLIC_SUPABASE_URL = https://exnqmgcolnfawleqslce.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY = sua-chave-anon-aqui
     ```

4. **Deploy:**
   - Clique em **"Deploy"**
   - Aguarde o build (2-3 minutos)
   - Pronto! 🎉

### Opção B - Deploy via CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login na Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Configurar variáveis:**
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

---

## 4️⃣ Verificar se está funcionando

Acesse a URL gerada pela Vercel (ex: `https://perfil-gestao.vercel.app`)

Se aparecer a tela inicial sem erros, está tudo certo! ✅

---

## 🔧 Solução de Problemas

### Erro: "Failed to connect to Supabase"
- Verifique se as variáveis de ambiente estão corretas
- Certifique-se de que o projeto Supabase está ativo

### Erro: "relation 'bairros' does not exist"
- Execute o SQL de criação das tabelas no SQL Editor do Supabase

### Erro ao fazer upload de imagens
- Verifique se as policies do Storage estão configuradas
- Confirme se o bucket "imagens" existe e está público

### Build falha na Vercel
- Verifique se o arquivo `next.config.ts` está correto
- Certifique-se de que todas as dependências estão no `package.json`

---

## 📱 URL do Projeto

Após o deploy, sua aplicação estará disponível em:
```
https://perfil-gestao.vercel.app
```

Ou no domínio personalizado que você configurar.
