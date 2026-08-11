export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  client: string;
  year: string;
  scope: string[];
  stack: string[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  showcaseHeroTitle: string;
  performance: {
    speed: { title: string; score: string; description: string };
    tech: { title: string; tech: string; description: string };
    seo: { title: string; status: string; description: string };
  };
  designSystemText: string;
  designSystemComponents: {
    ctaLabel: string;
    cardTitle: string;
    cardDesc: string;
    awardTitle: string;
    awardSub: string;
  };
}

export const STATIC_CASE_STUDIES: Record<string, CaseStudy> = {
  "snews": {
    id: "snews",
    title: "SNEWS",
    category: "CASE STUDY // WEBSITE INSTITUCIONAL & MULTI-IDIOMA",
    image: "/printsnews.webp",
    liveUrl: "https://snews.tv",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Prisma", "Framer Motion"],
    client: "Snews Broadcast Solutions",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento Web Multi-idioma", "Design System", "Animações Interativas", "SEO & Performance"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
    tagline: "Website institucional de alta performance para a líder em soluções de broadcast na América Latina.",
    overview: "Projetamos e desenvolvemos a nova presença digital da Snews, estruturando um portal institucional robusto, internacionalizado e de altíssima fidelidade. A plataforma apresenta o ecossistema completo de soluções da marca (Arion, NeoExpress, GCNews, Souv) com navegação fluida, suporte a múltiplos idiomas e carregamento sub-segundo.",
    challenge: "Comunicar a complexidade de um ecossistema com mais de 25 anos de história e múltiplos produtos broadcast em uma experiência web clara, moderna e capaz de converter grandes tomadores de decisão de emissoras de TV e Rádio na América Latina e no mundo.",
    solution: "Construímos um website desacoplado com Next.js App Router, Tailwind CSS e sistema de i18n nativo para suporte fluido em Português, Inglês e Espanhol. Criamos componentes visuais modulares para apresentar cada produto, acompanhados de um blog técnico integrado e estrutura de captura de leads B2B.",
    results: [
      "Apresentação clara e elegante de todo o portfólio de produtos e soluções broadcast da marca.",
      "Arquitetura multi-idioma (PT, EN, ES) com alternância instantânea sem recarregamento de página.",
      "Pontuação exemplar no Google PageSpeed com tempo de resposta e carregamento inicial em milissegundos."
    ],
    showcaseHeroTitle: "Presença Digital de Alta Performance para a Indústria Broadcast",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 99/100", description: "Navegação ultra rápida com renderização estática e dinâmica otimizada." },
      tech: { title: "Tecnologia", tech: "Next.js + next-intl", description: "Arquitetura multi-idioma nativa e tipagem estrita em TypeScript." },
      seo: { title: "SEO", status: "Indexação Internacional", description: "Estrutura de dados e meta tags otimizadas para busca global." }
    },
    designSystemText: "Criamos uma linguagem visual corporativa de alto impacto, combinando contraste marcante, tipografia técnica precisa e cards interativos que destacam a imponência da marca no setor de comunicação.",
    designSystemComponents: {
      ctaLabel: "Agendar Demonstração",
      cardTitle: "Ecossistema Broadcast",
      cardDesc: "Apresentação integrada para soluções de TV, Rádio e Mídia Digital.",
      awardTitle: "Broadcast Showcase",
      awardSub: "Website Institucional de Alta Performance"
    }
  },
  "volk": {
    id: "volk",
    title: "VOLK Presenter",
    category: "CASE STUDY // PLATAFORMA WEB & ANIMAÇÕES 60 FPS",
    image: "/printvolk.webp",
    liveUrl: "https://volkpresenter.tv/pt",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "i18n Dictionary"],
    client: "VOLK Presenter",
    year: "2026",
    scope: ["UX/UI Design de Alto Padrão", "Engenharia Front-end", "Animações GSAP", "Internacionalização (i18n)", "SEO & Performance"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    tagline: "Experiência web imersiva e responsiva para a plataforma de gráficos e interatividade em tempo real.",
    overview: "Projetamos e desenvolvemos a experiência web do VOLK Presenter, traduzindo o dinamismo e a precisão do software de gráficos ao vivo em uma interface digital premium. O site apresenta os recursos de interatividade em estúdio, telas touchscreen e automação com animações fluidas a 60 FPS e suporte a múltiplos idiomas.",
    challenge: "Transmitir a sensação de velocidade, controle e tecnologia de ponta do produto sem sobrecarregar a navegação do visitante, criando uma apresentação marcante que retenha a atenção de diretores de tecnologia e produtores.",
    solution: "Desenvolvemos o website utilizando Next.js 15 App Router e Tailwind CSS, potencializado por animações com GSAP e Framer Motion. Estruturamos um sistema de dicionários de internacionalização (PT, EN, ES) e componentes de demonstração interativos como acordeões dinâmicos e modais de vídeo em alta definição.",
    results: [
      "Animações e interações refinadas rodando a 60 FPS sem sacrificar a velocidade de carregamento.",
      "Internacionalização completa (Português, Inglês e Espanhol) para expansão no mercado global.",
      "Design System fluido com navegação intuitiva e alta taxa de engajamento dos visitantes."
    ],
    showcaseHeroTitle: "Imersão Visual e Performance para a Nova Era da Mídia",
    performance: {
      speed: { title: "Velocidade", score: "60 FPS Fluidos", description: "Interações em movimento otimizadas sem engasgos de GPU." },
      tech: { title: "Tecnologia", tech: "Next.js 15 + GSAP", description: "Aceleração por hardware e arquitetura de componentes modulares." },
      seo: { title: "Conversão", status: "SEO Otimizado 100/100", description: "Estrutura pronta para captar leads e agendamentos B2B." }
    },
    designSystemText: "Desenvolvemos uma estética editorial moderna com fundos escuros profundos, detalhes em neon e tipografia de alto impacto, garantindo uma leitura clara e marcante em qualquer dispositivo.",
    designSystemComponents: {
      ctaLabel: "Começar a usar o VOLK",
      cardTitle: "Interatividade em Estúdio",
      cardDesc: "Demonstração fluida dos módulos touchscreen e gráficos ao vivo.",
      awardTitle: "Interactive Experience",
      awardSub: "Website de Alta Fidelidade Visual"
    }
  },
  "capi": {
    id: "capi",
    title: "CAPI Digital",
    category: "CASE STUDY // LANDING PAGE & PLATAFORMA EDITORIAL",
    image: "/printcapi.webp",
    liveUrl: "https://capi.digital/pt",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Shadcn UI", "Framer Motion"],
    client: "CAPI Digital",
    year: "2026",
    scope: ["UX/UI Design", "Estruturação de Copy & Arquitetura", "Engenharia Front-end", "Internacionalização (i18n)", "SEO"],
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
    tagline: "Landing page e plataforma de apresentação para o cérebro operacional de produção de conteúdo com IA.",
    overview: "Criamos a presença digital e a landing page institucional da CAPI Digital. O projeto traduz a proposta inovadora da marca — um ecossistema que centraliza planejamento de pautas, redação colaborativa e distribuição multi-canal assistida por inteligência artificial — em uma navegação limpa, direta e persuasiva.",
    challenge: "Explicar de forma clara e envolvente como o CAPI resolve a fragmentação de ferramentas nas redações e equipes de conteúdo, transformando uma solução técnica complexa em um produto desejável para criadores e gestores.",
    solution: "Construímos uma landing page interativa usando Next.js App Router, Tailwind CSS e next-intl (suporte a Português, Inglês e Espanhol). Desenvolvemos demonstrações visuais do workspace, simuladores de pipeline editorial, tabela comparativa de planos e fluxos de contato otimizados.",
    results: [
      "Comunicação clara e envolvente da proposta de valor e dos benefícios da plataforma CAPI.",
      "Estrutura multi-idioma (PT, EN, ES) com carregamento instantâneo em todas as páginas.",
      "Alta taxa de conversão para solicitação de demonstrações e contratação de planos."
    ],
    showcaseHeroTitle: "Design Estratégico para o Cérebro Operacional de Conteúdo",
    performance: {
      speed: { title: "Velocidade", score: "Render em <0.4s", description: "Carregamento instantâneo de páginas e componentes com Next.js." },
      tech: { title: "Tecnologia", tech: "Next.js + next-intl", description: "Internacionalização nativa e código limpo altamente escalável." },
      seo: { title: "SEO", status: "SEO & Meta Tags 100/100", description: "Estrutura pronta para posicionamento nos mecanismos de busca." }
    },
    designSystemText: "Criamos um visual minimalista e contemporâneo, inspirado nos melhores softwares de produtividade do mundo, com cartões refinados, microinterações sutis e tipografia cristalina.",
    designSystemComponents: {
      ctaLabel: "Começar Agora",
      cardTitle: "Workspace Editorial",
      cardDesc: "Apresentação visual do pipeline de planejamento, produção e publicação.",
      awardTitle: "SaaS Product Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "adansonea": {
    id: "adansonea",
    title: "Adansonea",
    category: "CASE STUDY // LANDING PAGE & BOUTIQUE PEOPLE ADVISORY",
    image: "/printadansonea.webp",
    liveUrl: "https://www.adansonea.com/",
    tags: ["WordPress", "Elementor Pro", "Plugins Otimizados", "Yoast SEO", "Performance & WPO"],
    client: "Adansonea Leadership Consulting",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "SEO & Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "WPO Plugins"],
    tagline: "Presença digital refinada em WordPress & Elementor Pro para consultoria internacional de liderança.",
    overview: "Projetamos e desenvolvemos a landing page e a presença digital para a Adansonea, uma consultoria boutique especializada em estratégias de liderança e gestão de pessoas para organizações globais. A plataforma foi construída em WordPress e Elementor Pro com um ecossistema de plugins otimizados, combinando design executivo de alto padrão com autonomia total para a equipe cliente gerenciar seus conteúdos.",
    challenge: "Posicionar a marca Adansonea no mercado internacional com uma interface elegante e sóbria que comunique credibilidade corporativa, utilizando uma arquitetura em WordPress limpa, rápida e de fácil gestão interna.",
    solution: "Desenvolvemos uma estrutura sob medida no WordPress alimentada por Elementor Pro, aplicando técnicas avançadas de WPO (Web Performance Optimization), otimização de imagens, scripts e plugins de SEO para garantir navegação rápida e excelente indexação.",
    results: [
      "Plataforma intuitiva em WordPress permitindo gestão fácil e ágil de conteúdos pela equipe Adansonea.",
      "Design de marca executivo com Elementor Pro focado em conversão de clientes B2B.",
      "Otimização completa de performance e SEO com plugins configurados e alta velocidade no PageSpeed."
    ],
    showcaseHeroTitle: "Design Executive & Autonomia em WordPress com Elementor Pro",
    performance: {
      speed: { title: "Velocidade", score: "WPO & Performance", description: "Navegação fluida com otimização avançada de assets e cache no WordPress." },
      tech: { title: "Tecnologia", tech: "WordPress + Elementor Pro", description: "Gestão de conteúdo intuitiva e flexibilidade com ecossistema de plugins." },
      seo: { title: "SEO", status: "Yoast SEO Otimizado", description: "Meta tags e indexação estruturada para o mercado de liderança internacional." }
    },
    designSystemText: "Desenvolvemos um design system refinado no Elementor Pro com tons corporativos sóbrios, contraste impecável e componentes visuais reutilizáveis para manter a consistência em todas as seções.",
    designSystemComponents: {
      ctaLabel: "Conhecer a Adansonea",
      cardTitle: "People Strategy",
      cardDesc: "Alinhamento de RH e liderança com as metas estratégicas do negócio.",
      awardTitle: "WordPress Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "acp": {
    id: "acp",
    title: "ACP Tax Advisory",
    category: "CASE STUDY // WEBSITE INSTITUCIONAL & CONSULTORIA FISCAL",
    image: "/printacp.webp",
    liveUrl: "https://acptaxadvisory.com/",
    tags: ["WordPress", "Elementor Pro", "AIOSEO", "Performance & WPO"],
    client: "ACP Tax Advisory LLC",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "SEO & Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "AIOSEO", "WPO Plugins"],
    tagline: "Website institucional de alta conversão para consultoria norte-americana de planejamento tributário.",
    overview: "Desenvolvemos o novo website institucional da ACP Tax Advisory, uma firma norte-americana de consultoria tributária e planejamento financeiro para empresários. A plataforma desmistifica a complexidade fiscal através de uma linguagem clara, arquitetura visual sóbria e fluxos de agendamento simplificados.",
    challenge: "Transformar tópicos fiscais complexos em uma experiência digital simples, elegante e altamente persuasiva para empresários nos Estados Unidos, garantindo carregamento rápido e otimização para captação de leads.",
    solution: "Criamos um layout corporativo moderno com seções explicativas claras, depoimentos de clientes, calculadoras/simuladores institucionais e formulários integrados para contratação direta de estratégias tributárias.",
    results: [
      "Aumento significativo no tempo de permanência no site e na taxa de conversão para reuniões de diagnóstico.",
      "Comunicação direta e transparente da proposta de valor em consultoria tributária B2B.",
      "Estrutura otimizada para SEO local e nacional nos Estados Unidos com carregamento em sub-segundo."
    ],
    showcaseHeroTitle: "Planejamento Tributário Inteligente & Presença Digital de Confiança",
    performance: {
      speed: { title: "Velocidade", score: "Carregamento Rápido", description: "Otimização completa de recursos para carregamento instantâneo no desktop e mobile." },
      tech: { title: "Tecnologia", tech: "WordPress Otimizado", description: "Arquitetura limpa com segurança e gerenciamento intuitivo de conteúdo." },
      seo: { title: "SEO", status: "Indexação Internacional", description: "Otimização total para mecanismos de busca focados em serviços financeiros e fiscais." }
    },
    designSystemText: "Criamos uma identidade visual sóbria e refinada, alinhando tons azuis marinho profundos a detalhes dourados e tipografia corporativa de altíssima legibilidade.",
    designSystemComponents: {
      ctaLabel: "Get Started Now",
      cardTitle: "Smart Tax Strategy",
      cardDesc: "Soluções e planejamento tributário sem complicação para empresas.",
      awardTitle: "Tax Advisory Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "osa": {
    id: "osa",
    title: "ÔSA Branding Studio",
    category: "CASE STUDY // LANDING PAGE & BRANDING STUDIO",
    image: "/printosa.webp",
    liveUrl: "https://osabrandingstudio.com/homenew/",
    tags: ["WordPress", "Elementor Pro", "Branding & Design", "Yoast SEO", "Performance WPO"],
    client: "ÔSA Branding Studio",
    year: "2026",
    scope: ["UX/UI Design Editorial", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "WPO Plugins"],
    tagline: "Presença digital autoral e landing page conceitual para estúdio europeu de branding.",
    overview: "Projetamos a nova landing page e presença digital da ÔSA Branding Studio, um estúdio criativo especializado em construção de marcas autênticas e posicionamento estratégico. Desenvolvido em WordPress e Elementor Pro, o projeto reflete uma estética editorial arrojada, 'diferente do que estás habituado', com layout de alto impacto visual.",
    challenge: "Traduzir a identidade provocativa e disruptiva do estúdio de branding em uma navegação web marcante, mantendo carregamento rápido e autonomia total de gerenciamento de portfólio no WordPress.",
    solution: "Construímos uma landing page dinâmica no WordPress utilizando Elementor Pro e plugins de otimização de performance, aplicando tipografia marcante, espaçamentos generosos, microinterações e vitrine de projetos.",
    results: [
      "Posicionamento de marca forte e diferencial competitivo no mercado de design europeu.",
      "Plataforma intuitiva em WordPress para publicação ágil de novos cases de branding.",
      "Excelente velocidade de carregamento com recursos gráficos otimizados."
    ],
    showcaseHeroTitle: "Design Conceitual & Identidade Provocativa para Estúdio de Branding",
    performance: {
      speed: { title: "Velocidade", score: "WPO & Fluid Performance", description: "Imagens e assets visuais otimizados sem perda de qualidade conceitual." },
      tech: { title: "Tecnologia", tech: "WordPress + Elementor Pro", description: "Autonomia de edição com estrutura modular e limpa." },
      seo: { title: "SEO", status: "Yoast SEO", description: "Otimização focada no nicho de branding, design e consultoria criativa." }
    },
    designSystemText: "Desenvolvemos uma estética visual editorial com forte contraste, tipografia de grande porte e cartões de projeto minimalistas que deixam o portfólio em destaque.",
    designSystemComponents: {
      ctaLabel: "Ver Portfólio",
      cardTitle: "Brand Strategy",
      cardDesc: "Técnicas criativas e conceituais para criação de estratégias de marca.",
      awardTitle: "Design Studio Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  }
};
