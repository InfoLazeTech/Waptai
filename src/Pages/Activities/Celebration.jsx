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
import ImageSlider from "../../Component/ImageSlider";


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
