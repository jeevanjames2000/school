import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer({ scrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls instantly to the top
  };
 
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col gap-8 md:grid md:grid-cols-3 ">
        {}
        <div className="text-left">
          <h2 className="text-lg font-bold text-blue-400">SGLF</h2>
          <p className="mt-2 text-sm">
            Nurturing young minds with care, creativity, and compassion since
            2020.
          </p>
        </div>

        {}
        <div className=" text-left">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-blue-400"
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("heroes")}
                className="hover:text-blue-400"
              >
                Academics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {}
        <div className="text-left">
          <h2 className="text-lg font-bold">Connect With Us</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-start md:justify-start items-center gap-2">
              <FaPhoneAlt /> +91 1234567890
            </li>
            <li className="flex justify-start gap-2">
              <FaEnvelope /> info@sriganeshlittlefeets.edu.in
            </li>
            <li className="flex justify-start md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Karasa, Visakhapatnam, AP, India
            </li>
          </ul>
        </div>
      </div>

      {}
      <div className="text-center text-sm border-t border-gray-700 mt-8 pt-4">
        Made with <FaHeart className="inline text-red-500" /> by SGLF © 2025
      </div>

      {}
      <div className="fixed bottom-5 right-5">
        <div
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
}
