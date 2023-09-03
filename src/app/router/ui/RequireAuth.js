import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// import { routeConfig } from "../../../shared/config/routeConfig/routeConfig";
import { selectUserIsAuth } from "../../../entities/User";

export function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useSelector(selectUserIsAuth);

  if (!auth) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
}

// const auth = useSelector(selectUserIsAuth);
// const location = useLocation();

// if (!auth) {
//   return <Navigate to={routeConfig.articles} state={{ from: location }} replace />;
// }

// return children;
