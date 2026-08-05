import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "./trpc-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Web Lunar | Sistemas Digitais",
  description: "Criamos produtos digitais premium de alta performance e conversão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-primary selection:text-white">
        <TRPCProvider>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </TRPCProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
