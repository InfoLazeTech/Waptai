import React from 'react';
import { FaGlobe, FaMobileAlt, FaUsers, FaBuilding } from 'react-icons/fa';

const Programs = () => {
  const services = [
    {
      title: "WAPTAI EXPO",
      desc: "India's premier annual exhibition providing a global platform for water industry leaders.",
      icon: <FaGlobe className="text-3xl" />,
      color: "bg-blue-500",
    },
    {
      title: "IAPMO",
      desc: "Innovative water solutions and technical certification programs for industry standards.",
      icon: <FaMobileAlt className="text-3xl" />,
      color: "bg-cyan-500",
    },
    {
      title: "ACTIVITIES",
      desc: "Regular seminars, workshops, and networking conferences to empower our members.",
      icon: <FaUsers className="text-3xl" />,
      color: "bg-[#1c87c9]",
    },
    {
      title: "FACILITIES",
      desc: "State-of-the-art infrastructure and support services for all association members.",
      icon: <FaBuilding className="text-3xl" />,
      color: "bg-slate-700",
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#e3f2fd]/50">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1' fill='%231c87c9' fill-opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">
            Our <span className="text-[#1c87c9]">Core Services</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#1c87c9] mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Empowering the water industry through specialized platforms, technical excellence, 
            and collaborative growth opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(28,135,201,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                {service.icon}
              </div>

              {/* Tag Decoration */}
              <span className="text-[10px] font-bold text-[#1c87c9] tracking-widest uppercase mb-2 block">
                Association Program
              </span>

              <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-[#1c87c9] transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                {service.desc}
              </p>

              {/* Hover Arrow Link */}
              {/* <div className="flex items-center gap-2 text-[#1c87c9] font-bold text-xs cursor-pointer overflow-hidden">
                <span className="transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">LEARN MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;