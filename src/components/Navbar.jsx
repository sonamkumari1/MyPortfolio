import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md mt-10 w-full z-50 font-[Poppins] py-4">
      <div className="mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <h1 className="text-yellow-400 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio.
          </h1>

          {/* Right: Hamburger for mobile and menu for large screen */}
          <div className="flex items-center space-x-4">
            {/* Hamburger (mobile only) */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-10 text-xl font-semibold">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative group text-white transition duration-300 hover:text-yellow-400"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4 text-lg font-semibold text-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
