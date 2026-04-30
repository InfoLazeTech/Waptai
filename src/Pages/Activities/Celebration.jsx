import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";


const celebrationData = [
  {
    title: "9th Founders Day of WAPTAI",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464704/waptag1_ximoqg.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464706/waptag2_jwhnrc.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464708/waptag3_frkcf8.jpg",
    ],
  },
  {
    title: "Charity Event",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464250/event1_hfrldz.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464252/event2_fnfj9i.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464254/event3_u3hjhe.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464256/event4_isolzc.jpg",
    ],
  },
  {
    title: "Tree Plantation",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464689/tree1_supdz4.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464691/tree2_ubrxsf.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464691/tree2_ubrxsf.jpg",
    ],
  },
];

const Celebration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center">
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

       <div className="flex justify-center mt-8">
  <div className="w-full max-w-max">
    <ImageSlider images={celebrationData[activeIndex].images} />
  </div>
</div>

        


      </div>
    </section>
  );
};

export default Celebration;
