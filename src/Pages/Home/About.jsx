import React from "react";
import { FaAward, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Decorative Floating Shapes */}
      <div className="absolute -top-20 left-[-10%] w-[400px] h-[400px] bg-[#0288d1]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#03a9f4]/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Heading & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-1 w-16 bg-[#0288d1] rounded-full"></span>
              <span className="text-[#0288d1] font-bold uppercase tracking-widest text-xs">
                Our Identity
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d47a1] leading-tight">
              About <span className="text-[#0288d1]">WAPTAI Association</span>
            </h2>
            <p className="text-gray-700 font-medium leading-relaxed text-lg">
              WAPTAI is India’s most trusted platform in Water Purification & Treatment, connecting professionals, innovators, and businesses to shape the future of water solutions.
            </p>
            <button className="mt-4 px-10 py-4 bg-[#0288d1] text-white font-bold rounded-2xl shadow-lg hover:bg-[#0277bd] hover:-translate-y-1 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* RIGHT SIDE: Info Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 relative z-10">
            {[
              {
                icon: <FaAward className="w-6 h-6 text-white" />,
                title: "Trusted Excellence",
                desc: "Over a decade of leadership in water industry with 500+ professionals.",
                color: "bg-[#0288d1]"
              },
              {
                icon: <FaLightbulb className="w-6 h-6 text-white" />,
                title: "Innovation & Technology",
                desc: "Showcasing cutting-edge solutions in water purification and treatment.",
                color: "bg-[#03a9f4]"
              },
              {
                icon: <FaHandshake className="w-6 h-6 text-white" />,
                title: "Networking & Partnerships",
                desc: "Connecting experts, businesses, and innovators for collaboration.",
                color: "bg-[#0288d1]"
              },
              {
                icon: <FaUsers className="w-6 h-6 text-white" />,
                title: "Community Impact",
                desc: "Empowering communities through sustainable water solutions.",
                color: "bg-[#03a9f4]"
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white backdrop-blur-md`}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${card.color} mb-4 shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0d47a1] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}

            {/* Decorative Floating Shape */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0288d1]/20 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
