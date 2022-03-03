import React from "react";
import DashboardHeader from "../../../components/Headers/DashboardHeader";
//import TimeTable from "./CustomizedTimeline";
import AnnouncementsList from "./AnnouncementsList";
import CalendarBrief from "./CalendarBrief";
import StudentInfo from "./StudentInfo";
import VacationKnob from "./VacationKnob";
import TodoList from "./TodoList";
import Calendar from "./ConvertedCalendar/Calendar";
import CustomizedTimeline from "./CustomizedTimeline";

const StudentDashboard = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
      <div className="grid md:col-span-2 md:grid-cols-1 lg:col-span-4 lg:grid-cols-4 gap-4 lg:gap-8 mb-4">
        <DashboardHeader positionInGrid="col-span-1 lg:col-span-4" />
        <CustomizedTimeline positionInGrid=" lg:col-span-2 lg:row-span-2" />
        <AnnouncementsList positionInGrid="lg:col-span-2" />
        {/*   <CalendarBrief positionInGrid="xl:col-span-3" />*/}
        <Calendar positionInGrid="lg:col-span-2" />
      </div>

      <div className="hidden md:inline-block md:col-span-1 lg:col-span-1 bg-mint-cream min ">
        <StudentInfo />

        <TodoList />
      </div>
    </div>
  );
};

export default StudentDashboard;
