-- ============================================================
-- DADOS FICTÍCIOS PARA APRESENTAÇÃO
-- Execute este SQL para popular o sistema com dados de exemplo
-- ============================================================

-- ============================================================
-- PROJETO 1: PERFIL GESTÃO (Bairros)
-- ============================================================

-- Inserir bairros
INSERT INTO bairros (id, nome, descricao, cidade, estado, imagem_url, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Centro', 'Bairro histórico com comércio local e residências', 'São Paulo', 'SP', NULL, NOW(), NOW()),
('550e8400-e29b-41d4-a716-446655440001', 'Jardim das Flores', 'Bairro residencial com áreas verdes', 'São Paulo', 'SP', NULL, NOW(), NOW()),
('550e8400-e29b-41d4-a716-446655440002', 'Vila Nova', 'Bairro em desenvolvimento com novas construções', 'São Paulo', 'SP', NULL, NOW(), NOW())
ON CONFLICT DO NOTHING;

-- Inserir registros - Perfil Epidemiológico (Dengue)
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'epidemiologico', 'Dengue', 
'{"tipo_caso": "Confirmado", "data_notificacao": "2026-03-15", "endereco_caso": "Rua das Flores, 123", "resultado_vistoria": "Foco encontrado em caixa d' || chr(39) || 'água. Tratado e eliminado."}', 
'Em atendimento', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'epidemiologico', 'Cirurgias', 
'{"nome_paciente": "Maria Silva", "tipo_cirurgia": "Apendicectomia", "unidade_saude": "UBS Jardim das Flores", "data_cirurgia": "2026-03-10"}', 
'Resolvido', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'epidemiologico', 'Vacinação', 
'{"campanha": "Vacinação contra gripe", "meta": 500, "atingido": 342, "percentual": "68%"}', 
'Em andamento', NOW(), NOW());

-- Inserir registros - Infraestrutura
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'infraestrutura', 'Alagamentos', 
'{"local": "Rua Principal esquina com Av. Brasil", "data": "2026-03-20", "nivel": "Moderado", "acoes": "Desobstrução de bueiro realizada. Monitoramento contínuo."}', 
'Resolvido', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'infraestrutura', 'Deslizamentos', 
'{"tipo_ocorrencia": "Deslizamento de terra", "nivel_risco": "Alto", "local": "Morro da Paz, área 3", "data": "2026-03-18", "familias_afetadas": "5", "acoes": "Famílias removidas para abrigo. Defesa Civil acionada."}', 
'Em atendimento', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'infraestrutura', 'Vias Públicas', 
'{"local": "Rua dos Trabalhadores", "tipo_problema": "Buracos", "data": "2026-03-19", "descricao": "Vários buracos prejudicando o trânsito", "acoes": "Orçamento solicitado para recuperação asfáltica"}', 
'Pendente', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'infraestrutura', 'Iluminação Pública', 
'{"local": "Poste 45 - Rua das Palmeiras", "tipo_falha": "Lâmpada apagada", "data": "2026-03-21", "observacoes": "Solicitação de troca de lâmpada LED"}', 
'Pendente', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'infraestrutura', 'Saneamento', 
'{"local": "Rua das Orquídeas", "condicao": "Esgoto a céu aberto", "data": "2026-03-17", "acoes": "Equipe da SEMUSB notificada para reparo emergencial"}', 
'Em análise', NOW(), NOW());

-- Inserir registros - Saúde
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'saude', 'Posto de Saúde Referência', 
'{"nome_unidade": "UBS Centro", "endereco": "Av. Principal, 1000", "telefone": "(11) 3333-4444", "horario": "7h às 19h", "observacoes": "Atendimento por demanda espontânea e agendamento"}', 
'Ativo', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'saude', 'Serviços e Programas', 
'{"nome_programa": "Programa Saúde da Família", "descricao": "Acompanhamento de gestantes, hipertensos e diabéticos", "publico_alvo": "Toda comunidade", "dias_atendimento": "Segunda a Sexta"}', 
'Ativo', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'saude', 'Medicamentos em Falta', 
'{"nome_item": "Metformina 500mg", "unidade": "UBS Centro", "data_verificacao": "2026-03-22", "observacoes": "Medicamento em falta há 15 dias. Pacientes diabeticos sem reposição"}', 
'Pendente', NOW(), NOW());

-- Inserir registros - Educação
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'educacao', 'Escola Referência', 
'{"nome_escola": "Escola Municipal João da Silva", "endereco": "Rua da Educação, 500", "telefone": "(11) 3333-5555", "diretor": "Profª. Maria Oliveira", "perfis": "Educação Infantil, Ensino Fundamental I e II"}', 
'Ativo', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'educacao', 'Perfil Educacional', 
'{"total_alunos": 450, "numero_turmas": 18, "numero_professores": 22, "taxa_aprovacao": "94%"}', 
'Ativo', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'educacao', 'Inconformidades', 
'{"tipo_inconformidade": "Falta de professor de matemática", "descricao": "Turma do 8º ano sem professor há 3 semanas", "escola": "EM João da Silva", "acoes": "Concurso em andamento, professor temporário alocado"}', 
'Em tratativa', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'educacao', 'Alunos sem Estudar', 
'{"quantidade": 12, "faixa_etaria": "7 a 14 anos", "motivos": "Trabalho infantil, falta de transporte, questões sociais", "acoes": "Busca ativa realizada, encaminhamento ao CREAS"}', 
'Em tratativa', NOW(), NOW());

-- Inserir registros - Cadastro Social
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'social', 'Famílias do Bairro', 
'{"nome_responsavel": "José Santos", "cpf": "123.456.789-00", "endereco": "Rua Alegria, 45", "telefone": "(11) 99999-1111", "numero_membros": 4, "renda": "1 salário mínimo"}', 
'Cadastrado', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'social', 'Auxílios Governamentais', 
'{"nome_beneficiario": "Ana Paula Lima", "tipos_auxilio": "Bolsa Família, BPC", "nis": "12345678901", "valor": "R$ 1.200,00 mensal"}', 
'Ativo', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'social', 'Vulnerabilidades Sociais', 
'{"nome": "Família Souza", "vulnerabilidades": "Baixa renda (menos de ½ salário mínimo), Desempregado", "renda": "R$ 800,00", "tempo_desemprego": "8 meses", "observacoes": "Família monoparental, mãe solteira com 3 crianças"}', 
'Em acompanhamento', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'social', 'Acolhimentos e Auxílios', 
'{"nome_beneficiario": "Carlos Eduardo", "tipo_acolhimento": "Cesta básica", "data": "2026-03-15", "descricao": "Entrega de cesta básica emergencial", "encaminhamentos": "CRAS para cadastro no CadÚnico"}', 
'Entregue', NOW(), NOW());

-- Inserir registros - Gestão Pública
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'gestao', 'Ações Realizadas', 
'{"nome_acao": "Mutirão de limpeza urbana", "data": "2026-03-10", "local": "Praça Central", "recursos": "R$ 5.000,00", "atendimentos": "150 famílias", "descricao": "Limpeza de terrenos baldios e retirada de entulho"}', 
'Concluído', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'gestao', 'Projetos', 
'{"nome_projeto": "Praça Nova Vida", "descricao": "Reforma completa da praça com academia ao ar livre", "status_projeto": "Em execução", "data_inicio": "2026-02-01", "data_fim": "2026-06-30", "orcamento": "R$ 150.000,00"}', 
'Em execução', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'gestao', 'Orçamento Participativo', 
'{"demanda": "Reforma da UBS Centro", "descricao": "Ampliação e modernização da unidade de saúde", "votos": 234, "posicao": 1, "status_prioridade": "Priorizada"}', 
'Em execução', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'gestao', 'Segurança', 
'{"tipo_ocorrencia": "Furto", "data": "2026-03-19", "horario": "14:30", "local": "Rua Comercial, loja 12", "horarios_ronda": "8h, 14h, 20h", "efetivo_policial": "3 viaturas", "numero_bo": "BO-2026-0345"}', 
'Em investigação', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'gestao', 'Limpeza Urbana', 
'{"tipo_problema": "Ponto de acúmulo de lixo", "local": "Esquina Rua B com Rua C", "horarios_coleta": "Ter, Qui, Sáb - 6h", "efetivo_limpeza": "2 equipes", "acoes": "Limpeza realizada, multa aplicada ao responsável"}', 
'Resolvido', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440000', 'gestao', 'Fiscalização', 
'{"tipo_diligencia": "Pontual", "data": "2026-03-20", "local": "Estabelecimento Comercial XYZ", "inconformidades": "Alvará vencido, lixo inadequado", "sujeitos": "Proprietário João Mercado", "acoes": "Notificação emitida, prazo de 48h para regularização"}', 
'Em tratativa', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'gestao', 'Sugestões e Reclamações', 
'{"tipo": "Reclamação", "nome_morador": "Pedro Henrique", "contato": "pedro@email.com", "assunto": "Barulho excessivo em obra", "mensagem": "Obra no terreno ao lado está com horário inadequado, barulho após 22h"}', 
'Encaminhado', NOW(), NOW());

-- Inserir registros - Residentes
INSERT INTO registros (bairro_id, categoria, secao, dados, status, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'residentes', 'Moradores', 
'{"nome": "Antônio Carlos Mendes", "cpf": "987.654.321-00", "telefone": "(11) 98888-7777", "data_nascimento": "1985-06-15", "endereco": "Rua Principal, 789", "numero": "45", "queixas": "Problemas com iluminação pública", "problemas": "Infraestrutura, Iluminação", "observacoes": "Morador antigo, participa de conselho de bairro"}', 
'Em atendimento', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440001', 'residentes', 'Moradores', 
'{"nome": "Fernanda Lima Souza", "cpf": "456.789.123-99", "telefone": "(11) 97777-6666", "data_nascimento": "1990-12-03", "endereco": "Av. das Flores, 234", "numero": "12", "queixas": "Solicitação de melhorias no parque", "problemas": "Infraestrutura", "observacoes": ""}', 
'Pendente', NOW(), NOW()),

('550e8400-e29b-41d4-a716-446655440002', 'residentes', 'Moradores', 
'{"nome": "Roberto Dias", "cpf": "789.123.456-66", "telefone": "(11) 96666-5555", "data_nascimento": "1978-03-22", "endereco": "Rua Nova, 56", "numero": "8", "queixas": "Falta de água nos fins de semana", "problemas": "Saneamento", "observacoes": "Problema recorrente no bairro"}', 
'Em análise', NOW(), NOW());

-- ============================================================
-- PROJETO 2: GABINETE DO VEREADOR
-- ============================================================

-- Inserir vereador
INSERT INTO vereadores (id, nome, partido, email, telefone, biografia, mandato_inicio, mandato_fim, created_at, updated_at) VALUES
('660e8400-e29b-41d4-a716-446655440000', 'Carlos Alberto Silva', 'PSB', 'vereador.carlos@gabinete.sp.gov.br', '(11) 3333-8888', 'Vereador há 8 anos, focado em saúde e educação. Advogado e ativista comunitário.', '2025-01-01', '2028-12-31', NOW(), NOW())
ON CONFLICT DO NOTHING;

-- Inserir indicações
INSERT INTO indicacoes (id, numero, ano, vereador_id, destinatario, assunto, descricao, bairros, data_protocolo, status, prioridade, created_at, updated_at) VALUES
('770e8400-e29b-41d4-a716-446655440000', '001/2026', 2026, '660e8400-e29b-41d4-a716-446655440000', 'SEMUR - Secretaria de Urbanismo', 'Reforma de praça no bairro Centro', 'Solicito a reforma completa da Praça Central do bairro Centro, incluindo iluminação, bancos e área verde', ARRAY['Centro'], '2026-01-15', 'Em tramitação', 'Alta', NOW(), NOW()),

('770e8400-e29b-41d4-a716-446655440001', '002/2026', 2026, '660e8400-e29b-41d4-a716-446655440000', 'SEMUSB - Secretaria de Saúde', 'Ampliação do horário da UBS Jardim das Flores', 'Solicito a ampliação do horário de atendimento da UBS para incluir sábados', ARRAY['Jardim das Flores'], '2026-02-10', 'Respondida', 'Média', NOW(), NOW());

-- Inserir requerimentos
INSERT INTO requerimentos (id, numero, ano, vereador_id, tipo, destinatario, assunto, fundamentacao, data_protocolo, status, prioridade, created_at, updated_at) VALUES
('880e8400-e29b-41d4-a716-446655440000', '001/2026', 2026, '660e8400-e29b-41d4-a716-446655440000', 'Informação', 'SEMED - Secretaria de Educação', 'Quantidade de escolas sem professores de matemática', 'Considerando a importância do ensino de matemática, solicito informações sobre a carência de professores', '2026-03-05', 'Atendido', 'Média', NOW(), NOW()),

('880e8400-e29b-41d4-a716-446655440001', '002/2026', 2026, '660e8400-e29b-41d4-a716-446655440000', 'Providências', 'SEMOB - Secretaria de Mobilidade', 'Instalação de semáforo na Av. Brasil', 'Solicito providências quanto à instalação de semáforo no cruzamento da Av. Brasil com Rua das Flores', '2026-03-12', 'Em tramitação', 'Urgente', NOW(), NOW());

-- Inserir atendimentos
INSERT INTO atendimentos (id, vereador_id, protocolo, data_atendimento, tipo, cidadao_nome, cidadao_cpf, cidadao_telefone, bairro, demanda, categoria, encaminhamento, orgao_destino, status, prioridade, created_at, updated_at) VALUES
('990e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440000', 'AT-2026-001', '2026-03-18', 'Presencial', 'Maria José Santos', '111.222.333-44', '(11) 95555-4444', 'Centro', 'Solicitação de vaga em creche para filha de 2 anos', 'Educação', 'Encaminhado para análise da SEMED', 'SEMED', 'Encaminhado', 'Alta', NOW(), NOW()),

('990e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440000', 'AT-2026-002', '2026-03-19', 'WhatsApp', 'João Pedro Almeida', '222.333.444-55', '(11) 94444-3333', 'Vila Nova', 'Reclamação sobre buracos na rua', 'Infraestrutura', 'Indicação protocolada nº 003/2026', 'SEMUR', 'Resolvido', 'Média', NOW(), NOW()),

('990e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440000', 'AT-2026-003', '2026-03-20', 'Telefone', 'Ana Beatriz Costa', '333.444.555-66', '(11) 93333-2222', 'Jardim das Flores', 'Solicitação de consulta especializada', 'Saúde', 'Encaminhamento para UBS referência', 'SEMUSB', 'Em tratativa', 'Urgente', NOW(), NOW());

-- ============================================================
-- PROJETO 3: FUNSAU
-- ============================================================

-- Inserir pacientes
INSERT INTO funsau_pacientes (id, cpf, nome, data_nascimento, sexo, telefone, email, endereco, numero_carteirinha, patente, tempo_servico, condicoes_especiais, created_at, updated_at) VALUES
('aa0e8400-e29b-41d4-a716-446655440000', '123.456.789-00', 'José Antônio Silva', '1975-08-15', 'M', '(11) 98888-1111', 'jose.silva@email.com', 'Rua das Palmeiras, 123', 'FUNSAU-001234', 'Servidor Público', 15, ARRAY['Diabetes', 'Hipertensão'], NOW(), NOW()),

('aa0e8400-e29b-41d4-a716-446655440001', '987.654.321-00', 'Maria Fernanda Lima', '1982-04-22', 'F', '(11) 97777-2222', 'maria.lima@email.com', 'Av. Brasil, 456', 'FUNSAU-005678', 'Professora', 8, NULL, NOW(), NOW()),

('aa0e8400-e29b-41d4-a716-446655440002', '456.789.123-00', 'Carlos Eduardo Souza', '1968-11-30', 'M', '(11) 96666-3333', 'carlos.souza@email.com', 'Rua dos Trabalhadores, 789', 'FUNSAU-009012', 'Policial Militar', 25, ARRAY['Hipertensão'], NOW(), NOW());

-- Inserir profissionais
INSERT INTO funsau_profissionais (id, nome, cpf, crm, especialidade, tipo, telefone, email, ativo, created_at, updated_at) VALUES
('bb0e8400-e29b-41d4-a716-446655440000', 'Dr. Ricardo Mendes', '111.222.333-44', 'CRM-SP 12345', 'Clínica Geral', 'Médico', '(11) 95555-4444', 'dr.ricardo@hospital.com', true, NOW(), NOW()),

('bb0e8400-e29b-41d4-a716-446655440001', 'Dra. Ana Paula Ferreira', '222.333.444-55', 'CRM-SP 67890', 'Cardiologia', 'Médico', '(11) 94444-5555', 'dra.ana@clinica.com', true, NOW(), NOW()),

('bb0e8400-e29b-41d4-a716-446655440002', 'Dr. Fernando Castro', '333.444.555-66', 'CRM-SP 11111', 'Ortopedia', 'Médico', '(11) 93333-6666', 'dr.fernando@orto.com', true, NOW(), NOW());

-- Inserir protocolos
INSERT INTO funsau_protocolos (id, numero_protocolo, ano, paciente_id, profissional_solicitante_id, data_solicitacao, tipo_atendimento, especialidade, cid_principal, sintomas, diagnostico_preliminar, procedimentos_solicitados, status, prioridade, valor_total_solicitado, created_at, updated_at) VALUES
('cc0e8400-e29b-41d4-a716-446655440000', 'PROT-2026-0001', 2026, 'aa0e8400-e29b-41d4-a716-446655440000', 'bb0e8400-e29b-41d4-a716-446655440000', NOW(), 'Consulta', 'Clínica Geral', 'E11', 'Fadiga, sede excessiva', 'Diabetes mellitus tipo 2 descompensada', '[{"codigo_tuss": "10101012", "descricao": "Consulta médica", "quantidade": 3, "valor_unitario": 150.00, "valor_total": 450.00, "brasindice_referencia": "v24.01"}]', 'Liberado', 'Normal', 450.00, NOW(), NOW()),

('cc0e8400-e29b-41d4-a716-446655440001', 'PROT-2026-0002', 2026, 'aa0e8400-e29b-41d4-a716-446655440001', 'bb0e8400-e29b-41d4-a716-446655440001', NOW(), 'Exame', 'Cardiologia', 'I10', 'Dor no peito, palpitações', 'Hipertensão arterial sistêmica', '[{"codigo_tuss": "20101013", "descricao": "Eletrocardiograma", "quantidade": 1, "valor_unitario": 120.00, "valor_total": 120.00, "brasindice_referencia": "v24.01"}, {"codigo_tuss": "20102014", "descricao": "Ecocardiograma", "quantidade": 1, "valor_unitario": 350.00, "valor_total": 350.00, "brasindice_referencia": "v24.01"}]', 'Auditoria Prévia', 'Urgente', 470.00, NOW(), NOW()),

('cc0e8400-e29b-41d4-a716-446655440002', 'PROT-2026-0003', 2026, 'aa0e8400-e29b-41d4-a716-446655440002', 'bb0e8400-e29b-41d4-a716-446655440002', NOW(), 'Cirurgia', 'Ortopedia', 'M17', 'Dor intensa no joelho direito', 'Gonartrose (artrose no joelho)', '[{"codigo_tuss": "30101015", "descricao": "Prótese total de joelho", "quantidade": 1, "valor_unitario": 8500.00, "valor_total": 8500.00, "brasindice_referencia": "v24.01"}]', 'Triagem', 'Normal', 8500.00, NOW(), NOW());

-- Inserir auditorias
INSERT INTO funsau_auditorias (id, protocolo_id, tipo, auditor_id, data_auditoria, status, dados_completos, documentacao_compativel, procedimento_adequado, valor_conforme_brasindice, historico_consistente, valor_aprovado, valor_glosado, justificativa, amostragem_inteligente, created_at, updated_at) VALUES
('dd0e8400-e29b-41d4-a716-446655440000', 'cc0e8400-e29b-41d4-a716-446655440000', 'Prévia', 'bb0e8400-e29b-41d4-a716-446655440000', NOW(), 'Aprovado', true, true, true, true, true, 450.00, 0, 'Dados completos, paciente com diabetes em acompanhamento. Procedimento adequado.', false, NOW(), NOW()),

('dd0e8400-e29b-41d4-a716-446655440001', 'cc0e8400-e29b-41d4-a716-446655440001', 'Prévia', 'bb0e8400-e29b-41d4-a716-446655440000', NOW(), 'Em Análise', true, true, true, true, true, 0, 0, 'Aguardando segunda opinião para exame de alto custo', true, NOW(), NOW());

-- Inserir atendimentos executados
INSERT INTO funsau_atendimentos (id, protocolo_id, paciente_id, profissional_executante_id, local_execucao, tipo_local, data_execucao, hora_inicio, hora_fim, validacao_realizada, tipo_validacao, codigo_validacao, procedimentos_executados, observacoes, created_at, updated_at) VALUES
('ee0e8400-e29b-41d4-a716-446655440000', 'cc0e8400-e29b-41d4-a716-446655440000', 'aa0e8400-e29b-41d4-a716-446655440000', 'bb0e8400-e29b-41d4-a716-446655440000', 'Clínica Médica Centro', 'Clínica', '2026-03-22', '09:00', '09:30', true, 'QR Code', 'A1B2C3', '[{"codigo_tuss": "10101012", "descricao": "Consulta médica", "quantidade_realizada": 1, "valor_executado": 150.00, "resultado": "Paciente orientado sobre dieta e medicação"}]', 'Primeira consulta do protocolo. Paciente compareceu e foi atendido.', NOW(), NOW());

-- Inserir documentos
INSERT INTO funsau_documentos (id, protocolo_id, paciente_id, tipo, descricao, arquivo_url, nome_arquivo, formato, acesso_liberado, liberacao_qr_code, uploaded_by, created_at, updated_at) VALUES
('ff0e8400-e29b-41d4-a716-446655440000', 'cc0e8400-e29b-41d4-a716-446655440000', 'aa0e8400-e29b-41d4-a716-446655440000', 'Laudo', 'Laudo médico inicial', 'https://storage.exemplo.com/laudos/laudo_001.pdf', 'laudo_001.pdf', 'PDF', true, true, 'bb0e8400-e29b-41d4-a716-446655440000', NOW(), NOW());

-- Inserir pagamentos
INSERT INTO funsau_pagamentos (id, protocolo_id, numero_nota_fiscal, valor_solicitado, valor_auditado, valor_aprovado, valor_glosado, status_pagamento, data_prevista_pagamento, created_at, updated_at) VALUES
('gg0e8400-e29b-41d4-a716-446655440000', 'cc0e8400-e29b-41d4-a716-446655440000', 'NF-2026-001234', 450.00, 450.00, 450.00, 0, 'Pago', '2026-03-30', NOW(), NOW()),

('gg0e8400-e29b-41d4-a716-446655440001', 'cc0e8400-e29b-41d4-a716-446655440001', NULL, 470.00, 0, 0, 0, 'Pendente', NULL, NOW(), NOW());

-- Inserir liberações automáticas
INSERT INTO funsau_liberacoes_automaticas (id, paciente_id, condicao, procedimentos_liberados, validade, criterio_liberacao, observacoes, ativo, created_at, updated_at) VALUES
('hh0e8400-e29b-41d4-a716-446655440000', 'aa0e8400-e29b-41d4-a716-446655440000', 'Diabetes Mellitus Tipo 2', ARRAY['Consulta endocrinologia', 'Hemoglobina glicada', 'Glicemia de jejum'], NULL, 'Paciente com diagnóstico confirmado de DM2 - sessões ilimitadas conforme necessidade médica', 'Liberação automática conforme portaria 2024/03', true, NOW(), NOW());

-- Inserir auditoria inteligente
INSERT INTO funsau_auditoria_inteligente (id, paciente_id, protocolo_id, frequencia_mensal_procedimentos, valor_medio_procedimentos, discrepancia_preco_detectada, alertas_gerados, risco_fraude, recomendacao_auditoria, necessita_auditoria_detalhada, created_at) VALUES
('ii0e8400-e29b-41d4-a716-446655440000', 'aa0e8400-e29b-41d4-a716-446655440002', 'cc0e8400-e29b-41d4-a716-446655440002', 2, 4250.00, false, ARRAY['Procedimento de alto custo', 'Paciente com múltiplas comorbidades'], 'Baixo', 'Procedimento adequado para quadro clínico. Aprovar com monitoramento pós-operatório.', false, NOW());

-- ============================================================
-- MENSAGEM DE CONFIRMAÇÃO
-- ============================================================
SELECT 'Dados de apresentação inseridos com sucesso!' AS status;
