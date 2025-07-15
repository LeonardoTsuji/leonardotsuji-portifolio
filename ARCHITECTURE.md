# Arquitetura do Projeto

Este documento descreve a arquitetura do portfólio de Leonardo Tsuji, seguindo as melhores práticas do Next.js 15.

## 🏗️ Estrutura de Componentes

### Server Components (Padrão)

Os Server Components são renderizados no servidor e não incluem JavaScript no bundle do cliente, resultando em melhor performance.

#### Seções (Server Components)

- `HeroSection`: Seção inicial com informações básicas
- `AboutSection`: Seção sobre mim e tecnologias
- `ExperienceSection`: Experiência profissional e formação acadêmica

### Client Components (Quando Necessário)

Client Components são usados apenas quando há necessidade de interatividade.

#### Componentes Interativos

- `ContactSection`: Contém o formulário de contato
- `ContactForm`: Formulário com validação e envio
- `Navigation`: Navegação com scroll tracking
- `ModeToggle`: Toggle de tema escuro/claro

## 📊 Estratégias de Renderização

### Static Generation (SSG)

- **HeroSection**: Conteúdo estático, renderizado no build
- **AboutSection**: Dados estáticos, renderizado no build
- **ExperienceSection**: Dados estáticos, renderizado no build

### Server-Side Rendering (SSR)

- **ContactSection**: Renderizado no servidor a cada requisição

### Client-Side Rendering (CSR)

- **ContactForm**: Renderizado no cliente para interatividade
- **Navigation**: Renderizado no cliente para scroll tracking

## 🔄 Hydration Strategy

### Progressive Hydration

1. **Primeira carga**: Server Components renderizados sem JavaScript
2. **Hydration**: Client Components carregados conforme necessário
3. **Interatividade**: Funcionalidades ativadas após hydration

### Otimizações

- `suppressHydrationWarning` no layout para evitar warnings de tema
- Lazy loading de componentes pesados
- Code splitting automático do Next.js

## 📁 Organização de Arquivos

```
├── app/                    # App Router (Next.js 15)
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/
│   ├── ui/                # Componentes base (shadcn/ui)
│   ├── sections/          # Seções da página
│   ├── navigation.tsx     # Navegação
│   ├── contact-form.tsx   # Formulário de contato
│   └── theme-provider.tsx # Provider de tema
├── lib/
│   ├── data.ts            # Dados estáticos
│   └── utils.ts           # Utilitários
└── types/
    └── index.ts           # Tipos TypeScript
```

## 🎨 Sistema de Design

### Tema Escuro/Claro

- CSS Variables para cores
- `next-themes` para gerenciamento de tema
- Transições suaves entre temas

### Componentes Base

- shadcn/ui para componentes consistentes
- Tailwind CSS para estilização
- Radix UI para acessibilidade

## 🚀 Performance

### Otimizações Implementadas

- **Server Components**: Redução do bundle JavaScript
- **Static Generation**: Páginas pré-renderizadas
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Carregamento sob demanda
- **Bundle Analysis**: Análise de tamanho de bundle

### Métricas Alvo

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Segurança

### Headers de Segurança

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`

### Validação

- Zod para validação de formulários
- Sanitização de inputs
- Rate limiting na API

## 📱 Responsividade

### Breakpoints

- Mobile First design
- Tailwind breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions

### Acessibilidade

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast support

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
pnpm dev          # Desenvolvimento com Turbopack
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Linting
pnpm type-check   # Verificação de tipos
```

### Ferramentas

- **TypeScript**: Tipagem estática
- **ESLint**: Linting de código
- **Prettier**: Formatação
- **Turbopack**: Bundler rápido para desenvolvimento

## 🌐 Deploy

### Vercel (Recomendado)

- Deploy automático
- Preview deployments
- Edge functions
- Analytics integrado

### Configuração

1. Conectar repositório
2. Configurar variáveis de ambiente
3. Deploy automático a cada push

## 📈 Monitoramento

### Métricas

- Core Web Vitals
- Performance metrics
- Error tracking
- User analytics

### Ferramentas

- Vercel Analytics
- Google Analytics
- Error monitoring
- Performance monitoring
