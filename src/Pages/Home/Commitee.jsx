import React, { useState } from "react";

const TABS = [
  "Steering Committee",
  "Governing Body",
  "Ahmedabad & North Gujarat Chapter",
  "South Gujarat Chapter",
  "Saurashtra & Kutch Chapter",
  "Central Gujarat Chapter",
  "Expo Committee",
];

const DATA = {
  "Steering Committee": [
    {
      id: 1,
      name: "Sampat Jhabak",
      company: "Max Pure Water System Pvt. Ltd.",
      image: "/images/committee/1.jpg",
    },
    {
      id: 2,
      name: "Ashok Patel",
      company: "Shreya Water Tech LLP",
      image: "/images/committee/2.jpg",
    },
    {
      id: 3,
      name: "Nishith Doshi",
      company: "Fivebro Water Services Pvt. Ltd.",
      image: "/images/committee/3.jpg",
    },
    {
      id: 4,
      name: "Kalpesh Shah",
      company: "Parshwam Filtration LLP",
      image: "/images/committee/4.jpg",
    },
    {
      id: 5,
      name: "Vinod Dudhat",
      company: "Lexus Water Tech Pvt. Ltd.",
      image: "/images/committee/5.jpg",
    },
    {
      id: 6,
      name: "Kanu Mehta",
      company: "Cosmos Water Solution Pvt. Ltd.",
      image: "/images/committee/6.jpg",
    },
    {
      id: 7,
      name: "Ritesh Desai",
      company: "Krinovate Systems & Communications",
      image: "/images/committee/7.jpg",
    },
  ],
};

const Committee = () => {
  const [active, setActive] = useState("Steering Committee");

  return (
    <main className="bg-[#f6f8fb] min-h-screen pt-16">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#083b55] to-[#0d5c7f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold tracking-wide">
            Committee Members
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/80 leading-relaxed">
            Our committee represents industry veterans and visionary leaders
            committed to advancing water purification, wastewater management,
            and sustainable technologies across India.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f6f8fb] rounded-t-[40px]" />
      </section>

      {/* TABS */}
      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="bg-white/70 backdrop-blur-lg border rounded-2xl shadow-lg p-4 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 text-xs font-semibold uppercase rounded-xl transition-all duration-200
                ${
                  active === tab
                    ? "bg-[#0d5c7f] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {(DATA[active] || []).map((m) => (
            <div
              key={m.id}
              className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition"
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x500?text=Member")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-snug">
                  {m.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {(DATA[active] || []).length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            Committee members will be announced soon.
          </p>
        )}
      </section>
    </main>
  );
};

export default Committee;
