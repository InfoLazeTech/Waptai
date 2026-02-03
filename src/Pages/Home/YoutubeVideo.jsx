import React from "react";
import { FaCheck, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const YouTubeSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left w-full max-w-none lg:max-w-xl space-y-5 sm:space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-sky-500 text-xs sm:text-sm font-semibold tracking-wide mx-auto lg:mx-0">
              <FaPlayCircle className="text-sky-500" />
              Live Event Experience
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Experience Events{" "}
              <span className="text-[#1c87c9]">Without Limits</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our exhibitions connect brands, innovators, and decision-makers
              through carefully curated experiences that drive engagement,
              visibility, and long-term growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              {[
                { title: "Trusted Exhibitors", desc: "Partnered with top, industry-leading brands nationwide." },
                { title: "Premium Execution", desc: "Seamless planning with flawless on-ground delivery." },
                { title: "High Engagement", desc: "Measurable visibility and active audience participation." },
                { title: "Proven Results", desc: "Delivering real business impact and long-term growth." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1c87c9]/10 text-[#1c87c9] shrink-0">
                    <FaCheck className="text-base sm:text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start pt-6">
              <button
                onClick={() => navigate("/contact-us")}
                className="bg-sky-500 text-white px-7 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-sky-600 transition"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-2xl aspect-video transition-transform duration-300 lg:hover:scale-105">
            <iframe
              src="https://www.youtube.com/embed/ukBT4wr9CiI"
              title="YouTube video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
