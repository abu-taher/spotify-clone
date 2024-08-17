import React from 'react'

const BrowseAllLoader = () => {
  return (
    <div className="my-[46px] px-4 lg:px-10 text-white">
    <div className="mb-7">
      <h2 className="text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold">
        Browse All
      </h2>
    </div>

    {/* Skeleton Loader Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-[30px]">
      {/* Skeleton Item */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-[92px] lg:h-[224px] rounded-md lg:rounded-[10px] p-3 lg:p-5 relative overflow-hidden bg-gray-800 animate-pulse"
        >
          {/* Skeleton Title */}
          <div className="h-5 bg-gray-700 rounded mb-2 w-3/4 lg:w-full" />

          {/* Skeleton Image */}
          <div className="w-[85px] lg:w-[10.631rem] h-[85px] lg:h-[10.631rem] bg-gray-700 rounded absolute -bottom-2.5 lg:-bottom-7 -right-7 lg:-right-11" />
        </div>
      ))}
    </div>
  </div>
  )
}

export default BrowseAllLoader