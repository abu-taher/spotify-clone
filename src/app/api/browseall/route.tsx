import { NextRequest, NextResponse } from "next/server";

// Custom objects
const customObjects = [
  { imageSrc: '/album-art-6@2x.png', bgColor: 'bg-seagreen' },
  { imageSrc: '/album-art-71@2x.png', bgColor: 'bg-darkslateblue-200' },
  { imageSrc: '/album-art-8@2x.png', bgColor: 'bg-mediumpurple' },
  { imageSrc: '/album-art-9@2x.png', bgColor: 'bg-crimson' },
  { imageSrc: '/album-art-10@2x.png', bgColor: 'bg-mediumpurple' },
  { imageSrc: '/album-art-111@2x.png', bgColor: 'bg-darkslateblue-200' },
  { imageSrc: '/album-art-12@2x.png', bgColor: 'bg-mediumvioletred-200' },
  { imageSrc: '/album-art-13@2x.png', bgColor: 'bg-thistle' },
  { imageSrc: '/album-art-14@2x.png', bgColor: 'bg-cornflowerblue-100' },
  { imageSrc: '/album-art-15@2x.png', bgColor: 'bg-mediumvioletred-100' },
  { imageSrc: '/album-art-16@2x.png', bgColor: 'bg-slategray' },
  { imageSrc: '/album-art-17@2x.png', bgColor: 'bg-mediumpurple' },
  { imageSrc: '/album-art-18@2x.png', bgColor: 'bg-green' },
  { imageSrc: '/album-art-19@2x.png', bgColor: 'bg-paleturquoise' },
  { imageSrc: '/album-art-20@2x.png', bgColor: 'bg-gray-100' },
  { imageSrc: '/album-art-211@2x.png', bgColor: 'bg-darkmagenta' },
  { imageSrc: '/album-art-22@2x.png', bgColor: 'bg-darkslateblue-100' },
  { imageSrc: '/album-art-23@2x.png', bgColor: 'bg-chocolate' },
  { imageSrc: '/album-art-24@2x.png', bgColor: 'bg-darkmagenta' },
  { imageSrc: '/album-art-25@2x.png', bgColor: 'bg-cornflowerblue-200' },
];

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/radio/genres`);
    const data = await response.json();
    const apiData = data.data || [];

    // Combine the API response data with custom objects
    const mergedData = apiData.map((item: any, index: number) => ({
      id: item.id,
      title: item.title,
      image: customObjects[index]?.imageSrc || '', 
      bgcolor: customObjects[index]?.bgColor || '' 
    }));

    return NextResponse.json({ data: mergedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}