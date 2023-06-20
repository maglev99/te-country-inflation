/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { type MonthlyInflationData } from "~/Types/Data";

interface Props {
  selectedCountries: string[];
  data: MonthlyInflationData[];
}

const InflationAreaChart = ({ selectedCountries, data }: Props) => {
  const textColor = "#1e3a8a";

  // country colors
  const country1Color = "#1e3a8a";
  const country2Color = "orange";
  const country3Color = "red";

  // formatter to attach "%" at end if value is a number
  const tooltipFormatter = (value: number | string) => {
    if (typeof value === 'number') {
      return `${value}%`;
    }
    return value;
  };
  
  return (
    <>
      <h1 className="mb-3 ml-[0.5%] text-4xl text-[#1e3a8a]">
        Monthly Core Inflation
      </h1>
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart data={data} className="ml-[0.5%]">
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor={country1Color} stopOpacity={1} />
              <stop offset="100%" stopColor={country1Color} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={country2Color} stopOpacity={1} />
              <stop offset="80%" stopColor={country2Color} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={country3Color} stopOpacity={1} />
              <stop offset="80%" stopColor={country3Color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend
            verticalAlign="top"
            height={36}
            align="left"
            iconType="circle"
            iconSize={20}
          />
          <XAxis
            dataKey="month"
            stroke={textColor}
            tick={{ fontSize: 18 }}
            interval={0}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis width={24} stroke={textColor} />
          <CartesianGrid
            stroke={textColor}
            strokeDasharray="5 5"
            vertical={false}
          />
          <Tooltip formatter={tooltipFormatter} />
          <Area
            type="monotone"
            dataKey="country1"
            name={selectedCountries[0]}
            stroke={country1Color}
            fillOpacity={1}
            fill="url(#color1)"
          />
          <Area
            type="monotone"
            dataKey="country2"
            name={selectedCountries[1]}
            stroke={country2Color}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#color2)"
          />
          <Area
            type="monotone"
            dataKey="country3"
            name={selectedCountries[2]}
            stroke={country3Color}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#color3)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default InflationAreaChart;
