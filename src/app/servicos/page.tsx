import type { Metadata } from 'next';
import { ServicosClient } from './ServicosClient';

export const metadata: Metadata = {
  title: "Serviços de Desenvolvimento Web, Landing Pages & Sistemas",
  description: "Landing Pages de alta conversão, Sites Institucionais em Next.js, E-commerces escaláveis, Sistemas de Agendamento e Otimização de Performance.",
  alternates: {
    canonical: "https://weblunar.com.br/servicos",
  },
  openGraph: {
    title: "Serviços de Desenvolvimento Web & Sistemas Digitais | Web Lunar",
    description: "Landing Pages de alta conversão, Sites Institucionais em Next.js, E-commerces escaláveis, Sistemas de Agendamento e Otimização de Performance.",
    url: "https://weblunar.com.br/servicos",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Serviços Web Lunar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Desenvolvimento Web & Sistemas Digitais | Web Lunar",
    description: "Landing Pages de alta conversão, Sites Institucionais em Next.js, E-commerces escaláveis, Sistemas de Agendamento e Otimização de Performance.",
    images: ["/printvolk.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://weblunar.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Serviços",
          "item": "https://weblunar.com.br/servicos"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Serviços de Desenvolvimento Web Lunar",
      "provider": {
        "@type": "Organization",
        "name": "Web Lunar",
        "url": "https://weblunar.com.br"
      },
      "serviceType": "Desenvolvimento Web, Landing Pages, Sistemas Web, E-commerce, Integrações e Performance SEO",
      "areaServed": "BR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Serviços Web Lunar",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Pages de Alta Conversão",
              "description": "Páginas únicas de alta performance projetadas para converter visitantes em clientes."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sites Institucionais & Apps",
              "description": "Sites e aplicações completas em React e Next.js com design system personalizado."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plataformas E-commerce",
              "description": "Lojas virtuais robustas com checkout otimizado e integração de pagamentos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sistemas de Agendamento",
              "description": "Automação de reservas e calendários em tempo real com confirmações automáticas."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integrações & APIs",
              "description": "Conexão de CRMs, ERPs, pixels e fluxos automáticos via webhooks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Performance Técnica",
              "description": "Auditoria de Core Web Vitals, velocidade sub-segundo e posicionamento no Google."
            }
          }
        ]
      }
    }
  ]
};

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicosClient />
    </>
  );
}
