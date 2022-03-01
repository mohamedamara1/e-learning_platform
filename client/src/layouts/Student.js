import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentSidebar from "../components/Sidebars/StudentSidebar";
import CoursesPage from "../views/student/courses/CoursesPage";
import MaterialsPage from "../views/student/materials/MaterialsPage";
import Blank from "../views/student/Blank";
import StudentDashboard from "../views/student/dashboard/StudentDashboard";
import DefaultHeader from "../components/Headers/DefaultHeader";
function Student() {
  return (
    <>
      <StudentSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Routes>
          <Route path="/student/dashboard" exact element={StudentDashboard} />
          <Fragment>
            <DefaultHeader />
            <Route path="/student/courses" exact element={CoursesPage} />
            <Route
              path="/student/materials"
              exact
              element={<MaterialsPage />}
            />
            <Route path="/student/calendar" exact element={Blank} />
            <Route path="/student/attendance" exact element={Blank} />
          </Fragment>
          <Navigate from="/student" to="/student/dashboard" />
        </Routes>
      </div>
    </>
  );
}

export default Student;
