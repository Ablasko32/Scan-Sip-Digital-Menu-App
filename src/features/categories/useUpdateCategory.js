import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../../services/categoriesApi";
import useGetUser from "../auth/useGetUser";
import toast from "react-hot-toast";

export default function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { userId } = useGetUser();

  const { isPending: isUpdatingCategory, mutate: updateCategoryMutation } =
    useMutation({
      mutationFn: (updateData) => updateCategory(updateData),
      onSuccess: () => {
        queryClient.invalidateQueries(["userLocationAndCategories", userId]);
        toast.success("Category updated");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { updateCategoryMutation, isUpdatingCategory };
}
