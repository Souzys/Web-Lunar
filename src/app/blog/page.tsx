import type { Metadata } from 'next';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = {
  title: "Blog & Insights | Tecnologia, Next.js, SEO e Conversão",
  description: "Artigos, tutoriais e análises sobre desenvolvimento web moderno, Next.js, otimização de conversão, UX/UI e arquitetura de software de alta performance.",
  alternates: {
    canonical: "https://weblunar.com.br/blog",
  },
  openGraph: {
    title: "Blog & Insights de Tecnologia & Design | Web Lunar",
    description: "Artigos, tutoriais e análises sobre desenvolvimento web moderno, Next.js, otimização de conversão, UX/UI e arquitetura de software de alta performance.",
    url: "https://weblunar.com.br/blog",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Blog Web Lunar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights de Tecnologia & Design | Web Lunar",
    description: "Artigos, tutoriais e análises sobre desenvolvimento web moderno, Next.js, otimização de conversão, UX/UI e arquitetura de software de alta performance.",
    images: ["/printvolk.webp"],
  },
};

const blogSchema = {
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
          "name": "Blog",
          "item": "https://weblunar.com.br/blog"
        }
      ]
    },
    {
      "@type": "Blog",
      "name": "Blog Web Lunar - Engenharia & Design",
      "url": "https://weblunar.com.br/blog",
      "description": "Artigos sobre arquitetura Next.js, performance web e estratégias de conversão.",
      "publisher": {
        "@type": "Organization",
        "name": "Web Lunar",
        "url": "https://weblunar.com.br"
      }
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogClient />
    </>
  );
}
