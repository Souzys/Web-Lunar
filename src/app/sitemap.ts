import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://weblunar.com.br';
  const currentDate = new Date();

  // Static routes
  const routes = [
    '',
    '/sobre',
    '/servicos',
    '/projetos',
    '/contato',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Project pages
  const projectSlugs = [
    'snews',
    'volk',
    'capi',
    'adansonea',
    'acp',
    'capi-midia',
    'volk-mkt',
    'lumina-app',
    'nex-fintech',
    'aurora-saas',
    'pulse-health',
  ];

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projetos/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
