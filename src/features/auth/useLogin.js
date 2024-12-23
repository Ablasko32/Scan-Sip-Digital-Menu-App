import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (user) => {
      dispatch({ type: "auth/login", payload: user.user.id });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isLoggingIn, login };
}
