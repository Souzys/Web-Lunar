import fs from 'fs';
import crypto from 'crypto';

const GA_PROPERTY_ID = '548634990';
const GSC_SITE_URL = 'sc-domain:weblunar.com.br';

async function getAccessToken(scopes) {
  const credsPath = './gsc-credentials.json';
  if (!fs.existsSync(credsPath)) {
    throw new Error('gsc-credentials.json não encontrado na raiz');
  }
  const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: creds.client_email,
    scope: scopes.join(' '),
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

  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.access_token;
}

export async function getFullAudit() {
  const token = await getAccessToken([
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/analytics.readonly',
  ]);

  // 1. Google Search Console - Sitemaps
  const sitemapsRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/sitemaps`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const sitemaps = await sitemapsRes.json();

  // 2. Google Search Console - Top Palavras-Chave (28 dias)
  const gscPerfRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: '2026-10-01',
        endDate: '2026-10-28',
        dimensions: ['query'],
        rowLimit: 5,
      }),
    }
  );
  const gscPerf = await gscPerfRes.json();

  // 3. Google Analytics 4 - Tempo Real
  const gaRealtimeRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runRealtimeReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metrics: [{ name: 'activeUsers' }],
        dimensions: [{ name: 'country' }],
      }),
    }
  );
  const gaRealtime = await gaRealtimeRes.json();

  // 4. Google Analytics 4 - Páginas Mais Visitadas (Últimos 7 dias)
  const gaPagesRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'screenPageViews' },
          { name: 'sessions' },
        ],
        dimensions: [{ name: 'pagePath' }],
        limit: 10,
      }),
    }
  );
  const gaPages = await gaPagesRes.json();

  return { sitemaps, gscPerf, gaRealtime, gaPages };
}

export async function inspectUrl(url) {
  const token = await getAccessToken(['https://www.googleapis.com/auth/webmasters.readonly']);
  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inspectionUrl: url,
      siteUrl: GSC_SITE_URL,
    }),
  });
  return await res.json();
}

if (process.argv[1]?.endsWith('gsc-audit.mjs')) {
  const targetUrl = process.argv[2];
  if (targetUrl) {
    inspectUrl(targetUrl).then((d) => console.log(JSON.stringify(d, null, 2)));
  } else {
    getFullAudit().then((d) => console.log(JSON.stringify(d, null, 2)));
  }
}
