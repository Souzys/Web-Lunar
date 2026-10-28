import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROGRAMMATIC_SEO_PAGES, PROGRAMMATIC_SEO_LIST } from '@/content/programmaticSeoData';
import SolucaoClient from './SolucaoClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROGRAMMATIC_SEO_LIST.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = PROGRAMMATIC_SEO_PAGES[slug];

  if (!page) {
    return {
      title: 'Solução Não Encontrada | Web Lunar',
    };
  }

  const canonicalUrl = `https://weblunar.com.br/solucoes/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: 'Web Lunar',
      type: 'website',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function SolucaoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = PROGRAMMATIC_SEO_PAGES[slug];

  if (!page) {
    notFound();
  }

  const relatedPages = page.relatedSlugs
    .map((relSlug) => PROGRAMMATIC_SEO_PAGES[relSlug])
    .filter(Boolean);

  // Structured Data (Schema.org) for Google Search & AI Assistants (ChatGPT, Gemini, Perplexity)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.title,
        description: page.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'Web Lunar',
          url: 'https://weblunar.com.br',
          telephone: '+55-61-98263-0397',
        },
        areaServed: page.cityName
          ? {
              '@type': 'City',
              name: page.cityName,
              containedInPlace: {
                '@type': 'State',
                name: page.stateCode,
              },
            }
          : {
              '@type': 'Country',
              name: 'Brasil',
            },
        url: `https://weblunar.com.br/solucoes/${page.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: 'https://weblunar.com.br',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Soluções',
            item: 'https://weblunar.com.br/solucoes',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.title,
            item: `https://weblunar.com.br/solucoes/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolucaoClient page={page} relatedPages={relatedPages} />
    </>
  );
}
