import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="py-10">
      <h1 className="text-4xl font-semibold">Experience</h1>
      <div className="py-10 flex gap-5">
        <p className=" bg-zinc-700 h-1/2 p-2">March 2021</p>
        <div className="flex flex-col justify-center ">
          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
          <div className="inline-block h-40 min-h-[1em] w-0.5 self-stretch bg-neutral-100 "></div>
        </div>
        <div className="flex flex-col gap-3">
          <p className=" text-3xl font-semibold">Front-end Developer</p>
          <p className="text-lg font-semibold">Sozo Creations</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta
            laborum ullam, quasi soluta eligendi nesciunt nulla officia
            asperiores! Ducimus alias ipsam quae dolore dolorum? Ex, vel.
            Accusamus, fugiat atque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
