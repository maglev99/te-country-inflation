import React from "react";

const GasPriceCard = ({}) => {
  return (
    <div className="mb-[50px] w-full sm:w-full md:w-1/2 md:px-3 lg:w-1/2 xl:w-1/3">
      <div className="rounded-3xl bg-neutral-50 pb-[62px] pt-[30px]">
        <div className="h-[80px] min-w-[371px] flex-row items-center justify-center px-[10px] xl:w-[395px]">
          <h1 className="ml-[0.5%] text-3xl text-[#1e3a8a]">United States</h1>
          <div className="ml-[0.5%]">
            <h5 className="mt-[10px] text-start text-[18px] text-[#1e3a8a]">
              May 2023
            </h5>
            <h3 className="text-3xl text-[#1e3a8a]">1.00 USD/L</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasPriceCard;