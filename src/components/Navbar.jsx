import React from 'react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => (
  <nav className="bg-black shadow-md mt-10 w-full z-50 font-[Poppins] py-4">
    <div className="mx-auto px-6 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-purple-800 text-5xl font-extrabold tracking-tight">Portfolio.</h1>
        <div className="flex space-x-10 text-xl font-semibold">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group text-white transition duration-300 hover:text-purple-800"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-800 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
