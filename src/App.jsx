import React from "react";
import "./index.css";
import CardModal from "./components/layout/CartModal.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ProductGallery from "./components/product/ProductGallery.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Lightbox from "./components/product/Lightbox.jsx";

const App = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const handleOpenLightbox = () => {
    if (window.innerWidth >= 768) {
      setIsLightboxOpen(true);
    }
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center md:gap-2 md:p-8 relative">
      <Navbar onCartClick={() => setIsCartOpen(!isCartOpen)} />
        {isLightboxOpen && (
        <Lightbox onClose={() => setIsLightboxOpen(false)} />
      )}
        <div className="relative w-full max-w-6xl">
        {isCartOpen && <CardModal />}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 mt-8 md:mt-10">
        <ProductGallery onImageClick={handleOpenLightbox} />
        <ProductDetails
          quantity={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          resetQuantity={() => setQuantity(0)}
        />
      </div>
    </main>
  );
};

export default App;
