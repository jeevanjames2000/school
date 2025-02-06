import React, { useState } from "react";

export default function ApplynowForm({ setShowModal }) {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    dateOfBirth: "",
    gender: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: "",
    gradeApplyingFor: "",
    previousSchool: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzAiuOzNSqkfxtwrGgA1UuwYWBGFlYROkoB7mRMnWqJwCkNP8A-VWIDUXcEnjMs3RqXCQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
          setFormData({
            studentName: "",
            studentAge: "",
            dateOfBirth: "",
            gender: "",
            parentName: "",
            contactNumber: "",
            email: "",
            address: "",
            gradeApplyingFor: "",
            previousSchool: "",
            message: "",
          });
        }, 2000);
        console.log("err", response.text());
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-xs z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto relative border-1 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-orange-500 font-semibold">Apply Now</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-2xl text-orange-500"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter student's full name"
              />
            </div>

            <div>
              <label className="text-gray-600">Student Age</label>
              <input
                type="number"
                name="studentAge"
                value={formData.studentAge}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter student's age"
              />
            </div>

            <div>
              <label className="text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="text-gray-600">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-gray-600">Parent/Guardian Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter parent/guardian's name"
              />
            </div>

            <div>
              <label className="text-gray-600">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter contact number"
              />
            </div>

            <div>
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="text-gray-600">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="text-gray-600">Grade Applying For</label>
              <input
                type="text"
                name="gradeApplyingFor"
                value={formData.gradeApplyingFor}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter grade level"
              />
            </div>

            <div>
              <label className="text-gray-600">Previous School (if any)</label>
              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter previous school name"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded h-24"
              placeholder="If any additional details..."
            ></textarea>
          </div>
          <button
            type="submit"
            // onClick={() => setShowModal(false)}
            disabled={loading}
            className="bg-orange-500 hover:bg-white text-white py-3 px-6 rounded-lg mt-6 hover:text-orange-600 hover:border hover:border-orange-600 transition mx-auto flex justify-center items-center"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
          {success && (
            <p className="text-green-600 text-center mt-2">
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
