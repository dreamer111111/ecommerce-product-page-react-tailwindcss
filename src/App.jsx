import React from "react";
import "./index.css";
import CardLayout from "./components/layout/Navbar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ProductGallery from "./components/product/ProductGallery.jsx";
import QuantitySelector from "./components/product/QuantitySelector.jsx";
import Thumbnail from "./components/product/Thumbnail.jsx";
import Badge from "./components/ui/Badge.jsx";
import Button from "./components/ui/Button.jsx";
const handleAddToCart = () => {
  // add to cart logic here
  console.log("Product added to cart!");
};

const App = () => {
  return (
    <main>
      <Navbar />
      <ProductGallery />
      <QuantitySelector />
      <Thumbnail />
      
      
      <Button onClick={handleAddToCart}>
        <img src="/images/icon-cart.svg" alt="" aria-hidden="true" />
        <span>Add to cart</span>
      </Button>
    </main>
  );
};

export default App;
