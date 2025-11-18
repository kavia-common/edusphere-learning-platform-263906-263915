import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * QuizTake
 * Take a quiz.
 */
export default function QuizTake() {
  const { quizId } = useParams();
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: submit quiz
    navigate("/quizzes");
  };

  return (
    <div className="container">
      <h2>Quiz: {quizId}</h2>
      <Card style={{ padding: 16 }}>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="answer">Sample Question: 2 + 2 = ?</label>
            <input id="answer" className="input" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
        <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
