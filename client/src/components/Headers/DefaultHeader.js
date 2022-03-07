import React from "react";

const DefaultHeader = (props) => {
  // var classNames = require("classnames");
  // var background = classNames(props.background);
  return (
    <div
      className={` rounded-xl flex items-center justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20 ${props.background}`}
    >
      <div className="font-extrabold text-6xl text-dark-electric-blue">
        {props.title}
      </div>
      <div>buttons and profile pic</div>
    </div>
  );
};

export default DefaultHeader;
