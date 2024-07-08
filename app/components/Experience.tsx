import React from "react";

const Experience = () => {
  return (
    <>
      <div id="experience" className="bg-stone-700 p-5 lg:px-48 rounded-3xl">
        <div className="py-8">
          <h1 className="text-4xl font-semibold">Experience</h1>
          <div className="py-10 flex gap-5">
            <p className="  h-1/2 p-2">Jan 2023 - Apr 2024</p>
            <div className="flex flex-col  justify-center ">
              <div className=" h-40  w-0.5 self-stretch bg-neutral-100 "></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className=" text-3xl font-semibold">Front-end Developer</p>
              <p className="text-lg font-semibold">Sozo Creations</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                dicta laborum ullam, quasi soluta eligendi nesciunt nulla
                officia asperiores! Ducimus alias ipsam quae dolore dolorum? Ex,
                vel. Accusamus, fugiat atque.
              </p>
            </div>
          </div>

          <div className="py-10 flex gap-5">
            <p className="  h-1/2 p-2">Sep 2022 - Dec 2022</p>
            <div className="flex flex-col  justify-center ">
              <div className=" h-40  w-0.5 self-stretch bg-neutral-100 "></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className=" text-3xl font-semibold">Internship</p>
              <p className="text-lg font-semibold">Sozo Creations</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                dicta laborum ullam, quasi soluta eligendi nesciunt nulla
                officia asperiores! Ducimus alias ipsam quae dolore dolorum? Ex,
                vel. Accusamus, fugiat atque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
