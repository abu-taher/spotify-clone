import { NextRequest, NextResponse } from "next/server";

interface Track {
  id: string;
  title: string;
  duration: number;
  artist?: {
    name: string;
  };
  album?:{
    title: string;
  }
  preview: string;
}

interface Album {
  id: string;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  artist: {
    name: string;
    id: string;
    picture: string;
  };
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: albumId } = params;

  try {
    // Fetch album details
    const albumResponse = await fetch(`${process.env.API_BASE_URL}/album/${albumId}`);
    if (!albumResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch album data' }, { status: albumResponse.status });
    }

    const album: Album = await albumResponse.json();

    const albumDetails = {
      id: album.id,
      title: album.title,
      cover: album.cover,
      cover_small: album.cover_small,
      cover_medium: album.cover_medium,
      cover_big: album.cover_big,
      cover_xl: album.cover_xl,
      artistName: album.artist.name,
      artistId: album.artist.id,
      artist_pic: album.artist.picture
    };

    // Fetch tracks
    const tracksResponse = await fetch(`${process.env.API_BASE_URL}/album/${albumId}/tracks`);
    if (!tracksResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch tracks data' }, { status: tracksResponse.status });
    }

    const tracksData = await tracksResponse.json();

    const formattedTracks = tracksData.data.map((track: Track) => ({
      id: track.id,
      title: track.title,
      duration: track.duration,
      artist: track.artist?.name || 'Unknown', 
      preview: track.preview,
      album: album.title || 'Unknown',
      track_album_image : album.cover_medium
    }));

    return NextResponse.json({
      album: albumDetails,
      tracks: formattedTracks

    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching album or tracks:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}