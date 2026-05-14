# ✅ Verificação Antes do Deploy

## Erros Corrigidos

Os seguintes problemas foram corrigidos:

1. **Acesso seguro a dados** - O código agora verifica se `dados` existe e é um objeto antes de acessar propriedades
2. **Conversão de tipos** - Valores são convertidos para string antes de serem exibidos
3. **Verificação de Supabase** - O sistema verifica se as credenciais existem antes de tentar conectar

## Checklist de Configuração

### 1. Arquivo .env.local
Crie/atualize o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://exnqmgcolnfawleqslce.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui-cole-a-chave-completa-do-supabase
```

> ⚠️ **IMPORTANTE**: A chave `NEXT_PUBLIC_SUPABASE_ANON_KEY` deve ser a chave `anon public` do seu projeto Supabase (começa com `eyJ...`)

### 2. Banco de Dados no Supabase
Execute no SQL Editor do Supabase:

```sql
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

-- Índices
CREATE INDEX IF NOT EXISTS idx_registros_bairro ON registros(bairro_id);
CREATE INDEX IF NOT EXISTS idx_registros_categoria ON registros(categoria);
```

### 3. Storage no Supabase
1. Vá em **Storage** no menu lateral
2. Crie um bucket chamado `imagens` (se não existir)
3. Deixe como **Public bucket**
4. Adicione as policies:

```sql
-- Policy para leitura
CREATE POLICY "Imagens públicas" ON storage.objects
  FOR SELECT USING (bucket_id = 'imagens');

-- Policy para upload
CREATE POLICY "Permitir upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'imagens');
```

## Como Obter a Chave do Supabase

1. Acesse: https://app.supabase.com
2. Entre no seu projeto
3. Clique em **Project Settings** (ícone de engrenagem)
4. Clique em **API** no menu lateral
5. Copie o valor de `anon public` (é uma string longa que começa com `eyJ`)

## Testar Localmente

Antes de fazer o deploy, teste localmente:

```bash
npm install
npm run dev
```

Acesse http://localhost:3000 e verifique se:
- [ ] A página inicial carrega sem erros
- [ ] Consegue criar um bairro (se o Supabase estiver configurado)
- [ ] Não há erros no console do navegador

## Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Envie o código:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/perfil-gestao.git
   git push -u origin main
   ```
3. Acesse https://vercel.com
4. Importe o projeto
5. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`: https://exnqmgcolnfawleqslce.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: sua-chave-aqui
6. Clique em **Deploy**

### Opção 2: Via Vercel CLI

```bash
npx vercel --prod
```

E siga as instruções.

## Solução de Problemas

### Erro "setBairros is not a function"
Verifique se o arquivo está salvo corretamente e tente reiniciar o servidor de desenvolvimento.

### Erro "Cannot read properties of undefined"
Isso foi corrigido nas últimas atualizações. Certifique-se de que está usando a versão mais recente do código.

### Erro "Failed to fetch"
Verifique se as credenciais do Supabase estão corretas no arquivo `.env.local`.

### Erro "relation 'bairros' does not exist"
Execute o SQL de criação das tabelas no Supabase (veja item 2 do checklist).

## Precisa de Ajuda?

Se continuar com erros, verifique:
1. As variáveis de ambiente estão corretas?
2. O Supabase está online?
3. As tabelas foram criadas?
4. O bucket de imagens existe?
