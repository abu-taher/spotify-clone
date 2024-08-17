import { create } from "zustand";

interface Track {
  id: string;
  title: string;
  duration: number;
  preview: string;
  artist: string;
  album: string;
  track_album_image: string
}

interface AlbumDetails {
  id: string;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  artistName: string;
  artistId: string;
  artist_pic: string;
}

interface Album {
  albumId: number;
  title: string;
  image: string;
}

interface Slide {
  slideId: number;
  albums: Album[];
}

interface CarouselState {
  carousel: Slide[];
  loading: boolean;
  error: string | null;
  fetchCarousel: () => Promise<void>;
  album: AlbumDetails | null;
  tracks: Track[];
  fetchAlbumDetails: (albumId: string) => Promise<void>;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  album: null,
  tracks: [],
  carousel: [],
  loading: false,
  error: null,
  fetchCarousel: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/api/albums");
      const data = await response.json();
      set({ carousel: data.carousel, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch carousel data", loading: false });
    }
  },
  fetchAlbumDetails: async (albumId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/albums/${albumId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch album data");
      }
      const data = await response.json();
      set({ album: data.album, tracks: data.tracks, loading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch album data",
        loading: false,
      });
    }
  },
}));