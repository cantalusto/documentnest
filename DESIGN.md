# 🎨 DocumentNest - Design & Layout Guide

## Paleta de Cores

### Dark Mode (Padrão)
```css
Background Principal: #242424
Background Cards: #1a1a1a
Bordas: #333
Texto Principal: rgba(255, 255, 255, 0.87)
Texto Secundário: rgba(255, 255, 255, 0.6)
Cor Primária (Links/Botões): #646cff
Cor Primária Hover: #535bf2
Cor de Erro: #ff4444
```

### Light Mode
```css
Background Principal: #ffffff
Background Cards: #f9f9f9
Bordas: #ddd
Texto Principal: #213547
Texto Secundário: #666
Cor Primária: #747bff
```

---

## 🖼️ Layout das Páginas

### 1. Página de Login
```
┌─────────────────────────────────────────────┐
│                                             │
│              📋 DocumentNest                │
│                  Entrar                     │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ E-mail                             │   │
│  │ [seu@email.com                  ] │   │
│  └────────────────────────────────────┘   │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ Senha                              │   │
│  │ [••••••••                       ] │   │
│  └────────────────────────────────────┘   │
│                                             │
│         [     Entrar     ]                  │
│                                             │
│              ─── ou ───                     │
│                                             │
│      [  Entrar com Google  ]               │
│                                             │
│   Não tem uma conta? Criar conta           │
│                                             │
└─────────────────────────────────────────────┘
```

### 2. Página de Registro
```
┌─────────────────────────────────────────────┐
│                                             │
│              📋 DocumentNest                │
│                Criar conta                  │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ E-mail                             │   │
│  │ [seu@email.com                  ] │   │
│  └────────────────────────────────────┘   │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ Senha                              │   │
│  │ [••••••••                       ] │   │
│  └────────────────────────────────────┘   │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ Confirmar senha                    │   │
│  │ [••••••••                       ] │   │
│  └────────────────────────────────────┘   │
│                                             │
│        [   Criar conta   ]                  │
│                                             │
│      Já tem uma conta? Entrar              │
│                                             │
└─────────────────────────────────────────────┘
```

### 3. Lista de Reuniões
```
┌──────────────────────────────────────────────────────┐
│ Navbar                                               │
│ 📋 DocumentNest  |  Reuniões  |  Nova Reunião  | 👤  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│  Reuniões                      [ + Nova Reunião ]   │
│                                                      │
│  ┌────────────────┐  ┌────────────┐  ┌──────────┐  │
│  │ 🔍 Buscar...   │  │ 📅 Data    │  │ Limpar   │  │
│  └────────────────┘  └────────────┘  └──────────┘  │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │ Reunião Sprint #23  │  │ Daily Standup       │  │
│  │ 📅 28/10/2025 14:00 │  │ 📅 29/10/2025 09:00 │  │
│  │ Planejamento...     │  │ Reunião diária...   │  │
│  │ 👥 5 participantes  │  │ 👥 8 participantes  │  │
│  └─────────────────────┘  └─────────────────────┘  │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │ Review Q4           │  │ Planning 2025       │  │
│  │ 📅 30/10/2025 16:00 │  │ 📅 01/11/2025 10:00 │  │
│  │ Revisão de metas... │  │ Planejamento ano... │  │
│  │ 👥 3 participantes  │  │ 👥 12 participantes │  │
│  └─────────────────────┘  └─────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 4. Detalhes da Reunião
```
┌──────────────────────────────────────────────────────┐
│ Navbar                                               │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│  ← Voltar              [ ✏️ Editar ]  [ 🗑️ Excluir ] │
│                                                      │
│  ┌────────────────────────────────────────────────┐ │
│  │                                                │ │
│  │  Reunião de Planejamento Sprint #23           │ │
│  │                                                │ │
│  │  📅 Data: 28/10/2025                          │ │
│  │  🕐 Horário: 14:00                            │ │
│  │  📝 Criado em: 20/10/2025                     │ │
│  │  ───────────────────────────────────────────  │ │
│  │                                                │ │
│  │  Descrição                                     │ │
│  │  Planejamento das entregas do próximo sprint  │ │
│  │  com foco em features do Q4                   │ │
│  │                                                │ │
│  │  👥 Participantes                             │ │
│  │  • João Silva                                 │ │
│  │  • Maria Santos                               │ │
│  │  • Pedro Oliveira                             │ │
│  │  • Ana Costa                                  │ │
│  │  • Carlos Mendes                              │ │
│  │                                                │ │
│  │  ✅ Decisões                                  │ │
│  │  - Aprovado escopo do sprint                  │ │
│  │  - Definidas 15 user stories prioritárias     │ │
│  │  - Budget aprovado para infra                 │ │
│  │                                                │ │
│  │  📋 Tarefas                                   │ │
│  │  - João: Implementar API de pagamentos       │ │
│  │  - Maria: Criar telas de checkout             │ │
│  │  - Pedro: Setup ambiente de staging           │ │
│  │                                                │ │
│  └────────────────────────────────────────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 5. Formulário de Reunião (Criar/Editar)
```
┌──────────────────────────────────────────────────────┐
│ Navbar                                               │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│  Nova Reunião                          [ Cancelar ]  │
│                                                      │
│  ┌────────────────────────────────────────────────┐ │
│  │                                                │ │
│  │  Título *                                      │ │
│  │  [Ex: Reunião de planejamento Q4            ] │ │
│  │                                                │ │
│  │  Data *              Horário                   │ │
│  │  [01/11/2025]        [14:00            ]       │ │
│  │                                                │ │
│  │  Descrição / Pauta                            │ │
│  │  ┌────────────────────────────────────────┐  │ │
│  │  │ Breve descrição ou pauta da reunião    │  │ │
│  │  │                                        │  │ │
│  │  └────────────────────────────────────────┘  │ │
│  │                                                │ │
│  │  Participantes                                 │ │
│  │  [João, Maria, Pedro                        ] │ │
│  │  Separe os participantes por vírgula          │ │
│  │                                                │ │
│  │  Decisões Tomadas                             │ │
│  │  ┌────────────────────────────────────────┐  │ │
│  │  │ Liste as principais decisões tomadas   │  │ │
│  │  │ na reunião                             │  │ │
│  │  └────────────────────────────────────────┘  │ │
│  │                                                │ │
│  │  Tarefas / Ações                              │ │
│  │  ┌────────────────────────────────────────┐  │ │
│  │  │ Liste as tarefas e responsáveis        │  │ │
│  │  │                                        │  │ │
│  │  └────────────────────────────────────────┘  │ │
│  │                                                │ │
│  │              [ Cancelar ]  [ Criar Reunião ]  │ │
│  │                                                │ │
│  └────────────────────────────────────────────────┘ │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 📱 Responsividade

### Desktop (> 1024px)
- Layout de 3 colunas no grid de reuniões
- Navbar horizontal completa
- Formulários com campos lado a lado

### Tablet (768px - 1024px)
- Layout de 2 colunas no grid
- Navbar horizontal compacta
- Campos de formulário em coluna única

### Mobile (< 768px)
- Layout de 1 coluna
- Navbar com menu hambúrguer (ou simplificado)
- Botões em largura total
- Espaçamento reduzido

---

## 🎭 Estados Visuais

### Loading
```
┌────────────────────────┐
│                        │
│    Carregando...       │
│         ⏳             │
│                        │
└────────────────────────┘
```

### Empty State
```
┌────────────────────────────────┐
│                                │
│  Nenhuma reunião encontrada.   │
│                                │
│    [ Criar primeira reunião ]  │
│                                │
└────────────────────────────────┘
```

### Error State
```
┌──────────────────────────────────────┐
│ ⚠️ Erro ao carregar reuniões         │
│                                      │
│ Por favor, tente novamente.          │
└──────────────────────────────────────┘
```

### Success Message
```
┌──────────────────────────────────────┐
│ ✅ Reunião criada com sucesso!       │
└──────────────────────────────────────┘
```

---

## 🔘 Componentes de UI

### Botões

#### Primário
```css
Background: #646cff
Color: white
Hover: #535bf2
```

#### Secundário
```css
Background: #333
Color: white
Hover: #444
```

#### Danger
```css
Background: #333
Color: #ff4444
Border-hover: #ff4444
```

### Cards
```css
Background: #1a1a1a
Border: 1px solid #333
Border-radius: 8px
Padding: 1.5rem
Hover: transform translateY(-2px)
       border-color #646cff
```

### Inputs
```css
Background: #1a1a1a
Border: 1px solid #ccc
Border-radius: 4px
Padding: 0.5em
Focus: outline 2px solid #646cff
```

---

## 🎯 Hierarquia Visual

### 1. Títulos
- H1: 2rem (32px) - Páginas principais
- H2: 1.5rem (24px) - Seções
- H3: 1.3rem (21px) - Cards

### 2. Texto
- Body: 1em (16px)
- Small: 0.9em (14px) - Metadados
- Tiny: 0.85em (13px) - Hints

### 3. Espaçamento
- Gap pequeno: 0.5rem (8px)
- Gap médio: 1rem (16px)
- Gap grande: 2rem (32px)

---

## ♿ Acessibilidade

### Implementado
- ✅ Labels em todos os inputs
- ✅ Alt text seria em imagens (se houver)
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Focus visível em elementos interativos
- ✅ Semantic HTML (nav, main, form, etc)

### Melhorias Futuras
- 🔜 ARIA labels
- 🔜 Navegação por teclado completa
- 🔜 Screen reader testing
- 🔜 Skip navigation links

---

## 🎨 Iconografia

### Emojis Usados
- 📋 Logo / Reuniões
- 📅 Data
- 🕐 Horário
- 👥 Participantes
- ✅ Decisões
- 📝 Tarefas / Criação
- ✏️ Editar
- 🗑️ Excluir
- 🔍 Buscar
- ⚠️ Erro
- ✅ Sucesso
- ⏳ Loading

### Alternativa
Para produção, considere usar biblioteca de ícones:
- [Lucide Icons](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

---

## 🌈 Animações e Transições

### Hover Effects
```css
transition: all 0.25s ease;
transform: translateY(-2px);
```

### Loading States
```css
opacity: 0.6;
cursor: not-allowed;
```

### Page Transitions
```css
/* Futuro: Framer Motion ou similar */
```

---

## 📐 Grid System

### Desktop
```css
.meetings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### Form Layout
```css
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
```

---

## 🎨 Design Tokens (Futuro)

```javascript
// colors.js
export const colors = {
  primary: '#646cff',
  primaryHover: '#535bf2',
  danger: '#ff4444',
  success: '#00c851',
  warning: '#ffbb33',
  
  dark: {
    bg: '#242424',
    card: '#1a1a1a',
    border: '#333',
    text: 'rgba(255, 255, 255, 0.87)',
  },
  
  light: {
    bg: '#ffffff',
    card: '#f9f9f9',
    border: '#ddd',
    text: '#213547',
  }
}

// spacing.js
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
}
```

---

**Design criado com foco em usabilidade e acessibilidade** ✨
