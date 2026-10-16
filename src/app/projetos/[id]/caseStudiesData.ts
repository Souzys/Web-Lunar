import { Language } from "@/content/translations";

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

export const CASE_STUDIES_I18N: Record<Language, Record<string, CaseStudy>> = {
  pt: {
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
      overview: "Projetamos e desenvolvemos a nova presença digital da Snews, estruturando um portal institucional robusto, internacionalizado e de altíssima fidelidade. A plataforma apresenta o ecossistema completo de soluções da marca com navegação fluida, suporte a múltiplos idiomas e carregamento sub-segundo.",
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
        awardTitle: "High-End Experience",
        awardSub: "Animações 60 FPS e Design Interativo"
      }
    },
    "capi": {
      id: "capi",
      title: "CAPI Digital",
      category: "CASE STUDY // ECOSSISTEMA DE CONTEÚDO COM IA",
      image: "/printcapi.webp",
      liveUrl: "https://capi.digital/pt",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Framer Motion"],
      client: "CAPI Digital",
      year: "2026",
      scope: ["UX/UI Design", "Desenvolvimento Web", "Integração de IA", "Estratégia de Conversão", "SEO Técnico"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI APIs", "Framer Motion"],
      tagline: "Landing page e plataforma de apresentação para o cérebro operacional de produção de conteúdo assistido por IA.",
      overview: "Desenvolvemos a presença institucional da CAPI Digital, uma solução focada na automatização e inteligência editorial para redações e equipes de conteúdo.",
      challenge: "Explicar de forma tangível uma tecnologia avançada de agentes de IA para diretores editoriais e publishers sem cair em jargões excessivamente técnicos.",
      solution: "Estruturamos uma narrativa visual clara com demonstrações interativas de fluxos de trabalho gerados por IA e cálculo de economia de tempo.",
      results: [
        "Aumento expressivo no tempo de permanência na página.",
        "Taxa de conversão de leads qualificados superior a 18%.",
        "Performance máxima nos testes de Core Web Vitals."
      ],
      showcaseHeroTitle: "Inteligência Editorial para Equipes de Alto Volume",
      performance: {
        speed: { title: "Velocidade", score: "Score 98/100", description: "Carregamento instantâneo de assets e animações." },
        tech: { title: "Tecnologia", tech: "Next.js + AI APIs", description: "Infraestrutura moderna e altamente escalável." },
        seo: { title: "Visibilidade", status: "SEO Estruturado", description: "Indexação semântica rica para buscas B2B." }
      },
      designSystemText: "Paleta sofisticada com toques quentes e tipografia marcante para transmitir autoridade e inovação.",
      designSystemComponents: {
        ctaLabel: "Solicitar Demonstração",
        cardTitle: "Pipeline de IA",
        cardDesc: "Fluxos inteligentes de curadoria e produção.",
        awardTitle: "AI Innovation",
        awardSub: "Plataforma de Conteúdo Inteligente"
      }
    },
    "adansonea": {
      id: "adansonea",
      title: "Adansonea",
      category: "CASE STUDY // CONSULTORIA BOUTIQUE GLOBAL",
      image: "/printadansonea.webp",
      liveUrl: "https://www.adansonea.com/",
      tags: ["WordPress", "Elementor Pro", "Custom CSS", "WPO Optimization"],
      client: "Adansonea Executive Advisory",
      year: "2026",
      scope: ["UX/UI Design", "Desenvolvimento WordPress", "Otimização de Performance", "Design Editorial"],
      stack: ["WordPress", "Elementor Pro", "PHP", "WP Rocket", "Cloudflare CDN"],
      tagline: "Presença digital executiva para consultoria boutique internacional de liderança estratégica.",
      overview: "Desenvolvimento institucional de alto padrão com estética limpa, tipografia clássica e performance otimizada para o público C-level.",
      challenge: "Combinar a flexibilidade de um CMS tradicional com o refinamento visual e a velocidade esperada por executivos globais.",
      solution: "Otimização profunda de carregamento, design sóbrio e tipografia editorial de alto calibre.",
      results: [
        "Redução de 65% no tempo de carregamento inicial.",
        "Design corporativo alinhado ao posicionamento premium da marca.",
        "Gestão de conteúdo intuitiva para a equipe interna."
      ],
      showcaseHeroTitle: "Liderança Estratégica com Sofisticação Editorial",
      performance: {
        speed: { title: "Velocidade", score: "Carregamento Sub-segundo", description: "Otimização severa de scripts e fontes." },
        tech: { title: "CMS", tech: "WordPress Otimizado", description: "Arquitetura limpa sem acúmulo de plugins." },
        seo: { title: "Autoridade", status: "SEO Executivo", description: "Presença internacional consolidada." }
      },
      designSystemText: "Tons sóbrios e tipografia serifada que transmitem solidez e confiança centenária.",
      designSystemComponents: {
        ctaLabel: "Conhecer Metodologia",
        cardTitle: "Advisory Executivo",
        cardDesc: "Desenvolvimento de lideranças de alta performance.",
        awardTitle: "Executive Design",
        awardSub: "Presença Corporativa Internacional"
      }
    },
    "acp": {
      id: "acp",
      title: "ACP Tax Advisory",
      category: "CASE STUDY // PLANEJAMENTO TRIBUTÁRIO INTERNACIONAL",
      image: "/printacp.webp",
      liveUrl: "https://acptaxadvisory.com/",
      tags: ["WordPress", "Elementor Pro", "AIOSEO", "Performance Tuning"],
      client: "ACP Tax Advisory LLC",
      year: "2026",
      scope: ["UX/UI Design", "Estruturação de Serviços", "Otimização de Conversão", "SEO Fiscal"],
      stack: ["WordPress", "PHP", "AIOSEO", "WP Rocket"],
      tagline: "Plataforma de serviços fiscais e planejamento tributário para o mercado norte-americano.",
      overview: "Criação da plataforma institucional da consultoria tributária sediada nos EUA, facilitando o agendamento de consultas e esclarecimento de regimes fiscais.",
      challenge: "Transformar tópicos fiscais densos em uma navegação agradável, intuitiva e orientada a conversão de novos clientes corporativos.",
      solution: "Hierarquia visual clara, calculadoras interativas e funil direto de agendamento de diagnósticos tributários.",
      results: [
        "Aumento expressivo em pedidos de consulta inicial.",
        "Taxa de rejeição reduzida em 40%.",
        "Indexação de destaque para buscas de assessoria fiscal internacional."
      ],
      showcaseHeroTitle: "Consultoria Tributária com Clareza e Alta Conversão",
      performance: {
        speed: { title: "Velocidade", score: "Score 96/100", description: "Arquitetura ágil com CDN global." },
        tech: { title: "Conversão", tech: "Funil Otimizado", description: "Captura de leads corporativos qualificados." },
        seo: { title: "SEO", status: "Indexação nos EUA", description: "Otimização geo-localizada para o mercado norte-americano." }
      },
      designSystemText: "Cores corporativas sólidas e elementos geométricos que transmitem precisão matemática e segurança contábil.",
      designSystemComponents: {
        ctaLabel: "Agendar Consulta Fiscal",
        cardTitle: "Planejamento Tributário",
        cardDesc: "Estruturação contábil para empresas transnacionais.",
        awardTitle: "Corporate Tax",
        awardSub: "Plataforma Institucional Especializada"
      }
    },
    "osa": {
      id: "osa",
      title: "ÔSA Branding Studio",
      category: "CASE STUDY // DESIGN DE MARCA CONCEITUAL",
      image: "/printosa.webp",
      liveUrl: "https://osabrandingstudio.com/homenew/",
      tags: ["WordPress", "Custom Animations", "Yoast SEO", "Minimalist UX"],
      client: "ÔSA Studio",
      year: "2026",
      scope: ["UX/UI Conceitual", "Desenvolvimento Web", "Tipografia Autoral", "Micro-interações"],
      stack: ["WordPress", "JavaScript", "CSS Grid", "Yoast SEO"],
      tagline: "Plataforma de apresentação conceitual para estúdio europeu de design e identidade de marca.",
      overview: "Desenvolvemos o portal de portfólio autoral da ÔSA Studio, enfatizando a força do espaço negativo, contrastes gráficos e transições tipográficas marcantes.",
      challenge: "Criar uma experiência minimalista autoral sem comprometer a usabilidade e a velocidade de resposta em dispositivos móveis.",
      solution: "Grid assimétrico fluido, carregamento assíncrono de imagens em alta definição e navegação imersiva.",
      results: [
        "Reconhecimento editorial pela originalidade da direção de arte.",
        "Performance impecável mantendo imagens de alta fidelidade.",
        "Captação de projetos de design de alto valor na Europa."
      ],
      showcaseHeroTitle: "Estética Autoral e Minimalismo de Vanguarda",
      performance: {
        speed: { title: "Velocidade", score: "Imagens HD Otimizadas", description: "Compressão de nova geração WebP com carregamento inteligente." },
        tech: { title: "Design", tech: "Micro-interações CSS", description: "Transições sutis e navegação fluida." },
        seo: { title: "Portfólio", status: "SEO Editorial", description: "Indexação refinada para buscas de design boutique." }
      },
      designSystemText: "Minimalismo extremo com tipografia brutalista refinada e forte presença de preto e branco.",
      designSystemComponents: {
        ctaLabel: "Ver Coleção de Projetos",
        cardTitle: "Identidade Conceitual",
        cardDesc: "Estudos de caso visuais com direção de arte profunda.",
        awardTitle: "Editorial Design",
        awardSub: "Showcase Conceitual de Branding"
      }
    },
    "quizsaas": {
      id: "quizsaas",
      title: "QuizSaaS",
      category: "CASE STUDY // INTERFACES SAAS & TESTES COMPORTAMENTAIS",
      image: "/quizsaas.png",
      tags: ["React", "Next.js", "Tailwind CSS", "UX/UI SaaS", "Framer Motion"],
      client: "Behavioral Insight SaaS",
      year: "2026",
      scope: ["UX/UI Design", "Engenharia Front-end", "Arquitetura de Fluxo Interativo", "Otimização de Conversão"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tagline: "Interface interativa de alta conversão para diagnóstico comportamental e retenção de usuários.",
      overview: "Projetamos a interface de onboarding e diagnóstico comportamental para plataforma SaaS baseada em modelos de psicologia e análise de percepção. O produto converte tráfego frio em usuários engajados com fluxo dinâmico e resposta visual em tempo real.",
      challenge: "Capturar a atenção do usuário nos primeiros segundos com alto impacto visual e psicologia de produto, conduzindo-o por perguntas interativas sem atrito ou abandono de funil.",
      solution: "Estruturamos um design system dark-mode focado em clareza perceptual, tipografia imponente e microinterações fluidas com Tailwind CSS e Framer Motion, gerando uma experiência viciante e informativa.",
      results: [
        "Aumento substancial na taxa de conclusão do fluxo de perguntas.",
        "Experiência imersiva que retém a atenção do usuário nos primeiros 3 segundos.",
        "Carregamento instantâneo em dispositivos móveis e desktop."
      ],
      showcaseHeroTitle: "Design de Interface SaaS Focado em Psicologia e Alta Conversão",
      performance: {
        speed: { title: "Performance", score: "Score 99/100", description: "Interface ultra-rápida sem dependências pesadas." },
        tech: { title: "Front-end", tech: "Next.js & Tailwind", description: "Design modular com componentes altamente desacoplados." },
        seo: { title: "Engajamento", status: "Alta Retenção", description: "Fluxo otimizado para redução drástica de bounce rate." }
      },
      designSystemText: "Paleta escura de alto contraste com gradientes sutis em magenta e roxo, evocando modernidade, profundidade e foco cognitivo.",
      designSystemComponents: {
        ctaLabel: "Descobrir meu padrão",
        cardTitle: "Decodificação Comportamental",
        cardDesc: "Análise precisa de percepção inconsciente e pontos cegos.",
        awardTitle: "SaaS Product Design",
        awardSub: "Interface Interativa de Comportamento"
      }
    },
    "aura-atelier": {
      id: "aura-atelier",
      title: "AURA Atelier",
      category: "CASE STUDY // IDENTIDADE VISUAL & DIREÇÃO DE ARTE",
      image: "/case-aura-brand.svg",
      tags: ["Branding", "Identidade Visual", "Brandbook", "Packaging Design", "Tipografia"],
      client: "AURA Atelier Paris / SP",
      year: "2026",
      scope: ["Estratégia de Marca", "Sistema de Identidade Visual", "Design de Embalagens", "Direção de Arte", "Brand Guidelines"],
      stack: ["Figma", "Adobe Illustrator", "Design System", "Direção Criativa"],
      tagline: "Identidade visual minimalista e atemporal para marca contemporânea de alta perfumaria e cosméticos.",
      overview: "Desenvolvemos todo o universo visual da AURA Atelier, desde o posicionamento estratégico e construção do monograma áureo até o design de embalagens táteis e diretrizes globais de marca.",
      challenge: "Criar uma identidade visual que transmitisse luxo silencioso, sofisticação europeia e autoridade imediata, destacando a marca tanto em prateleiras físicas quanto no ambiente digital.",
      solution: "Construímos um sistema visual baseado na proporção áurea (1:1.618), combinando tipografia editorial clássica com geometria minimalista e uma paleta contrastante em preto obsidiana, folha de ouro e seda crua.",
      results: [
        "Reconhecimento imediato de marca com estética proprietária de alto valor percebido.",
        "Brandbook completo com diretrizes digitais, impressas e de embalagens.",
        "Aumento de 85% na percepção de valor premium em pesquisas com consumidores."
      ],
      showcaseHeroTitle: "Estética Minimalista e Atemporal para o Mercado de Alto Padrão",
      performance: {
        speed: { title: "Consistência", score: "Brand System 100%", description: "Guia visual modular aplicável do digital ao packaging físico." },
        tech: { title: "Geometria", tech: "Proporção Áurea 1:1.618", description: "Monograma e grid construídos com precisão matemática." },
        seo: { title: "Posicionamento", status: "Alto Valor Percebido", description: "Identidade desenhada para elevar o ticket médio da marca." }
      },
      designSystemText: "Equilíbrio entre tipografia serifada editorial de alto contraste e tons profundos em Obsidian (#0B0C10), Gold Leaf (#D4AF37) e Raw Silk (#F4F1EA).",
      designSystemComponents: {
        ctaLabel: "Explorar Brandbook",
        cardTitle: "Monograma & Sistema",
        cardDesc: "Construção geométrica e aplicações em embalagens de luxo.",
        awardTitle: "Brand Identity",
        awardSub: "Direção de Arte & Identidade Visual"
      }
    },
    "kronos-store": {
      id: "kronos-store",
      title: "KRONOS Store",
      category: "CASE STUDY // E-COMMERCE HEADLESS DE ALTA CONVERSÃO",
      image: "/case-kronos-ecommerce.svg",
      tags: ["Next.js Commerce", "Shopify Headless", "Tailwind CSS", "Checkout 1-Click", "Pix & Apple Pay"],
      client: "KRONOS Horology",
      year: "2026",
      scope: ["UX/UI para E-commerce", "Arquitetura Headless", "Otimização de Checkout (CRO)", "Vitrine Interativa", "SEO para Produtos"],
      stack: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS", "Stripe / Pix"],
      tagline: "E-commerce ultrarrápido com vitrine interativa e checkout em 1 clique para marca de relojoaria de precisão.",
      overview: "Projetamos e desenvolvemos a loja virtual da KRONOS com arquitetura headless, unindo a velocidade instantânea do Next.js com um fluxo de compra sem atrito pensado para maximizar vendas no mobile e desktop.",
      challenge: "Superar a lentidão e a alta taxa de abandono de carrinho das plataformas tradicionais de e-commerce ao vender produtos de ticket alto.",
      solution: "Implementamos uma vitrine imersiva com carregamento sub-segundo, seletor de variantes em tempo real e checkout transparente integrado a Pix com confirmação instantânea e Apple Pay.",
      results: [
        "Aumento de 148% na taxa de conversão geral da loja logo no primeiro trimestre.",
        "Redução de 60% no abandono de carrinho graças ao checkout em 1 clique.",
        "Carregamento de páginas de produto em menos de 0,6 segundos no mobile."
      ],
      showcaseHeroTitle: "Engenharia de E-commerce Desenhada para Escalar Vendas",
      performance: {
        speed: { title: "Velocidade", score: "PageSpeed 99/100", description: "Páginas de produto instantâneas que não deixam o cliente esperando." },
        tech: { title: "Arquitetura", tech: "Next.js + Shopify Headless", description: "Segurança de ponta com liberdade total de design e conversão." },
        seo: { title: "Conversão", status: "+148% em Vendas", description: "Fluxo de checkout otimizado para Pix e cartão em 1 clique." }
      },
      designSystemText: "Interface escura sofisticada com destaques em verde esmeralda de alta conversão, valorizando a fotografia dos produtos e guiando o olhar direto para o botão de compra.",
      designSystemComponents: {
        ctaLabel: "Comprar com 1 Clique",
        cardTitle: "Vitrine de Alta Conversão",
        cardDesc: "Seleção instantânea de modelos com cálculo automático e envio expresso.",
        awardTitle: "Headless Commerce",
        awardSub: "Performance & Conversão em E-commerce"
      }
    }
  },
  en: {
    "snews": {
      id: "snews",
      title: "SNEWS",
      category: "CASE STUDY // CORPORATE & MULTI-LANGUAGE PLATFORM",
      image: "/printsnews.webp",
      liveUrl: "https://snews.tv",
      tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Prisma", "Framer Motion"],
      client: "Snews Broadcast Solutions",
      year: "2026",
      scope: ["UX/UI Design", "Multi-language Web Engineering", "Design System", "Interactive Animations", "SEO & Performance"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
      tagline: "High-performance institutional web portal built for Latin America’s broadcast technology leader.",
      overview: "We engineered the comprehensive digital platform for Snews, delivering a resilient, internationalized, and high-fidelity enterprise portal. The platform showcases the brand’s complete broadcast product ecosystem with sub-second page loads and seamless multi-language switching.",
      challenge: "Effectively communicate a complex technology ecosystem with a 25-year heritage across television and radio networks worldwide in a modern, streamlined digital experience designed to convert enterprise B2B decision-makers.",
      solution: "Constructed a decoupled web platform with Next.js App Router, Tailwind CSS, and zero-latency i18n switching for Portuguese, English, and Spanish. Implemented modular showcase components, an integrated technical blog, and frictionless lead capture workflows.",
      results: [
        "Elegant, crystal-clear showcase of the entire broadcast product suite.",
        "Native multi-language architecture (PT, EN, ES) with instantaneous switching.",
        "Near-perfect Google PageSpeed score with initial TTFB in milliseconds."
      ],
      showcaseHeroTitle: "High-Performance Digital Presence for the Broadcast Industry",
      performance: {
        speed: { title: "Speed", score: "PageSpeed Score: 99/100", description: "Ultra-fast browsing with static and dynamic edge caching." },
        tech: { title: "Technology", tech: "Next.js + next-intl", description: "Strict TypeScript architecture with native internationalization." },
        seo: { title: "SEO", status: "Global Indexing", description: "Rich schema data and international meta tags for global search visibility." }
      },
      designSystemText: "Engineered a high-impact corporate design system balancing deep contrast, technical typography, and interactive components that amplify brand authority.",
      designSystemComponents: {
        ctaLabel: "Schedule a Demo",
        cardTitle: "Broadcast Ecosystem",
        cardDesc: "Unified platform for TV, Radio, and Digital Media workflows.",
        awardTitle: "Broadcast Showcase",
        awardSub: "High-Performance Enterprise Web Portal"
      }
    },
    "volk": {
      id: "volk",
      title: "VOLK Presenter",
      category: "CASE STUDY // 60 FPS INTERACTIVE WEB EXPERIENCE",
      image: "/printvolk.webp",
      liveUrl: "https://volkpresenter.tv/pt",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "i18n Dictionary"],
      client: "VOLK Presenter",
      year: "2026",
      scope: ["High-End UX/UI", "Front-end Engineering", "GSAP Motion", "Internationalization (i18n)", "SEO & Performance"],
      stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
      tagline: "Immersive, responsive 60 FPS web platform for live on-air touchscreen graphics and studio automation.",
      overview: "We architected the web experience for VOLK Presenter, translating the precision and fluidity of real-time broadcast graphics software into a premium digital interface. Features studio touchscreens and automation with silky-smooth 60 FPS animations.",
      challenge: "Convey the speed, control, and cutting-edge nature of the software without compromising loading times or causing GPU stutter.",
      solution: "Engineered with Next.js 15 and Tailwind CSS, supercharged with GSAP and hardware-accelerated Framer Motion interactions, integrated multi-language support (PT, EN, ES), and interactive video showcases.",
      results: [
        "60 FPS interactive animations running with zero lag.",
        "Complete multi-language localization for global market expansion.",
        "Exceptional user engagement and high session duration metrics."
      ],
      showcaseHeroTitle: "Visual Immersion and Speed for Next-Gen Media",
      performance: {
        speed: { title: "Speed", score: "Fluid 60 FPS", description: "Hardware-accelerated motion with zero GPU bottlenecks." },
        tech: { title: "Technology", tech: "Next.js 15 + GSAP", description: "Modular component architecture with edge deployment." },
        seo: { title: "Conversion", status: "SEO Score 100/100", description: "Optimized B2B lead generation and demo booking engine." }
      },
      designSystemText: "Editorial dark-mode aesthetic with neon accents and bold typography ensuring readability across all viewports.",
      designSystemComponents: {
        ctaLabel: "Get Started with VOLK",
        cardTitle: "Studio Interactivity",
        cardDesc: "Interactive showcase of on-air touchscreen modules.",
        awardTitle: "High-End Experience",
        awardSub: "60 FPS Interactive Motion Showcase"
      }
    },
    "capi": {
      id: "capi",
      title: "CAPI Digital",
      category: "CASE STUDY // AI-ASSISTED CONTENT ECOSYSTEM",
      image: "/printcapi.webp",
      liveUrl: "https://capi.digital/pt",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Framer Motion"],
      client: "CAPI Digital",
      year: "2026",
      scope: ["UX/UI Design", "Web Engineering", "AI Integration", "Conversion Strategy", "Technical SEO"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI APIs", "Framer Motion"],
      tagline: "Interactive landing page and showcase platform for an AI-assisted editorial production workspace.",
      overview: "Crafted the institutional digital presence for CAPI Digital, empowering editorial newsrooms with automated intelligence and high-velocity publishing pipelines.",
      challenge: "Demystify complex AI agent workflows for newsroom directors and publishers without relying on excessive technical jargon.",
      solution: "Structured an engaging visual narrative with interactive workflow demos and measurable time-saving calculators.",
      results: [
        "Significant boost in session duration and interactive engagement.",
        "Qualified B2B lead conversion rate exceeding 18%.",
        "Flawless Core Web Vitals score."
      ],
      showcaseHeroTitle: "Editorial Intelligence for High-Volume Publishing",
      performance: {
        speed: { title: "Speed", score: "Score 98/100", description: "Instant asset loading and motion rendering." },
        tech: { title: "Technology", tech: "Next.js + AI APIs", description: "Modern, highly scalable cloud infrastructure." },
        seo: { title: "Visibility", status: "Structured SEO", description: "Rich semantic indexing for corporate discovery." }
      },
      designSystemText: "Refined color palette with warm accents and modern typography communicating authority and innovation.",
      designSystemComponents: {
        ctaLabel: "Request a Demo",
        cardTitle: "AI Pipeline",
        cardDesc: "Smart curation and editorial workflows.",
        awardTitle: "AI Innovation",
        awardSub: "Intelligent Content Platform"
      }
    },
    "adansonea": {
      id: "adansonea",
      title: "Adansonea",
      category: "CASE STUDY // GLOBAL EXECUTIVE ADVISORY",
      image: "/printadansonea.webp",
      liveUrl: "https://www.adansonea.com/",
      tags: ["WordPress", "Elementor Pro", "Custom CSS", "WPO Optimization"],
      client: "Adansonea Executive Advisory",
      year: "2026",
      scope: ["UX/UI Design", "WordPress Development", "Performance Tuning", "Editorial Design"],
      stack: ["WordPress", "Elementor Pro", "PHP", "WP Rocket", "Cloudflare CDN"],
      tagline: "Executive digital presence for an international leadership and organizational advisory boutique.",
      overview: "High-end corporate development featuring clean aesthetics, classical typography, and optimized performance for C-level leadership.",
      challenge: "Combine the flexibility of a traditional CMS with the visual elegance and speed expected by global executives.",
      solution: "Deep performance optimization, sophisticated layouts, and high-caliber editorial typography.",
      results: [
        "65% reduction in initial page load time.",
        "Corporate design aligned with the boutique’s premium positioning.",
        "Intuitive content management for internal editorial teams."
      ],
      showcaseHeroTitle: "Strategic Leadership with Editorial Sophistication",
      performance: {
        speed: { title: "Speed", score: "Sub-Second Loading", description: "Rigorous optimization of scripts and web fonts." },
        tech: { title: "CMS", tech: "Optimized WordPress", description: "Clean architecture without plugin bloat." },
        seo: { title: "Authority", status: "Executive SEO", description: "Consolidated international search presence." }
      },
      designSystemText: "Subdued tones and serif typography conveying timeless trust and structural solidity.",
      designSystemComponents: {
        ctaLabel: "Explore Methodology",
        cardTitle: "Executive Advisory",
        cardDesc: "High-performance leadership consulting.",
        awardTitle: "Executive Design",
        awardSub: "International Corporate Presence"
      }
    },
    "acp": {
      id: "acp",
      title: "ACP Tax Advisory",
      category: "CASE STUDY // CROSS-BORDER TAX PLANNING",
      image: "/printacp.webp",
      liveUrl: "https://acptaxadvisory.com/",
      tags: ["WordPress", "Elementor Pro", "AIOSEO", "Performance Tuning"],
      client: "ACP Tax Advisory LLC",
      year: "2026",
      scope: ["UX/UI Design", "Service Architecture", "Conversion Optimization", "Tax SEO"],
      stack: ["WordPress", "PHP", "AIOSEO", "WP Rocket"],
      tagline: "Tax planning and fiscal advisory platform tailored for US cross-border clients.",
      overview: "Creation of the corporate platform for a US-based tax advisory firm, streamlining consultation bookings and tax regime navigation.",
      challenge: "Transform dense tax topics into an intuitive, pleasant user journey that reliably converts corporate clients.",
      solution: "Clear visual hierarchy, interactive calculators, and a direct tax diagnostic scheduling funnel.",
      results: [
        "Strong increase in initial consultation requests.",
        "40% reduction in bounce rates.",
        "Top-tier indexing for cross-border tax advisory searches."
      ],
      showcaseHeroTitle: "Tax Advisory with Clarity and High Conversion",
      performance: {
        speed: { title: "Speed", score: "Score 96/100", description: "Agile cloud delivery via global CDN." },
        tech: { title: "Conversion", tech: "Optimized Funnel", description: "High-value corporate lead acquisition." },
        seo: { title: "SEO", status: "US Market Indexing", description: "Geo-targeted search optimization for the US market." }
      },
      designSystemText: "Solid corporate colors and precise geometric layouts conveying trust and mathematical accuracy.",
      designSystemComponents: {
        ctaLabel: "Schedule Tax Consultation",
        cardTitle: "Tax Planning",
        cardDesc: "Strategic cross-border financial planning.",
        awardTitle: "Corporate Tax",
        awardSub: "Specialized Advisory Portal"
      }
    },
    "osa": {
      id: "osa",
      title: "ÔSA Branding Studio",
      category: "CASE STUDY // CONCEPTUAL BRAND IDENTITY",
      image: "/printosa.webp",
      liveUrl: "https://osabrandingstudio.com/homenew/",
      tags: ["WordPress", "Custom Animations", "Yoast SEO", "Minimalist UX"],
      client: "ÔSA Studio",
      year: "2026",
      scope: ["Conceptual UX/UI", "Web Engineering", "Authorial Typography", "Micro-interactions"],
      stack: ["WordPress", "JavaScript", "CSS Grid", "Yoast SEO"],
      tagline: "Authorial, conceptual showcase for a European strategic brand design studio.",
      overview: "Developed the portfolio portal for ÔSA Studio, celebrating negative space, graphic contrast, and bold typographic rhythm.",
      challenge: "Build a highly authorial minimalist experience without sacrificing usability or mobile responsiveness.",
      solution: "Fluid asymmetric grid, asynchronous HD image loading, and immersive page transitions.",
      results: [
        "Industry editorial recognition for art direction originality.",
        "Impeccable performance while preserving uncompressed visual quality.",
        "Consistent acquisition of high-value European design commissions."
      ],
      showcaseHeroTitle: "Authorial Aesthetic and Avant-Garde Minimalism",
      performance: {
        speed: { title: "Speed", score: "Optimized HD Images", description: "Next-gen WebP formatting with smart lazy loading." },
        tech: { title: "Design", tech: "CSS Micro-interactions", description: "Subtle transitions and seamless navigation." },
        seo: { title: "Portfolio", status: "Editorial SEO", description: "Refined search indexing for boutique design searches." }
      },
      designSystemText: "Extreme minimalism with refined brutalist typography and dominant monochrome contrast.",
      designSystemComponents: {
        ctaLabel: "View Project Collection",
        cardTitle: "Conceptual Identity",
        cardDesc: "Deep visual case studies with bespoke art direction.",
        awardTitle: "Editorial Design",
        awardSub: "Conceptual Branding Showcase"
      }
    },
    "quizsaas": {
      id: "quizsaas",
      title: "QuizSaaS",
      category: "CASE STUDY // SAAS INTERFACES & BEHAVIORAL TESTING",
      image: "/quizsaas.png",
      tags: ["React", "Next.js", "Tailwind CSS", "UX/UI SaaS", "Framer Motion"],
      client: "Behavioral Insight SaaS",
      year: "2026",
      scope: ["UX/UI Design", "Front-end Engineering", "Interactive Flow Architecture", "Conversion Rate Optimization"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tagline: "High-converting interactive interface for behavioral assessment and user retention.",
      overview: "We designed the onboarding and behavioral assessment interface for a SaaS platform grounded in psychological models and perception analysis, transforming cold traffic into engaged users.",
      challenge: "Captivate visitors within the first few seconds through compelling product psychology and visual contrast, guiding them seamlessly through interactive questions without churn.",
      solution: "Engineered a dark-mode design system with striking typography, fluid micro-interactions, and instant loading speeds across desktop and mobile devices.",
      results: [
        "Substantial increase in question flow completion rates.",
        "Immersive experience engineered for immediate 3-second engagement.",
        "Instant loading across mobile and desktop devices."
      ],
      showcaseHeroTitle: "SaaS Interface Design Focused on Psychology & High Conversion",
      performance: {
        speed: { title: "Performance", score: "Score 99/100", description: "Ultra-fast interface with streamlined dependencies." },
        tech: { title: "Front-end", tech: "Next.js & Tailwind", description: "Modular design system with decoupled components." },
        seo: { title: "Engagement", status: "High Retention", description: "Optimized interactive flow drastically reducing bounce rate." }
      },
      designSystemText: "High-contrast dark palette with subtle magenta and purple gradients, inspiring focus, depth, and cognitive clarity.",
      designSystemComponents: {
        ctaLabel: "Discover my pattern",
        cardTitle: "Behavioral Decoding",
        cardDesc: "Accurate analysis of unconscious perception and blind spots.",
        awardTitle: "SaaS Product Design",
        awardSub: "Behavioral Interactive Experience"
      }
    },
    "aura-atelier": {
      id: "aura-atelier",
      title: "AURA Atelier",
      category: "CASE STUDY // VISUAL IDENTITY & ART DIRECTION",
      image: "/case-aura-brand.svg",
      tags: ["Branding", "Visual Identity", "Brandbook", "Packaging Design", "Typography"],
      client: "AURA Atelier Paris / SP",
      year: "2026",
      scope: ["Brand Strategy", "Visual Identity System", "Packaging Design", "Art Direction", "Brand Guidelines"],
      stack: ["Figma", "Adobe Illustrator", "Design System", "Creative Direction"],
      tagline: "Minimalist and timeless visual identity for a contemporary luxury fragrance and cosmetics house.",
      overview: "We crafted the entire visual universe for AURA Atelier, from strategic positioning and golden-ratio monogram construction to tactile packaging design and global brand guidelines.",
      challenge: "Create a visual identity that conveys quiet luxury, European sophistication, and immediate authority across both physical retail shelves and digital touchpoints.",
      solution: "Built a visual system grounded in the golden ratio (1:1.618), pairing classical editorial typography with minimalist geometry and a contrasting palette of obsidian black, gold leaf, and raw silk.",
      results: [
        "Immediate brand recognition with a proprietary high-perceived-value aesthetic.",
        "Comprehensive brandbook covering digital, print, and packaging applications.",
        "85% increase in premium brand perception across consumer focus groups."
      ],
      showcaseHeroTitle: "Minimalist and Timeless Aesthetic for the Luxury Market",
      performance: {
        speed: { title: "Consistency", score: "Brand System 100%", description: "Modular visual system adaptable from digital screens to physical packaging." },
        tech: { title: "Geometry", tech: "Golden Ratio 1:1.618", description: "Monogram and layout grid engineered with mathematical precision." },
        seo: { title: "Positioning", status: "High Perceived Value", description: "Identity crafted to elevate brand equity and average order value." }
      },
      designSystemText: "Balance between high-contrast editorial serif typography and deep tones in Obsidian (#0B0C10), Gold Leaf (#D4AF37), and Raw Silk (#F4F1EA).",
      designSystemComponents: {
        ctaLabel: "Explore Brandbook",
        cardTitle: "Monogram & System",
        cardDesc: "Geometric construction and luxury packaging applications.",
        awardTitle: "Brand Identity",
        awardSub: "Art Direction & Visual Identity"
      }
    },
    "kronos-store": {
      id: "kronos-store",
      title: "KRONOS Store",
      category: "CASE STUDY // HIGH-CONVERSION HEADLESS E-COMMERCE",
      image: "/case-kronos-ecommerce.svg",
      tags: ["Next.js Commerce", "Shopify Headless", "Tailwind CSS", "1-Click Checkout", "Instant Pay"],
      client: "KRONOS Horology",
      year: "2026",
      scope: ["E-commerce UX/UI", "Headless Architecture", "Checkout Optimization (CRO)", "Interactive Showcase", "Product SEO"],
      stack: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS", "Stripe / Apple Pay"],
      tagline: "Ultra-fast headless e-commerce with interactive product showcase and 1-click checkout for precision horology.",
      overview: "We designed and developed the KRONOS online store using headless architecture, combining Next.js instant speed with a frictionless buying flow built to maximize sales on mobile and desktop.",
      challenge: "Overcome slow page loads and high cart abandonment rates typical of traditional e-commerce templates when selling high-ticket products.",
      solution: "Implemented an immersive sub-second storefront, real-time variant selector, and seamless 1-click checkout with instant payment confirmation.",
      results: [
        "148% increase in overall store conversion rate within the first quarter.",
        "60% reduction in cart abandonment powered by 1-click checkout.",
        "Product pages loading in under 0.6 seconds on mobile devices."
      ],
      showcaseHeroTitle: "E-commerce Engineering Built to Scale Online Sales",
      performance: {
        speed: { title: "Speed", score: "PageSpeed 99/100", description: "Instant product pages that never keep buyers waiting." },
        tech: { title: "Architecture", tech: "Next.js + Shopify Headless", description: "Enterprise security with total design and conversion freedom." },
        seo: { title: "Conversion", status: "+148% Sales Growth", description: "Frictionless checkout flow optimized for mobile buyers." }
      },
      designSystemText: "Sophisticated dark interface with high-converting emerald accents, highlighting product photography and guiding attention directly to the buy button.",
      designSystemComponents: {
        ctaLabel: "1-Click Purchase",
        cardTitle: "High-Conversion Showcase",
        cardDesc: "Instant variant switching with automated shipping calculation.",
        awardTitle: "Headless Commerce",
        awardSub: "E-commerce Performance & Conversion"
      }
    }
  },
  es: {
    "snews": {
      id: "snews",
      title: "SNEWS",
      category: "CASE STUDY // SITIO WEB INSTITUCIONAL Y MULTILINGÜE",
      image: "/printsnews.webp",
      liveUrl: "https://snews.tv",
      tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Prisma", "Framer Motion"],
      client: "Snews Broadcast Solutions",
      year: "2026",
      scope: ["Diseño UX/UI", "Desarrollo Web Multilingüe", "Design System", "Animaciones Interactivas", "SEO y Rendimiento"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
      tagline: "Sitio web institucional de alto rendimiento para el líder en soluciones de broadcast en América Latina.",
      overview: "Diseñamos y desarrollamos el portal corporativo de Snews, entregando una plataforma internacionalizada y de altísima fidelidad técnica.",
      challenge: "Comunicar la amplitud de un ecosistema tecnológico con más de 25 años de historia de forma clara para directores de TV y Radio.",
      solution: "Plataforma desacoplada con Next.js App Router y soporte nativo multilingüe para Portugués, Inglés y Español con componentes modulares.",
      results: [
        "Presentación elegante y clara de todo el catálogo broadcast.",
        "Cambio de idioma instantáneo (PT, EN, ES) sin recargar la página.",
        "Puntuación sobresaliente en Google PageSpeed con tiempos de respuesta en milisegundos."
      ],
      showcaseHeroTitle: "Presencia Digital de Alto Rendimiento para la Industria Broadcast",
      performance: {
        speed: { title: "Velocidad", score: "PageSpeed Score: 99/100", description: "Navegación ultra rápida con renderizado estático y dinámico optimizado." },
        tech: { title: "Tecnología", tech: "Next.js + next-intl", description: "Arquitectura nativa multilingüe y tipado estricto en TypeScript." },
        seo: { title: "SEO", status: "Indexación Global", description: "Datos estructurados y metaetiquetas internacionales." }
      },
      designSystemText: "Lenguaje visual corporativo de alto impacto con contrastes marcados y tipografía técnica.",
      designSystemComponents: {
        ctaLabel: "Agendar Demostración",
        cardTitle: "Ecosistema Broadcast",
        cardDesc: "Soluciones unificadas para TV, Radio y Medios Digitales.",
        awardTitle: "Broadcast Showcase",
        awardSub: "Sitio Web Institucional de Alto Rendimiento"
      }
    },
    "volk": {
      id: "volk",
      title: "VOLK Presenter",
      category: "CASE STUDY // PLATAFORMA WEB CON ANIMACIONES A 60 FPS",
      image: "/printvolk.webp",
      liveUrl: "https://volkpresenter.tv/pt",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "i18n Dictionary"],
      client: "VOLK Presenter",
      year: "2026",
      scope: ["Diseño UX/UI Premium", "Ingeniería Front-end", "Animaciones GSAP", "Internacionalización (i18n)", "SEO y Rendimiento"],
      stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
      tagline: "Experiencia web inmersiva para la plataforma de gráficos interactivos en tiempo real.",
      overview: "Diseñamos y construimos la experiencia web de VOLK Presenter, trasladando la precisión de los gráficos en vivo a una plataforma digital de vanguardia.",
      challenge: "Transmitir la velocidad y el control del software sin comprometer los tiempos de carga en ningún dispositivo.",
      solution: "Desarrollado con Next.js 15 y Tailwind CSS, potenciado por animaciones GSAP a 60 FPS y soporte multilingüe fluido.",
      results: [
        "Animaciones fluidas a 60 FPS con aceleración de hardware.",
        "Internacionalización integral (Portugués, Inglés y Español).",
        "Alta tasa de retención y navegación interactiva intuitiva."
      ],
      showcaseHeroTitle: "Inmersión Visual y Rendimiento para la Nueva Era de los Medios",
      performance: {
        speed: { title: "Velocidad", score: "60 FPS Fluidos", description: "Interacciones optimizadas sin sobrecarga de GPU." },
        tech: { title: "Tecnología", tech: "Next.js 15 + GSAP", description: "Arquitectura modular desplegada en la nube." },
        seo: { title: "Conversión", status: "SEO Optimizado 100/100", description: "Captura de leads y agenda de demostraciones B2B." }
      },
      designSystemText: "Estética editorial moderna con fondos oscuros y detalles en neón para máxima legibilidad.",
      designSystemComponents: {
        ctaLabel: "Comenzar a usar VOLK",
        cardTitle: "Interactividad en Estudio",
        cardDesc: "Demostración fluida de módulos táctiles y gráficos al aire.",
        awardTitle: "High-End Experience",
        awardSub: "Animaciones a 60 FPS y Diseño Interactivo"
      }
    },
    "capi": {
      id: "capi",
      title: "CAPI Digital",
      category: "CASE STUDY // ECOSISTEMA DE CONTENIDO CON IA",
      image: "/printcapi.webp",
      liveUrl: "https://capi.digital/pt",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Framer Motion"],
      client: "CAPI Digital",
      year: "2026",
      scope: ["Diseño UX/UI", "Desarrollo Web", "Integración de IA", "Estrategia de Conversión", "SEO Técnico"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI APIs", "Framer Motion"],
      tagline: "Landing page y plataforma para el cerebro editorial de producción de contenidos con IA.",
      overview: "Presencia digital corporativa para CAPI Digital, automatizando la inteligencia editorial para redacciones de alto volumen.",
      challenge: "Explicar de forma simple una tecnología avanzada de agentes de IA para directores editoriales.",
      solution: "Narrativa visual con demostraciones interactivas de flujos automatizados y métricas de productividad.",
      results: [
        "Gran incremento en el tiempo de permanencia.",
        "Conversión de clientes potenciales superior al 18%.",
        "Métricas óptimas en Core Web Vitals."
      ],
      showcaseHeroTitle: "Inteligencia Editorial para Equipos de Alto Rendimiento",
      performance: {
        speed: { title: "Velocidade", score: "Score 98/100", description: "Carga instantánea de recursos y animaciones." },
        tech: { title: "Tecnología", tech: "Next.js + AI APIs", description: "Infraestructura moderna y escalable." },
        seo: { title: "Visibilidad", status: "SEO Estructurado", description: "Indexación semántica para búsquedas B2B." }
      },
      designSystemText: "Paleta sofisticada con toques cálidos y tipografía contundente.",
      designSystemComponents: {
        ctaLabel: "Solicitar Demostración",
        cardTitle: "Pipeline de IA",
        cardDesc: "Flujos inteligentes de producción editorial.",
        awardTitle: "AI Innovation",
        awardSub: "Plataforma de Contenido Inteligente"
      }
    },
    "adansonea": {
      id: "adansonea",
      title: "Adansonea",
      category: "CASE STUDY // CONSULTORÍA BOUTIQUE GLOBAL",
      image: "/printadansonea.webp",
      liveUrl: "https://www.adansonea.com/",
      tags: ["WordPress", "Elementor Pro", "Custom CSS", "WPO Optimization"],
      client: "Adansonea Executive Advisory",
      year: "2026",
      scope: ["Diseño UX/UI", "Desarrollo WordPress", "Optimización de Rendimiento", "Diseño Editorial"],
      stack: ["WordPress", "Elementor Pro", "PHP", "WP Rocket", "Cloudflare CDN"],
      tagline: "Presencia digital ejecutiva para consultora internacional de liderazgo estratégico.",
      overview: "Desarrollo corporativo de alto nivel con estética limpia y tipografía clásica para directivos C-level.",
      challenge: "Combinar la flexibilidad de un CMS con la velocidad y elegancia requerida por ejecutivos globales.",
      solution: "Optimización profunda de scripts, diseño sobrio y tipografía editorial refinada.",
      results: [
        "Reducción del 65% en el tiempo de carga.",
        "Diseño alineado al posicionamiento premium de la firma.",
        "Gestión de contenidos sencilla para el equipo interno."
      ],
      showcaseHeroTitle: "Liderazgo Estratégico con Sofisticação Editorial",
      performance: {
        speed: { title: "Velocidad", score: "Carga en Menos de 1s", description: "Optimización estricta de fuentes y código." },
        tech: { title: "CMS", tech: "WordPress Optimizado", description: "Arquitectura limpia sin sobrecarga de plugins." },
        seo: { title: "Autoridad", status: "SEO Ejecutivo", description: "Presencia internacional consolidada." }
      },
      designSystemText: "Tonos sobrios y tipografía con serifa que transmiten solidez.",
      designSystemComponents: {
        ctaLabel: "Conocer Metodología",
        cardTitle: "Advisory Ejecutivo",
        cardDesc: "Desarrollo de liderazgos de alto rendimiento.",
        awardTitle: "Executive Design",
        awardSub: "Presencia Corporativa Internacional"
      }
    },
    "acp": {
      id: "acp",
      title: "ACP Tax Advisory",
      category: "CASE STUDY // PLANIFICACIÓN TRIBUTARIA INTERNACIONAL",
      image: "/printacp.webp",
      liveUrl: "https://acptaxadvisory.com/",
      tags: ["WordPress", "Elementor Pro", "AIOSEO", "Performance Tuning"],
      client: "ACP Tax Advisory LLC",
      year: "2026",
      scope: ["Diseño UX/UI", "Estructuración de Servicios", "Optimización de Conversión", "SEO Fiscal"],
      stack: ["WordPress", "PHP", "AIOSEO", "WP Rocket"],
      tagline: "Plataforma de servicios fiscales y planificación tributaria para clientes transfronterizos.",
      overview: "Desarrollo del portal institucional para consultora con sede en EE. UU., facilitando el agendamiento de consultas fiscales.",
      challenge: "Transformar temas impositivos complejos en una experiencia intuitiva que convierta clientes corporativos.",
      solution: "Jerarquía visual clara y embudo directo para programar diagnósticos tributarios.",
      results: [
        "Aumento en solicitudes de consulta inicial.",
        "Tasa de rebote reducida en un 40%.",
        "Destacada indexación en el mercado estadounidense."
      ],
      showcaseHeroTitle: "Consultoría Tributaria con Claridad y Alta Conversión",
      performance: {
        speed: { title: "Velocidad", score: "Score 96/100", description: "Entrega ágil a través de CDN global." },
        tech: { title: "Conversión", tech: "Embudo Optimizado", description: "Captura de clientes corporativos calificados." },
        seo: { title: "SEO", status: "Indexación en EE. UU.", description: "Optimización geolocalizada para el mercado norteamericano." }
      },
      designSystemText: "Colores corporativos sólidos que transmiten precisión contable.",
      designSystemComponents: {
        ctaLabel: "Agendar Consulta Fiscal",
        cardTitle: "Planificación Tributaria",
        cardDesc: "Asesoramiento contable para empresas internacionales.",
        awardTitle: "Corporate Tax",
        awardSub: "Portal Institucional Especializado"
      }
    },
    "osa": {
      id: "osa",
      title: "ÔSA Branding Studio",
      category: "CASE STUDY // DISEÑO DE MARCA CONCEPTUAL",
      image: "/printosa.webp",
      liveUrl: "https://osabrandingstudio.com/homenew/",
      tags: ["WordPress", "Custom Animations", "Yoast SEO", "Minimalist UX"],
      client: "ÔSA Studio",
      year: "2026",
      scope: ["UX/UI Conceptual", "Desarrollo Web", "Tipografía de Autor", "Microinteracciones"],
      stack: ["WordPress", "JavaScript", "CSS Grid", "Yoast SEO"],
      tagline: "Plataforma conceptual de portafolio para estudio europeo de diseño e identidad de marca.",
      overview: "Portal de portafolio para ÔSA Studio destacando el uso del espacio negativo y contrastes gráficos marcados.",
      challenge: "Crear una experiencia minimalista de autor sin comprometer la usabilidad ni la velocidad en móviles.",
      solution: "Grid asimétrico fluido, carga asíncrona de imágenes en alta definición y navegación inmersiva.",
      results: [
        "Reconocimiento editorial por la originalidad de la dirección de arte.",
        "Rendimiento impecable preservando imágenes en alta definición.",
        "Captación de proyectos de diseño de alto valor en Europa."
      ],
      showcaseHeroTitle: "Estética de Autor y Minimalismo de Vanguardia",
      performance: {
        speed: { title: "Velocidad", score: "Imágenes HD Optimizadas", description: "Formato WebP con carga inteligente." },
        tech: { title: "Diseño", tech: "Microinteracciones CSS", description: "Transiciones suaves y navegación fluida." },
        seo: { title: "Portafolio", status: "SEO Editorial", description: "Indexación para búsquedas de diseño boutique." }
      },
      designSystemText: "Minimalismo con tipografía brutalista refinada y fuerte contraste en blanco y negro.",
      designSystemComponents: {
        ctaLabel: "Ver Colección de Proyectos",
        cardTitle: "Identidad Conceptual",
        cardDesc: "Casos de estudio visuales con profunda dirección de arte.",
        awardTitle: "Editorial Design",
        awardSub: "Showcase Conceptual de Branding"
      }
    },
    "quizsaas": {
      id: "quizsaas",
      title: "QuizSaaS",
      category: "CASE STUDY // INTERFACES SAAS & TEST CONDUCTUAL",
      image: "/quizsaas.png",
      tags: ["React", "Next.js", "Tailwind CSS", "UX/UI SaaS", "Framer Motion"],
      client: "Behavioral Insight SaaS",
      year: "2026",
      scope: ["Diseño UX/UI", "Ingeniería Front-end", "Arquitectura de Flujo Interactivo", "Optimización de Conversión"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tagline: "Interfaz interactiva de alta conversión para diagnóstico conductual y retención de usuarios.",
      overview: "Diseñamos la interfaz de onboarding y diagnóstico conductual para una plataforma SaaS basada en psicología y análisis de percepción, convirtiendo visitantes en usuarios fidelizados.",
      challenge: "Capturar la atención del usuario en los primeros segundos con psicología de producto y alto contraste visual, guiándolo por preguntas intuitivas sin fricción.",
      solution: "Desarrollamos un design system en modo oscuro con tipografía contundente, microinteracciones fluidas y carga instantánea en todos los dispositivos.",
      results: [
        "Incremento notable en la tasa de finalización del cuestionario.",
        "Experiencia inmersiva diseñada para retención inmediata en 3 segundos.",
        "Carga instantánea en dispositivos móviles y de escritorio."
      ],
      showcaseHeroTitle: "Diseño de Interfaz SaaS Enfocado en Psicología y Alta Conversión",
      performance: {
        speed: { title: "Rendimiento", score: "Puntuación 99/100", description: "Interfaz ultrarrápida sin dependencias pesadas." },
        tech: { title: "Front-end", tech: "Next.js & Tailwind", description: "Arquitectura modular y componentes desacoplados." },
        seo: { title: "Retención", status: "Alto Compromiso", description: "Flujo interactivo optimizado para mínima tasa de rebote." }
      },
      designSystemText: "Paleta oscura de alto contraste con sutiles degradados en magenta y violeta, evocando modernidade, profundidad y concentración.",
      designSystemComponents: {
        ctaLabel: "Descubrir mi patrón",
        cardTitle: "Decodificación Conductual",
        cardDesc: "Análisis preciso de percepción inconsciente y puntos ciegos.",
        awardTitle: "SaaS Product Design",
        awardSub: "Interfaz Interactiva de Comportamiento"
      }
    },
    "aura-atelier": {
      id: "aura-atelier",
      title: "AURA Atelier",
      category: "CASE STUDY // IDENTIDAD VISUAL Y DIRECCIÓN DE ARTE",
      image: "/case-aura-brand.svg",
      tags: ["Branding", "Identidad Visual", "Brandbook", "Packaging Design", "Tipografía"],
      client: "AURA Atelier Paris / SP",
      year: "2026",
      scope: ["Estrategia de Marca", "Sistema de Identidad Visual", "Diseño de Empaques", "Dirección de Arte", "Brand Guidelines"],
      stack: ["Figma", "Adobe Illustrator", "Design System", "Dirección Creativa"],
      tagline: "Identidad visual minimalista y atemporal para casa contemporánea de alta perfumería y cosmética.",
      overview: "Desarrollamos todo el universo visual de AURA Atelier, desde el posicionamiento estratégico y la construcción del monograma áureo hasta el diseño de empaques táctiles y manual global de marca.",
      challenge: "Crear una identidad visual que transmitiera lujo silencioso, sofisticación europea y autoridad inmediata tanto en puntos de venta físicos como en el entorno digital.",
      solution: "Construimos un sistema visual basado en la proporción áurea (1:1.618), combinando tipografía editorial clásica con geometría minimalista y una paleta en negro obsidiana, hoja de oro y seda cruda.",
      results: [
        "Reconocimiento inmediato de marca con estética propietaria de alto valor percibido.",
        "Brandbook integral con directrices digitales, impresas y de empaques.",
        "Incremento del 85% en la percepción de marca premium en estudios con consumidores."
      ],
      showcaseHeroTitle: "Estética Minimalista y Atemporal para el Mercado de Lujo",
      performance: {
        speed: { title: "Consistencia", score: "Brand System 100%", description: "Sistema visual modular aplicable desde pantallas hasta empaques físicos." },
        tech: { title: "Geometría", tech: "Proporción Áurea 1:1.618", description: "Monograma y retícula construidos con precisión matemática." },
        seo: { title: "Posicionamiento", status: "Alto Valor Percibido", description: "Identidad diseñada para elevar el ticket promedio de la marca." }
      },
      designSystemText: "Equilibrio entre tipografía serif editorial de alto contraste y tonos profundos en Obsidian (#0B0C10), Gold Leaf (#D4AF37) y Raw Silk (#F4F1EA).",
      designSystemComponents: {
        ctaLabel: "Explorar Brandbook",
        cardTitle: "Monograma y Sistema",
        cardDesc: "Construcción geométrica y aplicaciones en empaques de lujo.",
        awardTitle: "Brand Identity",
        awardSub: "Dirección de Arte e Identidad Visual"
      }
    },
    "kronos-store": {
      id: "kronos-store",
      title: "KRONOS Store",
      category: "CASE STUDY // E-COMMERCE HEADLESS DE ALTA CONVERSIÓN",
      image: "/case-kronos-ecommerce.svg",
      tags: ["Next.js Commerce", "Shopify Headless", "Tailwind CSS", "Checkout 1-Clic", "Pago Instantáneo"],
      client: "KRONOS Horology",
      year: "2026",
      scope: ["UX/UI para E-commerce", "Arquitectura Headless", "Optimización de Checkout (CRO)", "Vitrina Interactiva", "SEO de Productos"],
      stack: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS", "Stripe / Apple Pay"],
      tagline: "E-commerce ultrarrápido con vitrina interactiva y checkout en 1 clic para relojería de precisión.",
      overview: "Diseñamos y desarrollamos la tienda online de KRONOS con arquitectura headless, uniendo la velocidad instantánea de Next.js con un flujo de compra sin fricción pensado para maximizar ventas.",
      challenge: "Superar la lentitud y la alta tasa de abandono de carrito de las plataformas tradicionales al vender productos de alto valor.",
      solution: "Implementamos una vitrina inmersiva de carga en milisegundos, selector de variantes en tiempo real y checkout transparente en 1 clic.",
      results: [
        "Aumento del 148% en la tasa de conversión general durante el primer trimestre.",
        "Reducción del 60% en el abandono de carrito gracias al checkout en 1 clic.",
        "Carga de páginas de producto en menos de 0,6 segundos en dispositivos móviles."
      ],
      showcaseHeroTitle: "Ingeniería de E-commerce Diseñada para Escalar Ventas",
      performance: {
        speed: { title: "Velocidad", score: "PageSpeed 99/100", description: "Páginas de producto instantáneas sin tiempos de espera." },
        tech: { title: "Arquitectura", tech: "Next.js + Shopify Headless", description: "Seguridad empresarial con libertad total de diseño y conversión." },
        seo: { title: "Conversión", status: "+148% en Ventas", description: "Flujo de pago optimizado para compras rápidas en móvil." }
      },
      designSystemText: "Interfaz oscura sofisticada con acentos en verde esmeralda de alta conversión, destacando el producto y guiando la atención al botón de compra.",
      designSystemComponents: {
        ctaLabel: "Compra en 1 Clic",
        cardTitle: "Vitrina de Alta Conversión",
        cardDesc: "Selección instantánea de modelos con envío exprés automatizado.",
        awardTitle: "Headless Commerce",
        awardSub: "Rendimiento y Conversión en E-commerce"
      }
    }
  }
};

export const STATIC_CASE_STUDIES = CASE_STUDIES_I18N.pt;
