# 🔑 Como Obter suas Credenciais do Supabase

## Passo a Passo Rápido:

### 1. Acesse seu projeto Supabase
Vá para: https://supabase.com/dashboard/projects

### 2. Selecione seu projeto
- Clique no projeto que você criou
- O URL do projeto será algo como: `https://xoxmkiuhqykwqyownypd.supabase.co`

### 3. Vá em Settings → API
1. No menu lateral esquerdo, clique em **⚙️ Settings**
2. Clique em **API**

### 4. Copie as credenciais

Você verá duas informações importantes:

#### Project URL
```
https://xoxmkiuhqykwqyownypd.supabase.co
```

#### Project API keys
- **anon** **public** (esta é a que você precisa!)
- service_role (NÃO use esta no frontend!)

Copie a chave **anon public** - ela começa com `eyJ...`

### 5. Cole no arquivo .env

Abra o arquivo `.env` na raiz do projeto e edite:

```env
VITE_SUPABASE_URL=https://xoxmkiuhqykwqyownypd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBh...
```

### 6. Reinicie o servidor

No terminal, pressione **Ctrl+C** para parar o servidor e depois:

```bash
npm run dev
```

---

## ✅ Verificação

Se tudo estiver correto, você verá:
- ✅ Página de login carregando (não mais tela branca)
- ✅ Sem erros no console do Chrome
- ✅ Aplicação funcionando!

---

## 📸 Onde encontrar no Supabase:

```
Dashboard Supabase
└── Seu Projeto (xoxmkiuhqykwqyownypd)
    └── ⚙️ Settings (menu lateral)
        └── API
            ├── Project URL ← copie isto
            └── Project API keys
                └── anon public ← copie isto
```

---

## ⚠️ IMPORTANTE:

- ✅ Use a chave **anon public** (segura para o frontend)
- ❌ NUNCA use a chave **service_role** no frontend
- 🔒 O arquivo `.env` já está no `.gitignore` (não será commitado)
- 🔄 Sempre reinicie o servidor após alterar o `.env`

---

## 🐛 Ainda com tela branca?

1. Verifique se o arquivo `.env` está na **raiz do projeto**
2. Confirme que as variáveis começam com `VITE_`
3. Certifique-se de que não há espaços extras
4. Reinicie o servidor (`Ctrl+C` e `npm run dev`)
5. Force reload no Chrome (`Ctrl+Shift+R`)

---

**Depois de configurar, me avise e vamos testar! 🚀**
