import { MetadataRoute } from 'next';
import { STATIC_BLOG_POSTS } from '@/content/blogPostsData';
import { STATIC_CASE_STUDIES } from '@/app/projetos/[id]/caseStudiesData';
import { INDEXABLE_PROGRAMMATIC_SEO_LIST } from '@/content/programmaticSeoData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://weblunar.com.br';

  const coreLastMod = new Date('2026-11-19T00:00:00.000Z');
  const projectLastMod = new Date('2026-10-15T00:00:00.000Z');
  const blogLastMod = new Date('2026-08-12T00:00:00.000Z');
  const solucoesLastMod = new Date('2026-11-19T00:00:00.000Z');

  // Core routes
  const routes: MetadataRoute.Sitemap = [
    '',
    '/servicos',
    '/solucoes',
    '/calculadora',
    '/projetos',
    '/sobre',
    '/contato',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: coreLastMod,
  }));

  // Active Project Case Studies
  const projectRoutes: MetadataRoute.Sitemap = Object.keys(STATIC_CASE_STUDIES).map((slug) => ({
    url: `${baseUrl}/projetos/${slug}`,
    lastModified: projectLastMod,
  }));

  // Active Blog Articles
  const blogRoutes: MetadataRoute.Sitemap = Object.keys(STATIC_BLOG_POSTS).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: blogLastMod,
  }));

  // Indexable Solutions (45 base niches + 6 high-intent comparisons; city doorway pages excluded)
  const solutionRoutes: MetadataRoute.Sitemap = INDEXABLE_PROGRAMMATIC_SEO_LIST.map((item) => ({
    url: `${baseUrl}/solucoes/${item.slug}`,
    lastModified: solucoesLastMod,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes, ...solutionRoutes];
}
