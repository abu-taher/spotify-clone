"use client";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Player from "@/components/Player";
import { usePlayerStore } from "@/store/usePlayerStore";

const font = Figtree({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={font.className}>
        {children}
       <Player />
      </body>
    </html>
  );
}