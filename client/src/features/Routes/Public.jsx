import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";

const PublicRoutes = () => {
  const { isAuthenticated, checkingStatus } = useAuth();

  if (checkingStatus) return <Loader />;

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
