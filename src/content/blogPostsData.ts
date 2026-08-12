import { Language } from './translations';

export interface BlogPostDetail {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  sections: Array<{
    heading?: string;
    paragraphs: string[];
    callout?: string;
    list?: string[];
  }>;
  conclusion: string;
}

export const BLOG_POSTS_I18N: Record<Language, Record<string, BlogPostDetail>> = {
  pt: {
    'como-planejar-primeiro-site-profissional': {
      slug: 'como-planejar-primeiro-site-profissional',
      title: 'Como planejar o seu primeiro site profissional: o guia básico',
      date: '12 de Agosto, 2026',
      readTime: '3 min de leitura',
      category: 'Planejamento Web',
      excerpt: 'Do objetivo principal à escolha do conteúdo. Veja o que você realmente precisa definir antes de colocar sua empresa no ar.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      author: {
        name: 'Equipe Web Lunar',
        role: 'Design & Estratégia Digital',
      },
      sections: [
        {
          heading: '1. Defina o objetivo central do seu site',
          paragraphs: [
            'Antes de pensar em cores, logotipo ou imagens, responda a uma pergunta simples: o que uma pessoa deve fazer ao entrar no seu site?',
            'Seja agendar uma conversa no WhatsApp, preencher um formulário de orçamento ou comprar um produto, ter um objetivo claro evita páginas confusas e cheias de informação inútil.',
          ],
          callout: 'Dica de ouro: Um site com um único objetivo claro converte até 3x mais do que um site que tenta falar de tudo ao mesmo tempo.',
        },
        {
          heading: '2. Reúna as informações essenciais',
          paragraphs: [
            'Você não precisa de dezenas de páginas para começar com autoridade. O essencial para um lançamento rápido e eficiente inclui:',
          ],
          list: [
            'Quem é você e qual problema você resolve para o cliente.',
            'Quais serviços ou produtos você oferece com clareza.',
            'Depoimentos ou provas sociais de clientes que já confiaram no seu trabalho.',
            'Um canal direto e fácil de contato (como link do WhatsApp ou formulário ágil).',
          ],
        },
        {
          heading: '3. Priorize a experiência no celular',
          paragraphs: [
            'Hoje, mais de 80% dos acessos chegam por smartphones. Seu site precisa carregar em menos de 2 segundos no 4G, ter botões fáceis de clicar com o polegar e textos legíveis sem precisar dar zoom.',
          ],
        },
      ],
      conclusion: 'Criar um site profissional não precisa ser complicado. Comece com uma base sólida, visual moderno e foco em contato rápido. O restante você expande conforme o negócio cresce.',
    },
    'landing-page-ou-site-institucional': {
      slug: 'landing-page-ou-site-institucional',
      title: 'Landing Page ou Site Institucional: qual é o ideal para você?',
      date: '08 de Agosto, 2026',
      readTime: '4 min de leitura',
      category: 'Estratégia & Conversão',
      excerpt: 'Entenda de forma simples a diferença entre uma página direta para vendas e um site completo com várias seções.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      author: {
        name: 'Equipe Web Lunar',
        role: 'Desenvolvimento & Performance',
      },
      sections: [
        {
          heading: 'O que é uma Landing Page?',
          paragraphs: [
            'A Landing Page é uma página única, sem menu superior complexo ou links para outras páginas. Toda a sua estrutura é construída para guiar o visitante em direção a uma única ação: entrar em contato, pedir um orçamento ou contratar um serviço.',
            'É a melhor escolha para anúncios no Google Ads, campanhas no Instagram e lançamentos de ofertas específicas.',
          ],
        },
        {
          heading: 'O que é um Site Institucional?',
          paragraphs: [
            'Um Site Institucional é composto por várias páginas (Início, Sobre Nós, Serviços, Portfólio, Blog, Contato). Ele funciona como a sede digital da sua empresa, ideal para apresentar a história da marca, equipe, catálogo de soluções e gerar autoridade orgânica no Google (SEO).',
          ],
          list: [
            'Landing Page: Ideal para tráfego pago, lançamentos e campanhas com foco em conversão imediata.',
            'Site Institucional: Ideal para empresas consolidadas, múltiplos serviços e posicionamento de marca a longo prazo.',
          ],
        },
        {
          heading: 'Como escolher para o seu momento?',
          paragraphs: [
            'Se o seu foco agora é gerar leads e vendas rápidas com um orçamento enxuto, comece com uma Landing Page de alto padrão. Se a sua empresa precisa apresentar diversos setores e criar conteúdo recorrente, opte por um Site Institucional.',
          ],
        },
      ],
      conclusion: 'Não existe escolha certa ou errada — existe a ferramenta ideal para a fase atual do seu negócio. Ambas podem trabalhar juntas para maximizar seus resultados.',
    },
    '3-coisas-essenciais-para-passar-confianca': {
      slug: '3-coisas-essenciais-para-passar-confianca',
      title: '3 coisas essenciais que todo site precisa ter para passar confiança',
      date: '02 de Agosto, 2026',
      readTime: '3 min de leitura',
      category: 'Boas Práticas',
      excerpt: 'Design organizado, boa velocidade no celular e botão de WhatsApp visível. O essencial para começar com o pé direito.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      author: {
        name: 'Equipe Web Lunar',
        role: 'UX/UI & Engenharia Web',
      },
      sections: [
        {
          heading: '1. Clareza imediata nos primeiros 3 segundos',
          paragraphs: [
            'Quando alguém entra no seu site, precisa entender em menos de 3 segundos o que você faz e como pode ajudá-lo. Títulos claros, tipografia moderna e hierarquia visual bem definida transmitem profissionalismo instantâneo.',
          ],
        },
        {
          heading: '2. Velocidade e estabilidade impecáveis',
          paragraphs: [
            'Sites lentos que demoram para carregar geram desconfiança imediata. Utilizar tecnologias modernas de desenvolvimento garante carregamento instantâneo, sem travar nem quebrar no celular do cliente.',
          ],
          callout: 'Fato: Mais de 50% dos visitantes abandonam um site se ele demorar mais de 3 segundos para carregar completamente.',
        },
        {
          heading: '3. Prova social e facilidade de contato',
          paragraphs: [
            'Inclua depoimentos reais de clientes, logotipos de parceiros e um botão de WhatsApp sempre acessível. O visitante se sente muito mais seguro para fechar negócio quando percebe que há pessoas reais e acessíveis por trás da empresa.',
          ],
          list: [
            'Depoimentos reais com nome e segmento.',
            'Botão flutuante de WhatsApp direto.',
            'Termos claros, dados de contato e endereço ou atendimento nacional.',
          ],
        },
      ],
      conclusion: 'Confiança não se compra, se constrói nos detalhes. Um site bem construído é o seu melhor vendedor trabalhando 24 horas por dia.',
    },
  },
  en: {
    'como-planejar-primeiro-site-profissional': {
      slug: 'como-planejar-primeiro-site-profissional',
      title: 'How to plan your first professional website: The beginner’s guide',
      date: 'August 12, 2026',
      readTime: '3 min read',
      category: 'Web Planning',
      excerpt: 'From core objectives to key content. What you actually need to define before launching your business online.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      author: {
        name: 'Web Lunar Team',
        role: 'Design & Strategy',
      },
      sections: [
        {
          heading: '1. Define your website’s primary objective',
          paragraphs: [
            'Before picking colors, logos, or visuals, ask yourself one simple question: what is the single action a visitor should take on your site?',
            'Whether it is scheduling a WhatsApp consultation, submitting an inquiry form, or buying a service, having a single focus prevents cluttered and confusing pages.',
          ],
          callout: 'Pro tip: A webpage with one clear call-to-action converts up to 3x higher than pages that try to say everything at once.',
        },
        {
          heading: '2. Gather the essential information',
          paragraphs: [
            'You do not need dozens of pages to start with authority. The essentials for a fast and effective launch include:',
          ],
          list: [
            'Who you are and the exact problem you solve for clients.',
            'Clear descriptions of your core services or products.',
            'Testimonials and social proof from past clients.',
            'A direct, frictionless contact channel (such as WhatsApp or an instant contact form).',
          ],
        },
        {
          heading: '3. Prioritize mobile performance first',
          paragraphs: [
            'Over 80% of web traffic comes from smartphones. Your site must load in under 2 seconds, with thumb-friendly buttons and clear typography that requires no zooming.',
          ],
        },
      ],
      conclusion: 'Building a professional website does not have to be overwhelming. Start with solid foundations, clean modern aesthetics, and fast communication.',
    },
    'landing-page-ou-site-institucional': {
      slug: 'landing-page-ou-site-institucional',
      title: 'Landing Page or Full Website: Which one is right for you?',
      date: 'August 08, 2026',
      readTime: '4 min read',
      category: 'Strategy & Conversion',
      excerpt: 'A simple breakdown between a focused sales landing page and a full corporate multi-page website.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      author: {
        name: 'Web Lunar Team',
        role: 'Engineering & Performance',
      },
      sections: [
        {
          heading: 'What is a Landing Page?',
          paragraphs: [
            'A Landing Page is a standalone single page designed specifically to direct visitors toward one conversion goal: booking a call, requesting a quote, or purchasing an offer.',
            'It is the ideal choice for paid traffic campaigns (Google Ads, Meta Ads) and targeted promotions.',
          ],
        },
        {
          heading: 'What is a Corporate Website?',
          paragraphs: [
            'A Corporate Website consists of multiple pages (Home, About, Services, Portfolio, Blog, Contact). It serves as your brand’s central digital headquarters, establishing long-term credibility and organic search authority (SEO).',
          ],
          list: [
            'Landing Page: Best for paid ad campaigns and fast lead generation.',
            'Corporate Website: Best for established businesses, multiple service lines, and long-term brand authority.',
          ],
        },
        {
          heading: 'How to make the right choice?',
          paragraphs: [
            'If your priority is generating immediate leads with an agile budget, start with a high-end Landing Page. If your company needs to showcase multiple departments and publish content, invest in a Corporate Website.',
          ],
        },
      ],
      conclusion: 'There is no wrong choice — only the right tool for your current business stage. Both can work synergistically to accelerate growth.',
    },
    '3-coisas-essenciais-para-passar-confianca': {
      slug: '3-coisas-essenciais-para-passar-confianca',
      title: '3 essential elements every new website needs to build trust',
      date: 'August 02, 2026',
      readTime: '3 min read',
      category: 'Best Practices',
      excerpt: 'Clean design, fast mobile loading, and visible contact buttons. The fundamentals to start strong.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      author: {
        name: 'Web Lunar Team',
        role: 'UX/UI & Web Engineering',
      },
      sections: [
        {
          heading: '1. Instant clarity within the first 3 seconds',
          paragraphs: [
            'When visitors arrive on your website, they must immediately understand what you do and how you help them. Clear headlines and modern typography convey instant professionalism.',
          ],
        },
        {
          heading: '2. Flawless speed and mobile responsiveness',
          paragraphs: [
            'Slow websites create immediate doubt. Building with modern web technologies ensures sub-second loading without lagging on mobile devices.',
          ],
          callout: 'Fact: Over 50% of visitors bounce if a website takes more than 3 seconds to load.',
        },
        {
          heading: '3. Social proof and accessible communication',
          paragraphs: [
            'Include real customer feedback, partner badges, and an accessible contact button. People feel much more confident closing deals when they see transparent proof and real people.',
          ],
          list: [
            'Real testimonials with names and company roles.',
            'Direct WhatsApp contact widget.',
            'Clear service details and transparent contact info.',
          ],
        },
      ],
      conclusion: 'Trust is built through polished details. A well-engineered website becomes your best sales asset working 24/7.',
    },
  },
  es: {
    'como-planejar-primeiro-site-profissional': {
      slug: 'como-planejar-primeiro-site-profissional',
      title: 'Cómo planificar tu primer sitio web profesional: Guía básica',
      date: '12 de Agosto, 2026',
      readTime: '3 min de lectura',
      category: 'Planificación Web',
      excerpt: 'Del objetivo principal al contenido clave. Lo que necesitas definir antes de lanzar tu negocio en internet.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      author: {
        name: 'Equipo Web Lunar',
        role: 'Diseño y Estrategia Digital',
      },
      sections: [
        {
          heading: '1. Define el objetivo principal de tu sitio web',
          paragraphs: [
            'Antes de pensar en colores o imágenes, responde una pregunta simple: ¿qué acción esperas que realice un visitante al ingresar a tu sitio?',
            'Tener un objetivo claro (agendar por WhatsApp, pedir cotización o comprar) evita páginas confusas y saturadas.',
          ],
          callout: 'Consejo clave: Una página con un único llamado a la acción convierte hasta 3 veces más que un sitio sobrecargado.',
        },
        {
          heading: '2. Reúne la información indispensable',
          paragraphs: [
            'No necesitas decenas de páginas para comenzar con autoridad. Lo esencial para un lanzamiento rápido incluye:',
          ],
          list: [
            'Quién eres y qué problema solucionas a tus clientes.',
            'Tus servicios o productos principales explicados con claridad.',
            'Testimonios o casos de éxito de clientes satisfechos.',
            'Un canal directo y ágil de contacto (WhatsApp o formulario rápido).',
          ],
        },
        {
          heading: '3. Prioriza la velocidad en dispositivos móviles',
          paragraphs: [
            'Más del 80% de las visitas provienen de teléfonos inteligentes. Tu sitio debe cargar en menos de 2 segundos con botones cómodos y textos perfectamente legibles.',
          ],
        },
      ],
      conclusion: 'Crear un sitio web profesional no tiene por qué ser complicado. Comienza con bases sólidas, estética moderna y enfoque en conversión rápida.',
    },
    'landing-page-ou-site-institucional': {
      slug: 'landing-page-ou-site-institucional',
      title: '¿Landing Page o Sitio Web Completo? Cuál elegir',
      date: '08 de Agosto, 2026',
      readTime: '4 min de lectura',
      category: 'Estrategia y Conversión',
      excerpt: 'Conoce la diferencia fundamental entre una página enfocada en ventas y un sitio institucional con varias páginas.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      author: {
        name: 'Equipo Web Lunar',
        role: 'Desarrollo y Rendimiento',
      },
      sections: [
        {
          heading: '¿Qué es una Landing Page?',
          paragraphs: [
            'Es una página única diseñada específicamente para guiar al visitante hacia una sola acción: solicitar una cotización o contratar un servicio.',
            'Es la mejor alternativa para anuncios en Google Ads, Meta Ads y lanzamientos puntuales.',
          ],
        },
        {
          heading: '¿Qué es un Sitio Institucional?',
          paragraphs: [
            'Un portal corporativo con múltiples páginas (Inicio, Nosotros, Servicios, Portafolio, Blog, Contacto). Funciona como la sede digital de tu empresa para posicionamiento y reputación de marca.',
          ],
          list: [
            'Landing Page: Ideal para tráfico pago y captación inmediata de clientes.',
            'Sitio Institucional: Ideal para empresas consolidadas y múltiples líneas de servicios.',
          ],
        },
        {
          heading: '¿Cuál elegir para tu momento actual?',
          paragraphs: [
            'Si buscas resultados rápidos y un presupuesto ágil, comienza con una Landing Page. Si necesitas presentar una estructura corporativa completa, elige un Sitio Institucional.',
          ],
        },
      ],
      conclusion: 'No existe una opción equivocada, sino la herramienta adecuada para el momento de tu negocio.',
    },
    '3-coisas-essenciais-para-passar-confianca': {
      slug: '3-coisas-essenciais-para-passar-confianca',
      title: '3 elementos clave que todo sitio web nuevo necesita para generar confianza',
      date: '02 de Agosto, 2026',
      readTime: '3 min de lectura',
      category: 'Buenas Prácticas',
      excerpt: 'Diseño ordenado, carga rápida en móviles y botón de WhatsApp visible. Lo básico para empezar con éxito.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      author: {
        name: 'Equipo Web Lunar',
        role: 'UX/UI e Ingeniería Web',
      },
      sections: [
        {
          heading: '1. Claridad en los primeros 3 segundos',
          paragraphs: [
            'Al entrar a tu sitio, el visitante debe entender de inmediato qué haces y cómo puedes ayudarle. Titulares claros y tipografía moderna generan confianza al instante.',
          ],
        },
        {
          heading: '2. Velocidad y adaptabilidad móvil',
          paragraphs: [
            'Los sitios lentos generan desconfianza inmediata. La ingeniería web moderna asegura cargas instantáneas sin fallas en dispositivos móviles.',
          ],
          callout: 'Dato: Más del 50% de los usuarios abandonan un sitio si tarda más de 3 segundos en abrir.',
        },
        {
          heading: '3. Prueba social y contacto accesible',
          paragraphs: [
            'Muestra testimonios reales, logos de clientes y un botón de WhatsApp flotante. Las personas se sienten mucho más seguras cuando saben que hay un equipo real disponible.',
          ],
          list: [
            'Testimonios reales con nombre y cargo.',
            'Botón de WhatsApp siempre visible.',
            'Información clara de contacto y servicios.',
          ],
        },
      ],
      conclusion: 'La confianza se construye en los detalles. Un sitio web bien hecho es tu mejor canal de ventas 24/7.',
    },
  },
};

export const STATIC_BLOG_POSTS = BLOG_POSTS_I18N.pt;
