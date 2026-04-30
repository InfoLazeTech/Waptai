import React, { useState } from "react";
import ImageSlider from "../../Component/ImageSlider";


// Office images
const officeImages = [

    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464509/office1_jrmss0.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464511/office2_glzvqb.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464513/office3_adbr1j.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464514/office4_dcqbnk.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464516/office5_fuhegw.webp",
 
];

  const labImages = [
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464431/laboratory1_gu9eqq.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464433/laboratory2_pgfobp.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464435/laboratory3_h5dwfe.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464437/laboratory4_yekjkj.webp",
    "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464439/laboratory5_rfj7rn.webp",
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
