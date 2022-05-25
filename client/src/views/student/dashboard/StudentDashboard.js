import React from "react";
import DashboardHeader from "../../../components/Headers/DashboardHeader";
//import TimeTable from "./CustomizedTimeline";
import AnnouncementsList from "./AnnouncementsList";
import StudentInfo from "./StudentInfo";
import TodoListStudent from "./TodoList";
import Calendar from "./Calendar";
import CustomizedTimeline from "./CustomizedTimeline";

const StudentDashboard = () => {
  return (
    <div className="grid gap-8 pl-8 md:grid-cols-3 lg:grid-cols-5">
      <div className="grid gap-4 mb-4 md:col-span-2 md:grid-cols-1 lg:col-span-4 lg:grid-cols-4 lg:gap-8">
        <DashboardHeader positionInGrid="col-span-1 lg:col-span-4" />
        <CustomizedTimeline positionInGrid=" lg:col-span-2 lg:row-span-2" />
        <AnnouncementsList positionInGrid="lg:col-span-2" />
        {/*   <CalendarBrief positionInGrid="xl:col-span-3" />*/}
        <Calendar positionInGrid="lg:col-span-2" />
      </div>

      <div className="hidden md:inline-block md:col-span-1 lg:col-span-1 bg-mint-cream min ">
        <StudentInfo />

        <TodoListStudent />
      </div>
    </div>
  );
};

export default StudentDashboard;
