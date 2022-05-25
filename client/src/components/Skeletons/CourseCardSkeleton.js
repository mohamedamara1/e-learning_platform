import React from "react";
import Skeleton from "react-loading-skeleton";

const CourseCardSkeleton = (props) => {
  return (
    <div
      className="flex flex-col justify-start col-span-2 p-4 transition duration-500 transform rounded-2xl bg-white-kids md:col-span-1 hover:scale-110 hover:cursor-pointer "
    >
      <Skeleton
        height={140}
        className="border-2 border-b-0 rounded-t-lg border-dark-electric-blue"
      />
      <div className="border-2 border-t-0 rounded-b-lg border-dark-electric-blue">
        {" "}
        <Skeleton height={30} width={"50%"} className="mt-4 " />
        <Skeleton height={20} width={"50%"} className="mt-4" />
        <div className="w-full text-center">
          <Skeleton
            height={20}
            width={"50%"}
            className="self-center mt-4 mb-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
