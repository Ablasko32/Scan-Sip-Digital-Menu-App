import LoaderError from "../../../ui/LoaderError/LoaderError";
import Loader from "../../../ui/Loader/Loader";
import { useNavigate } from "react-router-dom";
import useGetUser from "../useGetUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoadingUser, userError } = useGetUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoadingUser, navigate]);

  if (isLoadingUser) return <Loader fullScreen={true} />;
  if (userError)
    return (
      <LoaderError fullScreen={true} ErrMessage="Error loading user data" />
    );

  if (isAuthenticated) {
    return <>{children}</>;
  }
  return null;
}

export default ProtectedRoute;
