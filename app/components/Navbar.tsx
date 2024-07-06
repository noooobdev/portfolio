import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
      className="flex  px-3 p-8 items-center justify-between lg:px-28"
    >
      <Image
        src={"/6-removebg-preview.png"}
        alt="Niraj Bohara"
        height={100}
        width={100}
        className="h-10 w-14 lg:h-300 lg:w-300"
      />
      <div className="flex gap-5 justify-center items-center lg:text-lg font-semibold text-stone-400 ">
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          href="#about"
          className="hover:text-white"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          href="#experience"
          className="hover:text-white"
        >
          Experience
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          href="#project"
          className="hover:text-white"
        >
          Projects
        </motion.a>
      </div>
      <motion.a
        href="https://rxresu.me/nirajbohara10/niraj-bohara"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        whileHover={{
          y: -4,
        }}
        transition={{ duration: 0.2 }}
        className="border-[#d4af37] border-2 px-3 py-1 rounded hover:bg-[#d4af37] text-white "
      >
        Resumé
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
