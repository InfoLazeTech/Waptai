import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";



const seminarData = [
  {
    title: "Seminar on GST – Ahmedabad Chapter",
    images: [
        "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464633/seminargst1_vlbeun.jpg",
        "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464635/seminargst2_hhdjfn.jpg",
        "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464637/seminargst3_gsxmrh.jpg",
        "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464639/seminargst4_juampx.jpg",
    ],
  },
  {
    title: "Seminar on Body Language – Surat",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464647/surat1_bkvsal.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464649/surat2_scep0z.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464651/surat3_tgdir5.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464652/surat4_bwc5y1.jpg",    
    ],
  },
  {
    title: "Seminar on Body Language – Baroda",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464196/baroda1_opxnmi.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464197/baroda2_pmdmat.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464199/baroda3_g9sznk.jpg",
    ],
  },
  {
    title: "English Speaking Learning Programme",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464242/english1_edwssj.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464245/english2_jq5xgl.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464247/english3_kygkqa.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464248/english4_sd9zzw.jpg",
    ],
  },
  {
    title: "Body Language Seminar – Rajkot",
    images: [
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464224/body1_knvgz3.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464225/body2_tlhhu4.jpg",
      "http://res.cloudinary.com/danaw1eyu/image/upload/v1777464227/body3_gp2eym.jpg",
      "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464229/body4_nx5k36.jpg",
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
