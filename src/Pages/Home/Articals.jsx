import React, { useState } from "react";
import { motion } from 'framer-motion';

// Images (apne actual image paths use karna)
import news1 from "../../assets/ptinews.jpg";
import news2 from "../../assets/pti.png";
import news3 from "../../assets/Water.jpg";
import news4 from "../../assets/newdrum.jpg";

const newsData = [
     {
        image: news1,
        title:
            "Water purification systems be classified as essential public health goods: Stakeholders association",
        description: `
Ahmedabad/New Delhi, Jan 22 (PTI) The Water Purification and Treatment Association of India (WAPTAI) has urged the government to consider rationalisation of Goods and Services Tax (GST) on water purification systems and their essential components.
    The association, representing manufacturers, distributors, technicians, and service providers from both organised and unorganised segments of the industry, sought that water purification systems used in domestic, commercial, and industrial applications and their spare parts be classified as essential public health goods.
    It also demanded that the existing 18 per cent GST on such items be rationalised to 5 per cent or provided with an appropriate exemption, in order to improve affordability and wider adoption.
`,
        link:
            "https://www.theweek.in/wire-updates/national/2026/01/23/water-purification-systems-be-classified-as-essential-public-health-goods-stakeholders-association.html",
    },

 
       {
        image: news2,
        title:
            "Water purification systems be classified as essential public health goods: Stakeholders' association",
        description: `
AHMEDABAD/NEW DELHI: (Jan 22) The Water Purification and Treatment Association of India (WAPTAI) has urged the government to consider rationalisation of Goods and Services Tax (GST) on water purification systems and their essential components.

The association, representing manufacturers, distributors, technicians, and service providers from both organised and unorganised segments of the industry, sought that water purification systems used in domestic, commercial, and industrial applications and their spare parts be classified as essential public health goods.
`,
link:"https://www.ptinews.com/story/national/water-purification-systems-be-classified-as-essential-public-health-goods-stakeholders-association/3302724"
    },

    {
        image: news3,
        title:
            "Water purification systems must be treated as essential public health goods: WAPTAIs",
        description: `
The Water Purification and Treatment Association of India (WAPTAI) has urged the Government of India to reclassify water purification systems and their essential components as essential public health goods under the GST regime, to make them more affordable and widely accessible.

Representing manufacturers, distributors, technicians, and service providers across both organised and unorganised sectors, WAPTAI highlighted that water purification systems used in households, commercial establishments, and industries are currently taxed at 18% GST, significantly raising costs and slowing adoption. The association has proposed reducing this to 5% or exempting such systems altogether to enhance affordability and support public health objectives.
`,
        link:"https://health.economictimes.indiatimes.com/news/industry/water-purification-systems-be-classified-as-essential-public-health-goods-stakeholders-association/127220059"
    },


    {
        image: news4,
        title:
            "Water purification systems must be treated as essential public health goods: WAPTAI",
        description: `
The Water Purification and Treatment Association of India (WAPTAI) has urged the Government to rationalise GST on water purification systems and their essential components, classifying them as essential public health goods. The move aims to improve affordability and promote wider adoption across households, commercial establishments, and industries. WAPTAI emphasises that accessible and safe drinking water is critical for public health, national productivity, and environmental sustainability, and reducing taxes on certified purification technologies would support these goals.`,
    link:"https://share.google/fC0StV6VH9ssbdXH7"
    },
];
const Articals = () => {
    // First one as featured
    const [featured, ...others] = newsData;

    return (
        <section className="w-full bg-[#e3f2fd]/50 py-10">
            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* ===== HEADER ===== */}
                <div className="text-center">
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-50 shadow-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
                        </span>
                        <span className={`text-[12px] font-bold tracking-[0.1em] uppercase text-sky-600`}>
                           WAPTAI Media Highlights
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900">
                     <span className="text-[#1c87c9]">WAPTAI</span> in National Media
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                       Highlights from national publications covering public health and water policy initiatives by WAPTAI.
                    </p>
                </div>

                {/* ===== FEATURED ARTICLE ===== */}
             <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
  <img
    src={featured.image}
    alt={featured.title}
    className="w-full h-[240px] sm:h-[320px] md:h-[360px] object-cover group-hover:scale-105 transition duration-700"
  />

  {/* gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

  {/* content */}
  <div className="absolute bottom-0 top-3 p-4 sm:p-6 md:p-10">
    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
      {featured.title}
    </h3>

    <p className="text-white/90 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg line-clamp-3">
      {featured.description}
    </p>

    <a
      href={featured.link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base text-white font-semibold underline"
    >
      Read full article →
    </a>
  </div>
</div>


                {/* ===== GRID ARTICLES ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {others.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                        >
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <h4 className="text-xl font-bold text-slate-900 leading-snug line-clamp-2">
                                    {item.title}
                                </h4>
                                <p className="text-slate-700 leading-relaxed line-clamp-4">
                                    {item.description}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-[#1c87c9] font-semibold"
                                >
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Articals;