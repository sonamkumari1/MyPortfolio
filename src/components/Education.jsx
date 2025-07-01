import React from 'react';

const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'NIT Trichy',
    year: '2019 - 2022',
    grade: 'CGPA: 7.79'
  },
  {
    degree: 'B.Sc. Mathematics',
    institution: 'APS University',
    year: '2016 - 2019',
    grade: 'Aggregate: 70.2%'
  }
];

const Education = () => (
  <section id="education" className="mb-12">
    <h2 className="text-3xl font-bold text-center mb-8">
      <span className="text-white">Education</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl text-teal-400 font-semibold">{edu.degree}</h3>
          <p className="text-white font-medium">{edu.institution}</p>
          <p className="text-sm text-gray-400">{edu.year}</p>
          <p className="text-sm text-gray-400">{edu.grade}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;