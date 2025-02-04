import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="text-xl font-bold text-red-600 ml-2">
          Sri Ganesh Little Feet School
        </span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <button
          onClick={() => scrollToSection("home")}
          className="text-red-600 hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-red-600 hover:underline"
        >
          About us
        </button>
        <button
          onClick={() => scrollToSection("gallery")}
          className="text-red-600 hover:underline"
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection("heroes")}
          className="text-red-600 hover:underline"
        >
          Academics
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-red-600 hover:underline"
        >
          Contact Us
        </button>
      </nav>

      <button className="hidden md:block bg-black text-white px-4 py-2 rounded">
        Login
      </button>

      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-white w-64 p-5 flex flex-col shadow-lg h-full">
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <FiX size={24} />
            </button>
            <nav className="flex flex-col mt-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
                className="text-red-600"
              >
                About us
              </button>
              <button
                onClick={() => {
                  scrollToSection("gallery");
                  setIsOpen(false);
                }}
                className="text-red-600"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  scrollToSection("heroes");
                  setIsOpen(false);
                }}
                className="text-red-600"
              >
                Academics
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="text-red-600"
              >
                Contact Us
              </button>
            </nav>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
