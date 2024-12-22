import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveNewItem } from "../../services/itemsApi";
import toast from "react-hot-toast";

export default function useSaveItems() {
  const queryClient = useQueryClient();

  const { isPending: isAddingNewItem, mutate: addNewItem } = useMutation({
    mutationFn: (data) => saveNewItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
      toast.success("Item created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isAddingNewItem, addNewItem };
}
