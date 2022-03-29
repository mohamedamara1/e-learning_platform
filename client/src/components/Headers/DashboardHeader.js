import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

const DashboardHeader = (props) => {
  var classNames = require("classnames");
  var headerClass = classNames(props.positionInGrid);
  return (
    <div className={` rounded-xl  dark:bg-gray-800  ${headerClass}`}>
      <div className="flex items-center justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20 ">
        <h2 className="text-2xl sm:text-1xl text-bluu-2 dark:text-white lg:text-4xl whitespace-nowrap rounded-lg p-6 bg-mint-cream">
          <span className="">Hello </span>
          <span className="font-extrabold">, Flen !</span>
        </h2>
        <div className="text-bluu-3 flex items-center scale-150   p-3 rounded-2xl mx-2 bg-mint-cream ">
          <button className="">
            <AiOutlineMessage size={25} />
          </button>
          <button>
            <AiOutlineBell size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
