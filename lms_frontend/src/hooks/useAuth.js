import { useSelector } from "react-redux";

/**
 * PUBLIC_INTERFACE
 * useAuth
 * Returns current user, role, and session.
 */
export default function useAuth() {
  const { user, role, session, initialized } = useSelector((s) => s.auth);
  return { user, role, session, initialized, isAuthenticated: !!user };
}
