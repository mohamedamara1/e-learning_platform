import React from "react";
import { Outlet } from "react-router-dom";

import DefaultHeader from "../components/Headers/DefaultHeader";
import StudentSidebar from "../components/Sidebars/StudentSidebar";
function Student() {
  return (
    <>
      <StudentSidebar />
      <div className="relative min-h-screen md:ml-52 pl-4 md:pl-10 bg-white-kids">
        <Outlet />
      </div>
    </>
  );
}

export default Student;
