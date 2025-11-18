import React from "react";
import Card from "../../components/common/Card";

/**
 * PUBLIC_INTERFACE
 * AdminDashboard
 * Landing page for admins.
 */
export default function AdminDashboard() {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <Card style={{ padding: 16 }}>
          <h3>User Management</h3>
          <p>Manage users and roles.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>System</h3>
          <p>View health and configuration.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>Reports</h3>
          <p>Access platform-wide analytics.</p>
        </Card>
      </div>
    </div>
  );
}
