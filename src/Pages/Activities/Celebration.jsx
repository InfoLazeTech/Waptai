import React, { useState } from "react";

// Dummy images
import waptag1 from "../../assets/waptag1.jpg";
import waptag2 from "../../assets/waptag2.jpg";
import waptag3 from "../../assets/waptag3.jpg";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpg";
import tree1 from "../../assets/tree1.jpg";
import tree2 from "../../assets/tree2.jpg";
import tree3 from "../../assets/tree3.jpg";


const celebrationData = [
  {
    title: "9th Founders Day of WAPTAI",
    images: [waptag1, waptag2, waptag3],
  },
  {
    title: "Charity Event",
    images: [event1, event2, event3, event4],
  },
  {
    title: "Tree Plantation",
    images: [tree1, tree2, tree3],
  },
];

const Celebration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c87c9] mb-3">
            Celebration
          </h2>
          <p className="text-gray-600 text-lg">
            Moments from our celebrations and events
          </p>
        </div>

        {/* ===== TABS ===== */}
        <div className="flex flex-wrap justify-center gap-4">
          {celebrationData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all
                ${
                  activeIndex === index
                    ? "bg-sky-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-slate-200 hover:bg-sky-100"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* ===== IMAGE GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {celebrationData[activeIndex].images.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt="Celebration"
                onClick={() => setSelectedImg(img)}
                className="w-full h-[220px] object-cover cursor-pointer
             hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
          {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>

            {/* Full Image */}
            <img
              src={selectedImg}
              alt="Celebration Full View"
              className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}


      </div>
    </section>
  );
};

export default Celebration;
