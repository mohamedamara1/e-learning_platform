import React, { useEffect } from "react";
import DefaultHeader from "../../../components/Headers/DefaultHeader";
import CourseCard from "./CourseCard";
//import courses from "../../../assets/json/courses.json";
import { useGetCoursesQuery } from "../../../api/coursesApi";

function CoursesPage() {
  const { data: courses, error, isLoading } = useGetCoursesQuery("userid");

  return (
    <div className=" flex flex-col min-h-screen bg-dark-electric-blue p-2">
      <DefaultHeader title="My courses" background="bg-white-kids" />
      <div className=" min-h-full  m-2 flex-grow rounded-xl p-3">
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6  p-5">
          {isLoading ? (
            <h1>Loading</h1>
          ) : courses ? (
            courses.map((course, index) => {
              return (
                <CourseCard
                  courseId={course.courseId}
                  courseName={course.courseName}
                  className={course.className}
                  teacherName={course.teacherName}
                  key={index}
                />
              );
            })
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
