import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveNewItem } from "../../services/itemsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function useSaveItems() {
  const { id: categoryID } = useParams();
  const queryClient = useQueryClient();

  const { isPending: isAddingNewItem, mutate: addNewItem } = useMutation({
    mutationFn: (data) => saveNewItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["items", categoryID]);
      toast.success("Item created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isAddingNewItem, addNewItem };
}
