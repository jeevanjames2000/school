import Header from "../header/Header";
import { useState, useEffect } from "react";

const images = [
  "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203926526-cdc-UqTrGSohyCs-unsplash.webp",
  "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203926528-erik-mclean-oghXYRP-SpE-unsplash.webp",
  "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739204026705-robert-collins-lP_FbBkMn1c-unsplash.webp",
  "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203602386-3907.webp",
];
export default function ApplyNow({ scrollToSection, refreshGalleryTrigger }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  useEffect(() => {
    console.log(window.scrollY);
    const preload = () => {
      let count = 0;
      images.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.loading = "eager";
        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [index]: true }));
          count++;
          if (count === images.length) setAllImagesLoaded(true);
        };
      });
    };
    preload();
  }, []);
  useEffect(() => {
    if (!allImagesLoaded) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [allImagesLoaded]);
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <Header
        scrollToSection={scrollToSection}
        refreshGalleryTrigger={refreshGalleryTrigger}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          loadedImages[currentImageIndex] ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Nurturing Young Minds for a Bright Future!
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 opacity-90">
          Quality Education from Pre-Primary to Primary
        </p>
        <button className="mt-6 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold bg-yellow-400 text-gray-900 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}
