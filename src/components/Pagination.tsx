'use client';
import React from 'react';
import { useSearchStore } from '@/store/useSearchStore';

const Pagination = () => {
  const { currentPage, totalPages, setPage } = useSearchStore();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className={`${currentPage === 1 ? "hidden" : "px-4 py-2 mx-1 text-white bg-gray-800 rounded"}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-lightgreen text-black' : 'bg-gray-800 text-white'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={` ${currentPage === totalPages ? "hidden" : "px-4 py-2 mx-1 text-white bg-gray-800 rounded" }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;