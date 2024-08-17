import { create } from "zustand";

interface Artist {
  id: string;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
}

interface Album {
  id: string;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  artist: Artist;
}

interface Track {
  id: string;
  title: string;
  duration: number;
  preview: string;
  artist: string;
  album: string;
  track_album_image: string;
  picture:String;
  type:String
}


interface TopMixesState {
  topMixes: Track[];
  isLoading: boolean;
  album: Album | null;
  tracks: Track[];
  error: string | null;
  fetchTopMixes: () => void;
  fetchTopMixesById: (id: string) => void;
}

export const useTopMixesStore = create<TopMixesState>((set) => ({
  topMixes: [],
  album: null,
  tracks: [],
  isLoading: false,
  error: null,

  fetchTopMixes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/topmixes");
      const data = await response.json();

      set({ topMixes: data.topMixes });
    } catch {
      set({ error: "Failed to fetch top mixes" });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchTopMixesById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/topmixes/${id}`);
      const data = await response.json();

      if (response.ok) {
        set({ album: data.album, tracks: data.tracks });
      } else {
        set({ error: data.error || "Failed to fetch top mixes" });
      }
    } catch (error) {
      set({ error: "Failed to fetch top mixes" });
    } finally {
      set({ isLoading: false });
    }
  },
}));