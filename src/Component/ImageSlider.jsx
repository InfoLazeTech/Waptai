import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const touchStartX = useRef(null);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 📱 Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  // ⌨ Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal Slider */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">

          {/* Close */}
          <button
          
             className="absolute top-6 right-6 text-white text-2xl 
             bg-black/40 p-3 rounded-full 
             hover:bg-black/70 hover:scale-110 
             transition duration-300"
               onClick={() => setOpen(false)}
          >
             <FaTimes />
          </button>

          {/* Left Arrow (Desktop Only) */}
          <button
            onClick={prevImage}
            className="hidden md:block absolute left-20 text-white text-7xl hover:scale-110 transition"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt=""
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl transition duration-300"
          />

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={nextImage}
            className="hidden md:block absolute right-20 text-white text-7xl hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
