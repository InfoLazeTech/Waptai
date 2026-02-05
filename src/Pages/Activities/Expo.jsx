import React, { useState } from "react";
import expoImg from "../../assets/expo2026.jpg";

// Example unique YouTube URLs for each tab
const videoData = [
  {
    title: "WAPTAI 2022 Sponsors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=gm8g6ojiW4k&t=45s",
      "https://www.youtube.com/watch?v=z8VDt7SP8RE",
      "https://www.youtube.com/watch?v=plAi4mBMqbo",
      "https://www.youtube.com/watch?v=8OgE8h3Gvrk",
      "https://www.youtube.com/watch?v=s9tm0gkuipY",
      "https://www.youtube.com/watch?v=Deg3Mjkrsz4",
      "https://www.youtube.com/watch?v=UHhGuOoLkOs",
      "https://www.youtube.com/watch?v=rSbQ84gxels",
    ],
  },
  {
    title: "WAPTAI 2022 Visitors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=zDVB7pmH-Ak",
      "https://www.youtube.com/watch?v=XS49DNq5shw",
      "https://www.youtube.com/watch?v=G6-pLhYmCTY",
      "https://www.youtube.com/watch?v=uZBEFQEXoHU",
      "https://www.youtube.com/watch?v=X5fHMla777I",
      "https://www.youtube.com/watch?v=OgeNHXNbaIo",
      "https://www.youtube.com/watch?v=v3KntEDY1DA",
      "https://www.youtube.com/watch?v=vVkgWRmEFsg",
      "https://www.youtube.com/watch?v=NFCzOp7H1k0",
      "https://www.youtube.com/watch?v=Tq_0yKF04JU",
      "https://www.youtube.com/watch?v=KQ6mkN76QhI",
      "https://www.youtube.com/watch?v=pGCUvANQQK0",
      "https://www.youtube.com/watch?v=MGTFmbD-ONc",
      "https://www.youtube.com/watch?v=4yopKYrFHnw",
      "https://www.youtube.com/watch?v=_zEgANFUICg",
      "https://www.youtube.com/watch?v=d9qq0-USv1c",
      "https://www.youtube.com/watch?v=Mvfc5XAQglk",
      "https://www.youtube.com/watch?v=b60c1jmnyNM",
    ],
  },
  {
    title: "WAPTAI 2023 Sponsors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=gRV2C9Ilvf8",
      "https://www.youtube.com/watch?v=N9-SiRQUX30",
      "https://www.youtube.com/watch?v=orIPvTGGjV8",
      "https://www.youtube.com/watch?v=zOC98iZFADU",
      "https://www.youtube.com/watch?v=Jmfc54aJBM8",
    ],
  },
  {
    title: "WAPTAI 2023 Visitors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=9dL0YH9HOwo",
      "https://www.youtube.com/watch?v=fnMujLYWgFc",
      "https://www.youtube.com/watch?v=xlETJ-zvdFI",
      "https://www.youtube.com/watch?v=yoOO-6XzFAs",
      "https://www.youtube.com/watch?v=p9b8VonyJ_E",
      "https://www.youtube.com/watch?v=HWeedIbnR98",
      "https://www.youtube.com/watch?v=51O1NQ-4chY",
      "https://www.youtube.com/watch?v=W7pVj4Q7hmU",
      "https://www.youtube.com/watch?v=0yHh9_ZDvrU",
      "https://www.youtube.com/watch?v=x-MEvBgPBAQ",
      "https://www.youtube.com/watch?v=f8ZXHaJr6rE",
      "https://www.youtube.com/watch?v=gzSgnU6tOwI",
      "https://www.youtube.com/watch?v=KVVX8CCqpdg",
      "https://www.youtube.com/watch?v=OmFIUXcg4LM",
      "https://www.youtube.com/watch?v=KaGS_H57-jU",
      "https://www.youtube.com/watch?v=-cLFe8LLr4A",
      "https://www.youtube.com/watch?v=sK2q8SUA0tI",
      "https://www.youtube.com/watch?v=WYzNluw-wzc",
    ],
  },
  {
    title: "WAPTAI 2024 Sponsors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=oJ-xwVAdj-k",
      "https://www.youtube.com/watch?v=12xw_4-ysXo",
      "https://www.youtube.com/watch?v=0_4K4rFmEEQ",
      "https://www.youtube.com/watch?v=aUaezfja0_8",
      "https://www.youtube.com/watch?v=uCbvEbn2h8I",
      "https://www.youtube.com/watch?v=-Y05QUSWKNM",
      "https://www.youtube.com/watch?v=pQgZQxoWhMo",
      "https://www.youtube.com/watch?v=S-gdVBpbQRY",
      "https://www.youtube.com/watch?v=zaexFSRRCUo",
      "https://www.youtube.com/watch?v=Ekj6DU2ZwKY",
    ],
  },
  {
    title: "WAPTAI 2024 Visitors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=7q6o3H7aaMU",
      "https://www.youtube.com/watch?v=GfI1toohXSg",
      "https://www.youtube.com/watch?v=2FZQKiUwPsQ",
      "https://www.youtube.com/watch?v=ZA1jop8KOGM",
      "https://www.youtube.com/watch?v=ZA1jop8KOGM",
      "https://www.youtube.com/watch?v=Q7NQQz10FNs",
      "https://www.youtube.com/watch?v=AunEZ3PU2pc",
      "https://www.youtube.com/watch?v=AunEZ3PU2pc",
    ],
  },
];


const Expo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getEmbedUrl = (url) => {
    if (url.includes("watch")) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      const startTime = urlObj.searchParams.get("t");
      return `https://www.youtube.com/embed/${videoId}${
        startTime ? `?start=${startTime.replace("s", "")}` : ""
      }`;
    }
    return url;
  };

  return (
    <section className="w-full bg-[#f8fafc] py-28 px-4">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= HERO / INTRO ================= */}
        <div className="text-center space-y-6 mt-10">
          <span className="inline-block text-sm tracking-widest font-semibold text-sky-600 uppercase">
            Water • Sustainability • Innovation
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
            10th Edition <br className="hidden sm:block" />
            <span className="text-sky-700">WAPTAI Water Expo 2026</span>
          </h1>

          <p className="max-w-4xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            India’s premier water industry exhibition bringing together manufacturers,
            policymakers, innovators, consultants, and global stakeholders to
            drive sustainable water and wastewater solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-base font-medium text-gray-700">
            <div className="px-6 py-3 bg-white rounded-xl shadow">
               26–28 February 2026
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow">
               Mahatma Mandir, Gandhinagar
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow">
              🇮🇳 Gujarat, India
            </div>
          </div>
        </div>
          <div className="relative w-full overflow-hidden mt-20">
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        {/* Wave Path */}
        <path
          d="M0,60 C120,20 240,100 360,80 480,60 600,20 720,40 840,60 960,100 1080,80 1200,60 1320,40 1440,50 L1440,120 L0,120 Z"
          fill="#e0f2fe"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,60 C120,20 240,100 360,80 480,60 600,20 720,40 840,60 960,100 1080,80 1200,60 1320,40 1440,50 L1440,120 L0,120 Z;
              M0,70 C120,40 240,80 360,60 480,40 600,60 720,50 840,40 960,80 1080,60 1200,40 1320,60 1440,70 L1440,120 L0,120 Z;
              M0,60 C120,20 240,100 360,80 480,60 600,20 720,40 840,60 960,100 1080,80 1200,60 1320,40 1440,50 L1440,120 L0,120 Z
            "
          />
        </path>

        {/* Floating Dots */}
        {[200, 500, 900, 1200].map((x, i) => (
          <circle key={i} cx={x} cy="30" r="4" fill="#38bdf8">
            <animate
              attributeName="cy"
              values="20;40;20"
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-center gap-4">
          {videoData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-sky-700 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-sky-500 hover:text-sky-700"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* ================= VIDEO GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videoData[activeTab].videos.map((videoUrl, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title={`WAPTAI Video ${idx + 1}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Expo;