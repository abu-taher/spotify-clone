import React from 'react';
import Image from "next/image";

interface CarouselProps {
    albums: Array<{ id: number; title: string; image: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ albums }) => {
    return (
        <div className='mt-[30px]'>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-x-[30px] gap-y-4'>
                {albums.map((album) => (
                    <div key={album.id} className='relative bg-gray-800 transition hover:bg-gray-1300 hover:transition rounded-md flex items-center gap-5 group'>
                        <Image
                            src={album.image}
                            width={364}
                            height={364}
                            alt={album.title}
                            className='w-[82px] h-[82px]'
                        />
                        <h3 className='relative text-xl tracking-[0.01em] inline-block'><b>{album.title}</b></h3>

                        {/* PLAY BUTTON */}
                        <div className='absolute right-5 w-[62px] h-[62px] flex cursor-pointer opacity-0 transition group-hover:opacity-100 group-hover:transition'>
                            <button className='rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className=' w-7 h-[30px]'><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" /></svg></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
