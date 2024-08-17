"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useBrowseAllStore } from "@/store/useBrowseAllStore";
import BrowseAllLoader from "./loaders/BrowseAllLoader";

function BrowseAll() {
  const { items, isLoading, error, fetchItems } = useBrowseAllStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (isLoading) {
    return <BrowseAllLoader/>
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  return (
    <>
      <div className="my-[46px] px-4 lg:px-10 text-white">
        <div className="mb-7">
          <h2 className="text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold">
            Browse All
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 2xl:gap-8">
          {items.map((browse, index) => (
            <a
              key={index}
              className={`h-[92px] lg:h-[224px] rounded-md lg:rounded-[10px] p-3 lg:p-5 relative overflow-hidden cursor-pointer ${browse.bgcolor}`}
            >
              {/* TITLE */}
              <h3 className="tracking-[-0.03em] text-[1.125rem] md:text-[1.5rem] lg:text-3xl font-bold text-white w-[90%] lg:w-full">
                {browse.title}
              </h3>
              {/* IMAGE */}
              <Image
                src={browse.image}
                width={341}
                height={341}
                alt={browse.title}
                className="w-[85px] lg:w-[10.631rem] h-[85px] lg:h-[10.631rem] absolute -bottom-2.5 lg:-bottom-7 -right-7 lg:-right-11"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrowseAll;