import React from "react";
import AdminHeader from "../../../components/Headers/AdminHeader";
function CalendarPage() {
  return (
    <div className="flex flex-col min-h-screen p-2 bg-dark-electric-blue">
      <AdminHeader title="Calendar Management" background="bg-white-kids" />
      <div className="flex-grow min-h-full p-3 m-2 rounded-xl bg-slate-400">
        hello calendar
      </div>
    </div>
  );
}

export default CalendarPage;
