import React from "react";
import { Link } from "react-router-dom";
import TruckImage from "../TruckImage";

const CamionCard = ({ truck }) => {
  let fuelColor;
  // Calculate the fuel level percentage based on fuelLevel and fuelCapacity
  const fuelLevelPercentage = (truck.fuelLevel / truck.fuelCapacity) * 100;

  if (fuelLevelPercentage > 75) {
    fuelColor = "bg-green-500";
  } else if (fuelLevelPercentage > 50) {
    fuelColor = "bg-yellow-500";
  } else if (fuelLevelPercentage > 25) {
    fuelColor = "bg-orange-500";
  } else {
    fuelColor = "bg-red-500";
  }

  return (
    <Link to={`${truck.camionId}`} key={truck.camionId}>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <TruckImage />
          <div>
            <h2 className="text-xl font-bold">{truck.camionId}</h2>
            <p className="text-gray-600">
              Fuel available: {truck.fuelLevel.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 ${fuelColor} rounded-full`}
              style={{ width: `${fuelLevelPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CamionCard;
