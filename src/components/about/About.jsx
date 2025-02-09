import React from "react";
import about from "../../assets/about.png";
export default function About() {
  return (
    <div className="p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row lg:justify-around items-center justify-center  bg-white">
      <div className="w-full lg:w-1/3 hidden xl:flex lg:justify-center ">
        <img
          src={about}
          alt="Colorful Bulbs"
          className="rounded-lg shadow-lg"
          height={"100%"}
          width={"100%"}
        />
      </div>

      <div className="w-full lg:w-1/2  flex justify-center items-center">
        <div className="bg-[#1D1E33] text-white p-8 rounded-2xl shadow-lg w-full max-w-3xl relative">
          <h2 className="text-3xl font-bold text-[#E2953D]">About Us</h2>
          <p className="mt-4 font-semibold text-2xl mb-8">
            Shaping Bright Futures with Quality Education
          </p>
          <p className="mt-2 text-base">
            Welcome to{" "}
            <span className="font-bold">Sri Ganesh Little Feet School</span>, a
            place where learning meets excellence! Located in Vizag, we provide
            education from 1st to 7th grade, focusing on academic success,
            personal growth, and overall development.
          </p>
          <p className="mt-2 text-base">
            At School Name, we believe that every child is unique, and our
            mission is to nurture their potential through a holistic learning
            approach. Our school offers a safe, engaging, and supportive
            environment where students can explore, innovate, and grow.
          </p>
          <h3 className="mt-6 font-bold text-xl">Our Vision & Mission</h3>
          <p className="text-base mt-2">
            <span className="font-bold text-lg mr-1">Vision:</span> To create a
            learning environment where students become curious thinkers,
            confident leaders, and responsible citizens.
          </p>
          <p className="text-base mt-2">
            <span className="font-bold text-lg mr-1">Mission:</span> To provide
            high-quality education with a focus on innovation, creativity, and
            character-building.
          </p>
          <div className="flex justify-center">
            <button className="mt-8 mb-2 bg-[#E2953D] text-[#1D1E33] font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#D28430]">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
