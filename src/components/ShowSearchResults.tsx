'use client';
import React from 'react';
import Image from "next/image";
import { useSearchStore } from '@/store/useSearchStore';
import Pagination from './Pagination'; // Import the Pagination component

const ShowSearchResults = () => {
  const { query, searchResults, currentPage } = useSearchStore();

  if (query.length < 4) {
    return null; // Do not render anything if query length is less than 4
  }


  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedResults = searchResults.slice(startIndex, endIndex);

  return (
    <div className='mt-[46px] px-4 lg:px-10 mb-10'>
      <div className='flex justify-between mb-7'>
        <h2 className='text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold'>Results</h2>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 2xl:gap-8'>
        {paginatedResults.map((result, index) => (
          <div key={index} className='rounded-lg bg-gray-1400 transition hover:bg-gray-1500 hover:transition pt-5 px-5 pb-7 cursor-pointer overflow-hidden group'>
            <div className='relative'>
              <Image
                src={result.artist.picture_medium}
                width={364}
                height={364}
                alt={result.artist.name}
                className='w-full rounded-full mb-6'
              />
              <div className='absolute bottom-2.5 right-2.5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition'>
                <button className='w-[62px] h-[62px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]'>
                  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className='w-7 h-[30px]'>
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                  </svg>
                </button>
              </div>
            </div>
            <h5 className='self-stretch relative tracking-[0.03em] text-base md:text-xl text-white line-clamp-2 font-bold mb-2'>{result.title}</h5>
            <h6 className='self-stretch relative text-base md:text-[1.125rem] md:leading-[1.278rem] text-darkgray-100 line-clamp-2'>{result.album.title}</h6>
          </div>
        ))}
      </div>

      {/* Render Pagination Component */}
      {searchResults.length > 10 && <Pagination />}
    </div>
  );
};

export default ShowSearchResults;