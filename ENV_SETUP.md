# Configuração do Ambiente

Este documento explica como configurar o ambiente de desenvolvimento para o portfólio.

## 📋 Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm
- Git

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/leonardotsuji/leonardotsuji-portfolio.git
cd leonardotsuji-portfolio
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e adicione suas chaves:

```env
# Resend API Key para envio de emails
RESEND_API_KEY=your_resend_api_key_here

# URL do site (para produção)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Configure o Resend (para envio de emails)

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta
3. Obtenha sua API key
4. Adicione a key no arquivo `.env.local`

### 5. Execute o projeto

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento com Turbopack

# Build e Deploy
pnpm build        # Build de produção
pnpm start        # Inicia servidor de produção

# Qualidade de Código
pnpm lint         # Executa ESLint
pnpm type-check   # Verifica tipos TypeScript

# Análise
pnpm analyze      # Analisa bundle (se configurado)
```

## 🎨 Configuração do Tema

O projeto usa `next-themes` para gerenciamento de tema. Os temas disponíveis são:

- **Light**: Tema claro
- **Dark**: Tema escuro
- **System**: Segue preferência do sistema

### Personalização de Cores

As cores são definidas em `app/globals.css` usando CSS Variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  /* ... outras cores */
}

.dark {
  --primary: 210 40% 98%;
  --secondary: 217.2 32.6% 17.5%;
  /* ... outras cores */
}
```

## 📱 Responsividade

O projeto é responsivo e usa os seguintes breakpoints do Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔒 Segurança

### Headers de Segurança

O projeto inclui headers de segurança configurados em `next.config.ts`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`

### Validação de Formulários

- Zod para validação de schema
- Sanitização de inputs
- Rate limiting na API

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório na Vercel
2. Configure as variáveis de ambiente:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🐛 Debugging

### Logs de Desenvolvimento

```bash
# Logs detalhados
DEBUG=* pnpm dev

# Logs específicos do Next.js
NODE_OPTIONS='--inspect' pnpm dev
```

### Ferramentas de Debug

- React Developer Tools
- Next.js DevTools
- Chrome DevTools

## 📊 Performance

### Métricas Importantes

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Análise de Performance

```bash
# Build de produção
pnpm build

# Análise do bundle
pnpm analyze
```

## 🔄 Atualizações

### Dependências

```bash
# Atualizar todas as dependências
pnpm update

# Atualizar dependência específica
pnpm update package-name
```

### Next.js

```bash
# Atualizar Next.js
pnpm update next react react-dom
```

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação
2. Abra uma issue no GitHub
3. Entre em contato: leonardo_tsuji@hotmail.com
