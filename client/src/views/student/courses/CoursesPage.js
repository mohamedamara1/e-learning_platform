import React from "react";
import DefaultHeader from "../../../components/Headers/DefaultHeader";
import CourseCard from "./CourseCard";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetCourses } from "../../../api/coursesApi";
import CourseCardSkeleton from "../../../components/Skeletons/CourseCardSkeleton";
function CoursesPage() {
  const { data: courses, error, isLoading } = useGetCourses("userid");

  return (
    <div className="flex flex-col min-h-screen p-2 bg-dark-electric-blue">
      <DefaultHeader title="My courses" background="bg-white-kids" />
      <div className="flex-grow min-h-full p-3 m-2 rounded-xl">
        <div className="grid grid-cols-3 gap-6 p-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
          {isLoading
            ? [...Array(10)].map((el, index) => <CourseCardSkeleton />)
            : courses
            ? courses.map((course, index) => {
                return (
                  <CourseCard
                    courseId={course.id}
                    courseName={course.name}
                    className={course.class.name}
                    teacherName={course.teacher.fullName}
                    key={index}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
