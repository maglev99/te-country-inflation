/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { exampleRouter } from "~/server/api/routers/example";
import { testRouter } from "~/server/api/routers/test";
import { teRouter } from "./routers/teRouter";

import { createTRPCRouter } from "~/server/api/trpc";



/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  test: testRouter,
  teRouter: teRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
