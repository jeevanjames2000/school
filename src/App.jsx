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
import Header from "./components/header/Header";
import ApplyNow from "./components/apply/ApplyNow";
import InvertedRadiusComponent from "./components/InvertedComp/InvertedRadiusComponent";
import Services from "./components/services/Services";
import heroImage1 from "./assets/ismail-salad-osman-hajji-dirir-v7FT5ngIEfA-unsplash.jpg";
import heroImage2 from "./assets/erik-mclean-oghXYRP-SpE-unsplash.jpg";
import heroImage3 from "./assets/tim-gouw-KigTvXqetXA-unsplash.jpg";
import heroImage4 from "./assets/jason-sung-Ciz4lHr8Jgw-unsplash.jpg";
const queryClient = new QueryClient();
function App() {
  const [refreshGalleryTrigger, setRefreshGalleryTrigger] = useState(
    Date.now()
  );
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
    const applyNowImages = [heroImage1, heroImage2, heroImage3, heroImage4];
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
      <div ref={homeRef}>
        <Header
          scrollToSection={scrollToSection}
          refreshGalleryTrigger={refreshGalleryTrigger}
        />
      </div>
      <ApplyNow />
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
    </QueryClientProvider>
  );
}
export default App;
