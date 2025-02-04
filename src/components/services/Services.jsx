import React from "react";
import service from "../../assets/service.png"


export default function Services() {
  const data = [
    "📚 500+ Students Enrolled",
    "👨‍🏫 50+ Qualified Teachers",
    "🏆 100% Student Development Focus",
    "📍 Located in the Heart of Vizag",
  ];

  return (
    <div className="p-10 bg-white flex justify-between items-center">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-900 text-right">
          Why Choose Our Services?
        </h2>
        <img src={service} alt="service" className="self-end" />
      </div>
      <div>
        <p className="text-red-700 mt-4  max-w-2xl mx-auto">
          We provide an enriching learning experience that builds confidence,
          curiosity, and creativity in students.
        </p>
        <ul className="text-xs text-justify">
          {data.map((item, index) => (
            <li key={index} className="flex items-center text-justify">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
