import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPassword from "../pages/auth/ResetPassword";
import StudentDashboard from "../pages/dashboard/StudentDashboard";
import TeacherDashboard from "../pages/dashboard/TeacherDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import CourseList from "../pages/courses/CourseList";
import CourseDetail from "../pages/courses/CourseDetail";
import CourseCreateEdit from "../pages/courses/CourseCreateEdit";
import AssignmentList from "../pages/assignments/AssignmentList";
import AssignmentDetail from "../pages/assignments/AssignmentDetail";
import SubmissionForm from "../pages/assignments/SubmissionForm";
import QuizList from "../pages/quizzes/QuizList";
import QuizTake from "../pages/quizzes/QuizTake";
import QuizBuilder from "../pages/quizzes/QuizBuilder";
import ChatRoom from "../pages/chat/ChatRoom";
import AiAssistant from "../pages/ai/AiAssistant";
import { RoleGuard } from "../hooks/useRoleGuard";
import { ROLES } from "../utils/constants";

/**
 * PUBLIC_INTERFACE
 * AppRouter
 * Application routes with role-based guards.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", minHeight: "100vh" }}>
        <Sidebar />
        <div style={{ display: "grid", gridTemplateRows: "56px 1fr" }}>
          <Topbar />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<ResetPassword />} />

              <Route
                path="/dashboard"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]}>
                    <StudentDashboard />
                  </RoleGuard>
                }
              />
              <Route
                path="/dashboard/teacher"
                element={
                  <RoleGuard allowed={[ROLES.TEACHER, ROLES.ADMIN]}>
                    <TeacherDashboard />
                  </RoleGuard>
                }
              />
              <Route
                path="/dashboard/admin"
                element={
                  <RoleGuard allowed={[ROLES.ADMIN]}>
                    <AdminDashboard />
                  </RoleGuard>
                }
              />

              <Route
                path="/courses"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]}>
                    <CourseList />
                  </RoleGuard>
                }
              />
              <Route
                path="/courses/new"
                element={
                  <RoleGuard allowed={[ROLES.TEACHER, ROLES.ADMIN]}>
                    <CourseCreateEdit />
                  </RoleGuard>
                }
              />
              <Route
                path="/courses/:courseId"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]}>
                    <CourseDetail />
                  </RoleGuard>
                }
              />
              <Route
                path="/courses/:courseId/edit"
                element={
                  <RoleGuard allowed={[ROLES.TEACHER, ROLES.ADMIN]}>
                    <CourseCreateEdit />
                  </RoleGuard>
                }
              />

              <Route
                path="/assignments"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER]}>
                    <AssignmentList />
                  </RoleGuard>
                }
              />
              <Route
                path="/assignments/:assignmentId"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER]}>
                    <AssignmentDetail />
                  </RoleGuard>
                }
              />
              <Route
                path="/assignments/:assignmentId/submit"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT]}>
                    <SubmissionForm />
                  </RoleGuard>
                }
              />

              <Route
                path="/quizzes"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER]}>
                    <QuizList />
                  </RoleGuard>
                }
              />
              <Route
                path="/quizzes/:quizId/take"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT]}>
                    <QuizTake />
                  </RoleGuard>
                }
              />
              <Route
                path="/quizzes/builder"
                element={
                  <RoleGuard allowed={[ROLES.TEACHER, ROLES.ADMIN]}>
                    <QuizBuilder />
                  </RoleGuard>
                }
              />

              <Route
                path="/chat"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]}>
                    <ChatRoom />
                  </RoleGuard>
                }
              />
              <Route
                path="/ai"
                element={
                  <RoleGuard allowed={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]}>
                    <AiAssistant />
                  </RoleGuard>
                }
              />

              <Route path="*" element={<div className="container"><h2>Not Found</h2></div>} />
              <Route path="/unauthorized" element={<div className="container"><h2>Unauthorized</h2></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
