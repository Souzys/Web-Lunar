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
    }
  }
};

export const STATIC_CASE_STUDIES = CASE_STUDIES_I18N.pt;
