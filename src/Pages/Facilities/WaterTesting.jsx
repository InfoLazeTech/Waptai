import React from "react";
import {
  Microscope,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Beaker,
} from "lucide-react";

const WaterTesting = () => {
  const testingHighlights = [
    {
      title: "BIS Standards",
      icon: <Award className="w-5 h-5" />,
      text: "Strict adherence to Bureau of Indian Standards ensures accurate and reliable water testing.",
      color: "bg-blue-500",
    },
    {
      title: "Expert Analysis",
      icon: <Microscope className="w-5 h-5" />,
      text: "Experienced professionals carefully analyze every water sample.",
      color: "bg-indigo-500",
    },
    {
      title: "Fast Reporting",
      icon: <Zap className="w-5 h-5" />,
      text: "Receive your detailed water testing report on WhatsApp within 5 working days.",
      color: "bg-cyan-500",
    },
    {
      title: "Member Benefits",
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "WAPTAI members enjoy concessional pricing for all laboratory services.",
      color: "bg-blue-700",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-[90px] font-black text-slate-100 opacity-30 select-none">
              LAB
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-blue-50 border border-blue-100">
                <Beaker size={14} className="text-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                  WAPTAI Exclusive
                </span>
              </div>

              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                Pure Water
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Starts with Testing
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 relative">
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

                {testingHighlights.map((item, i) => (
                  <div
                    key={i}
                    className={`group p-6 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl ${
                      i % 2 !== 0 ? "sm:mt-10" : ""
                    }`}
                  >
                    <div
                      className={`w-11 h-11 ${item.color} text-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition`}
                    >
                      {item.icon}
                    </div>

                    <h4 className="font-bold text-slate-800 text-lg mb-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {item.text}
                    </p>

                    <div className="flex items-center text-blue-600 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[48px] rotate-3 scale-95 opacity-5 group-hover:rotate-2 transition-transform duration-500" />

            <div className="relative z-10 rounded-[44px] overflow-hidden border-[12px] border-white shadow-xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000"
                alt="Water Testing Laboratory"
                className="w-full h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white">
                <p className="text-blue-600 font-bold text-xs mb-1">
                  Laboratory Location
                </p>
                <h3 className="text-slate-900 font-extrabold text-lg leading-snug mb-2">
                  808 Times Square Arcade,
                  <br />
                  Thaltej, Ahmedabad
                </h3>

                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="font-bold text-green-600">
                    ● 9974152635
                  </span>
                  <span>|</span>
                  <span className="underline cursor-pointer">
                    Contact for Guidelines
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
      </div>
    </section>
  );
};

export default WaterTesting;
