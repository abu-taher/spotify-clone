import React from 'react';

const TracksSkeleton = () => {
  return (
    <main className="w-full h-[calc(100vh-72px)] overflow-y-auto bg-yellow-color flex flex-col gap-[50px] pb-[22px]">
    <div className="px-4 lg:px-14 mb-7 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Album Cover Skeleton */}
        <div className="h-[297px] w-[297px] bg-gray-700 rounded-md drop-shadow-[0_0_24px_rgba(0,0,0,0.25)]"></div>

        {/* Album Details Skeleton */}
        <div className="mt-auto flex flex-col gap-6 items-start">
          <div className="h-4 w-32 bg-gray-700 rounded-md"></div>
          <div className="h-12 w-[60%] bg-gray-700 rounded-md"></div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-48 bg-gray-700 rounded-md"></div>
              <div className="h-4 w-32 bg-gray-700 rounded-md"></div>
            </div>
            <div className="w-[72px] h-[72px] bg-gray-700 rounded-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* Track List Skeleton */}
      <div className="px-4 lg:px-10 pt-[30px] bg-gray-1700 text-white">
        <div className="grid custom-grid-track gap-4 sm:px-4 text-darkgray-100 border-b border-darkgray-500 h-9 mb-6">
          <div className="flex justify-self-end items-center h-4 w-4 bg-gray-700 rounded-md"></div>
          <div className="flex items-center h-4 w-24 bg-gray-700 rounded-md"></div>
          <div className="items-center uppercase hidden sm:flex h-4 w-20 bg-gray-700 rounded-md"></div>
          <div className="items-center uppercase hidden md:flex h-4 w-24 bg-gray-700 rounded-md"></div>
          <div className="col-start-[last] col-end-[last] flex items-center justify-end h-4 w-4 bg-gray-700 rounded-md"></div>
        </div>

        <div>
          {/* Repeat the skeleton for each track */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="grid custom-grid-track gap-4 sm:px-4 py-2 border border-transparent rounded bg-gray-700 animate-pulse"
            >
              <div className="flex justify-self-end items-center h-4 w-4 bg-gray-600 rounded-md"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div className="flex flex-col gap-1 pr-2">
                  <div className="h-4 w-32 bg-gray-600 rounded-md"></div>
                  <div className="h-4 w-24 bg-gray-600 rounded-md"></div>
                </div>
              </div>
              <div className="items-center hidden sm:flex h-4 w-24 bg-gray-600 rounded-md"></div>
              <div className="items-center hidden md:flex h-4 w-24 bg-gray-600 rounded-md"></div>
              <div className="col-start-[last] col-end-[last] flex items-center justify-end h-4 w-24 bg-gray-600 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
};

export default TracksSkeleton;