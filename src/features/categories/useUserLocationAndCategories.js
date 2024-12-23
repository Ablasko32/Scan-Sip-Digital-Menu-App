import { getLocationUserAndCategory } from "../../services/locationsApi";
import { useQuery } from "@tanstack/react-query";

export default function useUserLocationAndCategories(userId) {
  const { data, isPending, error } = useQuery({
    queryKey: ["userLocationAndCategories"],
    queryFn: async () => await getLocationUserAndCategory(userId),
  });
  return { data, isPending, error };
}
