import React from "react";
export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        
        <div>
          <label className="text-gray-600 mb-0">First Name</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1"
            placeholder="John"
          />
        </div>
      
        <div>
          <label className="text-gray-600">Last Name</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 placeholder:text-gray-400  focus:outline-none focus:border-orange-500  px-2 py-1"
            placeholder="Doe"
          />
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500  px-2 py-1"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label className="text-gray-600">Phone Number</label>
          <input
            type="phone"
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500  px-2 py-1"
            placeholder="+91 7854978945"
          />
        </div>
      </div>
    
      <div className="mt-6">
        <label className="text-gray-600">Message</label>
        <textarea
          className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500  px-2 py-1 h-24"
          placeholder="Write your message.."
        ></textarea>
      </div>
    
      <button className="bg-orange-500 hover:bg-white text-white py-3 px-6 rounded-lg mt-6 hover:text-orange-600 hover:border hover:border-orange-600 transition">
        Send Message
      </button>
    </div>
  );
}
