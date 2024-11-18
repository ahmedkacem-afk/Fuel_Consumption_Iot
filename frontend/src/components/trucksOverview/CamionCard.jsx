import React from "react";
import { Link } from "react-router-dom";

const CamionCard = ({ truck, onSelectCamion }) => {
  let fuelColor;
  if (truck.fuelLevel > 75) {
    fuelColor = "bg-green-500";
  } else if (truck.fuelLevel > 50) {
    fuelColor = "bg-yellow-500";
  } else if (truck.fuelLevel > 25) {
    fuelColor = "bg-orange-500";
  } else {
    fuelColor = "bg-red-500";
  }
  return (
    <Link to={`${truck.id}`} key={truck.id}>
      <div
        className="bg-white p-4 rounded-lg shadow-md"
        key={truck.id}
        onClick={() => onSelectCamion(truck)}
      >
        <div className="flex items-center">
          <img
            src={truck.imgSrc}
            alt={`Image of ${truck.name}`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{truck.name}</h2>
            <p className="text-gray-600">Fuel Level: {truck.fuelLevel}%</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 ${fuelColor} rounded-full`}
              style={{ width: `${truck.fuelLevel}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CamionCard;
