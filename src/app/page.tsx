'use client';

import Image from "next/image";
import Sidebar from "../components/Sidebar";
import YourTopMixes from "@/components/YourTopMixes";
import MadeForYou from "@/components/MadeForYou";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="bg-gray-500 flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <main className=" w-full h-[calc(100vh-72px)] overflow-y-auto bg-main-color flex flex-col gap-[50px] pb-[22px]">
          <Hero setOpenSidebar={setOpenSidebar}/>
          <YourTopMixes />
          <MadeForYou />
        </main>
      </div>
    </>
  );
}