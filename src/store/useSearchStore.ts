import { create } from 'zustand';


interface SearchState {
  query: string;
  searchResults: any[];
  recentSearches: any[];
  currentPage: number;
  totalPages: number;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  fetchSearchResults: (query: string) => void;
  fetchRecentSearches: () => void;
  removeRecentSearch: (id: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  searchResults: [],
  recentSearches: [],
  currentPage: 1,
  totalPages: 1,
  setQuery: (query) => set({ query }),
  setPage: (page) => set({ currentPage: page }),
  fetchSearchResults: async (query) => {
    const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    set({
      searchResults: data.data || [],
      totalPages: Math.ceil((data.data?.length || 0) / 10),
    });
  },
  fetchRecentSearches: async () => {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // POST request body can be empty
    });

    if (response.ok) {
      const data = await response.json();
      set({ recentSearches: data.recentSearches || [] });
    } else {
      console.error('Failed to fetch recent searches');
    }
  },
  removeRecentSearch: async (id) => {
    const response = await fetch(`/api/search?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      set((state) => ({
        recentSearches: state.recentSearches.filter((search) => search.id !== id),
      }));
    } else {
      console.error('Failed to remove recent search');
    }
  },
}));