import React from "react";
import about from "../../assets/about.png";
export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={about}
          alt="Colorful Bulbs"
          className="rounded-lg shadow-lg"
          height={"80%"}
          width={"80%"}
        />
      </div>
      <div className="flex justify-center items-center  p-4 ">
        <div className="bg-[#1D1E33] text-white p-8 rounded-2xl shadow-lg max-w-lg relative">
          <h2 className="text-3xl font-bold text-[#E2953D]">About Us</h2>
          <p className="mt-4 font-bold">
            Shaping Bright Futures with Quality Education
          </p>
          <p className="mt-2 text-sm">
            Welcome to{" "}
            <span className="font-bold">Sri Ganesh Little Feet School</span>, a
            place where learning meets excellence! Located in Vizag, we provide
            education from 1st to 7th grade, focusing on academic success,
            personal growth, and overall development.
          </p>
          <p className="mt-2 text-sm">
            At Sri Ganesh Little Feet School, we believe that every child is
            unique, and our mission is to nurture their potential through a
            holistic learning approach. Our school offers a safe, engaging, and
            supportive environment where students can explore, innovate, and
            grow.
          </p>
          <h3 className="mt-6 font-bold">Our Vision & Mission</h3>
          <p className="text-sm mt-2">
            <span className="font-bold">Vision:</span> To create a learning
            environment where students become curious thinkers, confident
            leaders, and responsible citizens.
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Mission:</span> To provide high-quality
            education with a focus on innovation, creativity, and
            character-building.
          </p>
          <button className="mt-4 mb-2 bg-[#E2953D] text-[#1D1E33] font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#D28430] relative top-5">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}
