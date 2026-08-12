export type Language = 'pt' | 'en' | 'es';

export interface TranslationDictionary {
  nav: {
    inicio: string;
    sobre: string;
    servicos: string;
    projetos: string;
    blog: string;
    contato: string;
    localizacao: string;
    idioma: string;
    atendimento: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    bottomText: string;
    ctaButton: string;
    projectsButton: string;
    locationLine: string;
  };
  about: {
    tag: string;
    title: string;
    period: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    whatWeBuildTitle: string;
    whatWeBuildSubtitle: string;
    technicalHighlights: string;
    backCard: string;
    estimatedTime: string;
    requestQuote: string;
    items: {
      landingPages: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
      sitesApps: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
      ecommerce: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
      agendamento: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
      integracoes: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
      performance: {
        title: string;
        desc: string;
        tagline: string;
        fullDesc: string;
        highlights: string[];
        deliverables: string[];
        timeRange: string;
      };
    };
    differentialsTag: string;
    differentialsTitle: string;
    differentialsSubtitle: string;
    differentials: Array<{ num: string; title: string; desc: string }>;
  };
  techStack: {
    title: string;
  };
  impact: {
    tag: string;
    descriptionBold: string;
    descriptionFade: string;
    stats: {
      projects: string;
      clients: string;
      years: string;
      satisfaction: string;
    };
  };
  portfolio: {
    tag: string;
    title: string;
    viewAll: string;
    categories: {
      todos: string;
      experienciaWeb: string;
      siteInstitucional: string;
      landingPage: string;
      interfacesSaas: string;
      identidadeVisual: string;
      ecommerce: string;
    };
    verCase: string;
    ctaProcessText: string;
    ctaButtonText: string;
    liveProject: string;
    sourceCode: string;
    scanning: string;
    projects: Array<{
      id: string;
      title: string;
      category: string;
      categoryKey: string;
      description: string;
      image: string;
      liveUrl?: string;
      githubUrl?: string;
      tags: string[];
    }>;
  };
  testimonials: {
    tag: string;
    title: string;
    titleHighlight: string;
    items: Array<{
      badge: string;
      text: string;
      role: string;
    }>;
  };
  faq: {
    tag: string;
    title: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  };
  blog: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    buttonText: string;
    searchPlaceholder: string;
    noResults: string;
    posts: Array<{
      date: string;
      title: string;
      excerpt: string;
      image: string;
    }>;
  };
  contactPage: {
    tag: string;
    title: string;
    subtitle: string;
    formTab: string;
    whatsappTab: string;
    response24h: string;
    response5min: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    typeLabel: string;
    projectTypes: string[];
    budgetLabel: string;
    budgetRanges: string[];
    timelineLabel: string;
    timelineRanges: string[];
    refLabel: string;
    refPlaceholder: string;
    descLabel: string;
    descPlaceholder: string;
    submitButton: string;
    processing: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
    whatsappBenefits: string[];
    chatWhatsAppButton: string;
  };
  projectsPage: {
    tag: string;
    title: string;
    subtitle: string;
    scanning: string;
  };
  sobrePage: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    manifestoTag: string;
    manifestoP1: string;
    manifestoHighlight: string;
    manifestoP2: string;
    ctaButton: string;
    sysMonitor: string;
    latency: string;
    uptime: string;
    ttfb: string;
    errors: string;
    throughput: string;
    pillarsTag: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillars: Array<{
      tag: string;
      num: string;
      title: string;
      desc: string;
    }>;
    detailTag: string;
    detailTitle: string;
    detailSubtitle: string;
    detailCards: Array<{
      title: string;
      desc: string;
    }>;
    coreStackTag: string;
    coreStackTitle: string;
    coreStackSubtitle: string;
    hireTag: string;
    hireTitle: string;
    hireSubtitle: string;
    hireModels: Array<{
      title: string;
      desc: string;
    }>;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    allRightsReserved: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  pt: {
    nav: {
      inicio: 'Início',
      sobre: 'Sobre',
      servicos: 'Serviços',
      projetos: 'Projetos',
      blog: 'Blog',
      contato: 'Contato',
      localizacao: 'Localização',
      idioma: 'Idioma',
      atendimento: 'Brasil · Atendimento Remoto',
    },
    hero: {
      title1: 'Design &',
      title2: 'Código',
      subtitle: 'DESENVOLVIMENTO FULL STACK & WEB DESIGNER',
      bottomText: 'Unimos design visual refinado e engenharia de software de alta performance para criar produtos digitais que geram resultados de verdade.',
      ctaButton: 'Solicitar Orçamento',
      projectsButton: 'Ver Projetos',
      locationLine: 'BASEADO NO BRASIL / ATENDENDO GLOBALMENTE',
    },
    about: {
      tag: 'Sobre Nós',
      title: 'Desenvolvemos sites e sistemas que unem design moderno, estratégia de conversão e tecnologia sólida — transformando ideias em soluções digitais que funcionam.',
      period: '2021–Presente',
    },
    services: {
      tag: 'O QUE FAZEMOS',
      title: 'LANDING PAGES · SITES · E-COMMERCE · AGENDAMENTO · INTEGRAÇÕES · PERFORMANCE',
      subtitle: 'Sites e sistemas planejados para gerar resultados reais. Do código ao deploy, cada decisão técnica é tomada para maximizar performance e conversão.',
      whatWeBuildTitle: 'O que desenvolvemos',
      whatWeBuildSubtitle: 'Seis especialidades técnicas construídas para empresas que levam resultado a sério.',
      technicalHighlights: 'Destaques Técnicos',
      backCard: 'Voltar ↺',
      estimatedTime: 'Prazo estimado',
      requestQuote: 'Solicitar orçamento',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'Páginas únicas otimizadas pra captar leads ou vender direto, com design persuasivo e estratégias de conversão.',
          tagline: 'Converte visitantes em clientes em segundos.',
          fullDesc: 'Páginas únicas de alta performance projetadas para uma missão só: converter. Combinamos copywriting persuasivo, hierarquia visual calculada e testes A/B contínuos para que cada elemento da página trabalhe ativamente a favor da sua taxa de conversão.',
          highlights: [
            'Design orientado a conversão',
            'Testes A/B estruturados',
            'Integração com pixel e CRM',
            'Mobile-first obrigatório',
            'Carregamento sub-segundo',
          ],
          deliverables: ['Protótipo interativo', 'Deploy em produção', 'Setup de rastreamento', 'Relatório de performance'],
          timeRange: '7–14 dias',
        },
        sitesApps: {
          title: 'Sites & Apps',
          desc: 'Presença online completa em React, Next.js ou WordPress, com foco em usabilidade e identidade visual refinada.',
          tagline: 'Presença digital que representa o nível da sua marca.',
          fullDesc: 'Desenvolvemos sites institucionais e aplicações web completas em React e Next.js, focando em identidade visual sólida, experiência de usuário impecável e escalabilidade técnica. Do design ao deploy, tudo sob controle absoluto de código.',
          highlights: [
            'Next.js App Router',
            'React Server Components',
            'Design System personalizado',
            'CMS headless opcional',
            'SEO técnico avançado',
          ],
          deliverables: ['UI/UX completo', 'Código-fonte', 'Documentação técnica', 'Deploy + CDN'],
          timeRange: '21–45 dias',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Plataformas de venda robustas com integração de pagamentos, carrinho inteligente e gestão simples.',
          tagline: 'Plataformas de venda que escalam com seu negócio.',
          fullDesc: 'Lojas virtuais robustas com checkout otimizado, integração nativa de pagamentos, gestão de estoque e carrinho inteligente com recuperação de abandono. Construídas para maximizar o valor médio do pedido e minimizar a fricção no funil de compra.',
          highlights: [
            'Checkout otimizado',
            'Pagamentos: Stripe, MercadoPago',
            'Recuperação de carrinho',
            'Painel de gestão',
            'Analytics de vendas',
          ],
          deliverables: ['Loja completa', 'Painel admin', 'Integração de pagamentos', 'Treinamento da equipe'],
          timeRange: '30–60 dias',
        },
        agendamento: {
          title: 'Sistemas de Agendamento',
          desc: 'Sistemas personalizados para serviços com calendários automáticos e notificações inteligentes.',
          tagline: 'Transforme reservas em receita recorrente automática.',
          fullDesc: 'Sistemas de agendamento sob medida para clínicas, academias, estúdios e serviços de qualquer segmento. Calendários em tempo real, confirmações automáticas por WhatsApp ou e-mail, e um painel centralizado que elimina o trabalho manual.',
          highlights: [
            'Calendário em tempo real',
            'Notificações WhatsApp/Email',
            'Pagamento antecipado opcional',
            'Regras de cancelamento',
            'Dashboard de métricas',
          ],
          deliverables: ['Sistema completo', 'Integração WhatsApp', 'Painel de controle', 'Treinamento'],
          timeRange: '14–30 dias',
        },
        integracoes: {
          title: 'Integrações & APIs',
          desc: 'Conexão com CRMs, e-mail marketing, pixels de anúncios e APIs para fluxos 100% automáticos.',
          tagline: 'Conecte seu ecossistema digital em um fluxo só.',
          fullDesc: 'Conectamos CRMs, ferramentas de e-mail marketing, pixels de anúncios, ERPs e APIs externas em fluxos automáticos que eliminam processos manuais e centralizam dados. Operamos via webhooks, REST APIs e integrações nativas de plataforma.',
          highlights: [
            'CRM: HubSpot, RD Station',
            'E-mail: ActiveCampaign, Klaviyo',
            'Pixels: Meta, Google, TikTok',
            'Webhooks customizados',
            'Automação via APIs REST',
          ],
          deliverables: ['Mapeamento de dados', 'Conectores ativos', 'Logs de auditoria', 'Documentação da API'],
          timeRange: '7–21 dias',
        },
        performance: {
          title: 'Performance & SEO',
          desc: 'SEO técnico, Core Web Vitals, mobile-first e analytics avançado para maximizar tráfego e conversões.',
          tagline: 'Velocidade e visibilidade que geram tráfego previsível.',
          fullDesc: 'Auditoria e otimização técnica focada em Core Web Vitals, SEO estrutural, performance de carregamento e estratégia de palavras-chave. Identificamos gargalos invisíveis que destroem rankings e taxas de conversão, e os eliminamos sistematicamente.',
          highlights: [
            'Auditoria de Core Web Vitals',
            'SEO técnico avançado',
            'Otimização de imagens e fontes',
            'Schema markup estruturado',
            'Analytics e monitoramento',
          ],
          deliverables: ['Auditoria completa', 'Código otimizado', 'Score 90+ PageSpeed', 'Relatório comparativo'],
          timeRange: '5–14 dias',
        },
      },
      differentialsTag: 'Por que a Web Lunar',
      differentialsTitle: 'Diferenciais técnicos',
      differentialsSubtitle: 'O que nos separa de agências e freelancers do mercado convencional.',
      differentials: [
        {
          num: '01',
          title: 'Código de produção, não templates',
          desc: 'Nenhum projeto usa page builders ou construtores visuais genéricos. Cada linha de código é escrita à mão, garantindo performance máxima e controle total da base.',
        },
        {
          num: '02',
          title: 'Arquitetura escalável desde o dia 1',
          desc: 'Projetamos sistemas para aguentar crescimento. Estruturas desacopladas, tipagem end-to-end e infraestrutura documentada e auditável.',
        },
        {
          num: '03',
          title: 'Foco em resultados mensuráveis',
          desc: 'Não entregamos apenas sites bonitos. Cada projeto tem KPIs definidos e métricas rastreadas para medir impacto real no negócio.',
        },
        {
          num: '04',
          title: 'Prazos que se cumprem',
          desc: 'Trabalhamos com escopo fechado e cronogramas realistas. Cada entrega passa por revisão técnica antes de ir ao ar.',
        },
      ],
    },
    techStack: {
      title: 'TECNOLOGIAS QUE UTILIZO',
    },
    impact: {
      tag: 'AQUI VOCÊ ENCONTRA',
      descriptionBold: 'Desenvolvimento full stack especializado em criar sites e sistemas que geram resultados reais: mais leads, mais vendas, mais reservas. Unimos as tecnologias mais modernas e design estratégico',
      descriptionFade: ' para transformar ideias em soluções digitais funcionais, rápidas e otimizadas — do wireframe ao deploy em produção.',
      stats: {
        projects: 'Projetos entregues',
        clients: 'Clientes atendidos',
        years: 'Anos de experiência',
        satisfaction: 'Taxa de satisfação',
      },
    },
    portfolio: {
      tag: 'Nosso Trabalho',
      title: 'Nosso trabalho',
      viewAll: 'Ver todos',
      categories: {
        todos: 'Todos',
        experienciaWeb: 'Experiência Web',
        siteInstitucional: 'Site Institucional',
        landingPage: 'Landing Page',
        interfacesSaas: 'Interfaces SaaS',
        identidadeVisual: 'Identidade Visual',
        ecommerce: 'E-commerce',
      },
      verCase: 'Ver Case',
      ctaProcessText: 'Quer ver o processo criativo por trás de cada projeto? Cada case inclui estratégia, wireframes e resultados reais.',
      ctaButtonText: 'Iniciar um Projeto',
      liveProject: 'Projeto Online',
      sourceCode: 'Código Fonte',
      scanning: 'Escaneando portfólio...',
      projects: [
        {
          id: 'snews',
          title: 'SNEWS',
          category: 'Site Institucional',
          categoryKey: 'siteInstitucional',
          description: 'Website institucional de alta performance e internacionalizado para a líder em soluções tecnológicas de broadcast.',
          image: '/printsnews.webp',
          liveUrl: 'https://snews.tv',
          tags: ['Next.js App Router', 'TypeScript', 'next-intl (i18n)'],
        },
        {
          id: 'volk',
          title: 'VOLK Presenter',
          category: 'Experiência Web',
          categoryKey: 'experienciaWeb',
          description: 'Experiência web imersiva com animações fluidas para a plataforma de gráficos e interatividade em tempo real.',
          image: '/printvolk.webp',
          liveUrl: 'https://volkpresenter.tv/pt',
          tags: ['Next.js 15', 'GSAP', 'Framer Motion'],
        },
        {
          id: 'capi',
          title: 'CAPI Digital',
          category: 'Experiência Web',
          categoryKey: 'experienciaWeb',
          description: 'Landing page e plataforma de apresentação para o cérebro operacional de produção de conteúdo assistido por IA.',
          image: '/printcapi.webp',
          liveUrl: 'https://capi.digital/pt',
          tags: ['Next.js', 'AI Integration', 'Tailwind CSS'],
        },
        {
          id: 'adansonea',
          title: 'Adansonea',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Landing page e plataforma institucional para consultoria boutique global de liderança e gestão de pessoas.',
          image: '/printadansonea.webp',
          liveUrl: 'https://www.adansonea.com/',
          tags: ['WordPress', 'Elementor Pro', 'Plugins Otimizados'],
        },
        {
          id: 'acp',
          title: 'ACP Tax Advisory',
          category: 'Site Institucional',
          categoryKey: 'siteInstitucional',
          description: 'Website institucional e plataforma de serviços fiscais para consultoria norte-americana de planejamento tributário.',
          image: '/printacp.webp',
          liveUrl: 'https://acptaxadvisory.com/',
          tags: ['WordPress', 'Elementor Pro', 'AIOSEO'],
        },
        {
          id: 'osa',
          title: 'ÔSA Branding Studio',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Landing page e plataforma de apresentação para estúdio europeu especializado em branding e design conceitual.',
          image: '/printosa.webp',
          liveUrl: 'https://osabrandingstudio.com/homenew/',
          tags: ['WordPress', 'Elementor Pro', 'Yoast SEO'],
        },
      ],
    },
    testimonials: {
      tag: 'Depoimentos',
      title: 'O QUE DIZEM SOBRE NÓS',
      titleHighlight: 'SOBRE NÓS',
      items: [
        {
          badge: 'DESENVOLVIMENTO WEB',
          text: 'A Web Lunar foi a responsável pelo front-end de um site que fizemos juntos. Eles implementaram o design com fidelidade, ajustaram o que precisava e o resultado ficou muito bem feito. É fácil trabalhar com a equipe e o prazo foi cumprido direitinho.',
          role: 'Front End UI / UX Developer',
        },
        {
          badge: 'INTEGRAÇÃO DE SISTEMAS',
          text: 'Contratamos a Web Lunar para desenvolver uma integração com nosso sistema de pagamentos e a equipe entregou tudo funcionando certinho. Tiraram dúvidas rápido, testaram bem e deixaram a documentação organizada. Trabalho sólido e sem dor de cabeça.',
          role: 'Tech Lead / Gestor de Projeto',
        },
        {
          badge: 'PARCERIA ESTRATÉGICA',
          text: 'Tive a oportunidade de acompanhar a Web Lunar e, desde o começo, sempre foi perceptível o grande potencial da equipe em resolver problemas complexos. É um time extremamente disposto, participativo e que entrega demandas com agilidade.',
          role: 'Coordenador de Marketing e Conteúdo',
        },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Perguntas frequentes',
      questions: [
        {
          q: 'A Web Lunar trabalha com clientes de outros estados ou países?',
          a: 'Sim! Atendemos clientes de todo o Brasil e também internacionalmente. Todo o processo é feito de forma remota — reuniões por vídeo, entregas via plataformas colaborativas e comunicação ágil pelo WhatsApp ou Slack.',
        },
        {
          q: 'Com que tipo de cliente vocês costumam trabalhar?',
          a: 'Trabalhamos com empreendedores, startups e PMEs que precisam de presença digital estratégica. Se você quer um site que converte — não só um site bonito — provavelmente temos sinergia.',
        },
        {
          q: 'Qual é o prazo médio de entrega de um projeto?',
          a: 'Depende do escopo: landing pages ficam prontas em 7–14 dias, sites completos em 3–5 semanas, e-commerces e sistemas em 4–8 semanas. O prazo exato é definido no briefing inicial.',
        },
        {
          q: 'Vocês usam WordPress ou tecnologias mais modernas?',
          a: 'Ambos. Usamos WordPress para projetos que precisam de CMS simples e gestão de conteúdo fácil. Para projetos que exigem performance máxima, escalabilidade e animações ricas, desenvolvemos com React, Next.js e Node.js.',
        },
        {
          q: 'Como funciona o processo depois que fecho o projeto?',
          a: 'Após o contrato, fazemos o briefing detalhado, apresentamos a proposta visual, refinamos juntos e entregamos com todas as instruções de uso. Após o go-live, oferecemos suporte para ajustes e estabilidade.',
        },
      ],
    },
    blog: {
      tag: 'ARTIGOS',
      title: 'Design & desenvolvimento',
      titleHighlight: 'DESENVOLVIMENTO',
      subtitle: 'Artigos, guias e pensamentos sobre engenharia de software de alta performance, design visual e estratégias de conversão.',
      buttonText: 'Ver todos',
      searchPlaceholder: 'Pesquisar artigos...',
      noResults: 'Nenhum artigo encontrado para a sua busca.',
      posts: [
        {
          date: '12 de Agosto, 2026',
          title: 'Como planejar o seu primeiro site profissional: o guia básico',
          excerpt: 'Do objetivo principal à escolha do conteúdo. Veja o que você realmente precisa definir antes de colocar sua empresa no ar.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        },
        {
          date: '08 de Agosto, 2026',
          title: 'Landing Page ou Site Institucional: qual é o ideal para você?',
          excerpt: 'Entenda de forma simples a diferença entre uma página direta para vendas e um site completo com várias seções.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
        },
        {
          date: '02 de Agosto, 2026',
          title: '3 coisas essenciais que todo site precisa ter para passar confiança',
          excerpt: 'Design organizado, boa velocidade no celular e botão de WhatsApp visível. O essencial para começar com o pé direito.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        },
      ],
    },
    contactPage: {
      tag: 'Contato',
      title: 'Vamos iniciar o seu projeto?',
      subtitle: 'Preencha o formulário abaixo ou envie uma mensagem direta para transformar sua ideia em um produto digital de alto impacto.',
      formTab: 'Formulário',
      whatsappTab: 'WhatsApp',
      response24h: 'Resposta em até 24 horas',
      response5min: 'Resposta em até 5 minutos',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'Ex: Lucas Pinheiro',
      emailLabel: 'Seu E-mail',
      emailPlaceholder: 'Ex: contato@weblunar.com.br',
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Ex: Desenvolvimento de novo sistema',
      typeLabel: 'Tipo de Projeto',
      projectTypes: ['Landing Page', 'Site Institucional', 'E-commerce', 'Sistema Web', 'App Mobile', 'Outro'],
      budgetLabel: 'Investimento Estimado',
      budgetRanges: ['Até R$ 5k', 'R$ 5k - 10k', 'R$ 10k - 20k', 'R$ 30k - 50k+'],
      timelineLabel: 'Prazo Estimado',
      timelineRanges: ['1 a 2 semanas', 'Até 1 mês', '1 a 3 meses', 'Sem pressa'],
      refLabel: 'Link de Referência / Wireframe (Figma, Drive, etc.)',
      refPlaceholder: 'Ex: https://figma.com/... ou link do Google Drive/PDF',
      descLabel: 'Descrição do Projeto / Demais Detalhes',
      descPlaceholder: 'Fale um pouco sobre a sua demanda, escopo desejado ou requisitos...',
      submitButton: 'Enviar Transmissão',
      processing: 'Processando...',
      successTitle: 'Transmissão Recebida!',
      successDesc: 'Obrigado pelo contato. Analisaremos as informações do seu projeto e entraremos em contato com seu orçamento o mais rápido possível.',
      sendAnother: 'Enviar Outro Orçamento',
      whatsappTitle: 'Converse pelo WhatsApp',
      whatsappSubtitle: 'Prefere um atendimento imediato? Fale agora mesmo com um de nossos engenheiros e designers para detalhar o seu projeto e receber um orçamento rápido.',
      whatsappBenefits: [
        'Resposta rápida em até 5 minutos',
        'Atendimento técnico direto (sem robôs)',
        'Definição de escopo e prazos na hora',
      ],
      chatWhatsAppButton: 'Conversar no WhatsApp',
    },
    projectsPage: {
      tag: 'Nosso Portfólio',
      title: 'Galeria de Projetos',
      subtitle: 'Estudos de caso, plataformas SaaS e soluções digitais sob medida, desenvolvidas com o mais alto rigor técnico e visual.',
      scanning: 'Escaneando portfólio...',
    },
    sobrePage: {
      badge: 'Operações e Diretrizes de Engenharia',
      title: 'A Infraestrutura Oculta Por Trás de Interfaces',
      titleHighlight: 'De Alto Padrão',
      subtitle: 'Não projetamos páginas estáticas. Construímos ecossistemas digitais robustos, projetados matematicamente para suportar tráfego severo, proteger margens de lucro e expandir operações sem gargalos técnicos.',
      manifestoTag: 'O Manifesto Corporativo',
      manifestoP1: 'Na WEB LUNAR unimos design minimalista e engenharia de software de elite. Desenvolvemos sistemas rápidos, modulares e blindados contra picos de tráfego, prontos para ',
      manifestoHighlight: 'converter acessos em faturamento previsível.',
      manifestoP2: 'No mercado de alta performance, a infraestrutura tecnológica divide a escala previsível do colapso. Sob picos severos de tráfego, arquiteturas genéricas falham. Nesse nível de operação, milissegundos de latência destroem conversões e queimam capital.',
      ctaButton: 'Solicitar Orçamento',
      sysMonitor: 'SYS MONITOR',
      latency: 'LATENCY',
      uptime: 'UPTIME',
      ttfb: 'TTFB',
      errors: 'ERRORS',
      throughput: 'THROUGHPUT',
      pillarsTag: 'Arquitetura Web Lunar',
      pillarsTitle: 'Os Quatro Pilares',
      pillarsSubtitle: 'Princípios de engenharia que definem cada linha de código que entregamos.',
      pillars: [
        {
          tag: 'Architecture',
          num: '01',
          title: 'Engenharia Full-Stack Desacoplada',
          desc: 'Separamos a interface visual (Front-End) do processamento (Back-End). A interface roda globalmente em redes ultra velozes, e os dados sensíveis permanecem isolados e seguros.',
        },
        {
          tag: 'Performance',
          num: '02',
          title: 'Desempenho Sub-Segundo (Zero Latência)',
          desc: 'Cada script, imagem e requisição ao banco passa por otimização estrita. Usamos Server Components para garantir que o primeiro render aconteça em frações de segundo.',
        },
        {
          tag: 'Engineering',
          num: '03',
          title: 'Type-Safe End-to-End & Escalabilidade',
          desc: 'Códigos 100% tipados de ponta a ponta que eliminam falhas entre a interface e o servidor, garantindo estabilidade para acoplar novos módulos sem quebras.',
        },
        {
          tag: 'Quality',
          num: '04',
          title: 'Prontidão para Auditoria Técnica',
          desc: 'Projetos limpos, sem caixas-pretas ou código confuso. Entregamos infraestrutura documentada, componentizada e pronta para auditorias de CTOs.',
        },
      ],
      detailTag: 'Engenharia de Detalhe',
      detailTitle: 'Velocidade Brutal. Segurança Inviolável.',
      detailSubtitle: 'Interfaces refinadas não servem para nada se falharem sob estresse técnico. Nosso desenvolvimento foca em garantir imunidade contra gargalos e vazamento de dados.',
      detailCards: [
        {
          title: 'Analytics Avançado & Rastreamento Privado',
          desc: 'Implementação de trackers otimizados que contornam bloqueadores de anúncios sem sacrificar a velocidade da página.',
        },
        {
          title: 'Ecossistemas de Dados Comportamentais',
          desc: 'Integração profunda com ferramentas de mapas de calor e gravação de sessão sem inserção de scripts pesados de terceiros.',
        },
        {
          title: 'Segurança de Dados e Conformidade',
          desc: 'Estruturas preparadas com as melhores práticas de proteção de tráfego, mitigação de vulnerabilidades em formulários e APIs protegidas.',
        },
      ],
      coreStackTag: 'Core Stack',
      coreStackTitle: 'Mural de Autoridade Técnica',
      coreStackSubtitle: 'Para agências e empresas que inspecionam nossa infraestrutura, operamos rigorosamente com a vanguarda tecnológica do mercado global de software:',
      hireTag: 'Contratação',
      hireTitle: 'Modelos de Engajamento',
      hireSubtitle: 'Não atuamos com o formato informal do mercado tradicional de freelancers. A WEB LUNAR estabelece relações corporativas estruturadas para atender demandas específicas de crescimento:',
      hireModels: [
        {
          title: 'Desenvolvimento de Escopo Fechado',
          desc: 'Engenharia pontual de ponta a ponta, desde o desenho da arquitetura técnica ao deploy final em ambientes de produção de alta performance.',
        },
        {
          title: 'Outsourcing e Transbordo Técnico',
          desc: 'Alocação contínua de capacidade sênior para agências de design ou lançamentos que exigem um parceiro confiável para absorver demandas complexas sob prazos rígidos.',
        },
        {
          title: 'Contratos de Evolução e SLA',
          desc: 'Acordos de nível de serviço mensais focados em monitoramento ativo, auditoria de performance, otimização de conversão e atualizações de infraestrutura.',
        },
      ],
    },
    footer: {
      tagline: 'Criando experiências digitais memoráveis e de alta performance.',
      contactTitle: 'Fale Conosco',
      allRightsReserved: 'Todos os direitos reservados.',
      privacy: 'PRIVACIDADE',
      terms: 'TERMOS',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobre: 'About',
      servicos: 'Services',
      projetos: 'Projects',
      blog: 'Blog',
      contato: 'Contact',
      localizacao: 'Location',
      idioma: 'Language',
      atendimento: 'Global · Remote Services',
    },
    hero: {
      title1: 'Design &',
      title2: 'Code',
      subtitle: 'FULL STACK DEVELOPMENT & WEB DESIGN',
      bottomText: 'We combine refined visual design and high-performance software engineering to build digital products that deliver real results.',
      ctaButton: 'Get a Quote',
      projectsButton: 'View Projects',
      locationLine: 'BASED IN BRAZIL / SERVING GLOBALLY',
    },
    about: {
      tag: 'About Us',
      title: 'We build websites and digital products that combine modern design, conversion strategy, and rock-solid tech — turning ideas into working digital solutions.',
      period: '2021–Present',
    },
    services: {
      tag: 'WHAT WE DO',
      title: 'LANDING PAGES · WEBSITES · E-COMMERCE · SCHEDULING · INTEGRATIONS · PERFORMANCE',
      subtitle: 'Websites and systems planned to deliver measurable results. From code to deploy, every technical decision is made to maximize performance and conversion.',
      whatWeBuildTitle: 'What we build',
      whatWeBuildSubtitle: 'Six technical specialties engineered for businesses that take results seriously.',
      technicalHighlights: 'Technical Highlights',
      backCard: 'Back ↺',
      estimatedTime: 'Estimated timeline',
      requestQuote: 'Request a quote',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'High-converting single pages crafted to generate leads or direct sales with persuasive design.',
          tagline: 'Converts visitors into customers within seconds.',
          fullDesc: 'High-performance single pages engineered for one single mission: conversion. We combine persuasive copywriting, computed visual hierarchy, and continuous A/B testing so every element actively works for your conversion rate.',
          highlights: [
            'Conversion-driven UI/UX',
            'Structured A/B testing',
            'Pixel & CRM integration',
            'Strict mobile-first approach',
            'Sub-second load times',
          ],
          deliverables: ['Interactive prototype', 'Production deployment', 'Tracking setup', 'Performance audit'],
          timeRange: '7–14 days',
        },
        sitesApps: {
          title: 'Websites & Apps',
          desc: 'Complete digital presence in React, Next.js, or WordPress focused on usability and refined visual identity.',
          tagline: 'A digital presence that reflects the true caliber of your brand.',
          fullDesc: 'We build corporate websites and full-scale web applications in React and Next.js, focusing on solid brand identity, flawless user experience, and technical scalability. From design to deploy, complete code control.',
          highlights: [
            'Next.js App Router',
            'React Server Components',
            'Custom Design System',
            'Optional headless CMS',
            'Advanced technical SEO',
          ],
          deliverables: ['Full UI/UX', 'Source code repository', 'Technical docs', 'Deploy + Global CDN'],
          timeRange: '21–45 days',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Robust online store platforms with payment gateways, smart carts, and easy management.',
          tagline: 'Sales platforms engineered to scale with your business.',
          fullDesc: 'Robust e-commerce stores with optimized checkouts, native payment integrations, inventory management, and smart cart abandonment recovery. Designed to maximize average order value and minimize funnel friction.',
          highlights: [
            'High-converting checkout',
            'Payments: Stripe, PayPal, Local gateways',
            'Cart abandonment recovery',
            'Intuitive admin dashboard',
            'Sales analytics & tracking',
          ],
          deliverables: ['Complete store', 'Admin dashboard', 'Payment gateways', 'Team training'],
          timeRange: '30–60 days',
        },
        agendamento: {
          title: 'Booking Systems',
          desc: 'Tailored appointment scheduling systems with automated calendars and smart notifications.',
          tagline: 'Turn appointments into predictable recurring revenue.',
          fullDesc: 'Custom booking systems for clinics, fitness studios, consulting firms, and service providers. Real-time calendar syncing, automated notifications via WhatsApp or Email, and a centralized management dashboard.',
          highlights: [
            'Real-time calendar sync',
            'WhatsApp & Email alerts',
            'Optional upfront payments',
            'Automated cancellation rules',
            'Metrics dashboard',
          ],
          deliverables: ['Complete booking engine', 'WhatsApp notifications', 'Control panel', 'Onboarding guide'],
          timeRange: '14–30 days',
        },
        integracoes: {
          title: 'Integrations & APIs',
          desc: 'Seamless connections with CRMs, email marketing, ad pixels, and custom APIs for automated workflows.',
          tagline: 'Connect your entire digital ecosystem into one automated flow.',
          fullDesc: 'We integrate CRMs, email marketing tools, tracking pixels, ERPs, and custom APIs into automated pipelines that eliminate manual tasks and unify data. Built using webhooks, REST APIs, and native cloud connectors.',
          highlights: [
            'CRM: HubSpot, Salesforce, RD Station',
            'Email: ActiveCampaign, Klaviyo',
            'Ad Pixels: Meta, Google, TikTok',
            'Custom Webhooks',
            'REST API automation',
          ],
          deliverables: ['Data schema mapping', 'Active connectors', 'Audit logs', 'API documentation'],
          timeRange: '7–21 days',
        },
        performance: {
          title: 'Performance & SEO',
          desc: 'Technical SEO, Core Web Vitals, mobile-first optimization, and advanced analytics to maximize growth.',
          tagline: 'Speed and discoverability that drive predictable traffic.',
          fullDesc: 'Technical auditing and optimization focused on Core Web Vitals, semantic SEO structure, asset loading performance, and keyword positioning. We systematically eradicate hidden bottlenecks that hurt your rankings.',
          highlights: [
            'Core Web Vitals audit',
            'Advanced technical SEO',
            'Asset & font optimization',
            'Structured Schema markup',
            'Analytics & monitoring',
          ],
          deliverables: ['Full diagnostic report', 'Optimized codebase', '90+ PageSpeed Score', 'Benchmark analytics'],
          timeRange: '5–14 days',
        },
      },
      differentialsTag: 'Why Web Lunar',
      differentialsTitle: 'Technical Advantages',
      differentialsSubtitle: 'What sets us apart from conventional agencies and freelance marketplaces.',
      differentials: [
        {
          num: '01',
          title: 'Production-grade code, zero generic templates',
          desc: 'No visual page builders or bloated themes. Every line of code is handwritten for maximum speed, security, and baseline control.',
        },
        {
          num: '02',
          title: 'Scalable architecture from Day 1',
          desc: 'We engineer systems ready for high growth. Decoupled front-ends, strict end-to-end typing, and fully documented infrastructure.',
        },
        {
          num: '03',
          title: 'Obsession with measurable outcomes',
          desc: 'We do not just ship pretty sites. Every build has clear KPIs and tracking pipelines to gauge true business ROI.',
        },
        {
          num: '04',
          title: 'Deadlines that are strictly respected',
          desc: 'We operate with defined scopes and realistic milestones. Every deliverable undergoes strict QA before going live.',
        },
      ],
    },
    techStack: {
      title: 'TECHNOLOGIES WE USE',
    },
    impact: {
      tag: 'WHAT WE DELIVER',
      descriptionBold: 'Full stack development specialized in building websites and systems that generate real outcomes: more leads, sales, and bookings. We join modern tech with strategic design',
      descriptionFade: ' to transform ideas into fast, functional, and optimized digital solutions — from wireframe to production.',
      stats: {
        projects: 'Projects delivered',
        clients: 'Clients served',
        years: 'Years of experience',
        satisfaction: 'Satisfaction rate',
      },
    },
    portfolio: {
      tag: 'Our Portfolio',
      title: 'Featured Work',
      viewAll: 'View All',
      categories: {
        todos: 'All',
        experienciaWeb: 'Web Experience',
        siteInstitucional: 'Corporate Website',
        landingPage: 'Landing Page',
        interfacesSaas: 'SaaS Interfaces',
        identidadeVisual: 'Visual Identity',
        ecommerce: 'E-commerce',
      },
      verCase: 'View Case',
      ctaProcessText: 'Want to see the strategy behind each project? Every case study includes wireframes, technical scope, and real metrics.',
      ctaButtonText: 'Start a Project',
      liveProject: 'Live Project',
      sourceCode: 'Source Code',
      scanning: 'Scanning portfolio...',
      projects: [
        {
          id: 'snews',
          title: 'SNEWS',
          category: 'Corporate Website',
          categoryKey: 'siteInstitucional',
          description: 'High-performance, internationalized corporate platform built for the broadcast technology leader across Latin America.',
          image: '/printsnews.webp',
          liveUrl: 'https://snews.tv',
          tags: ['Next.js App Router', 'TypeScript', 'next-intl (i18n)'],
        },
        {
          id: 'volk',
          title: 'VOLK Presenter',
          category: 'Web Experience',
          categoryKey: 'experienciaWeb',
          description: 'Immersive 60 FPS interactive web showcase for real-time broadcast graphics and studio touchscreen software.',
          image: '/printvolk.webp',
          liveUrl: 'https://volkpresenter.tv/pt',
          tags: ['Next.js 15', 'GSAP', 'Framer Motion'],
        },
        {
          id: 'capi',
          title: 'CAPI Digital',
          category: 'Web Experience',
          categoryKey: 'experienciaWeb',
          description: 'Interactive landing page and presentation platform for the AI-assisted editorial content production workspace.',
          image: '/printcapi.webp',
          liveUrl: 'https://capi.digital/pt',
          tags: ['Next.js', 'AI Integration', 'Tailwind CSS'],
        },
        {
          id: 'adansonea',
          title: 'Adansonea',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Refined corporate landing page and institutional portal for an international leadership and executive advisory boutique.',
          image: '/printadansonea.webp',
          liveUrl: 'https://www.adansonea.com/',
          tags: ['WordPress', 'Elementor Pro', 'WPO Optimized'],
        },
        {
          id: 'acp',
          title: 'ACP Tax Advisory',
          category: 'Corporate Website',
          categoryKey: 'siteInstitucional',
          description: 'High-conversion institutional website and client portal for a US-based strategic tax consulting firm.',
          image: '/printacp.webp',
          liveUrl: 'https://acptaxadvisory.com/',
          tags: ['WordPress', 'Elementor Pro', 'AIOSEO'],
        },
        {
          id: 'osa',
          title: 'ÔSA Branding Studio',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Editorial, authorial showcase and conversion landing page for a European strategic brand design studio.',
          image: '/printosa.webp',
          liveUrl: 'https://osabrandingstudio.com/homenew/',
          tags: ['WordPress', 'Elementor Pro', 'Yoast SEO'],
        },
      ],
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'WHAT OUR CLIENTS SAY',
      titleHighlight: 'CLIENTS SAY',
      items: [
        {
          badge: 'WEB DEVELOPMENT',
          text: 'Web Lunar was responsible for the front-end of a website we built together. They executed the design with absolute fidelity, adjusted details quickly, and delivered an exceptional product. Easy to work with and strictly on deadline.',
          role: 'Front End UI / UX Developer',
        },
        {
          badge: 'SYSTEM INTEGRATION',
          text: 'We hired Web Lunar to build a payment gateway integration for our system. The team delivered everything running flawlessly. They answered questions fast, tested thoroughly, and kept documentation clean. Solid work without headaches.',
          role: 'Tech Lead / Project Manager',
        },
        {
          badge: 'STRATEGIC PARTNERSHIP',
          text: 'I have followed Web Lunar since the beginning and their capability to solve complex engineering challenges has always been remarkable. Extremely dedicated, proactive, and fast in executing demands.',
          role: 'Head of Marketing & Content',
        },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently asked questions',
      questions: [
        {
          q: 'Does Web Lunar work with clients globally or in other countries?',
          a: 'Yes! We serve clients across the Americas, Europe, and worldwide. Our entire collaboration is remote — video syncs, collaborative Figma/GitHub reviews, and instant communication via WhatsApp or Slack.',
        },
        {
          q: 'What type of clients do you typically partner with?',
          a: 'We work with ambitious founders, high-growth startups, and established enterprises that need a strategic digital presence. If you want a platform that converts and performs — not just a generic template — we are the right fit.',
        },
        {
          q: 'What is the average turnaround time for a project?',
          a: 'It depends on the scope: landing pages take 7–14 days, corporate websites 3–5 weeks, e-commerce and web applications 4–8 weeks. Exact delivery schedules are established during the initial technical kickoff.',
        },
        {
          q: 'Do you use WordPress or modern frameworks like Next.js?',
          a: 'Both. We build with WordPress when clients require a traditional CMS for internal editing. For projects demanding sub-second speed, custom interactivity, and scalable architecture, we build with React, Next.js, and Node.js.',
        },
        {
          q: 'How does the workflow operate once we kick off?',
          a: 'After agreement, we conduct technical discovery, present visual prototypes, iterate together, build, and deploy. Post-launch, we provide complimentary support to guarantee complete stability.',
        },
      ],
    },
    blog: {
      tag: 'ARTICLES',
      title: 'Design & engineering',
      titleHighlight: 'ENGINEERING',
      subtitle: 'In-depth articles, architectural guides, and thoughts on high-performance software, UI design, and conversion optimization.',
      buttonText: 'View all',
      searchPlaceholder: 'Search articles...',
      noResults: 'No articles found matching your query.',
      posts: [
        {
          date: 'August 12, 2026',
          title: 'How to plan your first professional website: The beginner’s guide',
          excerpt: 'From core objectives to key content. What you actually need to define before launching your business online.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        },
        {
          date: 'August 08, 2026',
          title: 'Landing Page or Full Website: Which one is right for you?',
          excerpt: 'A simple breakdown between a focused sales landing page and a full corporate multi-page website.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
        },
        {
          date: 'August 02, 2026',
          title: '3 essential elements every new website needs to build trust',
          excerpt: 'Clean design, fast mobile loading, and visible contact buttons. The fundamentals to start strong.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        },
      ],
    },
    contactPage: {
      tag: 'Contact',
      title: 'Let’s start your project',
      subtitle: 'Fill out the form below or send a direct message to turn your idea into a high-impact digital product.',
      formTab: 'Form',
      whatsappTab: 'WhatsApp',
      response24h: 'Reply within 24 hours',
      response5min: 'Reply within 5 minutes',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. John Doe',
      emailLabel: 'Your Email',
      emailPlaceholder: 'e.g. contact@weblunar.com.br',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. New Web Application Development',
      typeLabel: 'Project Type',
      projectTypes: ['Landing Page', 'Corporate Website', 'E-commerce', 'Web System', 'Mobile App', 'Other'],
      budgetLabel: 'Estimated Investment',
      budgetRanges: ['Up to $1.5k', '$1.5k - $3k', '$3k - $6k', '$10k+'],
      timelineLabel: 'Estimated Timeline',
      timelineRanges: ['1 to 2 weeks', 'Up to 1 month', '1 to 3 months', 'Flexible'],
      refLabel: 'Reference Link / Wireframe (Figma, Drive, etc.)',
      refPlaceholder: 'e.g. https://figma.com/... or Google Drive link',
      descLabel: 'Project Description & Details',
      descPlaceholder: 'Tell us about your requirements, project scope, and goals...',
      submitButton: 'Send Request',
      processing: 'Processing...',
      successTitle: 'Transmission Received!',
      successDesc: 'Thank you for contacting us. We will review your project requirements and get back to you with a proposal promptly.',
      sendAnother: 'Send Another Request',
      whatsappTitle: 'Chat on WhatsApp',
      whatsappSubtitle: 'Prefer instant communication? Speak directly with our lead engineers and designers to discuss your project scope in real time.',
      whatsappBenefits: [
        'Fast response within 5 minutes',
        'Direct technical consultation (no bots)',
        'Instant scope definition and timeline estimates',
      ],
      chatWhatsAppButton: 'Chat on WhatsApp',
    },
    projectsPage: {
      tag: 'Our Portfolio',
      title: 'Project Gallery',
      subtitle: 'Case studies, SaaS platforms, and custom digital solutions engineered with the highest technical and visual standards.',
      scanning: 'Scanning portfolio...',
    },
    sobrePage: {
      badge: 'Operations & Engineering Guidelines',
      title: 'The Hidden Infrastructure Behind',
      titleHighlight: 'High-End Interfaces',
      subtitle: 'We do not build static web pages. We engineer robust digital ecosystems mathematically designed to handle heavy traffic spikes, protect profit margins, and scale without technical debt.',
      manifestoTag: 'The Corporate Manifesto',
      manifestoP1: 'At WEB LUNAR we merge minimalist design with elite software engineering. We build fast, modular systems shielded against traffic surges, ready to ',
      manifestoHighlight: 'convert visits into predictable revenue.',
      manifestoP2: 'In high-stakes markets, technological infrastructure separates scalable growth from collapse. Under severe traffic spikes, generic templates fail. At this level, latency milliseconds destroy conversions and waste ad budgets.',
      ctaButton: 'Request a Quote',
      sysMonitor: 'SYS MONITOR',
      latency: 'LATENCY',
      uptime: 'UPTIME',
      ttfb: 'TTFB',
      errors: 'ERRORS',
      throughput: 'THROUGHPUT',
      pillarsTag: 'Web Lunar Architecture',
      pillarsTitle: 'The Four Pillars',
      pillarsSubtitle: 'Core engineering principles that guide every single line of code we deliver.',
      pillars: [
        {
          tag: 'Architecture',
          num: '01',
          title: 'Decoupled Full-Stack Engineering',
          desc: 'We decouple user interfaces (Front-End) from backend computing. Interfaces execute globally at edge speed while sensitive databases remain isolated and secure.',
        },
        {
          tag: 'Performance',
          num: '02',
          title: 'Sub-Second Speeds (Zero Latency)',
          desc: 'Every script, image, and database query undergoes strict optimization. We use React Server Components to ensure initial rendering takes milliseconds.',
        },
        {
          tag: 'Engineering',
          num: '03',
          title: 'Type-Safe End-to-End & Scalability',
          desc: '100% typed code from database to browser eliminating runtime defects and providing a rock-solid foundation to plug in new modules.',
        },
        {
          tag: 'Quality',
          num: '04',
          title: 'CTO Audit-Ready Codebases',
          desc: 'Clean architecture with zero black boxes or spaghetti code. Fully documented, modular, and ready for strict institutional code audits.',
        },
      ],
      detailTag: 'Detailed Engineering',
      detailTitle: 'Blazing Speed. Impenetrable Security.',
      detailSubtitle: 'Polished design is useless if it buckles under technical load. Our development focuses on complete immunity against latency spikes and data leaks.',
      detailCards: [
        {
          title: 'Advanced Analytics & Private Telemetry',
          desc: 'Implementation of high-speed tracking pipelines that bypass ad-blockers without hurting Core Web Vitals.',
        },
        {
          title: 'Behavioral Data Ecosystems',
          desc: 'Deep integration with heatmaps, session recordings, and event pipelines without dragging heavy third-party scripts.',
        },
        {
          title: 'Data Security & Strict Compliance',
          desc: 'Hardened web applications following the highest cybersecurity standards, form sanitization, and protected API endpoints.',
        },
      ],
      coreStackTag: 'Core Stack',
      coreStackTitle: 'Technical Authority Showcase',
      coreStackSubtitle: 'For agencies and technology leaders who inspect our architecture, we operate strictly on the frontier of global software engineering:',
      hireTag: 'Engagement',
      hireTitle: 'Collaboration Models',
      hireSubtitle: 'We do not operate with informal freelancer workflows. WEB LUNAR establishes structured corporate partnerships to support your business expansion:',
      hireModels: [
        {
          title: 'Fixed-Scope Product Engineering',
          desc: 'End-to-end technical execution from architecture design to final deployment in high-performance cloud environments.',
        },
        {
          title: 'Dedicated Senior Engineering Capacity',
          desc: 'Continuous senior development bandwidth for design agencies and high-growth startups facing tight product launches.',
        },
        {
          title: 'Evolution Retainers & SLA Contracts',
          desc: 'Monthly service level agreements focused on active infrastructure monitoring, conversion rate optimization, and technical enhancements.',
        },
      ],
    },
    footer: {
      tagline: 'Creating memorable, high-performance digital experiences.',
      contactTitle: 'Get in Touch',
      allRightsReserved: 'All rights reserved.',
      privacy: 'PRIVACY',
      terms: 'TERMS',
    },
  },
  es: {
    nav: {
      inicio: 'Inicio',
      sobre: 'Nosotros',
      servicos: 'Servicios',
      projetos: 'Proyectos',
      blog: 'Blog',
      contato: 'Contacto',
      localizacao: 'Ubicación',
      idioma: 'Idioma',
      atendimento: 'Global · Atención Remota',
    },
    hero: {
      title1: 'Diseño &',
      title2: 'Código',
      subtitle: 'DESARROLLO FULL STACK & WEB DESIGN',
      bottomText: 'Unimos diseño visual refinado e ingeniería de software de alto rendimiento para crear productos digitales que generan resultados reales.',
      ctaButton: 'Solicitar Presupuesto',
      projectsButton: 'Ver Proyectos',
      locationLine: 'CON BASE EN BRASIL / ATENDIENDO GLOBALMENTE',
    },
    about: {
      tag: 'Nosotros',
      title: 'Desarrollamos sitios web y sistemas que combinan diseño moderno, estrategia de conversión y tecnología sólida — transformando ideas en soluciones digitales que funcionan.',
      period: '2021–Presente',
    },
    services: {
      tag: 'LO QUE HACEMOS',
      title: 'LANDING PAGES · SITIOS WEB · E-COMMERCE · RESERVAS · INTEGRACIONES · RENDIMIENTO',
      subtitle: 'Sitios web y sistemas diseñados para generar resultados medibles. Desde el código hasta el despliegue, cada decisión técnica maximiza el rendimiento y la conversión.',
      whatWeBuildTitle: 'Lo que desarrollamos',
      whatWeBuildSubtitle: 'Seis especialidades técnicas construidas para empresas que se toman los resultados en serio.',
      technicalHighlights: 'Aspectos Técnicos',
      backCard: 'Volver ↺',
      estimatedTime: 'Plazo estimado',
      requestQuote: 'Solicitar presupuesto',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'Páginas de alta conversión diseñadas para captar clientes potenciales o ventas directas con diseño persuasivo.',
          tagline: 'Convierte visitantes en clientes en cuestión de segundos.',
          fullDesc: 'Páginas de alto rendimiento diseñadas para una sola misión: convertir. Combinamos redacción persuasiva, jerarquía visual calculada y pruebas A/B continuas para que cada elemento trabaje activamente a favor de tu tasa de conversión.',
          highlights: [
            'Diseño enfocado a la conversión',
            'Pruebas A/B estructuradas',
            'Integración con píxeles y CRM',
            'Enfoque móvil obligatorio',
            'Carga en menos de un segundo',
          ],
          deliverables: ['Prototipo interactivo', 'Despliegue en producción', 'Configuración de analítica', 'Auditoría técnica'],
          timeRange: '7–14 días',
        },
        sitesApps: {
          title: 'Sitios & Apps',
          desc: 'Presencia digital completa en React, Next.js o WordPress enfocada en usabilidad e identidad visual refinada.',
          tagline: 'Una presencia digital que refleja el verdadero nivel de tu marca.',
          fullDesc: 'Desarrollamos sitios corporativos y aplicaciones web completas en React y Next.js, enfocándonos en una identidad visual sólida, experiencia de usuario impecable y escalabilidad técnica. Control absoluto del código.',
          highlights: [
            'Next.js App Router',
            'React Server Components',
            'Design System personalizado',
            'CMS headless opcional',
            'SEO técnico avanzado',
          ],
          deliverables: ['Diseño UI/UX completo', 'Código fuente', 'Documentación técnica', 'Despliegue + CDN'],
          timeRange: '21–45 días',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Plataformas de venta sólidas con integración de pagos, carrito inteligente y gestión sencilla.',
          tagline: 'Plataformas de venta diseñadas para escalar con tu negocio.',
          fullDesc: 'Tiendas online robustas con checkout optimizado, integración nativa de pagos, control de stock y carrito inteligente con recuperación de carritos abandonados. Diseñadas para maximizar el valor medio de pedido y reducir la fricción.',
          highlights: [
            'Checkout de alta conversión',
            'Pasarelas de pago integradas',
            'Recuperación de carritos',
            'Panel de administración intuitivo',
            'Analítica de ventas avanzada',
          ],
          deliverables: ['Tienda completa', 'Panel de administración', 'Pasarelas de pago', 'Capacitación del equipo'],
          timeRange: '30–60 días',
        },
        agendamento: {
          title: 'Sistemas de Reservas',
          desc: 'Sistemas de citas personalizados con calendarios automáticos e integraciones inteligentes.',
          tagline: 'Transforma tus citas en ingresos recurrentes y automáticos.',
          fullDesc: 'Sistemas de reservas a medida para clínicas, centros de entrenamiento, consultoras y servicios. Calendarios en tiempo real, confirmaciones automáticas por WhatsApp o Email y un panel centralizado que elimina la gestión manual.',
          highlights: [
            'Calendario en tiempo real',
            'Alertas WhatsApp y Email',
            'Pagos anticipados opcionales',
            'Reglas automáticas de cancelación',
            'Panel de métricas',
          ],
          deliverables: ['Motor de reservas completo', 'Integración WhatsApp', 'Panel de control', 'Guía de uso'],
          timeRange: '14–30 días',
        },
        integracoes: {
          title: 'Integraciones & APIs',
          desc: 'Conexión con CRMs, email marketing, píxeles publicitarios y APIs para flujos 100% automáticos.',
          tagline: 'Conecta todo tu ecosistema digital en un solo flujo automático.',
          fullDesc: 'Conectamos CRMs, herramientas de email marketing, píxeles publicitarios, ERPs y APIs externas en flujos automatizados que eliminan tareas manuales y unifican datos. Construido mediante webhooks y APIs REST.',
          highlights: [
            'CRM: HubSpot, RD Station',
            'Email: ActiveCampaign, Klaviyo',
            'Píxeles: Meta, Google, TikTok',
            'Webhooks personalizados',
            'Automatización vía APIs REST',
          ],
          deliverables: ['Mapeo de datos', 'Conectores activos', 'Registros de auditoría', 'Documentación API'],
          timeRange: '7–21 días',
        },
        performance: {
          title: 'Rendimiento & SEO',
          desc: 'SEO técnico, Core Web Vitals, optimización móvil y analítica avanzada para maximizar resultados.',
          tagline: 'Velocidad y visibilidad que generan tráfico predecible.',
          fullDesc: 'Auditoría y optimización técnica centrada en Core Web Vitals, arquitectura semántica, velocidad de carga y posicionamiento de palabras clave. Eliminamos sistemáticamente los cuellos de botella.',
          highlights: [
            'Auditoría Core Web Vitals',
            'SEO técnico avanzado',
            'Optimización de imágenes y fuentes',
            'Estructura Schema markup',
            'Analítica y monitorización',
          ],
          deliverables: ['Informe de diagnóstico', 'Código optimizado', 'Puntuación 90+ PageSpeed', 'Métricas de evolución'],
          timeRange: '5–14 días',
        },
      },
      differentialsTag: 'Por qué Web Lunar',
      differentialsTitle: 'Diferenciales técnicos',
      differentialsSubtitle: 'Lo que nos diferencia de agencias y freelancers convencionales.',
      differentials: [
        {
          num: '01',
          title: 'Código de producción, cero plantillas',
          desc: 'Ningún proyecto utiliza constructores visuales genéricos. Cada línea de código está escrita a medida, garantizando el máximo rendimiento y control total.',
        },
        {
          num: '02',
          title: 'Arquitectura escalable desde el primer día',
          desc: 'Diseñamos sistemas preparados para soportar alto crecimiento. Estructuras desacopladas, tipado estricto e infraestructura documentada.',
        },
        {
          num: '03',
          title: 'Enfoque en resultados medibles',
          desc: 'No solo entregamos sitios atractivos. Cada proyecto tiene métricas definidas para evaluar el impacto real en el negocio.',
        },
        {
          num: '04',
          title: 'Plazos rigurosamente cumplidos',
          desc: 'Trabajamos con alcance cerrado y cronogramas realistas. Cada entrega pasa por control de calidad antes de publicarse.',
        },
      ],
    },
    techStack: {
      title: 'TECNOLOGÍAS QUE UTILIZAMOS',
    },
    impact: {
      tag: 'LO QUE HACEMOS',
      descriptionBold: 'Desarrollo full stack especializado en crear sitios web y sistemas que generan resultados reales: más clientes potenciales, ventas y reservas. Combinamos tecnología moderna y diseño estratégico',
      descriptionFade: ' para transformar ideas en soluciones digitales rápidas, funcionales y optimizadas — desde el wireframe hasta el despliegue.',
      stats: {
        projects: 'Proyectos entregados',
        clients: 'Clientes atendidos',
        years: 'Años de experiencia',
        satisfaction: 'Tasa de satisfacción',
      },
    },
    portfolio: {
      tag: 'Nuestro Trabajo',
      title: 'Proyectos Destacados',
      viewAll: 'Ver todos',
      categories: {
        todos: 'Todos',
        experienciaWeb: 'Experiencia Web',
        siteInstitucional: 'Sitio Institucional',
        landingPage: 'Landing Page',
        interfacesSaas: 'Interfaces SaaS',
        identidadeVisual: 'Identidad Visual',
        ecommerce: 'E-commerce',
      },
      verCase: 'Ver Caso',
      ctaProcessText: '¿Quieres ver la estrategia detrás de cada proyecto? Cada caso de estudio incluye wireframes, alcance técnico y métricas reales.',
      ctaButtonText: 'Iniciar un Proyecto',
      liveProject: 'Proyecto Online',
      sourceCode: 'Código Fuente',
      scanning: 'Escaneando portafolio...',
      projects: [
        {
          id: 'snews',
          title: 'SNEWS',
          category: 'Sitio Institucional',
          categoryKey: 'siteInstitucional',
          description: 'Sitio institucional internacionalizado y de alto rendimiento para el líder en soluciones tecnológicas de broadcast en América Latina.',
          image: '/printsnews.webp',
          liveUrl: 'https://snews.tv',
          tags: ['Next.js App Router', 'TypeScript', 'next-intl (i18n)'],
        },
        {
          id: 'volk',
          title: 'VOLK Presenter',
          category: 'Experiencia Web',
          categoryKey: 'experienciaWeb',
          description: 'Experiencia web inmersiva a 60 FPS con animaciones fluidas para la plataforma de gráficos en tiempo real.',
          image: '/printvolk.webp',
          liveUrl: 'https://volkpresenter.tv/pt',
          tags: ['Next.js 15', 'GSAP', 'Framer Motion'],
        },
        {
          id: 'capi',
          title: 'CAPI Digital',
          category: 'Experiencia Web',
          categoryKey: 'experienciaWeb',
          description: 'Landing page y plataforma de presentación para el ecosistema editorial asistido por inteligencia artificial.',
          image: '/printcapi.webp',
          liveUrl: 'https://capi.digital/pt',
          tags: ['Next.js', 'AI Integration', 'Tailwind CSS'],
        },
        {
          id: 'adansonea',
          title: 'Adansonea',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Landing page y presencia corporativa para consultoría boutique internacional de liderazgo y gestión de personas.',
          image: '/printadansonea.webp',
          liveUrl: 'https://www.adansonea.com/',
          tags: ['WordPress', 'Elementor Pro', 'WPO Optimizado'],
        },
        {
          id: 'acp',
          title: 'ACP Tax Advisory',
          category: 'Sitio Institucional',
          categoryKey: 'siteInstitucional',
          description: 'Sitio web institucional de alta conversión para firma estadounidense de asesoría y planificación tributaria.',
          image: '/printacp.webp',
          liveUrl: 'https://acptaxadvisory.com/',
          tags: ['WordPress', 'Elementor Pro', 'AIOSEO'],
        },
        {
          id: 'osa',
          title: 'ÔSA Branding Studio',
          category: 'Landing Page',
          categoryKey: 'landingPage',
          description: 'Landing page conceptual y presencia autoral para estudio europeo especializado en branding y diseño visual.',
          image: '/printosa.webp',
          liveUrl: 'https://osabrandingstudio.com/homenew/',
          tags: ['WordPress', 'Elementor Pro', 'Yoast SEO'],
        },
      ],
    },
    testimonials: {
      tag: 'Testimonios',
      title: 'LO QUE DICEN SOBRE NOSOTROS',
      titleHighlight: 'NOSOTROS',
      items: [
        {
          badge: 'DESARROLLO WEB',
          text: 'Web Lunar fue responsable del desarrollo front-end de un sitio que hicimos juntos. Implementaron el diseño con absoluta fidelidad, ajustaron los detalles rápidamente y el resultado fue impecable. Muy fácil trabajar con ellos y cumplieron los plazos estrictamente.',
          role: 'Front End UI / UX Developer',
        },
        {
          badge: 'INTEGRACIÓN DE SISTEMAS',
          text: 'Contratamos a Web Lunar para integrar una pasarela de pagos en nuestro sistema. El equipo entregó todo funcionando a la perfección. Respondieron dudas rápido, probaron bien y dejaron la documentación organizada. Trabajo sólido sin dolores de cabeza.',
          role: 'Tech Lead / Director de Proyecto',
        },
        {
          badge: 'ALIANZA ESTRATÉGICA',
          text: 'He seguido a Web Lunar desde sus inicios y su capacidad para resolver desafíos técnicos complejos siempre ha sido sobresaliente. Es un equipo sumamente dedicado, proactivo y rápido en las entregas.',
          role: 'Director de Marketing y Contenidos',
        },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Preguntas frecuentes',
      questions: [
        {
          q: '¿Web Lunar trabaja con clientes de otros países o ciudades?',
          a: '¡Sí! Atendemos clientes en toda América Latina, Europa y Estados Unidos. Todo el proceso es remoto: reuniones por videollamada, revisiones en Figma/GitHub y comunicación ágil por WhatsApp o Slack.',
        },
        {
          q: '¿Con qué tipo de clientes suelen trabajar?',
          a: 'Trabajamos con emprendedores, startups y empresas consolidadas que necesitan presencia digital estratégica. Si buscas una plataforma que convierta y funcione a alta velocidad, somos el socio ideal.',
        },
        {
          q: '¿Cuál es el tiempo promedio de entrega de un proyecto?',
          a: 'Depende del alcance: las landing pages están listas en 7–14 días, sitios corporativos en 3–5 semanas, y tiendas e-commerce o sistemas en 4–8 semanas. El cronograma exacto se define en el kickoff inicial.',
        },
        {
          q: '¿Utilizan WordPress o tecnologías modernas como Next.js?',
          a: 'Ambos. Desarrollamos con WordPress para proyectos que requieren un gestor de contenidos tradicional. Para proyectos que exigen máxima velocidad, escalabilidad y animaciones fluidas, construimos con React, Next.js y Node.js.',
        },
        {
          q: '¿Cómo es el proceso una vez que cerramos el proyecto?',
          a: 'Tras la contratación, realizamos el relevamiento técnico, presentamos la propuesta visual, iteramos juntos y entregamos el despliegue final con soporte posventa para garantizar estabilidad.',
        },
      ],
    },
    blog: {
      tag: 'ARTÍCULOS',
      title: 'Diseño & ingeniería',
      titleHighlight: 'INGENIERÍA',
      subtitle: 'Artículos, guías técnicas y reflexiones sobre software de alto rendimiento, diseño de interfaces y estrategias de conversión.',
      buttonText: 'Ver todos',
      searchPlaceholder: 'Buscar artículos...',
      noResults: 'No se encontraron artículos para tu búsqueda.',
      posts: [
        {
          date: '12 de Agosto, 2026',
          title: 'Cómo planificar tu primer sitio web profesional: Guía básica',
          excerpt: 'Del objetivo principal al contenido clave. Lo que necesitas definir antes de lanzar tu negocio en internet.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        },
        {
          date: '08 de Agosto, 2026',
          title: '¿Landing Page o Sitio Web Completo? Cuál elegir',
          excerpt: 'Conoce la diferencia fundamental entre una página enfocada en ventas y un sitio institucional con varias páginas.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
        },
        {
          date: '02 de Agosto, 2026',
          title: '3 elementos clave que todo sitio web nuevo necesita para generar confianza',
          excerpt: 'Diseño ordenado, carga rápida en móviles y botón de WhatsApp visible. Lo básico para empezar con éxito.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        },
      ],
    },
    contactPage: {
      tag: 'Contacto',
      title: 'Comencemos tu proyecto',
      subtitle: 'Completa el formulario a continuación o envía un mensaje directo para transformar tu idea en un producto digital de alto impacto.',
      formTab: 'Formulario',
      whatsappTab: 'WhatsApp',
      response24h: 'Respuesta en menos de 24 horas',
      response5min: 'Respuesta en menos de 5 minutos',
      nameLabel: 'Tu Nombre',
      namePlaceholder: 'Ej: Carlos Mendoza',
      emailLabel: 'Tu Correo',
      emailPlaceholder: 'Ej: contacto@weblunar.com.br',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Ej: Desarrollo de nuevo sistema web',
      typeLabel: 'Tipo de Proyecto',
      projectTypes: ['Landing Page', 'Sitio Institucional', 'E-commerce', 'Sistema Web', 'App Móvil', 'Otro'],
      budgetLabel: 'Presupuesto Estimado',
      budgetRanges: ['Hasta $1.5k', '$1.5k - $3k', '$3k - $6k', '$10k+'],
      timelineLabel: 'Plazo Estimado',
      timelineRanges: ['1 a 2 semanas', 'Hasta 1 mes', '1 a 3 meses', 'Flexible'],
      refLabel: 'Enlace de Referencia / Wireframe (Figma, Drive, etc.)',
      refPlaceholder: 'Ej: https://figma.com/... o enlace de Google Drive',
      descLabel: 'Descripción del Proyecto / Detalles',
      descPlaceholder: 'Cuéntanos sobre tus requerimientos, alcance y objetivos...',
      submitButton: 'Enviar Mensaje',
      processing: 'Procesando...',
      successTitle: '¡Transmisión Recibida!',
      successDesc: 'Gracias por ponerte en contacto. Analizaremos los requerimientos de tu proyecto y nos comunicaremos con una propuesta a la brevedad.',
      sendAnother: 'Enviar Otra Solicitud',
      whatsappTitle: 'Chatea por WhatsApp',
      whatsappSubtitle: '¿Prefieres atención inmediata? Habla directamente con nuestros ingenieros y diseñadores para definir el alcance de tu proyecto en tiempo real.',
      whatsappBenefits: [
        'Respuesta rápida en menos de 5 minutos',
        'Atención técnica directa (sin bots)',
        'Definición de alcance y plazos al instante',
      ],
      chatWhatsAppButton: 'Conversar por WhatsApp',
    },
    projectsPage: {
      tag: 'Nuestro Portafolio',
      title: 'Galería de Proyectos',
      subtitle: 'Casos de estudio, plataformas SaaS y soluciones digitales a medida, desarrolladas con los más altos estándares técnicos y visuales.',
      scanning: 'Escaneando portafolio...',
    },
    sobrePage: {
      badge: 'Operaciones y Directrices de Ingeniería',
      title: 'La Infraestructura Oculta Detrás de Interfaces',
      titleHighlight: 'De Alto Nivel',
      subtitle: 'No construimos páginas estáticas. Desarrollamos ecosistemas digitales robustos, diseñados matemáticamente para soportar alto tráfico, proteger márgenes y escalar sin deuda técnica.',
      manifestoTag: 'El Manifiesto Corporativo',
      manifestoP1: 'En WEB LUNAR unimos diseño minimalista e ingeniería de software de élite. Desarrollamos sistemas rápidos, modulares y blindados contra picos de tráfico, listos para ',
      manifestoHighlight: 'convertir visitas en facturación predecible.',
      manifestoP2: 'En mercados de alta competencia, la infraestructura tecnológica divide la escala del colapso. Bajo picos severos de tráfico, las plantillas genéricas fallan. En este nivel, milisegundos de latencia destruyen conversiones.',
      ctaButton: 'Solicitar Presupuesto',
      sysMonitor: 'SYS MONITOR',
      latency: 'LATENCY',
      uptime: 'UPTIME',
      ttfb: 'TTFB',
      errors: 'ERRORS',
      throughput: 'THROUGHPUT',
      pillarsTag: 'Arquitectura Web Lunar',
      pillarsTitle: 'Los Cuatro Pilares',
      pillarsSubtitle: 'Principios de ingeniería que rigen cada línea de código que entregamos.',
      pillars: [
        {
          tag: 'Architecture',
          num: '01',
          title: 'Ingeniería Full-Stack Desacoplada',
          desc: 'Separamos la interfaz visual (Front-End) del procesamiento (Back-End). La interfaz corre globalmente en redes ultrarrápidas y los datos sensibles se mantienen aislados y seguros.',
        },
        {
          tag: 'Performance',
          num: '02',
          title: 'Rendimiento Sub-Segundo (Cero Latencia)',
          desc: 'Cada script, imagen y consulta a la base de datos se optimiza estrictamente. Usamos React Server Components para que el render inicial ocurra en milisegundos.',
        },
        {
          tag: 'Engineering',
          num: '03',
          title: 'Tipado Seguro End-to-End & Escalabilidad',
          desc: 'Código 100% tipado de extremo a extremo que elimina fallos en tiempo de ejecución y permite acoplar nuevos módulos con total estabilidad.',
        },
        {
          tag: 'Quality',
          num: '04',
          title: 'Código Listo para Auditorías de CTOs',
          desc: 'Arquitectura limpia, sin cajas negras ni código confuso. Entregamos infraestructura documentada y lista para auditorías institucionales.',
        },
      ],
      detailTag: 'Ingeniería de Detalle',
      detailTitle: 'Velocidad Brutal. Seguridad Inviolable.',
      detailSubtitle: 'Las interfaces atractivas no sirven de nada si fallan bajo estrés técnico. Nuestro desarrollo garantiza inmunidad contra cuellos de botella y fugas de datos.',
      detailCards: [
        {
          title: 'Analítica Avanzada & Telemetría Privada',
          desc: 'Implementación de rastreadores optimizados que eluden bloqueadores de anuncios sin comprometer la velocidad de carga.',
        },
        {
          title: 'Ecosistemas de Datos de Comportamiento',
          desc: 'Integración profunda con mapas de calor y grabación de sesiones sin sobrecargar el sitio con scripts pesados de terceros.',
        },
        {
          title: 'Seguridad de Datos y Cumplimiento Normativo',
          desc: 'Estructuras desarrolladas con las mejores prácticas de ciberseguridad, validación estricta de formularios y APIs protegidas.',
        },
      ],
      coreStackTag: 'Core Stack',
      coreStackTitle: 'Mural de Autoridad Técnica',
      coreStackSubtitle: 'Para agencias y líderes tecnológicos que inspeccionan nuestra infraestructura, operamos en la vanguardia del software global:',
      hireTag: 'Contratación',
      hireTitle: 'Modelos de Colaboración',
      hireSubtitle: 'No operamos con el formato informal del mercado tradicional de freelancers. WEB LUNAR establece alianzas corporativas estructuradas:',
      hireModels: [
        {
          title: 'Desarrollo de Alcance Cerrado',
          desc: 'Ingeniería de extremo a extremo, desde el diseño de la arquitectura técnica hasta el despliegue final en producción.',
        },
        {
          title: 'Outsourcing y Capacidad Senior Dedicada',
          desc: 'Asignación continua de capacidad técnica senior para agencias de diseño y startups con lanzamientos de alta demanda.',
        },
        {
          title: 'Contratos de Evolución y SLA',
          desc: 'Acuerdos de nivel de servicio mensuales centrados en monitorización activa, optimización de conversión y mejoras de infraestructura.',
        },
      ],
    },
    footer: {
      tagline: 'Creando experiencias digitales memorables y de alto rendimiento.',
      contactTitle: 'Contáctanos',
      allRightsReserved: 'Todos los derechos reservados.',
      privacy: 'PRIVACIDAD',
      terms: 'TÉRMINOS',
    },
  },
};
