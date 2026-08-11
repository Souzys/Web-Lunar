import type { Metadata } from 'next';
import { ProjetosClient } from './ProjetosClient';

export const metadata: Metadata = {
  title: "Portfólio de Projetos & Cases de Sucesso",
  description: "Explore os cases de sucesso e projetos de alta performance da Web Lunar: plataformas web, landing pages e sistemas para marcas como Snews, Volk Presenter e CAPI Digital.",
  alternates: {
    canonical: "https://weblunar.com.br/projetos",
  },
  openGraph: {
    title: "Portfólio de Projetos & Cases de Sucesso | Web Lunar",
    description: "Explore os cases de sucesso e projetos de alta performance da Web Lunar: plataformas web, landing pages e sistemas para marcas como Snews, Volk Presenter e CAPI Digital.",
    url: "https://weblunar.com.br/projetos",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Cases de Sucesso Web Lunar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Projetos & Cases de Sucesso | Web Lunar",
    description: "Explore os cases de sucesso e projetos de alta performance da Web Lunar: plataformas web, landing pages e sistemas para marcas como Snews, Volk Presenter e CAPI Digital.",
    images: ["/printvolk.webp"],
  },
};

const collectionSchema = {
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
          "name": "Projetos",
          "item": "https://weblunar.com.br/projetos"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "name": "Portfólio e Cases de Sucesso Web Lunar",
      "url": "https://weblunar.com.br/projetos",
      "description": "Projetos digitais desenvolvidos com Next.js, TypeScript e animações de alta performance.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "SNEWS Broadcast Solutions",
          "url": "https://weblunar.com.br/projetos/snews",
          "description": "Website institucional internacionalizado para líder em broadcast."
        },
        {
          "@type": "CreativeWork",
          "name": "VOLK Presenter",
          "url": "https://weblunar.com.br/projetos/volk",
          "description": "Experiência web imersiva a 60 FPS para plataforma de gráficos."
        },
        {
          "@type": "CreativeWork",
          "name": "CAPI Digital",
          "url": "https://weblunar.com.br/projetos/capi",
          "description": "Landing page institucional para assistente editorial com IA."
        },
        {
          "@type": "CreativeWork",
          "name": "Adansonea",
          "url": "https://weblunar.com.br/projetos/adansonea",
          "description": "Landing page para consultoria global de liderança."
        },
        {
          "@type": "CreativeWork",
          "name": "ACP Tax Advisory",
          "url": "https://weblunar.com.br/projetos/acp",
          "description": "Website institucional para consultoria fiscal norte-americana."
        },
        {
          "@type": "CreativeWork",
          "name": "ÔSA Branding Studio",
          "url": "https://weblunar.com.br/projetos/osa",
          "description": "Landing page conceitual para estúdio europeu de design."
        }
      ]
    }
  ]
};

export default function ProjetosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProjetosClient />
    </>
  );
}
