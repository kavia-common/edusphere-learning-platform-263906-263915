import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * QuizList
 * Lists quizzes.
 */
export default function QuizList() {
  const quizzes = [
    { id: "q1", title: "Week 1 Quiz" },
    { id: "q2", title: "Midterm" }
  ];
  return (
    <div className="container">
      <h2>Quizzes</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {quizzes.map((q) => (
          <Card key={q.id} style={{ padding: 16 }}>
            <h3>{q.title}</h3>
            <Link to={`/quizzes/${q.id}/take`}><Button variant="ghost">Take</Button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
