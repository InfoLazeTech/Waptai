import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tabs } from "../Event/eventsData.js";
import ImageSlider from "../../Component/ImageSlider";
import { FaTimes } from "react-icons/fa";

const EventDetails = () => {
  const [heroOpen, setHeroOpen] = useState(false);
  const { id } = useParams();
  const event = tabs[Number(id) - 1];

  if (!event) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
<div className="px-4 sm:px-6 md:px-12 py-10 pt-20 md:py-15 max-w-full h-auto mx-auto">
        {/* ===== HERO GRID ===== */}
   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:min-h-screen px-6 md:px-16 lg:px-24 py-12 bg-gray-50">
  {/* LEFT TEXT */}
  <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
    {/* Event Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight md:leading-snug drop-shadow-sm">
      {event.name}
    </h1>

    {/* Event Description */}
    <div className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed space-y-4 md:space-y-6">
      {event.content.split("\n\n").map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}

      {/* Key Points */}
      <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-3">
        <li>Work closely with industry partners and government bodies</li>
        <li>Ensure safe drinking water access across India</li>
        <li>Promote responsible water management</li>
        <li>Support growth of certified water purification technologies</li>
      </ul>
    </div>
  </div>

  {/* RIGHT IMAGE / VIDEO */}
  <div className="md:col-span-5 flex justify-center mt-8 md:mt-0 relative">
    <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
      {event.youtubeId ? (
        <iframe
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[36rem] rounded-3xl"
          src={`https://www.youtube.com/embed/${event.youtubeId}`}
          title="Event Video"
          allowFullScreen
        />
      ) : (
        <img
          src={event.hero}
          alt={event.name}
          className="w-full h-auto sm:h-80  lg:h-[33rem] rounded-3xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => setHeroOpen(true)}
        />
      )}

      {/* Optional overlay play button */}
      {event.youtubeId && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center hover:bg-white/90 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 2v20l20-10L4 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

        {/* ===== HERO IMAGE MODAL ===== */}
        {heroOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={(e) => e.target === e.currentTarget && setHeroOpen(false)}
          >
            <img
              src={event.hero}
              alt={event.name}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 hover:scale-110 transition"
              onClick={() => setHeroOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* ===== IMAGE GALLERY ===== */}
        {event.images?.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M3 7h18M3 17h18M5 7v10M19 7v10" />
              </svg>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
                {event.name === "WAPTAI GST PODCAST 31st Jan 2026" ? "Podcast Images" : "Event Moments"}
              </h3>
            </div>
            <ImageSlider images={event.images} cardStyle="shadow-lg rounded-xl" />
          </section>
        )}

        {/* ===== EVENT VIDEOS ===== */}
    {event.videos?.length > 0 && (
  <section className="mt-16">
    
    {/* ===== Heading ===== */}
    <div className="flex items-center gap-3 mb-5">
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>

      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Event Videos
      </h3>
    </div>

    {/* ===== Video Grid ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {event.videos.map((video, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md border border-gray-200 
                     hover:shadow-2xl hover:-translate-y-1 
                     transition-all duration-300 overflow-hidden"
        >
          {/* Medium 16:9 Ratio Container */}
          <div className="relative w-full aspect-video bg-black">
            <video
              src={video}
              controls
              className="absolute inset-0 w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
)}


        {/* ===== REELS ===== */}
     {event.reels?.length > 0 && (
  <section className="mt-16">
    {/* ===== Heading ===== */}
    <div className="flex items-center gap-3 mb-5">
      <svg
        className="w-6 h-6 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>

      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Podcast Reels
      </h3>
    </div>

    {/* ===== Reels Grid (same as before) ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {event.reels.map((reel, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        >
          {/* 9:16 Aspect Ratio Container */}
          <div className="relative w-full aspect-[9/16]">
            <iframe
              src={reel}
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              title={`podcast-reel-${i}`}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
)}


      </div>
    </div>
  );
};

export default EventDetails;
