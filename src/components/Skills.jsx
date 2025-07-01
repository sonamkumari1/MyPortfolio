import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiC
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300 text-4xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: 'Java', icon: <FaJava className="text-red-600 text-4xl" /> },
  { name: 'C', icon: <SiC className="text-blue-400 text-4xl" /> },
  { name: 'Database', icon: <FaDatabase className="text-purple-500 text-4xl" /> }
];

const Skills = () => (
  <section id="skills" className="mb-12">
    <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center animate-fade-in">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center"
        >
          {skill.icon}
          <span className="mt-2 text-white font-medium text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
