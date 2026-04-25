import React from "react";
import Badge from "../ui/Badge.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import Button from "../ui/Button.jsx";
import { PRODUCT_DATA } from "../../data/data.js";
import { useCart } from "../../context/CartContext.jsx";
const ProductDetails = ({ quantity, handleIncrease, handleDecrease }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(PRODUCT_DATA, quantity);
  };

  return (
    <div className="p-6 flex flex-col gap-6 md:gap-8 md:w-1/2">
      <h1 className="uppercase text-dark-grayish-blue text-md">
        Sneaker Company
      </h1>
      <h2 className="text-3xl font-bold text-black">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-black">$125.00</span>
          <Badge children="50%" />
        </div>
        <span className="text-lg font-bold text-grayish-blue line-through">
          $250.00
        </span>
      </div>
      <div className="flex flex-column md:flex-row gap-4">
        <QuantitySelector
          quantity={quantity}
          increase={handleIncrease}
          decrease={handleDecrease}
        />
        <Button  onClick={handleAddToCart} >
          <img src="images/icon-cart.svg" alt="" />
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
