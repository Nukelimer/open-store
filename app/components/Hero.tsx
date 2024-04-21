"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  return (
    <>
      <div className="h-[80vh] w-full relative">
        <Image
          className="relative bottom-32 pointer-events-none "
          src={"/images/model hero.jpg"}
          alt="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
           
          }}
          fill
          quality={100}
        />

        <div className="absolute text-center lg:left-44 left-4 bottom-44 ">
          <h1 className="text-slate-100/90 text-6xl font-bold lg:text-7xl ">
            {" "}
            Luxury clothing & Shoes.
          </h1>
          <button
            disabled
            className="py-2 px-6 bg-neutral-800/80 uppercase text-white rounded-3xl mt-12">
            {" "}
            Explore varieties of items.
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
