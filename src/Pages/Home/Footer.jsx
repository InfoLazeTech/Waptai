import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden pt-20 pb-10">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1c87c9] to-transparent opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#1c87c9]/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-2xl font-black tracking-tight leading-none">WAPTAI</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Water Association of India</p>
              </div>
            </div>
            
            <p className="text-white text-sm leading-relaxed max-w-sm font-medium">
              A collective of water industry professionals and experts, fostering 
              collaboration and innovation in water purification, treatment, and 
              filtration management across India.
            </p>

            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaInstagram />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white hover:bg-[#1c87c9] hover:text-white transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#1c87c9]">Company</h4>
            <ul className="space-y-4 text-sm font-bold ">
              <li><NavLink to="/about-us" className="text-white transition-colors">About WAPTAI</NavLink></li>
              <li><NavLink to="/committee" className="text-white transition-colors">Our Committee</NavLink></li>
              <li><NavLink to="/e-magazine" className="text-white transition-colors">E-Magazine</NavLink></li>
              <li><NavLink to="/facilities" className="text-white transition-colors">Facilities</NavLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#1c87c9]">Programs</h4>
            <ul className="space-y-4 text-sm font-bold ">
              <li><NavLink to="/exhibition" className="text-white transition-colors">WAPTAG Expo</NavLink></li>
              <li><NavLink to="/iapmo" className="text-white transition-colors">IAPMO</NavLink></li>
              <li><NavLink to="/seminar" className="text-white transition-colors">Seminars</NavLink></li>
              <li><NavLink to="/expo-2026" className="text-white transition-colors">Expo 2026</NavLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#1c87c9]">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#1c87c9]" />
                <p className="text-sm  font-medium leading-relaxed">
                  Office No. 808, 8th Floor, Time Square Arcade, <br />
                  Opp- Rambaug, Nr. Ravija Plaza, Thaltej, <br />
                  Ahmedabad - 380059
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#1c87c9]" />
                <p className="text-sm  font-bold">+91 99741 52935 / 52936</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#1c87c9]" />
                <p className="text-sm  font-bold">waptaiindia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-600 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold  uppercase tracking-widest">
            © 2026 WAPTAI Association. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;