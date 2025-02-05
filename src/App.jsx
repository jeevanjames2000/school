import { useRef } from "react";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Heroes from "./components/heroes/Heroes";
import About from "./components/about/About";
import Header from "./components/header/Header";
import ApplyNow from "./components/apply/ApplyNow";
import InvertedRadiusComponent from "./components/InvertedComp/InvertedRadiusComponent";
import Services from "./components/services/Services";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const heroesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (section) => {
    if (section === "home")
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "gallery")
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "heroes")
      heroesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div ref={homeRef}>
        <Header scrollToSection={scrollToSection} />
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
        <Gallery />
      </div>
      <div ref={contactRef}>
        <Contact />
       

      </div>
   
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;
