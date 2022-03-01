import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

function DashboardHeader() {
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <h1 className="text-2xl">, Elma!</h1>
      </div>
      <div>
        <button>{AiOutlineBell}</button>
        <button>{AiOutlineMessage}</button>
      </div>
    </div>
  );
}

export default DashboardHeader;
