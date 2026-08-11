import type { Metadata } from 'next';
import { SobreClient } from './SobreClient';

export const metadata: Metadata = {
  title: "Sobre a Web Lunar | Engenharia de Software & Design Digital de Elite",
  description: "Conheça a Web Lunar: unimos design visual refinado e engenharia full-stack de alta performance para construir ecossistemas digitais escaláveis e à prova de falhas.",
  alternates: {
    canonical: "https://weblunar.com.br/sobre",
  },
  openGraph: {
    title: "Sobre a Web Lunar | Engenharia de Software & Design Digital",
    description: "Conheça a Web Lunar: unimos design visual refinado e engenharia full-stack de alta performance para construir ecossistemas digitais escaláveis e à prova de falhas.",
    url: "https://weblunar.com.br/sobre",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Sobre a Web Lunar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Web Lunar | Engenharia de Software & Design Digital",
    description: "Conheça a Web Lunar: unimos design visual refinado e engenharia full-stack de alta performance para construir ecossistemas digitais escaláveis e à prova de falhas.",
    images: ["/printvolk.webp"],
  },
};

const aboutSchema = {
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
          "name": "Sobre Nós",
          "item": "https://weblunar.com.br/sobre"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "name": "Sobre a Web Lunar",
      "url": "https://weblunar.com.br/sobre",
      "description": "Engenharia de software de elite e design digital focado em alta conversão e estabilidade de infraestrutura.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Web Lunar",
        "url": "https://weblunar.com.br",
        "logo": "https://weblunar.com.br/icon.png",
        "foundingDate": "2021",
        "knowsAbout": [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "GSAP Animations",
          "SEO Técnico",
          "Arquitetura Full-Stack",
          "Design System"
        ]
      }
    }
  ]
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <SobreClient />
    </>
  );
}
