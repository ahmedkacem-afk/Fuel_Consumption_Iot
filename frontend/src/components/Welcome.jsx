import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ onViewCamions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Trucks App</h1>
      <p className="mb-4 text-lg">
        Manage and monitor your truck's fuel levels efficiently.
      </p>
      <Link to="trucklist">
        <button
          onClick={onViewCamions}
          className=" bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg"
        >
          View Camions List
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
