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

const data = [
  {
    name: "Jan",
    country1: 4000,
    country2: 2400,
    country3: 2400,
  },
  {
    name: "Feb",
    country1: 3000,
    country2: 1398,
    country3: 2210,
  },
  {
    name: "Mar",
    country1: 2000,
    country2: 9800,
    country3: 7290,
  },
  {
    name: "Apr",
    country1: 2780,
    country2: 3908,
    country3: 2000,
  },
  {
    name: "May",
    country1: 1890,
    country2: 4800,
    country3: 2181,
  },
  {
    name: "Jun",
    country1: 2390,
    country2: 3800,
    country3: 2500,
  },
  {
    name: "Jul",
    country1: 2390,
    country2: 3800,
    country3: 2500,
  },
];

const InflationAreaChart = () => {
  const textColor = "#1e3a8a";

  // country names
  const country1Name = "United States";
  const country2Name = "China";
  const country3Name = "Japan";

  // country colors
  const country1Color = "#1e3a8a";
  const country2Color = "orange";
  const country3Color = "red";

  return (
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
          dataKey="name"
          stroke={textColor}
          tick={{ fontSize: 18 }}
          interval={0}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis hide={true} />
        <CartesianGrid
          stroke={textColor}
          strokeDasharray="5 5"
          vertical={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="country1"
          name={country1Name}
          stroke={country1Color}
          fillOpacity={1}
          fill="url(#color1)"
        />
        <Area
          type="monotone"
          dataKey="country2"
          name={country2Name}
          stroke={country2Color}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#color2)"
        />
        <Area
          type="monotone"
          dataKey="country3"
          name={country3Name}
          stroke={country3Color}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#color3)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default InflationAreaChart;
