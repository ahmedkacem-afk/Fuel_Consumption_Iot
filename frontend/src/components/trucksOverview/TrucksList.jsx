import React from "react";
import CamionCard from "./CamionCard";
import { Link } from "react-router-dom";

const TrucksList = ({ trucks, onSelectedCamion }) => {
  return (
    <Link to="trucklist">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trucks.map((truck) => (
          <CamionCard truck={truck} onSelectCamion={onSelectedCamion} />
        ))}
      </div>
    </Link>
  );
};

export default TrucksList;
