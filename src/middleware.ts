import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  // Detecta subdomínio de links (ex: links.weblunar.com.br, links.localhost:3000)
  const isLinksSubdomain =
    hostname.startsWith("links.") ||
    hostname.includes("links.weblunar.com.br");

  if (isLinksSubdomain) {
    // Se acessar a raiz do subdomínio ou qualquer rota interna, reescreve para /links
    if (!pathname.startsWith("/links")) {
      return NextResponse.rewrite(
        new URL(`/links${pathname === "/" ? "" : pathname}`, req.url)
      );
    }
  }

  // Se a rota for administrativa (exceto tela de login), exige autenticação
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;

    if (!secret) {
      console.error("[Middleware] NEXTAUTH_SECRET não está configurado no ambiente.");
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("error", "Configuration");
      return NextResponse.redirect(loginUrl);
    }

    const token = await getToken({
      req,
      secret,
    });

    if (!token) {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Arquivos estáticos com extensão (.png, .jpg, .svg, .webp, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

