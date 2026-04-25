import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartModal = () => {
  const { cartItems, removeItem } = useCart();

  return (
    <div className="absolute top-20 right-2 w-[95%] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:w-90 bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
      <div className="p-6 border-b border-grayish-blue/20">
        <h3 className="text-black text-md">Cart</h3>
      </div>

      <div className="p-6 min-h-48 flex flex-col justify-center">
        {cartItems.length > 0 ? (
          <>
            <div className="flex flex-col gap-6 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <img src={item.thumb} alt="" className="w-12 h-12 rounded-md" />
                  <div className="flex-1 text-dark-grayish-blue">
                    <p className="truncate w-40">{item.name}</p>
                    <p>
                      ${item.price.toFixed(2)} x {item.quantity}{' '}
                      <span className="font-bold text-very-dark-blue">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="hover:opacity-70"
                    aria-label="Remove item"
                  >
                    <img src="/images/icon-delete.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <Button className="md:w-full py-4">
              Checkout
            </Button>
          </>
        ) : (
          <p className="text-center font-bold py-10">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;