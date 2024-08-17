import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="px-4 lg:px-10">
      {/* TITLE AND SEE ALL SKELETON */}
      <div className="flex justify-between mb-5 md:mb-[26px]">
        <div className="h-8 w-1/4 bg-gray-700 animate-pulse rounded"></div>
        <div className="h-6 w-16 bg-gray-700 animate-pulse rounded"></div>
      </div>

      {/* TOP MIX LIST SKELETON */}
      <div className="flex lg:grid lg:grid-cols-5 gap-4 2xl:gap-[54px] overflow-auto pb-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-[224px] lg:w-auto flex-shrink-0 bg-gray-800 rounded-lg p-5 animate-pulse"
          >
            <div className="relative">
              <div className="w-full h-[200px] bg-gray-700 rounded mb-6"></div>
              <div className="absolute bottom-2.5 right-2.5 w-[62px] h-[62px] rounded-full bg-gray-700"></div>
            </div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;