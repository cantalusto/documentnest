# 🚀 Quick Start Guide - DocumentNest

## ⚡ Start usando em 5 minutos

### 1️⃣ Configure o Supabase (2 min)

1. Acesse [supabase.com](https://supabase.com) e crie uma conta gratuita
2. Clique em **New Project**
3. Dê um nome ao projeto (ex: `documentnest`)
4. Escolha uma senha segura e uma região
5. Aguarde a criação (~2 minutos)

### 2️⃣ Crie o Banco de Dados (1 min)

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Abra o arquivo `supabase-schema.sql` deste projeto
4. Copie todo o conteúdo e cole no editor SQL
5. Clique em **Run** (canto inferior direito)
6. Aguarde a mensagem de sucesso ✅

### 3️⃣ Configure as Variáveis de Ambiente (1 min)

1. No Supabase, vá em **Settings** → **API**
2. Copie `Project URL` e `anon public` key
3. No seu projeto, copie o arquivo `.env.example`:

```bash
cp .env.example .env
```

4. Edite o `.env` e cole suas credenciais:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 4️⃣ Instale e Execute (1 min)

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run dev
```

✅ Pronto! Abra [http://localhost:5173](http://localhost:5173) e comece a usar!

---

## 🎯 Próximos Passos

### Criar sua primeira conta
1. Clique em **Criar conta**
2. Use um email válido e senha segura (mín. 6 caracteres)
3. Confirme seu email (cheque a caixa de entrada/spam)
4. Faça login

### Cadastrar sua primeira reunião
1. Clique em **Nova Reunião**
2. Preencha o título e data (obrigatórios)
3. Adicione participantes separados por vírgula
4. (Opcional) Adicione descrição, decisões e tarefas
5. Clique em **Criar Reunião**

### Filtrar e buscar
- Use a barra de busca para encontrar por título ou participante
- Use o filtro de data para ver reuniões específicas
- Clique em **Limpar filtro** para ver todas

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build

# Linting
npm run lint         # Verifica código
```

---

## 🌐 Habilitar Login com Google (Opcional)

1. No Supabase, vá em **Authentication** → **Providers**
2. Encontre **Google** e clique em **Enable**
3. Siga o [guia oficial](https://supabase.com/docs/guides/auth/social-login/auth-google)
4. Configure o OAuth Client no Google Cloud Console
5. Cole Client ID e Client Secret no Supabase
6. Salve e teste!

---

## 📦 Deploy Rápido na Vercel

```bash
# Instalar CLI (se necessário)
npm i -g vercel

# Deploy
vercel

# Adicionar variáveis de ambiente quando solicitado:
# VITE_SUPABASE_URL=...
# VITE_SUPABASE_ANON_KEY=...
```

Ou conecte seu repositório GitHub na interface da Vercel para deploys automáticos.

---

## ❓ Problemas Comuns

### "Missing Supabase environment variables"
- ✅ Certifique-se de que criou o arquivo `.env`
- ✅ Verifique se as variáveis começam com `VITE_`
- ✅ Reinicie o servidor (`Ctrl+C` e `npm run dev` novamente)

### Erro ao criar conta
- ✅ Verifique se executou o script SQL no Supabase
- ✅ Confirme que o email provider está habilitado
- ✅ Use uma senha com pelo menos 6 caracteres

### Não vejo minhas reuniões
- ✅ Você está logado com o mesmo usuário que criou as reuniões?
- ✅ Verifique se há filtros ativos (limpe-os)
- ✅ Tente criar uma nova reunião para testar

---

## 📚 Recursos

- 📖 [Documentação completa](./README.md)
- 🔗 [Supabase Docs](https://supabase.com/docs)
- 🔗 [Vite Guide](https://vitejs.dev/guide/)
- 🔗 [React Router](https://reactrouter.com/en/main)

---

**Boa sorte com seu DocumentNest! 🎉**
