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
      <div className="font-extrabold text-4xl   lg:text-5xl xl:text-6xl text-dark-electric-blue">
        {props.title}
      </div>
      <div className="flex flex-col-reverse lg:flex-row  lg:divide-x w-max  justify-center items-center ">
        <div className="flex p-4 justify-center items-center gap-6 text-5xl md:text-5xl text-dark-electric-blue w-max">
          <GoInbox className="hover:cursor-pointer" />
          <GoBell className="hover:cursor-pointer" />
        </div>
        <div className="flex justify-center items-center p-4  gap-3">
          <img className=" h-14 " src={profile_logo} alt="logo" />
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
