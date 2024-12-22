import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../services/itemsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function useDeleteItem() {
  const queryClient = useQueryClient();

  const { id: categoryID } = useParams();

  const { isPending, mutate } = useMutation({
    mutationFn: (itemID) => deleteItem(itemID),
    onSuccess: () => {
      queryClient.invalidateQueries("[item]", categoryID);
      toast.success("Item deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
