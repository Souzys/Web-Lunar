import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Web Lunar | Sistemas Digitais, Sites & Landing Pages de Alta Conversão",
  description: "Criamos produtos digitais premium, sistemas web de alta performance, landing pages persuasivas e plataformas e-commerce de alto impacto visual.",
  alternates: {
    canonical: "https://weblunar.com.br",
  },
  openGraph: {
    title: "Web Lunar | Sistemas Digitais, Sites & Landing Pages de Alta Conversão",
    description: "Criamos produtos digitais premium, sistemas web de alta performance, landing pages persuasivas e plataformas e-commerce de alto impacto visual.",
    url: "https://weblunar.com.br",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Web Lunar",
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
