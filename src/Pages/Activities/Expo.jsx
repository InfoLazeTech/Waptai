import React, { useState } from "react";
import expoImg from "../../assets/expo2026.jpg";

// Example unique YouTube URLs for each tab
const videoData = [
  {
    title: "WAPTAG 2022 Sponsors Testimonial",
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
    title: "WAPTAG 2022 Visitors Testimonial",
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
    title: "WAPTAG 2023 Sponsors Testimonial",
    videos: [
      "https://www.youtube.com/watch?v=gRV2C9Ilvf8",
      "https://www.youtube.com/watch?v=N9-SiRQUX30",
      "https://www.youtube.com/watch?v=orIPvTGGjV8",
      "https://www.youtube.com/watch?v=zOC98iZFADU",
      "https://www.youtube.com/watch?v=Jmfc54aJBM8",
    ],
  },
  {
    title: "WAPTAG 2023 Visitors Testimonial",
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
    title: "WAPTAG 2024 Sponsors Testimonial",
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
    title: "WAPTAG 2024 Visitors Testimonial",
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
      let embedUrl = `https://www.youtube.com/embed/${videoId}`;
      if (startTime) embedUrl += `?start=${startTime.replace("s", "")}`;
      return embedUrl;
    }
    return url;
  };

  return (
    <section className="w-full bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADING + IMAGE + DESCRIPTION ===== */}
        <div className="text-center space-y-8 mt-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sky-700 leading-tight">
            10th Edition of WAPTAG Water Expo 2026
          </h2>

          <div className="flex justify-center mt-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-6xl w-full transform transition-transform duration-500 hover:scale-105">
              <img
                src={expoImg}
                alt="WAPTAG Water Expo 2026"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed mt-6">
            The 10th Edition of WAPTAG Water Expo brings together professionals, experts, policymakers,
            and enthusiasts from the water industry to foster collaboration, innovation, and sustainable solutions.
            <br /><br />
            With a focus on sustainability and innovation, this prestigious event promises to be
            a transformative experience for all attendees.
            <br /><br />
            <strong>Event Dates:</strong> 26-27-28th February 2026
            <br />
            <strong>Location:</strong> Mahatma Mandir, Gandhinagar, Gujarat, India
          </p>
        </div>

        {/* ===== TABS ===== */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {videoData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-sky-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-sky-50"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* ===== VIDEO GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {videoData[activeTab].videos.map((videoUrl, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title={`Video ${idx + 1}`}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expo;
