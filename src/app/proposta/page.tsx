import type { Metadata } from 'next';
import { PropostaClient } from './PropostaClient';
import { PROPOSTA_PADRAO } from '@/content/propostaData';

export const metadata: Metadata = {
  title: "Proposta Comercial | Web Lunar",
  description: "Modelo de proposta comercial executiva de desenvolvimento web e design digital.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PropostaPage() {
  return <PropostaClient initialData={PROPOSTA_PADRAO} />;
}
