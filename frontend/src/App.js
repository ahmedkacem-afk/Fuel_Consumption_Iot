import React, { useState, useEffect } from "react";
import LoadingPage from "./components/loadingPage";

const FuelBarrel = () => {
  const [fuelLevel, setFuelLevel] = useState(100); // Initial fuel level percentage

  const handleFuelChange = (event) => {
    let value = parseInt(event.target.value, 10);
    value = Math.max(0, Math.min(100, value)); // Ensure value is between 0 and 100
    setFuelLevel(value);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          {/* Barrel */}
          <div className="relative w-36 h-72 bg-gray-700 border-4 border-black rounded-xl overflow-hidden">
            {/* Fuel Level */}
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-yellow-400 transition-all duration-500"
              style={{ height: `${fuelLevel}%` }} // Dynamic height
            ></div>
          </div>
          {/* Fuel Percentage Text */}
          <div className="mt-4 text-lg font-bold text-gray-800">
            {fuelLevel}%
          </div>
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
      )}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
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
    </div>
  );
};

export default FuelBarrel;
