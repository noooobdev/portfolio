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
        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
          <a href="#" className="text-gray-500 hover:text-[#c71610]">
            <BiLogoGmail size="24" />
            <span className="sr-only">Mail account</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#171515] ">
            <FaGithub size="24" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-[#0077b5] "
          >
            <FaLinkedin size="24" />

            <span className="sr-only">Linkedin page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#1DA1F2]">
            <FaTwitter size="24" />
            <span className="sr-only">Twitter community</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#ff6464]">
            <FaInstagram size="24" />
            <span className="sr-only">Instagram account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
