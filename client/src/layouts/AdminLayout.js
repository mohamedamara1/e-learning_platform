import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebars/AdminSidebar";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

function AdminLayout() {
  let { accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  return role === "admin" ? (
    <>
      <AdminSidebar />
      <div className="relative min-h-screen pl-4 md:ml-52 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Unauthorized</div>
  );
}

export default AdminLayout;
