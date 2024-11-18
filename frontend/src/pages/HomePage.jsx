import React from "react";
import Welcome from "../components/Welcome";
import TrucksListing from "./TrucksListing";

const HomePage = () => {
  const [viewCamions, setViewCamions] = React.useState(false);

  return (
    <div>
      {viewCamions ? (
        <TrucksListing />
      ) : (
        <Welcome onViewCamions={() => setViewCamions(true)} />
      )}
    </div>
  );
};

export default HomePage;
