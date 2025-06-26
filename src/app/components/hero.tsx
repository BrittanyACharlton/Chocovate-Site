'use client';

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Image */}
      <Image
        src="/chocchips.jpg"
        alt="Chocolate chips background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-0"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
          Cocoa-free. Creamy. Revolutionary.
        </h1>
        <p className="text-lg md:text-xl mb-10 drop-shadow-md max-w-xl">
          Chocolate, just without the cocoa.
        </p>
        <Link href="https://tally.so/r/nGg2Ak" target="_blank">
          <button className="bg-white text-[#2B1F15] text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#F8F4F0] transition-all shadow-lg">
            Request a Sample
          </button>
        </Link>
      </div>
    </div>
  );
}



