import React from "react";
import InflationAreaChart from "./InflationAreaChart";

const MonthlyCoreInflationCard = ({}) => {
  return (
		<div className=" w-full rounded-3xl bg-neutral-50 pb-[45px] md:mx-[12px]">
		<div className="my-[30px] h-[300px] px-[10px]">
			<InflationAreaChart />
		</div>
	</div>
  );
};

export default MonthlyCoreInflationCard;