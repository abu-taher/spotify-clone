"use client";

import React, { useState, useRef } from 'react';
import Image from "next/image";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume at 100%
  const [isMuted, setIsMuted] = useState(false); // New state for mute functionality
  const [prevVolume, setPrevVolume] = useState<number>(1); // Store previous volume
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = prevVolume; // Restore the previous volume
        setVolume(prevVolume); // Restore the volume state
        setIsMuted(false);
      } else {
        setPrevVolume(volume); // Store the current volume before muting
        audioRef.current.volume = 0; // Mute the audio
        setVolume(0); // Set volume to 0
        setIsMuted(true);
      }
    }
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 w-full h-[84px] bg-black flex items-center flex-row justify-between px-2'>
      <div className='w-1/2 md:w-[30%] pl-2'>
        <div className='flex flex-row justify-start items-center'>
          {/* IMAGE */}
          <div className=' mr-2'>
            <Image
              src="/song-cover.svg"
              width={310}
              height={310}
              alt="song cover"
              className='w-14 h-14 rounded'
            />
          </div>

          <div className='mx-2 flex flex-col gap-2'>
            {/* NAME */}
            <div className=' text-lg text-white leading-none'>Play It Safe</div>
            {/* ARTIST NAME */}
            <div className=' text-base leading-none tracking-[-0.05em] text-darkgray-100'>
              Julia Wolf
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/2 md:w-2/5 max-w-[722px] pr-2 md:pr-0'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full flex gap-4 mb-2 flex-row flex-nowrap items-center justify-center'>
            <button className='p-2 group'>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="fill-darkgray-100 group-hover:fill-white w-4 h-4"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" /></svg>
            </button>

            <button onClick={togglePlayPause} className=' focus-visible:outline-none'>
              <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                {isPlaying ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="fill-black w-4 h-4"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" /></svg> : <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="fill-black w-4 h-4"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" /></svg>}
              </div>
            </button>

            <button className='p-2 group'>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="fill-darkgray-100 group-hover:fill-white w-4 h-4 -scale-[1]"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" /></svg>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 w-full">
            <span className=' text-darkgray-100 text-xs leading-none'>{Math.floor(currentTime / 60)}:{("0" + Math.floor(currentTime % 60)).slice(-2)}</span>
            <input
              type="range"
              min="0"
              max={duration.toString()}
              value={currentTime.toString()}
              onChange={handleProgressChange}
              className="w-full max-w-[552px] custom-range"
            />
            <span className=' text-darkgray-100 text-xs leading-none'>{Math.floor(duration / 60)}:{("0" + Math.floor(duration % 60)).slice(-2)}</span>
          </div>
        </div>
      </div>

      <div className='w-[30%] justify-end pr-2 hidden md:flex'>
        <div className="flex items-center">
          {/* CLICK TO MUTE VOLUME */}
          <button onClick={toggleMute} className=' cursor-pointer group mr-2'>
            {
              isMuted ? <svg data-encore-id="icon" role="presentation" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" className="fill-darkgray-100 group-hover:fill-white w-4 h-4"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" /><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" /></svg> : <svg data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" className="fill-darkgray-100 group-hover:fill-white w-4 h-4"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" /><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" /></svg>
            }
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 custom-volume"
            style={{ backgroundSize: `${volume * 100}% 100%` }} // Update background-size dynamically
          />
        </div>

        <audio
          ref={audioRef}
          src="https://cdn-preview-4.dzcdn.net/stream/c-48dcd704e15944fb14e9c3d857dc2f8e-11.mp3"
          onTimeUpdate={updateTime}
          onLoadedMetadata={updateTime}
        ></audio>
      </div>

      <style jsx>{`
        input[type="range"].custom-range::-webkit-slider-runnable-track {
          background-size: ${`${(currentTime / duration) * 100}% 100%`};
        }

        
        input[type="range"].custom-volume::-webkit-slider-runnable-track {
          background-size: ${volume * 100}% 100%; /* Update background-size based on volume */
        }
      `}</style>
    </div>
  )
}

export default Player
