import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FuelLevel from "../components/truckDashboard/FuelLevel";
import Consumption from "../components/truckDashboard/Consumption";
import MaintenanceReminder from "../components/truckDashboard/MaintenanceReminder";
import CostWidget from "../components/truckDashboard/CostWidget";
import { useCamionsId } from "../hooks/useCamionsId";

// Utility to calculate fuel percentage
const calculateFuelPercentage = (fuelLevel, fuelCapacity) => {
  if (!fuelLevel || !fuelCapacity || fuelCapacity === 0) return 0;
  return Math.min(Math.round((fuelLevel / fuelCapacity) * 100), 100);
};

// Utility to extract date and fuel data
const extractMinimizedDateAndFuel = (logs) =>
  logs?.map((log) => {
    const minimizedDate = new Date(log.date).toISOString().split("T")[0];
    return { date: minimizedDate, fuelUsed: log.fuelUsed };
  }) || [];

const TruckDashboard = () => {
  const { camionId } = useParams();
  const [fuelLevel, setFuelLevel] = useState(0); // Default value for fuelLevel

  // Fetch truck data
  const {
    data: truck,
    isLoading,
    isError,
    error,
  } = useCamionsId(camionId, {
    refetchInterval: 1000, // Refetch every second
    refetchIntervalInBackground: true,
  });

  // Update fuel level when truck data changes
  useEffect(() => {
    if (truck && truck.fuelLevel != null && truck.fuelCapacity != null) {
      setFuelLevel(
        calculateFuelPercentage(truck.fuelLevel, truck.fuelCapacity)
      );
    }
  }, [truck]);

  // Loading and error states
  if (isLoading) return <p>Loading truck details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
        {/* Fuel Level Card */}
        <FuelLevel fuel={fuelLevel} />

        {/* Fuel Consumption Card */}
        <Consumption
          fuelData={extractMinimizedDateAndFuel(truck?.destinationLogs)}
        />

        {/* Maintenance Reminder Card */}
        <MaintenanceReminder />

        {/* Weekly Cost Card */}
        <CostWidget consumption={truck.destinationLogs[5].fuelUsed} />
      </div>
    </div>
  );
};

export default TruckDashboard;
