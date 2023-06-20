import { type DataObject } from "~/Types/Data";

// filters data retrieved from tradingeconomics api
export function filterData(category: string, countries: string[], dataArray: DataObject[]): { [key: string]: DataObject[] } {
  const result: { [key: string]: DataObject[] } = {};

  for (const country of countries) {
    const filteredItems = dataArray.filter(
      (item) => item.Country === country && item.Category === category
    );

    filteredItems.sort(
      (a, b) => new Date(a.DateTime).getTime() - new Date(b.DateTime).getTime()
    );

    result[country] = filteredItems;
  }

  return result;
}


