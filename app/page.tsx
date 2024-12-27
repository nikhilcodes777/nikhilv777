"use client"
import pfp from "@/public/mushashi.jpg"
import { firstName, heroDescription } from "@/config"
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Student', 'UI/UX Designer', 'Developer'],
      typeSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="overflow-hidden flex flex-col gap-10 sm:gap-16 justify-center items-center h-screen sm:flex-row">
      <Image
        className="w-60 sm:w-[28vw] border-I rounded-[50%] cursor-pointer transition-shadow duration-300 ease-in-out dark:hover:dark-glow-less hover:glow-less" src={pfp} alt="PFP" />

      <div
        className="sm:w-[30vw] px-8">
        <h1 className="text-2xl font-bold md:text-5xl">Hi, It&apos;s <span className=" text-[#9ccfd8] ">{firstName}</span></h1>
        <h3 className="mt-2 text-xl font-bold md:text-4xl">I&apos;m a     <span ref={el} className="text-[#eb6f92] "></span>
        </h3>

        <p className="mt-7 text-sm font-bold text-pretty">{heroDescription}</p>
      </div>
    </div>
  );
}
