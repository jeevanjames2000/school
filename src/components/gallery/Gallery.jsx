import React, { useState, useEffect, useRef } from "react";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery3,
    gallery1,
    gallery4,
    gallery2,
  ];
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];
  const items = activeTab === "images" ? images : videos;
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const itemWidth = container.scrollWidth / items.length;
        const newIndex = (currentIndex + 1) % items.length;
        container.scrollTo({ left: itemWidth * newIndex, behavior: "smooth" });
        setCurrentIndex(newIndex);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);
  return (
    <div className="relative rounded-lg shadow-xl max-w-7xl mx-auto text-center p-10 m-10">
      <h2 className="text-2xl font-bold mb-4">Our Gallery</h2>

      {/* Tabs */}
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

      {/* Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="overflow-hidden flex scroll-smooth scrollbar-hide"
      >
        <div className="flex space-x-4 p-4 w-full">
          {items.map((src, index) =>
            activeTab === "images" ? (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-md flex-shrink-0"
              />
            ) : (
              <video
                key={index}
                src={src}
                controls
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-md flex-shrink-0"
              />
            )
          )}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
