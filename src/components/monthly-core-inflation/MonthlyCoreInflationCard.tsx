import React, { useEffect, useState } from "react";
import InflationAreaChart from "./InflationAreaChart";
import { type DataObject, type MonthlyInflationData } from "~/Types/Data";
import { getMonthAbbreviation } from "~/utils/date";

function formatChartData(
  selectedCountries: string[],
  data: {
    [key: string]: DataObject[];
  }
): MonthlyInflationData[] {
  const chartData: MonthlyInflationData[] = [];

  const numDataObjects =
    (data[selectedCountries[0] || ""] as DataObject[] | undefined)?.length ?? 0;

  for (let i = 0; i < numDataObjects; i++) {
    const country1Name = selectedCountries[0] || "null";
    const country2Name = selectedCountries[1] || "null";
    const country3Name = selectedCountries[2] || "null";

    const country1Data = data[country1Name ?? ""]?.[i];
    const country2Data = data[country2Name ?? ""]?.[i];
    const country3Data = data[country3Name ?? ""]?.[i];

    const newDataObject = {
      month: getMonthAbbreviation(country1Data?.DateTime ?? ""),

      country1: country1Data?.Value ?? 0,
      country2: country2Data?.Value ?? 0,
      country3: country3Data?.Value ?? 0,
    };

    chartData.push(newDataObject);
  }

  return chartData;
}

interface Props {
  isLoading: boolean;
  selectedCountries: string[];
  data: {
    [key: string]: DataObject[];
  };
}

const MonthlyCoreInflationCard = ({
  isLoading,
  selectedCountries,
  data,
}: Props) => {
  const [chartData, setChartData] = useState<MonthlyInflationData[]>([]);

  // update chart data when changed
  useEffect(() => {
    setChartData(formatChartData(selectedCountries, data));
  }, [selectedCountries, data]);

  return (
    <div className=" w-full rounded-3xl bg-neutral-50 pb-[45px] md:mx-[12px]">
      <div className="my-[30px] h-[300px] px-[10px]">
        {!isLoading ? (
          <InflationAreaChart
            selectedCountries={selectedCountries}
            data={chartData}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <h1 className="mt-[55px] text-4xl text-blue-900">Loading. . .</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyCoreInflationCard;
