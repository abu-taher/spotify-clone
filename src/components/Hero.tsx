'use client';

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import MyCarousel from './MyCarousel';
import { useCarouselStore } from '@/store/useCarouselStore';
import HeaderSkeleton from './loaders/HeaderSkeleton';
import Link from 'next/link';

type CarouselHandle = {
  scrollPrev: () => void;
  scrollNext: () => void;
};

type HeroProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Hero({ setOpenSidebar }: HeroProps) {
  const carouselRef = useRef<CarouselHandle>(null);

  const { carousel, loading, error, fetchCarousel } = useCarouselStore();

  useEffect(() => {
    fetchCarousel();
  }, [fetchCarousel]);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollNext();
    }
  };

  if (loading)
    return (
      <HeaderSkeleton />
    );
  if (error) return <p>{error}</p>; 

  return (
    <>
      <div className='px-4 lg:px-10'>
        {/* HEADER */}
        <header className='py-6 flex items-center justify-between'>
          {/* LEFT ARROW ICON */}
          <div className='flex items-center gap-2'>
            <button
              onClick={scrollPrev}
              className='w-8 h-8 rounded-full bg-[#000000b3] inline-flex items-center justify-center cursor-pointer relative'
            >
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                className="w-4 h-4 fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z" />
              </svg>
            </button>

            {/* RIGHT ARROW ICON */}
            <button
              onClick={scrollNext}
              className='w-8 h-8 rounded-full bg-[#000000b3] inline-flex items-center justify-center cursor-pointer relative'
            >
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                className="w-4 h-4 fill-white -scale-[1]"
                viewBox="0 0 16 16"
              >
                <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z" />
              </svg>
            </button>
          </div>

          {/* RIGHT USER */}
          <div className='flex items-center gap-4'>
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
            <div className='lg:hidden' onClick={()=> setOpenSidebar(true)}>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className=" w-6 h-6 fill-white"><path d="M21 6H3V4h18v2zm0 14H3v-2h18v2zm0-7H3v-2h18v2z" /></svg>
            </div>
          </div>
        </header>

        {/* ALBUM CAROUSEL */}
        <div className='text-white mt-4'>
          <h1 className='text-[1.438rem] md:text-[1.938rem] lg:text-[2.438rem] tracking-[-0.01em] font-bold font-[inherit]'>Good afternoon</h1>
          <div className='mt-[30px]'>
            <div className=''>
              <MyCarousel
                ref={carouselRef}
                options={{ loop: true }}
              >
                {carousel?.map((slide) => (
                  <div
                    key={slide?.slideId}
                    className={`flex flex-col space-y-4`}
                  >
                    {slide?.albums?.map((album) => (
                      <Link 
                      href={`/tracks/${album?.albumId}`} 
                      key={album?.albumId} // Added key prop here
                      >
                        <div
                          className='relative bg-gray-800 transition hover:bg-gray-1300 hover:transition rounded-md flex items-center gap-5 group'
                        >
                          <Image
                            src={album?.image}
                            width={364}
                            height={364}
                            alt={album?.title}
                            className='w-[82px] h-[82px]'
                          />
                          <h3 className='relative text-base md:text-xl tracking-[0.01em] inline-block'><b>{album?.title}</b></h3>

                        {/* PLAY BUTTON */}
                        <div className='absolute right-5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition'>
                            <button className='w-[62px] h-[62px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]'>
                              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className=' w-7 h-[30px]'>
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </MyCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;