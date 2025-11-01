import React, { useState } from "react";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

interface Props {
  items: GalleryItem[];
}

const GalleryScroller: React.FC<Props> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-b from-[#fafafa] to-[#f3f3f3]">
      {/* gradient fade edges */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#fafafa] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#fafafa] to-transparent z-10"></div>

      {/* scroll container */}
      <div className="flex gap-6 animate-gallery-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-6 shrink-0">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${index}-${i}`}
                className="relative min-w-[400px] max-w-[400px] h-[100%] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* text */}
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Popup / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black/40 hover:bg-black/70 rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryScroller;
