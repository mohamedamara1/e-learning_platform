import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NotebookPic from "../../../assets/img/notebook_page.jpg";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ScheduleConferenceForm from "./ScheduleConferenceForm";

const CourseCard = (props) => {
  const buttons = [<ScheduleConferenceForm courseId={props.courseId} />];

  const navigate = useNavigate();
  const handleOnClick = useCallback(() =>
    navigate(`/teacher/course/${props.courseId}`, {
      state: {
        courseId: props.courseId,
        courseName: props.courseName,
        className: props.className,
      },
    })
  );
  return (
    <div className="flex flex-col items-center justify-start col-span-2 p-4 transition duration-500 transform rounded-2xl bg-white-kids md:col-span-1 hover:scale-110 hover:cursor-pointer">
      <img
        onClick={handleOnClick}
        className="w-full border-2 border-b-0 rounded-t-lg h-2/5 border-dark-electric-blue"
        src={NotebookPic}
        alt="courseImg"
      />
      <div className="w-full p-4 border-2 border-t-0 rounded-b-lg h-3/5 bg- border-dark-electric-blue">
        <div className="flex flex-col my-4 w-max">
          <p className="font-sans text-xl font-bold text-left align-top text-3 w-max text-bluu-3 ">
            {props.courseName}
          </p>
          <p className="font-sans text-xl text-left align-top text-4 w-max text-dark-electric-blue ">
            {props.className}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="font-sans text-xl text-left align-top text-2 text-dark-electric-blue">
            {props.teacherName}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center align-bottom ">
          <ButtonGroup size="small" aria-label="small button group">
            {buttons}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
