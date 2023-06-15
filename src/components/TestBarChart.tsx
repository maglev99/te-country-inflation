import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
  // Tooltip,
} from "recharts";

const data = [
  { name: "Core 4%", Percentage: 4 },
  { name: "Food 3%", Percentage: 3 },
  { name: "Rent 2%", Percentage: 2 },
];

const TestBarChart = () => {
  const xAxisTickFormatter = (value: number) => `${value}%`;

  // type TooltipValueFormatter = (value: string | "") => [string, string];
  // const tooltipFormatter: TooltipValueFormatter = (value) => [`${value}%`, ""];

  return (
    <>
    <h1 className="text-4xl text-white mb-2">United States</h1>
    {/* set responsive container width to 99% to trigger redraw so that graph shrinks properly in smallest browser window widths */}
      <ResponsiveContainer width="99%" height="100%"> 
        <BarChart
          data={data}
          layout="vertical"
        >
          <defs>
            <linearGradient id="colorUv" x1="1.3" y1="1" x2="0" y2="1">
              <stop offset="20%" stopColor="#e71414" stopOpacity={1} />
              <stop offset="90%" stopColor="orange" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            type="number"
            stroke="#ccc"
            tickFormatter={xAxisTickFormatter}
            tick={{ fontSize: 18 }}
          />
          <YAxis dataKey="name" type="category" stroke="#ccc" hide={true} />
          {/* <Tooltip formatter={tooltipFormatter} /> */}
          <Bar dataKey="Percentage" fill="url(#colorUv)">
            <LabelList
              dataKey="name"
              position="insideLeft"
              fill="#FFFFFF"
              content={({ x, y, value, height }) => (
                <text
                  x={typeof x === "number" ? x + 10 : undefined}
                  y={
                    typeof y === "number" && typeof height === "number"
                      ? y + height / 1.48
                      : undefined
                  }
                  fontSize={35}
                  fill="#FFFFFF"
                  textAnchor="start"
                  fontFamily="Helvetica, sans-serif"
                >
                  {value}
                </text>
              )}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TestBarChart;
