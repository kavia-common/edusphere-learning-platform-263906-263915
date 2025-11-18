import React from "react";
import Card from "../../components/common/Card";

/**
 * PUBLIC_INTERFACE
 * TeacherDashboard
 * Landing page for teachers.
 */
export default function TeacherDashboard() {
  return (
    <div className="container">
      <h2>Teacher Dashboard</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <Card style={{ padding: 16 }}>
          <h3>Manage Courses</h3>
          <p>Create, edit, and manage your courses.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>Assignments</h3>
          <p>Review and grade student submissions.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>Quizzes Builder</h3>
          <p>Build and publish quizzes.</p>
        </Card>
      </div>
    </div>
  );
}
