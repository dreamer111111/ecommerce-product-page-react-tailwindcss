import React from "react";
import "./index.css";
import CardModal from "./components/layout/CartModal.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ProductGallery from "./components/product/ProductGallery.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx";

const App = () => {
  const [quantity, setQuantity] = React.useState(0);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center md:gap-6 md:p-8">
      <Navbar />
      <CardModal />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <ProductGallery />
        <ProductDetails quantity={quantity} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
      </div>
      
      
    </main>
  );
};

export default App;
