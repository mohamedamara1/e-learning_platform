import React from "react";
import { Link } from "react-router-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const StudentCalendar =(props) => {
    return <ScheduleComponent currentView="Month">
        <Inject services={[Day, Week, Month]}/>
    </ScheduleComponent>
}

export default StudentCalendar