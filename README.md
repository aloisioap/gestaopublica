# 🏛️ Sistema de Gestão Pública Integrado

Sistema completo com três projetos: **Perfil Gestão** (gestão de bairros), **Gabinete do Vereador** (gestão parlamentar) e **FUNSAU** (gestão e auditoria de processos médicos).

## 🚀 Tecnologias

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **UI Components:** shadcn/ui
- **Banco de Dados:** Supabase (PostgreSQL)
- **Deploy:** Vercel (frontend) + Supabase (backend)

---

## 📦 Projetos do Sistema

### 🏘️ Projeto 01: Perfil Gestão

Gestão completa de bairros com foco em infraestrutura, saúde, educação e assistência social.

**Funcionalidades:**
- Perfil Epidemiológico (Dengue, cirurgias, vacinação)
- Infraestrutura Urbana (alagamentos, energia, água, vias)
- Saúde (postos, medicamentos em falta)
- Educação (escolas, matrículas, inconformidades)
- Cadastro Social (famílias, auxílios, vulnerabilidades)
- Gestão Pública (ações, projetos, orçamento participativo)

---

### ⚖️ Projeto 02: Gabinete do Vereador

Sistema completo para gestão parlamentar e controle de mandato.

**Funcionalidades:**
- **Documentos:** Indicações, Requerimentos, Ofícios, Moções
- **Atendimentos:** Registro de demandas dos cidadãos
- **Agenda:** Sessões, reuniões, visitas
- **Projetos de Lei:** Tramitação e acompanhamento
- **Base Eleitoral:** Lideranças e comunidades
- **Relatórios:** Prestação de contas

---

### 🏥 Projeto 03: FUNSAU - Gestão e Auditoria Médica

Sistema digital completo para gestão e auditoria de processos médicos, substituindo o modelo manual por um fluxo automatizado, rastreável e auditável.

**Fluxo Operacional:**

1. **Triagem Médica** - Atendimento inicial, cadastro do paciente, geração de protocolo único
2. **Auditoria Prévia** - Verificação de dados e documentação (Aprovado/Reprovado/Ajuste)
3. **Consulta por CPF** - Acesso digital do atendente às autorizações
4. **Validação do Paciente** - QR Code, código por email/SMS ou carteirinha com foto
5. **Execução do Procedimento** - Consulta, exame, cirurgia ou procedimento ambulatorial
6. **Upload de Documentos** - XML TISS, laudos e prontuários vinculados ao CPF
7. **Auditoria Final** - Validação de XML, compatibilidade, valores Brasíndice
8. **Finalização Financeira** - Processos aprovados seguem para pagamento

**Funcionalidades:**
- Protocolo digital com número único
- Consulta por CPF (elimina documentos físicos)
- Validação por QR Code, email ou SMS
- Prontuário eletrônico integrado
- Upload de XML TISS
- Auditoria automatizada com regras de glosa
- Controle de valores congelados na data do atendimento
- **Auditoria Inteligente:** Análise de frequência, discrepâncias de preço, alertas de fraude
- Liberações automáticas por perfil (diabetes, hemodiálise, etc)
- Integração com Brasíndice

---

## 🎭 Dados de Demonstração

O sistema inclui **dados fictícios** para apresentação. Ao abrir pela primeira vez, você verá:

- **3 bairros** com registros completos
- **Vereador** com indicações e atendimentos  
- **Pacientes** com protocolos médicos
- Total de **500+ registros** de exemplo

> ℹ️ Uma faixa amarela indica quando está em "Modo Demonstração"

Para usar seus próprios dados, configure o banco de dados conforme abaixo.

---

## 🚀 Deploy

### 1. Configurar Supabase

Acesse [https://supabase.com](https://supabase.com) e crie um novo projeto.

Execute os SQLs na ordem:
1. `supabase-setup-atualizado.sql` - Projeto 01 (Perfil Gestão)
2. `supabase-setup-gabinete.sql` - Projeto 02 (Gabinete)
3. `supabase-setup-funsau.sql` - Projeto 03 (FUNSAU)

### Dados de Demonstração (Opcional)
Para popular com dados fictícios:
```sql
-- Execute: seed-dados-apresentacao.sql
```

### 2. Deploy na Vercel

1. Importe o projeto do GitHub
2. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy!

---

## 💻 Desenvolvimento Local

```bash
npm install
cp .env.example .env.local
# Edite .env.local com suas credenciais
npm run dev
```

Acesse `http://localhost:3000` e escolha o projeto desejado.

---

## 🗂️ Estrutura de Pastas

```
app/
├── page.tsx                    # Seleção de projetos
├── bairro/                     # Projeto 01
├── gabinete/                   # Projeto 02
├── funsau/                     # Projeto 03
└── diagnostico/

types/
├── index.ts                    # Types do Perfil Gestão
├── gabinete.ts                # Types do Gabinete
└── funsau.ts                  # Types do FUNSAU
```

---

## 🎨 Design

- **Estilo:** Modernista, limpo, tipográfico
- **Cores:** Azul (Perfil Gestão), Âmbar (Gabinete), Esmeralda (FUNSAU)

---

## 📄 Licença

MIT License
