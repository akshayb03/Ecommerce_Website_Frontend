import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);
  return <>{!isAuthenticated ? <Navigate to="/login" /> : <Outlet />}</>;
};
