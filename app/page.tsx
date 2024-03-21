"use client";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProgressBar from "./components/Progress-Bar/ProgressBar";
import Navhero from "./components/Navhero";

export default function Home() {
  return (
    <>
      <div className="text-white  h-full  ">
        <ProgressBar />
        <Navhero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
