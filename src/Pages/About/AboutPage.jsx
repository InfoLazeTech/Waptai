import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Eye, Globe, Shield, Award, CheckCircle2,
    Waves, Microscope, Factory, PhoneCall, Handshake, Zap
} from 'lucide-react';
import img from '../../assets/aboutwater.png'

const AboutPage = () => {
    const primaryBlue = "text-[#0d47a1]";
    const accentBlue = "text-[#0288d1]";
    const lightBg = "bg-[#e3f2fd]";

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const timelineData = [
        { year: "2008", title: "The Inception", desc: "Started as a small collective of 50 water treatment engineers in Gujarat with a vision to standardize purification." },
        { year: "2014", title: "National Expansion", desc: "Officially registered as WAPTAI. Launched the first pan-India networking summit for manufacturers." },
        { year: "2019", title: "R&D Integration", desc: "Partnered with global labs to bring cutting-edge membrane technology to Indian SMEs." },
        { year: "2022", title: "Digital Ecosystem", desc: "Launched our digital member portal, connecting 400+ active members in a real-time knowledge exchange." },
        { year: "2025", title: "Global Excellence", desc: "Reaching a milestone of 500+ members and pioneering sustainable zero-liquid discharge initiatives." }
    ];

    return (
        <div className="bg-white font-sans antialiased overflow-x-hidden">

            <section className={`relative h-screen ${lightBg} overflow-hidden`}>
                {/* Background images */}
                <div
                    className="absolute inset-0 z-0 opacity-30 mix-blend-multiply"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=2000')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#e3f2fd]/60 via-transparent to-white" />

                {/* Floating motion element */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-blue-400 rounded-full blur-[100px] opacity-20 z-0"
                />

                {/* Centered content */}
                <div className="container mx-auto px-6 relative z-20 h-full flex flex-col items-center justify-center text-center">
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
                            The WAPTAI Legacy
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`text-4xl md:text-6xl font-black ${primaryBlue} mb-6 leading-[1.1] tracking-tight`}
                    >
                        Leading the Flow <br />
                        <motion.span
                            className="inline-block relative"
                            animate={{ color: ['#0288d1', '#0d47a1', '#0288d1'] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            of Water Innovation
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        India's most trusted ecosystem for <span className="text-blue-700 font-bold">Water Purification</span> professionals,
                        uniting industry leaders through advanced technology.
                    </motion.p>
                </div>
            </section>


            <section className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                            className="lg:w-1/2 space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="h-1.5 w-24 bg-gradient-to-r from-[#0288d1] to-[#0d47a1] rounded-full"></motion.div>
                            <motion.h2 variants={fadeInUp} className={`text-4xl md:text-5xl font-extrabold ${primaryBlue} leading-tight`}>
                                A Decade of <span className={accentBlue}>Global Excellence</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed">
                                We connect high-level manufacturers with cutting-edge R&D networks
                                to ensure India remains at the forefront of water technology.
                            </motion.p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[{ icon: <Factory />, label: "Manufacturers" }, { icon: <Microscope />, label: "Innovators" }].map((item, i) => (
                                    <motion.div
                                        key={i} variants={fadeInUp} whileHover={{ y: -10 }}
                                        className="p-6 bg-[#e3f2fd]/40 rounded-2xl border border-[#e3f2fd] hover:bg-white transition-all cursor-default"
                                    >
                                        <div className={`${accentBlue} mb-4`}>{React.cloneElement(item.icon, { size: 32 })}</div>
                                        <h4 className={`text-lg font-bold ${primaryBlue}`}>{item.label}</h4>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="w-full md:w-3/4 lg:w-1/2 relative"
                        >
                            <div className="w-full max-w-[90rem] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 md:border-12 border-white">
                                <img
                                    src={img}
                                    alt="Plant"
                                    className="w-full h-[15rem] lg:h-[25rem] object-cover"
                                />
                            </div>


                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-50 hidden md:block"
                            >
                                <p className={`text-4xl md:text-6xl font-black ${accentBlue}`}>500+</p>
                                <p className="text-slate-400 font-black uppercase text-xs mt-2">Active Members</p>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className={`py-28 ${lightBg}`}>
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-12 rounded-[3rem] shadow-sm border border-white"
                        >
                            <Target size={36} className={`${accentBlue} mb-8`} />
                            <h3 className={`text-3xl font-black ${primaryBlue} mb-6`}>OUR MISSION</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">To provide a premium platform where the industry converges to solve complex challenges in purification and industrial sustainability.</p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                            className="bg-[#0d47a1] p-12 rounded-[3rem] shadow-2xl text-white overflow-hidden relative"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-10">OUR VISION</h3>
                                <ul className="space-y-6">
                                    {["Global Leadership", "Single-roof Solutions", "Ethical Exchange"].map((text, i) => (
                                        <motion.li
                                            key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}
                                            className="flex items-center gap-4 text-lg font-bold"
                                        >
                                            <CheckCircle2 size={20} className="text-blue-300" /> {text}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 opacity-5"
                            ><Eye size={250} /></motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`text-4xl md:text-5xl font-black ${primaryBlue}`}
                        >
                            Our <span className={accentBlue}>Journey</span>
                        </motion.h2>
                        <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e3f2fd] via-[#0288d1] to-[#e3f2fd] hidden md:block" />

                        <div className="space-y-16 md:space-y-0">
                            {timelineData.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className={`flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="md:w-[45%] w-full">
                                        <div className={`p-8 rounded-[2rem] bg-white shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow ${i % 2 === 0 ? "md:text-right" : "md:text-left"
                                            }`}>
                                            <span className={`text-3xl font-black ${accentBlue}`}>{item.year}</span>
                                            <h4 className={`text-xl font-extrabold ${primaryBlue} mt-2 mb-3`}>{item.title}</h4>
                                            <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 my-6 md:my-0">
                                        <div className="w-8 h-8 rounded-full bg-white border-4 border-[#0288d1] shadow-lg animate-pulse" />
                                    </div>

                                    <div className="md:w-[45%] hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={`relative py-28 ${lightBg} overflow-hidden`}>
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0288d1 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className={`${accentBlue} font-black tracking-widest uppercase text-sm`}>Our Foundation</span>
                        <h2 className={`text-4xl md:text-5xl font-black ${primaryBlue} mt-4 mb-6`}>Core Pillars</h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#0288d1] to-[#0d47a1] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Globe />, title: "Global Reach", desc: "Expanding Indian water technology to international markets and global forums." },
                            { icon: <Award />, title: "Authority", desc: "Setting the gold standard for purification certifications and technical expertise." },
                            { icon: <Shield />, title: "Protection", desc: "Advocating for the rights and sustainable growth of water entrepreneurs." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-1 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0288d1] to-transparent opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity duration-500" />

                                <div className="relative bg-white p-10 rounded-[2.9rem] h-full flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-blue-100 rounded-2xl scale-125 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className={`relative w-20 h-20 ${lightBg} rounded-3xl flex items-center justify-center ${accentBlue} transform group-hover:rotate-[10deg] transition-transform duration-500`}>
                                            {React.cloneElement(item.icon, { size: 36 })}
                                        </div>
                                    </div>

                                    <h4 className={`text-2xl font-black ${primaryBlue} mb-4 tracking-tight`}>{item.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>

                                    <div className="mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-[#0288d1] transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutPage
