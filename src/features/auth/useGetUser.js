import { getUser } from "../../services/authApi";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
  const {
    data: userData,
    isPending: isLoadingUser,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    gcTime: 0,
    staleTime: 0,
  });

  const isAuthenticated = userData?.user?.role === "authenticated";
  const userID = userData?.user?.id;
  return { isAuthenticated, isLoadingUser, userError, userID };
}
