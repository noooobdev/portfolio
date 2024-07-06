import Image from "next/image";
import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const COLORS_TOP = ["#d4af37", "#ffd700", "#fcc200", "#ffbf00"];

const Hero = () => {
  const colors = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(colors, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(110% 110% at 50% 0%, #292524 50%, ${colors})`;
  const color = useMotionTemplate`${colors}`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
      className="h-full flex flex-col p-36"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "keyframes",
          }}
          className="text-2xl lg:text-4xl font-normal"
        >
          Hi,I&apos;m
        </motion.h1>
        <motion.h1
          style={{
            color,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="font-medium text-xl lg:text-6xl"
        >
          Niraj Bohara
        </motion.h1>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "keyframes",
          }}
          className="text-base lg:text-xl font-normal text-neutral-300"
        >
          Web Developer | Mostly Front-End
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Hero;
