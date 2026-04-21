import React from "react";
import "./index.css";
import CardModal from "./components/layout/CartModal.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ProductGallery from "./components/product/ProductGallery.jsx";
import QuantitySelector from "./components/product/QuantitySelector.jsx";
import Thumbnail from "./components/product/Thumbnail.jsx";

const App = () => {
  const [quantity, setQuantity] = React.useState(0);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <main>
      <Navbar />
      <CardModal />
      <ProductGallery />
      <QuantitySelector quantity={quantity} increase={handleIncrease} decrease={handleDecrease} />
      <Thumbnail />
    </main>
  );
};

export default App;
