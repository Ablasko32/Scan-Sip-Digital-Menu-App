import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export default function useLogout() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate("/login");
      dispatch({ type: "auth/logout" });
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, mutate };
}
