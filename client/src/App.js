import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CoursesPage from "./views/student/courses/CoursesPage";
import Student from "./layouts/Student";
import StudentDashboard from "./views/student/dashboard/StudentDashboard";
import StudentSidebar from "./components/Sidebars/StudentSidebar";
import OldSidebar from "./components/Sidebars/OldSidebar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentSidebar />} />
        <Route path="/myold" element={<OldSidebar />} />

        <Route path="student" element={<Student />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" exact element={<CoursesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/student/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
