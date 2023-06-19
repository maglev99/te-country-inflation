/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// formats date in the form "YYYY-MM-DD"
function formatDate(date: Date): string {
  return date.toISOString().split("T")[0] || "";
}

export const teRouter = createTRPCRouter({
  getData: publicProcedure.query(async () => {
    const headers = {
      Accept: "Application/xml",
      Authorization: `Client ${process.env.TE_API_KEY || ""}`,
    };

    // Get the last day of the previous month
    const currentDate = new Date();
    const lastDayOfPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );

    const formattedLastDayOfPreviousMonth = formatDate(lastDayOfPreviousMonth)

    // Get the first day of 6 months ago
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const firstDayOfSixMonthsAgo = new Date(
      sixMonthsAgo.getFullYear(),
      sixMonthsAgo.getMonth(),
      1
    );

    const formattedFirstDayOfSixMonthsAgo = formatDate(firstDayOfSixMonthsAgo)

    console.log(formattedLastDayOfPreviousMonth);
    console.log(formattedFirstDayOfSixMonthsAgo);

    const path =
      `/historical/country/mexico, sweden, thailand/indicator/core inflation rate, food inflation, gasoline prices/${
        formattedFirstDayOfSixMonthsAgo || ""
      }/${formattedLastDayOfPreviousMonth || ""}`.replace(" ", "%20");
    const response = await fetch(`https://api.tradingeconomics.com${path}`, {
      headers,
    });

    const responseData = await response.text();
    console.log("Response:", responseData);

    try {
      const data = JSON.parse(responseData);
      return { data };
    } catch (error) {
      throw new Error("Failed to parse JSON response");
    }
  }),
});
