import React from "react";
import AdminHeader from "../../../components/Headers/AdminHeader";
function CalendarPage() {
  return (
    <div className=" flex flex-col min-h-screen bg-dark-electric-blue p-2">
      <AdminHeader title="Calendar Management" background="bg-white-kids" />
      <div className=" min-h-full  m-2 flex-grow rounded-xl p-3 bg-slate-400">
        hello calendar
      </div>
    </div>
  );
}

export default CalendarPage;
