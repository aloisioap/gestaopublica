# 🚀 GUIA DE DEPLOY RÁPIDO - Perfil Gestão 2.0

1## ✅ SISTEMA CRIADO COM SUCESSO!

O sistema foi completamente recriado do zero com:
- ✅ Next.js 15 + TypeScript
- ✅ Tailwind CSS + shadcn/ui (design modernista)
- ✅ Supabase (banco de dados gratuito)
- ✅ Upload de fotos dos bairros
- ✅ CRUD completo com edição e exclusão
- ✅ Interface amigável e responsiva

---

## 📋 PASSO A PASSO PARA COLOCAR NO AR

### ETAPA 1: Supabase (Banco de Dados)

1. **Acesse:** https://supabase.com
2. **Crie uma conta** (pode usar GitHub)
3. **Crie um novo pr11111ojeto**
4. **Aguarde** a criação (1-2 minutos)
5. **Vá em:** SQL Editor → New Query
6. **Cole e execute:** o conteúdo do arquivo `supabase-setup.sql`

#### Configurar Storage (para fotos):
1. Vá em **Storage** no menu lateral
2. Clique em **New Bucket**
3. Nome: `imagens`
4. Marque: **Public bucket**
5. Clique em **Save**

#### Pegar credenciais:
1. Vá em **Project Settings** → **API**
2. Copie:
   - `URL` (ex: https://xxxxx.supabase.co)
   - `anon public` (chave longa)

---

### ETAPA 2: Preparar o Código

1. **Renomeie** o arquivo `.env.example` para `.env.local`
2. **Edite** o arquivo `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://sua-url-do-supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

---
//teste asd
### ETAPA 3: Deploy na Vercel

1. **Suba o código no GitHub:**
```bash
git init
git add .
git commit -m "Sistema Perfil Gestão v2.0"
git branch -M main
git remote add origin https://github.com/seu-usuario/perfil-gestao.git
git push -u origin main
```

2. **Acesse:** https://vercel.com
3. **Login com GitHub**
4. **Add New Project**
5. **Importe** o repositório do Perfil Gestão
6. **Configure as Environment Variables:**
   - `NEXT_PUBLIC_SUPABASE_URL` = sua URL do Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = sua chave anon
7. **Clique em Deploy** 🚀

---

## 🎨 FUNCIONALIDADES DO SISTEMA

### Página Inicial
- Cards dos bairros com **fotos**
- Estatísticas em tempo real
- Botão rápido "Adicionar Morador"
- Modal para criar novo bairro com upload de imagem

### Dashboard do Bairro
- 4 cards de categorias coloridos:
  - 🔴 Perfil Epidemiológico
  - 🔵 Infraestrutura  
  - 🟡 Gestão Pública
  - 🟢 Cadastro de Residentes

### Páginas de Categoria
- **Sidebar** com seções
- **Formulários específicos** para cada tipo:
  - Dengue (tipo de caso, vistoria)
  - Cirurgias (paciente, hospital)
  - Alagamentos (nível, ações)
  - Desastres (tipo, famílias afetadas)
  - Moradores (completo: dados, endereço, queixas)
- **Lista de registros** com:
  - Status badge colorido
  - Botão editar ✏️
  - Botão excluir 🗑️

---

## 🆘 SOLUÇÃO DE PROBLEMAS

### "Erro ao conectar com Supabase"
- Verifique se as variáveis de ambiente estão corretas
- Confirme se executou o script SQL
- Verifique se o bucket `imagens` foi criado

### "Upload de imagem não funciona"
- Verifique as políticas do Storage no Supabase
- Aumente o limite de tamanho se necessário

### "Build falha"
- Verifique se todas as dependências foram instaladas: `npm install`
- Confirme que não há erros de TypeScript

---

## 💰 CUSTOS (100% GRATUITO)

| Serviço | Plano Gratuito |
|---------|---------------|
| Vercel | Ilimitado (com alguns limites) |
| Supabase | 500MB + 2M requests/mês |
| GitHub | Ilimitado |

---

## 📱 ESTRUTURA DE ARQUIVOS

```
perfil-gestao/
├── app/                          # Páginas Next.js
│   ├── page.tsx                  # Home (lista de bairros)
│   ├── layout.tsx                # Layout root
│   ├── globals.css               # Estilos globais
│   └── bairro/
│       └── [id]/
│           ├── page.tsx          # Dashboard do bairro
│           └── [categoria]/
│               └── page.tsx      # Página de categoria
├── components/
│   └── ui/                       # Componentes shadcn
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       ├── toast.tsx
│       └── toaster.tsx
├── hooks/
│   └── use-toast.ts              # Hook de notificações
├── lib/
│   ├── utils.ts                  # Utilitários
│   └── supabase.ts               # Cliente Supabase
├── types/
│   ├── index.ts                  # Tipos principais
│   └── database.ts               # Tipos do Supabase
├── .env.example                  # Exemplo de variáveis
├── next.config.ts                # Config Next.js
├── package.json                  # Dependências
├── tailwind.config.ts            # Config Tailwind
├── tsconfig.json                 # Config TypeScript
├── supabase-setup.sql            # Script do banco
└── README.md                     # Documentação
```

---

## 🎉 PRONTO PARA USAR!

O sistema está completo e pronto para deploy. Siga os passos acima e seu sistema estará no ar em minutos!

**Dúvidas?** Consulte o arquivo README.md para mais detalhes.
