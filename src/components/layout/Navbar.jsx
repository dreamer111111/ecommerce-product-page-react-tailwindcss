import React from "react";
import { NAV_LINKS } from "../../data/data";
import Badge from "../ui/Badge";
import { useCart } from "../../context/CartContext"

const Navbar = ({ onCartClick }) => {
  const { totalItems } = useCart(); 


  return (
  <nav className="flex items-center justify-between py-6 md:py-10 border-b border-grayish-blue/20 px-6 md:px-0 w-full max-w-6xl mx-auto">
    <div className="flex items-center gap-4 md:gap-14">
      {/* Mobile Menu Toggle */}
      <button className="md:hidden pt-1" aria-label="Open menu">
        <img src="images/icon-menu.svg" alt="" />
      </button>

      {/* Logo */}
      <img src="/images/logo.svg" alt="sneakers logo" className="mb-1" />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 h-full">
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="relative group py-8">
            <a href={link.link} className="text-dark-grayish-blue hover:text-very-dark-blue transition-colors">
              {link.name}
            </a>
            {/* Hover underline effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </li>
        ))}
      </ul>
    </div>

    {/* Cart & Avatar Section */}
    <div className="flex items-center gap-5 md:gap-10">
      <button onClick={onCartClick} className="relative group">
        <img src="/images/icon-cart.svg" alt="cart" className="group-hover:brightness-0 transition-all" />
        
        {/* Only show badge if there are items */}
        {totalItems > 0 && (
          <Badge variant="cart" className="absolute -top-2 -right-2 px-1.5">
            {totalItems}
          </Badge>
        )}
      </button>

      <button className="w-6 md:w-12 rounded-full border-2 border-transparent hover:border-orange transition-all">
        <img src="images/image-avatar.png" alt="user avatar" />
      </button>
    </div>
  </nav>
);
};

export default Navbar;
