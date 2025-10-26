import { useState } from "react";
import { Helmet } from "react-helmet";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

import gallary9 from "@/assets/gallary/gallary-9.jpeg";
import gallary10 from "@/assets/gallary/gallary-10.jpeg";
import gallary11 from "@/assets/gallary/gallary-11.jpeg";
import gallary12 from "@/assets/gallary/gallary-12.jpeg";
import gallary13 from "@/assets/gallary/gallary-13.jpeg";
import gallary14 from "@/assets/gallary/gallary-14.jpeg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: gallery2,
      title: "AL-ROTAN Office Interior",
      category: "Office",
    },
    {
      src: gallery3,
      title: "Worker Deployment",
      category: "Operations",
    },
    {
      src: gallery4,
      title: "Reception Area",
      category: "Office",
    },
    {
      src: gallery5,
      title: "Successful Deployment Ceremony",
      category: "Events",
    },
    {
      src: gallery6,
      title: "Document Processing",
      category: "Operations",
    },
    {
      src: gallery7,
      title: "Leadership Interview",
      category: "Media Coverage",
    },
    {
      src: gallery8,
      title: "Leadership Interview",
      category: "Media Coverage",
    },
    {
      src: gallary9,
      title: "Leadership Interview",
      category: "Media Coverage",
    },
    {
      src: gallary10,
      title: "Iraq Labor Market Coverage",
      category: "Media Coverage",
    },
    {
      src: gallary11,
      title: "Leadership Interview",
      category: "Media Coverage",
    },
    {
      src: gallary12,
      title: "Iraq Labor Market Coverage",
      category: "Media Coverage",
    },
    {
      src: gallary13,
      title: "Successful Deployment Ceremony",
      category: "Events",
    },
    {
      src: gallary14,
      title: "Successful Deployment Ceremony",
      category: "Events",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Gallery - AL-ROTAN (Pvt.) Limited</title>
        <meta
          name="description"
          content="Explore our gallery showcasing AL-ROTAN's operations, successful deployments, office facilities, and media coverage of our recruitment services."
        />
        <meta
          name="keywords"
          content="AL-ROTAN gallery, recruitment photos, worker deployment, office facilities, media coverage"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Media Gallery
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Explore our journey through images - from successful deployments to
                our state-of-the-art facilities and media recognition.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-foreground font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elevated animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
