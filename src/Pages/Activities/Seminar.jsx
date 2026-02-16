import React, { useState } from "react";

// Dummy images
import seminargst1 from "../../assets/seminargst1.jpg";
import seminargst2 from "../../assets/seminargst2.jpg";
import seminargst3 from "../../assets/seminargst3.jpg";
import seminargst4 from "../../assets/seminargst4.jpg";

import surat1 from "../../assets/surat1.jpg";
import surat2 from "../../assets/surat2.jpg";
import surat3 from "../../assets/surat3.jpg";
import surat4 from "../../assets/surat4.jpg";

import baroda1 from "../../assets/baroda1.jpg";
import baroda2 from "../../assets/baroda2.jpg";
import baroda3 from "../../assets/baroda3.jpg";

import english1 from "../../assets/english1.jpg";
import english2 from "../../assets/english2.jpg";
import english3 from "../../assets/english3.jpg";
import english4 from "../../assets/english4.jpg";


import body1 from "../../assets/body1.jpg";
import body2 from "../../assets/body2.jpg";
import body3 from "../../assets/body3.jpg";
import body4 from "../../assets/body4.jpg";
import ImageSlider from "../../Component/ImageSlider";



const seminarData = [
  {
    title: "Seminar on GST – Ahmedabad Chapter",
    images: [seminargst1, seminargst2, seminargst3, seminargst4],
  },
  {
    title: "Seminar on Body Language – Surat",
    images: [surat1, surat2, surat3, surat4],
  },
  {
    title: "Seminar on Body Language – Baroda",
    images: [baroda1, baroda2, baroda3],
  },
  {
    title: "English Speaking Learning Programme",
    images: [english1, english2, english3, english4],
  },
  {
    title: "Body Language Seminar – Rajkot",
    images: [body1, body2, body3, body4,]
  },
];

const SeminarSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADING ===== */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c87c9] mb-3">
            Seminars & Training Programmes
          </h2>
          <p className="text-gray-600 text-lg">
            Professional learning initiatives conducted across cities
          </p>
        </div>

        {/* ===== TOP ONE-LINE OPTIONS ===== */}
        <div className="flex flex-wrap justify-center gap-4">
          {seminarData.map((seminar, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all
                ${activeIndex === index
                  ? "bg-sky-600 text-white shadow-lg"
                  : "bg-slate-100 text-gray-700 hover:bg-sky-100"
                }`}
            >
              {seminar.title}
            </button>
          ))}
        </div>

        {/* ===== IMAGES GRID ===== */}
        <ImageSlider images={seminarData[activeIndex].images} />




      </div>
    </section>
  );
};

export default SeminarSection;
