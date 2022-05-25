import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/Sidebars/StudentSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

function StudentLayout() {
  let { accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  return role === "student" ? (
    <>
      <StudentSidebar />
      <div className="relative min-h-screen pl-4 md:ml-52 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}
export default StudentLayout;
