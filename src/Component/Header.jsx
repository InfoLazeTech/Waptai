import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/waptailogo.jpg";
import { tabs } from "../Pages/Event/eventsData.js";

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyles = ({ isActive }) =>
    `px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 tracking-wide
    ${
      isActive
        ? "bg-[#1c87c9] text-white shadow-md scale-105"
        : "text-slate-700 hover:bg-blue-50 hover:text-[#1c87c9]"
    }`;

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "COMMITTEE", path: "/committee" },
    { name: "MEMBERSHIP", path: "/membarship" },
  ];

  const activityItems = [
    { name: "Facilities", path: "/facilities" },
    { name: "Exhibition", path: "/exhibition" },
    { name: "IAPMO", path: "/IAPMO" },
    { name: "Seminar", path: "/Seminar" },
    { name: "Convention", path: "/Convention" },
    { name: "Legal Assistance", path: "/Legal-Assistance" },
    { name: "Celebration", path: "/Celebration" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 shadow-md ${
        isScrolled ? "bg-white py-3 max-md:py-2" : "bg-white py-4 max-md:py-2"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-5">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center group">
            <img
              src={logo}
              alt="WAPTAI Logo"
              className={`transition-all duration-500 object-contain ${
                isScrolled
                  ? "h-20 lg:h-20 md:h-16 sm:h-14"
                  : "h-16 lg:h-20 md:h-16 sm:h-14"
              }`}
            />
<div className="logo-text ml-4 flex flex-col border-l-2 border-blue-500/30 pl-4 py-1">
  <span className="text-[#1c87c9] font-black text-lg max-sm:text-base leading-none tracking-tight">
    WAPTAI
  </span>
  <span className="text-slate-500 font-bold text-[10px] max-sm:text-[9px] leading-tight tracking-[0.12em] mt-1 uppercase">
    Water Purification & Treatment <br />
    Association <span className="font-bold">(India)</span>
  </span>
</div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[12px] 2xl:text-[13px] font-bold whitespace-nowrap">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={navStyles}>
                {item.name}
              </NavLink>
            ))}

            {/* EVENTS */}
            <div className="relative group">
              <button className="px-3 xl:px-4 py-2 flex items-center gap-2 text-slate-700 hover:text-[#1c87c9]">
                EVENTS
                <FaChevronDown className="text-[10px] group-hover:rotate-180 transition" />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 
                w-[910px] max-2xl:w-[800px] max-xl:w-[95vw] 
                bg-white rounded-xl shadow-lg border px-6 py-6 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-[999]">

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
                  {tabs.map((event, index) => (
                    <NavLink
                      key={event.name}
                      to={`/event/${createSlug(event.name)}`}
                      onClick={() => setClickedIndex(index)}
                      className="block group/item"
                    >
                      <div className="flex justify-between items-center pb-1">
                        <p className="text-xs text-gray-700 group-hover/item:text-sky-600">
                          {event.name}
                        </p>

                        <svg
                          className="w-3 h-3 text-gray-400 group-hover/item:translate-x-1 group-hover/item:text-sky-600 transition"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <span className={`block h-[1px] bg-sky-600 transition-all ${
                        clickedIndex === index ? "w-full" : "w-0 group-hover/item:w-full"
                      }`} />
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* OFFERINGS */}
            <div className="relative group">
              <button
                onClick={() => setActivitiesOpen(!activitiesOpen)}
                className="px-3 xl:px-4 py-2 flex items-center gap-2 text-slate-700 hover:text-[#1c87c9]"
              >
                WAPTAI OFFERINGS
                <FaChevronDown className="text-[10px] group-hover:rotate-180 transition" />
              </button>

              <div className={`absolute top-full mt-2 left-0 w-64 bg-white rounded-xl shadow-lg border transition-all ${
                activitiesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}>
                {activityItems.map((item) => (
                  <NavLink key={item.name} to={item.path} className="block px-4 py-3 hover:bg-blue-50">
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/expo-2026" className={navStyles}>EXPO 2026</NavLink>
            <NavLink to="/contact-us" className={navStyles}>CONTACT US</NavLink>

            <NavLink
              to="/waptai-member"
              className="ml-4 xl:ml-6 bg-[#1c87c9] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              BECOME WAPTAI MEMBER
            </NavLink>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-[#1c87c9]"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

     {/* MOBILE MENU */}
      <div className={`xl:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
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
                className="flex items-center justify-between text-slate-700 rounded-lg transition-all"
              >
                EVENTS
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-300 ${showEventsDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showEventsDropdown && (
                <div className="flex flex-col gap-1 mt-2 pl-4">
                  {tabs.map((event, index) => (
                    <NavLink
                      key={event.name}
                      // to={`/event/${index + 1}`}

                      to={`/event/${createSlug(event.name)}`}

                      onClick={() => {
                        setClickedIndex(index);       // freeze hover effect
                        setIsMenuOpen(false);         // close mobile menu
                        setShowEventsDropdown(false); // close dropdown
                      }}
                      className={`
            px-3 py-2 rounded-lg transition-all
            ${clickedIndex === index
                          ? "bg-blue-50 text-[#1c87c9]" // clicked option highlight
                          : "text-slate-700 hover:bg-blue-50 hover:text-[#1c87c9]"
                        }
          `}
                    >
                      {event.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>



            <div className="border-t pt-4">
              <p className="text-xs font-bold text-slate-400 mb-2">WAPTAI OFFERINGS</p>
              {activityItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <NavLink to="/expo-2026" onClick={() => setIsMenuOpen(false)}>
              EXPO 2026
            </NavLink>

            <NavLink
              to="/waptai-member"
              onClick={() => setIsMenuOpen(false)}
            >
              BECOME WAPTAI MEMBER
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