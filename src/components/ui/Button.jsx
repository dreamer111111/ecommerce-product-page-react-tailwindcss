import React from 'react'

const Button = ({ children, className = "", ...props }) => {
  const baseStyles = "bg-orange text-neutral-white font-bold py-3 px-6 rounded-lg w-full flex items-center justify-center gap-4 transition-all duration-300";
  const responsiveStyles = "md:w-64";
  const interactiveStyles = "hover:bg-orange/70 hover:shadow-lg hover:color-orange/30 active:scale-95";

  return (
    <button 
      className={`${baseStyles} ${responsiveStyles} ${interactiveStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button