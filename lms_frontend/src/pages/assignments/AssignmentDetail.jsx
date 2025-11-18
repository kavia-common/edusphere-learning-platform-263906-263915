import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * AssignmentDetail
 * Shows assignment description and actions.
 */
export default function AssignmentDetail() {
  const { assignmentId } = useParams();
  return (
    <div className="container">
      <h2>Assignment: {assignmentId}</h2>
      <Card style={{ padding: 16, marginBottom: 16 }}>
        <p>Assignment instructions and resources.</p>
      </Card>
      <Link to={`/assignments/${assignmentId}/submit`}><Button>Submit</Button></Link>
    </div>
  );
}
