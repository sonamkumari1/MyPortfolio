import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiC } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-4xl drop-shadow-md" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-4xl drop-shadow-md" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl drop-shadow-md" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl drop-shadow-md" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl drop-shadow-md" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-4xl drop-shadow-md" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-4xl drop-shadow-md" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300 text-4xl drop-shadow-md" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-4xl drop-shadow-md" />,
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-600 text-4xl drop-shadow-md" />,
  },
  {
    name: "C",
    icon: <SiC className="text-blue-400 text-4xl drop-shadow-md" />,
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-purple-500 text-4xl drop-shadow-md" />,
  },
];

const Skills = () => (
  <section id="skills" className="py-16 mb-20">
    <h2 className="text-4xl text-center text-white mb-8 ">
      Skills
      <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10 " />
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 justify-items-center mt-20">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] p-4 shadow-lg hover:scale-105 hover:bg-gradient-to-tr hover:from-gray-800 hover:via-gray-700 hover:to-gray-700 transition-all duration-300 ease-in-out flex flex-col items-center w-full max-w-[130px]"
        >
          {skill.icon}
          <span className="mt-3 text-white font-semibold text-sm text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
