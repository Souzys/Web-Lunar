import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Sem Hype (@tech.sem.hype) | Links Oficiais & Achados Tech",
  description:
    "Tecnologia descomplicada, reviews sinceros e as melhores promoções e achados tech sem enrolação. Confira as ofertas exclusivas e produtos recomendados.",
  openGraph: {
    title: "Tech Sem Hype (@tech.sem.hype) | Links & Achados Tech",
    description:
      "Tecnologia descomplicada, reviews sinceros e as melhores ofertas de gadgets testadas por @tech.sem.hype.",
    url: "https://links.weblunar.com.br",
    siteName: "Tech Sem Hype",
    images: [
      {
        url: "/links/techsemhype-logo.jpg",
        width: 800,
        height: 800,
        alt: "Tech Sem Hype",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Sem Hype (@tech.sem.hype) | Links Oficiais",
    description:
      "Reviews sinceros, gadgets e as melhores ofertas tech sem enrolação.",
    images: ["/links/techsemhype-logo.jpg"],
  },
  icons: {
    icon: "/links/techsemhype-logo.jpg",
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
