import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const heroes = [
  {
    name: "Ajay Kumar",
    title: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    name: "Vijay Kumar",
    title: "Director, Undergraduate Analytics and Planning",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Anusha",
    title: "Career Educator",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Geetha",
    title: "Co-op & Internships Program & Operations Manager",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "https://via.placeholder.com/100",
  },
];

export default function Heroes() {
  return (
    <div className="bg-white py-12 px-6 text-center">
      <h3 className="text-red-500 text-lg font-semibold">Tutors</h3>
      <h2 className="text-3xl font-bold mt-2">Meet the Heroes</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our dedicated teachers are the true heroes, shaping young minds with
        care, knowledge, and passion. With their expertise and guidance,
        students gain the skills and confidence needed to excel in academics and
        beyond.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className="bg-[#0D1B2A] text-white p-6 rounded-lg flex flex-col items-center"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <h3 className="text-lg font-semibold">{hero.name}</h3>
            <p className="text-sm text-yellow-400 font-medium mt-1">
              {hero.title}
            </p>
            <p className="text-sm text-gray-300 mt-2 text-center">
              {hero.description}
            </p>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
