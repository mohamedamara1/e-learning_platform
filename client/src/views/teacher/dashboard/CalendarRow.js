import React, { useState } from "react";
const CalendarRow = ({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
}) => {
  const activeDay = useState(new Date().getDate())[0];
  let content = [];
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(React.createElement("td", null));
    }
    content.push(
      React.createElement(
        "td",
        {
          className:
            "relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800",
        },
        "1"
      )
    );
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        React.createElement(
          React.Fragment,
          null,
          activeDay === i + 1 &&
            new Date().getMonth() === currentMonth &&
            new Date().getFullYear() === currentYear
            ? React.createElement(
                "td",
                {
                  className:
                    "relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800",
                },
                React.createElement(
                  "span",
                  { className: "p-1 rounded-full border-green-400 border-2" },
                  i + 1
                )
              )
            : React.createElement(
                "td",
                {
                  className:
                    "relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800",
                },
                i + 1
              )
        )
      );
    }
    return React.createElement(React.Fragment, null, content);
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        React.createElement(
          React.Fragment,
          null,
          activeDay === i + (7 * row - firstDay) &&
            new Date().getMonth() === currentMonth &&
            new Date().getFullYear() === currentYear
            ? React.createElement(
                "td",
                {
                  className:
                    "relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800",
                },
                React.createElement(
                  "span",
                  { className: "p-1 rounded-full border-green-400 border-2" },
                  i + (7 * row - firstDay)
                )
              )
            : React.createElement(
                "td",
                {
                  className:
                    "relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800",
                },
                i + (7 * row - firstDay)
              )
        )
      );
    }
  }
  return React.createElement(React.Fragment, null, content);
};
export default CalendarRow;
