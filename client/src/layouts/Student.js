import React from "react";
import { Outlet } from "react-router-dom";

import DefaultHeader from "../components/Headers/DefaultHeader";
import NewSidebar from "../components/Sidebars/StudentSidebar";
function Student() {
  return (
    <>
      <NewSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <DefaultHeader />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Student;
