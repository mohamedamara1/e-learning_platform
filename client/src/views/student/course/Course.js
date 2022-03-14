import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../../../components/Headers/DefaultHeader";
import TabComponent from "./TabComponent";
//import posts from "../../../assets/json/posts.json";
const Course = () => {
  const { state } = useLocation();

  /*
  state: {
    courseId
    courseName
    className
  }*/

  return (
    <div className="">
      <DefaultHeader title={state.courseName} background="bg-white-kids" />
      <TabComponent courseId={state.courseId}  />
    </div>
  );
};

export default Course;
