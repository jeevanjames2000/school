import React, { useState, useEffect, useRef } from "react";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollRef = useRef(null);
  const userScrollTimeout = useRef(null);

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
    const startAutoScroll = () => {
      return setInterval(() => {
        if (!isUserScrolling && scrollRef.current) {
          const container = scrollRef.current;
          const itemWidth = container.scrollWidth / items.length;
          const newIndex = (currentIndex + 1) % items.length;
          container.scrollTo({
            left: itemWidth * newIndex,
            behavior: "smooth",
          });
          setCurrentIndex(newIndex);
        }
      }, 3000);
    };

    let autoScrollInterval = startAutoScroll();

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, items.length, isUserScrolling]);

  const handleManualScroll = () => {
    setIsUserScrolling(true);
    clearTimeout(userScrollTimeout.current);
    userScrollTimeout.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
  };

  return (
    <div className="bg-white py-12 px-6 text-center max-w-8xl mx-auto ">
      <h3 className="text-red-500 text-lg font-semibold">Gallery</h3>
      <h2 className="text-3xl font-bold mt-2">Explore Our Gallery</h2>
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
      <div
        ref={scrollRef}
        onScroll={handleManualScroll}
        className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto snap-x scroll-smooth overflow-x-auto no-scrollbar"
      >
        {items.map((src, index) =>
          activeTab === "images" ? (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg shadow-md flex-shrink-0 snap-start"
            />
          ) : (
            <video
              key={index}
              src={src}
              controls
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg shadow-md flex-shrink-0 snap-start"
            />
          )
        )}
      </div>

      <div className="flex justify-center mt-4 space-x-2 ">
        {items.map((_, index) => (
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
