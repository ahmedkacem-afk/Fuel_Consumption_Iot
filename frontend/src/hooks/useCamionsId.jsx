import { useQuery } from "@tanstack/react-query";

export const useCamionsId = (id, options = {}) => {
  return useQuery({
    queryKey: ["camions", id], // Identify the query uniquely
    queryFn: async () => {
      const response = await fetch(`http://127.0.0.1:8000/camions/${id}`);
      if (!response.ok) {
        throw new Error("Error fetching camion");
      }
      return response.json();
    },
    ...options, // Spread additional options like refetchInterval and onSuccess
  });
};
