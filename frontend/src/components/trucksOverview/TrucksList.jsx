import React from "react";
import { useNavigate } from "react-router-dom";
import CamionCard from "./CamionCard";

const TrucksList = ({ trucks }) => {
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/item/${id}`); // Navigate to the detail page with the ID
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trucks.map((truck) => (
        <CamionCard truck={truck} onClick={handleItemClick} />
      ))}
    </div>
  );
};

export default TrucksList;
