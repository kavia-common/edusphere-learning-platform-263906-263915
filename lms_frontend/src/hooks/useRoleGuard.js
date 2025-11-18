import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

/**
 * PUBLIC_INTERFACE
 * RoleGuard
 * Protects child routes based on authentication and allowed roles.
 */
export function RoleGuard({ allowed, children }) {
  const { isAuthenticated, role, initialized } = useAuth();
  const location = useLocation();

  if (!initialized) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (allowed && allowed.length > 0 && !allowed.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
