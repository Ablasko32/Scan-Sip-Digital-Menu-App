import { getAllCategories } from "../../../services/categoriesApi";
import { useQuery } from "@tanstack/react-query";

export default function useCategories(locationId) {
  const {
    data: categories,
    error: categoriesError,
    isPending: isLoadingCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAllCategories(locationId),
  });

  return { categories, categoriesError, isLoadingCategories };
}
