import React from 'react';

const Exhibitors = () => {
  const logos = [
    { name: 'WaterTech', url: 'https://via.placeholder.com/150x80?text=LOGO+1' },
    { name: 'PureFlow', url: 'https://via.placeholder.com/150x80?text=LOGO+2' },
    { name: 'AquaSys', url: 'https://via.placeholder.com/150x80?text=LOGO+3' },
    { name: 'HydroPro', url: 'https://via.placeholder.com/150x80?text=LOGO+4' },
    { name: 'CleanH2O', url: 'https://via.placeholder.com/150x80?text=LOGO+5' },
    { name: 'BlueWave', url: 'https://via.placeholder.com/150x80?text=LOGO+6' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[12rem] font-black text-slate-50 select-none -z-0 leading-none opacity-40">
        WAPTAG
      </div>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-[#1c87c9]"></span>
            <span className="text-[#1c87c9] font-black text-xs tracking-[0.3em] uppercase">
              Global Network
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-6">
            Our Past <span className="text-slate-400 font-medium">Exhibitors</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            We take pride in our long-standing relationships with industry giants. 
            Join over <span className="text-[#1c87c9] font-bold">500+ leaders</span> who trust WAPTAG 
            to showcase their latest water treatment innovations.
          </p>
        </div>

        {/* LOGO GRID - Clean & Modern */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
          {[...logos, ...logos].slice(0, 12).map((logo, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center p-10 border border-slate-50 bg-white hover:bg-slate-50 transition-all duration-300"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          ))}
        </div>

        {/* FLOATING STATS BAR - Glassmorphic Style */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-[#1c87c9] blur-[100px] opacity-10 rounded-full"></div>
          <div className="relative bg-white border border-slate-100 p-2 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 px-4">
              {[
                { label: 'Exhibitors', val: '1500+' },
                { label: 'Exhibition Area', val: '10k sq.m' },
                { label: 'Visitors', val: '50k+' },
                { label: 'Countries', val: '12+' },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-1 border-r last:border-0 border-slate-100">
                  <p className="text-3xl font-black text-slate-800 tracking-tighter">
                    {stat.val}
                  </p>
                  <p className="text-[10px] font-black text-[#1c87c9] uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Link */}
        <div className="mt-12 text-center">
            <button className="text-sm font-black text-slate-400 hover:text-[#1c87c9] transition-colors tracking-widest uppercase flex items-center justify-center gap-3 mx-auto">
                View All Partners
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Exhibitors;