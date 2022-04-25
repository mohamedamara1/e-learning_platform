import React, { useEffect, useRef, useState } from "react";
import CalendarRow from "./CalendarRow";

const Calendar = (props) => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeMonthString, setActiveMonthString] = useState(
    new Date().toDateString().split(" ")[1]
  );
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const prevMonth = useRef(null);
  const [firstDayInMonth, setFirstDayInMonth] = useState([]);

  var classNames = require("classnames");
  var headerClass = classNames(props.positionInGrid);

  useEffect(() => {
    let x = [];
    for (let i = 1; i <= 12; i++) {
      x.push(new Date(`${activeYear}/${i}/1`).getDay());
    }
    setFirstDayInMonth(x);
  }, [activeYear]);
  useEffect(() => {
    setActiveMonthString(
      new Date(new Date().setMonth(activeMonth)).toDateString().split(" ")[1]
    );
    //remember previous activeMonth
    //@ts-ignore
    prevMonth.current = activeMonth;
  }, [activeMonth]);
  return React.createElement(
    "div",
    {
      className:
        "md:shadow-lg md:rounded p-4 bg-white dark:bg-gray-700 lg:w-4/5 " +
        headerClass,
    },
    React.createElement(
      "div",
      { className: "w-full rounded" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between mb-4" },
        React.createElement(
          "div",
          {
            className: "text-left font-bold text-xl text-black dark:text-white",
          },
          `${activeMonthString} ${activeYear}`
        ),
        React.createElement(
          "div",
          { className: "flex space-x-4" },
          React.createElement(
            "button",
            {
              className: "p-2 rounded bg-green-400 text-white",
              onClick: () => {
                if (prevMonth.current === 0) {
                  setActiveYear(activeYear - 1);
                  setActiveMonth(11);
                } else {
                  setActiveMonth(activeMonth - 1);
                }
              },
            },
            React.createElement(
              "svg",
              {
                width: 15,
                height: 15,
                fill: "currentColor",
                viewBox: "0 0 24 24",
              },
              React.createElement("path", {
                fill: "currentColor",
                d: "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z",
              })
            )
          ),
          React.createElement(
            "button",
            {
              className: "p-2 rounded bg-green-400 text-white",
              onClick: () => {
                if (prevMonth.current === 11) {
                  setActiveYear(activeYear + 1);
                  setActiveMonth(0);
                } else {
                  setActiveMonth(activeMonth + 1);
                }
              },
            },
            React.createElement(
              "svg",
              {
                width: 15,
                height: 15,
                fill: "currentColor",
                viewBox: "0 0 24 24",
              },
              React.createElement("path", {
                fill: "currentColor",
                d: "M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z",
              })
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "-mx-2" },
        React.createElement(
          "table",
          { className: "w-full dark:text-white" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "S"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "M"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "T"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "W"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "T"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "F"
              ),
              React.createElement(
                "th",
                { className: "py-3 px-2 md:px-3 " },
                "S"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 0,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 1,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 2,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 3,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 4,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(CalendarRow, {
                firstDay: firstDayInMonth[activeMonth],
                lastDayInMonth: new Date(
                  activeYear,
                  activeMonth + 1,
                  0
                ).getDate(),
                row: 5,
                currentMonth: activeMonth,
                currentYear: activeYear,
              })
            )
          )
        )
      )
    )
  );
};
export default Calendar;
