import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import politicalRally from "@/assets/political-rally.jpg";
import communityWork from "@/assets/community-work.jpg";
import politicianPortrait from "@/assets/politician-portrait.jpg";
import speechEvent from "@/assets/speech-event.jpg";
import villageVisit from "@/assets/village-visit.jpg";
import schoolInauguration from "@/assets/school-inauguration.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import medicalCamp from "@/assets/medical-camp.jpg";
import youthInteraction from "@/assets/youth-interaction.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: politicalRally,
      alt: "Political Rally - Connecting with the people",
      title: "Public Rally 2023",
      description: "Addressing thousands of supporters at the annual constituency rally"
    },
    {
      src: communityWork,
      alt: "Community Development Work",
      title: "Community Development",
      description: "Inaugurating new school infrastructure project in rural areas"
    },
    {
      src: politicianPortrait,
      alt: "Official Portrait",
      title: "Official Portrait",
      description: "Official portrait for government documentation"
    },
    {
      src: speechEvent,
      alt: "Public Speech Event",
      title: "Public Address 2023",
      description: "Delivering keynote speech at district development conference"
    },
    {
      src: villageVisit,
      alt: "Village Visit",
      title: "Rural Outreach",
      description: "Meeting with farmers and discussing agricultural reforms"
    },
    {
      src: schoolInauguration,
      alt: "School Inauguration",
      title: "Education Initiative",
      description: "Inaugurating new school building for underprivileged children"
    },
    {
      src: officeMeeting,
      alt: "Office Meeting",
      title: "Policy Discussion",
      description: "Strategic planning meeting with government officials"
    },
    {
      src: medicalCamp,
      alt: "Medical Camp",
      title: "Healthcare Initiative",
      description: "Launching free medical camp for rural communities"
    },
    {
      src: youthInteraction,
      alt: "Youth Interaction",
      title: "Youth Parliament",
      description: "Interactive session with college students and young professionals"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="political-section-title">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments captured during our journey of service, community engagement, 
            and the ongoing mission to build a better tomorrow.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="gallery-overlay">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center political-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Public Events</div>
          </div>
          <div className="text-center political-card p-6">
            <div className="text-3xl font-bold text-accent mb-2">75K+</div>
            <div className="text-muted-foreground">People Met</div>
          </div>
          <div className="text-center political-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">35+</div>
            <div className="text-muted-foreground">Projects Launched</div>
          </div>
          <div className="text-center political-card p-6">
            <div className="text-3xl font-bold text-accent mb-2">18</div>
            <div className="text-muted-foreground">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;