import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";

const ProtectedRoutes = () => {
  const { isAuthenticated, checkingStatus } = useAuth();

  if (checkingStatus) return <Loader />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoutes;
