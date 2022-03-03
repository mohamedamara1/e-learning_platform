import React from "react";
import { useLocation } from "react-router-dom";

const DefaultHeader = () => {
  var location = useLocation().pathname;
  return location.includes("dashboard") ? null : (
    <div className="bg-timberwolf flex items-center justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20 ">
      <div className="font-extrabold text-6xl text-dark-electric-blue">
        My courses
      </div>
      <div>buttons and profile pic</div>
    </div>
  );
};

export default DefaultHeader;
