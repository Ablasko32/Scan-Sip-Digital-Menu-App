import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItem } from "../../services/itemsApi";
import useGetUser from "../auth/useGetUser.js";
import toast from "react-hot-toast";

export default function useUpdateItem() {
  const queryClient = useQueryClient();
  const { userID } = useGetUser();
  const { isPending: isUpdatingItem, mutate: updateItemMutation } = useMutation(
    {
      mutationFn: (updateData) => updateItem(updateData),
      onSuccess: () => {
        toast.success("Item updated");
        queryClient.invalidateQueries("userLocationAndCategories", userID);
      },
      onError: (error) => {
        console.error(error.message);
        toast.error(error.message);
      },
    },
  );
  return { isUpdatingItem, updateItemMutation };
}
