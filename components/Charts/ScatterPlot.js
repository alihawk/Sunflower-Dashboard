import React from 'react';
import {
  ScatterChart, Scatter, XAxis,
  YAxis, CartesianGrid
} from 'recharts';

const ScatterPlot = () => {

  // Sample data
  const data = [
    { x: 1, y: 23 },
    { x: 2, y: 3 },
    { x: 3, y: 15 },
    { x: 4, y: 35 },
    { x: 5, y: 45 },
    { x: 6, y: 25 },
    { x: 7, y: 17 },
    { x: 8, y: 32 },
    { x: 9, y: 43 },
  ];

  return (
    <ScatterChart width={400} height={400}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <Scatter data={data} fill="green" />
    </ScatterChart>
  );
}

export default ScatterPlot; 