import React from 'react'

const Badge = ({ children, variant = "discount", className = "" }) => {
  const variantStyles = {
    discount: "bg-black text-white px-2 py-0.5 rounded-md",
    cart: "bg-orange text-white text-[10px] px-1.5 py-0.5 rounded-2xl min-w-[1.25rem] aspect-square",
  };

  return (
    <span className={`inline-flex items-center justify-center font-bold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge