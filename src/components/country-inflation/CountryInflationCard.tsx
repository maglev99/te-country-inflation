import React from "react";
import InflationBarChart from "./InflationBarChart";

interface CountryInflationCardProps {
  countryName: string;
  data: { name: string; Percentage: number }[];
}

const CountryInflationCard = ({
  countryName,
  data,
}: CountryInflationCardProps) => {
  return (
    <div className="mb-[50px] w-full sm:w-full md:w-1/2 md:px-3 lg:w-1/2 xl:w-1/3">
      <div className="rounded-3xl bg-neutral-50 pb-[70px] pt-[30px]">
        <div className="h-[200px] px-[10px] xl:w-[395px]">
          <InflationBarChart countryName={countryName} data={data} />
        </div>
      </div>
    </div>
  );
};

export default CountryInflationCard;
