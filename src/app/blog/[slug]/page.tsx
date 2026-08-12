import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STATIC_BLOG_POSTS } from '@/content/blogPostsData';
import { ArtigoClient } from './ArtigoClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(STATIC_BLOG_POSTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = STATIC_BLOG_POSTS[slug];

  if (!post) {
    return {
      title: "Artigo não encontrado | Web Lunar",
      description: "Artigo do blog não encontrado.",
    };
  }

  const title = `${post.title} | Blog Web Lunar`;
  const description = post.excerpt;
  const url = `https://weblunar.com.br/blog/${slug}`;
  const ogImage = post.image.startsWith('http') ? post.image : `https://weblunar.com.br${post.image}`;

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
      publishedTime: "2026-08-12T10:00:00.000Z",
      authors: [post.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
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

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const post = STATIC_BLOG_POSTS[slug] || null;

  if (!post) {
    notFound();
  }

  const articleSchema = {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://weblunar.com.br/blog/${slug}`
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": "2026-08-12T10:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": post.author.name
        },
        "publisher": {
          "@type": "Organization",
          "name": "Web Lunar",
          "url": "https://weblunar.com.br"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://weblunar.com.br/blog/${slug}`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArtigoClient post={post} />
    </>
  );
}
