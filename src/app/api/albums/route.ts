import { NextRequest, NextResponse } from "next/server";
// import albumsData from '../../../utils/albums.json';
export async function GET(req: NextRequest) {
  try {
    // // Fetch the list of albums from the Deezer API
    const response = await fetch(`${process.env.API_BASE_URL}/chart/0/albums`);
    const albumsData = await response.json();

    // Format the albums into the required structure
    const carousel = albumsData.data.reduce((acc: any[], album: any, index: number) => {
      const slideIndex = Math.floor(index / 2);
      const albumData = {
        albumId: album.id,
        title: album.title,
        image: album.cover_big,
      };

      if (!acc[slideIndex]) {
        acc[slideIndex] = { slideId: slideIndex + 1, albums: [] };
      }

      acc[slideIndex].albums.push(albumData);
      return acc;
    }, []);

    // Return the data in the required format
    return NextResponse.json({ carousel }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}