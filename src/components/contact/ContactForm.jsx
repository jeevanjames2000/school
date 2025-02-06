import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-xl w-full md:w-3/3 pb-13"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        <div>
          <label className="text-gray-600 mb-0">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1"
            placeholder="John"
          />
        </div>

        <div>
          <label className="text-gray-600">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label className="text-gray-600">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1"
            placeholder="+91 7854978945"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-gray-600">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 px-2 py-1 h-24"
          placeholder="Write your message.."
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-white text-white py-3 px-6 rounded-lg mt-6 hover:text-orange-600 hover:border hover:border-orange-600 transition"
      >
        Send Message
      </button>
    </form>
  );
}
