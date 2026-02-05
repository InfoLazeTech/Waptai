import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#e3f2fd]/50">

      {/* BACKGROUND GRAPHIC ELEMENTS */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0288d1]/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#03a9f4]/15 rounded-full blur-[100px] -z-10"></div>
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230288d1' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#b3e5fc] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
              </span>
              <span className="text-[#0288d1] text-[12px] font-bold tracking-widest uppercase">
                Celebrating 10 Years of Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#0d47a1] leading-[1.15]">
              A Decade of <span className="text-[#0288d1]">Water Wisdom</span> <br />
              & Global Wellbeing.
            </h1>

            <p className="text-base text-[#37474f] max-w-xl leading-relaxed font-medium">
              WAPTAI is the most trusted association in the Water Purification and Treatment industry.
              We bridge professionals, experts, and innovators to shape the future of water management.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {/* <button className="bg-[#0288d1] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/30 hover:-translate-y-1 transition-all duration-300">
                BOOK YOUR STALL
              </button>
                 <button className="bg-white/70 backdrop-blur-md border-2 border-[#b3e5fc] text-[#37474f] px-8 py-3.5 rounded-xl font-bold text-sm hover:border-[#0288d1] hover:text-[#0288d1] transition-all duration-300">
                BOOK YOUR STALL
              </button> */}
              <button onClick={() => navigate("/expo-2026")} className="bg-[#0288d1] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/30 hover:-translate-y-1 transition-all duration-300">
                EXPLORE EXPO 2026
              </button>
            </div>

            {/* Subtle Trust Bar */}
            <div className="pt-8 flex items-center gap-8 border-t border-[#b0bec5]/40">
              <div className="group cursor-default">
                <p className="text-2xl font-black text-[#0d47a1] leading-none group-hover:text-[#0288d1] transition-colors">10th</p>
                <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Edition</p>
              </div>
              <div className="w-px h-8 bg-[#b0bec5]/50"></div>
              <div className="group cursor-default">
                <p className="text-2xl font-black text-[#0d47a1] leading-none group-hover:text-[#0288d1] transition-colors">500+</p>
                <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Exhibitors</p>
              </div>
              <div className="w-px h-8 bg-[#b0bec5]/50"></div>
              <div className="group cursor-default">
                <p className="text-2xl font-black text-[#0288d1] leading-none">2026</p>
                <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Next Event</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - EXPO CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(2,136,209,0.12)] border border-white">
              <div className="bg-white/50 rounded-[2.2rem] overflow-hidden">
                <div className="bg-[#0288d1] p-8 text-center text-white shadow-inner">
                  <h2 className="text-4xl font-black tracking-tighter italic">WAPTAI</h2>
                  <p className="text-sm font-bold opacity-80 tracking-[0.3em] uppercase mt-1">Water Expo 2026</p>
                </div>

                <div className="p-8 space-y-6 bg-white/40">
                  <div className="flex justify-between border-b border-[#b0bec5]/50 pb-6">
                    <div className="text-center">
                      <span className="block text-3xl font-black text-[#0d47a1]">26-28</span>
                      <span className="text-[11px] font-bold text-[#607d8b] uppercase tracking-widest">Feb 2026</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-bold text-[#37474f] uppercase tracking-tight">Mahatma Mandir</span>
                      <span className="text-xs text-[#0288d1] font-bold">Gandhinagar, Gujarat</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#e1f5fe] flex items-center justify-center text-[#0288d1] group-hover:bg-[#0288d1] group-hover:text-white transition-all">
                        {/* Icon SVG */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-[#37474f]">Largest B2B Water Trade Show</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#e1f5fe] flex items-center justify-center text-[#0288d1] group-hover:bg-[#0288d1] group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-[#37474f]">Business Opportunities</span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/contact-us")}
                    className="w-full bg-[#0d47a1] text-white py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-[#0288d1] shadow-lg transition-all duration-300">
                    Register As Visitor
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0288d1]/20 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
