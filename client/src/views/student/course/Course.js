import React from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../../../components/Headers/DefaultHeader";
import { TabComponent } from "./TabComponent";
const Course = () => {
  const { state } = useLocation();
  console.log(state.courseId);
  //const { data: course, error, isLoading } = useGetCourseQuery(state.courseId);

  /*
  state: {
    courseId
    courseName
    className
  }*/

  return (
    <div className="">
      <DefaultHeader title={state.courseName} background="bg-white-kids" />
      
      <TabComponent courseId={state.courseId} />
    </div>
  );
};

export default Course;
