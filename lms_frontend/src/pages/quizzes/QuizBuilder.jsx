import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * QuizBuilder
 * Build or edit quizzes.
 */
export default function QuizBuilder() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ q: "", a: "" }]);

  const addQuestion = () => setQuestions((q) => [...q, { q: "", a: "" }]);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: persist quiz
  };

  return (
    <div className="container">
      <h2>Quiz Builder</h2>
      <Card style={{ padding: 16 }}>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="title">Title</label>
            <input id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          {questions.map((item, idx) => (
            <div key={idx} style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr", marginBottom: 12 }}>
              <input
                className="input"
                placeholder={`Question ${idx + 1}`}
                value={item.q}
                onChange={(e) => {
                  const n = [...questions];
                  n[idx].q = e.target.value;
                  setQuestions(n);
                }}
              />
              <input
                className="input"
                placeholder="Answer"
                value={item.a}
                onChange={(e) => {
                  const n = [...questions];
                  n[idx].a = e.target.value;
                  setQuestions(n);
                }}
              />
            </div>
          ))}
          <div style={{ display: "flex", gap: 8 }}>
            <Button type="button" variant="ghost" onClick={addQuestion}>Add Question</Button>
            <Button type="submit">Save Quiz</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
