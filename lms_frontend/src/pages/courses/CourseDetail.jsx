import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * CourseDetail
 * Shows course details and actions.
 */
export default function CourseDetail() {
  const { courseId } = useParams();

  return (
    <div className="container">
      <h2>Course: {courseId}</h2>
      <Card style={{ padding: 16, marginBottom: 16 }}>
        <p>Course details, modules, resources, etc.</p>
      </Card>
      <div style={{ display: "flex", gap: 8 }}>
        <Link to={`/chat?room=course_chat:${courseId}`}><Button>Open Chat</Button></Link>
        <Link to={`/courses/${courseId}/edit`}><Button variant="secondary">Edit</Button></Link>
      </div>
    </div>
  );
}
