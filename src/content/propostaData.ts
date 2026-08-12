export interface PropostaConfig {
  empresa: {
    nome: string;
    tagline: string;
    site: string;
    email: string;
    whatsapp: string;
    cidade: string;
  };
  proposta: {
    codigo: string;
    dataEmissao: string;
    validade: string;
  };
  cliente: {
    nome: string;
    empresa: string;
    cargo?: string;
    email: string;
    whatsapp: string;
    cidade?: string;
  };
  projeto: {
    titulo: string;
    categoria: string;
    resumo: string;
    objetivos: string[];
  };
  etapas: Array<{
    fase: string;
    titulo: string;
    duracao: string;
    descricao: string;
    entregaveis: string[];
  }>;
  diferenciais: string[];
  investimento: {
    valorTotal: string;
    moeda: string;
    condicoes: Array<{
      titulo: string;
      descricao: string;
      destaque?: boolean;
    }>;
    incluso: string[];
    naoIncluso: string[];
  };
  termos: string[];
}

export const PROPOSTA_PADRAO: PropostaConfig = {
  empresa: {
    nome: "Web Lunar",
    tagline: "Engenharia de Software & Design Digital de Alta Performance",
    site: "https://weblunar.com.br",
    email: "contato@weblunar.com.br",
    whatsapp: "+55 (61) 98263-0397",
    cidade: "Brasil · Atendimento Nacional & Internacional",
  },
  proposta: {
    codigo: "PR-2026-0812",
    dataEmissao: "12 de Agosto de 2026",
    validade: "10 dias corridos",
  },
  cliente: {
    nome: "Lucas Pinheiro",
    empresa: "Empresa do Cliente",
    cargo: "Diretor / Gestor",
    email: "cliente@empresa.com.br",
    whatsapp: "+55 (11) 99999-9999",
    cidade: "São Paulo - SP",
  },
  projeto: {
    titulo: "Desenvolvimento de Plataforma Web & Landing Page de Alta Conversão",
    categoria: "Engenharia Front-End, UI/UX & Integrações",
    resumo: "Criação e desenvolvimento de uma presença digital de alto padrão, combinando estética futurista/minimalista com tecnologia moderna (Next.js, TypeScript e Tailwind CSS) para garantir carregamento instantâneo, autoridade de marca e máxima taxa de conversão de novos clientes.",
    objetivos: [
      "Desenvolver uma interface visual moderna e exclusiva, alinhada ao posicionamento de mercado da empresa.",
      "Garantir carregamento sub-segundo no celular e computador com pontuação de 95+ no Google PageSpeed.",
      "Implementar fluxos diretos de contato e captura de leads via WhatsApp e formulário integrado.",
      "Estruturar SEO técnico completo e arquitetura preparada para anúncios no Google e Meta.",
    ],
  },
  etapas: [
    {
      fase: "Fase 01",
      titulo: "Briefing Estratégico & Wireframing UI/UX",
      duracao: "3 a 5 dias",
      descricao: "Alinhamento aprofundado dos requisitos, definição da arquitetura de informação, tom de voz e criação de protótipos de alta fidelidade.",
      entregaveis: [
        "Mapeamento de jornada do usuário",
        "Protótipo interativo no Figma",
        "Paleta de cores e tipografia de alto impacto",
      ],
    },
    {
      fase: "Fase 02",
      titulo: "Desenvolvimento Front-End & Animações",
      duracao: "5 a 8 dias",
      descricao: "Codificação completa com Next.js (App Router), TypeScript e Tailwind CSS, incluindo micro-interações fluidas a 60 FPS.",
      entregaveis: [
        "Código 100% responsivo (Mobile First)",
        "Animações suaves com Framer Motion / GSAP",
        "Componentes modulares e reutilizáveis",
      ],
    },
    {
      fase: "Fase 03",
      titulo: "Integrações, Testes de Performance & Deploy",
      duracao: "3 a 5 dias",
      descricao: "Configuração de formulários, botões inteligentes de WhatsApp, pixels de rastreamento (Meta/Google), auditoria de segurança e publicação final em nuvem.",
      entregaveis: [
        "Integração com e-mail e WhatsApp",
        "Configuração de domínio próprio e certificado SSL",
        "Deploy em infraestrutura Edge Global",
        "Relatório de Core Web Vitals (Performance)",
      ],
    },
  ],
  diferenciais: [
    "Design 100% autoral e sob medida (sem templates genéricos pré-prontos)",
    "Arquitetura moderna com Next.js (mesma tecnologia usada por grandes empresas globais)",
    "Otimização extrema para carregar em menos de 2 segundos no 4G",
    "Suporte prioritário pós-entrega durante 30 dias",
  ],
  investimento: {
    valorTotal: "R$ 4.800,00",
    moeda: "BRL",
    condicoes: [
      {
        titulo: "À Vista via Pix (5% de Desconto)",
        descricao: "R$ 4.560,00 na aprovação da proposta.",
        destaque: true,
      },
      {
        titulo: "Parcelado (50% Entrada + 50% na Entrega)",
        descricao: "R$ 2.400,00 no início do projeto + R$ 2.400,00 após aprovação final e deploy.",
      },
      {
        titulo: "Cartão de Crédito",
        descricao: "Em até 12x via link seguro de pagamento (com taxas da operadora).",
      },
    ],
    incluso: [
      "Todo o desenvolvimento visual e técnico previsto no escopo",
      "Otimização completa de SEO técnico e tags OpenGraph",
      "Configuração de domínio, DNS e certificado de segurança HTTPS",
      "30 dias de suporte e garantia pós-lançamento para ajustes",
      "Treinamento em vídeo explicando como gerenciar e atualizar o site",
    ],
    naoIncluso: [
      "Taxa anual de registro de domínio (ex: registro.br ~R$ 40/ano)",
      "Custos de campanhas de tráfego pago (Google Ads, Meta Ads)",
      "Produção de fotos ou vídeos profissionais presenciais",
    ],
  },
  termos: [
    "O prazo de execução começa a contar a partir do envio de todos os materiais do cliente e confirmação do pagamento de entrada.",
    "A proposta é válida por 10 dias corridos a partir da data de emissão.",
    "Após a entrega final e aprovação, o cliente receberá acesso irrestrito ao código-fonte e arquivos do projeto.",
  ],
};
