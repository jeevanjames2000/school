import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/school-logo.png";

import { HiHome } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi2";
import { GrGallery } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 pl-6 pr-6 flex justify-between items-center flex-wrap">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-xl font-bold text-red-600 ml-2 whitespace-nowrap hidden md:block">
          Sri Ganesh Little Feet School
        </span>
      </div>

      {/* Desktop Navigation (Hidden below lg) */}
      <nav className="hidden lg:flex space-x-6">
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

      {/* Login Button (Hidden in small screens) */}
      <button className="hidden lg:block bg-black text-white px-4 py-2 rounded">
        Login
      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>

      {/* Sidebar Menu (Animated) */}
      <div
        className={`fixed inset-0 z-50 flex justify-end ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`bg-black w-full transition-opacity duration-300 ease ${
            isOpen ? "opacity-40" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`bg-white w-60 p-5 flex flex-col shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="self-end" onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>

          <nav className="flex flex-col mt-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection("home");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <HiHome fontSize={20} />
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <HiUserGroup fontSize={20} />
              About us
            </button>
            <button
              onClick={() => {
                scrollToSection("gallery");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <GrGallery fontSize={20} />
              Gallery
            </button>
            <button
              onClick={() => {
                scrollToSection("heroes");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <HiAcademicCap fontSize={20} />
              Academics
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <MdOutlineConnectWithoutContact fontSize={20} />
              Contact Us
            </button>
          </nav>

          <button className="bg-black text-white px-4 py-2 mt-4 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
