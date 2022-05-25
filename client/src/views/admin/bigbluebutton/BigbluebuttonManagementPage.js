import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../components/Headers/AdminHeader";
function BigbluebuttonManagementPage() {
  return (
    <div className="flex flex-col min-h-screen p-2 bg-dark-electric-blue">
      <AdminHeader
        title="BigBlueButton Management"
        background="bg-white-kids"
      />
      <div className="flex-grow min-h-full p-3 m-2 rounded-xl bg-slate-400">
        <Outlet />
      </div>
    </div>
  );
}

export default BigbluebuttonManagementPage;
