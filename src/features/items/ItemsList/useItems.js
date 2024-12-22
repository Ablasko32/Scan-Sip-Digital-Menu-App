import { getAllItemsForCategory } from "../../../services/itemsApi";
import { useQuery } from "@tanstack/react-query";

export default function useItems(categoryID) {
  const {
    data: itemsData,
    error: itemsError,
    isPending: isLoadingItems,
  } = useQuery({
    queryKey: ["items", categoryID],
    queryFn: () => getAllItemsForCategory(categoryID),
  });
  return { itemsData, itemsError, isLoadingItems };
}
