import React from "react";
import iapmoImg from "../../assets/iapmo.jpg";

const IapmoSection = () => {
  const benefits = [
    "Enhances customer trust and professional image",
    "Improves technician credibility and competence",
    "Industry-recognized technical training standards",
    "Market differentiation for companies and professionals",
    "Visibility through IAPMO India certification listings",
    "Boosts employee confidence and performance",
    "Training on water treatment technologies & troubleshooting",
    "Pathway to entrepreneurship opportunities",
    "Authorized use of IAPMO India certificate and badge",
    "Continuous learning through recertification",
    "Improved long-term career growth prospects",
  ];

  return (
    <section className="w-full bg-gray-50">

      {/* ================= HERO IMAGE ================= */}
      <div className="w-full overflow-hidden rounded-b-3xl shadow-lg mt-20">
        <img
          src={iapmoImg}
          alt="IAPMO India"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ================= HERO TEXT ================= */}
      <div className="max-w-5xl mx-auto text-center mt-24 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          IAPMO India <span className="text-sky-500">Private Limited</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          International Association of Plumbing and Mechanical Officials – India
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-32">

        {/* ABOUT */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <strong className="text-gray-900">IAPMO India Private Limited (IAPMO-I)</strong>{" "}
            is devoted to safeguarding the health, safety, and welfare of the
            people of India through internationally recognized standards and practices.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Established as an Indian corporation, IAPMO-I develops and promotes
            uniform codes and best practices in Health, Hygiene, Water Quality, Plumbing, and Mechanical Systems.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The organization advances modern, water-efficient and energy-efficient systems while supporting India’s plumbing,
            mechanical and water purifier industries through research, certification, and education.
          </p>
        </div>

        {/* WAPTAG COLLAB */}
        <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-10 md:p-16 border border-sky-100 shadow-lg hover:shadow-2xl transition duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            WAPTAG –<span className="text-[#1c87c9]">IAPMO India Collaboration</span> 
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto md:mx-0">
            WAPTAG – IAPMO India has launched the <strong>Certified Service Technician (CST)</strong> programme for
            Residential Water Treatment Systems. This programme is designed for
            installers and service technicians operating in the residential water segment.
            <br /><br />
            The CST programme aims to build a skilled workforce readily
            available to manufacturers, distributors, and dealers, ensuring
            industry-ready professionals supported by structured technical
            training and certification.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Benefits of <span className="text-[#1c87c9]">CST</span> Programme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition duration-300">
                  <span className="w-3 h-3 rounded-full bg-sky-600 group-hover:bg-white transition duration-300"></span>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IapmoSection;
