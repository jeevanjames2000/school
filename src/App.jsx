import { useRef, useState, useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Heroes from "./components/heroes/Heroes";
import About from "./components/about/About";
import ApplyNow from "./components/apply/ApplyNow";
import InvertedRadiusComponent from "./components/InvertedComp/InvertedRadiusComponent";
import Services from "./components/services/Services";

const queryClient = new QueryClient();
function App() {
  const [refreshGalleryTrigger] = useState(Date.now());
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const heroesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      gallery: galleryRef,
      heroes: heroesRef,
      contact: contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["galleryImages"],
      queryFn: async () => {
        const response = await fetch(
          "https://cms-crvm.onrender.com/aws/getImages",
          { cache: "no-store" }
        );
        return response.json();
      },
      staleTime: 5 * 60 * 1000,
    });
    const applyNowImages = [
      "https://jeevan-aws-s3-bucket.s3.amazonaws.com/uploads/1739098535579-ismail-salad-osman-hajji-dirir-v7FT5ngIEfA-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.amazonaws.com/uploads/1739098535574-erik-mclean-oghXYRP-SpE-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.amazonaws.com/uploads/1739098535579-tim-gouw-KigTvXqetXA-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.amazonaws.com/uploads/1739097984857-jason-sung-Ciz4lHr8Jgw-unsplash.webp",
    ];
    applyNowImages.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.decode().then(() => {
        queryClient.setQueryData(["applyNowImages", image], image);
      });
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-scroll no-scrollbar h-screen">
        <div ref={homeRef}>
          <ApplyNow
            scrollToSection={scrollToSection}
            refreshGalleryTrigger={refreshGalleryTrigger}
          />
        </div>
        <InvertedRadiusComponent />
        <Services />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={heroesRef}>
          <Heroes />
        </div>
        <div ref={galleryRef}>
          <Gallery refreshGalleryTrigger={refreshGalleryTrigger} />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </QueryClientProvider>
  );
}
export default App;
