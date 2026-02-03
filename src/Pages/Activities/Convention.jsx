import React, { useState } from "react";

// Dummy images for each convention tab
import first1 from "../../assets/first1.jpg";
import first2 from "../../assets/first2.jpg";
import first3 from "../../assets/first3.jpg";
import first4 from "../../assets/first4.jpg";
import first5 from "../../assets/first5.jpg";
import second1 from "../../assets/second1.jpg";
import second2 from "../../assets/second2.jpg";
import second3 from "../../assets/second3.jpg";
import second4 from "../../assets/second4.jpg";
import second5 from "../../assets/second5.jpg";
import second6 from "../../assets/second6.jpg";

import third1 from "../../assets/third1.jpg";
import third2 from "../../assets/third2.jpg";
import third3 from "../../assets/third3.jpg";
import third4 from "../../assets/third4.jpg";
import third5 from "../../assets/third5.jpg";

import fourth1 from "../../assets/fourth1.jpg";
import fourth2 from "../../assets/fourth2.jpg";
import fourth3 from "../../assets/fourth3.jpg";
import fourth4 from "../../assets/fourth4.jpg";


const conventionData = [
  {
    title: "WAPTAG 1st Annual Meet",
    images: [first1, first2, first3, first4, first5],
  },
  {
    title: "WAPTAG 2nd Annual Meet",
    images: [second1, second2, second3, second4, second5, second6],
  },
  {
    title: "WAPTAG 3rd Annual Meet",
    images: [third1, third2, third3, third4, third5],
  },
  {
    title: "WAPTAG Convention – 2019",
    images: [fourth1, fourth2, fourth3, fourth4],
  },
];

const Convention = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c87c9] mb-3">
            WAPTAG Convention
          </h2>
          <p className="text-gray-600 text-lg">
            Showcasing our annual meets and events
          </p>
        </div>

        {/* ===== TOP TABS ===== */}
        <div className="flex flex-wrap justify-center gap-4">
          {conventionData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all
                ${
                  activeIndex === index
                    ? "bg-sky-600 text-white shadow-lg"
                    : "bg-slate-100 text-gray-700 hover:bg-sky-100"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* ===== IMAGE GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {conventionData[activeIndex].images.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={conventionData[activeIndex].title}
                className="w-full h-[220px] md:h-[260px] object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Convention;
