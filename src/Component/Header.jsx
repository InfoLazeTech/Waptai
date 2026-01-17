import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa";
// import logo from "../assets/logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navStyles = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 tracking-wide
     ${isActive
            ? "bg-[#1c87c9] text-white shadow-md scale-105"
            : "text-slate-700 hover:bg-blue-50 hover:text-[#1c87c9]"
        }`;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-none py-1" 
                    : "bg-white py-3" 
                }`}
        >
            <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">

                    {/* LOGO SECTION */}
                    <NavLink to="/" className="flex items-center group">
                        <img
                            //   src={logo}
                            alt="WAPTAG Logo"
                            className={`transition-all duration-500 object-contain ${isScrolled ? "h-14 w-auto" : "h-16 lg:h-20 w-auto"
                                }`}
                        />
                        <div className="ml-5 flex flex-col border-l-2 border-blue-500/30 pl-5 py-1">
                            <span className="text-[#1c87c9] font-black text-lg lg:text-xl leading-none tracking-tight">
                                WAPTAI
                            </span>
                            <span className="text-slate-500 font-bold text-[10px] lg:text-[11px] leading-tight tracking-[0.15em] mt-1 uppercase">
                                Water Purification & Treatment <br /> Association of India
                            </span>
                        </div>
                    </NavLink>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-2 text-[13px] font-bold">
                        <NavLink to="/" className={navStyles}>HOME</NavLink>

                        {[
                            { name: "ABOUT US", path: "/about-us" },
                            { name: "COMMITTEE", path: "/committee" },
                            { name: "E-MAGAZINE", path: "/e-magazine" },
                            { name: "FACILITIES", path: "/facilities" },
                        ].map((item) => (
                            <NavLink key={item.name} to={item.path} className={navStyles}>
                                {item.name}
                            </NavLink>
                        ))}

                        {/* DROP-DOWN ACTIVITIES */}
                        <div className="relative group py-2">
                            <button className="px-4 py-2 flex items-center gap-2 text-slate-700 group-hover:text-[#1c87c9] transition-colors">
                                ACTIVITIES
                                <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                            </button>

                            {/* Invisible bridge to prevent menu closing on hover move */}
                            <div className="absolute top-full left-0 w-full h-4"></div>

                            <div className="absolute top-[calc(100%+10px)] left-0 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                                <div className="p-2 grid gap-1">
                                    {[
                                        "Exhibition", "IAPMO", "Seminar",
                                        "Convention", "Legal Assistance", "Celebration"
                                    ].map((item) => (
                                        <NavLink
                                            key={item}
                                            to={`/${item.toLowerCase().replace(" ", "-")}`}
                                            className="px-4 py-3 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-[#1c87c9] font-medium transition-colors"
                                        >
                                            {item}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/expo-2026" className={navStyles}>EXPO 2026</NavLink>

                        <NavLink
                            to="/contact-us"
                            className="ml-6 bg-[#1c87c9] text-white px-8 py-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md"
                        >
                            CONTACT US
                        </NavLink>
                    </nav>

                    <button className="lg:hidden p-2 text-[#1c87c9] hover:bg-blue-50 rounded-lg transition-colors">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;