# 📋 DocumentNest

Uma aplicação web moderna para gestão de reuniões, onde equipes podem cadastrar reuniões, registrar decisões, gerenciar tarefas e manter um histórico completo de todas as reuniões anteriores.

## 🚀 Stack Tecnológica

- **Frontend**: React 18 + TypeScript + Vite
- **Backend/Database**: Supabase (PostgreSQL + Auth + API)
- **Hospedagem**: Vercel (recomendado)
- **Autenticação**: Supabase Auth (email/senha e Google OAuth)

## ✨ Funcionalidades

### MVP (Versão Atual)
- ✅ Autenticação com email/senha e Google
- ✅ Cadastrar reuniões (título, data, hora, participantes, pautas)
- ✅ Registrar decisões e tarefas
- ✅ Listar todas as reuniões
- ✅ Filtrar por data e buscar por título/participantes
- ✅ Visualizar detalhes completos de reuniões
- ✅ Editar reuniões existentes
- ✅ Excluir reuniões

### Funcionalidades Futuras
- 📎 Upload e anexo de arquivos (atas, slides, etc.)
- 💬 Comentários e anotações pós-reunião
- 📅 Integração com Google Calendar
- 📄 Exportar ata em PDF
- 📧 Notificações automáticas por email

## 🛠️ Setup do Projeto

### 1. Pré-requisitos

- Node.js 18+ instalado
- Conta no [Supabase](https://supabase.com) (gratuita)
- Conta no [Vercel](https://vercel.com) (opcional, para deploy)

### 2. Configuração do Supabase

1. Crie um novo projeto no Supabase
2. No SQL Editor, execute o script `supabase-schema.sql` (localizado na raiz do projeto)
3. Configure a autenticação:
   - Vá em **Authentication** → **Providers**
   - Habilite **Email** provider
   - (Opcional) Configure **Google** OAuth seguindo [este guia](https://supabase.com/docs/guides/auth/social-login/auth-google)
4. Copie as credenciais:
   - Vá em **Settings** → **API**
   - Copie `Project URL` e `anon public` key

### 3. Instalação Local

```bash
# 1. Clone ou extraia o projeto
cd documentnest

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 4. Executar Localmente

```bash
# Modo desenvolvimento
npm run dev

# O app estará disponível em http://localhost:5173
```

### 5. Build de Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: `reunioes`

| Campo          | Tipo        | Descrição                           |
|----------------|-------------|-------------------------------------|
| id             | uuid (PK)   | Identificador único                 |
| titulo         | text        | Título da reunião                   |
| descricao      | text        | Descrição ou pauta                  |
| data           | date        | Data da reunião                     |
| hora           | time        | Horário (opcional)                  |
| participantes  | text[]      | Array de nomes/emails               |
| decisoes       | text        | Decisões tomadas                    |
| tarefas        | text        | Lista de tarefas/ações              |
| usuario_id     | uuid (FK)   | ID do usuário que criou             |
| criado_em      | timestamp   | Data de criação (auto)              |

### Políticas de Segurança (RLS)

O schema já inclui Row Level Security configurado para:
- ✅ Usuários só podem ver suas próprias reuniões
- ✅ Usuários só podem editar/excluir reuniões que criaram
- ✅ Usuários autenticados podem criar novas reuniões

## 🚢 Deploy na Vercel

### Via GitHub (Recomendado)

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em **New Project**
4. Importe seu repositório
5. Configure as variáveis de ambiente:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Clique em **Deploy**

### Via Vercel CLI

```bash
# Instalar CLI global
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## 📁 Estrutura do Projeto

```
documentnest/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/            # Context API (Auth)
│   │   └── AuthContext.tsx
│   ├── lib/                 # Configurações e utils
│   │   └── supabase.ts
│   ├── pages/               # Páginas da aplicação
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── MeetingsList.tsx
│   │   ├── MeetingDetail.tsx
│   │   └── MeetingForm.tsx
│   ├── types/               # TypeScript types
│   │   ├── database.ts
│   │   └── reuniao.ts
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── supabase-schema.sql      # Schema do banco de dados
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Recursos de UI

- Design responsivo (mobile-first)
- Suporte a tema claro/escuro (automático via `prefers-color-scheme`)
- Validação de formulários
- Estados de loading e error
- Feedback visual em todas as ações

## 🔐 Segurança

- ✅ Row Level Security (RLS) habilitado
- ✅ Tokens JWT gerenciados pelo Supabase
- ✅ Senhas hasheadas automaticamente
- ✅ Validação de email obrigatória
- ✅ Proteção contra SQL injection (via Supabase)

## 🐛 Troubleshooting

### Erro: "Missing Supabase environment variables"
- Verifique se o arquivo `.env` existe e contém as variáveis corretas
- Reinicie o servidor de desenvolvimento (`npm run dev`)

### Erro ao fazer login/registro
- Verifique se executou o script SQL no Supabase
- Confirme que o email provider está habilitado
- Verifique o console do navegador para erros detalhados

### Erro "Invalid API key"
- Confirme que copiou a chave `anon public` (não a `service_role`)
- Verifique se não há espaços extras nas variáveis de ambiente

## 📝 Licença

MIT License - sinta-se livre para usar em projetos pessoais e comerciais.

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças maiores:
1. Abra uma issue primeiro
2. Descreva as mudanças propostas
3. Aguarde feedback antes de implementar

---

**Desenvolvido com ❤️ usando React, TypeScript e Supabase**
