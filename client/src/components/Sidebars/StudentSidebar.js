import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import SchoolLogo from "../../assets/img/school_logo.png";
const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <MdDashboard size={"28"} />,
    to: "/",
    section: "",
  },
  {
    display: "Courses",
    icon: <AiFillBook size={"28"} />,
    to: "/courses",
    section: "courses",
  },
  {
    display: "Materials",
    icon: <MdAssignment size={"28"} />,
    to: "/materials",
    section: "materials",
  },
  {
    display: "Calendar",
    icon: <BsFillCalendarDateFill size={"28"} />,
    to: "/calendar",
    section: "calendar",
  },
  {
    display: "Attendance",
    icon: <BsClockFill size={"28"} />,
    to: "/attendance",
    section: "attendance",
  },
];
const StudentSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  // const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <>
      {/*  {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
        >
          <GiHamburgerMenu size={3} />
        </svg>
      )}
      */}
      <div
        className={`sidebar fixed top-0 left-0 h-screen w-80 bg-sb-bg ease-in-out duration-300 `}
      >
        {/*${showSidebar ? "-translate-x-0" : "-translate-x-full"} */}

        {/*<div className="flex justify-end mr-4 mt-4 text-sb-text">
            <AiOutlineLeft className=" hover:text-white" size={40} />
          onClick={() => setShowSidebar(!showSidebar)} 
          </div>*/}
        <div className="sidebar__logo  place-items-center h-auto  text-2xl font-bold font-sans mt-8 ">
          <img className="mx-auto" src={SchoolLogo}></img>
        </div>
        <div ref={sidebarRef} className="sidebar__menu  relative">
          <div
            ref={indicatorRef}
            className="sidebar__menu__indicator absolute top-0 left-2/4 w-[calc(100%_-_10px)]
           rounded-xl bg-white -z-[1] translate-y-2/4 transition duration-300 ease-in-out"
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight
              }px)`,
            }}
          ></div>
          {sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`sidebar__menu__item flex items-center place-content-start p-4 
              font-medium text-xl text-zinc-600 transition duration-300 ease-in-out
              hover:bg-indigo-200 hover:text-white
               ${activeIndex === index ? "active text-sb-bg" : ""}`}
              >
                <div className="sidebar__menu__item__icon mr-4 text-sb-text">
                  {item.icon}
                </div>
                <div className="sidebar__menu__item__text text-sb-text">
                  {item.display}{" "}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;
