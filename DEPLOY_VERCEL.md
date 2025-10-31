# 🚀 Deploy no Vercel - Guia Completo

## ✅ Checklist Pré-Deploy

### Status Atual:
- ✅ Código React + TypeScript funcionando
- ✅ Build configurado (`npm run build`)
- ✅ Variáveis de ambiente definidas (`.env`)
- ✅ `.gitignore` configurado
- ❌ **Repositório Git não inicializado** ⚠️
- ❌ **Código não está no GitHub** ⚠️

---

## 📋 Passo a Passo Completo (15-20 minutos)

### **PARTE 1: Preparar Repositório Git** (5 min)

#### 1. Inicializar Git

Abra o terminal no diretório do projeto e execute:

```powershell
# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit: DocumentNest MVP completo"
```

#### 2. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name**: `documentnest` (ou o nome que preferir)
3. **Description**: "Sistema de gerenciamento de reuniões"
4. **Visibility**: 
   - ✅ **Public** (recomendado para Vercel free)
   - 🔒 Private (também funciona, mas tem limites no free tier)
5. ⚠️ **NÃO marque** "Add a README file"
6. ⚠️ **NÃO marque** "Add .gitignore"
7. Clique em **"Create repository"**

#### 3. Conectar e Enviar Código

Após criar o repositório, o GitHub mostra comandos. Execute:

```powershell
# Adicionar origem remota (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/documentnest.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar código
git push -u origin main
```

**Exemplo real:**
```powershell
git remote add origin https://github.com/lucassilva/documentnest.git
git branch -M main
git push -u origin main
```

---

### **PARTE 2: Deploy no Vercel** (10 min)

#### 1. Criar Conta no Vercel (se não tiver)

1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub
4. Pronto! Conta criada ✅

#### 2. Importar Projeto

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Na lista de repositórios, encontre **`documentnest`**
3. Clique em **"Import"**

#### 3. Configurar Projeto

**Configure Name:** (opcional)
- Pode deixar `documentnest` ou mudar para outro nome
- Isso define a URL: `documentnest.vercel.app`

**Framework Preset:**
- ✅ **Vite** (deve detectar automaticamente)

**Root Directory:**
- ✅ Deixe `./` (raiz do projeto)

**Build Command:**
- ✅ Deixe `npm run build` ou `vite build`

**Output Directory:**
- ✅ Deixe `dist` (padrão do Vite)

#### 4. ⚠️ **IMPORTANTE: Configurar Variáveis de Ambiente**

**Antes de clicar em "Deploy"**, role para baixo até **"Environment Variables"**.

Adicione as seguintes variáveis (copie do seu arquivo `.env`):

| Key | Value | Environment |
|-----|-------|-------------|
| `VITE_SUPABASE_URL` | `https://xoxmkiuhqykwqyownypd.supabase.co` | Production, Preview, Development |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGci...` (sua chave anon completa) | Production, Preview, Development |

**Como adicionar:**
1. Digite `VITE_SUPABASE_URL` no campo "Key"
2. Cole a URL do Supabase no campo "Value"
3. Marque **todas** as checkboxes (Production, Preview, Development)
4. Clique em **"Add"**
5. Repita para `VITE_SUPABASE_ANON_KEY`

#### 5. Deploy! 🚀

1. Clique no botão **"Deploy"**
2. Aguarde 1-2 minutos enquanto o Vercel:
   - Instala dependências
   - Compila TypeScript
   - Gera build otimizado
   - Faz deploy
3. ✅ **Deploy concluído!**

#### 6. Testar

Quando concluir, você verá:
- 🎉 Confetes na tela
- 🔗 URL do projeto: `https://documentnest.vercel.app` (ou similar)

**Clique em "Visit"** para acessar seu app online!

---

### **PARTE 3: Configurar Callback do Supabase** (5 min)

⚠️ **CRÍTICO**: Sem isso, o login NÃO funcionará em produção!

#### 1. Acessar Supabase Dashboard

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto: `xoxmkiuhqykwqyownypd`

#### 2. Configurar URLs de Autenticação

1. No menu lateral: **Authentication** → **URL Configuration**
2. Atualize os seguintes campos:

**Site URL:**
```
https://documentnest.vercel.app
```
⚠️ Substitua pela URL real que o Vercel gerou!

**Redirect URLs:**
```
https://documentnest.vercel.app/**
http://localhost:5174/**
```
(Adicione uma por linha clicando em "Add URL")

3. Clique em **"Save"**

#### 3. Testar Login

1. Abra sua URL da Vercel
2. Tente fazer login ou criar conta
3. ✅ Deve funcionar perfeitamente!

---

## 🔄 Atualizações Futuras

Sempre que fizer mudanças no código:

```powershell
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição da mudança"

# Enviar para GitHub
git push
```

**O Vercel detecta automaticamente e faz novo deploy!** 🎉

Você verá o progresso em: https://vercel.com/dashboard

---

## 🐛 Troubleshooting

### Erro: "Build failed"

**Causa**: Variáveis de ambiente não configuradas

**Solução**:
1. Vercel Dashboard → Seu projeto → **Settings** → **Environment Variables**
2. Adicione `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
3. Vá em **Deployments** → Clique nos 3 pontos do último deploy → **Redeploy**

### Erro: "Page not found" ao atualizar página

**Causa**: React Router precisa de configuração para SPA

**Solução**: Criar arquivo `vercel.json` na raiz do projeto:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Depois:
```powershell
git add vercel.json
git commit -m "Adiciona configuração SPA para Vercel"
git push
```

### Erro: Login não funciona em produção

**Causa**: URL de callback não configurada no Supabase

**Solução**: Veja **PARTE 3** acima e configure as URLs no Supabase

### Erro: "Authentication Error" ou "redirect_to mismatch"

**Causa**: URL do site não bate com a registrada no Supabase

**Solução**:
1. Copie a URL exata da Vercel (ex: `https://documentnest-abc123.vercel.app`)
2. No Supabase: Authentication → URL Configuration
3. Adicione essa URL exata em "Redirect URLs" com `/**` no final
4. Salve

---

## 📊 Resumo das URLs

Depois do deploy, você terá:

| Ambiente | URL |
|----------|-----|
| **Produção** | `https://documentnest.vercel.app` |
| **Preview** | `https://documentnest-git-branch.vercel.app` |
| **Local** | `http://localhost:5174` |

---

## 🎯 Checklist Final

Antes de considerar 100% pronto:

- [ ] Código enviado para GitHub
- [ ] Projeto importado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy concluído com sucesso
- [ ] URL de callback configurada no Supabase
- [ ] Login testado e funcionando
- [ ] Criação de reunião testada
- [ ] Navegação funcionando corretamente

---

## 💡 Dicas Extras

### Custom Domain (opcional)

Se você tiver um domínio próprio:
1. Vercel Dashboard → Seu projeto → **Settings** → **Domains**
2. Adicione seu domínio
3. Configure DNS conforme instruções
4. Atualize URL no Supabase

### Preview Deployments

Toda vez que você fizer push em uma branch diferente de `main`:
- Vercel cria um deploy de preview
- URL única para testar antes de ir para produção
- Perfeito para testar novas features!

### Rollback

Se algo der errado:
1. Vercel Dashboard → **Deployments**
2. Encontre um deploy antigo que funcionava
3. Clique nos 3 pontos → **Promote to Production**
4. Pronto! Voltou para versão anterior

---

## 🆘 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique os logs no Vercel Dashboard
2. Verifique o console do navegador (F12)
3. Verifique se as variáveis de ambiente estão corretas
4. Me pergunte! 😊

---

**Tempo total estimado**: 15-20 minutos  
**Custo**: R$ 0,00 (100% gratuito) 🎉  
**Dificuldade**: ⭐⭐☆☆☆ (Fácil)

**Última atualização**: 31 de Outubro de 2024
