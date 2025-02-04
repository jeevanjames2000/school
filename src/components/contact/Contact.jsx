import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <ContactCard />
      <div className="mt-6 md:mt-0 md:ml-10 w-full max-w-4xl">
        <ContactForm />
      </div>
    </div>
  );
}
