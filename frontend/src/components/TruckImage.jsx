import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";

const TruckImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [truckName, setTruckName] = useState("");
  const [isLoading, setIsLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {
    // Generate random truck name using Faker
    const name = faker.company.name();
    setTruckName(name);

    // Fetch random truck image using Unsplash API
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          query: "truck",
          client_id: "6GEx_syd9eBQy3K0P1GUonXwPK2Zy0kvaPs5wwHYqlQ", // Ensure this is the correct API key
        },
      })
      .then((response) => {
        if (response.data && response.data[0]) {
          setImageUrl(response.data[0].urls.regular);
        }
        setIsLoading(false); // Set loading state to false after the image is fetched
      })
      .catch((err) => {
        console.error("Error fetching image:", err.response || err); // Log detailed error
        setError("Error fetching image");
        setIsLoading(false); // Set loading state to false on error
      });
  }, []);
  // In your TruckImage component:
  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Truck" className="w-24 h-24 object-cover" />
      )}
    </div>
  );
};

export default TruckImage;
