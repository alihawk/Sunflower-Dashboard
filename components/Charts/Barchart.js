import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell
} from "recharts";
import axios from "axios";

const Barchart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.post("/api/consumption_data", { val: "30 days" });
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const xAxisTicks = [0, 250, 500, 750, 1000];
  const yAxisTicks = ['11/22',  '12/22', '03/23' , '04/23'];

  return (
    <>
      <BarChart width={400} height={400} data={data} barCategoryGap={20} barGap={5}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CF9014" />
            <stop offset="100%" stopColor="#337D35" />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fill: 'black' }} ticks={xAxisTicks} label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} />
        <YAxis dataKey="Yield" tick={{ fill: 'black' }} ticks={yAxisTicks} label={{ value: 'Yield', angle: -90, position: 'insideTopLeft', offset: 10, fill: 'black' }} />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <Legend wrapperStyle={{ fill: '#337D35' }} />
        <Bar dataKey="Yield">
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 ? "#CF9014" : "#337D35"} />
            ))
          }
        </Bar>
      </BarChart>
    </>
  );
};

export default Barchart;
