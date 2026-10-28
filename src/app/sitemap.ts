import { MetadataRoute } from 'next';
import { STATIC_BLOG_POSTS } from '@/content/blogPostsData';
import { STATIC_CASE_STUDIES } from '@/app/projetos/[id]/caseStudiesData';
import { PROGRAMMATIC_SEO_LIST } from '@/content/programmaticSeoData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://weblunar.com.br';
  const currentDate = new Date();

  // Static core routes for Google Sitelinks & High Priority Crawl
  const routes = [
    '',
    '/servicos',
    '/solucoes',
    '/projetos',
    '/sobre',
    '/contato',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : (route === '/servicos' || route === '/solucoes' || route === '/projetos' ? 0.9 : 0.8),
  }));

  // Active Project Case Studies (dynamic)
  const projectRoutes = Object.keys(STATIC_CASE_STUDIES).map((slug) => ({
    url: `${baseUrl}/projetos/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Active Blog Articles (dynamic)
  const blogRoutes = Object.keys(STATIC_BLOG_POSTS).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Programmatic SEO Solutions (Service x Region + Specialized Niches)
  const programmaticRoutes = PROGRAMMATIC_SEO_LIST.map((item) => ({
    url: `${baseUrl}/solucoes/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes, ...programmaticRoutes];
}
