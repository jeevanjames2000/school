import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import gallery1 from "../../assets/gallery1.png"
import gallery2 from "../../assets/gallery2.png"
import gallery3 from "../../assets/gallery3.png"
import gallery4 from "../../assets/gallery4.png"

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const images = [
    gallery1,gallery2,gallery3,gallery4,gallery3,gallery1,gallery4,gallery2
   
  ];
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];
  return (
    <div className="relative bg-white p-0 rounded-lg shadow-lg border-4 border-transparent max-w-5xl mx-auto text-center">
      <div className="absolute inset-1 border-1 border-black-500 rounded-lg"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">Our Gallery</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-lg font-semibold ${
              activeTab === "images"
                ? "bg-gray-900 text-white"
                : "bg-orange-500 text-white"
            }`}
            onClick={() => setActiveTab("images")}
          >
            Images
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold ${
              activeTab === "videos"
                ? "bg-gray-900 text-white"
                : "bg-orange-500 text-white"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activeTab === "images"
            ? images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))
            : videos.map((src, index) => (
                <video
                  key={index}
                  src={src}
                  controls
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))}
        </div>

        <div className="mt-6 flex items-center justify-center bottom-0 absolute">
          <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600 transition">
            Explore now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
