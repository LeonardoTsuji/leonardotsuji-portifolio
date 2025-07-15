# Leonardo Tsuji - Portfólio

Portfólio pessoal desenvolvido com Next.js 15, TypeScript e Tailwind CSS, seguindo as melhores práticas de desenvolvimento web moderno.

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: Radix UI + shadcn/ui
- **Formulários**: React Hook Form + Zod
- **Email**: Resend API
- **Deploy**: Vercel

## ✨ Funcionalidades

- **Design Responsivo**: Adaptável para todos os dispositivos
- **Tema Escuro/Claro**: Toggle automático com persistência
- **Navegação Suave**: Scroll suave entre seções
- **Formulário de Contato**: Validação e envio de emails
- **Performance Otimizada**: Server Components, SSG e SSR
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🏗️ Arquitetura

O projeto segue as melhores práticas do Next.js 15:

- **Server Components**: Componentes renderizados no servidor por padrão
- **Client Components**: Apenas onde necessário (interatividade)
- **Static Generation**: Páginas estáticas para melhor performance
- **Server-Side Rendering**: Para conteúdo dinâmico
- **Hydration**: Carregamento otimizado de JavaScript

## 📁 Estrutura do Projeto

```
├── app/
│   ├── api/                    # API Routes
│   ├── components/             # Componentes da aplicação
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout raiz
│   └── page.tsx               # Página inicial
├── components/
│   ├── ui/                    # Componentes base (shadcn/ui)
│   ├── sections/              # Seções da página
│   └── navigation.tsx         # Navegação
├── lib/
│   └── utils.ts               # Utilitários
└── types/
    └── index.ts               # Tipos TypeScript
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leonardotsuji/leonardotsuji-portfolio.git
cd leonardotsuji-portfolio

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev

# Abra http://localhost:3000
```

### Build e Deploy

```bash
# Build para produção
pnpm build

# Inicie o servidor de produção
pnpm start

# Ou faça deploy na Vercel
pnpm vercel
```

## 🎨 Componentes

### Server Components

- `HeroSection`: Seção inicial (SSG)
- `AboutSection`: Sobre mim (SSG)
- `ExperienceSection`: Experiência profissional (SSG)
- `ContactSection`: Formulário de contato (SSR)

### Client Components

- `ThemeToggle`: Toggle de tema
- `ContactForm`: Formulário interativo
- `Navigation`: Navegação com scroll

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizados
- **Bundle Size**: < 100KB (gzipped)
- **First Contentful Paint**: < 1.5s

## 🔧 Scripts Disponíveis

```bash
pnpm dev          # Desenvolvimento com Turbopack
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Linting com ESLint
pnpm type-check   # Verificação de tipos
```

## 📱 Responsividade

- **Mobile First**: Design mobile-first
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Otimizado para touch
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Deploy

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório na Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Leonardo Tsuji**

- Email: leonardo_tsuji@hotmail.com
- LinkedIn: [leonardo-tsuji](https://www.linkedin.com/in/leonardo-tsuji)
- GitHub: [leonardotsuji](https://github.com/leonardotsuji)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
