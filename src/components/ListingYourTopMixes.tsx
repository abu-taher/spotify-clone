'use client';
import React, { useEffect } from 'react'
import Image from "next/image";
import { useTopMixesStore } from '@/store/useTopMixesStore';
import TopMixesSectionSkeleton from './loaders/TopMixesSectionSkeleton';
import Link from 'next/link';

function ListingYourTopMixes() {
    const { topMixes, isLoading, error, fetchTopMixes } = useTopMixesStore();

    useEffect(() => {
      fetchTopMixes();
    }, [fetchTopMixes]);

    if (isLoading) return <TopMixesSectionSkeleton/>;
  if (error) return <div>{error}</div>;

    return (
        <>
            <div className='px-4 lg:px-10 mt-6 lg:mt-10 mb-12'>
                <div className=' mb-9'>
                    <h2 className='text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold'>Your top mixes</h2>
                </div>

                {/* TOP MIX LIST */}
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 2xl:gap-[30px]'>
                    {topMixes?.map((mix, index) => (
                        <Link href={`/yourTopMixes/tracks/${mix?.id}`} key={mix.id}>
                            <div key={index} className='flex-shrink-0 bg-gray-1400 transition hover:bg-gray-1500 hover:transition rounded-lg p-5 cursor-pointer overflow-hidden group'>
                            <div className='relative'>
                                <Image
                                    src={mix?.picture}
                                    width={364}
                                    height={364}
                                    alt={mix?.title}
                                    className='w-full rounded mb-6'
                                />
                                {/* PLAY BUTTON */}
                                <div className='absolute bottom-2.5 right-2.5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition'>
                                    <button className='w-[62px] h-[62px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className=' w-7 h-[30px]'><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" /></svg></button>
                                </div>
                            </div>

                            <h5 className='self-stretch relative tracking-[0.03em] text-base md:text-xl text-white line-clamp-2 font-bold mb-2'>{mix?.title}</h5>
                            <h6 className='self-stretch relative text-base md:text-[1.125rem] md:leading-[1.278rem] text-darkgray-100 line-clamp-2'>{mix?.type}</h6>
                        </div>
                        </Link>

                    ))}
                </div>
            </div>
        </>
    )
}

export default ListingYourTopMixes