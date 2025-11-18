import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * CourseCreateEdit
 * Create or edit a course.
 */
export default function CourseCreateEdit() {
  const { courseId } = useParams();
  const isEdit = !!courseId;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend
    navigate("/courses");
  };

  return (
    <div className="container">
      <h2>{isEdit ? "Edit Course" : "Create Course"}</h2>
      <Card style={{ padding: 16 }}>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="title">Title</label>
            <input id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="desc">Description</label>
            <textarea id="desc" className="input" value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} />
          </div>
          <Button type="submit">{isEdit ? "Save" : "Create"}</Button>
        </form>
      </Card>
    </div>
  );
}
