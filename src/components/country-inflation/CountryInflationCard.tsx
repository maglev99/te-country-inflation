import React, { useEffect, useState } from "react";
import InflationBarChart from "./InflationBarChart";
import { type CountryInflationData, type DataObject } from "~/Types/Data";

interface Props {
  isLoading: boolean;
  countryName: string;
  coreInflationData: {
    [key: string]: DataObject[];
  };
  foodInflationData: {
    [key: string]: DataObject[];
  };
}

function formatChartData(
  countryName: string,
  coreInflationData: {
    [key: string]: DataObject[];
  },
  foodInflationData: {
    [key: string]: DataObject[];
  }
): CountryInflationData[] {
  const chartData: CountryInflationData[] = [];

  const numCoreInflationDataObjects =
    (coreInflationData[countryName || ""] as DataObject[] | undefined)
      ?.length ?? 0;

  const numFoodInflationDataObjects =
    (foodInflationData[countryName || ""] as DataObject[] | undefined)
      ?.length ?? 0;

  const countryCoreInflationData =
    coreInflationData[countryName || ""]?.[numCoreInflationDataObjects - 1];

  const countryFoodInflationData =
    foodInflationData[countryName || ""]?.[numFoodInflationDataObjects - 1];

  const newCoreInflationDataObject = {
    label: `Core ${countryCoreInflationData?.Value ?? 0}%`,
    percentage: countryCoreInflationData?.Value ?? 0,
  };

  chartData.push(newCoreInflationDataObject);

  const newFoodInflationDataObject = {
    label: `Food ${countryFoodInflationData?.Value ?? 0}%`,
    percentage: countryFoodInflationData?.Value ?? 0,
  };

  chartData.push(newFoodInflationDataObject);

  return chartData;
}

const CountryInflationCard = ({
  isLoading,
  countryName,
  coreInflationData,
  foodInflationData,
}: Props) => {
  const [chartData, setChartData] = useState<CountryInflationData[]>([]);

  // update chart data when changed
  useEffect(() => {
    setChartData(
      formatChartData(countryName, coreInflationData, foodInflationData)
    );
  }, [countryName, coreInflationData, foodInflationData]);

  return (
    <div className="mb-[50px] w-full sm:w-full md:w-1/2 md:px-3 lg:w-1/2 xl:w-1/3">
      <div className="rounded-3xl bg-neutral-50 pb-[70px] pt-[30px]">
        <div className="h-[200px] px-[10px] xl:w-[395px]">
          {!isLoading ? (
            <InflationBarChart countryName={countryName} data={chartData} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <h1 className="mt-[40px] text-4xl text-blue-900">Loading. . .</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryInflationCard;
