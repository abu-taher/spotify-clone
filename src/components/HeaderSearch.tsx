'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchStore } from "@/store/useSearchStore";

function HeaderSearch() {
  const { query, setQuery, fetchSearchResults } = useSearchStore();

  useEffect(() => {
    if (query.length >= 4) {
      const debounceTimeout = setTimeout(() => {
        fetchSearchResults(query);
      }, 300); // Debounce for 300ms

      return () => clearTimeout(debounceTimeout);
    }
  }, [query, fetchSearchResults]);

  return (
    <>
      <div className="sticky top-0 z-50 text-white px-4 lg:px-10 pt-9 pb-5 lg:py-3.5 bg-black flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h3 className="lg:hidden text-white text-[2rem] font-bold mb-4">
          Search
        </h3>
        {/* SEARCH INPUT */}
        <form className="max-w-[468px] w-full relative">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className=" w-6 lg:w-8 h-6 lg:h-8 fill-gray-500 absolute left-4 top-1/2 -translate-y-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" />
          </svg>
          <input
            className="bg-white rounded-full w-full h-11 lg:h-[52px] text-black text-lg font-medium placeholder:text-gray-200 pl-12 lg:pl-[62px] pr-4 focus-visible:outline-none"
            placeholder="Artists, songs, or podcasts"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {/* RIGHT USER */}
        <div className="hidden lg:block">
          <div className="w-fit rounded-full bg-gray-900 flex flex-row items-start justify-start pt-[0.187rem] pb-[0.187rem] pl-[0.187rem] pr-2.5 box-border gap-[0.687rem] z-[1] cursor-pointer">
            <Image
              src="/brand-placeholder-one@2x.png"
              width={68}
              height={68}
              alt="user icon"
              className="h-[2.125rem] w-[2.125rem] relative object-cover"
            />
            <div className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative tracking-[0.01em] font-bold text-white inline-block min-w-[6.375rem]">
                davedirect3
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem]">
              <Image
                src="/brand-placeholder-three.svg"
                width={16}
                height={16}
                alt="arrow icon"
                className="w-[1rem] h-[1rem] relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;