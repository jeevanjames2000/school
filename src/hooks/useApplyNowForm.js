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
    setLoading(true);

    console.log("Submitting Form Data:", formData);

   
    const encodedData = new URLSearchParams({ ...formData, token: "0123654", formType: "admission",  }).toString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwSst-8YyDb6Jpn__QLzsiya1iXpNdTaEmVTX955Lq8MhIjBFTHQTH0JnOkwI-79GoYeA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" },
          body: encodedData,
          mode: "cors"
        }
      );
      setSuccess(true);
     
    } finally {
      setLoading(false);
      setSuccess(true);
   
      setTimeout(() => {
      
  
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

      setTimeout(() => {
        setShowModal(false);
      },4000)
    }
  };

  return { formData, handleChange, handleSubmit, loading, success };
}
