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
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <p className="mt-2 text-gray-300">Join Our Learning Community Today</p>

      <div className="mt-6 space-y-4 text-gray-300">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-orange-500" /> +1012 3456 789
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-orange-500" /> sglfschool@gmail.com
        </div>
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-orange-500" />
          <p>
            Sri Ganesh Little Feet School, Old Karasa, Beside Apollo pharmacy,
            Visakhapatnam
            <br />
            Pin code: 530018
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <FaTwitter className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-orange-600" />
        <FaInstagram className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-orange-600" />
        <FaDiscord className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-orange-600" />
      </div>
    </div>
  );
}
