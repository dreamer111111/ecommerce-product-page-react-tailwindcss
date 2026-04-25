import React, { useState } from "react";
import { NAV_LINKS } from "../../data/data";
import Badge from "../ui/Badge";
import { useCart } from "../../context/CartContext";

const Navbar = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative w-full max-w-6xl mx-auto z-50">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/75 z-40 md:hidden " 
          onClick={toggleMenu} 
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-12" aria-label="Close menu">
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a 
                href={link.link} 
                className="text-very-dark-blue font-bold text-lg hover:text-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navbar Desktop & Mobile Header */}
      <nav className="flex items-center justify-between py-6 md:py-10 border-b border-grayish-blue/20 px-6 md:px-0">
        <div className="flex items-center gap-4 md:gap-14">
          {/* Menu Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden pt-1 cursor-pointer" 
            aria-label="Open menu"
          >
            <img src="/images/icon-menu.svg" alt="" />
          </button>

          {/* Logo */}
          <a href="/">
            <img src="/images/logo.svg" alt="sneakers logo" className="mb-1" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 self-stretch">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative group flex items-center h-full">
                <a 
                  href={link.link} 
                  className="text-dark-grayish-blue hover:text-very-dark-blue transition-colors py-8"
                >
                  {link.name}
                </a>
                {/* Active Indicator Underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </li>
            ))}
          </ul>
        </div>

        {/* Action Section (Cart & Profile) */}
        <div className="flex items-center gap-5 md:gap-10">
          <button 
            onClick={onCartClick} 
            className="relative group cursor-pointer"
            aria-label="View shopping cart"
          >
            <img 
              src="/images/icon-cart.svg" 
              alt="" 
              className="group-hover:brightness-0 transition-all duration-300" 
            />
            
            {totalItems > 0 && (
              <Badge variant="cart" className="absolute -top-2 -right-2 px-1.5 pointer-events-none">
                {totalItems}
              </Badge>
            )}
          </button>

          <button className="w-6 md:w-12 rounded-full border-2 border-transparent hover:border-orange transition-all duration-300 cursor-pointer">
            <img src="/images/image-avatar.png" alt="User Profile" className="w-full h-full" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;