import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-zinc-400 sm:text-center ">
          © 2024 Niraj Bohara . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 ">
          <a
            href="mailto:nirajbohara10@gmail.com" target="_blank"
            className="text-gray-500 hover:text-[#d4af37]"
          >
            <BiLogoGmail size="24" />
            <span className="sr-only">Mail account</span>
          </a>
          <a
            href="https://github.com/noooobdev"
            className="text-gray-500 hover:text-[#d4af37] "
            target="_blank"
          >
            <FaGithub size="24" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://linkedin.com/in/niraĵ-bohara-472b741b8/"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-[#d4af37] "
          >
            <FaLinkedin size="24" />

            <span className="sr-only">Linkedin page</span>
          </a>
          <a
            href="https://twitter.com/neroz143"
            target="_blank"
            className="text-gray-500 hover:text-[#d4af37]"
          >
            <FaTwitter size="24" />
            <span className="sr-only">Twitter community</span>
          </a>
          <a
            href="https://instagram.com/n1r4jj/"
            className="text-gray-500 hover:text-[#d4af37]"
            target="_blank"
          >
            <FaInstagram size="24" />
            <span className="sr-only">Instagram account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
