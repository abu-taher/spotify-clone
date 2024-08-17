import {create} from 'zustand';

type Item = {
  id: number;
  title: string;
  image: string;
  bgcolor: string;
};

interface BrowseAllState {
  items: Item[];
  isLoading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
}

export const useBrowseAllStore = create<BrowseAllState>((set) => ({
  items: [],
  isLoading: false,
  error: null,
  fetchItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/browseall');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      set({ items: data.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));