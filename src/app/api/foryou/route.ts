import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/radio`);
    const data = await response.json();

    const madeForYou = data.data.map((radio: any) => ({
      id: radio.id,
      title: radio.title,
      picture: radio.picture_big, 
      tracklist: radio.tracklist,
      type: radio.type,
    }));

    return NextResponse.json({ madeForYou }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}