import fs from 'fs';
import crypto from 'crypto';

const INDEXNOW_KEY = 'a4f9d8e2c7b14a6095e3d2c1b8f0a7e4';
const HOST = 'weblunar.com.br';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const GSC_SITE_URL = 'sc-domain:weblunar.com.br';

async function getGscToken() {
  const credsPath = './gsc-credentials.json';
  if (!fs.existsSync(credsPath)) return null;
  const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: creds.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${b64(header)}.${b64(payload)}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(creds.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token;
}

async function runIndexNow() {
  const priorityUrls = [
    'https://weblunar.com.br/',
    'https://weblunar.com.br/calculadora',
    'https://weblunar.com.br/projetos',
    'https://weblunar.com.br/projetos/sinapro',
    'https://weblunar.com.br/projetos/snews',
    'https://weblunar.com.br/projetos/volk',
    'https://weblunar.com.br/projetos/acp',
    'https://weblunar.com.br/solucoes',
    'https://weblunar.com.br/solucoes/wordpress-vs-nextjs-qual-escolher',
    'https://weblunar.com.br/solucoes/landing-page-vs-site-institucional-qual-melhor',
    'https://weblunar.com.br/solucoes/wix-vs-site-profissional-sob-medida',
    'https://weblunar.com.br/solucoes/elementor-vs-codigo-sob-medida-performance',
    'https://weblunar.com.br/solucoes/anuncio-direto-whatsapp-vs-landing-page',
    'https://weblunar.com.br/solucoes/seo-tradicional-vs-seo-programatico-ia',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-florianopolis',
    'https://weblunar.com.br/solucoes/agencia-de-seo-em-florianopolis',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-joinville',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-blumenau',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-balneario-camboriu',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-brasilia',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-sao-paulo',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-sorocaba',
    'https://weblunar.com.br/solucoes/criacao-de-sites-em-porto-alegre',
    'https://weblunar.com.br/solucoes/agencia-de-seo-em-maringa',
    'https://weblunar.com.br/llms.txt',
    'https://weblunar.com.br/llms-full.txt',
  ];

  console.log(`[IndexNow] Enviando ${priorityUrls.length} URLs prioritárias para api.indexnow.org...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: priorityUrls,
    }),
  });

  console.log(`[IndexNow] Status HTTP: ${res.status} (${res.statusText})`);

  const token = await getGscToken();
  if (token) {
    const sitemapUrl = 'https://www.weblunar.com.br/sitemap.xml';
    const gscRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
      {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(`[Google Search Console] Ping Sitemap Status: ${gscRes.status}`);
  }
}

runIndexNow().catch(console.error);
