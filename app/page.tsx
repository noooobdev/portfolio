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
    <div className="text-white p-2 h-full bg-stone-800 border-2  border-yellow-700">
      <Navbar />
      <div className="px-32 pt-28">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
