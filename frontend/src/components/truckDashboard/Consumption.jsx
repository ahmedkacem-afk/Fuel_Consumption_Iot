import { Card } from "antd";
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
// or the appropriate library/file

const Consumption = ({ fuelData }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Fuel Consumption</h2>
      <LineChart width={500} height={400} data={fuelData} m>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          label={{ value: "date", position: "insideBottom", offset: -5 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="fuelUsed"
          stroke="#00c8ff"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </Card>
  );
};

export default Consumption;
