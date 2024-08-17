"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMadeForYouStore } from "@/store/useMadeForYouStore";
import SkeletonLoader from "./loaders/SkeletonLoader";

function MadeForYou() {
  const { madeForYou, isLoading, error, fetchMadeForYou } =
    useMadeForYouStore();

  useEffect(() => {
    fetchMadeForYou();
  }, [fetchMadeForYou]);

  if (isLoading) return <SkeletonLoader />;

  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="px-4 lg:px-10">
        {/* TITLE AND SEE ALL */}
        <div className="flex justify-between mb-5 md:mb-[26px]">
          <h2 className="tracking-[-0.03em] text-[1.125rem] md:text-[1.5rem] lg:text-3xl font-bold text-white">
            Made for you
          </h2>
          <Link
            href="/madeForYou"
            className="text-base tracking-[0.08em] inline-block text-darkgray-200 mt-auto cursor-pointer"
          >
            <b>SEE ALL</b>
          </Link>
        </div>

        {/* TOP MADE FOR YOU LIST */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 2xl:gap-[54px] overflow-auto pb-6">
          {madeForYou?.slice(0, 5)?.map((made, index) => (
            <Link href={`/madeForYou/tracks/${made.id}`}>
                <div
              key={index}
              className="w-[224px] lg:w-auto h-full flex-shrink-0 bg-gray-1400 transition hover:bg-gray-1500 hover:transition rounded-lg p-5 cursor-pointer overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={made?.picture}
                  width={364}
                  height={364}
                  alt={made?.title}
                  className="w-full rounded mb-6"
                />
                {/* PLAY BUTTON */}
                <div className="absolute bottom-2.5 right-2.5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition">
                  <button className="w-[62px] h-[62px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]">
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className=" w-7 h-[30px]"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                    </svg>
                  </button>
                </div>
              </div>

              <h5 className="self-stretch relative tracking-[0.03em] text-base md:text-xl text-white line-clamp-2 font-bold mb-2">
                {made?.title}
              </h5>
              <h6 className="self-stretch relative text-base md:text-[1.125rem] md:leading-[1.278rem] text-darkgray-100 line-clamp-2">
                {made?.type}
              </h6>
            </div>
            </Link>

          ))}
        </div>
      </div>
    </>
  );
}

export default MadeForYou;