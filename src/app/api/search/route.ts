import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
// In-memory storage for recent searches
let recentSearches: Array<{
    id: string;
    query: string;
    artistName: string;
    artistImage: string;
    albumName: string;
    songName: string;
  }> = [];

// Limit the number of recent searches to store
const MAX_RECENT_SEARCHES = 10;

// Function to add a search to the recent searches list
function addRecentSearch(data: {
    query: string;
    artistName: string;
    artistImage: string;
    albumName: string;
    songName: string;
  }) {
    // Create a new search entry with a unique ID
    const searchEntry = {
      id: uuidv4(),
      ...data,
    };

    // Remove the search if it already exists
    recentSearches = recentSearches.filter(search => search.query !== data.query);

    // Add the search to the start of the list
    recentSearches.unshift(searchEntry);

    // Limit the size of the list
    if (recentSearches.length > MAX_RECENT_SEARCHES) {
      recentSearches.pop();
    }
  }


export async function GET(req: NextRequest) {
  try {
    // Extract search query and type from request URL
    const url = new URL(req.url);
    const query = url.searchParams.get('query') || '';
    const type = url.searchParams.get('type') || 'all'; // Default to 'all' for searching all types

    if (!query) {
      return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    // Define the base Deezer API URL
    const DEEZER_API_BASE_URL = 'https://api.deezer.com';

    // Construct the API URL based on the search type
    const searchUrl = `${DEEZER_API_BASE_URL}/search${type !== 'all' ? `/${type}` : ''}?q=${encodeURIComponent(query)}`;

    // Fetch data from Deezer API
    const response = await fetch(searchUrl);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch search results' }, { status: response.status });
    }

    const jsonResponse = await response.json();

    // Check if we have at least one result
    if (jsonResponse.data && jsonResponse.data.length > 0) {
      const firstResult = jsonResponse.data[0];

      // Extract necessary details for recent searches
      const searchData = {
        query,
        artistName: firstResult.artist.name,
        artistImage: firstResult.artist.picture_medium,
        albumName: firstResult.album.title,
        songName: firstResult.title,
      };

      // Add the search data to recent searches
      addRecentSearch(searchData);
    }

    // Return the search results
    return NextResponse.json(jsonResponse, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// API route to fetch recent searches
export async function POST(req: NextRequest) {
  return NextResponse.json({ recentSearches }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
    try {
      // Extract the search ID from the request URL
      const url = new URL(req.url);
      const id = url.searchParams.get('id');

      if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
      }

      // Remove the search entry by ID
      recentSearches = recentSearches.filter(search => search.id !== id);

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error('Error in DELETE request:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }