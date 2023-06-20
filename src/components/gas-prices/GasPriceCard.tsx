import React, { useEffect, useState } from "react";
import { type GasPriceData, type DataObject } from "~/Types/Data";
import { formatDateToMonthAndYear } from "~/utils/date";

interface Props {
  isLoading: boolean;
  countryName: string;
  gasPriceData: {
    [key: string]: DataObject[];
  };
}

function formatData(
  countryName: string,
  gasPriceData: {
    [key: string]: DataObject[];
  }
): GasPriceData {
  const data: GasPriceData = { date: "", value: 0 };

  const numGasPriceDataObjects =
    (gasPriceData[countryName || ""] as DataObject[] | undefined)?.length ?? 0;

  const gasPriceInflationData =
    gasPriceData[countryName || ""]?.[numGasPriceDataObjects - 1];

  if (gasPriceInflationData) {
    data.date = formatDateToMonthAndYear(gasPriceInflationData?.DateTime) ?? "";
    data.value = gasPriceInflationData?.Value ?? 0;
  }

  return data;
}

const GasPriceCard = ({ isLoading, countryName, gasPriceData }: Props) => {
  const [data, setData] = useState<GasPriceData>({ date: "", value: 0 }); // initialize default values

  // update chart data when changed
  useEffect(() => {
    setData(formatData(countryName, gasPriceData));
  }, [countryName, gasPriceData]);

  return (
    <div className="mb-[50px] w-full sm:w-full md:w-1/2 md:px-3 lg:w-1/2 xl:w-1/3">
      <div className="rounded-3xl bg-neutral-50 pb-[62px] pt-[30px]">
        <div className="h-[80px] min-w-[371px] flex-row items-center justify-center px-[10px] xl:w-[395px]">
          {!isLoading ? (
            <>
              <h1 className="ml-[0.5%] text-3xl text-[#1e3a8a]">
                {countryName}
              </h1>
              <div className="ml-[0.5%]">
                <h5 className="mt-[10px] text-start text-[18px] text-[#1e3a8a]">
                  {data.date}
                </h5>
                <h3 className="text-3xl text-[#1e3a8a]">{data.value} USD/L</h3>
              </div>{" "}
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <h1 className="mt-[30px] text-4xl text-blue-900">Loading. . .</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GasPriceCard;
