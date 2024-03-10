"use client";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="text-white p-2 h-full bg-stone-800 border-2  border-yellow-700">
      <Navbar />
      <div className="px-32 py-28">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
