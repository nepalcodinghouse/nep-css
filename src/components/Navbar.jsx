import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const navitems = [
  { name: "Home", link: "/" },
  { name: "Docs", link: "/docs" },
  { name: "Showcase", link: "/showcase" },
  { name: "Blog", link: "/blog" },
  { name: "Creator", link: "/creator" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const goToWebsite = () => {
    window.location.href = "https://nepcss.abhayabikramshahi.xyz/";
  };

  const goToGithub = () => {
    window.open("https://github.com/yourusername", "_blank"); // replace with your GitHub URL
  };

  return (
    <nav className="bg-gray-100 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div
          className="logo flex items-center gap-3 font-bold text-2xl text-gray-800 cursor-pointer"
          onClick={goToWebsite}
          aria-label="Nep CSS Framework homepage"
          role="link"
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              goToWebsite();
            }
          }}
        >
          <img
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
            alt="Nep CSS Framework Logo"
            className="h-[30px]"
          />
          <h1>NepCss</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:underline"
              aria-label={`Go to ${item.name} page`}
            >
              {item.name}
            </Link>
          ))}
          {/* GitHub Icon */}
          <Github
            onClick={goToGithub}
            className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="View source code on GitHub"
            role="button"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToGithub();
              }
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-gray-50"
          role="menu"
        >
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:underline"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label={`Go to ${item.name} page`}
            >
              {item.name}
            </Link>
          ))}
          {/* GitHub Icon for mobile */}
          <div 
            onClick={goToGithub}
            className="cursor-pointer w-10 h-10 p-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="View source code on GitHub"
            role="button"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToGithub();
              }
            }}
          >
            <Github />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;