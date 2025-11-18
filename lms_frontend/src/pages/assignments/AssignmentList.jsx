import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * AssignmentList
 * Lists assignments for a user or course.
 */
export default function AssignmentList() {
  const assignments = [
    { id: "a1", title: "Essay 1", due: "2025-01-15" },
    { id: "a2", title: "Project", due: "2025-02-01" }
  ];
  return (
    <div className="container">
      <h2>Assignments</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {assignments.map((a) => (
          <Card key={a.id} style={{ padding: 16 }}>
            <h3>{a.title}</h3>
            <p>Due: {a.due}</p>
            <Link to={`/assignments/${a.id}`}><Button variant="ghost">Open</Button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
