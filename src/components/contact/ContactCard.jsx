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
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full  md:w-1/3">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <p className="mt-2 text-gray-300">Join Our Learning Community Today</p>

   
      <div className="mt-6 space-y-6 text-gray-300">
  {/* Phone */}
  <div className="flex items-center gap-4">
    <FaPhoneAlt className="text-orange-500 text-base md:text-xl" />
    <span className="text-base md:text-lg">+1012 3456 789</span>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <FaEnvelope className="text-orange-500 text-base md:text-xl" />
    <span className="text-base md:text-lg">sglfschool@gmail.com</span>
  </div>

  {/* Address */}
  <div className="flex gap-4">
    <FaMapMarkerAlt className="text-orange-500 text-base md:text-xl flex-shrink-0" />
    <p className="text-base md:text-lg leading-relaxed">
      Sri Ganesh Little Feet School, Old Karasa, Beside Apollo Pharmacy, Visakhapatnam
      <br />
      <span className="font-semibold text-base md:text-lg">Pin Code:</span> 530018
    </p>
  </div>
</div>


      <div className="mt-6 flex gap-4">
        <FaTwitter className="text-white  bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
        <FaInstagram className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
        <FaDiscord className="text-white bg-orange-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:text-orange-600 hover:bg-white" />
      </div>
    </div>
  );
}
