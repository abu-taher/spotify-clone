"use client";
import React from "react";
import Image from "next/image";
import { useSearchStore } from "@/store/useSearchStore";

const RecentSearches: React.FC = () => {
  const { recentSearches, fetchRecentSearches, removeRecentSearch } =
    useSearchStore((state) => ({
      recentSearches: state.recentSearches,
      fetchRecentSearches: state.fetchRecentSearches,
      removeRecentSearch: state.removeRecentSearch,
    }));

  React.useEffect(() => {
    fetchRecentSearches();
  }, [fetchRecentSearches]);

  const handleRemove = (id: string) => {
    removeRecentSearch(id);
  };

  return (
    <div className="hidden lg:block mt-[46px] px-4 lg:px-10">
      <div className="flex justify-between mb-7">
        <h2 className="text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold">
          Recent Searches
        </h2>
        {recentSearches.length === 6 && (
          <a className="text-base tracking-[0.08em] inline-block text-darkgray-200 mt-auto cursor-pointer">
          <b>SEE ALL</b>
        </a>
        )}

      </div>

      <div className="grid grid-cols-5 gap-4 2xl:gap-8">
        {recentSearches.length === 0 ? (
        <p className="text-white text-xl">No Recent Search</p>  
        ) : (
          <>
            {recentSearches.map((recent) => (
              <div
                key={recent.id}
                className="rounded-lg bg-gray-1400 transition hover:bg-gray-1500 hover:transition pt-5 px-5 pb-7 cursor-pointer overflow-hidden group"
              >
                <div className="relative">
                  <button
                    className="absolute top-0 right-0"
                    onClick={() => handleRemove(recent.id)}
                  >
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="w-5 h-5 fill-white"
                    >
                      <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </button>
                  <Image
                    src={recent.artistImage}
                    width={364}
                    height={364}
                    alt={recent.artistName}
                    className="w-full rounded-full mb-6"
                  />
                  <div className="absolute bottom-2.5 right-2.5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition">
                    <button className="w-[62px] h-[62px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]">
                      <svg
                        data-encore-id="icon"
                        role="img"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-7 h-[30px]"
                      >
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <h5 className="self-stretch relative tracking-[0.03em] text-base md:text-xl text-white line-clamp-2 font-bold mb-2">
                  {recent.songName}
                </h5>
                <h6 className="self-stretch relative text-base md:text-[1.125rem] md:leading-[1.278rem] text-darkgray-100 line-clamp-2">
                  {recent.artistName}
                </h6>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecentSearches;