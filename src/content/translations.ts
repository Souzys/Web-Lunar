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
  about: {
    tag: string;
    title: string;
    period: string;
  };
  services: {
    title: string;
    tag: string;
    items: {
      landingPages: { title: string; desc: string };
      sitesApps: { title: string; desc: string };
      ecommerce: { title: string; desc: string };
      agendamento: { title: string; desc: string };
      integracoes: { title: string; desc: string };
      performance: { title: string; desc: string };
    };
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
  };
  testimonials: {
    tag: string;
    title: string;
    titleHighlight: string;
    item1: { badge: string; text: string; role: string };
    item2: { badge: string; text: string; role: string };
  };
  contactPage: {
    tag: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    budgetLabel: string;
    submitButton: string;
    successMessage: string;
  };
  projectsPage: {
    tag: string;
    title: string;
    subtitle: string;
    scanning: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    allRightsReserved: string;
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
    about: {
      tag: 'Sobre Nós',
      title: 'Desenvolvemos sites e sistemas que unem design moderno, estratégia de conversão e tecnologia sólida — transformando ideias em soluções digitais que funcionam.',
      period: '2021–Presente',
    },
    services: {
      tag: 'O QUE FAZEMOS',
      title: 'LANDING PAGES · SITES · E-COMMERCE · AGENDAMENTO · INTEGRAÇÕES · PERFORMANCE',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'Páginas únicas otimizadas pra captar leads ou vender direto, com design persuasivo e estratégias de conversão.',
        },
        sitesApps: {
          title: 'Sites & Apps',
          desc: 'Presença online completa em React, Next.js ou WordPress, com foco em usabilidade e identidade visual refinada.',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Plataformas de venda robustas com integração de pagamentos, carrinho inteligente e gestão simples.',
        },
        agendamento: {
          title: 'Sistemas de Agendamento',
          desc: 'Sistemas personalizados para serviços com calendários automáticos e notificações inteligentes.',
        },
        integracoes: {
          title: 'Integrações & APIs',
          desc: 'Conexão com CRMs, e-mail marketing, pixels de anúncios e APIs para fluxos 100% automáticos.',
        },
        performance: {
          title: 'Performance & SEO',
          desc: 'SEO técnico, Core Web Vitals, mobile-first e analytics avançado para maximizar tráfego e conversões.',
        },
      },
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
    },
    testimonials: {
      tag: 'Depoimentos',
      title: 'O QUE DIZEM SOBRE NÓS',
      titleHighlight: 'SOBRE NÓS',
      item1: {
        badge: 'DESENVOLVIMENTO WEB',
        text: 'A Web Lunar foi a responsável pelo front-end de um site que fizemos juntos. Eles implementaram o design com fidelidade, ajustaram o que precisava e o resultado ficou muito bem feito. É fácil trabalhar com a equipe e o prazo foi cumprido direitinho.',
        role: 'Front End UI / UX Developer',
      },
      item2: {
        badge: 'INTEGRAÇÃO DE SISTEMAS',
        text: 'Contratamos a Web Lunar para desenvolver uma integração com nosso sistema de pagamentos e a equipe entregou tudo funcionando certinho. Tiraram dúvidas rápido, testaram bem e deixaram a documentação organizada. Trabalho sólido e sem dor de cabeça.',
        role: 'Tech Lead / Gestor de Projeto',
      },
    },
    contactPage: {
      tag: 'Contato',
      title: 'Vamos iniciar o seu projeto?',
      subtitle: 'Preencha o formulário abaixo ou envie uma mensagem direta para transformar sua ideia em um produto digital de alto impacto.',
      nameLabel: 'Seu Nome',
      emailLabel: 'E-mail Corporativo',
      phoneLabel: 'Telefone / WhatsApp',
      messageLabel: 'Detalhes do Projeto',
      budgetLabel: 'Orçamento Estimado',
      submitButton: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    },
    projectsPage: {
      tag: 'Nosso Portfólio',
      title: 'Galeria de Projetos',
      subtitle: 'Estudos de caso, plataformas SaaS e soluções digitais sob medida, desenvolvidas com o mais alto rigor técnico e visual.',
      scanning: 'Escaneando portfólio...',
    },
    footer: {
      tagline: 'Criando experiências digitais memoráveis e de alta performance.',
      contactTitle: 'Fale Conosco',
      allRightsReserved: 'Todos os direitos reservados.',
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
    about: {
      tag: 'About Us',
      title: 'We build websites and digital products that combine modern design, conversion strategy, and rock-solid tech — turning ideas into working digital solutions.',
      period: '2021–Present',
    },
    services: {
      tag: 'WHAT WE DO',
      title: 'LANDING PAGES · WEBSITES · E-COMMERCE · SCHEDULING · INTEGRATIONS · PERFORMANCE',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'High-converting single pages crafted to generate leads or direct sales with persuasive design.',
        },
        sitesApps: {
          title: 'Websites & Apps',
          desc: 'Complete digital presence in React, Next.js, or WordPress focused on usability and refined visual identity.',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Robust online store platforms with payment gateways, smart carts, and easy management.',
        },
        agendamento: {
          title: 'Booking Systems',
          desc: 'Tailored appointment scheduling systems with automated calendars and smart notifications.',
        },
        integracoes: {
          title: 'Integrations & APIs',
          desc: 'Seamless connections with CRMs, email marketing, ad pixels, and custom APIs for automated workflows.',
        },
        performance: {
          title: 'Performance & SEO',
          desc: 'Technical SEO, Core Web Vitals, mobile-first optimization, and advanced analytics to maximize growth.',
        },
      },
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
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'WHAT OUR CLIENTS SAY',
      titleHighlight: 'CLIENTS SAY',
      item1: {
        badge: 'WEB DEVELOPMENT',
        text: 'Web Lunar was responsible for the front-end of a website we built together. They executed the design with absolute fidelity, adjusted details quickly, and delivered an exceptional product. Easy to work with and strictly on deadline.',
        role: 'Front End UI / UX Developer',
      },
      item2: {
        badge: 'SYSTEM INTEGRATION',
        text: 'We hired Web Lunar to build a payment gateway integration for our system. The team delivered everything running flawlessly. They answered questions fast, tested thoroughly, and kept documentation clean. Solid work without headaches.',
        role: 'Tech Lead / Project Manager',
      },
    },
    contactPage: {
      tag: 'Contact',
      title: 'Let’s start your project',
      subtitle: 'Fill out the form below or send a direct message to turn your idea into a high-impact digital product.',
      nameLabel: 'Your Name',
      emailLabel: 'Corporate Email',
      phoneLabel: 'Phone / WhatsApp',
      messageLabel: 'Project Details',
      budgetLabel: 'Estimated Budget',
      submitButton: 'Send Message',
      successMessage: 'Message sent successfully! We will get back to you shortly.',
    },
    projectsPage: {
      tag: 'Our Portfolio',
      title: 'Project Gallery',
      subtitle: 'Case studies, SaaS platforms, and custom digital solutions engineered with the highest technical and visual standards.',
      scanning: 'Scanning portfolio...',
    },
    footer: {
      tagline: 'Creating memorable, high-performance digital experiences.',
      contactTitle: 'Get in Touch',
      allRightsReserved: 'All rights reserved.',
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
    about: {
      tag: 'Nosotros',
      title: 'Desarrollamos sitios web y sistemas que combinan diseño moderno, estrategia de conversión y tecnología sólida — transformando ideas en soluciones digitales que funcionan.',
      period: '2021–Presente',
    },
    services: {
      tag: 'LO QUE HACEMOS',
      title: 'LANDING PAGES · SITIOS WEB · E-COMMERCE · RESERVAS · INTEGRACIONES · RENDIMIENTO',
      items: {
        landingPages: {
          title: 'Landing Pages',
          desc: 'Páginas de alta conversión diseñadas para captar clientes potenciales o ventas directas con diseño persuasivo.',
        },
        sitesApps: {
          title: 'Sitios & Apps',
          desc: 'Presencia digital completa en React, Next.js o WordPress enfocada en usabilidad e identidad visual refinada.',
        },
        ecommerce: {
          title: 'E-commerce',
          desc: 'Plataformas de venta sólidas con integración de pagos, carrito inteligente y gestión sencilla.',
        },
        agendamento: {
          title: 'Sistemas de Reservas',
          desc: 'Sistemas de citas personalizados con calendarios automáticos y notificaciones inteligentes.',
        },
        integracoes: {
          title: 'Integraciones & APIs',
          desc: 'Conexión con CRMs, email marketing, píxeles publicitarios y APIs para flujos 100% automáticos.',
        },
        performance: {
          title: 'Rendimiento & SEO',
          desc: 'SEO técnico, Core Web Vitals, optimización móvil y analítica avanzada para maximizar resultados.',
        },
      },
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
    },
    testimonials: {
      tag: 'Testimonios',
      title: 'LO QUE DICEN SOBRE NOSOTROS',
      titleHighlight: 'NOSOTROS',
      item1: {
        badge: 'DESARROLLO WEB',
        text: 'Web Lunar fue responsable del desarrollo front-end de un sitio que hicimos juntos. Implementaron el diseño con absoluta fidelidad, ajustaron los detalles rápidamente y el resultado fue impecable. Muy fácil trabajar con ellos y cumplieron los plazos estrictamente.',
        role: 'Front End UI / UX Developer',
      },
      item2: {
        badge: 'INTEGRACIÓN DE SISTEMAS',
        text: 'Contratamos a Web Lunar para integrar una pasarela de pagos en nuestro sistema. El equipo entregó todo funcionando a la perfección. Respondieron dudas rápido, probaron bien y dejaron la documentación organizada. Trabajo sólido sin dolores de cabeza.',
        role: 'Tech Lead / Director de Proyecto',
      },
    },
    contactPage: {
      tag: 'Contacto',
      title: 'Comencemos tu proyecto',
      subtitle: 'Completa el formulario a continuación o envía un mensaje directo para transformar tu idea en un producto digital de alto impacto.',
      nameLabel: 'Tu Nombre',
      emailLabel: 'Correo Corporativo',
      phoneLabel: 'Teléfono / WhatsApp',
      messageLabel: 'Detalles del Proyecto',
      budgetLabel: 'Presupuesto Estimado',
      submitButton: 'Enviar Mensaje',
      successMessage: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.',
    },
    projectsPage: {
      tag: 'Nuestro Portafolio',
      title: 'Galería de Proyectos',
      subtitle: 'Casos de estudio, plataformas SaaS y soluciones digitales a medida, desarrolladas con los más altos estándares técnicos y visuales.',
      scanning: 'Escaneando portafolio...',
    },
    footer: {
      tagline: 'Creando experiencias digitales memorables y de alto rendimiento.',
      contactTitle: 'Contáctanos',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },
};
