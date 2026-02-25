import React, { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import membershipImg from "../../assets/waptaiMembership.jpg";

const Membership = () => {
  const [openImage, setOpenImage] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100">

        {/* SVG WAVE BACKGROUND */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0ea5e9"
              fillOpacity="1"
              d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96V320H0Z"
            ></path>
          </svg>
        </div>

        {/* Soft Radial Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1536px] px-6 md:px-12 mx-auto">

          {/* Heading */}
          <div className="text-center mb-16 py-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d5c7f] tracking-tight">
              WAPTAI Membership
            </h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Choose the membership plan that accelerates your industrial growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={membershipImg}
                  alt="Membership Poster"
                  onClick={() => setOpenImage(true)}
                  className="w-full max-w-2xl rounded-3xl shadow-2xl cursor-pointer transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-3xl"></div>
              </div>
            </div>

            {/* MEMBERSHIP CARDS */}
            <div className="space-y-10">

              {/* Diamond */}
              <div className="backdrop-blur-xl bg-white/70 p-10 rounded-3xl border border-sky-100 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-sky-700">
                  Diamond Membership
                </h3>

                <p className="text-2xl font-semibold mt-3 text-slate-800">
                  ₹1,00,000
                  <span className="text-sm text-slate-500 ml-2">(15 Years)</span>
                </p>

                <ul className="mt-6 space-y-4 text-slate-700">
                  {[
                    "All common membership benefits",
                    "5% discount on WAPTAI Expo",
                    "VIP entry & reserved seating",
                    "Expert panel consultation access",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-lg" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gold */}
              <div className="backdrop-blur-xl bg-white/70 p-10 rounded-3xl border border-yellow-200 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-yellow-600">
                  Gold Membership
                </h3>

                <p className="text-2xl font-semibold mt-3 text-slate-800">
                  ₹5,000
                  <span className="text-sm text-slate-500 ml-2">(3 Years)</span>
                </p>

                <ul className="mt-6 space-y-4 text-slate-700">
                  {[
                    "Participation in General Meetings",
                    "Expo passes & commercial discounts",
                    "Consultation from expert panel",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-lg" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Silver */}
              <div className="backdrop-blur-xl bg-white/70 p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-slate-700">
                  Silver Membership
                </h3>

                <p className="text-2xl font-semibold mt-3 text-slate-800">
                  ₹1,500
                  <span className="text-sm text-slate-500 ml-2">(3 Years)</span>
                </p>

                <ul className="mt-6 space-y-4 text-slate-700">
                  {[
                    "Express entry in WAPTAI Expo",
                    "Training program concessions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-lg" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setOpenImage(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-2xl 
            bg-white/10 p-3 rounded-full 
            hover:bg-white/20 hover:scale-110 
            transition duration-300"
            onClick={() => setOpenImage(false)}
          >
            <FaTimes />
          </button>

          <img
            src={membershipImg}
            alt="Full Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default Membership;