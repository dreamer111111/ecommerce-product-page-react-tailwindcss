import { useState } from "react";
import Thumbnail from "./Thumbnail.jsx";

const ProductGallery = () => {
  const PRODUCT_IMAGES = [
    {
      id: 1,
      main: "/images/image-product-1.jpg",
      thumb: "/images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      main: "/images/image-product-2.jpg",
      thumb: "/images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      main: "/images/image-product-3.jpg",
      thumb: "/images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      main: "/images/image-product-4.jpg",
      thumb: "/images/image-product-4-thumbnail.jpg",
    },
  ];

  const [currentindex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-8 md:max-w-111.25">
      <div className="relative overflow-hidden md:rounded-2xl">
        <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden">
          <button
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            aria-label="Previous image"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1,
              )
            }
          >
            <img src="images/icon-previous.svg" alt="" className="pr-1" />
          </button>
          <button
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            aria-label="Next image"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <img src="images/icon-next.svg" alt="Next" className="pl-1" />
          </button>
        </div>
        <img
          src={PRODUCT_IMAGES[currentindex].main}
          alt={`Product Image ${currentindex + 1}`}
          className="w-full h-75 object-cover md:h-auto cursor-pointer"
        />
      </div>

      <div className="hidden md:flex justify-between gap-4">
        {PRODUCT_IMAGES.map((image, index) => (
          <Thumbnail
            key={image.id}
            image={image.thumb}
            isActive={currentindex === index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
