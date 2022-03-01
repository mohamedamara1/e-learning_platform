import React from "react";
import DashboardHeader from "../../../components/Headers/DashboardHeader";
import TimeTable from "./TimeTable";

const StudentDashboard = () => {
  <>
    <div className="flex flex-wrap">
      <div className="">
        <DashboardHeader />
      </div>
      {/*    <div className="">
        <TimeTable />
        <Announcments />
        <CalendarSummary />
      </div>
      <div className="">
        <StudentInfo />
        <VacationKnob />
        <TodoList />
</div>*/}
    </div>
  </>;
};

export default StudentDashboard;
