import { Metadata } from 'next';
import CalculadoraClient from './CalculadoraClient';

export const metadata: Metadata = {
  title: 'Simulador de Projeto, Prazo e Orçamento',
  description:
    'Responda 4 perguntas rápidas e descubra o formato ideal, o prazo estimado e o escopo recomendado para seu site, loja virtual ou sistema sob medida.',
  alternates: {
    canonical: 'https://weblunar.com.br/calculadora',
  },
  openGraph: {
    title: 'Simulador Inteligente de Escopo e Orçamento de Site | Web Lunar',
    description:
      'Ferramenta gratuita: simule o escopo do seu site, compare Next.js vs WordPress e receba o diagnóstico técnico instantâneo.',
    url: 'https://weblunar.com.br/calculadora',
    siteName: 'Web Lunar',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/printvolk.webp', width: 1902, height: 885, alt: 'Simulador de Orçamento Web Lunar' }],
  },
};

export default function CalculadoraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Simulador e Calculadora de Escopo de Site Web Lunar',
        url: 'https://weblunar.com.br/calculadora',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL',
        },
        description:
          'Ferramenta interativa gratuita para simular a arquitetura tecnológica (Next.js vs WordPress), prazo e recursos de sites institucionais, landing pages e sistemas web.',
        creator: {
          '@id': 'https://weblunar.com.br/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como saber se meu site deve ser feito em WordPress ou Next.js?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O simulador analisa sua necessidade de velocidade no Google PageSpeed, frequência de atualização de conteúdo e meta de escala em SEO para recomendar entre WordPress Corporativo (padrão Sinapro/SC) ou Next.js de alta performance (padrão SNEWS).',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo leva para criar um site profissional na Web Lunar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Landing pages levam de 7 a 14 dias úteis, sites institucionais completos levam de 15 a 25 dias úteis (3 a 5 semanas) e e-commerces ou sistemas web sob medida levam de 20 a 40 dias úteis (4 a 8 semanas).',
            },
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
      <CalculadoraClient />
    </>
  );
}
