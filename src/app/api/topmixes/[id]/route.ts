import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id: topmixId } = params;

    const playlistResponse  = await fetch(`${process.env.API_BASE_URL}/playlist/${topmixId}/tracks`);

    if (!playlistResponse.ok) {
        return NextResponse.json({ error: 'Failed to fetch album data' }, { status: playlistResponse.status });
      }

    const jsonResponse = await playlistResponse.json();
    const { data } = jsonResponse;
    const firstTrack = data[0];
    if (!firstTrack) {
      return NextResponse.json({ error: 'No tracks found' }, { status: 404 });
    }

    const albumDetails = {
        id: firstTrack.album.id,
        title: firstTrack.album.title,
        cover: firstTrack.album.cover,
        cover_small: firstTrack.album.cover_small,
        cover_medium: firstTrack.album.cover_medium,
        cover_big: firstTrack.album.cover_big,
        cover_xl: firstTrack.album.cover_xl,
        artist: {
          id: firstTrack.artist.id,
          name: firstTrack.artist.name,
          picture: firstTrack.artist.picture,
          picture_small: firstTrack.artist.picture_small,
          picture_medium: firstTrack.artist.picture_medium,
          picture_big: firstTrack.artist.picture_big,
          picture_xl: firstTrack.artist.picture_xl,
        },
      };

      const formattedTracks = data.map((track: { id: string; title: string; duration: number; preview: string }) => ({
        id: track.id,
        title: track.title,
        duration: track.duration,
        preview: track.preview,
        artist: firstTrack.artist.name,
        album: firstTrack.album.title,
        track_album_image : firstTrack.album.cover_medium,
      }));

    return NextResponse.json({
        album: albumDetails,
        tracks: formattedTracks
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}