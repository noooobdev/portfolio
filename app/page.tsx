"use client";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="text-white  h-full bg-stone-800 border-2  border-yellow-700">
      <Navbar />
      <div className="">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
