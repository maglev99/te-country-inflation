/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teRouter = createTRPCRouter({
  getData: publicProcedure.query(async () => {
    const headers = {
      Accept: 'Application/xml',
      Authorization: `Client ${process.env.TE_API_KEY || ''}`,
    };

    const path = '/historical/country/mexico, sweden, thailand/indicator/core inflation rate, food inflation, gasoline prices/2023-01-01/2023-05-31'.replace(' ', '%20');
    const response = await fetch(`https://api.tradingeconomics.com${path}`, {
      headers,
    });

    const responseData = await response.text();
    console.log('Response:', responseData);

    try {
      const data = JSON.parse(responseData);
      return { data };
    } catch (error) {
      throw new Error('Failed to parse JSON response');
    }
  }),
});

