import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";

const conventionData = [
  {
    title: "WAPTAI 1st Annual Meet",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464268/first1_tafghn.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464271/first2_vdwija.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464272/first3_uifb8f.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464275/first4_wpcoyj.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464276/first5_boltnj.jpg",
    ],
  },
  {
    title: "WAPTAI 2nd Annual Meet",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464623/second1_haim7u.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464624/second2_jutpyn.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464626/second3_xpj0b4.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464628/second4_zlkcdt.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464628/second4_zlkcdt.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464632/second6_mxdoxk.jpg",
    ],
  },
  {
    title: "WAPTAI 3rd Annual Meet",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464679/third1_y8i4wu.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464681/third2_cazl5y.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464683/third3_tohwid.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464685/third4_k163gk.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464687/third5_yq7zvn.jpg",
    ],
  },
  {
    title: "WAPTAI Convention – 2019",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464278/fourth1_lolnqm.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464280/fourth2_kboasr.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464282/fourth3_s7j4jq.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464284/fourth4_fbobor.jpg",
    ],
  },
];

const Convention = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c87c9] mb-3">
            WAPTAI Convention
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
       <ImageSlider images={conventionData[activeIndex].images} />

        


      </div>
    </section>
  );
};

export default Convention;
