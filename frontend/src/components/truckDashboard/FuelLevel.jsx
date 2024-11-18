import React, { useState } from "react";

const FuelLevel = () => {
  const [fuelLevel, setFuelLevel] = useState(100); // Initial fuel level percentage
  const handleFuelChange = (event) => {
    let value = parseInt(event.target.value, 10);
    value = Math.max(0, Math.min(100, value)); // Ensure value is between 0 and 100
    setFuelLevel(value);
  };

  return (
    <div className="flex flex-col items-center p-8 h-auto bg-slate-200 rounded-xl shadow-xl ">
      <h3 className="text-2xl font-bold pb-4 text-gray-800">Fuel Level</h3>
      {/* Barrel */}
      <div className="relative w-36 h-72 bg-gray-700 border-4 border-black rounded-xl overflow-hidden">
        {/* Fuel Level */}
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-yellow-400 transition-all duration-500"
          style={{ height: `${fuelLevel}%` }} // Dynamic height
        ></div>
      </div>
      {/* Fuel Percentage Text */}
      <div className="mt-4 text-lg font-bold text-gray-800">{fuelLevel}%</div>
      {/* Input Slider to Simulate Fuel Level Change */}
      <input
        type="range"
        min="0"
        max="100"
        value={fuelLevel}
        onChange={handleFuelChange}
        className="mt-4 w-64"
      />
    </div>
  );
};

export default FuelLevel;
