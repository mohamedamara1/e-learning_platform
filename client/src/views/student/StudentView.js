import { Outlet } from "react-router-dom";
import StudentSidebar from "../../components/Sidebars/StudentSidebar";

const StudentView = () => {
  return (
    <div className="pt-12 pr-0 pb-0 pl-96">
      <StudentSidebar />
      <Outlet />
    </div>
  );
};

export default StudentView;
