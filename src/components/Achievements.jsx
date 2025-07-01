import React from 'react';

const achievements = [
  'Solved 350+ problems on Leetcode and earned certification on HackerRank.',
  'Won 1st place in Kho-Kho at NIT Trichy (Sportsfete’19, Spielmac’19).',
  "Performed in Version'19 dance at MCA Technical Symposium (NIT Trichy).",
  'Hospitality Committee Member at Version’20 (NIT Trichy).'
];

const Achievements = () => (
  <section id="achievements" className="mb-12">
    <h2 className="text-3xl font-bold text-center mb-8">
      <span className="text-white">Achievements</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300">
          <p className="text-gray-300">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
