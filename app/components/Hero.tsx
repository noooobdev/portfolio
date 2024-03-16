import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" h-screen flex flex-col mt-28">
      <div className="flex flex-col gap-4 items-center justify-center">
        <motion.h1
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="text-4xl font-normal"
        >
          Hi,I'm{"  "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="text-[#d4af37] font-medium text-6xl"
        >
          Niraj Bohara
        </motion.h1>
        <motion.h1
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="text-xl font-normal text-neutral-300"
        >
          Web Developer | Mostly Front-End
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
