import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";

const CourseCardSkeleton = (props) => {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col 
     bg-white-kids justify-start  
     col-span-2 md:col-span-1 transform transition duration-500 hover:scale-110 hover:cursor-pointer "
    >
      <Skeleton
        height={140}
        className="border-2 border-b-0 border-dark-electric-blue rounded-t-lg"
      />
      <div className="border-2 border-t-0 border-dark-electric-blue rounded-b-lg">
        {" "}
        <Skeleton height={30} width={"50%"} className="mt-4 " />
        <Skeleton height={20} width={"50%"} className="mt-4" />
        <div className="w-full text-center">
          <Skeleton
            height={20}
            width={"50%"}
            className="mt-4 mb-10 self-center "
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
