import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
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

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Se a rota for administrativa, exige autenticação (exceto tela de login)
        if (req.nextUrl.pathname.startsWith("/admin")) {
          if (req.nextUrl.pathname.startsWith("/admin/login")) {
            return true;
          }
          return !!token;
        }
        // Todas as outras rotas (incluindo subdomínios e páginas públicas) são liberadas
        return true;
      },
    },
    pages: {
      signIn: "/admin/login",
    },
  }
);

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

