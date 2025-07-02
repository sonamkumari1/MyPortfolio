import React from "react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "National Institute of Technology Tiruchirappalli",
    year: "2019 – 2022",
    grade: "CGPA: 7.79",
  },
  {
    degree: "B.Sc. Mathematics",
    institution: "Awadhesh Pratap Singh University ",
    year: "2016 – 2019",
    grade: "Aggregate: 70.2%",
  },
];

const Education = () => (
  <section id="education" className="mb-20 ">
    <h2 className="text-4xl text-center text-white mb-16">
      Education
      <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10" />
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {education.map((edu, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] p-6 transition-transform transform hover:scale-105"
        >
          <p className="text-yellow-400 font-bold text-lg mb-2">{edu.year}</p>
          <h3 className="text-white font-semibold text-xl">{edu.degree}</h3>
          <p className="text-sm text-gray-400 tracking-wide mt-1">
            {edu.institution}
          </p>
          <p className="text-sm text-gray-400 mt-3">{edu.grade}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
