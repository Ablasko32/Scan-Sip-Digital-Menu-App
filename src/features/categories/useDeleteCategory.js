import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../services/categoriesApi";
import toast from "react-hot-toast";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (id) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries("[categories]");
      toast.success("Category deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
