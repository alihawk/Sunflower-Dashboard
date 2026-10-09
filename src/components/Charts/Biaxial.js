
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


const Biaxial = () => {

    // Sample data
    const data = [
        { x: 1, y: 123, z: 122 },
        { x: 2, y: 113, z: 713 },
        { x: 3, y: 125, z: 312 },
        { x: 4, y: 235, z: 123 },
        { x: 5, y: 145, z: 420 },
        { x: 6, y: 25, z: 529 },
        { x: 7, y: 117, z: 61 },
        { x: 8, y: 32, z: 435 },
        { x: 9, y: 143, z: 93 },
    ];


    return (
        <LineChart width={500} height={700} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left-axis" />
            <YAxis yAxisId="right-axis" orientation="right" />
            <Line yAxisId="left-axis" type="dashed" dataKey="y"
                stroke="pink" />
            <Line yAxisId="right-axis" type="dashed" dataKey="z"
                stroke="blue" />
        </LineChart>
    );
}

export default Biaxial;