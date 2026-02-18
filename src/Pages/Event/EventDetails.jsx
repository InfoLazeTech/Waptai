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
<div className="px-4 sm:px-6 md:px-12 pt-25 md:pt-32 pb-8 sm:pb-12 md:pb-16 max-w-full mx-auto">

        {/* ===== HERO GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:h-screen">
          {/* LEFT TEXT */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {event.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Discover <span className="text-sky-600 font-semibold">strategic highlights</span>, impactful moments, and forward-thinking insights from this distinguished event.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-snug">
              Expert-led discussions, specialized training programs, and high-value networking opportunities where ideas translate into action.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800">Key Highlights</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base md:text-base">
                <li>Interactive workshops with industry leaders</li>
                <li>Exclusive networking sessions for professionals</li>
                <li>Hands-on training on emerging technologies</li>
                <li>Insightful panel discussions and Q&A sessions</li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE / VIDEO */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-[500px] rounded-2xl overflow-hidden">
              {event.youtubeId ? (
                <iframe
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-2xl"
                  src={`https://www.youtube.com/embed/${event.youtubeId}`}
                  title="Event Video"
                  allowFullScreen
                />
              ) : (
                <img
                  src={event.hero}
                  alt={event.name}
                  className="w-[500px] h-auto sm:h-80 md:h-96 lg:h-[38rem] object-fill rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setHeroOpen(true)}
                />
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
          title={`reel-${i}`}
        />
      </div>
    </div>
  ))}
</div>

        )}

      </div>
    </div>
  );
};

export default EventDetails;
