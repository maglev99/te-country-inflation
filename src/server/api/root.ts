import { teRouter } from "./routers/teRouter";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  teRouter: teRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
