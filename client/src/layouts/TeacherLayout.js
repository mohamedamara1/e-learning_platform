import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../components/Sidebars/TeacherSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

function TeacherLayout() {
  let { accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  return role === "teacher" ? (
    <>
      <TeacherSidebar />
      <div className="relative min-h-screen pl-4 md:ml-52 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}
export default TeacherLayout;
