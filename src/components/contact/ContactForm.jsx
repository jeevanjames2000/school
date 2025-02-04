import React from "react";
export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {}
        <div>
          <label className="text-gray-600">First Name</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 p-2"
            placeholder="John"
          />
        </div>
        {}
        <div>
          <label className="text-gray-600">Last Name</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 p-2"
            placeholder="Doe"
          />
        </div>
      </div>
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 p-2"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label className="text-gray-600">Phone Number</label>
          <p className="text-black font-semibold">+1 012 3456 789</p>
        </div>
      </div>
      {}
      <div className="mt-6">
        <label className="text-gray-600">Message</label>
        <textarea
          className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 p-2 h-24"
          placeholder="Write your message.."
        ></textarea>
      </div>
      {}
      <button className="bg-orange-500 text-white py-3 px-6 rounded-lg mt-6 hover:bg-orange-600 transition">
        Send Message
      </button>
    </div>
  );
}
