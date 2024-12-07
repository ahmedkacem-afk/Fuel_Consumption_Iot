import React, { useState, useEffect } from "react";

function FuelLevel({ fuel }) {
  // Calculate needle rotation based on fuel level
  const calculateNeedleRotation = (level) => {
    return (level / 100) * 180 - 90; // Map fuel level to gauge rotation
  };

  return (
    <div className="w-full flex ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full flex justify-center flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Fuel Gauge</h2>
        <div className="relative w-60 h-40 rounded-full border-4 border-gray-300 overflow-hidden">
          {/* Fuel Needle */}
          <div
            className="absolute left-1/2 bottom-1/2 w-1 h-40 bg-red-500 origin-bottom transform"
            style={{
              transform: `rotate(${calculateNeedleRotation(fuel)}deg)`,
            }}
          ></div>
          {/* Gauge Labels */}
          <div className="absolute inset-0 flex justify-between items-center ">
            <span>E</span>
            <span>F</span>
          </div>
        </div>
        {/* Fuel Level Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={fuel}
          className="mt-4 w-full"
        />
        <div className="mt-2 text-center text-gray-700">
          Fuel Level: {fuel}%
        </div>
      </div>
    </div>
  );
}

export default FuelLevel;
