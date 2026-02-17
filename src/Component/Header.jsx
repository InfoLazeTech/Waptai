import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/waptailogo.jpg";
import { tabs } from "../Pages/Event/eventsData.js";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false); // Mobile events dropdown


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

  // Menu items
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "COMMITTEE", path: "/committee" },

    // { name: "E-MAGAZINE", path: "/e-magazine" },
    { name: "FACILITIES", path: "/facilities" },

  ];

  const activityItems = [
    "Exhibition",
    "IAPMO",
    "Seminar",
    "Convention",
    "Legal Assistance",
    "Celebration",
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 rounded-br-4xl rounded-bl-4xl shadow-md ${isScrolled ? "bg-white shadow-md py-3" : "bg-white py-3"}`}
    >
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center group">
            <img
              src={logo}
              alt="WAPTAI Logo"
              className={`transition-all duration-500 object-contain ${isScrolled ? "h-20 w-auto" : "h-16 lg:h-20 w-auto"}`}
            />
            <div className="ml-5 flex flex-col border-l-2 border-blue-500/30 pl-5 py-1">
              <span className="text-[#1c87c9] font-black text-lg lg:text-xl leading-none tracking-tight">
                WAPTAI
              </span>
              <span className="text-slate-500 font-bold text-[10px] lg:text-[11px] leading-tight tracking-[0.15em] mt-1 uppercase">
                Water Purification & Treatment <br /> Association <span className="font-extrabold">(India)</span>
              </span>
            </div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex md:whitespace-nowrap items-center gap-2 text-[13px] font-bold">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={navStyles}>
                {item.name}
              </NavLink>
            ))}

            {/* EVENTS DROPDOWN */}
<div className="relative group">
  <button
    className="px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 tracking-wide
      text-slate-700 hover:bg-blue-50 hover:text-[#1c87c9]"
  >
    EVENTS
    <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
  </button>
  {/* Dropdown */}
  <div
    className="
    absolute left-1/2 -translate-x-1/2
    top-full mt-3
    w-[910px]
    bg-white
    rounded-xl
    shadow-lg
    border border-gray-200
    px-8 py-8
    opacity-0 invisible
    group-hover:opacity-100
    group-hover:visible
    transition-all duration-200
    z-[999]
  "
  >

    <div className="grid grid-cols-3 gap-x-10 gap-y-5">

      {tabs.map((event, index) => (
        <NavLink
          key={event.name}
          to={`/event/${index + 1}`}
          className="block group/item"
        >
          <div className="flex items-center justify-between pb-1">

            {/* Text */}
            <p className="
              text-xs
              text-gray-700
              font-medium
              leading-snug
              whitespace-normal
              break-words
              transition
              group-hover/item:text-sky-600
            ">
              {event.name}
            </p>

            {/* Arrow */}
            <svg
              className="
              w-3 h-3
              text-gray-400
              ml-2
              transition-all
              duration-300
              group-hover/item:translate-x-1
              group-hover/item:text-sky-600
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>

          </div>

          {/* Hover Line */}
          <span
            className="
            block
            h-[1px]
            w-0
            bg-sky-600
            transition-all
            duration-300
            group-hover/item:w-full
          "
          ></span>

        </NavLink>
      ))}

    </div>

  </div>
</div>




            {/* DROP-DOWN ACTIVITIES */}
            <div className="relative group py-2">
              <button
                onClick={() => setActivitiesOpen(!activitiesOpen)}
                onMouseLeave={() => setActivitiesOpen(false)}
                className="px-4 py-2 flex items-center gap-2 text-slate-700 hover:text-[#1c87c9] transition-colors"

              >

                ACTIVITIES
                <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-[calc(100%+10px)] left-0 w-64 bg-white border border-slate-100
  rounded-2xl shadow-2xl overflow-hidden transition-all duration-300
  ${activitiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}
  md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0
lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
`}
              >
                <div className="p-2 grid gap-1">
                  {activityItems.map((item) => (
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
              className="ml-6 bg-[#1c87c9] text-white md:px-8 md:py-3 md:whitespace-nowrap  rounded-full hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-md"
            >
              CONTACT US
            </NavLink>
          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1c87c9] hover:bg-blue-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      >
     <div
  onClick={(e) => e.stopPropagation()}
  className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 transition-transform duration-300
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    overflow-y-auto max-h-screen
  `}
>

          <nav className="flex flex-col gap-4 font-semibold text-slate-700 text-sm">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </NavLink>
            ))}
        {/* MOBILE EVENTS DROPDOWN */}
            <div className="flex flex-col">
              <button
                onClick={() => setShowEventsDropdown(!showEventsDropdown)}
                className="flex items-center justify-between  py-2 text-slate-700 rounded-lg hover:bg-blue-50 hover:text-[#1c87c9] transition-all"
              >
                EVENTS
                <FaChevronDown className={`text-[10px] transition-transform duration-300 ${showEventsDropdown ? "rotate-180" : ""}`} />
              </button>
              {showEventsDropdown && (
                <div className="flex flex-col gap-1 mt-2 pl-4">
                  {tabs.map((event, index) => (
                    <NavLink
                      key={event.name}
                      to={`/event/${index + 1}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-[#1c87c9] transition-all"
                    >
                      {event.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>


            <div className="border-t pt-4">
              <p className="text-xs font-bold text-slate-400 mb-2">ACTIVITIES</p>
              {activityItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  {item}
                </NavLink>
              ))}
            </div>

            <NavLink to="/expo-2026" onClick={() => setIsMenuOpen(false)}>
              EXPO 2026
            </NavLink>

            <NavLink
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-[#1c87c9] text-white text-center py-3 rounded-full"
            >
              CONTACT US
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
