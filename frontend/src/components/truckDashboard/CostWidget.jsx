import React from "react";
import { FaCoins } from "react-icons/fa";
import { Card } from "antd";
const FUEL_PRICE = 2.5;
const totalCost = (consumption) => {
  return consumption * FUEL_PRICE;
};
const CostWidget = ({ consumption }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>today's expected cost</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaCoins size={50} color="gold" />
        <p style={{ marginTop: "10px" }}>{totalCost(consumption)} DT</p>
      </div>
    </Card>
  );
};

export default CostWidget;
