import React, { useState } from "react";

// Office images
const officeImages = [
  "https://head-apricot-pnzjqvsqg4.edgeone.app/office1.jpg",
  "https://gigantic-salmon-cyeueb8xlb.edgeone.app/office2.jpg",
  "https://integral-coral-mdxmgc8tat.edgeone.app/office3.jpg",
  "https://beautiful-turquoise-w2lwgfyxuf.edgeone.app/office4.jpg",
  "https://informal-maroon-rjpi16frge.edgeone.app/office5.jpg",
 
];


// Laboratory images
import laboratory1 from "../../assets/laboratory1.jpg";
import laboratory2 from "../../assets/laboratory2.jpg";
import laboratory3 from "../../assets/laboratory3.jpg";
import laboratory4 from "../../assets/laboratory4.jpg";
import laboratory5 from "../../assets/laboratory5.jpg";
import ImageSlider from "../../Component/ImageSlider";

const Office = () => {



  const labImages = [
    laboratory1, laboratory2, laboratory3, laboratory4, laboratory5,
  ];

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
