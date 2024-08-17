'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import HeaderListing from '@/components/HeaderListing';
import Sidebar from '@/components/Sidebar';

import TracksSekeleton from '@/components/loaders/TracksSekeleton';
import { usePlayerStore } from '@/store/usePlayerStore';

import { useMadeForYouStore } from '@/store/useMadeForYouStore';


export default function TopMixesTracks({ params }: { params: { id: string } }) {
    const albumId = params.id;
    const { album, tracks, isLoading, error, fetchMadeForYouById } = useMadeForYouStore();
    const { playTrack } = usePlayerStore(); // Extract playTrack function from player store

    useEffect(() => {
        if (albumId) {
            fetchMadeForYouById(albumId);
        }
    }, [albumId, fetchMadeForYouById]);

    if (isLoading) return <TracksSekeleton />;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="w-full h-[calc(100vh-72px)] overflow-y-auto bg-yellow-color flex flex-col gap-[50px] pb-[22px]">
                    <HeaderListing />
                    {album && (
                        <div className="px-4 lg:px-10 mb-7">
                            <div className="flex flex-col md:flex-row gap-8">
                                <Image
                                    src={album.cover_xl as string}
                                    width={297}
                                    height={297}
                                    alt="album"
                                    className="h-[297px] w-[297px] drop-shadow-[0_0_24px_rgba(0,0,0,0.25)]"
                                />
                                <div className="mt-auto flex flex-col gap-6 items-start">
                                    <div className="tracking-[-0.02em] text-base leading-none text-white">PUBLIC PLAYLIST</div>
                                    <h1 className="text-[1.875rem] md:text-[3.063rem] lg:text-[122px] leading-[.9] tracking-[-0.02em] font-black text-white">{album.title}</h1>
                                    <div className="flex gap-6">
                                        <div className="mt-auto space-y-2">
                                            <div className="text-base md:text-xl text-white">{album.artist.name}</div>
                                            <div className="text-base md:text-[1.125rem] md:leading-[1.278rem] text-gray-1600">{tracks.length} songs</div>
                                        </div>
                                        <div className='w-[72px] h-[72px] flex cursor-pointer transition mt-auto'>
                                            <button className='w-[72px] h-[72px] rounded-full bg-lightgreen flex items-center justify-center shadow-[0px_8px_8px_rgba(0,0,0,.3)]'>
                                                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className='w-8 h-[34px]'>
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="px-4 lg:px-10 pt-[30px] bg-gray-1700 text-white">
                        <div className="grid custom-grid-track gap-4 sm:px-4 text-darkgray-100 border-b border-darkgray-500 h-9 mb-6">
                            <div className="flex justify-self-end items-center">#</div>
                            <div className="flex items-center uppercase">Title</div>
                            <div className="items-center uppercase hidden sm:flex">Album</div>
                            <div className="items-center uppercase hidden md:flex">Date added</div>
                            <div className="col-start-[last] col-end-[last] flex items-center justify-end">
                                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="w-4 h-4 fill-darkgray-100">
                                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            {tracks.map((track, index) => (
                                <div
                                    key={track.id}
                                    className="grid custom-grid-track gap-4 sm:px-4 py-2 border border-transparent rounded hover:bg-gray-1800 cursor-pointer"
                                    onClick={() => playTrack(track)} // Add onClick handler to play track
                                >
                                    <div className="flex justify-self-end items-center text-darkgray-100">
                                        {index + 1}
                                    </div>
                                    <div className="flex items-center">
                                        <Image
                                            src={track.track_album_image as string}
                                            width={40}
                                            height={40}
                                            alt="cover"
                                            className='w-10 h-10 mr-3'
                                        />
                                        <div className="flex flex-col gap-1 pr-2">
                                            <div className="line-clamp-1 text-ellipsis text-white">{track.title}</div>
                                            <div className="text-darkgray-100 text-sm leading-none">{track.artist}</div>
                                        </div>
                                    </div>
                                    <div className="items-center hidden sm:flex">
                                        <div className="line-clamp-1 text-ellipsis text-darkgray-100 text-sm">{track.album}</div>
                                    </div>
                                    <div className="items-center hidden md:flex">
                                        <div className="line-clamp-1 text-ellipsis text-darkgray-100 text-sm">Date</div>
                                    </div>
                                    <div className="col-start-[last] col-end-[last] flex items-center justify-end">
                                        <div className="text-white">{formatDuration(track.duration)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

function formatDuration(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}