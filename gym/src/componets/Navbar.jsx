import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-orange-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
         Five Fitness Gym
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li className="hover:text-black cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-black cursor-pointer"><a href="#about0">About</a></li>
            <li className="hover:text-black cursor-pointer"> <a href="#service">Services</a></li>
            <li className="hover:text-black cursor-pointer"> <a href="#Contact">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col space-y-4 pb-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
