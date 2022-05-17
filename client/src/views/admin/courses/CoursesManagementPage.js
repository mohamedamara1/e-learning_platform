import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../components/Headers/AdminHeader";
function CoursesManagementPage() {
  return (
    <div className=" flex flex-col min-h-screen bg-dark-electric-blue p-2">
      <AdminHeader title="Courses Management" background="bg-white-kids" />
      <div className=" min-h-full  m-2 flex-grow rounded-xl p-3 bg-slate-400">
        <Outlet />
      </div>
    </div>
  );
}

export default CoursesManagementPage;
