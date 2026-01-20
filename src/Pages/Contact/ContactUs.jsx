import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ChevronRight } from 'lucide-react';

const ContactUs = () => {
    const primaryBlue = "text-[#0d47a1]";
    const accentBlue = "text-[#0288d1]";
    const lightBg = "bg-[#e3f2fd]";
    const [showMap, setShowMap] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="bg-white min-h-screen font-sans">
            <section className={`pt-32 pb-20 ${lightBg} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0288d1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-100 shadow-lg backdrop-blur-md mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
                        </span>
                        <span className={`${primaryBlue} text-[11px] font-black tracking-[0.15em] uppercase`}>
                            Get In Touch
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-5xl md:text-6xl font-black ${primaryBlue} mt-4 mb-6`}
                    >
                        Let's Start a <br /> <span className={accentBlue}>Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Have questions about WAPTAI membership or water technology? Our experts are here to help you navigate the flow.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 -mt-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: <Phone />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon-Sat, 9am - 6pm" },
                                { icon: <Mail />, title: "Email Us", detail: "info@waptai.com", sub: "24/7 Online Support" },
                                { icon: <MapPin />, title: "Visit Us", detail: "Ahmedabad, Gujarat", sub: "Water Tech Hub, India" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:border-blue-100 transition-all group"
                                >
                                    <div className={`w-14 h-14 ${lightBg} rounded-2xl flex items-center justify-center ${accentBlue} mb-6 group-hover:scale-110 transition-transform`}>
                                        {React.cloneElement(item.icon, { size: 28 })}
                                    </div>
                                    <h4 className={`text-xl font-black ${primaryBlue} mb-2`}>{item.title}</h4>
                                    <p className="text-slate-800 font-bold">{item.detail}</p>
                                    <p className="text-slate-400 text-sm mt-1">{item.sub}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <MessageSquare size={200} className={primaryBlue} />
                            </div>

                            <form className="relative z-10 grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                    <input type="text" placeholder="Enter Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <input type="email" placeholder="Enter Email Address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-black text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none">
                                        <option>Membership Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Event Registration</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-black text-slate-400 uppercase tracking-wider ml-1">Message</label>
                                    <textarea rows="4" placeholder="Enter Message" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 bg-[#0d47a1] text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 flex items-center justify-center gap-3 transition-all hover:bg-[#0288d1]"
                                    >
                                        Send Message <Send size={20} />
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-200"
                    >
                        {!showMap ? (
                            <div
                                className="absolute inset-0 cursor-pointer group"
                                onClick={() => setShowMap(true)}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                                    alt="Map Preview"
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[#0d47a1]/40 flex flex-col items-center justify-center text-white p-6 text-center">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0288d1] shadow-2xl mb-6"
                                    >
                                        <MapPin size={40} />
                                    </motion.div>
                                    <h3 className="text-3xl font-black mb-2 tracking-tight">Visit Our Office</h3>
                                    <p className="text-white/80 font-medium mb-8">Ahmedabad, Gujarat, India</p>
                                    <button className="bg-white text-[#0d47a1] px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-blue-50 transition-colors">
                                        Click to Load Map
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                title="Location Map"
                                // src={mapEmbedUrl}
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        )}
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 space-y-4 md:space-y-0">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${lightBg} rounded-full flex items-center justify-center ${accentBlue}`}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className={`font-black ${primaryBlue} uppercase text-sm`}>Headquarters</p>
                                <p className="text-slate-500 text-sm">Industrial Hub, Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                        <button
                            onClick={() => window.open("https://maps.google.com", "_blank")}
                            className="flex items-center gap-2 text-slate-400 font-black uppercase text-xs tracking-[0.2em] hover:text-[#0288d1] transition-colors"
                        >
                            Open in Google Maps <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;