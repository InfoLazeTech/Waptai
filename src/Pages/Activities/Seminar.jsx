import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";



const seminarData = [
  {
    title: "Seminar on GST – Ahmedabad Chapter",
    images: [
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289679/seminargst1_rdg5jm.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289680/seminargst2_skre0a.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289680/seminargst3_eybpz7.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289680/seminargst4_kdko8i.jpg",
    ],
  },
  {
    title: "Seminar on Body Language – Surat",
    images: [
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289682/surat1_a0ymvq.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289683/surat2_r5byjn.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289683/surat3_oy2hn0.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289682/surat4_kkqzg3.jpg",
    ],
  },
  {
    title: "Seminar on Body Language – Baroda",
    images: [
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289198/baroda1_azjtm6.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289198/baroda2_lvw2qb.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289198/baroda3_asrrri.jpg"
    ],
  },
  {
    title: "English Speaking Learning Programme",
    images: [
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289226/english1_ixc0ls.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289228/english2_mc4i6u.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289226/english3_kjgoif.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289227/english4_e0ba8v.jpg",
    ],
  },
  {
    title: "Body Language Seminar – Rajkot",
    images: [
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289214/body1_lriz5m.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289216/body2_ymgkmw.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289216/body3_ld0zvi.jpg",
      "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289218/body4_wzlzea.jpg"
    ]
  },
];

const SeminarSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADING ===== */}
        <div className="text-center">
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
