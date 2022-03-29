import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebars/AdminSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";

function AdminLayout() {
  let { userId, accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  let navigate = useNavigate();
  return role === "admin" ? (
    <>
      <AdminSidebar />
      <div className="relative min-h-screen md:ml-52 pl-4 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}

export default AdminLayout;
