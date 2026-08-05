import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Cloudflare envia o código do país de 2 letras no cabeçalho cf-ipcountry (ex: BR, US, ES, MX, AR)
  const country = request.headers.get('cf-ipcountry') || request.headers.get('x-country-code') || '';
  
  return NextResponse.json({ 
    country: country.toUpperCase(),
  });
}
