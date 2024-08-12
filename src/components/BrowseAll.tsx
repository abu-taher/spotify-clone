import React from 'react'
import Image from "next/image";

function BrowseAll() {
    const browseAll = [
        {
            title: 'Podcasts',
            imageSrc: '/album-art-6@2x.png',
            bgColor: 'bg-seagreen'
        },
        {
            title: 'Made For You',
            imageSrc: '/album-art-71@2x.png',
            bgColor: 'bg-darkslateblue-200'
        },
        {
            title: 'Charts',
            imageSrc: '/album-art-8@2x.png',
            bgColor: 'bg-mediumpurple'
        },
        {
            title: 'New Releases',
            imageSrc: '/album-art-9@2x.png',
            bgColor: 'bg-crimson'
        },

        {
            title: 'Discover',
            imageSrc: '/album-art-10@2x.png',
            bgColor: 'bg-mediumpurple'
        },
        {
            title: 'Concerts',
            imageSrc: '/album-art-111@2x.png',
            bgColor: 'bg-darkslateblue-200'
        },
        {
            title: 'R&B',
            imageSrc: '/album-art-12@2x.png',
            bgColor: 'bg-mediumvioletred-200'
        },
        {
            title: 'Frequency',
            imageSrc: '/album-art-13@2x.png',
            bgColor: 'bg-thistle'
        },

        {
            title: 'Christian & Gospel',
            imageSrc: '/album-art-14@2x.png',
            bgColor: 'bg-cornflowerblue-100'
        },
        {
            title: 'Soul',
            imageSrc: '/album-art-15@2x.png',
            bgColor: 'bg-mediumvioletred-100'
        },
        {
            title: 'Chill',
            imageSrc: '/album-art-16@2x.png',
            bgColor: 'bg-slategray'
        },
        {
            title: 'Mood',
            imageSrc: '/album-art-17@2x.png',
            bgColor: 'bg-mediumpurple'
        },

        {
            title: 'Equal',
            imageSrc: '/album-art-18@2x.png',
            bgColor: 'bg-green'
        },
        {
            title: 'Alternative',
            imageSrc: '/album-art-19@2x.png',
            bgColor: 'bg-paleturquoise'
        },
        {
            title: 'Workout',
            imageSrc: '/album-art-20@2x.png',
            bgColor: 'bg-gray-100'
        },
        {
            title: 'Party',
            imageSrc: '/album-art-211@2x.png',
            bgColor: 'bg-darkmagenta'
        },

        {
            title: 'Pop',
            imageSrc: '/album-art-22@2x.png',
            bgColor: 'bg-darkslateblue-100'
        },
        {
            title: 'Hip-Hop',
            imageSrc: '/album-art-23@2x.png',
            bgColor: 'bg-chocolate'
        },
        {
            title: 'Afro',
            imageSrc: '/album-art-24@2x.png',
            bgColor: 'bg-darkmagenta'
        },
        {
            title: 'Rewind',
            imageSrc: '/album-art-25@2x.png',
            bgColor: 'bg-cornflowerblue-200'
        },
    ];
    return (
        <>
            <div className='my-[46px] px-4 lg:px-10 text-white'>
                <div className='mb-7'>
                    <h2 className='text-[1.188rem] md:text-[1.625rem] lg:text-[2rem] text-white tracking-[-0.05em] font-bold'>Browse All</h2>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-[30px]'>
                    {browseAll.map((browse, index) => (
                        <a key={index} className={`h-[92px] lg:h-[224px] rounded-md lg:rounded-[10px] p-3 lg:p-5 relative overflow-hidden cursor-pointer ${browse.bgColor}`}>
                            {/* TITLE */}
                            <h3 className='tracking-[-0.03em] text-[1.125rem] md:text-[1.5rem] lg:text-3xl font-bold text-white w-[90%] lg:w-full'>{browse.title}</h3>
                            {/* IMAGE */}
                            <Image
                                src={browse.imageSrc}
                                width={341}
                                height={341}
                                alt={browse.title}
                                className='w-[85px] lg:w-[10.631rem] h-[85px] lg:h-[10.631rem] absolute -bottom-2.5 lg:-bottom-7 -right-7 lg:-right-11'
                            />
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrowseAll
