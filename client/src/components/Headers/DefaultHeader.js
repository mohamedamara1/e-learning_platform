import React from "react";
import { GoInbox } from "react-icons/go";
import { GoBell } from "react-icons/go";
import profile_logo from "../../assets/img/profile_pic.png";
import BasicMenu from "../Menus/BasicMenu";
const DefaultHeader = (props) => {
  // var classNames = require("classnames");
    // var background = classNames(props.background);
  return (
    <div
      className={`rounded-xl flex items-center justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 md:z-9 ${props.background}`}
    >
      <div className="text-4xl font-extrabold lg:text-5xl xl:text-6xl text-dark-electric-blue">
        {props.title}
      </div>
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:divide-x w-max ">
        {/*<div className="flex items-center justify-center gap-6 p-4 text-5xl md:text-5xl text-dark-electric-blue w-max">
          <GoInbox className="hover:cursor-pointer" />
          <GoBell className="hover:cursor-pointer" />
        </div>*/}
        <div className="flex items-center justify-center gap-3 p-4">
          <img className=" h-14" src={profile_logo} alt="logo" />
          <div className="w-max">Mia T</div>
          <div className="w-1/3 ">
            <BasicMenu className="text-dark-electric-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;
