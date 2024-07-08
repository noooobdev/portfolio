import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const project = [
    {
      id: 1,
      name: "Freelazo",
      image: "https://tecdn.b-cdn.net/img/new/fluid/city/113.webp",
    },
    {
      id: 2,
      name: "Joke",
      image: "https://tecdn.b-cdn.net/img/new/fluid/city/113.webp",
    },
    {
      id: 3,
      name: "Game Tracker",
      image: "https://tecdn.b-cdn.net/img/new/fluid/city/113.webp",
    },
  ];
  return (
    <div id="project" className="py-10 p-2 lg:px-48">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <div className="py-3 grid grid-cols-1 lg:grid-cols-3 gap-2 sm:place-items-center">
        {project.map((project) => (
          <div
            key={project.id}
            className="group relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
          >
            <img
              src={project.image}
              className="max-w-lg transition duration-500  ease-in-out group-hover:scale-110"
              alt="Louvre"
            />
            <div className="absolute inset-0  lg:group-hover:bg-black/60">
              <div className="absolute inset-0 lg:translate-y-full lg:group-hover:translate-y-12 lg:transition-all duration-1000 p-5">
                <div className="flex flex-col justify-center items-center text-center gap-5">
                  <h1 className="font-bold text-2xl text-left text-[#d4af37]">
                    {project.name}
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <motion.a
                    href="#"
                    target="_blank"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                      y: -2,
                    }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#d4af37] border-2 border-[#d4af37] hover:border-[#d4af37] px-3 py-0.5 rounded hover:bg-transparent text-white "
                  >
                    Visit
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
