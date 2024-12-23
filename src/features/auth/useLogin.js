import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();

  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isLoggingIn, login };
}
