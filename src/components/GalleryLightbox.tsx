import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

const GalleryLightbox = ({ images }: GalleryLightboxProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? "bg-gradient-primary text-white shadow-medium"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer break-inside-avoid animate-fade-in"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
          )}

          {/* Next Button */}
          {selectedImage < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="font-semibold text-xl">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-sm text-gray-300">
                {filteredImages[selectedImage].category}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryLightbox;
