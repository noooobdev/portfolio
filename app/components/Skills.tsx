import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import { motion } from "framer-motion";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { id: 1, name: "Html", icon: FaHtml5, color: "#e34c26" },
    {
      id: 2,
      name: "CSS",
      icon: FaCss3Alt,
      color: "#264de4",
    },
    { id: 3, name: "JS", icon: IoLogoJavascript, color: "#f0db4f" },
    { id: 4, name: "React", icon: FaReact, color: "#61DBFB" },
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "black" },
    { id: 6, name: "Node.js", icon: FaNodeJs, color: "#68a063" },
    { id: 7, name: "Express.js", icon: SiExpress, color: "black" },
    { id: 13, name: "React Native", icon: FaReact, color: "#61DBFB" },
    { id: 11, name: "Typescript", icon: BiLogoTypescript, color: "#007acc" },
    { id: 8, name: "Tailwind", icon: SiTailwindcss, color: "#3490dc" },
    { id: 10, name: "Postman", icon: SiPostman, color: "#ef5b25" },
    { id: 9, name: "Git", icon: FaGitAlt, color: "#F1502F" },
    { id: 12, name: "Figma", icon: FaFigma, color: "#f24e1e" },
  ];

  const handleMouseEnter = (skillId: any) => {
    setHoveredSkill(skillId);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };
  return (
    <div className="flex flex-col justify-center items-center py-10 lg:px-48">
      <h1 className="text-4xl font-semibold">Work On</h1>

      <div className=" grid grid-cols-3 lg:grid-cols-6 gap-0 w-full p-6">
        {skills?.map((skill) => (
          <div
            key={skill.id}
            className="p-8 flex flex-col items-center gap-5 justify-center rounded-xl hover:cursor-pointer hover:shadow-xl"
          >
            {
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
                onMouseEnter={() => handleMouseEnter(skill.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {hoveredSkill === skill.id ? (
                  <skill.icon size={70} color={skill.color} />
                ) : (
                  <skill.icon size={70} />
                )}
              </motion.div>
            }
            <h1 className="font-semibold text-lg text-gray-200">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
