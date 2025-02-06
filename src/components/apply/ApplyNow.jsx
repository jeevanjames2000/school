import React from "react";
import hero from "../../assets/apply-now-hero.png";
import hero2 from "../../assets/apply-now-hero2.png";
export default function ApplyNow() {
  return (
    <div className="bg-white-100 py-6 px-6 lg:px-10  pb-0 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 shadow-lg">
      {}
      <div className="text-left w-full md:w-300 items-center justify-center flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1B2D63]">
          Welcome to Sri Ganesh Little Feets
        </h1>

        <p className="text-[#D87C26] text-justify text-lg md:text-2xl mt-4 font-medium">
          Nurturing young minds with quality education from Pre-Primary to Class
          7.
        </p>

        <button className="mt-6 mb-2 bg-black text-white px-6 py-3 rounded-lg font-medium">
          Apply now
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
          <div className="bg-[#872341] text-white p-3 md:p-4 rounded-lg block md:flex items-center gap-3 md:gap-4 shadow-md">
            <img
              src="/src/assets/teacher-2.png"
              alt="Teacher"
              className="h-20 md:h-32 rounded-lg mx-auto md:mx-0"
            />
            <p className="font-bold text-sm md:text-base text-center md:text-left">
              Excellence in Education: <br /> Empowering students with knowledge
              and confidence.
            </p>
          </div>
          <div className="bg-[#872341] text-white p-3 md:p-4 rounded-lg block md:flex items-center gap-3 md:gap-4 shadow-md">
            <img
              src={hero2}
              alt="Students"
              className="h-20 w-60 md:h-32 rounded-lg mx-auto md:mx-0"
            />
            <p className="font-bold text-sm md:text-base text-center md:text-left">
              To nurture and develop young minds into well-rounded individuals
              with
              <strong> critical thinking, leadership, and compassion</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block max-[1000px]:hidden">
        <img src={hero} alt="hero-section" className="h-[450px]" />
      </div>
    </div>
  );
}
