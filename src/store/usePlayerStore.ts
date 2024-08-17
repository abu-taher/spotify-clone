import { create } from 'zustand';
import { useMadeForYouStore } from './useMadeForYouStore';
import { useTopMixesStore } from './useTopMixesStore';

interface Track {
    id: string;
    title: string;
    preview: string;
    artist: string;
    album: string;
    duration: number;
    track_album_image: string;
}

interface PlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    prevVolume: number;
    audioRef: HTMLAudioElement | null;
    currentTrack: Track | null;
    playTrack: (track: Track) => void;
    nextTrack: () => void;
    previousTrack: () => void;
    togglePlayPause: () => void;
    updateTime: () => void;
    handleProgressChange: (value: number) => void;
    handleVolumeChange: (value: number) => void;
    toggleMute: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isMuted: false,
    prevVolume: 1,
    audioRef: null,
    currentTrack: null,
    playTrack: (track) => set((state) => {
        const audio = state.audioRef;
        if (audio) {
            if (state.currentTrack?.id !== track.id) {
                audio.src = track.preview;  // Set the new track source only if it's different
                audio.currentTime = 0;       // Reset time only for a new track
                audio.play();
            } else if (!state.isPlaying) {
                audio.play();  // Resume the current track without resetting the time
            }
            return { isPlaying: true, currentTrack: track };
        }
        return state;
    }),



    nextTrack: () => {
        const { currentTrack } = get();
        const madeForYouTracks = useMadeForYouStore.getState().tracks;
        const topMixesTracks = useTopMixesStore.getState().tracks;
        const allTracks = [...madeForYouTracks, ...topMixesTracks];

        return set((state) => {
            const currentIndex = allTracks.findIndex(track => track.id === currentTrack?.id);
            const nextTrack = allTracks[currentIndex + 1] || allTracks[0]; // Loop to the first track if at the end
            if (nextTrack) {
                const audio = state.audioRef;
                if (audio) {
                    audio.src = nextTrack.preview;
                    audio.play();
                }
                return { currentTrack: nextTrack, isPlaying: true };
            }
            return state;
        });
    },

    previousTrack: () => {
        const { currentTrack } = get();
        const madeForYouTracks = useMadeForYouStore.getState().tracks;
        const topMixesTracks = useTopMixesStore.getState().tracks;
        const allTracks = [...madeForYouTracks, ...topMixesTracks];

        return set((state) => {
            const currentIndex = allTracks.findIndex(track => track.id === currentTrack?.id);
            const prevTrack = allTracks[currentIndex - 1] || allTracks[allTracks.length - 1]; // Loop to the last track if at the beginning
            if (prevTrack) {
                const audio = state.audioRef;
                if (audio) {
                    audio.src = prevTrack.preview;
                    audio.play();
                }
                return { currentTrack: prevTrack, isPlaying: true };
            }
            return state;
        });
    },

    togglePlayPause: () => set((state) => {
        const audio = state.audioRef;
        if (audio) {
            if (state.isPlaying) {
                audio.pause();
            } else {
                audio.play();  // Play from the current time
            }
            return { isPlaying: !state.isPlaying };
        }
        return state;
    }),


    updateTime: () => set((state) => {
        const audio = state.audioRef;
        if (audio) {
            return {
                currentTime: audio.currentTime,
                duration: audio.duration, // Update duration here
            };
        }
        return state;
    }),

    handleProgressChange: (value) => set((state) => {
        if (state.audioRef) {
            state.audioRef.currentTime = value;
            return { currentTime: state.audioRef.currentTime };
        }
        return state;
    }),
    handleVolumeChange: (value) => set((state) => {
        if (state.audioRef) {
            state.audioRef.volume = value;
            return {
                volume: value,
                isMuted: value === 0,
            };
        }
        return state;
    }),
    toggleMute: () => set((state) => {
        if (state.audioRef) {
            if (state.isMuted) {
                state.audioRef.volume = state.prevVolume;
                return {
                    volume: state.prevVolume,
                    isMuted: false,
                };
            } else {
                return {
                    prevVolume: state.volume,
                    volume: 0,
                    isMuted: true,
                };
            }
        }
        return state;
    }),
}));