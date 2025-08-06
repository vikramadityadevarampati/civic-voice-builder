import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import GallerySection from "@/components/GallerySection";
import NewsSection from "@/components/NewsSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <GallerySection />
      <NewsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
