import React from 'react';
import { BarChart,Bar, CartesianGrid,  XAxis, YAxis, Tooltip } from 'recharts';

const LineCgart = () => {
    const fakeData = [
        {
          id: 101,
          bangla: 78,
          physics: 85,
          ict: 70,
          english: 82,
          math: 10,
        },
        {
          id: 205,
          bangla: 92,
          physics: 79,
          ict: 88,
          english: 75,
          math: 85,
        },
        {
          id: 311,
          bangla: 60,
          physics: 70,
          ict: 65,
          english: 72,
          math: 68,
        },
        {
          id: 402,
          bangla: 85,
          physics: 90,
          ict: 78,
          english: 88,
          math: 2,
        },
        {
          id: 507,
          bangla: 70,
          physics: 65,
          ict: 75,
          english: 68,
          math: 80,
        },
        {
          id: 609,
          bangla: 88,
          physics: 82,
          ict: 90,
          english: 80,
          math: 85,
        },
        {
          id: 714,
          bangla: 75,
          physics: 72,
          ict: 68,
          english: 70,
          math: 78,
        },
        {
          id: 823,
          bangla: 80,
          physics: 88,
          ict: 82,
          english: 85,
          math: 90,
        },
        {
          id: 920,
          bangla: 78,
          physics: 85,
          ict: 90,
          english: 75,
          math: 88,
        },
        {
          id: 103,
          bangla: 92,
          physics: 90,
          ict: 85,
          english: 88,
          math: 22,
        },
      ];
      

      
    return (
        <div>
        {/* <LineChart width={600} height={300} data={fakeData}>
    <Line type="monotone" dataKey="ict" stroke="#8884d8" />
    <Line type="monotone" dataKey="math" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart> */}

  {/* // barchart */}

  <BarChart width={730} height={250} data={fakeData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />

  <Bar dataKey="math" fill="#8884d8" />
  <Bar dataKey="ict" fill="#82ca9d" />
</BarChart>
        </div>
    );
};

export default LineCgart;