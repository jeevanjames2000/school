import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
export default function ContactCard() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl w-full md:w-2/2 lg:w-3/3">
      <h2 className="text-2xl font-bold text-center md:text-left">
        Contact Information
      </h2>
      <p className="mt-2 text-gray-300 text-center md:text-left">
        Join Our Learning Community Today
      </p>
      <div className="mt-6 space-y-6 text-gray-300">
        <div className="flex items-center gap-4 flex-wrap">
          <FaPhoneAlt className="text-orange-500 text-lg md:text-xl" />
          <span className="text-base md:text-lg">+1012 3456 789</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <FaEnvelope className="text-orange-500 text-lg md:text-xl" />
          <span className="text-base md:text-lg">sglfschool@gmail.com</span>
        </div>
        <div className="flex gap-4 flex-row">
          <FaMapMarkerAlt className="text-orange-500 text-lg md:text-xl flex-shrink-0" />
          <p className="text-base md:text-lg leading-relaxed">
            Sri Ganesh Little Feet School, Old Karasa, Beside Apollo Pharmacy,
            Visakhapatnam
            <br />
            <span className="font-semibold text-base md:text-lg">
              Pin Code:
            </span>{" "}
            530018
          </p>
        </div>
      </div>
      {}
      <div className="mt-6 flex gap-4 justify-center md:justify-start">
        <FaTwitter className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
        <FaInstagram className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
        <FaDiscord className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
      </div>
    </div>
  );
}
