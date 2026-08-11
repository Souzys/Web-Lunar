import type { Metadata } from 'next';
import { ContatoClient } from './ContatoClient';

export const metadata: Metadata = {
  title: "Solicite um Orçamento | Contato Web Lunar",
  description: "Fale com nossa equipe de engenharia e design. Solicite um orçamento ágil para criação de landing pages, sites institucionais e sistemas digitais sob medida.",
  alternates: {
    canonical: "https://weblunar.com.br/contato",
  },
  openGraph: {
    title: "Solicite um Orçamento | Contato Web Lunar",
    description: "Fale com nossa equipe de engenharia e design. Solicite um orçamento ágil para criação de landing pages, sites institucionais e sistemas digitais sob medida.",
    url: "https://weblunar.com.br/contato",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Contato Web Lunar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicite um Orçamento | Contato Web Lunar",
    description: "Fale com nossa equipe de engenharia e design. Solicite um orçamento ágil para criação de landing pages, sites institucionais e sistemas digitais sob medida.",
    images: ["/printvolk.webp"],
  },
};

const contactSchema = {
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
          "name": "Contato",
          "item": "https://weblunar.com.br/contato"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contato e Orçamentos - Web Lunar",
      "url": "https://weblunar.com.br/contato",
      "description": "Canal oficial para solicitações de propostas e atendimento técnico da Web Lunar.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Web Lunar",
        "url": "https://weblunar.com.br",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-61-98263-0397",
          "contactType": "customer service",
          "availableLanguage": ["Portuguese", "English", "Spanish"]
        }
      }
    }
  ]
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContatoClient />
    </>
  );
}
