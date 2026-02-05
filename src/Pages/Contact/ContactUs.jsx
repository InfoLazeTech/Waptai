import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronRight } from 'lucide-react';

const ContactUs = () => {
    const primaryBlue = "text-[#0d47a1]";
    const accentBlue = "text-[#0288d1]";
    const lightBg = "bg-[#f8fbff]"; // Slightly softer blue-white
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800">
            {/* --- Hero Section --- */}
            <section className={`pt-32 pb-16 ${lightBg} border-b border-slate-100  bg-gradient-to-br from-sky-100 via-white to-sky-50 relative overflow-hidden`}>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-50 shadow-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
                        </span>
                        <span className={`${primaryBlue} text-[10px] font-bold tracking-[0.1em] uppercase`}>
                            Contact Support
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-3xl md:text-5xl font-extrabold ${primaryBlue} tracking-tight leading-tight mb-4`}
                    >
                        How can we <span className={accentBlue}>help you?</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
                    >
                        Have questions about WAPTAI membership or water technology? 
                        Our team typically responds within 24 business hours.
                    </motion.p>
                </div>
            </section>

            {/* --- Main Content --- */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">

                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-4">
                            {[
                                { icon: <Phone />, title: "Call Us", detail: "+91 99741 52935 / 99741 52936", sub: "Mon-Sat, 9am - 6pm" },
                                { icon: <Mail />, title: "Email Us", detail: "waptaiassociation@gmail.com", sub: "Online Support" },
                                { icon: <MapPin />, title: "Visit Us", detail: "Office No. 808, 8th Floor, Time Square Arcade, Opp- Rambaug, Nr. Ravija Plaza, Thaltej-Shilaj Road, Thaltej, Ahmedabad - 380059", sub: "Water Tech Hub, India" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-5"
                                >
                                    <div className={`w-10 h-10 shrink-0 ${lightBg} rounded-xl flex items-center justify-center ${accentBlue}`}>
                                        {React.cloneElement(item.icon, { size: 20 })}
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold uppercase tracking-wide ${primaryBlue} mb-1`}>{item.title}</h4>
                                        <p className="text-slate-900 font-semibold text-sm">{item.detail}</p>
                                        <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative"
                        >
                            <div className="flex items-center gap-3 mb-8 border-b border-slate-50 pb-4">
                                <MessageSquare className={accentBlue} size={24} />
                                <h3 className="text-xl font-bold text-slate-800">Send a Message</h3>
                            </div>

                            <form className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm" placeholder="john@example.com" />
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm appearance-none">
                                        <option>Membership Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Event Registration</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none text-sm" placeholder="How can we help you?"></textarea>
                                </div>
                                <div className="md:col-span-2 pt-2">
                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full py-4 bg-[#0d47a1] text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 hover:bg-[#1565c0] transition-all"
                                    >
                                        Send Message <Send size={16} />
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Map Section --- */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100"
                    >
                      {!showMap ? (
  <div
    className="absolute inset-0 cursor-pointer group"
    onClick={() => setShowMap(true)}
  >
    <img
      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
      alt="Map"
      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
    />

    <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/20 backdrop-blur-[2px]">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0d47a1] shadow-lg mb-3">
        <MapPin size={24} />
      </div>
      <p className="text-white font-bold text-sm bg-blue-900/40 px-4 py-1.5 rounded-full">
        Click to view location
      </p>
    </div>
  </div>
) : (
 <iframe
  title="Google Map Location"
  src="https://www.google.com/maps?q=23.049816569744454, 72.50134077041604&z=17&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

)}

                    </motion.div>

                    <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-3">
                            <div className="text-slate-400"><MapPin size={18} /></div>
                            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Industrial Hub, Ahmedabad, Gujarat</p>
                        </div>
                        <button className="text-[#0288d1] font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:underline">
                            Get Directions <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;