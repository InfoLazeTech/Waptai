import React, { useState } from "react";
import legal1 from "../../assets/legal1.jpg";
import legal2 from "../../assets/legal2.jpg";
import legal3 from "../../assets/legal3.jpg";

const LegalAssistance = () => {
   const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50 py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center md:mt-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c87c9] mb-4">
            Legal Assistance
          </h2>
          <p className="text-gray-600 text-lg">
            Providing expert legal guidance and compliance support
          </p>
        </div>

        {/* ===== IMAGE GALLERY ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[legal1, legal2, legal3].map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={`Legal Assistance ${index + 1}`}
                className="w-full h-[220px] md:h-[260px] object-cover cursor-pointer 
                           hover:scale-105 transition-transform duration-500"
                onClick={() => setSelectedImg(img)}
              />
            </div>
          ))}
        </div>

        {/* ===== FULL IMAGE MODAL ===== */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl font-light"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImg}
              alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      

        {/* ===== CONTENT ===== */}
        <div className="max-w-4xl mx-auto text-center mt-8 space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            GST Assistance by Advocate Samir Siddhpura – 2020
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            GST Seminar held in September 2020 to expand understanding of Goods
            and Services Tax (GST) regulations, implications, and strategies.
            Stay compliant and optimize financial planning in the ever-changing
            tax landscape, and explore the vital water purification industry's
            effects and benefits.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LegalAssistance;
