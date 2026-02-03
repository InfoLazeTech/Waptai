import React from 'react';
import { Users, Presentation, Coffee, Snowflake, CalendarCheck, Shield } from 'lucide-react';

const MainFacilities = () => {
  const features = [
    { title: "Conference Room", icon: <Users size={24} />, text: "Spacious area for strategic board meetings." },
    { title: "Training Room", icon: <Presentation size={24} />, text: "Fully equipped for educational workshops." },
    { title: "Meeting Room", icon: <Coffee size={24} />, text: "Professional space for private discussions." },
    { title: "Air Conditioned", icon: <Snowflake size={24} />, text: "Premium climate-controlled environment." },
    { title: "Flexible Booking", icon: <CalendarCheck size={24} />, text: "Easy scheduling for date and time." },
    { title: "Modern Amenities", icon: <Shield size={24} />, text: "Fully furnished with high-speed facilities." },
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Infrastructure</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              World Class <span className="text-blue-700">Facilities</span> for WAPTAI Members
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Members of <span className="font-bold text-slate-900">WAPTAI</span> can utilize our premium rooms with enthusiasm for their business growth. We provide a modern, air-conditioned facility equipped for your every professional need.
            </p>
          </div>
          <button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_10px_20px_rgba(30,64,175,0.2)] hover:shadow-none transform hover:translate-y-1 whitespace-nowrap">
            BOOK YOUR STALL NOW
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Modern Image Composition */}
          <div className="lg:col-span-5 relative min-h-[500px]">
            <div className="absolute inset-0 bg-blue-200 rounded-[40px] rotate-3 -z-10"></div>
            <div className="h-full w-full overflow-hidden rounded-[40px] border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1000" 
                alt="WAPTAI Office Facility" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Info Tag */}
            <div className="absolute bottom-10 -right-4 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-blue-50">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="font-bold text-slate-800">Available Today</span>
               </div>
               <p className="text-sm text-slate-500">All WAPTAI members are requested to utilize these facilities for their convenience.</p>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white hover:border-blue-300 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Guidance */}
        {/* <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium">
              Want more information? <span className="text-blue-600 underline cursor-pointer">Notify us with your date and time for usage.</span>
            </p>
        </div> */}

      </div>
    </div>
  );
};

export default MainFacilities;