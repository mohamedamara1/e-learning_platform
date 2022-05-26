import React from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment-timezone'

const StudentCalendar = (props) => {
    let dayStart=new Date(1972,0,1,8,0,0);
    let dayEnd = new Date(1972,0,1,18,0,0);
    moment.tz.setDefault('Africa/Tunis');
    const localizer = momentLocalizer(moment);
    return     <Calendar
    localizer={localizer}
    style={{padding:50, height:750}}
    defaultView='week'
    min={dayStart}
    max={dayEnd}
  />
}

export default StudentCalendar