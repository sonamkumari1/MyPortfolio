// components/Experience.js
import React from 'react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Sprint Analytics Pvt Ltd',
    duration: 'Sep 2024 - Mar 2025',
    description: [
      'Contributed to complex finance projects optimizing performance.',
      'Reduced server load by 30% for faster responses.',
      'Implemented 5+ new frontend features improving engagement.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Railworld India Pvt Ltd',
    duration: 'Feb 2024 - Jul 2024',
    description: [
      'Maintained websites using MERN stack.',
      'Fixed critical bugs and improved responsiveness.',
      'Enhanced frontend usability and styling.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Suitewise Pvt Ltd',
    duration: 'Dec 2023 - Jan 2024',
    description: [
      'Built web apps using React.js and Node.js.',
      'Worked on frontend UI with Tailwind CSS and Bootstrap.',
      'Managed MySQL and MongoDB databases.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="mb-12">
    <h2 className="text-3xl font-bold text-center mb-8">
      <span className="text-white">Work</span> <span className="text-teal-400">Experience</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300">
          <h3 className="text-xl font-bold text-teal-400">{exp.role}</h3>
          <p className="text-white font-semibold">{exp.company}</p>
          <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
