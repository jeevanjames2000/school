import React from "react";
import hero from "../../assets/apply-now-hero.png";
import hero2 from "../../assets/apply-now-hero2.png";


export default function ApplyNow() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center gap-6 shadow-lg">
      <div>
      <div className="text-left max-w-lg">
        <h1 className="text-3xl font-bold text-[#1B2D63]">
          Welcome to Sri Ganesh Little Feets
        </h1>
        <p className="text-[#D87C26] mt-2 font-medium">
          Nurturing young minds with quality education from Pre-Primary to Class
          7
        </p>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg font-medium">
          Apply now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#872341] text-white p-4 rounded-lg flex items-center gap-4 shadow-md">
          {/* <img src="/teacher.png" alt="Teacher" className="h-16" /> */}
          <p className="font-bold">Excellence in Education.</p>
        </div>
        <div className="bg-[#872341] text-white p-4 rounded-lg flex items-center gap-4 shadow-md">
          <img src={hero2} alt="Students" className="h-16" />
          <p className="font-bold">
            To nurture and develop young minds into well-rounded individuals
          </p>
        </div>
      </div>
      </div>
      <div>
        <img src={hero} alt="hero-section"  />
      </div>
     
    </div>
  );
}
