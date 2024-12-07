import React from "react";
import { useQuery } from "@tanstack/react-query";
import TrucksList from "../components/trucksOverview/TrucksList";

// Create a new QueryClient instance

export const useCamions = () => {
  return useQuery({
    queryKey: ["camions"], // This is the key for the query
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:8000/camions");
      if (!response.ok) {
        throw new Error("Error fetching camions");
      }
      return response.json();
    },
    refetchInterval: 1000, // Refetch every 1 seconds
    refetchIntervalInBackground: true,
  });
};

// Component to display the list of camions
const CamionsList = () => {
  const { data: camions, isLoading, error } = useCamions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <TrucksList trucks={camions} />;
};

// Main component that wraps CamionsList in QueryClientProvider
export default function TrucksListing() {
  return <CamionsList />;
}
