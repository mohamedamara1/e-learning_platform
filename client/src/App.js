import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword";

import * as reactRouterDom from "react-router-dom";

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

import CoursesPage from "./views/student/courses/CoursesPage";
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./views/student/dashboard/StudentDashboard";
import AdminLayout from "./layouts/AdminLayout";
import Course from "./views/student/course/Course";
import UsersManagementPage from "./views/admin/users/UsersManagementPage";

import AdminDashboard from "./views/admin/dashboard/AdminDashboard";
import HomePage from "./components/HomePage";
import TeachersCrudTable from "./views/admin/users/teachers/TeachersCrudTable";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import StudentsCrudTable from "./views/admin/users/students/StudentsCrudTable";
import ClassesCrudTable from "./views/admin/users/classes/ClassesCrudTable";
import CoursesManagementPage from "./views/admin/courses/CoursesManagementPage";
import CoursesCrudTable from "./views/admin/courses/CoursesCrudTable";

async function getRole() {
  if (await Session.doesSessionExist()) {
    // we use the key "role" here since that's what we
    // used while setting the payload in the backend.
    let role = (await Session.getAccessTokenPayloadSecurely())["role"];
    return role;
  }
}

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "awesome app",
    apiDomain: "http://localhost:5000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/api/v1/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        disableDefaultImplementation: true, // this disables showing the default sign in + sign up component

        signInForm: {
          style: {
            headerSubtitle: {
              display: "none", // hides the element that shows switch to the sign up form
            },
            divider: {
              display: "none", // hides the divider in the sign in UI
            },
          },
        },
        signUpForm: {
          style: {
            headerSubtitle: {
              display: "none", // hides the element that shows switch to the sign in form
            },
          },
        },
      },
      getRedirectionURL: async function (context) {
        if (context.action === "SIGN_IN_AND_UP") {
          // if the user is not logged in, we want to send
          // them to the sign in page.
          return "/signin";
        }
        if (context.action === "SUCCESS") {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath;
          }
          const path = await getRole().then((role) => {
            if (role === "admin") {
              return "/admin";
            } else if (role === "student") {
              return "/student";
            } else {
              return undefined;
            }
          });
          return path;
        }
        return undefined;
      },
      override: {
        components: {
          EmailPasswordSignIn_Override: ({ DefaultComponent, ...props }) => {
            /* if the user visits the /signin route, we want to show the
                   default implementation. If thy visit the /signup 
                   route (which also renders the <SignInUp> component),
                   we want to show the sign up UI, so we set the query parm to ?show=signup
                   which shows the sign up UI.
                  */
            const [showUI, setShowUI] = useState(false);
            useEffect(() => {
              if (window.location.pathname === "/signin") {
                setShowUI(true);
              } else if (window.location.pathname === "/admin/users/create") {
                window.location.href = "/admin/users/create?show=signup";
              } else {
                setShowUI(true);
              }
            }, []);
            if (showUI) {
              return <DefaultComponent {...props} />;
            } else {
              return null;
            }
          },
          EmailPasswordSignUp_Override: ({ DefaultComponent, ...props }) => {
            /* if the user visits the /signup route, we want to show the
                   default implementation. If thy visit the /signin?show=signup
                   route, we want to show the sign in UI, so we redirect them to /signin
                   which shows the sign in UI.
                  */
            const [showUI, setShowUI] = useState(false);
            useEffect(() => {
              if (window.location.pathname === "/admin/users/create") {
                setShowUI(true);
              } else if (window.location.pathname === "/signin") {
                window.location.href = "/signin";
              } else {
                setShowUI(true);
              }
            }, []);
            if (showUI) {
              return <DefaultComponent {...props} />;
            } else {
              return null;
            }
          },
          EmailPasswordSignUpHeader_Override: ({
            DefaultComponent,
            ...props
          }) => {
            return (
              <div>
                <DefaultComponent {...props} />
                Click <a href="/signin?show=signin">here</a> to sign in
              </div>
            );
          },
        },
      },
    }),
    Session.init(),
  ],
});
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          <Route
            path="/"
            element={
              <EmailPasswordAuth>
                <HomePage />
              </EmailPasswordAuth>
            }
          />

          <Route
            path="student"
            element={
              <EmailPasswordAuth>
                <StudentLayout />
              </EmailPasswordAuth>
            }
          >
            <Route index element={<StudentDashboard />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="courses" exact element={<CoursesPage />} />
            <Route path="course/:courseId" element={<Course />} />
          </Route>

          <Route
            path="admin"
            element={
              <EmailPasswordAuth>
                <AdminLayout />
              </EmailPasswordAuth>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" exact element={<UsersManagementPage />}>
              <Route path="teachers" element={<TeachersCrudTable />} />
              <Route path="students" element={<StudentsCrudTable />} />
              <Route path="classes" element={<ClassesCrudTable />} />

              {/*          <Route path=":userId" element={<UsersPage />} />*/}
            </Route>
            <Route path="courses" exact element={<CoursesManagementPage />}>
              <Route index element={<CoursesCrudTable />} />
            </Route>
          </Route>

          <Route path="*" element={<div>404 not found</div>} />
          {/* we want to render the sign in component in /signin.
        We will override the <SignInAndUp> component to only show the sign in
        UI on this route. See the init function call above for how to do this*/}
          <Route path="/signin" element={<EmailPassword.SignInAndUp />} />

          {/* we want to render the sign up component in /signup.
        We will override the <SignInAndUp> component to only show the sign up
        UI on this route. See the init function call above for how to do this*/}
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
