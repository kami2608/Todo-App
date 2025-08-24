import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function AuthRoute() {
  const user = useContext(AuthContext);
  const location = useLocation();

  if (user === undefined) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return <Outlet />;
}
