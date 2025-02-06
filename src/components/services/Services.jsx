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
    <div className="p-10 lg:px-20 xl:px-0   bg-[#FDFBFA] flex flex-col  justify-center items-center md:flex-row md:justify-between   lg:max-w-screen-lg lg:mx-auto ">
      <div className="flex flex-col justify-center items-center md:items-start w-full  text-center md:text-left  ">
        <img src={service} alt="service" className="w-16 md:w-20 mb-4" />
        <h2 className="text-3xl font-bold text-[#0B0B26]">
          Why Choose Our Services ?
        </h2>
      </div>
      <div className="w-full  mt-6 md:mt-0 text-red-700 ">
        <p className="text-lg font-medium text-left">
          We provide an enriching learning experience that builds confidence,
          curiosity, and creativity in students.
        </p>
        <ul className="mt-4 space-y-2 text-base list-none">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 items-center before:content-[attr(data-icon)] before:mr-2 before:text-xl"
              data-icon={item.split(" ")[0]}
            >
              {item.split(" ").slice(1).join(" ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
