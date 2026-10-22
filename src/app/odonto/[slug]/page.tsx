import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ClienteData } from "@/types/cliente";
import LandingPageTemplate from "@/components/odonto/LandingPageTemplate";

function getClienteData(slug: string): ClienteData | null {
  const filePath = path.join(process.cwd(), "src", "config", "clientes", `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent) as ClienteData;
}

export async function generateStaticParams() {
  const clientesDir = path.join(process.cwd(), "src", "config", "clientes");
  if (!fs.existsSync(clientesDir)) {
    return [];
  }
  const files = fs.readdirSync(clientesDir);
  return files
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(".json", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cliente = getClienteData(slug);
  if (!cliente) return {};

  return {
    title: `${cliente.nomeClinica.trim()} | ${cliente.cidadeBairro}`,
    description: cliente.hero.subtitulo,
    openGraph: {
      title: `${cliente.nomeClinica.trim()} | ${cliente.cidadeBairro}`,
      description: cliente.hero.subtitulo,
      images: cliente.imagemHero ? [cliente.imagemHero] : [],
    },
  };
}

export default async function DynamicOdontoLeadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cliente = getClienteData(slug);

  if (!cliente) {
    notFound();
  }

  return <LandingPageTemplate cliente={cliente} />;
}
