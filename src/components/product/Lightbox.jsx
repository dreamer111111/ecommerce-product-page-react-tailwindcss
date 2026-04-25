import React, { useState } from "react";
import { PRODUCT_IMAGES } from "../../data/data";
import Thumbnail from "./Thumbnail";

const Lightbox = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-100 hidden md:flex flex-col items-center justify-center bg-black/75 p-4">
      <div className="relative max-w-112.5 w-full flex flex-col gap-6">
        
        {/* Close Button - SVG Color shifts on hover */}
        <button 
          onClick={onClose} 
          className="self-end group"
          aria-label="Close lightbox"
        >
          <img src="images/icon-close.svg" alt="Close" />
        </button>

        {/* Main Image Container */}
        <div className="relative">
          {/* Previous Button - Positioned absolute to the LEFT */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl group z-10 transition-transform active:scale-90"
          >
             <img src="images/icon-previous.svg" alt="Previous" />
          </button>

          <img
            src={PRODUCT_IMAGES[currentIndex].main}
            alt="Product"
            className="rounded-2xl w-full select-none"
          />

          {/* Next Button - Positioned absolute to the RIGHT */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl group z-10 transition-transform active:scale-90"
          >
            <img src="images/icon-next.svg" alt="Next" />
          </button>
        </div>

        {/* Thumbnails - Centered below the main image */}
        <div className="flex justify-center gap-5 px-6">
          {PRODUCT_IMAGES.map((image, index) => (
            <Thumbnail
              key={image.id}
              image={image.thumb}
              isActive={currentIndex === index}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;