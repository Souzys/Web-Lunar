import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";
import { translations } from "@/content/translations";

export const metadata: Metadata = {
  title: "Web Lunar | Sistemas Digitais, Sites & Landing Pages de Alta Conversão",
  description: "Criamos produtos digitais premium, sistemas web de alta performance, landing pages persuasivas e plataformas e-commerce de alto impacto visual.",
  alternates: {
    canonical: "https://weblunar.com.br",
  },
  openGraph: {
    title: "Web Lunar | Sistemas Digitais, Sites & Landing Pages de Alta Conversão",
    description: "Criamos produtos digitais premium, sistemas web de alta performance, landing pages persuasivas e plataformas e-commerce de alto impacto visual.",
    url: "https://weblunar.com.br",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Web Lunar",
      },
    ],
  },
};

export default function Home() {
  const faqQuestions = translations.pt.faq.questions.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  }));

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://weblunar.com.br/#service",
        "name": "Web Lunar",
        "url": "https://weblunar.com.br",
        "logo": "https://weblunar.com.br/icon.png",
        "image": "https://weblunar.com.br/printvolk.webp",
        "telephone": "+55-61-98263-0397",
        "priceRange": "R$ 1.500 - R$ 15.000",
        "description": "Desenvolvimento de landing pages de alta conversão, websites institucionais e sistemas web modernos com Next.js e TypeScript.",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Brasil"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Distrito Federal"
          },
          {
            "@type": "AdministrativeArea",
            "name": "São Paulo"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços Digitais Web Lunar",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Criação de Landing Pages de Alta Conversão"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desenvolvimento de Sites Institucionais Corporativos"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sistemas Web e Plataformas sob Medida"
              }
            }
          ]
        },
        "sameAs": [
          "https://github.com/Souzys/Web-Lunar"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://weblunar.com.br/#faq",
        "mainEntity": faqQuestions,
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
