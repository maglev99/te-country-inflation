/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { type Data } from "~/Types/Data";

export const teRouter = createTRPCRouter({
  getData: publicProcedure
    .input(
      z.object({
        country1: z.string(),
        country2: z.string(),
        country3: z.string(),
        rangeStart: z.string(),
        rangeEnd: z.string(),
      })
    )
    .query(async ({ input }) => {
      const headers = {
        Accept: "Application/xml",
        Authorization: `Client ${process.env.TE_API_KEY || ""}`,
      };

      const path =
        `/historical/country/${input.country1.toLowerCase()}, ${input.country2.toLowerCase()}, ${input.country3.toLowerCase()}/indicator/core inflation rate, food inflation, gasoline prices/${
          input.rangeStart
        }/${input.rangeEnd}`.replace(" ", "%20");

      const response = await fetch(`https://api.tradingeconomics.com${path}`, {
        headers,
      });

      const responseData = await response.text();
      // console.log("Response:", responseData);

      try {
        const data = JSON.parse(responseData);
        return { data } as Data;
      } catch (error) {
        throw new Error("Failed to parse JSON response");
      }
    }),
});
