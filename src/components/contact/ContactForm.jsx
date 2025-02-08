import React, { useState } from "react";
import { submitForm } from "../../hooks/formService";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(""); // Clear previous status message
  
    try {
      const response = await submitForm(formData);
  
      if (response.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // ✅ Clear fields
      } else {
        setStatus("❌ Failed to send message: " + response.message);
      }
    } catch (error) {
      console.log(" An error occurred. Please try again.");
    } finally {
      setLoading(false); // ✅ Ensure loading state is reset
      setStatus("We will Contact You Soon... ThankYou");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // ✅ Clear fields


    }
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
        className="bg-orange-500 hover:bg-white text-white py-3 px-6 rounded-lg mt-6 hover:text-orange-600 hover:border hover:border-orange-600 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* ✅ Show Status Message Below the Button */}
      {status && <p className="mt-4 text-center text-[#008000] font-semibold text-base">{status}</p>}
    </form>
  );
}
