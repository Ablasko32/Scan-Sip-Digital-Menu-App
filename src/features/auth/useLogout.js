import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate("/login");
      queryClient.removeQueries(["user"]);
      queryClient.clear();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, mutate };
}
