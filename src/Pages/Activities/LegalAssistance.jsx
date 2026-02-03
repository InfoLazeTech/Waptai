import React from "react";
import legal1 from "../../assets/legal1.jpg";
import legal2 from "../../assets/legal2.jpg";
import legal3 from "../../assets/legal3.jpg";

const LegalAssistance = () => {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ===== HEADING ===== */}
        <div className="text-center mt-20">
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
                className="w-full h-[220px] md:h-[260px] object-cover"
              />
            </div>
          ))}
        </div>

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
