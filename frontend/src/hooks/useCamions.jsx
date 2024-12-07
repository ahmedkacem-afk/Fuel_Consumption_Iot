import { useQuery } from "@tanstack/react-query";

// This hook fetches camion details by the given camionId
export const useCamionsId = (id, options = {}) => {
  return useQuery({
    queryKey: ["camions", id], // Query key for caching and identification
    queryFn: async () => {
      // Fetch camion details from the API
      const response = await fetch(`http://127.0.0.1:8000/camions/${id}`);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Error fetching camion");
      }

      // Parse and return the response JSON
      return response.json();
    },
    ...options, // Spread additional options such as refetchInterval, onSuccess, etc.
  });
};
