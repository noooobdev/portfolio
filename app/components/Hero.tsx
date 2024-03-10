import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="about" className="py-10">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-normal">Hi,I'm{"  "}</h1>
        <h1 className="text-[#d4af37] font-medium text-6xl">Niraj Bohara</h1>
        <h1 className="text-2xl font-normal text-neutral-300">
          Web Developer | Like to develop things for Web
        </h1>
      </div>
    </div>
  );
};

export default Hero;
