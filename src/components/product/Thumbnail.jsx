import React from 'react'

const Thumbnail = ({ image, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 
        ${isActive ? 'ring-2 ring-orange' : 'hover:opacity-50'}`}
      aria-label="Select image"
    >
      <img 
        src={image} 
        alt="" 
        className={`w-full block ${isActive ? 'opacity-30' : ''}`} 
      />
      {isActive && (
        <div className="absolute inset-0 bg-white/50" aria-hidden="true" />
      )}
    </button>
  )
}

export default Thumbnail