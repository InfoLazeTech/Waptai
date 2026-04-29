import React, { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import membershipImg from "../../assets/waptaiMembership.jpg";

const Membership = () => {

  return (
    <>
      <section className="relative py-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100">

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
          <div className="text-center md:mb-24 mb-14">
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
            <div className="space-y-6">

              {/* Diamond */}
              <div className="bg-white/80 p-6 rounded-2xl border border-sky-100 shadow-md">
                <h3 className="text-xl font-bold text-sky-700">
                  Diamond Membership
                </h3>

                <p className="text-lg font-semibold mt-1 text-slate-800">
                  Cost: ₹1,00,000
                  <span className="text-sm text-slate-500 ml-2">(15 Years)</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "All Common Membership benefits included",
                    "5% discount or ₹20,000 (whichever lower) on WAPTAI Expo",
                    "Commercial activity discount",
                    "Opportunity to participate in committees",
                    "VIP entry and seating",
                    "Complimentary/concession passes for expos/seminars/training",
                    "Access to consultation (technical/commercial/tax) from expert panel",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs bg-sky-50 p-3 rounded-lg text-slate-600">
                  ₹1 Lakh family support fund in case of accidental death <br />
                  Two cheques: ₹50,000 (WAPTAI) + ₹50,000 (WAPTAG with 80G benefit)
                </div>
              </div>

              {/* Gold */}
              <div className="bg-white/80 p-6 rounded-2xl border border-yellow-200 shadow-md">
                <h3 className="text-xl font-bold text-yellow-600">
                  Gold Membership
                </h3>

                <p className="text-lg font-semibold mt-1 text-slate-800">
                  Cost: ₹5,000
                  <span className="text-sm text-slate-500 ml-2">(3 Years)</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "Participation in General Meetings",
                    "Committee involvement by invitation only",
                    "Complimentary/concession passes for expos/seminars/training",
                    "Commercial activity discount",
                    "Access to consultation (technical/commercial/tax) from expert panel",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs bg-yellow-50 p-3 rounded-lg text-slate-600">
                  ₹50,000 family support fund in case of accidental death
                </div>
              </div>

              {/* Silver */}
              <div className="bg-white/80 p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold text-slate-700">
                  Silver Membership
                </h3>

                <p className="text-lg font-semibold mt-1 text-slate-800">
                  Cost: ₹1,500
                  <span className="text-sm text-slate-500 ml-2">(3 Years)</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "Express entry in any WAPTAI Expo",
                    "Concession benefits for training programs",
                    "Access to consultation (technical/commercial/tax) from expert panel",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle className="text-emerald-500 mt-1 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs bg-gray-50 p-3 rounded-lg text-slate-600">
                  ₹25,000 family support fund in case of accidental death
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;