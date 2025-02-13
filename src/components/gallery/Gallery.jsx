import React, { useState, useRef, useEffect } from "react";
export default function Gallery({ refreshGalleryTrigger }) {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("images");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const scrollContainerRef = useRef(null);
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
      const response = await fetch("https://cms-crvm.onrender.com/cms/getCMS");
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
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScroll);
      setTotalWidth(container.scrollWidth - container.clientWidth);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeTab, images, videos]);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && (images.length > 0 || videos.length > 0)) {
      const interval = setInterval(() => {
        const nextIndex =
          (currentIndex + 1) %
          (activeTab === "images" ? images.length : videos.length);
        setCurrentIndex(nextIndex);
        scrollToItem(nextIndex);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, activeTab, images, videos]);
  const scrollToItem = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = container.children[index].offsetWidth;
      container.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    fetchImages();
    fetchVideos();
  }, [refreshGalleryTrigger]);
  return (
    <div className="bg-white py-12 px-6 text-center max-w-8xl mx-auto">
      <h3 className="text-red-500 text-2xl font-semibold">Gallery</h3>
      <h2 className="text-3xl font-bold mt-2 mb-3">Explore Our Gallery</h2>
      <div className="flex justify-center items-center gap-6">
        <button
          className={`mt-6 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300 ${
            activeTab === "images" ? "bg-yellow-500" : "bg-white-400"
          } ${activeTab === "images" ? "border-0" : "border-1 border-black"}`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          className={`mt-6 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300 ${
            activeTab === "videos" ? "bg-yellow-500" : "bg-white-400"
          } ${activeTab === "videos" ? "border-0" : "border-1 border-black"}`}
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
        <>
          <div
            ref={scrollContainerRef}
            className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[calc(100vw-3rem)] md:w-70"
              >
                <img
                  src={image.url}
                  alt={`Gallery ${index}`}
                  className="w-full h-70 object-cover rounded-lg shadow-md"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  scrollPosition >=
                    index *
                      (scrollContainerRef.current?.children[index]
                        ?.offsetWidth || 0) &&
                  scrollPosition <
                    (index + 1) *
                      (scrollContainerRef.current?.children[index]
                        ?.offsetWidth || 0)
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </>
      ) : activeTab === "videos" && videos.length > 0 ? (
        <>
          <div
            ref={scrollContainerRef}
            className="mt-8 flex space-x-6 w-full max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[calc(100vw-3rem)] md:w-[400px]"
              >
                <iframe
                  width="100%"
                  height="280"
                  // src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  src={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  title={`YouTube Video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  scrollPosition >=
                    index *
                      (scrollContainerRef.current?.children[index]
                        ?.offsetWidth || 0) &&
                  scrollPosition <
                    (index + 1) *
                      (scrollContainerRef.current?.children[index]
                        ?.offsetWidth || 0)
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No content available</p>
      )}
    </div>
  );
}
