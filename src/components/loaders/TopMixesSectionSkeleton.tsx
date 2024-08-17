import React from "react";

const TopMixesSectionSkeleton: React.FC = () => {
  return (
    <div className="px-4 lg:px-10 mt-6 lg:mt-10 mb-12">
      {/* TITLE SKELETON */}
      <div className="mb-9">
        <div className="h-8 w-1/4 bg-gray-700 animate-pulse rounded"></div>
      </div>

      {/* TOP MIX LIST SKELETON */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 2xl:gap-[30px]">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-800 rounded-lg p-5 animate-pulse"
          >
            <div className="relative">
              <div className="w-full h-[224px] bg-gray-700 rounded mb-6"></div>
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

export default TopMixesSectionSkeleton;