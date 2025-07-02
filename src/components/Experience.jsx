// components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Sprint Analytics Pvt Ltd",
    duration: "Sep 2024 - Mar 2025",
    description: [
      "Contributed to complex finance projects optimizing performance.",
      "Reduced server load by 30% for faster responses.",
      "Implemented 5+ new frontend features improving engagement.",
    ],
  },
  {
    role: "Software Developer",
    company: "Railworld India Pvt Ltd",
    duration: "Feb 2024 - Jul 2024",
    description: [
      "Maintained websites using MERN stack.",
      "Fixed critical bugs and improved responsiveness.",
      "Enhanced frontend usability and styling.",
    ],
  },
  {
    role: "Software Developer",
    company: "Suitewise Pvt Ltd",
    duration: "Dec 2023 - Jan 2024",
    description: [
      "Built web apps using React.js and Node.js.",
      "Worked on frontend UI with Tailwind CSS and Bootstrap.",
      "Managed MySQL and MongoDB databases.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => (
  <section id="experience" className="mb-20 mt-16 pt-24">
    <h2 className="text-4xl text-center text-white mb-8">
      Experience
      <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10 mb-16" />
    </h2>

    <div className="flex flex-wrap justify-center gap-10">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-[45%] lg:w-[30%] bg-gradient-to-br backdrop-blur-sm p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 bg-[#1a1a1a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-1">
            {exp.role}
          </h3>
          <p className="text-white font-medium">{exp.company}</p>
          <p className="text-sm text-gray-400 mb-4 mt-2">{exp.duration}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm leading-relaxed">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
