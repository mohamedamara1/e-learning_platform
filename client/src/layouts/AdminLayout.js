import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebars/AdminSidebar";

function AdminLayout() {
  return (
    <>
      <AdminSidebar />
      <div className="relative min-h-screen md:ml-52 pl-4 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
