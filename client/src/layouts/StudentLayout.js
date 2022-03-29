import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/Sidebars/StudentSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";

function StudentLayout() {
  let { userId, accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  let navigate = useNavigate();
  return role === "student" ? (
    <>
      <StudentSidebar />
      <div className="relative min-h-screen md:ml-52 pl-4 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}
export default StudentLayout;
