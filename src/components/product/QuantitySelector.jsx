import React from "react";

const QuantitySelector = ({ quantity, increase, decrease }) => {
  return (
    <div className="flex items-center justify-between bg-light-grayish-blue rounded-lg py-3 px-4 w-full md:w-40">
      <button onClick={decrease} aria-label="Decrease quantity" className="cursor-pointer py-2">
        <img
          src="./images/icon-minus.svg"
          className="hover:opacity-60 transition-opacity"
          alt=""
        />
      </button>
      <span className="font-bold text-very-dark-blue tabular-nums">{quantity}</span>
      <button onClick={increase} aria-label="Increase quantity">
        <img
          src="./images/icon-plus.svg"
          className="hover:opacity-60 transition-opacity"
          alt=""
        />
      </button>
    </div>
  );
};

export default QuantitySelector;
