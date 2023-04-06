import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ContentChart = () => {
  const data = [
    {
      name: "Januari",
      Ticket: 4000,
      Bulan: 2400,
      amt: 2400,
    },
    {
      name: "Februari",
      Ticket: 3000,
      Bulan: 1398,
      amt: 2210,
    },
    {
      name: "Maret",
      Ticket: 2000,
      Bulan: 9800,
      amt: 2290,
    },
    {
      name: "April",
      Ticket: 2780,
      Bulan: 3908,
      amt: 2000,
    },
    {
      name: "Mei",
      Ticket: 1890,
      Bulan: 4800,
      amt: 2181,
    },
    {
      name: "Juni",
      Ticket: 2390,
      Bulan: 3800,
      amt: 2500,
    },
    {
      name: "Juli",
      Ticket: 3490,
      Bulan: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer
      width={600}
      minHeight={200}
      maxHeight={300}
      className="mt-5"
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Ticket"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Bulan" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ContentChart;
