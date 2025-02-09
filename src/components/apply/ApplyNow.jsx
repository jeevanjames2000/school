import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import heroImage1 from "../../assets/ismail-salad-osman-hajji-dirir-v7FT5ngIEfA-unsplash.jpg";
import heroImage2 from "../../assets/erik-mclean-oghXYRP-SpE-unsplash.jpg";
import heroImage3 from "../../assets/tim-gouw-KigTvXqetXA-unsplash.jpg";
import heroImage4 from "../../assets/jason-sung-Ciz4lHr8Jgw-unsplash.jpg";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];

export default function ApplyNow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { data: preloadedImage } = useQuery({
    queryKey: ["applyNowImages", images[currentImageIndex]],
    queryFn: async () => {
      return images[currentImageIndex];
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100"
        style={{ backgroundImage: `url(${preloadedImage || images[0]})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
          Nurturing Young Minds for a Bright Future!
        </h1>
        <p className="text-lg sm:text-xl mt-4 opacity-90">
          Quality Education from Pre-Primary to Primary
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-900 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}
