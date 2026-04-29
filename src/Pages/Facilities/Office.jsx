import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";


// Office images
const officeImages = [
  "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289288/office1_sylvdq.webp",
  "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289290/office2_xghyk4.webp",
  "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289289/office3_eleep1.webp",
  "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289291/office4_lc0z1p.webp",
  "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289289/office5_pe9kr3.webp",
 
];

  const labImages = [
   "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289255/laboratory4_gru4hp.webp",
   "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289254/laboratory5_kfenzw.webp",
   "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289253/laboratory1_z1rttn.webp",
   "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289253/laboratory3_lbsatg.webp",
   "https://res.cloudinary.com/dlnxyge0g/image/upload/v1777289252/laboratory2_vfvixx.webp",
  ];

const Office = () => {


  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* ===== OFFICE SECTION ===== */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c87c9] mb-8 text-center">
          Office – Conference / Training / Meeting
        </h2>

        <div className="mb-16">
          <ImageSlider images={officeImages} />
        </div>
        {/* ===== LABORATORY SECTION ===== */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c87c9] mb-8 text-center">
          Laboratory – Facilities
        </h2>

        <div className="mb-16">
          <ImageSlider images={labImages} />
        </div>


      </div>
    </div>
  );
};

export default Office;
