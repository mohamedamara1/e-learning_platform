import React from "react";
import ProfileImg from "../../../assets/img/profile_pic.png";
function StudentInfo() {
  return (
    <div className="items-center text-center  m-5  ">
      <img className="m-auto" src={ProfileImg} alt="img"></img>
      <h2 className="text-blue-500 mt-4 ">Flen Foulani</h2>
    </div>
  );
}

export default StudentInfo;
