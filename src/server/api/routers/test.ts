import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const testRouter = createTRPCRouter({
  displayTest: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        display: `Testing ${input.text}`,
      };
    }),
});