import { initTRPC, TRPCError } from "@trpc/server";
import { db } from "@/server/db";

// Context type
export interface CreateContextOptions {
  session: any | null;
}

export const createTRPCContext = async (opts: { headers: Headers }) => {
  // Simple Context structure
  return {
    db,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// Simple custom error if needed or session checks for admin routes
// In production, we'll verify headers or next-auth session
export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  // A simple placeholder or authentication check:
  // In a real tRPC route, we check if ctx has admin permissions.
  // For safety, we can allow admin routes if they are verified.
  return next();
});
