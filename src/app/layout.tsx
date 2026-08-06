import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { TRPCProvider } from "./trpc-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weblunar.com.br"),
  title: {
    default: "Web Lunar | Sistemas Digitais, Sites & Landing Pages de Alta Conversão",
    template: "%s | Web Lunar",
  },
  description: "Criamos produtos digitais premium, sistemas web de alta performance, landing pages persuasivas e plataformas e-commerce de alto impacto visual.",
  keywords: [
    "Web Lunar",
    "Desenvolvimento Web",
    "Criação de Sites",
    "Landing Pages",
    "Next.js",
    "TypeScript",
    "Software House",
    "Design System",
    "Agência Web",
    "E-commerce",
    "Sistemas Web",
    "SEO Técnico"
  ],
  authors: [{ name: "Web Lunar" }],
  creator: "Web Lunar",
  publisher: "Web Lunar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/?lang=en",
      "es-ES": "/?lang=es",
    },
  },
  openGraph: {
    title: "Web Lunar | Sistemas Digitais & Produtos Web Premium",
    description: "Unimos design visual refinado e engenharia de software de alta performance para criar soluções digitais que geram resultados de verdade.",
    url: "https://weblunar.com.br",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Web Lunar Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Lunar | Sistemas Digitais & Produtos Web Premium",
    description: "Desenvolvimento de sites, landing pages e sistemas digitais de alta velocidade e conversão.",
    images: ["/printvolk.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured Data Schema.org (Google Sitelinks & Organization Rich Snippets)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://weblunar.com.br/#organization",
      "name": "Web Lunar",
      "url": "https://weblunar.com.br",
      "logo": "https://weblunar.com.br/icon.png",
      "description": "Desenvolvimento de produtos digitais premium, sistemas web de alta performance e landing pages de alta conversão.",
      "sameAs": [
        "https://github.com/Souzys/Web-Lunar"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://weblunar.com.br/#website",
      "url": "https://weblunar.com.br",
      "name": "Web Lunar",
      "publisher": {
        "@id": "https://weblunar.com.br/#organization"
      },
      "inLanguage": ["pt-BR", "en-US", "es-ES"]
    },
    {
      "@type": "ItemList",
      "@id": "https://weblunar.com.br/#sitelinks",
      "name": "Navegação Principal Web Lunar",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Serviços",
          "description": "Landing Pages, Sites & Apps, E-commerce, Sistemas de Agendamento, Integrações & Performance.",
          "url": "https://weblunar.com.br/servicos"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Projetos",
          "description": "Cases de sucesso de clientes como Volk, Snews, CAPI Digital, ACP Tax Advisory, ÔSA e Adansonea.",
          "url": "https://weblunar.com.br/projetos"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Sobre Nós",
          "description": "Desenvolvimento full-stack, design autoral e engenharia de software de alta performance.",
          "url": "https://weblunar.com.br/sobre"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contato",
          "description": "Solicite um orçamento para seu projeto web ou sistema com nossa equipe de especialistas.",
          "url": "https://weblunar.com.br/contato"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Blog",
          "description": "Artigos e insights sobre tecnologia, SEO, Next.js e conversão.",
          "url": "https://weblunar.com.br/blog"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} font-sans h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-primary selection:text-white">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y7VHPMMT3L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y7VHPMMT3L');
          `}
        </Script>
        <LanguageProvider>
          <TRPCProvider>
            <Navbar />
            <main className="flex-1 w-full flex flex-col">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </TRPCProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
