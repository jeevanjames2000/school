import { useRef, useState, useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import Footer from "../../components/Footer";
import Contact from "../../components/contact/Contact";
import Gallery from "../../components/gallery/Gallery";
import Heroes from "../../components/heroes/Heroes";
import About from "../../components/about/About";
import ApplyNow from "../../components/apply/ApplyNow";
import InvertedRadiusComponent from "../../components/InvertedComp/InvertedRadiusComponent";
import Services from "../../components/services/Services";
import ExcellenceSection from "../../components/excellenceSection/ExcellenceSection";

const queryClient = new QueryClient();
function Home() {
  const [refreshGalleryTrigger, setRefreshGalleryTrigger] = useState(
    Date.now()
  );

  const triggerGalleryRefresh = () => {
    setRefreshGalleryTrigger(Date.now());
  };

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
          "https://cms-crvm.onrender.com/aws/getImagesS3",
          { cache: "no-store" }
        );
        return response.json();
      },
      staleTime: 5 * 60 * 1000,
    });
    const applyNowImages = [
      "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203926526-cdc-UqTrGSohyCs-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203926528-erik-mclean-oghXYRP-SpE-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739204026705-robert-collins-lP_FbBkMn1c-unsplash.webp",
      "https://jeevan-aws-s3-bucket.s3.ap-south-1.amazonaws.com/uploads/1739203602386-3907.webp",
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
      <div className="overflow-scroll no-scrollbar">
        <div ref={homeRef}>
          <ApplyNow
            scrollToSection={scrollToSection}
            refreshGalleryTrigger={refreshGalleryTrigger}
            triggerGalleryRefresh={triggerGalleryRefresh}
          />
        </div>
        <InvertedRadiusComponent />
        <ExcellenceSection />
        <Services />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={heroesRef}>
          <Heroes />
        </div>
        <div ref={galleryRef}>
          <Gallery
            refreshGalleryTrigger={refreshGalleryTrigger}
            triggerGalleryRefresh={triggerGalleryRefresh}
          />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </QueryClientProvider>
  );
}
export default Home;
