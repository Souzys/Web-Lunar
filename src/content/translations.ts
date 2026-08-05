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
  };
  footer: {
    tagline: string;
    contactTitle: string;
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
    },
    footer: {
      tagline: 'Criando experiências digitais memoráveis e de alta performance.',
      contactTitle: 'Fale Conosco',
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
    },
    footer: {
      tagline: 'Creating memorable, high-performance digital experiences.',
      contactTitle: 'Get in Touch',
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
    },
    footer: {
      tagline: 'Creando experiencias digitales memorables y de alto rendimiento.',
      contactTitle: 'Contáctanos',
    },
  },
};
