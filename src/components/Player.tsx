"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import PlaySvg from "./svgicons/PlaySvg";
import PauseSvg from "./svgicons/PauseSvg";
import PreviousSvg from "./svgicons/PreviousSvg";
import NextSvg from "./svgicons/NextSvg";
import MuteSvg from "./svgicons/MuteSvg";
import UnMuteSvg from "./svgicons/UnMuteSvg";
import { useCarouselStore } from "@/store/useCarouselStore";
import { usePlayerStore } from "@/store/usePlayerStore";

function Player() {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    audioRef,
    currentTrack,
    playTrack,
    nextTrack,
    previousTrack,
    togglePlayPause,
    updateTime,
    handleProgressChange,
    handleVolumeChange,
    toggleMute,
  } = usePlayerStore();


  const audioElementRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioElementRef.current && currentTrack) {
        // Only set the src if it's a new track
        if (audioElementRef.current.src !== currentTrack.preview) {
            audioElementRef.current.src = currentTrack.preview;
            audioElementRef.current.currentTime = 0; // Reset to start for a new track
        }
        if (isPlaying) {
            audioElementRef.current.play();
        }
    }
}, [currentTrack]);  // Removed `isPlaying` from dependencies to avoid resetting on pause/play


useEffect(() => {
    if (audioElementRef.current) {
        usePlayerStore.setState({ audioRef: audioElementRef.current });
        audioElementRef.current.addEventListener("timeupdate", updateTime);
    }
    return () => {
        audioElementRef.current?.removeEventListener("timeupdate", updateTime);
    };
}, [updateTime]);


//   useEffect(() => {
//     if (currentTrack && audioElementRef.current) {
//       audioElementRef.current.src = currentTrack.preview;
//       if (isPlaying) {
//         audioElementRef.current.play();
//       }
//     }
//   }, [currentTrack, isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full h-[84px] bg-black flex items-center flex-row justify-between px-2">
      <div className="w-1/2 md:w-[30%] pl-2">
        <div className="flex flex-row justify-start items-center relative pl-16">
          <div className=" absolute left-0">
            <Image
              src={currentTrack?.track_album_image || "/blank_image.png"}
              width={310}
              height={310}
              alt="song cover"
              className="w-14 h-14 rounded"
            />
          </div>
          <div className="mx-2 flex flex-col gap-2">
            <div className="text-lg text-white leading-none overflow-ellipsis line-clamp-2">
              {currentTrack?.title || "No Track Playing"}
            </div>
            <div className="text-base leading-none tracking-[-0.05em] text-darkgray-100">
              {currentTrack?.artist || "No Artist"}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-2/5 max-w-[722px] pr-2 md:pr-0">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex gap-4 mb-2 flex-row flex-nowrap items-center justify-center">
            <button onClick={previousTrack} className="p-2 group">
              <PreviousSvg />
            </button>
            <button
              onClick={togglePlayPause}
              className="focus-visible:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                {isPlaying ? <PlaySvg /> : <PauseSvg />}
              </div>
            </button>
            <button onClick={nextTrack} className="p-2 group">
              <NextSvg />
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2 w-full">
            <span className="text-darkgray-100 text-xs leading-none">
              {Math.floor(currentTime / 60)}:
              {("0" + Math.floor(currentTime % 60)).slice(-2)}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => handleProgressChange(Number(e.target.value))}
              className="w-full max-w-[552px] custom-range"
            />
            <span className="text-darkgray-100 text-xs leading-none">
              {Math.floor(duration / 60)}:
              {("0" + Math.floor(duration % 60)).slice(-2)}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[30%] justify-end pr-2 hidden md:flex">
        <div className="flex items-center">
          <button onClick={toggleMute} className="cursor-pointer group mr-2">
            {isMuted ? <MuteSvg /> : <UnMuteSvg />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-20 custom-volume"
            style={{ backgroundSize: `${volume * 100}% 100%` }}
          />
        </div>
      </div>
      <audio ref={audioElementRef} />
      <style jsx>{`
        input[type="range"].custom-range::-webkit-slider-runnable-track {
          background-size: ${`${(currentTime / duration) * 100}% 100%`};
        }
        input[type="range"].custom-volume::-webkit-slider-runnable-track {
          background-size: ${volume * 100}% 100%; /* Update background-size based on volume */
        }
      `}</style>
    </div>
  );
}

export default Player;