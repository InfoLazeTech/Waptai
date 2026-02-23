import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import membershipImg from "../../assets/waptaiMembership.jpg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Membership = () => {
      const [openImage, setOpenImage] = useState(false);

  return (
    <>
    <section className="py-15 bg-[#e3f2fd]/50 md:py-28">
      <div className="max-w-[1536px] px-6 md:px-12 mx-auto">

        {/* Heading */}
        <div className="md:mb-22 mb-10 text-center lg:text-left my-15">
          <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[#0d5c7f]">
            WAPTAI Membership
          </h2>
          <p className="text-gray-600 text-center mt-4 text-lg">
            Choose the membership plan that fits your growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE BIG IMAGE */}
          <div className="flex justify-center lg:justify-start">
              <img
                src={membershipImg}
                alt="Membership Poster"
                onClick={() => setOpenImage(true)}
                className="w-full max-w-2xl rounded-3xl shadow-xl cursor-pointer  transition duration-500"
              />
            </div>

          {/* RIGHT SIDE MEMBERSHIP CARDS */}
          <div className="space-y-10">

            {/* Diamond */}
            <div className="relative bg-white p-8 rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2">

              {/* <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">
                Most Popular
              </span> */}

              <h3 className="text-2xl font-bold text-blue-700">
                Diamond Membership
              </h3>

              <p className="text-xl font-semibold mt-3 text-gray-800">
                ₹1,00,000 <span className="text-sm text-gray-500">(15 Years)</span>
              </p>

              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "All common membership benefits",
                  "5% discount on WAPTAI Expo",
                  "VIP entry & reserved seating",
                  "Expert panel consultation access"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 text-lg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gold */}
            <div className="bg-white p-8 rounded-3xl border border-yellow-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">

              <h3 className="text-2xl font-bold text-yellow-600">
                Gold Membership
              </h3>

              <p className="text-xl font-semibold mt-3 text-gray-800">
                ₹5,000 <span className="text-sm text-gray-500">(3 Years)</span>
              </p>

              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Participation in General Meetings",
                  "Expo passes & commercial discounts",
                  "Consultation from expert panel"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 text-lg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Silver */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">

              <h3 className="text-2xl font-bold text-gray-700">
                Silver Membership
              </h3>

              <p className="text-xl font-semibold mt-3 text-gray-800">
                ₹1,500 <span className="text-sm text-gray-500">(3 Years)</span>
              </p>

              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Express entry in WAPTAI Expo",
                  "Training program concessions"
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
      {openImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenImage(false)}
        >
            <button   className="absolute top-6 right-6 text-white text-2xl 
             bg-black/40 p-3 rounded-full 
             hover:bg-black/70 hover:scale-110 
             transition duration-300" onClick={() => setOpenImage(false)}><FaTimes /></button>
          <img
            src={membershipImg}
            alt="Full Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-sm"
          />
        </div>
      )}
    </>
  );
};

export default Membership;
