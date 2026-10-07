# TRE-PA - Instruções de Instalação

## Schema do Banco de Dados

Execute o arquivo `tre-pa-schema.sql` no SQL Editor do Supabase.

## Estrutura das Tabelas

### 1. tre_usuarios
Servidores do TRE (beneficiários do plano de saúde)

### 2. tre_credenciados
Hospitais, clínicas, laboratórios e consultórios credenciados

### 3. tre_procedimentos
Procedimentos médicos solicitados e executados

### 4. tre_faturas
Faturas com XML TISS e PDFs categorizados

### 5. tre_historico_saude
Histórico de saúde do servidor por categoria

### 6. tre_usuarios_sistema
Usuários do sistema (Gestor, Auditor, Credenciado, Servidor)

### 7. tre_checklist_auditoria
Checklist de itens para auditoria

## Perfis de Acesso

| Perfil | Acesso | Funcionalidades |
|--------|--------|-----------------|
| Gestor_TRE | Total | Dashboards, relatórios, configurações |
| Auditor | Auditoria | Checklist, faturas, glosas |
| Credenciado | Limitado | Upload de XML/PDF, validação de pacientes |
| Funcionario_TRE | Próprio | Histórico, agendamentos, documentos |

## Fluxo do Processo

```
1. SOLICITAÇÃO
   ↓
2. VALIDAÇÃO (QR Code / WhatsApp)
   ↓
3. EXECUÇÃO (no credenciado)
   ↓
4. FATURAMENTO (XML TISS + PDF categorizado)
   ↓
5. AUDITORIA TIS (checklist + aprovação/glosa)
   ↓
6. PAGAMENTO
```

## Dados de Teste

### Servidores:
- TRE0001: Maria Santos Oliveira (Belém-PA)
- TRE0002: João Carlos Silva (Belém-PA)
- TRE0003: Ana Paula Costa (Santarém-PA)
- TRE0004: Pedro Henrique Lima (Belém-PA)
- TRE0005: Fernanda Souza (Belém-PA)

### Credenciados:
- Hospital Metropolitano (Belém-PA)
- Clínica Santa Maria (Belém-PA)
- Hospital Regional do Baixo Amazonas (Santarém-PA)
- Laboratório Einstein (Belém-PA)
- Clínica São Lucas (Belém-PA)

## Categorias de PDF

1. **Consultas** - Consultas médicas e especialidades
2. **Exames** - Exames laboratoriais e de imagem
3. **Internações** - Internações hospitalares
4. **Cirurgias** - Procedimentos cirúrgicos

## Cores da Identidade Visual

```css
--tre-primaria: #1E3A5F;      /* Azul Marinho */
--tre-secundaria: #C8A415;    /* Dourado */
--tre-terciaria: #00796B;     /* Verde Amazônia */
--tre-destaque: #D84315;      /* Laranja/Terra */
```

## URLs de Acesso

- Hub Principal: `/tre`
- Portal do Servidor: `/tre/usuario`
- Painel Gerencial: `/tre/gestor`
- Área do Credenciado: `/tre/prestador`
- Auditoria TIS: `/tre/auditor`

## Validação

O sistema suporta dois métodos de validação:
1. **QR Code**: Leitura da carteirinha digital
2. **WhatsApp**: Confirmação via mensagem

A validação ocorre ANTES da execução do procedimento.
