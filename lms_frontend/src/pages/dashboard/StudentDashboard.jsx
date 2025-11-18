import React from "react";
import Card from "../../components/common/Card";

/**
 * PUBLIC_INTERFACE
 * StudentDashboard
 * Landing page for students.
 */
export default function StudentDashboard() {
  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <Card style={{ padding: 16 }}>
          <h3>My Courses</h3>
          <p>View and continue your enrolled courses.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>Assignments</h3>
          <p>Track due assignments and submissions.</p>
        </Card>
        <Card style={{ padding: 16 }}>
          <h3>Quizzes</h3>
          <p>Continue in-progress quizzes or view results.</p>
        </Card>
      </div>
    </div>
  );
}
