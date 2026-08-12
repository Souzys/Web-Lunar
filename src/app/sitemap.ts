import { MetadataRoute } from 'next';
import { STATIC_BLOG_POSTS } from '@/content/blogPostsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://weblunar.com.br';
  const currentDate = new Date();

  // Static core routes for Google Sitelinks & High Priority Crawl
  const routes = [
    '',
    '/servicos',
    '/projetos',
    '/sobre',
    '/contato',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : (route === '/servicos' || route === '/projetos' ? 0.9 : 0.8),
  }));

  // Active Project Case Studies
  const projectSlugs = [
    'snews',
    'volk',
    'capi',
    'adansonea',
    'acp',
    'osa',
  ];

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projetos/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Active Blog Articles
  const blogRoutes = Object.keys(STATIC_BLOG_POSTS).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
