import React, { useState, useRef, useEffect } from "react";
export default function Gallery({ refreshGalleryTrigger }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollRef = useRef(null);
  const userScrollTimeout = useRef(null);
  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://cms-crvm.onrender.com/aws/getImagesS3"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      console.log("data: ", data);
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  useEffect(() => {
    if (refreshGalleryTrigger) {
      fetchImages();
    }
  }, [refreshGalleryTrigger]);
  useEffect(() => {
    const startAutoScroll = () => {
      return setInterval(() => {
        if (!isUserScrolling && scrollRef.current && images.length > 0) {
          const container = scrollRef.current;
          const newIndex = (currentIndex + 1) % images.length;
          container.scrollTo({
            left: container.scrollWidth * (newIndex / images.length),
            behavior: "smooth",
          });
          setCurrentIndex(newIndex);
        }
      }, 3000);
    };
    let autoScrollInterval = startAutoScroll();
    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, images.length, isUserScrolling]);
  const handleManualScroll = () => {
    setIsUserScrolling(true);
    clearTimeout(userScrollTimeout.current);
    userScrollTimeout.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const newIndex = Math.round(
        (container.scrollLeft / container.scrollWidth) * images.length
      );
      setCurrentIndex(newIndex);
    }
  };
  return (
    <div className="bg-white py-12 px-6 text-center max-w-8xl mx-auto">
      <h3 className="text-red-500 text-2xl font-semibold">Gallery</h3>
      <h2 className="text-3xl font-bold mt-2 mb-3">Explore Our Gallery</h2>
      <div
        ref={scrollRef}
        onScroll={handleManualScroll}
        className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto snap-x scroll-smooth overflow-x-auto"
        style={{ scrollbarWidth: "2px", msOverflowStyle: "none" }}
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Gallery ${index}`}
              className="w-70 h-70 md:w-70 md:h-70 object-cover rounded-lg shadow-md flex-shrink-0 snap-start"
              loading="eager"
            />
          ))
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
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
