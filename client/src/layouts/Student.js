import React from "react";
import { Outlet } from "react-router-dom";

import DefaultHeader from "../components/Headers/DefaultHeader";
import StudentSidebar from "../components/Sidebars/StudentSidebar";
function Student() {
  return (
    <>
      <StudentSidebar />
      <div className="relative min-h-screen md:ml-64">
        <DefaultHeader />
        <div className=" min-h-full pl-4 md:pl-10 mx-auto w-full bg-white-kids  ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Student;
