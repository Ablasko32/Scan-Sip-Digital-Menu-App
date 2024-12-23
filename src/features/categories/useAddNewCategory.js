import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCategory } from "../../services/categoriesApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function useAddNewCategory(locationId) {
  const querryClient = useQueryClient();

  const { isPending: isCreatingCategory, mutate: createCategory } = useMutation(
    {
      mutationFn: (data) => addNewCategory({ ...data, locationId }),
      onSuccess: () => {
        toast.success("Category created");
        querryClient.invalidateQueries("[categories]");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
  );

  return { isCreatingCategory, createCategory };
}
