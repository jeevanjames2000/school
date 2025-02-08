import { useState } from "react";

export function useApplyNowForm(setShowModal) {
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
    try {
        console.log(formData, "Form Data");

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwSst-8YyDb6Jpn__QLzsiya1iXpNdTaEmVTX955Lq8MhIjBFTHQTH0JnOkwI-79GoYeA/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ ...formData, token: "0123654" }),
            }
        );

        const responseData = await response.json();
        console.log("Response:", responseData);

        if (response.ok && responseData.success) {
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
        } else {
            alert("Error submitting form: " + responseData.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit");
    } finally {
        setLoading(false);
    }
};



  return { formData, handleChange, handleSubmit, loading, success };
}
