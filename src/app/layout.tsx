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
import ClarityInit from "@/components/analytics/ClarityInit";

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
    default: "Web Lunar | Agência de Criação de Sites Profissionais, Landing Pages e E-commerce",
    template: "%s | Web Lunar",
  },
  description: "Criação de sites profissionais que geram resultados reais. Desenvolvemos sites institucionais, landing pages de alta conversão e lojas virtuais otimizadas para o Google.",
  keywords: [
    "Web Lunar",
    "Criação de Sites",
    "Criação de Sites Profissionais",
    "Empresa de Criação de Sites",
    "Agência de Sites",
    "Desenvolvimento de Sites",
    "Criar Site Profissional",
    "Landing Page de Alta Conversão",
    "Site Institucional",
    "Criação de Loja Virtual",
    "E-commerce",
    "Orçamento de Site",
    "SEO para Sites"
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
    languages: {
      "pt-BR": "https://weblunar.com.br",
      "en-US": "https://weblunar.com.br/?lang=en",
      "es-ES": "https://weblunar.com.br/?lang=es",
    },
  },
  openGraph: {
    title: "Web Lunar | Criação de Sites Profissionais que Geram Resultados Reais",
    description: "Sites profissionais, rápidos, otimizados para o Google e feitos para converter visitantes em orçamentos no seu WhatsApp.",
    url: "https://weblunar.com.br",
    siteName: "Web Lunar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/printvolk.webp",
        width: 1902,
        height: 885,
        alt: "Web Lunar - Agência de Criação de Sites Profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Lunar | Criação de Sites Profissionais que Geram Resultados Reais",
    description: "Sites profissionais, landing pages e e-commerces otimizados para vender todos os dias no Google.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-61-98263-0397",
        "contactType": "customer service",
        "availableLanguage": ["Portuguese", "English", "Spanish"]
      },
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
        <ClarityInit />
      </body>
    </html>
  );
}
