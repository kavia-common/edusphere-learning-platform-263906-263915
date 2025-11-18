import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * CourseList
 * List of courses with create link for teachers/admin.
 */
export default function CourseList() {
  // placeholder data
  const courses = [
    { id: "c1", title: "Intro to AI", description: "Basics of AI" },
    { id: "c2", title: "Web Development", description: "React & APIs" }
  ];

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Courses</h2>
        <Link to="/courses/new"><Button variant="secondary">Create Course</Button></Link>
      </div>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {courses.map((c) => (
          <Card key={c.id} style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{c.title}</h3>
            <p>{c.description}</p>
            <Link to={`/courses/${c.id}`}><Button variant="ghost">Open</Button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
