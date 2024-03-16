import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex p-3 items-center justify-between  px-28">
      <Image
        src={"/6-removebg-preview.png"}
        alt="Niraj Bohara"
        height={80}
        width={120}
      />
      <div className="flex gap-5 justify-center text-lg font-semibold text-stone-400">
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
        className="border-[#d4af37] border-2 px-3 py-1 rounded hover:bg-[#d4af37] "
      >
        Resumé
      </motion.a>
    </div>
  );
};

export default Navbar;
