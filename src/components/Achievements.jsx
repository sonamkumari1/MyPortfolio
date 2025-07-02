import React from 'react';

const achievements = [
  'Solved 350+ problems on Leetcode and earned certification on HackerRank.',
  'Won 1st place in Kho-Kho at NIT Trichy (Sportsfete’19, Spielmac’19).',
  "Performed in Version'19 dance at MCA Technical Symposium (NIT Trichy).",
  'Hospitality Committee Member at Version’20 (NIT Trichy).'
];

const Achievements = () => (
  <section id="achievements" className="mb-20">
    <h2 className="text-4xl text-center mb-16 font-semibold text-white">
      Achievements
      <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10 " />
    </h2>

    <ul className="space-y-4 list-disc list-inside text-gray-300 bg-[#1a1a1a] p-6 ">
      {achievements.map((item, index) => (
        <li key={index} className="hover:text-yellow-400 transition duration-200">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;
