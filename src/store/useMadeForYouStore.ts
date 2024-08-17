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
  picture: string;
  type: string
}

interface MadeForYouState {
  madeForYou: Track[];
  album: Album | null;
  tracks: Track[];
  isLoading: boolean;
  error: string | null;
  fetchMadeForYou: () => void;
  fetchMadeForYouById: (id: string) => void;
}

export const useMadeForYouStore = create<MadeForYouState>((set) => ({
  madeForYou: [],
  album: null,
  tracks: [],
  isLoading: false,
  error: null,

  fetchMadeForYou: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/foryou");
      const data = await response.json();

      set({ madeForYou: data.madeForYou });
    } catch {
      set({ error: "Failed to fetch 'Made For You' content" });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchMadeForYouById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/foryou/${id}`);
      const data = await response.json();

      if (response.ok) {
        set({ album: data.album, tracks: data.tracks });
      } else {
        set({ error: data.error || "Failed to fetch data by ID" });
      }
    } catch {
      set({ error: "Failed to fetch data by ID" });
    } finally {
      set({ isLoading: false });
    }
  },
}));