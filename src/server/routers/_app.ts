import { z } from "zod";
import { createTRPCRouter, publicProcedure, adminProcedure } from "../trpc";
import { sendContactEmail } from "../email";

export const appRouter = createTRPCRouter({
  // Project Procedures
  getProjects: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  getFeaturedProjects: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
    });
  }),

  getProjectById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: { id: input.id },
      });
    }),

  createProject: adminProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        content: z.string().optional(),
        image: z.string(),
        liveUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        tags: z.array(z.string()),
        category: z.string(),
        featured: z.boolean().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: input,
      });
    }),

  deleteProject: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.delete({
        where: { id: input.id },
      });
    }),

  // Contact/Message Procedures
  submitMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
        email: z.string().email("E-mail inválido"),
        subject: z.string().optional(),
        content: z.string().min(5, "A mensagem deve ter pelo menos 5 caracteres"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      let savedMessage = null;
      try {
        savedMessage = await ctx.db.message.create({
          data: input,
        });
      } catch (err) {
        console.warn("[DB Warning] Não foi possível salvar mensagem no banco de dados:", err);
      }

      // Dispara envio de e-mail para lucasjobtech@gmail.com
      const emailResult = await sendContactEmail(input);

      return {
        success: true,
        savedMessage,
        emailResult,
      };
    }),

  getMessages: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.message.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  markMessageRead: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.message.update({
        where: { id: input.id },
        data: { read: true },
      });
    }),
});

export type AppRouter = typeof appRouter;
