import { getAllCategories } from "../../../services/categoriesApi";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const {
    data: categories,
    error: categoriesError,
    isPending: isLoadingCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return { categories, categoriesError, isLoadingCategories };
}
