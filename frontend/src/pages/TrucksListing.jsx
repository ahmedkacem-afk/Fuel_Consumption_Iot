import React from "react";
import TrucksList from "../components/trucksOverview/TrucksList";
import TruckDashboard from "./TruckDashboard";
const trucks = [
  {
    id: 1,
    name: "Camion 1",
    fuelLevel: 75,
    imgSrc: "https://placehold.co/100x100?text=Truck+1",
  },
  {
    id: 2,
    name: "Camion 2",
    fuelLevel: 50,
    imgSrc: "https://placehold.co/100x100?text=Truck+2",
  },
  {
    id: 7,
    name: "Camion 7",
    fuelLevel: 25,
    imgSrc: "https://placehold.co/100x100?text=Truck+3",
  },
  {
    id: 4,
    name: "Camion 4",
    fuelLevel: 90,
    imgSrc: "https://placehold.co/100x100?text=Truck+4",
  },
  {
    id: 5,
    name: "Camion 5",
    fuelLevel: 60,
    imgSrc: "https://placehold.co/100x100?text=Truck+5",
  },
  {
    id: 6,
    name: "Camion 6",
    fuelLevel: 40,
    imgSrc: "https://placehold.co/100x100?text=Truck+6",
  },
];
const TrucksListing = () => {
  const [selectedCamion, setSelectedCamion] = React.useState(null);
  const handleSelectCamion = (camion) => {
    setSelectedCamion(camion);
    console.log(camion);
  };

  const handleBack = () => {
    setSelectedCamion(null);
  };
  return (
    <div>
      {selectedCamion ? (
        <TruckDashboard truck={selectedCamion} onBack={handleBack} />
      ) : (
        <TrucksList trucks={trucks} onSelectedCamion={handleSelectCamion} />
      )}
    </div>
  );
};

export default TrucksListing;
