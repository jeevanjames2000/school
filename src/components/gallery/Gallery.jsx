import React, { useState, useRef, useEffect } from "react";

export default function Gallery({ refreshGalleryTrigger }) {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  console.log("videos: ", videos);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("images");
  const scrollRef = useRef(null);
  const userScrollTimeout = useRef(null);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cms-crvm.onrender.com/aws/getImagesS3"
      );
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/cms/getCMS");
      if (!response.ok) throw new Error("Failed to fetch videos");
      const data = await response.json();
      setVideos(data || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "images") {
      fetchImages();
    } else {
      fetchVideos();
    }
  }, [activeTab, refreshGalleryTrigger]);

  return (
    <div className="bg-white py-12 px-6 text-center max-w-8xl mx-auto">
      <h3 className="text-red-500 text-2xl font-semibold">Gallery</h3>
      <h2 className="text-3xl font-bold mt-2 mb-3">Explore Our Gallery</h2>
      <div className="flex justify-center items-center gap-6">
        <button
          className={`mt-6 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300 ${
            activeTab === "images" ? "bg-yellow-500" : "bg-yellow-400"
          }`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          className={`mt-6 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300 ${
            activeTab === "videos" ? "bg-yellow-500" : "bg-yellow-400"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : activeTab === "images" && images.length > 0 ? (
        <div className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto overflow-x-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Gallery ${index}`}
              className="w-70 h-70 object-cover rounded-lg shadow-md flex-shrink-0"
              loading="eager"
            />
          ))}
        </div>
      ) : activeTab === "videos" && videos.length > 0 ? (
        <div className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto overflow-x-auto">
          {videos.map((video, index) => (
            <iframe
              key={index}
              width="400"
              height="280"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={`YouTube Video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md flex-shrink-0"
            ></iframe>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No content available</p>
      )}
    </div>
  );
}
