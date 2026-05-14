# Instruções para Popular Banco Supabase - FUNSAU PM

## Passo 1: Configurar Supabase

1. Acesse https://supabase.com
2. Crie um novo projeto ou use um existente
3. Copie a URL e a chave de serviço
4. Configure no arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_servico_aqui
```

## Passo 2: Executar o Seed

### Opção A: Via SQL Editor (Recomendado)

1. No dashboard do Supabase, vá para "SQL Editor"
2. Clique em "New query"
3. Cole todo o conteúdo do arquivo `supabase-funsau-completo.sql`
4. Clique em "Run"

Tempo de execução: ~30-60 segundos

### Opção B: Via CLI

```bash
# Instale o Supabase CLI
npm install -g supabase

# Link com seu projeto
supabase link --project-id seu-id-aqui

# Execute o seed
supabase db reset
supabase db push
```

### Opção C: Via API (para automação)

```javascript
// Use o script seed-automatico.js
node seed-automatico.js
```

## Passo 3: Verificar os Dados

Execute estas queries para verificar:

```sql
-- Total de pacientes
SELECT COUNT(*) as total_pacientes FROM pacientes_funsau;
-- Expected: 45

-- Total de protocolos
SELECT COUNT(*) as total_protocolos FROM protocolos_funsau;
-- Expected: 200

-- Total de auditorias
SELECT COUNT(*) as total_auditorias FROM auditorias_funsau;
-- Expected: 150

-- Total de documentos
SELECT COUNT(*) as total_documentos FROM documentos_funsau;
-- Expected: 300

-- Total de usuários
SELECT COUNT(*) as total_usuarios FROM usuarios_sistema;
-- Expected: 20

-- Distribuição por patente
SELECT patente, COUNT(*) as quantidade FROM pacientes_funsau GROUP BY patente ORDER BY COUNT(*) DESC;

-- Valor total processado
SELECT SUM(valor_total) as valor_total FROM protocolos_funsau WHERE status = 'Finalizado';

-- Taxa de glosa média
SELECT AVG((valor_glosado / valor_total) * 100) as taxa_glosa_media FROM protocolos_funsau WHERE valor_glosado > 0;
```

## Passo 4: Testar a Aplicação

```bash
# Se o build falhar por causa das alterações:
npm run build

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000/funsau

## Dados de Acesso para Teste

### Policiais (Pacientes):
- CPF: `456.789.123-00` (Coronel Roberto Dias)
- CPF: `345.678.901-00` (Tenente Ricardo Mendes)
- CPF: `123.456.789-00` (Capitão João Carlos Silva)

### Usuários do Sistema:
- **Admin**: `PM-009012` / senha: `senha123`
- **Auditor**: `PM-012334` / senha: `senha456`
- **Médico**: `PM-034556` / senha: `senha789`
- **Enfermeiro**: `PM-013456` / senha: `senha321`
- **Atendente**: `PM-103223` / senha: `senha654`

## Schema do Banco

### Tabelas Principais:
1. `pacientes_funsau` - Cadastro de policiais
2. `protocolos_funsau` - Protocolos médicos
3. `auditorias_funsau` - Auditorias realizadas
4. `documentos_funsau` - Documentos anexos
5. `historico_atendimentos_funsau` - Histórico clínico
6. `usuarios_sistema` - Usuários e permissões
7. `log_acessos` - Auditoria de acesso
8. `notificacoes` - Sistema de notificações
9. `configuracoes_funsau` - Configurações do sistema
10. `tabela_brasindice` - Tabela de procedimentos

## Solução de Problemas

### Erro: "function gen_random_uuid() does not exist"
```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

### Erro: "function now() does not exist"
```sql
-- O now() é nativo, verifique se o schema está correto
SET search_path TO public;
```

### Limpar todos os dados (RESET)
**ATENÇÃO: Iraá apagar TODOS os dados**

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```

Depois execute o seed novamente.

## Backup dos Dados

Para exportar os dados após o seed:

```bash
supabase db dump --data-only > backup-funsau.sql
```

## Próximos Passos

1. Configure as variáveis de ambiente
2. Execute a aplicação
3. Teste o simulador de protocolo
4. Valide a auditoria automática
5. Verifique os relatórios

Sucesso! ✅
