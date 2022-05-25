import React from "react";

const AdminHeader = (props) => {
  // var classNames = require("classnames");
  // var background = classNames(props.background);
  return (
    <div
      className={`rounded-xl flex items-center justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 md:z-9 ${props.background}`}
    >
      <div className="text-4xl font-extrabold lg:text-5xl xl:text-6xl text-dark-electric-blue">
        {props.title}
      </div>
    </div>
  );
};

export default AdminHeader;
