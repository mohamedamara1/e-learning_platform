import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

import CoursesPage from "./views/student/courses/CoursesPage";
import Student from "./layouts/Student";
import StudentDashboard from "./views/student/dashboard/StudentDashboard";
import StudentSidebar from "./components/Sidebars/StudentSidebar";
import Course from "./views/student/course/Course";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "awesome app",
    apiDomain: "http://localhost:5000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/api/v1/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentSidebar />} />
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

        <Route path="student" element={<Student />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" exact element={<CoursesPage />} />
          <Route path="course/:courseId" element={<Course />} />
        </Route>
        <Route path="*" element={<Navigate to="/student/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
