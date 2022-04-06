import React from "react";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import SchoolLogo from "../../assets/img/school_logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem, TreeView } from "@mui/lab";
const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <MdDashboard size={"28"} />,
    to: "/admin/dashboard",
    section: "",
  },
  {
    display: "Users",
    icon: <AiFillBook size={"28"} />,
    to: "/admin/users/teachers",
    section: "users",
  },
  {
    display: "Courses",
    icon: <AiFillBook size={"28"} />,
    to: "/admin/courses",
    section: "courses",
  },
  {
    display: "Calendar",
    icon: <BsFillCalendarDateFill size={"28"} />,
    to: "/admin/calendar",
    section: "calendar",
  },
];
const AdminSidebar = () => {
  // const [showSidebar, setShowSidebar] = useState(true);

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav className="md:left-0 md:bg-red-300 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap  shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <GiHamburgerMenu />
          </button>
          {/* Logo */}
          <Link
            className="md:block text-center md:pb-2 text-white-kids mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <img
              src={SchoolLogo}
              className=" max-w-full h-auto hidden  md:block  "
              alt="img"
            />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col bg-bluu-3 md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full  md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap ">
                {/*     <div className="w-6/12 ">
                  <Link
                    className="md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus Reactt
                  </Link>
                </div>*/}
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <AiOutlineClose size={40} />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {sidebarNavItems.map((item, index) => {
                if (item.display == "Users") {
                  return (
                    <li className="items-center" key={index}>
                      <div
                        className="flex items-center place-content-start p-4
              font-medium text-xl  transition duration-300 ease-in-out
              hover:bg-bluu-1"
                      >
                        <div className=" mr-4 text-white-kids">{item.icon}</div>
                        <TreeView
                          aria-label="file system navigator"
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpandIcon={<ChevronRightIcon />}
                          sx={{
                            height: 60,
                            fontWeight: 500,
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",
                            width: "100%",
                          }}
                        >
                          <TreeItem
                            nodeId="1"
                            label="Users"
                            className="text-white-kids font-medium text-xl "
                          >
                            <Link
                              to={item.to}
                              key={index}
                              onClick={() => setCollapseShow("hidden")}
                            >
                              {" "}
                              <TreeItem nodeId="2" label="Teachers" />
                            </Link>
                            <TreeItem nodeId="3" label="Students" />
                          </TreeItem>
                        </TreeView>
                      </div>
                    </li>
                  );
                }
                return (
                  <li className="items-center" key={index}>
                    <Link
                      to={item.to}
                      key={index}
                      onClick={() => setCollapseShow("hidden")}
                    >
                      <div
                        className="flex items-center place-content-start p-4
              font-medium text-xl  transition duration-300 ease-in-out
              hover:bg-bluu-1"
                      >
                        <div className=" mr-4 text-white-kids">{item.icon}</div>
                        <div className="text-white-kids">{item.display}</div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminSidebar;
