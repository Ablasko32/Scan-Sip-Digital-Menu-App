import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewLocation } from "../../services/locationsApi";
import { replace, useNavigate } from "react-router-dom";
import useGetUser from "../auth/useGetUser";
import toast from "react-hot-toast";

export default function useCreateNewLocation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userID } = useGetUser();

  const { isPending: isCreatingLocation, mutate: createLocation } = useMutation(
    {
      mutationFn: (formData) => addNewLocation(formData),
      onSuccess: (createdData) => {
        toast.success("Location created");
        queryClient.setQueryData(["userLocationAndCategories", userID], {
          ...createdData,
          categories: [],
        });
        navigate("/");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );
  return { isCreatingLocation, createLocation };
}
