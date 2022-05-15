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
import { styled } from "@mui/system";

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
  {
    display: "BigBlueButton",
    icon: <BsFillCalendarDateFill size={"28"} />,
    to: "/admin/bigbluebutton",
    section: "bigbluebutton",
  },
];

const StyledTreeView = styled(TreeView)`
  .MuiTreeItem-group {
    margin-left: 0;
  }
`;

const StyledTreeItem = styled(TreeItem)`
  .MuiTreeItem-iconContainer {
    display: none;
  }
`;
const AdminSidebar = () => {
  // const [showSidebar, setShowSidebar] = useState(true);

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:bg-red-300 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <GiHamburgerMenu />
          </button>
          {/* Logo */}
          <Link
            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-center uppercase md:block md:pb-2 text-white-kids whitespace-nowrap"
            to="/"
          >
            <img
              src={SchoolLogo}
              className="hidden h-auto max-w-full md:block"
              alt="img"
            />
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block"></li>
            <li className="relative inline-block"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col bg-bluu-3 md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap ">
                {/*     <div className="w-6/12 ">
                  <Link
                    className="inline-block p-4 px-0 mr-0 text-sm font-bold text-center uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    to="/"
                  >
                    Notus Reactt
                  </Link>
                </div>*/}
                <div className="flex justify-end w-full">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <AiOutlineClose size={40} />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}

            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              {sidebarNavItems.map((item, index) => {
                if (item.display === "Users") {
                  return (
                    <li
                      className="flex items-center p-4 text-xl font-medium transition duration-300 ease-in-out place-content-start hover:bg-bluu-1"
                      key={index}
                    >
                      <div className="mr-4 text-white-kids">{item.icon}</div>
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                      >
                        <StyledTreeItem
                          nodeId="1"
                          label="Users"
                          sx={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",
                          }}
                        >
                          <Link
                            to="/admin/users/teachers"
                            key={index}
                            onClick={() => setCollapseShow("hidden")}
                          >
                            <TreeItem nodeId="2" label="Teachers" />
                          </Link>
                          <Link
                            to="/admin/users/students"
                            key={index}
                            onClick={() => setCollapseShow("hidden")}
                          >
                            <TreeItem nodeId="3" label="Students" />
                          </Link>
                          <Link
                            to="/admin/users/classes"
                            key={index}
                            onClick={() => setCollapseShow("hidden")}
                          >
                            <TreeItem nodeId="4" label="Classes" />
                          </Link>
                        </StyledTreeItem>
                      </TreeView>
                    </li>
                  );
                } else if (item.display === "Courses") {
                  return (
                    <li
                      className="flex items-center p-4 text-xl font-medium transition duration-300 ease-in-out place-content-start hover:bg-bluu-1"
                      key={index}
                    >
                      <div className="mr-4 text-white-kids">{item.icon}</div>
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                      >
                        <StyledTreeItem
                          nodeId="1"
                          label="Courses"
                          className="text-xl font-medium text-white-kids "
                        >
                          <Link
                            to="/admin/courses/courses"
                            key={index}
                            onClick={() => setCollapseShow("hidden")}
                          >
                            <TreeItem nodeId="2" label="Courses" />
                          </Link>
                          <Link
                            to="/admin/courses/subjects"
                            key={index}
                            onClick={() => setCollapseShow("hidden")}
                          >
                            <TreeItem nodeId="3" label="Subjects" />
                          </Link>
                        </StyledTreeItem>
                      </TreeView>
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
                      <div className="flex items-center p-4 text-xl font-medium transition duration-300 ease-in-out place-content-start hover:bg-bluu-1">
                        <div className="mr-4 text-white-kids">{item.icon}</div>
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
