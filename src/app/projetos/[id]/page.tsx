import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STATIC_CASE_STUDIES } from './caseStudiesData';
import { ProjetoDetalheClient } from './ProjetoDetalheClient';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return Object.keys(STATIC_CASE_STUDIES).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = STATIC_CASE_STUDIES[id];

  if (!project) {
    return {
      title: "Projeto não encontrado | Web Lunar",
      description: "Estudo de caso não encontrado.",
    };
  }

  const title = `Case Study: ${project.title} | Web Lunar`;
  const description = project.tagline || project.overview.slice(0, 160);
  const url = `https://weblunar.com.br/projetos/${id}`;
  const ogImage = project.image.startsWith('http') ? project.image : `https://weblunar.com.br${project.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Web Lunar",
      locale: "pt_BR",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1902,
          height: 885,
          alt: `Case Study ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjetoDetalhePage({ params }: Props) {
  const { id } = await params;
  const project = STATIC_CASE_STUDIES[id] || null;

  if (!project) {
    notFound();
  }

  const caseStudySchema = {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://weblunar.com.br/projetos/${id}`
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "name": `${project.title} - Case Study`,
        "headline": project.tagline,
        "description": project.overview,
        "url": `https://weblunar.com.br/projetos/${id}`,
        "image": `https://weblunar.com.br${project.image}`,
        "creator": {
          "@type": "Organization",
          "name": "Web Lunar",
          "url": "https://weblunar.com.br"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Web Lunar",
          "url": "https://weblunar.com.br"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <ProjetoDetalheClient caseStudy={project} />
    </>
  );
}
