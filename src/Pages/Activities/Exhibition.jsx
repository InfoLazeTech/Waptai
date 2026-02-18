import React, { useState } from "react";
import expo2015 from "../../assets/exibiton.jpg";
import expo2016 from "../../assets/exibition2016.jpg";

const expoContent = {
  2015: { type: "image", src: expo2015 },
  2016: { type: "image", src: expo2016 },
  2017: { type: "video", src: "https://www.youtube.com/embed/fEEs-GpluHQ?start=281" },
  2018: { type: "video", src: "https://www.youtube.com/embed/ffaxoLElSmA" },
  2019: { type: "video", src: "https://www.youtube.com/embed/MOCbgw8x2-s" },
  2022: { type: "video", src: "https://www.youtube.com/embed/nHBNYI2rpdE" },
  2023: { type: "video", src: "https://www.youtube.com/embed/Eoyp3nR_HmM" },
  2024: { type: "video", src: "https://www.youtube.com/embed/nOkw_gCj9BQ" },
};

function Exhibition() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="bg-gray-50">
      {/* ===== TOP HEADING ===== */}
      <section
        className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-br from-sky-100 via-white to-sky-50 px-6 md:py-25 py-20 text-center mt-[72px]"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1c87c9] mb-6">
          Exhibition
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed">
Explore our exhibitions highlighting creativity, innovation, and inspiring stories each year.        </p>
      </section>

      {/* ===== YEAR-WISE EXPO ===== */}
      <section className="max-w-6xl mx-auto md:py-10 px-4 space-y-24">
        {Object.entries(expoContent).map(([year, data]) => (
          <div
            key={year}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 hover:scale-[1.03] transition-transform duration-500"
          >
            {/* YEAR TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c87c9] mb-10">
              WAPTAI WATER EXPO – {year}
            </h2>

            {/* MEDIA */}
            <div className="flex justify-center">
              {data.type === "image" ? (
                <img
                  src={data.src}
                  alt={`Expo ${year}`}
                  onClick={() => setSelectedImg(data.src)}
                  className="rounded-2xl shadow-xl  max-h-[500px] object-cover w-full md:w-auto
             cursor-pointer hover:scale-105 transition-transform duration-500"
                />

              ) : (
                <div className="w-full md:w-[800px] aspect-video rounded-2xl shadow-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={data.src}
                    title={`Expo ${year}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      {/* ===== IMAGE MODAL ===== */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>

          <img
            src={selectedImg}
            alt="Exhibition Full View"
            className="max-w-[95%] animate-zoomIn max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

export default Exhibition;
