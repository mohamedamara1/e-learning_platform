import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../components/Sidebars/TeacherSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";

function TeacherLayout() {
  let { userId, accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  let navigate = useNavigate();
  return role === "teacher" ? (
    <>
      <TeacherSidebar />
      <div className="relative min-h-screen md:ml-52 pl-4 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}
export default TeacherLayout;
