import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-20 font-[Poppins] sm:px-10">
      {/* Left: Text Content */}
      <div className="text-center md:text-left max-w-2xl">
        <h2 className="text-lg sm:text-xl text-gray-400">Hello, It's Me</h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2">
          Sonam Kumari
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold mt-3">
          I'm a{" "}
          <span className="text-yellow-400">
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

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-5 mt-6">
          {[
            {
              href: "https://github.com/sonamkumari1",
              label: <FaGithub />,
            },
            {
              href: "https://leetcode.com/u/4xvZyqiCOA/",
              label: <FaCode />,
            },
            {
              href: "https://www.linkedin.com/in/sonam-kumari-a26652202/",
              label: <FaLinkedin />,
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-800 rounded-full shadow-md transition duration-300 hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg text-white font-semibold transition-transform transform hover:scale-105">
          Download CV
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:pr-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-yellow-400
            transition-transform duration-500 transform hover:scale-110 
            shadow-[0_0_30px_10px_rgba(250,204,21,0.6)] mx-auto"
        />
      </div>
    </header>
  );
};

export default Header;
