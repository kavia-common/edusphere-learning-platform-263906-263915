import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { toggleTheme } from "../../store/uiSlice";
import { signOut } from "../../store/authSlice";

/**
 * PUBLIC_INTERFACE
 * Topbar
 * App header with theme switch and sign-out.
 */
export default function Topbar() {
  const dispatch = useDispatch();
  const { user, role } = useSelector((s) => s.auth);
  const { theme } = useSelector((s) => s.ui);

  return (
    <header className="topbar" role="banner">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontWeight: 600, color: "var(--op-primary)" }}>EduSphere LMS</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span aria-label="User Role" style={{ fontSize: 12, opacity: 0.8 }}>{role}</span>
        <Button variant="ghost" onClick={() => dispatch(toggleTheme())} aria-label="Toggle Theme">
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
        {user ? (
          <Button variant="ghost" onClick={() => dispatch(signOut())}>Sign out</Button>
        ) : null}
      </div>
    </header>
  );
}
