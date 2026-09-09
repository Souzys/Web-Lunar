import { initTRPC, TRPCError } from "@trpc/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/server/db";

// Context type
export interface CreateContextOptions {
  session: any | null;
}

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await getServerSession(authOptions);
  return {
    db,
    session,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// Proteção estrita para procedimentos administrativos
export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  const userRole = (ctx.session?.user as { role?: string } | undefined)?.role;
  if (!ctx.session || userRole !== "admin") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Acesso restrito. Faça login como administrador para executar esta ação.",
    });
  }

  return next({
    ctx: {
      session: ctx.session,
    },
  });
});
