# TRT 8ª Região - Instruções de Instalação

## Schema do Banco de Dados

Execute o arquivo `trt-8a-regiao-schema.sql` no SQL Editor do Supabase.

## Estrutura das Tabelas

### 1. trt_usuarios
Servidores do TRT (beneficiários do plano de saúde)

### 2. trt_credenciados
Hospitais, clínicas, laboratórios e consultórios credenciados

### 3. trt_procedimentos
Procedimentos médicos solicitados e executados

### 4. trt_faturas
Faturas com XML TISS e PDFs categorizados

### 5. trt_historico_saude
Histórico de saúde do servidor por categoria

### 6. trt_usuarios_sistema
Usuários do sistema (Gestor, Auditor, Credenciado, Servidor)

### 7. trt_checklist_auditoria
Checklist de itens para auditoria

## Perfis de Acesso

| Perfil | Acesso | Funcionalidades |
|--------|--------|-----------------|
| Gestor_TRT | Total | Dashboards, relatórios, configurações |
| Auditor | Auditoria | Checklist, faturas, glosas |
| Credenciado | Limitado | Upload de XML/PDF, validação de pacientes |
| Funcionario_TRT | Próprio | Histórico, agendamentos, documentos |

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
- TRT0001: Maria Santos Oliveira (Belém-PA)
- TRT0002: João Carlos Silva (Belém-PA)
- TRT0003: Ana Paula Costa (Macapá-AP)
- TRT0004: Pedro Henrique Lima (Belém-PA)
- TRT0005: Fernanda Souza (Belém-PA)

### Credenciados:
- Hospital Metropolitano (Belém-PA)
- Clínica Santa Maria (Belém-PA)
- Hospital de Clínicas do Amapá (Macapá-AP)
- Laboratório Einstein (Belém-PA)
- Clínica São Lucas (Belém-PA)

## Categorias de PDF

1. **Consultas** - Consultas médicas e especialidades
2. **Exames** - Exames laboratoriais e de imagem
3. **Internações** - Internações hospitalares
4. **Cirurgias** - Procedimentos cirúrgicos

## Cores da Identidade Visual

```css
--trt-primaria: #1E3A5F;      /* Azul Marinho */
--trt-secundaria: #C8A415;    /* Dourado */
--trt-terciaria: #00796B;     /* Verde Amazônia */
--trt-destaque: #D84315;      /* Laranja/Terra */
```

## URLs de Acesso

- Hub Principal: `/trt`
- Portal do Servidor: `/trt/usuario`
- Painel Gerencial: `/trt/gestor`
- Área do Credenciado: `/trt/prestador`
- Auditoria TIS: `/trt/auditor`

## Validação

O sistema suporta dois métodos de validação:
1. **QR Code**: Leitura da carteirinha digital
2. **WhatsApp**: Confirmação via mensagem

A validação ocorre ANTES da execução do procedimento.
