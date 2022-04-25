import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NotebookPic from "../../../assets/img/notebook_page.jpg";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>,
];

const CourseCard = (props) => {
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
    <div
      className="rounded-2xl p-4 flex flex-col bg-white-kids justify-start items-center   col-span-2 md:col-span-1 transform transition duration-500 hover:scale-110 hover:cursor-pointer"
    >
      <img
        onClick={handleOnClick}
        className="h-2/5 w-full border-2 border-b-0 border-dark-electric-blue rounded-t-lg"
        src={NotebookPic}
      />
      <div className="h-3/5 w-full bg- p-4  border-2 border-t-0 border-dark-electric-blue rounded-b-lg">
        <div className=" flex flex-col w-max my-4">
          <p className="text-3  w-max text-left align-top font-sans  text-bluu-3 text-xl font-bold ">
            {props.courseName}
          </p>
          <p className="text-4 w-max text-left align-top font-sans text-xl text-dark-electric-blue ">
            {props.className}
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <p className="text-2 text-left align-top text-xl font-sans text-dark-electric-blue">
            {props.teacherName}
          </p>
        </div>
        <div className =" flex flex-col justify-center items-center align-bottom">
          <ButtonGroup size="small" aria-label="small button group">
            {buttons}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
