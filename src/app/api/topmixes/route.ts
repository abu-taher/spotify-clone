import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/chart/0/playlists`
    );
    const data = await response.json();

    const topMixes = data.data.map((track: any) => ({
      id: track.id,
      title: track.title,
      picture: track.picture,
      type: track.type,
    }));

    return NextResponse.json({ topMixes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}
