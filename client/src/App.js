import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./views/student/Blank";
import StuDashboard from "./views/student/StudentView";
import StudentView from "./views/student/StudentView";
import CoursesPage from "./views/student/courses/CoursesPage";
import MaterialsPage from "./views/student/materials/MaterialsPage";
import Student from "./layouts/Student";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />}>
          {/*   <Route index element={<Blank />} /> 
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/calendar" element={<Blank />} />
          <Route path="/attendance" element={<Blank />} />*/}
        </Route>
        <Route path="/" exact component={Student} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
