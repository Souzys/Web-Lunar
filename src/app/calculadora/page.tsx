import { Metadata } from 'next';
import CalculadoraClient from './CalculadoraClient';

export const metadata: Metadata = {
  title: 'Calculadora e Simulador de Orçamento de Site Profissional | Web Lunar',
  description:
    'Descubra em 30 segundos a tecnologia ideal (Next.js ou WordPress), o prazo estimado e o escopo recomendado para criar seu site profissional ou landing page.',
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
          '@type': 'Organization',
          name: 'Web Lunar',
          url: 'https://weblunar.com.br',
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
              text: 'Landing pages levam de 5 a 12 dias úteis, enquanto sites institucionais completos levam de 10 a 20 dias úteis, conforme a urgência e os módulos escolhidos no simulador.',
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
