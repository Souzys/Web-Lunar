import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/solucoes/', '/projetos/', '/blog/', '/calculadora'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://weblunar.com.br/sitemap.xml',
  };
}
