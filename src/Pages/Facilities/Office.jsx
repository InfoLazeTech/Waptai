import React, { useState } from "react";

// Office images
import office1 from "../../assets/office1.jpg";
import office2 from "../../assets/office2.jpg";
import office3 from "../../assets/office3.jpg";
import office4 from "../../assets/office4.jpg";
import office5 from "../../assets/office5.jpg";
import office6 from "../../assets/office6.jpg";
import office7 from "../../assets/office7.jpg";
import office8 from "../../assets/office8.jpg";

// Laboratory images
import laboratory1 from "../../assets/laboratory1.jpg";
import laboratory2 from "../../assets/laboratory2.jpg";
import laboratory3 from "../../assets/laboratory3.jpg";
import laboratory4 from "../../assets/laboratory4.jpg";
import laboratory5 from "../../assets/laboratory5.jpg";

const Office = () => {
      const [selectedImg, setSelectedImg] = useState(null);
  
  const officeImages = [
    office1, office2, office3, office4,
    office5, office6, office7, office8,
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {officeImages.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
               <img
                src={img}
                alt="Office"
                onClick={() => setSelectedImg(img)}
                className="w-full h-[220px] object-cover cursor-pointer
             hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="p-4 bg-white text-center">
                <p className="font-medium text-gray-700">Office {i + 1}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* ===== LABORATORY SECTION ===== */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c87c9] mb-8 text-center">
          Laboratory – Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {labImages.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={img}
                alt="Laboratory"
                onClick={() => setSelectedImg(img)}
                className="w-full h-[220px] object-cover cursor-pointer
             hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="p-4 bg-white text-center">
                <p className="font-medium text-gray-700">Lab {i + 1}</p>
              </div> */}
            </div>
          ))}
        </div>
            {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>

            {/* Full Image */}
            <img
              src={selectedImg}
              alt="Celebration Full View"
              className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Office;
