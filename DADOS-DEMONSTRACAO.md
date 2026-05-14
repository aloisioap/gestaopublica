# 🎭 Dados de Demonstração

Este sistema vem preenchido com **dados fictícios** para fins de apresentação e demonstração.

---

## 📊 O que está incluído

### Projeto 1: Gestão de Bairros
- **3 bairros** cadastrados (Centro, Jardim das Flores, Vila Nova)
- **Estatísticas** de moradores e problemas
- **Tags** de problemas reportados
- Total: ~500 moradores fictícios

### Projeto 2: Gabinete do Vereador
- **Indicações** protocoladas para diversos órgãos
- **Atendimentos** registrados (presencial, WhatsApp, telefone)
- **Categorias**: Saúde, Educação, Infraestrutura
- Dados de Vereador: Carlos Alberto Silva (PSB)

### Projeto 3: FUNSAU - Gestão Médica
- **3 pacientes** cadastrados:
  - José Antônio Silva (Diabetes, Hipertensão)
  - Maria Fernanda Lima (Sem comorbidades)
  - Carlos Eduardo Souza (Hipertensão)

- **3 protocolos médicos**:
  - Consulta Clínica Geral - Liberada
  - Exames Cardiológicos - Em Auditoria
  - Cirurgia Ortopédica - Em Triagem

- **Profissionais**:
  - Dr. Ricardo Mendes (Clínica Geral)
  - Dra. Ana Paula Ferreira (Cardiologia)
  - Dr. Fernando Castro (Ortopedia)

---

## 🚀 Como usar

### Para apresentação:
1. Execute o SQL de seed: `seed-dados-apresentacao.sql`
2. Ou simplesmente inicie o sistema - os dados mockados aparecerão automaticamente

### Para produção:
1. Configure o banco de dados Supabase
2. Execute os SQLs de setup na ordem:
   - `supabase-setup-atualizado.sql`
   - `supabase-setup-gabinete.sql`
   - `supabase-setup-funsau.sql`
3. Insira seus dados reais

---

## 📝 SQL de Seed

Execute no Supabase para popular com dados de demonstração:

```sql
-- Execute o arquivo: seed-dados-apresentacao.sql
```

Este SQL insere:
- 3 bairros com registros em todas as categorias
- Vereador, assessores, indicações, requerimentos e atendimentos
- Pacientes, profissionais, protocolos e auditorias médicas

---

## 🎨 Identificação Visual

Quando em **modo demonstração**, uma faixa amarela aparece no topo:

> "Modo Demonstração: Dados fictícios para apresentação"

Isso ajuda a identificar que você está vendo dados de exemplo.

---

## 🔄 Alternar entre Mock e Dados Reais

No arquivo `lib/dados-mock.ts`:

```typescript
// Para forçar uso de dados mock (demonstração)
export const usarMock = (): boolean => true;

// Para usar dados do banco (produção)
export const usarMock = (): boolean => false;
```

---

## ⚠️ Aviso Legal

Todos os dados apresentados são **fictícios** e gerados apenas para demonstração do sistema:
- Nomes de pessoas são fictícios
- CPFs são números aleatórios
- Endereços não correspondem a locais reais
- Valores monetários são ilustrativos

Não use estes dados para fins oficiais ou decisões reais.
