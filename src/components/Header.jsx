import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-20 font-[Poppins]">
      <div className="text-center md:text-left max-w-2xl">
        <h2 className="text-lg sm:text-xl text-gray-400">Hello, It's Me</h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2">
          Sonam Kumari
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold mt-3">
          I'm a{" "}
          <span className="text-purple-800">
            <Typewriter
              words={["Full Stack Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Passionate developer with hands-on experience in scalable and
          responsive web applications. Strong foundation in DSA and full-stack
          technologies.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-5 mt-6">
          {[
            {
              href: "https://github.com/sonamkumari1",
              label: <FaGithub />,
            },
            {
              href: "mailto:sonamkumari63928@gmail.com",
              label: <FaEnvelope />,
            },
            {
              href: "tel:+916392885049",
              label: <FaPhone />,
            },
            {
              href: "https://linkedin.com",
              label: <FaLinkedin />,
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-800 rounded-full shadow-md transition duration-300 hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black animate-pulse"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-800 hover:bg-purple-800 rounded-lg shadow-lg text-white font-semibold transition-transform transform hover:scale-105">
          Download CV
        </button>
      </div>
      <div className="mt-10 md:mt-0 pr-24">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-[400px] h-[400px] sm:w-80 sm:h-80 object-cover rounded-full border-2 border-purple-800 
               transition-transform duration-500 transform hover:scale-110 
               shadow-[0_0_30px_10px_rgba(128,0,128,0.6)]"
        />
      </div>
    </header>
  );
};

export default Header;
