import React from "react";
import service from "../../assets/service.png";
export default function Services() {
  const data = [
    "📚 500+ Students Enrolled",
    "👨‍🏫 50+ Qualified Teachers",
    "🏆 100% Student Development Focus",
    "📍 Located in the Heart of Vizag",
  ];
  return (
    <div className="p-10 bg-[#FDFBFA] flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#0B0B26]">
          Why Choose Our Services?
        </h2>
        <img src={service} alt="service" className="mt-4 w-16 md:w-20 " />
      </div>
      <div className="w-full md:w-1/3 mt-6 md:mt-0 text-red-700">
        <p className="text-lg font-medium">
          We provide an enriching learning experience that builds confidence,
          curiosity, and creativity in students.
        </p>
        <ul className="mt-4 space-y-2 text-base">
          {data.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
