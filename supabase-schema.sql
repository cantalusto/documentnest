-- ================================================
-- DocumentNest - Schema do Banco de Dados
-- ================================================
-- Execute este script no SQL Editor do Supabase
-- para criar todas as tabelas e configurações necessárias

-- Habilitar extensão UUID (caso não esteja habilitada)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================
-- TABELA: reunioes
-- ================================================
-- Armazena todas as reuniões cadastradas pelos usuários

CREATE TABLE IF NOT EXISTS public.reunioes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titulo TEXT NOT NULL,
    descricao TEXT,
    data DATE NOT NULL,
    hora TIME,
    participantes TEXT[] DEFAULT '{}',
    decisoes TEXT,
    tarefas TEXT,
    usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Índices para melhorar performance
    CONSTRAINT reunioes_titulo_check CHECK (char_length(titulo) > 0)
);

-- ================================================
-- ÍNDICES
-- ================================================
-- Melhoram a performance de queries comuns

CREATE INDEX IF NOT EXISTS idx_reunioes_usuario_id 
    ON public.reunioes(usuario_id);

CREATE INDEX IF NOT EXISTS idx_reunioes_data 
    ON public.reunioes(data DESC);

CREATE INDEX IF NOT EXISTS idx_reunioes_criado_em 
    ON public.reunioes(criado_em DESC);

-- ================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================
-- Garante que usuários só vejam suas próprias reuniões

-- Habilitar RLS na tabela
ALTER TABLE public.reunioes ENABLE ROW LEVEL SECURITY;

-- Política: Usuários podem ver apenas suas próprias reuniões
CREATE POLICY "Usuários podem visualizar suas reuniões"
    ON public.reunioes
    FOR SELECT
    USING (auth.uid() = usuario_id);

-- Política: Usuários podem inserir suas próprias reuniões
CREATE POLICY "Usuários podem criar reuniões"
    ON public.reunioes
    FOR INSERT
    WITH CHECK (auth.uid() = usuario_id);

-- Política: Usuários podem atualizar apenas suas próprias reuniões
CREATE POLICY "Usuários podem atualizar suas reuniões"
    ON public.reunioes
    FOR UPDATE
    USING (auth.uid() = usuario_id)
    WITH CHECK (auth.uid() = usuario_id);

-- Política: Usuários podem deletar apenas suas próprias reuniões
CREATE POLICY "Usuários podem deletar suas reuniões"
    ON public.reunioes
    FOR DELETE
    USING (auth.uid() = usuario_id);

-- ================================================
-- DADOS DE EXEMPLO (OPCIONAL)
-- ================================================
-- Você pode inserir dados de teste após criar um usuário
-- Substitua 'SEU_USER_ID' pelo UUID do seu usuário

/*
INSERT INTO public.reunioes (titulo, descricao, data, hora, participantes, decisoes, tarefas, usuario_id)
VALUES 
(
    'Reunião de Planejamento Q1 2025',
    'Discussão sobre metas e objetivos para o primeiro trimestre de 2025',
    '2025-01-15',
    '14:00',
    ARRAY['João Silva', 'Maria Santos', 'Pedro Oliveira'],
    E'- Aprovado orçamento de R$ 50.000 para marketing\n- Definido lançamento de novo produto para março\n- Contratação de 2 desenvolvedores aprovada',
    E'- João: Preparar apresentação de vendas até 20/01\n- Maria: Finalizar planejamento de marketing até 25/01\n- Pedro: Iniciar recrutamento na próxima semana',
    'SEU_USER_ID'
),
(
    'Daily Standup',
    'Reunião diária do time de desenvolvimento',
    '2025-10-30',
    '09:00',
    ARRAY['Dev Team'],
    E'- Backend API está 90% completo\n- Frontend precisa de mais 2 dias\n- Testes automatizados em andamento',
    E'- Alice: Finalizar endpoints de autenticação\n- Bob: Implementar testes unitários\n- Carol: Revisar PR #127',
    'SEU_USER_ID'
);
*/

-- ================================================
-- VERIFICAÇÃO
-- ================================================
-- Execute as queries abaixo para verificar se tudo foi criado corretamente

-- Verificar tabela
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name = 'reunioes';

-- Verificar políticas RLS
SELECT schemaname, tablename, policyname, cmd 
FROM pg_policies 
WHERE tablename = 'reunioes';

-- Verificar índices
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'reunioes';

-- ================================================
-- NOTAS IMPORTANTES
-- ================================================
-- 1. Certifique-se de habilitar o Email provider em Authentication → Providers
-- 2. Para usar Google OAuth, configure em Authentication → Providers → Google
-- 3. RLS está habilitado - usuários só podem acessar suas próprias reuniões
-- 4. A tabela usa CASCADE DELETE - reuniões são deletadas se o usuário for deletado
-- 5. Timestamps usam timezone UTC por padrão
