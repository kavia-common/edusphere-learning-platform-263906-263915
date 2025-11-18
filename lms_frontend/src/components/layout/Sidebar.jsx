import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { ROLES } from "../../utils/constants";

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * App sidebar with navigation links adjusted per role.
 */
export default function Sidebar() {
  const { role } = useSelector((s) => s.auth);
  const location = useLocation();

  const nav = [
    { to: "/dashboard", label: "Dashboard", roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN] },
    { to: "/courses", label: "Courses", roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN] },
    { to: "/assignments", label: "Assignments", roles: [ROLES.STUDENT, ROLES.TEACHER] },
    { to: "/quizzes", label: "Quizzes", roles: [ROLES.STUDENT, ROLES.TEACHER] },
    { to: "/chat", label: "Chat", roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN] },
    { to: "/ai", label: "AI Assistant", roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN] }
  ].filter((n) => n.roles.includes(role) || role === ROLES.ADMIN);

  return (
    <aside className="sidebar" aria-label="Main Navigation" style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, marginBottom: 16, color: "var(--op-primary)" }}>
        EduSphere
      </div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={clsx(
                  "nav-link",
                  location.pathname.startsWith(item.to) && "active"
                )}
                style={{
                  display: "block",
                  padding: "10px 12px",
                  marginBottom: 6,
                  borderRadius: 8,
                  color: location.pathname.startsWith(item.to) ? "#111827" : "#374151",
                  background: location.pathname.startsWith(item.to) ? "rgba(37, 99, 235, 0.12)" : "transparent",
                  textDecoration: "none"
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
