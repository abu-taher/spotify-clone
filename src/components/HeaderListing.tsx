import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function HeaderListing() {
    return (
        <>
            <div className='sticky top-0 z-50 px-4 lg:px-10 py-3.5 bg-gray-500 flex items-center justify-between'>
                {/* BACK ARROW ICON */}
                <div className='flex items-center gap-2'>
                    <Link href="/"
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
                    </Link>
                </div>
                {/* RIGHT USER */}
                <div className='hidden lg:block'>
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
    )
}

export default HeaderListing
