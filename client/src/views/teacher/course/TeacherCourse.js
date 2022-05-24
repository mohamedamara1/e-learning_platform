import React from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../../../components/Headers/DefaultHeader";
import TabComponent from "./TabComponent";
const TeacherCourse = () => {
  const { state } = useLocation();
  //const { data: course, error, isLoading } = useGetCourseQuery(state.courseId);

  /*
  state: {
    courseId
    courseName
    className
  }*/

  return (

    <div className="">

      <DefaultHeader name={state.courseName} background="bg-white-kids" />
      <TabComponent courseId={state.courseId} />
    </div>
  );
};

export default TeacherCourse;
