import React from "react";
import { motion } from 'framer-motion';

/* ================= SVGs ================= */

const CertificationFlowSVG = () => (
  <svg viewBox="0 0 900 140" className="w-full max-w-4xl mx-auto">
    <defs>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>

    {/* Line */}
    <line
      x1="80"
      y1="70"
      x2="820"
      y2="70"
      stroke="url(#lineGrad)"
      strokeWidth="3"
      strokeDasharray="6 6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="60"
        to="0"
        dur="4s"
        repeatCount="indefinite"
      />
    </line>

    {/* Nodes */}
    {[
      { x: 80, label: "Global\nStandards" },
      { x: 320, label: "Technical\nTraining" },
      { x: 580, label: "Certification\n(CST)" },
      { x: 820, label: "Industry\nRecognition" },
    ].map((item, i) => (
      <g key={i}>
        <circle cx={item.x} cy="70" r="18" fill="#0ea5e9" />
        <circle cx={item.x} cy="70" r="30" fill="#0ea5e9" opacity="0.15" />
        <text
          x={item.x}
          y="115"
          textAnchor="middle"
          fontSize="13"
          fill="#0f172a"
          fontWeight="600"
          style={{ whiteSpace: "pre-line" }}
        >
          {item.label}
        </text>
      </g>
    ))}
  </svg>
);

const BenefitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 text-sky-600">
    <path
      d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
      fill="currentColor"
      opacity="0.15"
    />
    <path
      d="M8.5 12l2.5 2.5L15.5 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ================= COMPONENT ================= */

const IapmoSection = () => {
  const benefits = [
    "Internationally trusted professional certification",
    "Higher technician credibility and customer confidence",
    "Standardized skill development aligned with global codes",
    "Clear differentiation in competitive water industry",
    "Official recognition through IAPMO India listings",
    "Improved workforce performance and accountability",
    "Hands-on training in water treatment & diagnostics",
    "Career mobility and entrepreneurship opportunities",
    "Authorized CST certificate and certification badge",
    "Ongoing learning via structured recertification",
    "Long-term professional and income growth",
  ];

  return (
    <section className="w-full bg-gradient-to-br from-sky-100 via-white to-sky-50  py-32">

      {/* ================= HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 md:py-10 text-center space-y-6">
          <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-50 shadow-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
                        </span>
                        <span className={`text-[12px] font-bold tracking-[0.1em] uppercase text-sky-700`}>
                           Global Certification Authority
                        </span>
                    </motion.div>
       

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
          IAPMO India <span className="text-sky-600">Private Limited</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Advancing public health, water quality, and professional excellence
          through internationally recognized plumbing and mechanical standards.
        </p>
      </div>

      {/* ================= FLOW SVG ================= */}
      <div className="">
        <CertificationFlowSVG />
      </div>

      {/* ================= ABOUT ================= */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-18 space-y-8">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          <strong className="text-slate-900">IAPMO India (IAPMO-I)</strong> is an
          Indian subsidiary of IAPMO USA, committed to safeguarding health and
          safety through globally harmonized codes and certification systems.
        </p>

        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          The organization promotes water efficiency, hygiene, and technical
          competence across plumbing, mechanical, and water treatment sectors.
        </p>
      </div>

      {/* ================= CST ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-28">
        <div className="bg-white border border-slate-200 rounded-3xl p-12 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Certified Service Technician (CST) Programme
          </h2>

          <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center">
            Developed jointly by <strong>WAPTAI & IAPMO India</strong>, the CST
            programme establishes a nationally scalable, technically competent
            workforce for residential water treatment systems.
          </p>
        </div>
      </div>

      {/* ================= BENEFITS ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          Why <span className="text-sky-600">CST Certification</span> Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-5">
                <BenefitIcon />
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IapmoSection;
