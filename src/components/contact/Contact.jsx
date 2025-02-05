import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <div className="flex justify-center  py-12 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 max-w-screen-xl w-full">
        {}
        <div className="w-full md:w-1/2">
          <ContactCard />
        </div>
        {}
        <div className="w-full md:w-1/2 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
