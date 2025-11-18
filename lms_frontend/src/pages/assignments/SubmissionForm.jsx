import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * SubmissionForm
 * Submit assignment work.
 */
export default function SubmissionForm() {
  const { assignmentId } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend to submit
    navigate(`/assignments/${assignmentId}`);
  };

  return (
    <div className="container">
      <h2>Submit Assignment: {assignmentId}</h2>
      <Card style={{ padding: 16 }}>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="answer">Your Answer</label>
            <textarea id="answer" className="input" value={text} onChange={(e) => setText(e.target.value)} rows={6} required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
