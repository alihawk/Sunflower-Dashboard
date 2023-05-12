import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Linechart = () => {
  const data = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 100 },
    { name: "Mar", value: 300 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
    { name: "Jun", value: 239 },
    { name: "Jul", value: 249 },
    { name: "Aug", value: 221 },
    { name: "Sep", value: 400 },
    { name: "Oct", value: 400 },
    { name: "Nov", value: 120 },
    { name: "Dec", value: 283 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CF9014" />
          <stop offset="100%" stopColor="#337D35" />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" tick={{fill:"#fff"}} />
      <YAxis tick={{fill:"#fff"}} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="url(#bg-gradient)"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Linechart;
