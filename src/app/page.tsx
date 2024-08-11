import Sidebar from "../components/Sidebar";
import YourTopMixes from "@/components/YourTopMixes";
import MadeForYou from "@/components/MadeForYou";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-500 flex">
      <Sidebar />
      <main className=" w-full h-screen overflow-y-auto bg-main-color flex flex-col gap-[50px]">
        <Hero />
        <YourTopMixes />
        <MadeForYou />
      </main>
    </div>
  );
}
