import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }) {
  const location = useLocation();
  const auth = localStorage.getItem("token");

  if (!auth) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
}
