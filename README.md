# 🌙 Web Lunar — Portfólio & Plataforma Digital de Alta Performance

Plataforma oficial da **Web Lunar**, estúdio de UX/UI Design, Arquitetura de Software e Engenharia Web focado em criar produtos digitais imersivos, landing pages de alta conversão e sistemas modernos de altíssima velocidade.

---

## ⚡ Tecnologias Utilizadas

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [GSAP (GreenSock)](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)
- **Banco de Dados & ORM**: [Prisma ORM](https://www.prisma.io/) com PostgreSQL / SQLite
- **API & Comunicação**: [tRPC](https://trpc.io/) & [NextAuth.js](https://next-auth.js.org/)
- **Analytics & Vitals**: [@vercel/analytics](https://vercel.com/analytics) & [@vercel/speed-insights](https://vercel.com/speed-insights)

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/Souzys/Web-Lunar.git
cd Web-Lunar
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com suas credenciais:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Gerar os clientes do Prisma
```bash
npx prisma generate
```

### 5. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o site rodando localmente.

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento |
| `npm run build` | Compila o projeto e gera a versão de produção |
| `npm run start` | Inicia o servidor com a build de produção |
| `npm run lint` | Executa o linter para verificar padrões de código |

---

## 🔍 SEO e Indexação Automatizada

- **Sitemap Dinâmico**: Gerado automaticamente através de [`src/app/sitemap.ts`](./src/app/sitemap.ts) para indexação instantânea no Google Search Console.
- **Robots.txt**: Configurado via [`src/app/robots.ts`](./src/app/robots.ts).
- **Métricas de Performance**: Otimização contínua de imagens (WebP), carregamento assíncrono e pontuação de elite no Google PageSpeed Insights.

---

## 📜 Licença

Desenvolvido por **Web Lunar**. Todos os direitos reservados.
