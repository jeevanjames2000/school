import React, { useRef, useEffect, useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import tutor from "../../assets/tutor.png";
const heroes = [
  {
    name: "Ajay Kumar",
    title: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: tutor,
  },
  {
    name: "Vijay Kumar",
    title: "Director, Undergraduate Analytics and Planning",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: tutor,
  },
  {
    name: "Anusha",
    title: "Career Educator",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: tutor,
  },
  {
    name: "Geetha",
    title: "Co-op & Internships Program & Operations Manager",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: tutor,
  },
];
export default function Heroes() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.scrollWidth / heroes.length;
        const newIndex = (currentIndex + 1) % heroes.length;
        container.scrollTo({ left: cardWidth * newIndex, behavior: "smooth" });
        setCurrentIndex(newIndex);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="bg-white py-12 px-6 lg:px-20 text-center">
      <h3 className="text-red-500 text-3xl font-semibold">Tutors</h3>
      <h2 className="text-3xl font-bold mt-2">Meet the Heroes</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        Our dedicated teachers are the true heroes, shaping young minds with
        care, knowledge, and passion. With their expertise and guidance,
        students gain the skills and confidence needed to excel in academics and
        beyond.
      </p>
      {}
      <div
        ref={scrollRef}
        className="mt-8 overflow-x-auto flex space-x-6 w-full scrollbar-hide snap-x scroll-smooth"
      >
        {heroes.map((hero, index) => (
          <div
            key={index}
            className="bg-[#0D1B2A] text-white p-6 rounded-lg flex flex-col justify-between items-center snap-start min-w-[90%] sm:min-w-[48%] md:min-w-[30%] lg:min-w-[22%]"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <div>

           
            <h3 className="text-lg font-semibold">{hero.name}</h3>
            <p className="text-sm text-yellow-400 font-medium mt-1">
              {hero.title}
            </p>
            <p className="text-sm text-gray-300 mt-2 text-center">
              {hero.description}
            </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-4 space-x-2">
        {heroes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
