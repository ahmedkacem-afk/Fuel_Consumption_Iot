import React from "react";
import { Card } from "antd";
// or the appropriate library

const MaintenanceReminder = ({ reminderDate }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Maintenance Reminder</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Calendar"
          width="50"
        />
        <p style={{ marginTop: "10px" }}>20-12-2024</p>
      </div>
    </Card>
  );
};

export default MaintenanceReminder;
