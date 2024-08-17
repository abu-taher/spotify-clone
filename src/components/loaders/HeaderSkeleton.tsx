import React from "react";

const HeaderSkeleton: React.FC = () => {
  return (
    <div className="px-4 lg:px-10">
      {/* HEADER SKELETON */}
      <header className="py-6 flex items-center justify-between">
        {/* LEFT AND RIGHT ARROW ICON SKELETON */}
        <div className="flex items-center gap-2">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"
            />
          ))}
        </div>

        {/* USER PROFILE SKELETON */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
          <div className="flex flex-col">
            <div className="w-24 h-4 bg-gray-700 animate-pulse rounded" />
          </div>
          <div className="w-4 h-4 bg-gray-700 animate-pulse rounded ml-2" />
        </div>
      </header>

      {/* ALBUM CAROUSEL SKELETON */}
      <div className="mt-4">
        <div className="h-8 w-3/4 bg-gray-700 animate-pulse mb-6 rounded"></div>
        <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-24 bg-gray-800 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;